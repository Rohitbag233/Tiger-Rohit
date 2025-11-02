import { icon } from '../utils/icons.js';

export function renderMobileShortcuts() {
  return `
    <a href="#/" class="mobile-shortcut-btn">
      ${icon('home', 20)}
      <span>Home</span>
    </a>
    <a href="#/youtube" class="mobile-shortcut-btn">
      ${icon('youtube', 20)}
      <span>YouTube</span>
    </a>
    <a href="#/advice-museum" class="mobile-shortcut-btn">
      ${icon('heart', 20)}
      <span>Advice</span>
    </a>
    <a href="#/contact" class="mobile-shortcut-btn">
      ${icon('mail', 20)}
      <span>Contact</span>
    </a>
  `;
}

export function initMobileShortcuts() {
  const shortcuts = document.getElementById('mobile-shortcuts');
  shortcuts.className = 'mobile-shortcuts';
  shortcuts.innerHTML = renderMobileShortcuts();
}
