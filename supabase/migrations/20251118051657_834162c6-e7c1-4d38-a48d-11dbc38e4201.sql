-- Create beta_signups table to store signup requests
CREATE TABLE IF NOT EXISTS public.beta_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  shop_name TEXT NOT NULL,
  phone TEXT,
  role TEXT NOT NULL,
  shop_size INTEGER NOT NULL,
  country TEXT NOT NULL,
  notes TEXT,
  timezone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT valid_shop_size CHECK (shop_size >= 1 AND shop_size <= 1000)
);

-- Create index for email lookups (useful for checking duplicates)
CREATE INDEX idx_beta_signups_email ON public.beta_signups(email);
CREATE INDEX idx_beta_signups_created_at ON public.beta_signups(created_at DESC);

-- Enable RLS (make it admin-only readable)
ALTER TABLE public.beta_signups ENABLE ROW LEVEL SECURITY;

-- No public access - only admins can view signups
-- This prevents unauthorized access to beta signup data
CREATE POLICY "No public access to beta signups"
  ON public.beta_signups
  FOR ALL
  USING (false);

-- Create rate limiting table to track submission attempts
CREATE TABLE IF NOT EXISTS public.beta_signup_rate_limit (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address TEXT NOT NULL,
  email TEXT NOT NULL,
  attempt_count INTEGER DEFAULT 1,
  first_attempt_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  last_attempt_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE(ip_address, email)
);

-- Enable RLS on rate limiting table
ALTER TABLE public.beta_signup_rate_limit ENABLE ROW LEVEL SECURITY;

-- No public access to rate limit data
CREATE POLICY "No public access to rate limit data"
  ON public.beta_signup_rate_limit
  FOR ALL
  USING (false);

-- Create cleanup function to remove old rate limit entries (older than 24 hours)
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.beta_signup_rate_limit
  WHERE first_attempt_at < now() - interval '24 hours';
END;
$$;