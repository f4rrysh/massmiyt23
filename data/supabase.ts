export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export interface Database {
    public: {
        Tables: {
            event: {
                Row: {
                    day: string | null;
                    group: string | null;
                    id: number;
                    match: number;
                    result: string | null;
                    sport: string | null;
                    t_a: string | null;
                    t_b: string | null;
                    time: string | null;
                    venue: string | null;
                };
                Insert: {
                    day?: string | null;
                    group?: string | null;
                    id?: number;
                    match: number;
                    result?: string | null;
                    sport?: string | null;
                    t_a?: string | null;
                    t_b?: string | null;
                    time?: string | null;
                    venue?: string | null;
                };
                Update: {
                    day?: string | null;
                    group?: string | null;
                    id?: number;
                    match?: number;
                    result?: string | null;
                    sport?: string | null;
                    t_a?: string | null;
                    t_b?: string | null;
                    time?: string | null;
                    venue?: string | null;
                };
                Relationships: [];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://hlekjfeoplbhldjqzqvs.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsZWtqZmVvcGxiaGxkanF6cXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2MzE3NTEsImV4cCI6MjAwNzIwNzc1MX0.MFPdrxpqDHMAs_S2oe8uwq7ji51iDtKP1ed4369wq38';

export function getSupabase() {
    return createClient<Database>(SUPABASE_URL, SUPABASE_KEY);
}
