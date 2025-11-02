# Rohit Bag - Personal Portfolio (React Version)

Modern React-based personal portfolio with Supabase backend, featuring dynamic content management, dark/light themes, accessibility mode, and more.

## 🚀 Features

- **Modern React Architecture** - Built with React, React Router, and Vite
- **Supabase Backend** - Database-driven content management
- **Admin Panel** - Manage content without code
- **Life Story Timeline** - Interactive journey through Rohit's story
- **Advice Museum** - Community-driven wisdom wall
- **Dark/Light Theme** - With localStorage memory
- **Accessibility Mode** - Enhanced readability and contrast
- **Mobile-First** - Responsive with mobile shortcuts
- **Micro-animations** - Framer Motion powered reveals
- **GitHub Pages Ready** - Optimized for static deployment

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account

## 🛠️ Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase

1. Copy `.env.local` and update with your credentials:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

2. Run the SQL schema in your Supabase SQL Editor:
```bash
# Open supabase-schema.sql and run it in Supabase SQL Editor
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your site.

## 📦 Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 🚀 Deploy to GitHub Pages

```bash
npm run deploy
```

This will build and deploy to GitHub Pages automatically.

## 📂 Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   └── MobileShortcuts.jsx
├── pages/            # Page components
│   ├── Home.jsx
│   ├── Story.jsx
│   ├── AdviceMuseum.jsx
│   └── admin/        # Admin panel pages
├── contexts/         # React contexts (Theme, etc.)
├── hooks/           # Custom React hooks
├── services/        # API services (Supabase)
├── styles/          # Global styles
└── utils/           # Utility functions
```

## 🎨 Customization

### Theme Colors

Edit CSS variables in `src/styles/index.css`:

```css
:root {
  --primary-color: #0079FF;
  --secondary-color: #00DFA2;
  /* ... */
}
```

### Content Management

Access the admin panel at `/admin` to:
- Edit life story sections
- Approve advice entries
- Manage blog posts
- Update projects
- View contact messages

## 🔐 Admin Access

The admin panel is accessible at `/admin`. For production, you should add authentication.

## 📱 Mobile Features

- Sticky bottom bar with quick actions
- One-tap call, email, DM, and subscribe
- Optimized touch targets
- Mobile-first responsive design

## ♿ Accessibility

- WCAG 2.1 compliant
- Keyboard navigation
- Screen reader friendly
- Skip to content link
- Accessibility mode toggle

## 🤝 Contributing

This is a personal portfolio, but feedback and suggestions are welcome!

## 📄 License

ISC License - Rohit Bag

## 🙏 Credits

Built with:
- React + Vite
- Supabase
- Framer Motion
- Lucide React Icons
- React Router

---

**Building for people, not just metrics.**
— Rohit Bag
