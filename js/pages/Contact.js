import { icon } from '../utils/icons.js';
import { getSupabase, isSupabaseConfigured } from '../services/supabase.js';
import { addScrollReveal } from '../utils/animations.js';

let submitting = false;
let submitted = false;

export function renderContact() {
  return `
    <div class="pt-24 pb-20">
      <div class="container">
        <div class="reveal text-center mb-16 max-w-3xl mx-auto" data-animate="animate-fade-in-up">
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <span style="color: var(--primary-color);">${icon('mail', 64)}</span>
          </div>
          <h1 style="font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 700; margin-bottom: 24px;">
            Get in <span style="color: var(--primary-color);">Touch</span>
          </h1>
          <p style="font-size: 1.25rem; color: var(--text-secondary);">
            Have a project in mind? Want to collaborate? Let's talk.
          </p>
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="reveal card" data-animate="animate-fade-in-up">
            <div id="contact-form-container">
              ${renderContactForm()}
            </div>
          </div>

          <div class="text-center" style="margin-top: 32px; color: var(--text-secondary);">
            <p style="margin-bottom: 16px;">Or reach me directly:</p>
            <a href="mailto:rohitbag233@gmail.com" style="color: var(--primary-color); text-decoration: none;">
              rohitbag233@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderContactForm() {
  if (submitted) {
    return `
      <div class="text-center" style="padding: 32px 0;">
        <div style="width: 64px; height: 64px; background-color: rgb(16, 185, 129); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
          <span style="color: white;">${icon('mail', 32)}</span>
        </div>
        <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 8px;">Message Sent!</h3>
        <p style="color: var(--text-secondary);">
          I'll get back to you as soon as possible.
        </p>
      </div>
    `;
  }

  return `
    <form id="contact-form" class="space-y-4">
      <div class="form-group">
        <label for="name" class="form-label">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
        />
      </div>

      <div class="form-group">
        <label for="email" class="form-label">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div class="form-group">
        <label for="subject" class="form-label">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="What's this about?"
        />
      </div>

      <div class="form-group">
        <label for="message" class="form-label">Message *</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or inquiry..."
          style="min-height: 150px;"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="btn btn-primary w-full flex items-center justify-center gap-2"
        ${submitting ? 'disabled' : ''}
      >
        ${submitting ? `
          ${icon('loader', 20)}
          <span>Sending...</span>
        ` : `
          ${icon('send', 20)}
          <span>Send Message</span>
        `}
      </button>
    </form>
  `;
}

export function initContact() {
  const main = document.getElementById('main-content');
  main.innerHTML = renderContact();
  
  // Initialize form handler
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', handleContactSubmit);
  }

  // Initialize scroll reveal animations
  setTimeout(() => {
    addScrollReveal();
  }, 100);
}

async function handleContactSubmit(e) {
  e.preventDefault();
  
  if (!isSupabaseConfigured()) {
    alert('Database not configured. Please email directly at rohitbag233@gmail.com');
    return;
  }

  submitting = true;
  updateForm();

  const formData = new FormData(e.target);
  const message = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  try {
    const supabase = getSupabase();
    const { error } = await supabase
      .from('contact_messages')
      .insert([message]);

    if (error) throw error;

    submitted = true;
    e.target.reset();

    setTimeout(() => {
      submitted = false;
      updateForm();
    }, 5000);
  } catch (err) {
    console.error('Error submitting message:', err);
    alert('Failed to send message. Please try emailing directly at rohitbag233@gmail.com');
  } finally {
    submitting = false;
    updateForm();
  }
}

function updateForm() {
  const formContainer = document.getElementById('contact-form-container');
  if (formContainer) {
    formContainer.innerHTML = renderContactForm();
    
    // Re-attach event listener if form is present
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', handleContactSubmit);
    }
  }
}
