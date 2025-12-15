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

export const BACKEND_CONFIG = {
  // Edge function endpoint - constructed from VITE_SUPABASE_URL (which is auto-injected by Lovable Cloud)
  // This project's edge function acts as a proxy to the OptiBay App's edge function
  BETA_SIGNUP_ENDPOINT: `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-beta-signup`,
  
  // Production domains (static - used for CORS reference only)
  PRODUCTION_DOMAINS: [
    'https://optibayai.com',
    'https://www.optibayai.com',
  ],
} as const;
