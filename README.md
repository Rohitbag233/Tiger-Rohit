# Rohit Bag - Personal Portfolio 2.0 🚀

> Building for people, not just metrics.

A modern, dynamic personal portfolio now available in **Pure HTML, CSS, and JavaScript**! All features work without frameworks—just open and run.

## 🎯 Choose Your Version

- **📄 Vanilla JS (Current)** - Pure HTML/CSS/JS, no build step required → [README-VANILLA.md](README-VANILLA.md)
- **⚛️ React Version** - Original React app with build tools → [README-REACT.md](README-REACT.md)

This portfolio is a platform to share my journey, vision, and mission to push Earth toward Type 1 civilization.

## ✨ What's New

**Now in Pure Vanilla JavaScript!** No build tools, no frameworks, just open and run.

- ✅ **Zero Dependencies** - Pure HTML, CSS, and JavaScript
- 🎨 **Dynamic Content Management** - Supabase integration (optional)
- 📖 **All Pages Working** - Story, Vision, Projects, Blog, Team, Contact
- 💬 **Advice Museum** - Community wall for sharing wisdom (with database)
- 🌓 **Dark/Light Theme** - With localStorage persistence
- ♿ **Accessibility Mode** - Enhanced readability
- 📱 **Mobile-First** - Optimized for every device
- ✨ **Smooth Animations** - CSS + Intersection Observer
- 🛠️ **Admin Panel** - Manage advice entries and more
- ⚡ **Instant Load** - No build step, no bundling

## 🚀 Quick Start

**Get running in 30 seconds:**

```bash
# Just open in browser or serve with any server
python -m http.server 8000
# OR
npx http-server

# Then visit http://localhost:8000
```

**That's it!** No npm install, no build, no configuration needed.

For database features (Advice Museum, Contact Form, Admin):
1. See [README-VANILLA.md](README-VANILLA.md) for Supabase setup
2. Edit `js/config.js` with your credentials

👉 **[Full Vanilla JS Guide](README-VANILLA.md)**  
👉 **[React Version Guide](README-REACT.md)**

## 📚 Documentation

Everything you need is documented:

- **[📖 Documentation Index](DOCUMENTATION-INDEX.md)** - Navigate all docs
- **[⚡ Quick Start](QUICK-START.md)** - Get running in 3 minutes
- **[📘 Setup Guide](SETUP-GUIDE.md)** - Complete setup instructions  
- **[🚀 Deployment](DEPLOYMENT.md)** - Deploy to GitHub Pages
- **[✨ Features](FEATURES.md)** - All features explained
- **[❓ FAQ](FAQ.md)** - Common questions answered
- **[✅ Pre-Launch Checklist](PRE-LAUNCH-CHECKLIST.md)** - Before going live
- **[🎊 Project Summary](PROJECT-SUMMARY.md)** - What was built

**Not sure where to start?** Read [DOCUMENTATION-INDEX.md](DOCUMENTATION-INDEX.md)

## 🎯 Features

### ✅ Your Life Story
Nine chapters documenting my journey:
1. The Beginning (The Audi R8 night trip)
2. Discovery of Science & The Broken Arm
3. First Co-Founder & Biology Fuel
4. The Hyperloop Idea & Betrayal
5. Shift from Scientist to Entrepreneur
6. YouTube & Finding Dynamic
7. Reach Resolve & The Grind
8. Resolvia & The Aha Moment
9. The Real Mission

### ✅ Advice Museum
A collective wall where visitors can share life wisdom that made a difference.

### ✅ Modern Features
- Dark/Light theme with localStorage memory
- Accessibility mode for better readability
- Mobile shortcuts bar (Call, Email, DM, Subscribe)
- Smooth scroll reveals and micro-animations
- Responsive design optimized for all devices

### ✅ Admin Panel
Manage everything at `/admin`:
- Approve advice submissions
- Edit story sections
- Update projects
- View contact messages
- Manage team members

### ✅ Tech Stack
- **Frontend**: React 19 + Vite
- **Backend**: Supabase (PostgreSQL)
- **Routing**: React Router (HashRouter)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Custom CSS with theme variables
- **Deployment**: GitHub Pages via GitHub Actions

## 📦 What's Included

