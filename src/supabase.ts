import { createClient } from '@supabase/supabase-js'

// Qui il codice va a leggere le chiavi segrete che abbiamo salvato nel file .env.local
const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(url, key)