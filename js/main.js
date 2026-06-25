const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function copyText(text) {
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard'));
}

function showToast(message) {
  let toast = $('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}

function initNavigation() {
  const toggle = $('[data-menu-toggle]');
  const nav = $('[data-nav]');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

function initBackToTop() {
  const button = $('[data-back-to-top]');
  if (!button) return;
  window.addEventListener('scroll', () => button.classList.toggle('visible', window.scrollY > 500));
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function uniqueCategories(cards) {
  return ['All', ...new Set(cards.map(card => card.category))];
}

function renderCards(key, filter = 'All', query = '') {
  const grid = $(`[data-card-grid="${key}"]`);
  if (!grid || !window.PRDR_DATA?.[key]) return;

  const normalizedQuery = query.trim().toLowerCase();
  const cards = PRDR_DATA[key].filter(card => {
    const categoryMatch = filter === 'All' || card.category === filter;
    const text = `${card.title} ${card.category} ${card.bestFor} ${card.prompt}`.toLowerCase();
    return categoryMatch && (!normalizedQuery || text.includes(normalizedQuery));
  });

  grid.innerHTML = cards.map(card => `
    <article class="prompt-card" data-category="${card.category}">
      <div class="prompt-card-top">
        <span class="category-badge">${card.category}</span>
      </div>
      <h3>${card.title}</h3>
      <p class="best-for"><strong>Best for:</strong> ${card.bestFor}</p>
      <p>${card.prompt}</p>
      <button class="button secondary small" data-copy-prompt="${encodeURIComponent(card.prompt)}">Copy Prompt</button>
    </article>
  `).join('') || '<p class="empty-state">No matching cards found.</p>';

  $$('[data-copy-prompt]', grid).forEach(button => {
    button.addEventListener('click', () => copyText(decodeURIComponent(button.dataset.copyPrompt)));
  });
}

function initCardLibraries() {
  ['animationCards', 'designCards', 'appCards'].forEach(key => {
    const grid = $(`[data-card-grid="${key}"]`);
    if (!grid || !window.PRDR_DATA?.[key]) return;

    const filterGroup = $(`[data-filter-group="${key}"]`);
    const search = $(`[data-search="${key}"]`);
    let activeFilter = 'All';

    if (filterGroup) {
      filterGroup.innerHTML = uniqueCategories(PRDR_DATA[key]).map((category, index) => `<button class="chip ${index === 0 ? 'active' : ''}" data-filter="${category}">${category}</button>`).join('');
      $$('[data-filter]', filterGroup).forEach(chip => {
        chip.addEventListener('click', () => {
          activeFilter = chip.dataset.filter;
          $$('.chip', filterGroup).forEach(item => item.classList.remove('active'));
          chip.classList.add('active');
          renderCards(key, activeFilter, search?.value || '');
        });
      });
    }

    if (search) {
      search.addEventListener('input', () => renderCards(key, activeFilter, search.value));
    }

    renderCards(key);
  });
}

function field(form, name, fallback = '') {
  return form.elements[name]?.value?.trim() || fallback;
}

function initGenerators() {
  $$('[data-generator]').forEach(form => {
    const output = $('[data-output]', form.closest('.tool-panel'));
    const copyButton = $('[data-copy-output]', form.closest('.tool-panel'));

    form.addEventListener('submit', event => {
      event.preventDefault();
      const type = form.dataset.generator;
      let prompt = '';

      if (type === 'animation') {
        prompt = `Create a ${field(form, 'animationType').toLowerCase()} for ${field(form, 'element', 'the selected UI element')}. Use a ${field(form, 'style').toLowerCase()} style. The motion should feel ${field(form, 'speed').toLowerCase()} with a ${field(form, 'intensity').toLowerCase()} level of visual intensity. The purpose is to ${field(form, 'purpose', 'improve usability and make the interface feel more responsive')}. Keep the animation smooth, lightweight, accessible, and professional. Avoid layout shifts, overlapping elements, or distracting movement.${field(form, 'notes') ? ` Extra notes: ${field(form, 'notes')}` : ''}`;
      }

      if (type === 'design') {
        prompt = `Create a polished ${field(form, 'projectType', 'digital interface')} using a ${field(form, 'visualStyle').toLowerCase()} visual style. Use a ${field(form, 'colorMood').toLowerCase()} color mood and a ${field(form, 'layoutType').toLowerCase()} layout. The target user is ${field(form, 'targetUser', 'a general user who needs the interface to be simple and clear')}. The design should work for ${field(form, 'deviceType').toLowerCase()}. Include these UI elements: ${field(form, 'elements', 'clear navigation, readable cards, strong buttons, and organized sections')}. Avoid: ${field(form, 'avoid', 'clutter, overlapping elements, tiny text, confusing labels, and unnecessary decoration')}. Make the interface clean, practical, responsive, and easy to scan.`;
      }

      if (type === 'app') {
        prompt = `Create a complete downloadable application for this idea: ${field(form, 'appName', 'Untitled App')}.

Main user goal: ${field(form, 'goal', 'Help the user complete the main task quickly and clearly')}.

App type: ${field(form, 'appType')}. Platform: ${field(form, 'platform')}.

Must-have features: ${field(form, 'features', 'Add the core features needed for the first usable version')}.

Nice-to-have features: ${field(form, 'niceFeatures', 'Keep optional features separate so the app does not become bloated')}.

Design style: ${field(form, 'designStyle')}. Make the interface clean, modern, polished, evenly spaced, responsive, and easy to use. Avoid overlapping elements or controls trailing off the screen.

Loading/progress needs: ${field(form, 'progress', 'If anything loads, scans, imports, exports, or processes, show a clear progress indicator')}.

Error handling needs: ${field(form, 'errors', 'Use friendly, helpful error messages and avoid technical jargon where possible')}.

Launcher preference: ${field(form, 'launcher')}.

Before creating files, first write a short implementation spec that includes: main user goal, core features, non-goals, recommended technology choice and why it fits, file/folder structure, performance risks, error states, and user acceptance checklist. Then create the actual runnable files. Do not give copy-and-paste code only. Use the best development approach for the app idea. Do not force batch files unless they are the best option or useful as optional launchers. Include a README written for a non-developer.${field(form, 'notes') ? `

Extra notes: ${field(form, 'notes')}` : ''}`;
      }

      output.textContent = prompt;
    });

    $$('[data-clear]', form).forEach(button => {
      button.addEventListener('click', () => {
        form.reset();
        if (output) output.textContent = 'Fill out the fields and generate a prompt.';
      });
    });

    if (copyButton && output) {
      copyButton.addEventListener('click', () => copyText(output.textContent));
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initBackToTop();
  initCardLibraries();
  initGenerators();
});
