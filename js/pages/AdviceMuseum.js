import { icon } from '../utils/icons.js';
import { getSupabase, isSupabaseConfigured } from '../services/supabase.js';
import { addScrollReveal } from '../utils/animations.js';

let advices = [];
let loading = true;
let submitting = false;
let submitted = false;

export async function renderAdviceMuseum() {
  return `
    <div class="pt-24 pb-20">
      <div class="container">
        <!-- Hero -->
        <div class="reveal text-center mb-16 max-w-3xl mx-auto" data-animate="animate-fade-in-up">
          <h1 style="font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 700; margin-bottom: 24px;">
            The <span style="color: var(--primary-color);">Advice Museum</span>
          </h1>
          <p style="font-size: 1.25rem; color: var(--text-secondary);">
            A collective wall of life wisdom. Share one piece of advice that changed your perspective or helped you through tough times.
          </p>
        </div>

        <!-- Submit Form -->
        <div class="reveal max-w-2xl mx-auto" style="margin-bottom: 64px;" data-animate="animate-fade-in-up">
          <div class="card">
            <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 24px; display: flex; align-items: center; gap: 8px;">
              <span style="color: var(--primary-color);">${icon('heart', 28)}</span>
              Share Your Advice
            </h2>

            <div id="advice-form-container">
              ${renderAdviceForm()}
            </div>
          </div>
        </div>

        <!-- Advice Wall -->
        <div>
          <h2 class="text-center" style="font-size: 2rem; font-weight: 700; margin-bottom: 48px;">
            The Wall of Wisdom
          </h2>

          <div id="advice-wall">
            ${renderAdviceWall()}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAdviceForm() {
  if (submitted) {
    return `
      <div class="text-center" style="padding: 32px 0;">
        ${icon('checkCircle', 64)}
        <h3 style="font-size: 1.5rem; font-weight: 700; margin: 16px 0 8px;">Thank you!</h3>
        <p style="color: var(--text-secondary);">
          Your advice has been submitted and will appear after approval.
        </p>
      </div>
    `;
  }

  return `
    <form id="advice-form" class="space-y-4">
      <div class="form-group">
        <label for="advice_text" class="form-label">Your Advice *</label>
        <textarea
          id="advice_text"
          name="advice_text"
          placeholder="Share a piece of wisdom that made a difference..."
          style="min-height: 120px;"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="author_name" class="form-label">Your Name *</label>
        <input
          type="text"
          id="author_name"
          name="author_name"
          placeholder="How should we credit you?"
          required
        />
      </div>

      <div class="form-group">
        <label for="author_context" class="form-label">Context (Optional)</label>
        <input
          type="text"
          id="author_context"
          name="author_context"
          placeholder="E.g., Entrepreneur, Student, Teacher..."
        />
      </div>

      <button
        type="submit"
        class="btn btn-primary w-full flex items-center justify-center gap-2"
        ${submitting ? 'disabled' : ''}
      >
        ${submitting ? `
          ${icon('loader', 20)}
          <span>Submitting...</span>
        ` : `
          ${icon('send', 20)}
          <span>Submit Advice</span>
        `}
      </button>
    </form>
  `;
}

function renderAdviceWall() {
  if (loading) {
    return `
      <div class="flex justify-center items-center" style="padding: 80px 0;">
        <div class="loading-spinner"></div>
      </div>
    `;
  }

  if (!isSupabaseConfigured()) {
    return `
      <div class="text-center" style="padding: 80px 0;">
        <p style="font-size: 1.25rem; color: var(--text-secondary);">
          Database not configured. Please set up Supabase to view and submit advice.
        </p>
      </div>
    `;
  }

  if (advices.length === 0) {
    return `
      <div class="text-center" style="padding: 80px 0;">
        <p style="font-size: 1.25rem; color: var(--text-secondary);">
          Be the first to share your wisdom!
        </p>
      </div>
    `;
  }

  return `
    <div class="advice-grid">
      ${advices.map((advice, index) => `
        <div class="advice-card reveal" data-animate="animate-fade-in-up" style="animation-delay: ${index * 0.1}s;">
          <div style="margin-bottom: 16px;">
            <span style="color: var(--primary-color);">${icon('heart', 24)}</span>
            <p class="advice-text" style="margin-top: 8px; font-style: italic; line-height: 1.8;">
              "${advice.advice_text}"
            </p>
          </div>
          <div class="advice-author">
            <p class="advice-author-name">— ${advice.author_name}</p>
            ${advice.author_context ? `
              <p class="advice-author-context">${advice.author_context}</p>
            ` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

export async function initAdviceMuseum() {
  const main = document.getElementById('main-content');
  main.innerHTML = await renderAdviceMuseum();
  
  // Fetch advices
  await fetchAdvices();
  
  // Initialize form handler
  const form = document.getElementById('advice-form');
  if (form) {
    form.addEventListener('submit', handleAdviceSubmit);
  }

  // Initialize scroll reveal animations
  setTimeout(() => {
    addScrollReveal();
  }, 100);
}

async function fetchAdvices() {
  if (!isSupabaseConfigured()) {
    loading = false;
    updateAdviceWall();
    return;
  }

  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('advice_entries')
      .select('*')
      .eq('is_approved', true)
      .order('approved_at', { ascending: false });

    if (error) throw error;
    
    advices = data || [];
  } catch (err) {
    console.error('Error fetching advices:', err);
    advices = [];
  } finally {
    loading = false;
    updateAdviceWall();
  }
}

async function handleAdviceSubmit(e) {
  e.preventDefault();
  
  if (!isSupabaseConfigured()) {
    alert('Database not configured. Please set up Supabase credentials.');
    return;
  }

  submitting = true;
  updateForm();

  const formData = new FormData(e.target);
  const advice = {
    advice_text: formData.get('advice_text'),
    author_name: formData.get('author_name'),
    author_context: formData.get('author_context') || null,
  };

  try {
    const supabase = getSupabase();
    const { error } = await supabase
      .from('advice_entries')
      .insert([advice]);

    if (error) throw error;

    submitted = true;
    e.target.reset();

    setTimeout(() => {
      submitted = false;
      updateForm();
    }, 5000);
  } catch (err) {
    console.error('Error submitting advice:', err);
    alert('Failed to submit advice. Please try again.');
  } finally {
    submitting = false;
    updateForm();
  }
}

function updateForm() {
  const formContainer = document.getElementById('advice-form-container');
  if (formContainer) {
    formContainer.innerHTML = renderAdviceForm();
    
    // Re-attach event listener if form is present
    const form = document.getElementById('advice-form');
    if (form) {
      form.addEventListener('submit', handleAdviceSubmit);
    }
  }
}

function updateAdviceWall() {
  const wall = document.getElementById('advice-wall');
  if (wall) {
    wall.innerHTML = renderAdviceWall();
    
    // Re-initialize scroll reveal for new elements
    setTimeout(() => {
      addScrollReveal();
    }, 100);
  }
}
