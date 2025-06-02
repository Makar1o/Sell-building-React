import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jeqzgojvlcnworzxbpzu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplcXpnb2p2bGNud29yenhicHp1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODg3MDU1MiwiZXhwIjoyMDY0NDQ2NTUyfQ.3JIvTuVRLlPd_E37x0YLzhcx_LhWubUR8TH1GYEQfkg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
