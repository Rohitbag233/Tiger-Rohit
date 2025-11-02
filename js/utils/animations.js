// Animation utilities using Intersection Observer
export function observeElements(selector, options = {}) {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px',
    ...options
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // If element has data-animate attribute, add that animation class
        const animationClass = entry.target.dataset.animate;
        if (animationClass) {
          entry.target.classList.add(animationClass);
        }
      }
    });
  }, defaultOptions);

  const elements = document.querySelectorAll(selector);
  elements.forEach(el => observer.observe(el));

  return observer;
}

export function addScrollReveal() {
  // Observe all elements with .reveal class
  observeElements('.reveal');
  
  // Observe elements with data-animate attribute
  observeElements('[data-animate]');
}

// Animate elements with stagger effect
export function staggerAnimation(elements, delay = 100) {
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('visible');
      const animationClass = element.dataset.animate;
      if (animationClass) {
        element.classList.add(animationClass);
      }
    }, index * delay);
  });
}

// Smooth scroll to element
export function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Add entrance animations to elements
export function addEntranceAnimation(element, animationClass = 'animate-fade-in-up') {
  element.classList.add(animationClass);
}

// Create a simple loading animation
export function showLoading(container) {
  container.innerHTML = `
    <div class="flex justify-center items-center py-20">
      <div class="loading-spinner"></div>
    </div>
  `;
}

export function hideLoading(container, content) {
  container.innerHTML = content;
}
