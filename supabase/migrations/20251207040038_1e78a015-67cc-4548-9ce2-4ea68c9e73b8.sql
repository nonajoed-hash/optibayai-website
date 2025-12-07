-- Drop existing restrictive policy and recreate with better security
DROP POLICY IF EXISTS "Users can view their own roles" ON user_roles;

-- Add explicit restrictive policy to block all public access
CREATE POLICY "No public access to user roles" 
ON user_roles 
AS RESTRICTIVE
FOR ALL 
TO public
USING (false);

-- Create permissive policy for authenticated users to view only their own roles
CREATE POLICY "Users can view their own roles" 
ON user_roles 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);