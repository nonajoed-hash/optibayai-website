/**
 * Backend Wiring Configuration
 * 
 * Derives project ref from the Supabase client's internal URL at runtime.
 * This bypasses environment variable injection issues in preview builds.
 */

import { supabase } from "@/integrations/supabase/client";

// Extract project ref from the supabase client's URL
const extractProjectRef = (): string => {
  // @ts-ignore - accessing internal supabase client property
  const url = supabase.supabaseUrl as string | undefined;
  
  if (!url) {
    console.error('Supabase URL is not available from client');
    return 'undefined';
  }
  
  const match = url.match(/https:\/\/([^.]+)\.supabase\.co/);
  return match?.[1] ?? 'undefined';
};

const SUPABASE_PROJECT_REF = extractProjectRef();

export const BACKEND_CONFIG = {
  // Edge function endpoint - uses this project's fixed Supabase URL
  // This edge function acts as a proxy to the main App's beta-signup handler
  BETA_SIGNUP_ENDPOINT: `https://${SUPABASE_PROJECT_REF}.supabase.co/functions/v1/submit-beta-signup`,
  // Production domains (static - used for CORS reference only)
  PRODUCTION_DOMAINS: [
    'https://optibayai.com',
    'https://www.optibayai.com',
  ],
} as const;
