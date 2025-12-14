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
  // Edge function endpoints (from env)
  BETA_SIGNUP_ENDPOINT: import.meta.env.VITE_BETA_SIGNUP_ENDPOINT as string,
  
  // Production domains (static - used for CORS reference only)
  PRODUCTION_DOMAINS: [
    'https://optibayai.com',
    'https://www.optibayai.com',
  ],
} as const;
