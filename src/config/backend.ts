/**
 * Backend Wiring Configuration
 * 
 * All Supabase/backend-specific values should be defined here.
 * This makes it easy to find and update backend references.
 * 
 * Search for TODO_BACKEND_WIRING to find any temporary hardcoded values elsewhere.
 */

export const BACKEND_CONFIG = {
  // Supabase project identifiers
  SUPABASE_PROJECT_REF: 'vblduvifvaxawmutnhbn',
  SUPABASE_URL: 'https://vblduvifvaxawmutnhbn.supabase.co',
  
  // Edge function endpoints
  BETA_SIGNUP_ENDPOINT: 'https://vblduvifvaxawmutnhbn.supabase.co/functions/v1/submit-beta-signup',
  
  // Production domains (for CORS reference)
  PRODUCTION_DOMAINS: [
    'https://optibayai.com',
    'https://www.optibayai.com',
  ],
} as const;
