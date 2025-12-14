import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Target edge function in the OTHER project (OptiBay App)
const TARGET_ENDPOINT = 'https://gjujerdrkdxoeurzroog.supabase.co/functions/v1/submit-beta-signup';

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

  try {
    const body = await req.text();
    console.log('Proxying beta signup request to target endpoint');

    // Forward request server-to-server (no CORS issues)
    const proxyResponse = await fetch(TARGET_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Forward client IP for rate limiting on target
        'X-Forwarded-For': req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown',
      },
      body: body,
    });

    const responseText = await proxyResponse.text();
    console.log('Target response status:', proxyResponse.status);

    // Try to parse as JSON, otherwise return as-is
    let responseBody: string;
    try {
      JSON.parse(responseText);
      responseBody = responseText;
    } catch {
      console.error('Target returned non-JSON response:', responseText.substring(0, 200));
      responseBody = JSON.stringify({ 
        error: 'Target service unavailable',
        details: 'The beta signup service returned an unexpected response'
      });
      return new Response(responseBody, {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(responseBody, {
      status: proxyResponse.status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Proxy error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process signup request' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
