-- Ensure RLS is enabled on the table (will do nothing if already enabled)
ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Force RLS to apply even to table owners
ALTER TABLE beta_signups FORCE ROW LEVEL SECURITY;

-- Drop and recreate policies to ensure they're properly applied
DROP POLICY IF EXISTS "No public access to beta signups" ON beta_signups;
DROP POLICY IF EXISTS "Admins can view all beta signups" ON beta_signups;
DROP POLICY IF EXISTS "Admins can update beta signups" ON beta_signups;

-- Recreate restrictive policy to block all public access
CREATE POLICY "No public access to beta signups" 
ON beta_signups 
AS RESTRICTIVE
FOR ALL 
TO public
USING (false);

-- Recreate permissive policies for admin-only access
CREATE POLICY "Admins can view all beta signups" 
ON beta_signups 
FOR SELECT 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update beta signups" 
ON beta_signups 
FOR UPDATE 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));