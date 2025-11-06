import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gjujerdrkdxoeurzroog.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqdWplcmRya2R4b2V1cnpyb29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMjY0OTgsImV4cCI6MjA1NjcwMjQ5OH0.placeholder'; // You'll need to provide the actual anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
