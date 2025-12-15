/**
 * Backend Wiring Configuration
 * 
 * Prefers environment variables but falls back to hardcoded values
 * when Lovable Cloud doesn't inject custom VITE_* secrets into Vite builds.
 */

// TODO_BACKEND_WIRING: Remove fallback once Lovable Cloud injects custom VITE_* secrets
const FALLBACK_BETA_SIGNUP_ENDPOINT = 'https://vblduvifvaxawmutnhbn.supabase.co/functions/v1/submit-beta-signup';

const BETA_SIGNUP_ENDPOINT = import.meta.env.VITE_BETA_SIGNUP_ENDPOINT || FALLBACK_BETA_SIGNUP_ENDPOINT;

export const BACKEND_CONFIG = {
  // Edge function endpoint - this project's proxy to the main App's beta-signup handler
  BETA_SIGNUP_ENDPOINT,
  // Production domains (static - used for CORS reference only)
  PRODUCTION_DOMAINS: [
    'https://optibayai.com',
    'https://www.optibayai.com',
  ],
} as const;
