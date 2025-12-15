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

// Get project ref from environment variable only
const SUPABASE_PROJECT_REF = import.meta.env.VITE_SUPABASE_PROJECT_ID;

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
