import { icon } from '../utils/icons.js';
import { addScrollReveal } from '../utils/animations.js';

export function renderHome() {
  const stats = [
    { number: '2', label: 'Companies Founded' },
    { number: '200+', label: 'Day Vlog Challenge' },
    { number: '1M', label: 'Subscriber Goal' },
    { number: 'SIP', label: 'Investment Strategy' },
  ];

  const values = ['Innovation', 'Kindness', 'Obsession', 'Legacy'];

  const features = [
    {
      icon: icon('target', 32),
      title: 'Vision',
      description: 'Building toward Type 1 civilization',
      link: '#/vision',
    },
    {
      icon: icon('rocket', 32),
      title: 'Projects',
      description: 'Reach Resolve, Resolvia, Cooper & more',
      link: '#/projects',
    },
    {
      icon: icon('sparkles', 32),
      title: 'YouTube',
      description: 'Documenting the real startup journey',
      link: '#/youtube',
    },
  ];

  return `
    <div class="overflow-hidden">
      <!-- Hero Section -->
      <section class="hero-section" style="background-image: linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.7)), url(https://vip-go.shutterstock.com/blog/wp-content/uploads/sites/5/2020/05/shutterstock_407554567.jpg);">
        <div class="hero-overlay"></div>
        <div class="container text-center hero-content" data-animate="animate-fade-in-up">
          <h1 style="font-size: clamp(2.5rem, 7vw, 4.5rem); margin-bottom: 24px;">
            Rohit <span style="color: var(--primary-color);">Bag</span>
          </h1>
          <h2 style="font-size: clamp(1.5rem, 3vw, 2rem); margin-bottom: 24px; color: var(--text-secondary);">
            Building for people, not just metrics.
          </h2>
          <p style="font-size: clamp(1rem, 2vw, 1.25rem); color: var(--text-secondary); max-width: 800px; margin: 0 auto 32px;">
            Creator • Founder • Builder — Mumbai. Obsessed with making ideas that scale and give people real opportunity.
          </p>
          <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
            <div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center;">
              <a href="#/contact" class="btn btn-primary">Work with me</a>
              <a href="#/youtube" class="btn btn-secondary">Watch the Grind</a>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="social-float">
          <a href="https://twitter.com/@Rohitbag233" target="_blank" rel="noopener noreferrer">
            <img src="/rohitbag233/rohitbag233/img/twitter.png" alt="Twitter" style="width: 24px; height: 24px;" />
          </a>
          <a href="https://instagram.com/rohitbag233" target="_blank" rel="noopener noreferrer">
            <img src="/rohitbag233/rohitbag233/img/instagram.png" alt="Instagram" style="width: 24px; height: 24px;" />
          </a>
        </div>
      </section>

      <!-- About Section -->
      <section style="padding: 80px 0; background: var(--bg-secondary);">
        <div class="container">
          <div class="reveal text-center" style="margin-bottom: 64px;">
            <h2 style="font-size: clamp(2rem, 5vw, 3rem); margin-bottom: 24px;">About Rohit</h2>
            <p style="font-size: 1.125rem; color: var(--text-secondary); max-width: 900px; margin: 0 auto;">
              I'm Rohit Bag — a founder from Mumbai on a mission to uplift people financially, unite humanity, and push Earth toward Type 1 civilization. I build products, teams, and stories that make progress contagious.
            </p>
          </div>

          <!-- Stats -->
          <div class="stats-grid reveal" style="margin-bottom: 64px;">
            ${stats.map(stat => `
              <div class="stat-item">
                <h3 class="stat-number">${stat.number}</h3>
                <p class="stat-label">${stat.label}</p>
              </div>
            `).join('')}
          </div>

          <!-- Values -->
          <div class="reveal text-center" style="margin-bottom: 64px;">
            <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 24px;">What I Stand For</h3>
            <div class="values-container">
              ${values.map(value => `
                <span class="value-tag">${value}</span>
              `).join('')}
            </div>
          </div>

          <!-- Feature Cards -->
          <div class="features-grid reveal">
            ${features.map(feature => `
              <div class="card text-center">
                <div class="feature-icon">${feature.icon}</div>
                <h4 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 12px;">${feature.title}</h4>
                <p style="color: var(--text-secondary); margin-bottom: 16px;">${feature.description}</p>
                <a href="${feature.link}" class="feature-link">
                  Learn More ${icon('arrowRight', 20)}
                </a>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section style="padding: 80px 0;">
        <div class="container">
          <div class="reveal gradient-bg" style="border-radius: 24px; padding: 48px; text-align: center;">
            <h2 style="font-size: clamp(1.5rem, 4vw, 2.5rem); font-weight: 700; margin-bottom: 16px;">
              Want to join the journey?
            </h2>
            <p style="font-size: 1.25rem; margin-bottom: 32px; opacity: 0.9;">
              Follow along as I build companies that scale human opportunity
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center;">
              <a href="#/story" class="btn" style="background: white; color: var(--primary-color);">
                Read My Story
              </a>
              <a href="#/advice-museum" class="btn" style="background: transparent; border: 2px solid white; color: white;">
                Share Your Advice
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initHome() {
  const main = document.getElementById('main-content');
  main.innerHTML = renderHome();
  
  // Initialize scroll reveal animations
  setTimeout(() => {
    addScrollReveal();
  }, 100);
}
