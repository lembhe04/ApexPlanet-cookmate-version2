/**
 * CookMate — Main JavaScript (Version 1)
 *
 * Handles UI interactions for the landing page.
 * Search, filtering, and API integration are planned for future versions.
 */

/* ---------- Recipe Card Rendering ---------- */

/**
 * Builds the HTML string for a single recipe card.
 * @param {Object} recipe - A recipe object from recipes.js
 * @returns {string} HTML markup for the card
 */
function createRecipeCard(recipe) {
  return `
    <article class="recipe-card" role="listitem" data-recipe-id="${recipe.id}">
      <div class="recipe-card__image" aria-hidden="true">${recipe.emoji}</div>
      <div class="recipe-card__body">
        <span class="recipe-card__category">${recipe.category}</span>
        <h3 class="recipe-card__title">${recipe.title}</h3>
        <p class="recipe-card__description">${recipe.description}</p>
        <div class="recipe-card__meta">
          <span>⏱️ ${recipe.time}</span>
          <span>📊 ${recipe.difficulty}</span>
        </div>
      </div>
    </article>
  `;
}

/**
 * Renders all static recipe cards into the grid container.
 */
function renderRecipes() {
  const grid = document.getElementById('recipeGrid');

  if (!grid || typeof RECIPES === 'undefined') return;

  grid.innerHTML = RECIPES.map(createRecipeCard).join('');
}

/* ---------- Search Bar (UI only — v2 will add real search) ---------- */

/**
 * Shows a placeholder alert when the user submits the search form.
 * @param {Event} event - Form submit event
 */
function handleSearchSubmit(event) {
  event.preventDefault();
  alert('Recipe search will be available in the next version.');
}

/* ---------- Mobile Navigation ---------- */

/**
 * Toggles the mobile navigation menu open/closed.
 */
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  // Close menu when a nav link is clicked
  menu.querySelectorAll('.navbar__link').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    });
  });
}

/* ---------- Contact Form Validation (Version 2) ---------- */

/**
 * Returns true if the provided email has a basic valid format.
 * This is a simple check suitable for client-side validation.
 * @param {string} value
 * @returns {boolean}
 */
function isValidEmail(value) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(String(value).trim());
}

/**
 * Displays an error message for a given input field.
 * @param {HTMLInputElement|HTMLTextAreaElement} field
 * @param {string} message
 */
function showFieldError(field, message) {
  const errorId = field.id + 'Error';
  const errorElement = document.getElementById(errorId);

  field.classList.add('contact-form__input--error');
  field.setAttribute('aria-invalid', 'true');

  if (errorElement) {
    errorElement.textContent = message;
  }
}

/**
 * Clears any error message for a given input field.
 * @param {HTMLInputElement|HTMLTextAreaElement} field
 */
function clearFieldError(field) {
  const errorId = field.id + 'Error';
  const errorElement = document.getElementById(errorId);

  field.classList.remove('contact-form__input--error');
  field.removeAttribute('aria-invalid');

  if (errorElement) {
    errorElement.textContent = '';
  }
}

/**
 * Validates the contact form fields according to Version 2 rules.
 * - Name required
 * - Email required and basic email format
 * - Message required
 * @param {HTMLFormElement} form
 * @returns {boolean} true if the form is valid
 */
function validateContactForm(form) {
  const nameField = form.querySelector('#contactName');
  const emailField = form.querySelector('#contactEmail');
  const messageField = form.querySelector('#contactMessage');
  let isValid = true;

  [nameField, emailField, messageField].forEach(function (field) {
    if (field) clearFieldError(field);
  });

  if (nameField && !nameField.value.trim()) {
    showFieldError(nameField, 'Please enter your name.');
    isValid = false;
  }

  if (emailField) {
    const emailValue = emailField.value.trim();
    if (!emailValue) {
      showFieldError(emailField, 'Please enter your email address.');
      isValid = false;
    } else if (!isValidEmail(emailValue)) {
      showFieldError(emailField, 'Please enter a valid email address.');
      isValid = false;
    }
  }

  if (messageField && !messageField.value.trim()) {
    showFieldError(messageField, 'Please enter your message.');
    isValid = false;
  }

  return isValid;
}

/**
 * Handles contact form submission for Version 2.
 * Shows inline validation errors and a simple success message.
 * @param {Event} event - Form submit event
 */
function handleContactSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const isFormValid = validateContactForm(form);

  if (!isFormValid) {
    return;
  }

  // Future version: send contact data to a backend/API
  alert('Thank you for reaching out! Your message has been noted for this demo version.');
  form.reset();
}

/* ---------- Footer Year ---------- */

/**
 * Sets the current year in the footer copyright line.
 */
function setFooterYear() {
  const yearEl = document.getElementById('footerYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ---------- App Initialization ---------- */

/**
 * Binds event listeners and renders static content on page load.
 */
function initApp() {
  renderRecipes();
  setFooterYear();
  initMobileNav();

  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', handleSearchSubmit);
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
}

document.addEventListener('DOMContentLoaded', initApp);