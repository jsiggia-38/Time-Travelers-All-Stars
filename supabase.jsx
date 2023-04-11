import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://haoukfhaslzxjlzajjni.supabase.co';
const supabaseKey = import.meta.env.VITE_APP_ACCESS_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };



