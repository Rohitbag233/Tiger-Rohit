# Rohit Bag Portfolio - Vanilla JS Version

This is the vanilla HTML, CSS, and JavaScript version of the Rohit Bag portfolio website. All features from the React version have been preserved, including dynamic features and the admin panel.

## Features

✅ **All Features Working:**
- Single-page application with hash-based routing
- Theme switching (Dark/Light mode)
- Accessibility mode
- Responsive design with mobile navigation
- Dynamic Advice Museum with Supabase integration
- Contact form with Supabase integration
- Admin panel for managing advice entries
- Smooth scroll animations
- Social media integration
- Newsletter subscription

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, animations, responsive design
- **JavaScript (ES6+)** - Vanilla JS with modules
- **Supabase** - Backend database (optional, works without it)

## Project Structure

```
/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # All styles in one file
├── js/
│   ├── app.js             # Main application entry point
│   ├── config.js          # Configuration (Supabase credentials)
│   ├── components/        # Reusable components
│   │   ├── Navigation.js
│   │   ├── Footer.js
│   │   └── MobileShortcuts.js
│   ├── pages/             # Page components
│   │   ├── Home.js
│   │   ├── AdviceMuseum.js
│   │   ├── Contact.js
│   │   ├── AdminDashboard.js
│   │   ├── AdminAdvice.js
│   │   └── SimplePage.js
│   ├── utils/             # Utility functions
│   │   ├── router.js      # Hash-based SPA router
│   │   ├── theme.js       # Theme management
│   │   ├── animations.js  # Intersection Observer animations
│   │   └── icons.js       # SVG icon library
│   └── services/          # External services
│       └── supabase.js    # Supabase client
└── rohitbag233/           # Static assets (images, etc.)
```

## Setup & Installation

### Quick Start (Without Database)

The site works without Supabase configuration. Simply:

1. Clone the repository
2. Open `index.html` in a web browser or serve with a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` in your browser

### Full Setup (With Database Features)

To enable dynamic features (Advice Museum, Contact Form, Admin Panel):

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Run the SQL schema from `supabase-schema.sql`

2. **Configure Supabase Credentials**
   
   Open `js/config.js` and replace the placeholder values:

   ```javascript
   export const config = {
     supabase: {
       url: 'YOUR_SUPABASE_PROJECT_URL',
       anonKey: 'YOUR_SUPABASE_ANON_KEY',
     },
   };
   ```

3. **Serve the Application**

   ```bash
   npx http-server
   ```

4. **Test Dynamic Features**
   - Visit Advice Museum to submit and view advice
   - Visit Contact page to send messages
   - Visit `/admin` to manage advice entries

## Routes

The application uses hash-based routing:

- `#/` - Home page
- `#/story` - Personal story
- `#/vision` - Vision for the future
- `#/projects` - Projects showcase
- `#/cooper` - Cooper project details
- `#/youtube` - YouTube journey
- `#/blog` - Blog (coming soon)
- `#/advice-museum` - Advice Museum (dynamic)
- `#/team` - Team page
- `#/contact` - Contact form (dynamic)
- `#/admin` - Admin dashboard
- `#/admin/advice` - Manage advice entries

## Customization

### Colors

Edit CSS custom properties in `styles/main.css`:

```css
:root {
  --primary-color: #0079FF;
  --secondary-color: #00DFA2;
  --text-primary: #f0f0f0;
  --text-secondary: #9f9f9f;
  --bg-primary: #0a0a0a;
  --bg-secondary: #1a1a1a;
}
```

### Adding New Pages

1. Create a new page file in `js/pages/`
2. Export a render function and init function
3. Register the route in `js/app.js`

Example:

```javascript
// js/pages/NewPage.js
export function renderNewPage() {
  return `<div>Content here</div>`;
}

export function initNewPage() {
  document.getElementById('main-content').innerHTML = renderNewPage();
}

// In js/app.js
import { initNewPage } from './pages/NewPage.js';
router.addRoute('/new-page', initNewPage);
```

## Deployment

### GitHub Pages

```bash
# Build is not needed - just push to GitHub
git push origin main

# Enable GitHub Pages in repository settings
# Select branch: main, folder: / (root)
```

### Netlify / Vercel

1. Connect your repository
2. No build command needed
3. Publish directory: `/`
4. Add environment variables if using Supabase

### Traditional Hosting

Upload all files to your web server. Make sure:
- Server supports HTML5 History API (if not using hash routing)
- All files maintain directory structure
- Static assets are accessible

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No build step required
- No framework overhead
- Minimal JavaScript bundle
- Lazy loading of components
- Optimized CSS animations
- Intersection Observer for scroll effects

## Troubleshooting

### Supabase Not Working

Check browser console for errors. Common issues:
- Incorrect credentials in `js/config.js`
- CORS issues (ensure domain is allowed in Supabase)
- Network errors (check internet connection)

### Routes Not Working

- Ensure you're using hash-based URLs (e.g., `#/about`)
- Check that `js/app.js` is loading correctly
- Verify all page imports are correct

### Styles Not Loading

- Check that `styles/main.css` path is correct
- Verify browser supports CSS custom properties
- Clear browser cache

## Migration from React Version

The vanilla JS version maintains 100% feature parity with the React version:

- ✅ All pages converted
- ✅ Routing system (hash-based)
- ✅ Theme management
- ✅ Supabase integration
- ✅ Admin panel
- ✅ Form submissions
- ✅ Animations and transitions
- ✅ Responsive design
- ✅ Accessibility features

## Contributing

Feel free to submit issues and enhancement requests!

## License

ISC License - See LICENSE file for details

## Contact

- Email: rohitbag233@gmail.com
- Twitter: [@Rohitbag233](https://twitter.com/@Rohitbag233)
- Instagram: [@rohitbag233](https://instagram.com/rohitbag233)
- YouTube: [@TigerRohit](https://youtube.com/@TigerRohit)
