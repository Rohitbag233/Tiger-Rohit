// Simple SPA Router using hash-based navigation
class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    this.currentRoute = hash;
    
    const handler = this.routes[hash] || this.routes['/'];
    if (handler) {
      handler();
    }
    
    // Update active nav links
    this.updateActiveLinks();
    
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Dispatch custom event for route change
    window.dispatchEvent(new CustomEvent('routechange', { detail: { route: hash } }));
  }

  navigate(path) {
    window.location.hash = path;
  }

  updateActiveLinks() {
    const currentPath = window.location.hash.slice(1) || '/';
    
    // Update navigation links
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const path = href.slice(1);
        if (path === currentPath) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });

    // Update mobile shortcuts
    document.querySelectorAll('.mobile-shortcut-btn').forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const path = href.slice(1);
        if (path === currentPath) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  getCurrentRoute() {
    return this.currentRoute;
  }
}

export default new Router();
