-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Admins can view all beta signups" ON beta_signups;
DROP POLICY IF EXISTS "Admins can update beta signups" ON beta_signups;

-- Create permissive policies for admin-only access (requires authentication)
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