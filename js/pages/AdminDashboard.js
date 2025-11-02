import { icon } from '../utils/icons.js';
import { addScrollReveal } from '../utils/animations.js';

export function renderAdminDashboard() {
  const sections = [
    { icon: icon('fileText', 32), title: 'Life Story', desc: 'Edit story sections', link: '#/admin/story' },
    { icon: icon('heart', 32), title: 'Advice Museum', desc: 'Approve advice entries', link: '#/admin/advice' },
    { icon: icon('bookOpen', 32), title: 'Blog Posts', desc: 'Manage blog content', link: '#/admin/blog' },
    { icon: icon('layoutDashboard', 32), title: 'Projects', desc: 'Update projects', link: '#/admin/projects' },
    { icon: icon('users', 32), title: 'Team', desc: 'Manage team members', link: '#/admin/team' },
    { icon: icon('messageSquare', 32), title: 'Messages', desc: 'View contact messages', link: '#/admin/messages' },
    { icon: icon('settings', 32), title: 'Settings', desc: 'Site configuration', link: '#/admin/settings' },
  ];

  return `
    <div class="pt-24 pb-20">
      <div class="container">
        <h1 class="reveal" style="font-size: 2.5rem; font-weight: 700; margin-bottom: 32px;" data-animate="animate-fade-in-up">
          Admin Dashboard
        </h1>
        
        <div class="admin-grid">
          ${sections.map((section, index) => `
            <a href="${section.link}" class="admin-card reveal" data-animate="animate-fade-in-up" style="animation-delay: ${index * 0.1}s;">
              <div class="icon">${section.icon}</div>
              <h3>${section.title}</h3>
              <p>${section.desc}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

export function initAdminDashboard() {
  const main = document.getElementById('main-content');
  main.innerHTML = renderAdminDashboard();
  
  // Initialize scroll reveal animations
  setTimeout(() => {
    addScrollReveal();
  }, 100);
}
