import { createClient } from 'esm:@supabase/supabase-js';

export function getSupabase() {
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_KEY = Deno.env.get('SUPABASE_KEY');

    if (!SUPABASE_URL || !SUPABASE_KEY) {
        throw new Error("'SUPABASE_URL' or 'SUPABASE_KEY' is 'undefined'");
    }

    return createClient(SUPABASE_URL, SUPABASE_KEY);
}
