import router from './utils/router.js';
import { initSupabase } from './services/supabase.js';
import { initNavigation } from './components/Navigation.js';
import { initFooter } from './components/Footer.js';
import { initMobileShortcuts } from './components/MobileShortcuts.js';

// Pages
import { initHome } from './pages/Home.js';
import { initAdviceMuseum } from './pages/AdviceMuseum.js';
import { initContact } from './pages/Contact.js';
import { initAdminDashboard } from './pages/AdminDashboard.js';
import { initAdminAdvice } from './pages/AdminAdvice.js';
import {
  StoryPage,
  VisionPage,
  ProjectsPage,
  CooperPage,
  YouTubePage,
  BlogPage,
  TeamPage,
  NotFoundPage
} from './pages/SimplePage.js';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Supabase
  initSupabase();

  // Initialize components
  initNavigation();
  initFooter();
  initMobileShortcuts();

  // Setup routes
  router.addRoute('/', initHome);
  router.addRoute('/story', () => StoryPage.init());
  router.addRoute('/vision', () => VisionPage.init());
  router.addRoute('/projects', () => ProjectsPage.init());
  router.addRoute('/cooper', () => CooperPage.init());
  router.addRoute('/youtube', () => YouTubePage.init());
  router.addRoute('/blog', () => BlogPage.init());
  router.addRoute('/advice-museum', initAdviceMuseum);
  router.addRoute('/team', () => TeamPage.init());
  router.addRoute('/contact', initContact);
  
  // Admin routes
  router.addRoute('/admin', initAdminDashboard);
  router.addRoute('/admin/advice', initAdminAdvice);
  router.addRoute('/admin/story', () => {
    NotFoundPage.init();
    document.querySelector('h1').textContent = 'Admin - Story Editor';
    document.querySelector('h1').insertAdjacentHTML('afterend', '<p style="margin-top: 16px; color: var(--text-secondary);">Story editor coming soon.</p>');
  });
  router.addRoute('/admin/blog', () => {
    NotFoundPage.init();
    document.querySelector('h1').textContent = 'Admin - Blog Manager';
    document.querySelector('h1').insertAdjacentHTML('afterend', '<p style="margin-top: 16px; color: var(--text-secondary);">Blog manager coming soon.</p>');
  });
  router.addRoute('/admin/projects', () => {
    NotFoundPage.init();
    document.querySelector('h1').textContent = 'Admin - Projects Manager';
    document.querySelector('h1').insertAdjacentHTML('afterend', '<p style="margin-top: 16px; color: var(--text-secondary);">Projects manager coming soon.</p>');
  });
  router.addRoute('/admin/team', () => {
    NotFoundPage.init();
    document.querySelector('h1').textContent = 'Admin - Team Manager';
    document.querySelector('h1').insertAdjacentHTML('afterend', '<p style="margin-top: 16px; color: var(--text-secondary);">Team manager coming soon.</p>');
  });
  router.addRoute('/admin/messages', () => {
    NotFoundPage.init();
    document.querySelector('h1').textContent = 'Admin - Messages';
    document.querySelector('h1').insertAdjacentHTML('afterend', '<p style="margin-top: 16px; color: var(--text-secondary);">Messages viewer coming soon.</p>');
  });
  router.addRoute('/admin/settings', () => {
    NotFoundPage.init();
    document.querySelector('h1').textContent = 'Admin - Settings';
    document.querySelector('h1').insertAdjacentHTML('afterend', '<p style="margin-top: 16px; color: var(--text-secondary);">Settings panel coming soon.</p>');
  });

  // Trigger initial route
  router.handleRoute();

  // Hide preloader after everything is loaded
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('hidden');
    }
  }, 500);
});

// Handle route changes to update active links
window.addEventListener('routechange', () => {
  // Close mobile menu if open
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu && mobileMenu.classList.contains('show')) {
    mobileMenu.classList.remove('show');
  }
});
