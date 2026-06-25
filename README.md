# PRDR Command Hub

PRDR Command Hub is a static personal reference website for design prompts, animation references, GUI inspiration, and app/software prompt generation.

## Pages

- `index.html` — main dashboard hub
- `animations.html` — animation prompt library and animation prompt generator
- `designs.html` — design prompt library and design prompt generator
- `app-generator.html` — app/software/GUI prompt generator and reference cards

## Structure

```text
prdr-hub/
├─ index.html
├─ animations.html
├─ designs.html
├─ app-generator.html
├─ css/
│  └─ style.css
├─ js/
│  ├─ data.js
│  └─ main.js
└─ README.md
```

## How to add more prompt cards

Most prompt cards are stored in `js/data.js`.

Add new objects to one of these arrays:

- `animationCards`
- `designCards`
- `appCards`

Each card should include:

```js
{
  title: 'Card Title',
  category: 'Category Name',
  bestFor: 'What this is best used for',
  prompt: 'The copy-ready prompt text.'
}
```

## GitHub Pages

This site is ready for GitHub Pages. In GitHub, go to:

Settings → Pages → Build and deployment → Source → Deploy from a branch → `main` → `/root`

Then save the setting.
