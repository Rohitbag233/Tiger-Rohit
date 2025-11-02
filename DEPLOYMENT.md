# Deployment Guide

## Supabase Setup

### Step 1: Run Database Schema

1. Go to your Supabase project: https://app.supabase.com/project/icjahaocvwrvrsilpqwy
2. Navigate to the SQL Editor
3. Open `supabase-schema.sql` from this repository
4. Copy all the SQL code
5. Paste it into the SQL Editor
6. Click "Run" to execute

This will create all necessary tables, policies, and initial data.

### Step 2: Verify Tables

After running the schema, you should see these tables in your Database:
- `admin_users`
- `life_story_sections`
- `advice_entries`
- `projects`
- `blog_posts`
- `team_members`
- `newsletter_subscribers`
- `contact_messages`
- `site_settings`

## GitHub Pages Deployment

### Option 1: Using GitHub Actions (Recommended)

1. Go to your repository settings
2. Navigate to Pages
3. Set Source to "GitHub Actions"
4. Push your code to the `feat-rohit-site-react-supabase-admin` branch
5. GitHub will automatically build and deploy

### Option 2: Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Important: Environment Variables

For GitHub Pages deployment, you need to set up your Supabase credentials as GitHub Secrets:

1. Go to Settings > Secrets and variables > Actions
2. Add these secrets:
   - `VITE_SUPABASE_URL`: https://icjahaocvwrvrsilpqwy.supabase.co
   - `VITE_SUPABASE_ANON_KEY`: (your anon key from .env.local)

## Accessing Your Site

After deployment, your site will be available at:
https://rohitbag233.github.io/Tiger-Rohit/

## Admin Panel Access

The admin panel is available at:
https://rohitbag233.github.io/Tiger-Rohit/#/admin

**Security Note**: For production, implement proper authentication for the admin panel. Currently, it's publicly accessible.

## Post-Deployment Checklist

- [ ] Verify Supabase tables are created
- [ ] Test all pages load correctly
- [ ] Check theme toggle works
- [ ] Test advice submission
- [ ] Test contact form
- [ ] Verify mobile shortcuts bar
- [ ] Test accessibility mode
- [ ] Check admin panel functionality

## Troubleshooting

### Build Fails
- Ensure Node.js version is 16 or higher
- Delete `node_modules` and `package-lock.json`, then run `npm install`

### 404 Errors on GitHub Pages
- Verify `base` in `vite.config.js` matches your repo name
- Check that you're using HashRouter (not BrowserRouter)

### Supabase Connection Issues
- Verify environment variables are set correctly
- Check Supabase project is active
- Ensure RLS policies are enabled

### Admin Panel Not Working
- Check browser console for errors
- Verify Supabase policies allow public insert/update where needed
- Test with Supabase URL tester

## Maintenance

### Updating Content
Use the admin panel at `/admin` to:
- Edit story sections
- Approve advice entries
- Manage projects
- View messages

### Updating Code
1. Make changes locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Deploy with `npm run deploy`

## Support

For issues or questions:
- Email: rohitbag233@gmail.com
- Twitter: @Rohitbag233
- Instagram: @rohitbag233
