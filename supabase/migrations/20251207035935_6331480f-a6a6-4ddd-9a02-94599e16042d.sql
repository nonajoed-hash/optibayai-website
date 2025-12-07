-- Add explicit restrictive policy to block all public access
CREATE POLICY "No public access to beta signups" 
ON beta_signups 
AS RESTRICTIVE
FOR ALL 
TO public
USING (false);