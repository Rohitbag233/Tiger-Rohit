// Configuration file for the application
// Replace these values with your actual Supabase credentials
// Or use environment variables in production

export const config = {
  supabase: {
    url: import.meta.env?.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL',
    anonKey: import.meta.env?.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY',
  },
  
  // Add other configuration values here
  appName: 'Rohit Bag Portfolio',
  appVersion: '2.0.0',
};
