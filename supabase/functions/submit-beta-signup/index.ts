import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@4.0.0";

// Strict CORS - only these origins are allowed
const ALLOWED_ORIGINS = [
  'https://optibayai.com',
  'https://www.optibayai.com',
  'http://localhost:5173',
  'http://localhost:8080',
];

function isOriginAllowed(origin: string | null): boolean {
  if (!origin) return false;
  // Allow exact matches or any .lovable.app subdomain
  return ALLOWED_ORIGINS.includes(origin) || origin.endsWith('.lovable.app');
}

function getCorsHeaders(origin: string) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
}

// Validation schema matching client-side
interface BetaSignupData {
  name: string;
  email: string;
  shop_name: string;
  phone?: string;
  role: string;
  shop_size: number;
  country: string;
  notes?: string;
  honeypot?: string;
  timezone: string;
}

// Rate limiting configuration
const RATE_LIMIT_MAX_ATTEMPTS = 3;
const RATE_LIMIT_WINDOW_HOURS = 1;

// Email notification function
async function sendNotificationEmail(signupData: BetaSignupData) {
  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  const notifyEmail = Deno.env.get('BETA_SIGNUP_NOTIFY_EMAIL');
  
  if (!resendApiKey || !notifyEmail) {
    console.warn('Email notification skipped: RESEND_API_KEY or BETA_SIGNUP_NOTIFY_EMAIL not configured');
    return;
  }

  const resend = new Resend(resendApiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: 'OptiBay Beta <no-reply@mail.optibayai.com>',
      to: [notifyEmail],
      subject: 'New OptiBay beta signup',
      text: `New beta signup received:

Name: ${signupData.name}
Email: ${signupData.email}
Shop: ${signupData.shop_name}
Phone: ${signupData.phone || 'Not provided'}
Role: ${signupData.role}
Shop size: ${signupData.shop_size}
Country: ${signupData.country}
Timezone: ${signupData.timezone}

Notes: ${signupData.notes || 'None'}`,
    });

    if (error) {
      console.error('Resend API error:', JSON.stringify(error));
      return;
    }
    
    console.log('Notification email sent successfully to:', notifyEmail, 'Email ID:', data?.id);
  } catch (error) {
    console.error('Failed to send notification email:', error);
  }
}

