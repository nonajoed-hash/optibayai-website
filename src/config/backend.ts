/**
 * Backend Wiring Configuration
 * 
 * All backend-specific values are read from environment variables.
 * This allows the same codebase to target different backends (dev vs prod).
 * 
 * Required env vars:
 * - VITE_BETA_SIGNUP_ENDPOINT: URL for the beta signup edge function
 */

export const BACKEND_CONFIG = {
  // Edge function endpoint - uses THIS project's edge function as a proxy
  // The proxy forwards requests server-to-server to the OptiBay App's edge function
  BETA_SIGNUP_ENDPOINT: 'https://vblduvifvaxawmutnhbn.supabase.co/functions/v1/submit-beta-signup',
  
  // Production domains (static - used for CORS reference only)
  PRODUCTION_DOMAINS: [
    'https://optibayai.com',
    'https://www.optibayai.com',
  ],
} as const;
