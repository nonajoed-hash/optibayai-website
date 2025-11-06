import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gjujerdrkdxoeurzroog.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqdWplcmRya2R4b2V1cnpyb29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyNTA5ODYsImV4cCI6MjA3NjgyNjk4Nn0.d0qeZ_yKy6tma1InRuInldW0WZyA2rFuzJ4zvLjbj-o';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
