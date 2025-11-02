# Feature Guide

## 🎨 Dark/Light Theme

**How it works:**
- Click the sun/moon icon in the navigation bar
- Theme preference is saved in localStorage
- Persists across page reloads and visits

**For users:**
- Dark theme (default): Better for late-night browsing
- Light theme: Better for daytime and high-ambient light

## ♿ Accessibility Mode

**How it works:**
- Click the eye icon in the navigation bar
- Increases font size and line height
- Improves contrast for better readability
- Preference saved in localStorage

**Benefits:**
- Larger, easier-to-read text
- Better for users with visual impairments
- Improved readability on all devices

## 📖 Life Story Timeline

**Features:**
- Interactive timeline layout
- Alternating left/right sections on desktop
- Smooth scroll reveals
- Loads dynamically from Supabase

**How to update:**
1. Go to `/admin`
2. Click "Life Story"
3. Edit, add, or remove sections
4. Changes appear instantly on the site

## 💬 Advice Museum

**Public Features:**
- Anyone can submit advice
- See approved wisdom from the community
- Beautiful card-based layout

**How to submit:**
1. Go to `/advice-museum`
2. Fill in your advice, name, and optional context
3. Click "Submit Advice"
4. Advice appears after admin approval

**Admin Features:**
- View all submissions at `/admin/advice`
- Approve or reject entries
- Approved entries appear on public wall

## 📱 Mobile Shortcuts

**Features:**
- Sticky bottom bar on mobile devices
- Quick actions: Call, Email, DM, Subscribe
- One-tap access to contact methods

**Actions:**
- **Call**: Opens phone dialer
- **Email**: Opens email client with pre-filled address
- **DM**: Opens Instagram in browser
- **Subscribe**: Opens YouTube with subscribe prompt

## 🎭 Micro-animations

**Where they appear:**
- Page load animations
- Scroll reveal effects
- Hover interactions on cards
- Button press feedback

**Technology:**
- Framer Motion for smooth animations
- Intersection Observer for scroll reveals
- CSS transitions for micro-interactions

## 🎯 Scroll Reveal

**How it works:**
- Elements fade and slide in when scrolled into view
- Uses custom `useScrollReveal` hook
- Configurable threshold and animation direction

**Implementation:**
```jsx
const [ref, isVisible] = useScrollReveal({ once: true })
```

## 🛠️ Admin Panel

**Location:** `/admin`

**Sections:**

### 1. Life Story
- Add/edit/delete story sections
- Reorder sections
- Publish/unpublish content

### 2. Advice Museum
- Review submitted advice
- Approve or reject entries
- See submission timestamps

### 3. Blog Posts (Coming Soon)
- Create new posts
- Edit existing content
- Manage published status

### 4. Projects
- Add new projects
- Update descriptions and status
- Mark projects as featured

### 5. Team
- Manage team members
- Update bios and roles
- Add social links

### 6. Messages
- View contact form submissions
- Mark as read/unread
- Delete old messages

### 7. Settings
- Update site-wide settings
- Manage hero content
- Configure statistics

## 🔍 SEO Features

- Proper meta tags
- Open Graph tags for social sharing
- Descriptive page titles
- Semantic HTML structure

## 🚀 Performance

- Code splitting with React Router
- Lazy loading of images
- Optimized bundle size
- Fast Time to Interactive

## 🔐 Security Features

- Row Level Security (RLS) in Supabase
- Input validation and sanitization
- HTTPS-only in production
- Environment variable protection

## 📊 Analytics Ready

The site is ready for analytics integration. Add your preferred service:

**Google Analytics:**
```jsx
// Add to index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

**Vercel Analytics:**
```bash
npm install @vercel/analytics
```

## 🎨 Customization Guide

### Change Primary Color
Edit `src/styles/index.css`:
```css
:root {
  --primary-color: #0079FF; /* Change this */
}
```

### Update Hero Background
Edit `src/pages/Home.jsx`:
```jsx
backgroundImage: 'url(YOUR_IMAGE_URL)'
```

### Modify Stats
Update via admin panel or directly in Supabase `site_settings` table.

## 🐛 Known Issues & Roadmap

### Current Limitations:
- Admin panel has no authentication (add before production)
- Blog feature is placeholder only
- Newsletter integration incomplete

### Roadmap:
- [ ] Add admin authentication
- [ ] Complete blog functionality
- [ ] Newsletter integration
- [ ] Search functionality
- [ ] Comment system for blog
- [ ] Analytics dashboard
- [ ] Multi-language support

## 💡 Tips & Tricks

1. **Quick Theme Test**: Press Ctrl+Shift+T (custom shortcut) to toggle theme
2. **Admin Access**: Bookmark `/admin` for quick access
3. **Mobile Testing**: Use Chrome DevTools Device Mode
4. **Performance**: Run Lighthouse audit regularly
5. **Content Updates**: Use admin panel instead of editing code

## 📞 Support

Need help with a feature?
- Check the README-REACT.md
- Review DEPLOYMENT.md for setup issues
- Contact: rohitbag233@gmail.com

---

**Remember:** Building for people, not just metrics! 🚀