```
📁 Complete React Application
├── ✅ 10+ Page components
├── ✅ Admin dashboard
├── ✅ Database schema (9 tables)
├── ✅ Complete documentation
├── ✅ GitHub Actions workflow
├── ✅ Theme system
└── ✅ Mobile optimizations

📊 Pre-populated Content
├── ✅ Complete life story (9 chapters)
├── ✅ Team members
├── ✅ Projects portfolio
└── ✅ Site settings

📚 Comprehensive Docs
├── ✅ 8 documentation files
├── ✅ Setup guides
├── ✅ FAQ
└── ✅ Checklists
```

## 🛠️ Installation

```bash
# Clone repository
git clone https://github.com/Rohitbag233/Tiger-Rohit.git
cd Tiger-Rohit

# Install dependencies  
npm install

# Copy environment variables
# .env.local already exists with your credentials

# Setup database
# 1. Open https://app.supabase.com/project/icjahaocvwrvrsilpqwy/sql
# 2. Copy content from supabase-schema.sql
# 3. Paste and run in SQL Editor

# Start development server
npm run dev
```

Visit http://localhost:5173/Tiger-Rohit/

## 🚀 Deployment

### GitHub Pages (Automatic)

1. **Add GitHub Secrets:**
   - Go to Settings > Secrets and variables > Actions
   - Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

2. **Push to branch:**
   ```bash
   git push origin feat-rohit-site-react-supabase-admin
   ```

3. **GitHub Actions automatically builds and deploys!**

**Your site:** https://rohitbag233.github.io/Tiger-Rohit/

**[Detailed Deployment Guide](DEPLOYMENT.md)**

## 🎨 Customization

### Change Colors
Edit `src/styles/index.css`:
```css
:root {
  --primary-color: #0079FF;
  --secondary-color: #00DFA2;
}
```

### Update Content
Use the admin panel at `/admin` or edit in Supabase dashboard.

### Add Features
- Pages: Add to `src/pages/` and route in `App.jsx`
- Components: Create in `src/components/`
- Database: Update schema in Supabase

## 📖 About

### The Mission
I'm on a mission to:
- ✨ Uplift people financially
- 🌍 Unite humanity  
- 🚀 Push Earth toward Type 1 civilization
- 💙 Build products that scale human opportunity

### Current Projects
- **Cooper** - AI that builds entire businesses
- **Resolvia** - AI automation agency
- **Reach Resolve** - Video editing agency
- **YouTube** - 200+ day vlog challenge documenting the journey

### The Vision
Creating a world where every person has the opportunity to become self-sufficient. Not temporary help, but lasting change through products, businesses, and opportunities that scale.

## 🤝 Connect

- 🐦 **Twitter**: [@Rohitbag233](https://twitter.com/@Rohitbag233)
- 📸 **Instagram**: [@rohitbag233](https://instagram.com/rohitbag233)
- 🎥 **YouTube**: [@TigerRohit](https://youtube.com/@TigerRohit)
- 📧 **Email**: rohitbag233@gmail.com

## 📊 Stats

- **Companies Founded**: 2 (Reach Resolve, Resolvia)
- **Vlog Challenge**: 200+ days
- **Subscriber Goal**: 1M
- **Investment Strategy**: SIP
- **Core Values**: Innovation, Kindness, Obsession, Legacy

## 🙏 Credits

Built with:
- [React](https://react.dev) - UI library
- [Vite](https://vitejs.dev) - Build tool
- [Supabase](https://supabase.com) - Backend
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide](https://lucide.dev) - Icons
- [React Router](https://reactrouter.com) - Routing

## 📄 License

ISC License - Rohit Bag

## 🎉 Ready to Launch?

1. ✅ Review [PRE-LAUNCH-CHECKLIST.md](PRE-LAUNCH-CHECKLIST.md)
2. ✅ Follow [DEPLOYMENT.md](DEPLOYMENT.md)
3. ✅ Test everything
4. ✅ Deploy!
5. ✅ Share with the world 🌍

## ❓ Questions?

- Read [FAQ.md](FAQ.md)
- Check [DOCUMENTATION-INDEX.md](DOCUMENTATION-INDEX.md)
- Email rohitbag233@gmail.com

---

<div align="center">

**Building for people, not just metrics.** 🚀

Made with 💙 and ambition

[Visit Site](https://rohitbag233.github.io/Tiger-Rohit/) • [View Docs](DOCUMENTATION-INDEX.md) • [Get Started](QUICK-START.md)

</div>
