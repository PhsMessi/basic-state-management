// import { createClient } from "@supabase/supabase-js";

// const url = import.meta.env.SUPABASE_URL;
// const key = import.meta.env.SUPABASE_KEY;

// const supabase = createClient(url, key);

// export default supabase;

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
export default supabase;
