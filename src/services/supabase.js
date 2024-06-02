import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ehcgcxuokpqkyfnttves.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoY2djeHVva3Bxa3lmbnR0dmVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxMDc2ODAsImV4cCI6MjAzMjY4MzY4MH0.eB7S9kmAeWUtefuwYF9JzB5n1KrjsnZFCYoFdA0T4mw";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;