serve(async (req) => {
  // Check origin FIRST - reject disallowed origins with 403
  const origin = req.headers.get('origin');
  
  if (!isOriginAllowed(origin)) {
    console.log(`Rejected request from disallowed origin: ${origin}`);
    return new Response(
      JSON.stringify({ error: 'Forbidden' }),
      { status: 403, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const corsHeaders = getCorsHeaders(origin!);

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client with service role for admin operations
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for') || 
                     req.headers.get('x-real-ip') || 
                     'unknown';

    const data: BetaSignupData = await req.json();

    console.log('Beta signup request received from IP:', clientIP, 'Origin:', origin);

    // 1. HONEYPOT VALIDATION - reject if honeypot is filled
    if (data.honeypot && data.honeypot.trim() !== '') {
      console.warn('Bot detected - honeypot filled:', clientIP);
      return new Response(
        JSON.stringify({ error: 'Invalid submission' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 2. SERVER-SIDE INPUT VALIDATION
    const errors: string[] = [];

    if (!data.name || data.name.trim().length === 0 || data.name.length > 100) {
      errors.push('Name must be 1-100 characters');
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!data.email || !emailRegex.test(data.email) || data.email.length > 255) {
      errors.push('Valid email required (max 255 characters)');
    }

    if (!data.shop_name || data.shop_name.trim().length === 0 || data.shop_name.length > 200) {
      errors.push('Shop name must be 1-200 characters');
    }

    if (data.phone && data.phone.length > 50) {
      errors.push('Phone must be less than 50 characters');
    }

    if (!data.role || data.role.trim().length === 0) {
      errors.push('Role is required');
    }

    if (!data.shop_size || typeof data.shop_size !== 'number' || data.shop_size < 1 || data.shop_size > 1000) {
      errors.push('Shop size must be between 1 and 1000');
    }

    if (!data.country || data.country.trim().length === 0 || data.country.length > 100) {
      errors.push('Country must be 1-100 characters');
    }

    if (data.notes && data.notes.length > 1000) {
      errors.push('Notes must be less than 1000 characters');
    }

    if (!data.timezone || data.timezone.trim().length === 0) {
      errors.push('Timezone is required');
    }

    if (errors.length > 0) {
      console.warn('Validation errors:', errors);
      return new Response(
        JSON.stringify({ error: 'Validation failed', details: errors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 3. RATE LIMITING - Check attempts
    const { data: existingLimit, error: rateLimitCheckError } = await supabase
      .from('beta_signup_rate_limit')
      .select('*')
      .eq('ip_address', clientIP)
      .eq('email', data.email.toLowerCase())
      .single();

    if (rateLimitCheckError && rateLimitCheckError.code !== 'PGRST116') {
      console.error('Rate limit check error:', rateLimitCheckError);
    }

    if (existingLimit) {
      const hoursSinceFirst = (new Date().getTime() - new Date(existingLimit.first_attempt_at).getTime()) / (1000 * 60 * 60);
      
      if (hoursSinceFirst < RATE_LIMIT_WINDOW_HOURS && existingLimit.attempt_count >= RATE_LIMIT_MAX_ATTEMPTS) {
        console.warn('Rate limit exceeded:', clientIP, data.email);
        return new Response(
          JSON.stringify({ 
            error: 'Too many attempts. Please try again later.',
            retryAfter: Math.ceil(RATE_LIMIT_WINDOW_HOURS - hoursSinceFirst)
          }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Update rate limit counter
      if (hoursSinceFirst < RATE_LIMIT_WINDOW_HOURS) {
        await supabase
          .from('beta_signup_rate_limit')
          .update({
            attempt_count: existingLimit.attempt_count + 1,
            last_attempt_at: new Date().toISOString()
          })
          .eq('id', existingLimit.id);
      } else {
        // Reset if outside window
        await supabase
          .from('beta_signup_rate_limit')
          .update({
            attempt_count: 1,
            first_attempt_at: new Date().toISOString(),
            last_attempt_at: new Date().toISOString()
          })
          .eq('id', existingLimit.id);
      }
    } else {
      // Create new rate limit entry
      await supabase
        .from('beta_signup_rate_limit')
        .insert({
          ip_address: clientIP,
          email: data.email.toLowerCase(),
          attempt_count: 1
        });
    }

    // 4. CHECK FOR DUPLICATE EMAIL
    const { data: existingSignup } = await supabase
      .from('beta_signups')
      .select('email')
      .eq('email', data.email.toLowerCase())
      .single();

    if (existingSignup) {
      console.log('Duplicate email submission:', data.email);
      // Return success to prevent email enumeration
      return new Response(
        JSON.stringify({ 
          success: true,
          message: 'Thank you for your interest in the OptiBay experience. If selected for beta, you\'ll receive an email within 24 hours.'
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 5. INSERT BETA SIGNUP
    const { data: signup, error: insertError } = await supabase
      .from('beta_signups')
      .insert({
        name: data.name.trim(),
        email: data.email.toLowerCase().trim(),
        shop_name: data.shop_name.trim(),
        phone: data.phone?.trim() || null,
        role: data.role.trim(),
        shop_size: data.shop_size,
        country: data.country.trim(),
        notes: data.notes?.trim() || null,
        timezone: data.timezone.trim()
      })
      .select()
      .single();

    if (insertError) {
      console.error('Database insert error:', insertError);
      return new Response(
        JSON.stringify({ error: 'Failed to submit signup. Please try again.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Beta signup successful:', signup.id, data.email);

    // Send notification email to admin
    await sendNotificationEmail(data);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Thank you for your interest in the OptiBay experience. If selected for beta, you\'ll receive an email within 24 hours.'
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in submit-beta-signup:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred' }),
      { status: 500, headers: { ...getCorsHeaders(origin!), 'Content-Type': 'application/json' } }
    );
  }
});
