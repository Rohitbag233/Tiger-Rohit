import { addScrollReveal } from '../utils/animations.js';

// Generic simple page renderer for pages without complex functionality
export function createSimplePage(title, content) {
  return {
    render: () => {
      return `
        <div class="pt-24 pb-20">
          <div class="container">
            <div class="reveal text-center max-w-4xl mx-auto" data-animate="animate-fade-in-up">
              <h1 style="font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 700; margin-bottom: 24px;">
                ${title}
              </h1>
              <div style="font-size: 1.125rem; color: var(--text-secondary); line-height: 1.8;">
                ${content}
              </div>
            </div>
          </div>
        </div>
      `;
    },
    init: function() {
      const main = document.getElementById('main-content');
      main.innerHTML = this.render();
      
      setTimeout(() => {
        addScrollReveal();
      }, 100);
    }
  };
}

// Story Page
export const StoryPage = createSimplePage(
  'My Story',
  `
    <p style="margin-bottom: 16px;">
      I'm Rohit Bag, a founder and creator from Mumbai on a mission to build companies that genuinely uplift people financially and unite humanity.
    </p>
    <p style="margin-bottom: 16px;">
      My journey began with a simple belief: technology should serve people, not just metrics. Every project I build, every team I assemble, and every story I share is driven by this core principle.
    </p>
    <p>
      From founding Reach Resolve and Resolvia to documenting my journey on YouTube, I'm committed to making progress contagious and pushing Earth toward becoming a Type 1 civilization.
    </p>
  `
);

// Vision Page
export const VisionPage = createSimplePage(
  'Vision for the Future',
  `
    <p style="margin-bottom: 16px;">
      My vision is simple but ambitious: push Earth toward Type 1 civilization status by building companies and communities that genuinely improve human lives.
    </p>
    <p style="margin-bottom: 16px;">
      This means creating products that scale opportunity, not just revenue. It means building teams that care about impact over ego. It means sharing the journey openly so others can learn and build alongside me.
    </p>
    <p>
      Together, we can build a future where technology serves humanity's highest potential.
    </p>
  `
);

// Projects Page
export const ProjectsPage = createSimplePage(
  'Projects',
  `
    <div class="grid grid-3" style="margin-top: 48px;">
      <div class="card">
        <h3 style="margin-bottom: 12px;">Reach Resolve</h3>
        <p style="color: var(--text-secondary);">
          A platform designed to help people connect and resolve conflicts through meaningful dialogue.
        </p>
      </div>
      <div class="card">
        <h3 style="margin-bottom: 12px;">Resolvia</h3>
        <p style="color: var(--text-secondary);">
          Building solutions that matter for real people with real problems.
        </p>
      </div>
      <div class="card">
        <h3 style="margin-bottom: 12px;">Cooper</h3>
        <p style="color: var(--text-secondary);">
          An innovative project focused on collaboration and community building.
        </p>
      </div>
    </div>
  `
);

// Cooper Page
export const CooperPage = createSimplePage(
  'Cooper',
  `
    <p style="margin-bottom: 16px;">
      Cooper is more than just a project—it's a philosophy of collaboration and mutual support.
    </p>
    <p>
      Named after the principle of cooperation, this initiative brings people together to build something greater than themselves.
    </p>
  `
);

// YouTube Page
export const YouTubePage = createSimplePage(
  'YouTube Journey',
  `
    <p style="margin-bottom: 16px;">
      I'm documenting my entire startup journey on YouTube—the wins, the failures, and everything in between.
    </p>
    <p style="margin-bottom: 16px;">
      Join me for the 200+ day vlog challenge as I build companies, share insights, and prove that transparency breeds trust and community.
    </p>
    <div style="margin-top: 32px;">
      <a href="https://youtube.com/@TigerRohit" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        Subscribe on YouTube
      </a>
    </div>
  `
);

// Blog Page
export const BlogPage = createSimplePage(
  'Blog',
  `
    <p style="margin-bottom: 16px;">
      Thoughts, insights, and lessons from building in public.
    </p>
    <p>
      Blog posts coming soon. Subscribe to stay updated!
    </p>
  `
);

// Team Page
export const TeamPage = createSimplePage(
  'The Team',
  `
    <p style="margin-bottom: 16px;">
      Building great things requires great people. I'm lucky to work with incredibly talented individuals who share the same vision and values.
    </p>
    <p>
      More about our team coming soon!
    </p>
  `
);

// Not Found Page
export const NotFoundPage = createSimplePage(
  '404 - Page Not Found',
  `
    <p style="margin-bottom: 24px;">
      Looks like you've wandered off the beaten path.
    </p>
    <a href="#/" class="btn btn-primary">Go Home</a>
  `
);
