-- Fix beta_signups RLS policies
-- First drop existing policies
DROP POLICY IF EXISTS "No public access to beta signups" ON public.beta_signups;
DROP POLICY IF EXISTS "Admins can view all beta signups" ON public.beta_signups;
DROP POLICY IF EXISTS "Admins can update beta signups" ON public.beta_signups;

-- Create proper PERMISSIVE policies that explicitly require authentication
-- Only authenticated admins can SELECT beta signups
CREATE POLICY "Admins can view all beta signups" 
ON public.beta_signups 
FOR SELECT 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Only authenticated admins can UPDATE beta signups
CREATE POLICY "Admins can update beta signups" 
ON public.beta_signups 
FOR UPDATE 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Explicitly block anonymous role from all operations
CREATE POLICY "Block anonymous access to beta signups"
ON public.beta_signups
FOR ALL
TO anon
USING (false)
WITH CHECK (false);

-- Fix user_roles RLS policies
DROP POLICY IF EXISTS "No public access to user roles" ON public.user_roles;
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;

-- Allow authenticated users to view only their own roles
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Explicitly block anonymous role from all operations
CREATE POLICY "Block anonymous access to user roles"
ON public.user_roles
FOR ALL
TO anon
USING (false)
WITH CHECK (false);