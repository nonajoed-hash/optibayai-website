import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

// Rate limit: 5 submissions per IP per hour
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_HOURS = 1;

// Valid subject options (must match client-side Contact.tsx)
const VALID_SUBJECTS = [
  "General Question",
  "Technical Support",
  "Billing",
  "Privacy or Data Request",
  "Other"
] as const;

// Strict CORS - only these origins are allowed
const ALLOWED_ORIGINS = [
  'https://optibayai.com',
  'https://www.optibayai.com',
  'http://localhost:5173',
  'http://localhost:8080',
];

function isOriginAllowed(origin: string | null): boolean {
  if (!origin) return false;
  return ALLOWED_ORIGINS.includes(origin) || 
         origin.endsWith('.lovable.app') || 
         origin.endsWith('.lovableproject.com');
}

function getCorsHeaders(origin: string) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
}

interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

function validateInput(data: unknown): { valid: true; data: ContactSubmission } | { valid: false; error: string } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Invalid request body' };
  }

  const { name, email, company, subject, message } = data as Record<string, unknown>;

  // Name validation
  if (typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
    return { valid: false, error: 'Name must be between 2 and 100 characters' };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof email !== 'string' || !emailRegex.test(email.trim()) || email.trim().length > 255) {
    return { valid: false, error: 'Invalid email address' };
  }

  // Company validation (optional)
  if (company !== undefined && company !== null && company !== '') {
    if (typeof company !== 'string' || company.trim().length > 100) {
      return { valid: false, error: 'Company name must be less than 100 characters' };
    }
  }

  // Subject validation
  if (typeof subject !== 'string' || !VALID_SUBJECTS.includes(subject as typeof VALID_SUBJECTS[number])) {
    return { valid: false, error: 'Invalid subject selected' };
  }

  // Message validation
  if (typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 2000) {
    return { valid: false, error: 'Message must be between 10 and 2000 characters' };
  }

  return {
    valid: true,
    data: {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company ? (company as string).trim() : undefined,
      subject: subject,
      message: message.trim(),
    }
  };
}

serve(async (req) => {
  const origin = req.headers.get('origin');
  
  // Check origin - reject disallowed origins
  if (!isOriginAllowed(origin)) {
    console.log(`Rejected request from disallowed origin: ${origin}`);
    return new Response(
      JSON.stringify({ error: 'Forbidden' }),
      { status: 403, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const corsHeaders = getCorsHeaders(origin!);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const body = await req.json();
    
    // Server-side validation
    const validation = validateInput(body);
    if (!validation.valid) {
      console.log('Validation failed:', validation.error);
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { name, email, company, subject, message } = validation.data;
    const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';

    // Initialize Supabase client with service role for bypassing RLS
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Rate limiting check
    const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_HOURS * 60 * 60 * 1000).toISOString();
    
    const { data: existingRateLimit, error: rateLimitFetchError } = await supabase
      .from('contact_rate_limit')
      .select('*')
      .eq('ip_address', clientIp)
      .gte('first_attempt_at', windowStart)
      .maybeSingle();

    if (rateLimitFetchError) {
      console.error('Rate limit fetch error:', rateLimitFetchError);
    }

    if (existingRateLimit && existingRateLimit.attempt_count >= RATE_LIMIT_MAX) {
      console.log(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Update or insert rate limit record
    if (existingRateLimit) {
      await supabase
        .from('contact_rate_limit')
        .update({
          attempt_count: existingRateLimit.attempt_count + 1,
          last_attempt_at: new Date().toISOString(),
        })
        .eq('id', existingRateLimit.id);
    } else {
      await supabase
        .from('contact_rate_limit')
        .insert({
          ip_address: clientIp,
          email: email,
          attempt_count: 1,
        });
    }

    // Insert contact submission into database
    const { error: insertError } = await supabase
      .from('contact_submissions')
      .insert({
        name,
        email,
        company: company || null,
        subject,
        message,
      });

    if (insertError) {
      console.error('Database insert error:', insertError);
      return new Response(
        JSON.stringify({ error: 'Failed to save submission. Please try again.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Send email notification
    const submittedAt = new Date().toLocaleString('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
      timeZone: 'UTC',
    });

    try {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Subject:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td>
            </tr>
          </table>
          
          <h3 style="color: #333; margin-top: 30px;">Message:</h3>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Submitted: ${submittedAt} UTC
          </p>
        </div>
      `;

      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'OptiBay AI Contact <no-reply@mail.optibayai.com>',
          to: ['support@optibayai.com'],
          subject: `[Contact Form] ${subject} from ${name}`,
          html: emailHtml,
        }),
      });

      if (emailResponse.ok) {
        console.log('Email notification sent successfully');
      } else {
        const errorText = await emailResponse.text();
        console.error('Email send failed:', errorText);
      }
    } catch (emailError) {
      // Log email error but don't fail the request - submission is already saved
      console.error('Email notification failed:', emailError);
    }

    console.log('Contact form submission successful');
    return new Response(
      JSON.stringify({ success: true, message: 'Thank you for your message. We\'ll get back to you soon!' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again or email us directly.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
