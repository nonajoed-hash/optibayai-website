-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  read_at TIMESTAMPTZ,
  responded_at TIMESTAMPTZ
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Block all public access (admin-only table)
CREATE POLICY "Block anonymous access to contact submissions"
  ON public.contact_submissions
  AS RESTRICTIVE
  FOR ALL
  TO public
  USING (false)
  WITH CHECK (false);

-- Allow admins to view
CREATE POLICY "Admins can view contact submissions"
  ON public.contact_submissions
  FOR SELECT
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Allow admins to update (mark as read/responded)
CREATE POLICY "Admins can update contact submissions"
  ON public.contact_submissions
  FOR UPDATE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Create contact_rate_limit table (separate from beta signups for clarity)
CREATE TABLE public.contact_rate_limit (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address TEXT NOT NULL,
  email TEXT NOT NULL,
  attempt_count INTEGER DEFAULT 1,
  first_attempt_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_attempt_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS on rate limit table
ALTER TABLE public.contact_rate_limit ENABLE ROW LEVEL SECURITY;

-- Block all public access to rate limit data
CREATE POLICY "No public access to contact rate limit data"
  ON public.contact_rate_limit
  AS RESTRICTIVE
  FOR ALL
  TO public
  USING (false);

-- Create cleanup function for old rate limits
CREATE OR REPLACE FUNCTION public.cleanup_old_contact_rate_limits()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.contact_rate_limit
  WHERE first_attempt_at < now() - interval '24 hours';
END;
$$;