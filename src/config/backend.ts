/**
 * Backend Wiring Configuration
 * 
 * All backend-specific values are read from environment variables.
 * This allows the same codebase to target different backends (dev vs prod).
 * 
 * Required env vars:
 * - VITE_BETA_SIGNUP_ENDPOINT: URL for the beta signup edge function
 * 
 * Note: VITE_* variables are injected at build time by Vite
 * Last rebuild trigger: 2025-12-15
 */

// Construct Supabase URL from available env vars with fallback
const getSupabaseUrl = (): string => {
  // Primary: Use direct URL if available
  if (import.meta.env.VITE_SUPABASE_URL) {
    return import.meta.env.VITE_SUPABASE_URL;
  }
  // Fallback: Construct from project ID
  if (import.meta.env.VITE_SUPABASE_PROJECT_ID) {
    return `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co`;
  }
  console.error('No Supabase URL or Project ID available');
  return '';
};

export const BACKEND_CONFIG = {
  // Edge function endpoint - constructed dynamically from available env vars
  BETA_SIGNUP_ENDPOINT: `${getSupabaseUrl()}/functions/v1/submit-beta-signup`,
  
  // Production domains (static - used for CORS reference only)
  PRODUCTION_DOMAINS: [
    'https://optibayai.com',
    'https://www.optibayai.com',
  ],
} as const;
