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
 */

const BETA_SIGNUP_ENDPOINT = import.meta.env.VITE_BETA_SIGNUP_ENDPOINT;

if (!BETA_SIGNUP_ENDPOINT) {
  console.error(
    'VITE_BETA_SIGNUP_ENDPOINT is not set; beta signup form will not function.'
  );
}

export const BACKEND_CONFIG = {
  // Edge function endpoint - configured via environment variable
  // This edge function acts as a proxy to the main App's beta-signup handler
  BETA_SIGNUP_ENDPOINT: BETA_SIGNUP_ENDPOINT as string,
  // Production domains (static - used for CORS reference only)
  PRODUCTION_DOMAINS: [
    'https://optibayai.com',
    'https://www.optibayai.com',
  ],
} as const;
