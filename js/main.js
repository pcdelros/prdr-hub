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
    const text = `${card.title} ${card.category} ${card.bestFor} ${card.example || ''} ${card.prompt}`.toLowerCase();
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

    if (search) search.addEventListener('input', () => renderCards(key, activeFilter, search.value));
    renderCards(key);
  });
}

function field(form, name, fallback = '') {
  return form.elements[name]?.value?.trim() || fallback;
}

function buildReferenceAppPrompt(form) {
  return `Create a complete downloadable local application, program, script, or GUI for this idea:

${field(form, 'idea', '[APP IDEA]')}

What I want it to do:
${field(form, 'tasks', '[Main tasks and features should be interpreted from my idea and kept focused on the main goal.]')}

Who will use it:
${field(form, 'users', 'Me')}

Preferred app type:
${field(form, 'appType', 'Let ChatGPT choose the best approach')}

Style or design direction:
${field(form, 'style', 'Use a clean, minimal, modern, polished interface. Keep the design practical, readable, stable, and easy to use.')}

Files, folders, websites, formats, or systems it should work with:
${field(form, 'systems', 'None specified. Decide what is needed based on the idea.')}

Performance concern:
${field(form, 'performance', 'Normal app')}

Customization preference:
${field(form, 'customization', 'Use customization only where it makes sense')}

Developer menu preference:
${field(form, 'devMenu', 'Include only if useful')}

Launcher preference:
${field(form, 'launcher', 'Use the safest best launcher')}

Avoid:
${field(form, 'avoid', 'Avoid bloat, confusing wording, overlapping UI, fixed layouts that break when resized, unnecessary hidden background behavior, and forcing batch files when another approach is better.')}

Build standard to apply automatically:

Before creating files, interpret my idea and choose the best practical way to build it. Choose the right technology, layout, file structure, launcher, and user experience based on what the app is supposed to do. Do not make the app bloated. Keep the first version stable, clean, and focused.

Create the actual runnable files. Do not give copy-and-paste code only. Provide the complete files needed to run the app, clearly named and organized so I can easily tell which file to launch. Use the best development approach for the app idea. Do not force batch files unless they are the best fit or useful as optional launchers.

Layout stability requirements:
- No UI element should overlap, clip, trail off-screen, become hidden behind another element, or become unreadable.
- Use responsive containers, panels, rows, columns, grids, flex layouts, or scrollable sections instead of fixed absolute positioning whenever possible.
- Leave consistent spacing between buttons, labels, inputs, cards, menus, tabs, sidebars, and panels.
- Long text should wrap, truncate cleanly, or sit inside a scrollable area.
- Large option sections should scroll vertically instead of expanding sideways.
- The window should support resizing and reflow cleanly at small, medium, and large sizes.
- Review the UI for overlap, clipping, off-screen content, unreadable text, and resizing problems before final delivery.

Design requirements:
- Use a modern, clean, polished, professional interface.
- Keep spacing, padding, fonts, colors, shadows, borders, and animations consistent.
- Keep the app lightweight and efficient.
- If anything loads, scans, processes, imports, exports, or takes time, show a progress bar, loading indicator, status message, or activity feedback.
- Make all buttons, labels, menus, and controls easy to understand.
- Avoid technical jargon in the user-facing interface.
- If custom icons are used, include an icons folder that can read SVG files and has safe fallback icons.

Customization and developer tools:
- Include a config or theme file only if it makes sense for the app.
- If customization is included, make it user-friendly and avoid requiring code edits.
- If a developer menu is useful, keep it hidden from the normal interface and open it only with Ctrl + Shift + D.
- Developer tools may include logs, diagnostics, performance information, reset options, theme tools, and exportable debug reports.

Launch and security:
- Include a clearly named normal launcher when useful.
- Include a separate debug launcher when useful.
- Avoid suspicious hidden scripts, unnecessary background behavior, or launch methods that could trigger security tools.
- If a launch method may be flagged, explain why and provide a safer alternative.

Performance and error handling:
- Use background processing for slow tasks.
- Avoid loading everything at once if the app may handle many files or items.
- Use batching, lazy loading, caching, thumbnails, pagination, or virtualized lists/grids when appropriate.
- Prevent freezing or “not responding” behavior during heavy tasks.
- Handle missing files, permission issues, unsupported formats, failed saves, failed imports/exports, missing dependencies, corrupt config files, and network problems with clear polite messages.

File organization:
Use a clear folder structure similar to this when appropriate:
App Name/
- Start App
- Start App - Debug
- README / Instructions
- app/
- assets/icons/
- assets/images/
- config/
- logs/
- backups/

README requirements:
Include simple instructions explaining which file to launch, how to use the app, how to open developer tools if included, how to customize/reset if included, how to run debug mode, what each folder is for, and any requirements needed.

Quality check before final delivery:
Before sending the final answer, check that the app launches, files are organized, the normal launcher is clear, the debug option works if included, the interface does not overlap or break when resized, long text behaves properly, loading states are clear, and the final package is easy to download, extract, and run.

Final delivery:
Provide a downloadable folder or archive, a clearly named launch file, simple run instructions, important file/folder explanations, requirements, debug option notes, and any limitations I should know.`;
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
