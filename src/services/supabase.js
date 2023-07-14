import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://liwzffbfwqwgwfpancpm.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxpd3pmZmJmd3F3Z3dmcGFuY3BtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNDQyNjQsImV4cCI6MjAwMzYyMDI2NH0.tmAe0b8UaTMKmrngKELhulpsQh7C3vnD_gPV3u1Tmk4`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
