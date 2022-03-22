// @ts-nocheck
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

declare global {
  type supabase = SupabaseClient;
}

export const supabase: SupabaseClient =
  process.env.NODE_ENV === "development"
    ? (globalThis.supabase =
        globalThis.supabase || createClient(supabaseUrl, supabaseAnonKey))
    : createClient(supabaseUrl, supabaseAnonKey);
