import { config } from '../config.js';

// Supabase client initialization
let supabaseClient = null;

export function initSupabase() {
  // Check if Supabase URL and key are available
  const supabaseUrl = config.supabase.url;
  const supabaseAnonKey = config.supabase.anonKey;

  // Check if credentials are configured (not placeholder values)
  if (!supabaseUrl || !supabaseAnonKey || 
      supabaseUrl === 'YOUR_SUPABASE_URL' || 
      supabaseAnonKey === 'YOUR_SUPABASE_ANON_KEY') {
    console.warn('Supabase credentials not configured. Dynamic features will be disabled.');
    return null;
  }

  if (typeof supabase !== 'undefined' && supabase.createClient) {
    try {
      supabaseClient = supabase.createClient(supabaseUrl, supabaseAnonKey);
      console.log('Supabase initialized successfully');
      return supabaseClient;
    } catch (error) {
      console.error('Supabase initialization error:', error);
      return null;
    }
  } else {
    console.warn('Supabase library not loaded');
    return null;
  }
}

export function getSupabase() {
  if (!supabaseClient) {
    supabaseClient = initSupabase();
  }
  return supabaseClient;
}

// Helper function to check if Supabase is configured
export function isSupabaseConfigured() {
  const supabase = getSupabase();
  return supabase !== null;
}
