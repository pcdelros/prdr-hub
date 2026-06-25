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
    const text = `${card.title} ${card.category} ${card.bestFor || ''} ${card.example || ''} ${card.prompt || ''}`.toLowerCase();
    return categoryMatch && (!normalizedQuery || text.includes(normalizedQuery));
  });

  grid.innerHTML = cards.map(card => `
    <article class="prompt-card" data-category="${card.category}">
      <div class="prompt-card-top"><span class="category-badge">${card.category}</span></div>
      <h3>${card.title}</h3>
      <p class="best-for"><strong>Best for:</strong> ${card.bestFor}</p>
      ${card.example ? `<div class="example-box"><strong>Example:</strong> ${card.example}</div>` : ''}
      <p class="prompt-label">Precise prompt</p>
      <p>${card.prompt}</p>
      <button class="button secondary small" data-copy-prompt="${encodeURIComponent(card.prompt)}">Copy Prompt</button>
    </article>
  `).join('') || '<p class="empty-state">No matching cards found.</p>';

  $$('[data-copy-prompt]', grid).forEach(button => {
    button.addEventListener('click', () => copyText(decodeURIComponent(button.dataset.copyPrompt)));
  });
}

function initCardLibraries() {
  ['animationCards', 'designCards', 'appCards', 'troubleshootingCards'].forEach(key => {
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

    if (search) search.addEventListener('input', () => renderCards(key, activeFilter, search.value));
    renderCards(key);
  });
}

function field(form, name, fallback = '') {
  return form.elements[name]?.value?.trim() || fallback;
}

function buildReferenceAppPrompt(form) {
  return `Create a complete downloadable local application, program, script, or GUI for this idea:\n\n${field(form, 'idea', '[APP IDEA]')}\n\nWhat I want it to do:\n${field(form, 'tasks', '[Main tasks and features should be interpreted from my idea and kept focused on the main goal.]')}\n\nWho will use it:\n${field(form, 'users', 'Me')}\n\nPreferred app type:\n${field(form, 'appType', 'Let ChatGPT choose the best approach')}\n\nStyle or design direction:\n${field(form, 'style', 'Use a clean, minimal, modern, polished interface. Keep the design practical, readable, stable, and easy to use.')}\n\nFiles, folders, websites, formats, or systems it should work with:\n${field(form, 'systems', 'None specified. Decide what is needed based on the idea.')}\n\nPerformance concern:\n${field(form, 'performance', 'Normal app')}\n\nCustomization preference:\n${field(form, 'customization', 'Use customization only where it makes sense')}\n\nDeveloper menu preference:\n${field(form, 'devMenu', 'Include only if useful')}\n\nLauncher preference:\n${field(form, 'launcher', 'Use the safest best launcher')}\n\nAvoid:\n${field(form, 'avoid', 'Avoid bloat, confusing wording, overlapping UI, fixed layouts that break when resized, unnecessary hidden background behavior, and forcing batch files when another approach is better.')}\n\nBuild standard to apply automatically:\n\nBefore creating files, interpret my idea and choose the best practical way to build it. Choose the right technology, layout, file structure, launcher, and user experience based on what the app is supposed to do. Do not make the app bloated. Keep the first version stable, clean, and focused.\n\nCreate the actual runnable files. Do not give copy-and-paste code only. Provide the complete files needed to run the app, clearly named and organized so I can easily tell which file to launch. Use the best development approach for the app idea. Do not force batch files unless they are the best fit or useful as optional launchers.\n\nLayout stability requirements:\n- No UI element should overlap, clip, trail off-screen, become hidden behind another element, or become unreadable.\n- Use responsive containers, panels, rows, columns, grids, flex layouts, or scrollable sections instead of fixed absolute positioning whenever possible.\n- Leave consistent spacing between controls.\n- Long text should wrap, truncate cleanly, or sit inside a scrollable area.\n- The window should resize cleanly at small, medium, and large sizes.\n\nDesign requirements:\n- Use a modern, clean, polished, professional interface.\n- Keep spacing, fonts, colors, shadows, borders, and animations consistent.\n- Show progress feedback for loading, scanning, importing, exporting, or processing.\n- Avoid technical jargon in user-facing wording.\n\nCustomization and developer tools:\n- Include a config or theme file only if it makes sense.\n- If a developer menu is useful, keep it hidden from normal UI and open only with Ctrl + Shift + D.\n\nLaunch and security:\n- Include a clearly named normal launcher when useful.\n- Include a separate debug launcher when useful.\n- Avoid suspicious hidden scripts or launch methods that could trigger security tools.\n\nPerformance and error handling:\n- Use background processing for slow tasks.\n- Avoid loading everything at once if there may be many files or items.\n- Handle missing files, permission issues, unsupported formats, failed saves, corrupt config files, and network problems with clear polite messages.\n\nREADME and delivery:\nInclude simple run instructions, explain important folders, include a debug option if useful, note limitations, and provide a downloadable folder or archive.`;
}

function initGenerators() {
  $$('[data-generator]').forEach(form => {
    const output = $('[data-output]', form.closest('.tool-panel'));
    const copyButton = $('[data-copy-output]', form.closest('.tool-panel'));

    form.addEventListener('submit', event => {
      event.preventDefault();
      const type = form.dataset.generator;
      let prompt = '';
      if (type === 'referenceApp') prompt = buildReferenceAppPrompt(form);
      if (type === 'animation') prompt = `Create a ${field(form, 'animationType').toLowerCase()} for ${field(form, 'element', 'the selected UI element')}. Use a ${field(form, 'style').toLowerCase()} style. Keep the animation smooth, lightweight, accessible, and professional.`;
      if (type === 'design') prompt = `Create a polished ${field(form, 'projectType', 'digital interface')} using a ${field(form, 'visualStyle').toLowerCase()} visual style. Make the interface clean, practical, responsive, and easy to scan.`;
      if (type === 'app') prompt = `Create a complete downloadable application for this idea: ${field(form, 'appName', 'Untitled App')}. Main user goal: ${field(form, 'goal', 'Help the user complete the main task quickly and clearly')}. Include runnable files, a clear launcher, debug option when useful, progress states, friendly errors, and a README for a non-developer.`;
      if (output) output.textContent = prompt;
    });

    $$('[data-clear]', form).forEach(button => {
      button.addEventListener('click', () => {
        form.reset();
        if (output) output.textContent = output.classList.contains('tall') ? 'Generated app prompt will appear here.' : 'Fill out the fields and generate a prompt.';
      });
    });

    if (copyButton && output) copyButton.addEventListener('click', () => copyText(output.textContent));
  });
}

function initHomeTools() {
  const linkSearch = $('[data-home-link-search]');
  const linkContainer = $('[data-home-links]');
  if (linkSearch && linkContainer) {
    linkSearch.addEventListener('input', () => {
      const query = linkSearch.value.toLowerCase().trim();
      $$('.quick-link', linkContainer).forEach(link => link.style.display = link.textContent.toLowerCase().includes(query) ? 'grid' : 'none');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initBackToTop();
  initCardLibraries();
  initGenerators();
  initHomeTools();
});
