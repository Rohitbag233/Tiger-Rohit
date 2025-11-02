// Theme management
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'dark';
    this.accessibility = localStorage.getItem('accessibility') === 'true';
    this.init();
  }

  init() {
    this.applyTheme();
    this.applyAccessibility();
  }

  applyTheme() {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(this.theme);
    localStorage.setItem('theme', this.theme);
  }

  applyAccessibility() {
    if (this.accessibility) {
      document.documentElement.classList.add('accessibility-mode');
    } else {
      document.documentElement.classList.remove('accessibility-mode');
    }
    localStorage.setItem('accessibility', this.accessibility);
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme();
    
    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: this.theme } }));
  }

  toggleAccessibility() {
    this.accessibility = !this.accessibility;
    this.applyAccessibility();
    
    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('accessibilitychange', { 
      detail: { accessibility: this.accessibility } 
    }));
  }

  getTheme() {
    return this.theme;
  }

  isAccessibilityMode() {
    return this.accessibility;
  }
}

export default new ThemeManager();
