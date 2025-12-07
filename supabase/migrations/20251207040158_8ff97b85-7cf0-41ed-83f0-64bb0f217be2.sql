-- Ensure RLS is enabled on the table
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

-- Force RLS to apply even to table owners
ALTER TABLE user_roles FORCE ROW LEVEL SECURITY;

-- Drop and recreate policies to ensure they're properly applied
DROP POLICY IF EXISTS "No public access to user roles" ON user_roles;
DROP POLICY IF EXISTS "Users can view their own roles" ON user_roles;

-- Recreate restrictive policy to block all public access
CREATE POLICY "No public access to user roles" 
ON user_roles 
AS RESTRICTIVE
FOR ALL 
TO public
USING (false);

-- Recreate permissive policy for authenticated users to view only their own roles
CREATE POLICY "Users can view their own roles" 
ON user_roles 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);