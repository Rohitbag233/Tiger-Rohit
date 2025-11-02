import { icon } from '../utils/icons.js';
import themeManager from '../utils/theme.js';

export function renderNavigation() {
  const theme = themeManager.getTheme();
  const accessibility = themeManager.isAccessibilityMode();

  return `
    <div class="container nav-container">
      <!-- Logo -->
      <a href="#/" class="logo">
        <img src="/rohitbag233/rohitbag233/img/TigerRohitLOGO.png" alt="Rohit Bag Logo" />
        <span class="hidden sm:inline">Rohit Bag</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="nav-links">
        <a href="#/">Home</a>
        <a href="#/story">Story</a>
        <a href="#/vision">Vision</a>
        <a href="#/projects">Projects</a>
        <a href="#/cooper">Cooper</a>
        <a href="#/youtube">YouTube</a>
        <a href="#/blog">Blog</a>
        <a href="#/advice-museum">Advice Museum</a>
        <a href="#/team">Team</a>
        <a href="#/contact">Contact</a>
      </div>

      <!-- Controls -->
      <div class="nav-controls">
        <button class="icon-btn" id="theme-toggle" aria-label="Toggle theme">
          ${theme === 'dark' ? icon('sun', 20) : icon('moon', 20)}
        </button>
        <button class="icon-btn ${accessibility ? 'active' : ''}" id="accessibility-toggle" aria-label="Toggle accessibility mode">
          ${icon('eye', 20)}
        </button>
        <button class="icon-btn lg:hidden" id="mobile-menu-toggle" aria-label="Toggle menu">
          ${icon('menu', 24)}
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="container mobile-menu" id="mobile-menu">
      <a href="#/">Home</a>
      <a href="#/story">Story</a>
      <a href="#/vision">Vision</a>
      <a href="#/projects">Projects</a>
      <a href="#/cooper">Cooper</a>
      <a href="#/youtube">YouTube</a>
      <a href="#/blog">Blog</a>
      <a href="#/advice-museum">Advice Museum</a>
      <a href="#/team">Team</a>
      <a href="#/contact">Contact</a>
    </div>
  `;
}

export function initNavigation() {
  const nav = document.getElementById('navigation');
  nav.innerHTML = renderNavigation();

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', () => {
    themeManager.toggleTheme();
    // Re-render navigation to update icon
    nav.innerHTML = renderNavigation();
    initNavigation(); // Re-init event listeners
  });

  // Accessibility toggle
  document.getElementById('accessibility-toggle').addEventListener('click', () => {
    themeManager.toggleAccessibility();
    // Re-render navigation to update button state
    nav.innerHTML = renderNavigation();
    initNavigation(); // Re-init event listeners
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    
    // Update icon
    const isOpen = mobileMenu.classList.contains('show');
    mobileMenuToggle.innerHTML = isOpen ? icon('x', 24) : icon('menu', 24);
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
      mobileMenuToggle.innerHTML = icon('menu', 24);
    });
  });
}
