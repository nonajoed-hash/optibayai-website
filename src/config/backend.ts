/**
 * Backend Wiring Configuration
 * 
 * Derives project ref from VITE_SUPABASE_URL (which IS injected by Lovable Cloud)
 * 
 * Note: VITE_* variables are injected at build time by Vite
 */

// Extract project ref from VITE_SUPABASE_URL (format: https://PROJECT_REF.supabase.co)
const extractProjectRef = (url: string | undefined): string => {
  if (!url) {
    console.error('VITE_SUPABASE_URL is not set');
    return 'undefined';
  }
  const match = url.match(/https:\/\/([^.]+)\.supabase\.co/);
  return match?.[1] ?? 'undefined';
};

const SUPABASE_PROJECT_REF = extractProjectRef(import.meta.env.VITE_SUPABASE_URL);

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
