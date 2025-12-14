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
  // Edge function endpoint - hardcoded to the OptiBay App's edge function
  // This submits to the other project's beta_leads table
  BETA_SIGNUP_ENDPOINT: 'https://gjujerdrkdxoeurzroog.supabase.co/functions/v1/submit-beta-signup',
  
  // Production domains (static - used for CORS reference only)
  PRODUCTION_DOMAINS: [
    'https://optibayai.com',
    'https://www.optibayai.com',
  ],
} as const;
