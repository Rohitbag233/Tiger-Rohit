import { icon } from '../utils/icons.js';

export function renderFooter() {
  const currentYear = new Date().getFullYear();

  return `
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->
        <div>
          <a href="#/" class="footer-brand">
            <img src="/rohitbag233/rohitbag233/img/TigerRohitLOGO.png" alt="Rohit Bag" />
            <span>Rohit Bag</span>
          </a>
          <p style="color: var(--text-secondary); margin-bottom: 16px;">
            Building for people, not just metrics. On a mission to push Earth toward Type 1 civilization.
          </p>
          <div class="social-links">
            <a href="https://twitter.com/@Rohitbag233" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              ${icon('twitter', 20)}
            </a>
            <a href="https://instagram.com/rohitbag233" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              ${icon('instagram', 20)}
            </a>
            <a href="https://youtube.com/@TigerRohit" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              ${icon('youtube', 20)}
            </a>
            <a href="https://linkedin.com/in/rohitbag233" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              ${icon('linkedin', 20)}
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/story">Story</a></li>
            <li><a href="#/vision">Vision</a></li>
            <li><a href="#/projects">Projects</a></li>
            <li><a href="#/cooper">Cooper</a></li>
            <li><a href="#/youtube">YouTube</a></li>
            <li><a href="#/blog">Blog</a></li>
            <li><a href="#/team">Team</a></li>
            <li><a href="#/contact">Contact</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3>Stay Updated</h3>
          <p style="color: var(--text-secondary); margin-bottom: 16px;">
            Get updates on my journey, new projects, and insights.
          </p>
          <form id="newsletter-form" class="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              style="padding: 8px 16px; border-radius: 8px; background: var(--bg-primary); border: 1px solid var(--border-color); color: var(--text-primary);"
              required
            />
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      <div class="copyright">
        <p>© ${currentYear} Rohit Bag. Built with 💙 and ambition.</p>
      </div>
    </div>
  `;
}

export function initFooter() {
  const footer = document.getElementById('footer');
  footer.innerHTML = renderFooter();

  // Newsletter form handler
  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Newsletter feature coming soon!');
    newsletterForm.reset();
  });

  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.remove('hidden');
    } else {
      scrollToTopBtn.classList.add('hidden');
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
