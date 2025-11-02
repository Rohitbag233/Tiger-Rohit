#!/usr/bin/env node

/**
 * Setup script to read environment variables and update config.js
 * This is useful for deployment environments that use .env files
 */

const fs = require('fs');
const path = require('path');

// Try to load .env file if it exists
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const envVars = {};
  
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      envVars[match[1].trim()] = match[2].trim();
    }
  });

  const supabaseUrl = envVars.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
  const supabaseAnonKey = envVars.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

  const configContent = `// Configuration file for the application
// Auto-generated from environment variables

export const config = {
  supabase: {
    url: '${supabaseUrl}',
    anonKey: '${supabaseAnonKey}',
  },
  
  appName: 'Rohit Bag Portfolio',
  appVersion: '2.0.0',
};
`;

  fs.writeFileSync(path.join(__dirname, 'js', 'config.js'), configContent);
  console.log('✅ Config updated from environment variables');
} else {
  console.log('ℹ️  No .env file found. Using default config.js');
  console.log('   To enable Supabase features, edit js/config.js manually or create a .env file');
}
