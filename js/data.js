const PRDR_DATA = {
  animationCards: [
    {
      title: 'Soft Hover Lift',
      category: 'Buttons',
      bestFor: 'Primary buttons, dashboard cards, compact link cards, and call-to-action controls',
      example: 'A button or card moves up 3-6px on hover, gains a soft shadow, and returns smoothly when the cursor leaves.',
      prompt: 'Create a subtle hover lift animation for a modern dark dashboard UI. The element should rise 3-6px on hover, gain a soft shadow, slightly brighten the border, and return smoothly when the cursor leaves. Keep the motion quick, polished, and practical. Do not cause layout shift or overlap nearby elements.'
    },
    {
      title: 'Ripple Click Feedback',
      category: 'Buttons',
      bestFor: 'Buttons that need clear click confirmation without looking flashy',
      example: 'When the user clicks a button, a soft circle expands from the click point and fades out quickly.',
      prompt: 'Create a clean ripple click animation for a button. When clicked, a soft circular ripple should expand from the click point and fade within 350ms. Keep the effect lightweight, professional, and easy to see without looking playful or distracting.'
    },
    {
      title: 'Animated Border Focus',
      category: 'Buttons',
      bestFor: 'Important buttons, input fields, search bars, and selected states',
      example: 'A thin border gently brightens or traces around the element when hovered, focused, or selected.',
      prompt: 'Create an animated focus border for interactive UI elements. On hover or keyboard focus, the border should smoothly brighten, add a subtle glow, and clearly show the active state. Use accessible contrast and keep the effect restrained, professional, and suitable for a dark interface.'
    },
    {
      title: 'Fade-In Page Load',
      category: 'Page Transitions',
      bestFor: 'Reference pages, dashboards, landing pages, and simple static websites',
      example: 'The page content fades in while moving slightly upward as the page first loads.',
      prompt: 'Create a smooth page-load animation where the main content fades in from 0 opacity and moves upward 12-18px into place. Keep the duration around 450-650ms, use easing that feels polished, and avoid delaying important content from being usable.'
    },
    {
      title: 'Staggered Card Reveal',
      category: 'Page Transitions',
      bestFor: 'Prompt libraries, galleries, dashboards, and grids with many cards',
      example: 'Cards appear one after another in a clean sequence instead of all at once.',
      prompt: 'Create a staggered reveal animation for a grid of cards. Each card should fade in and slide up slightly with a 50-90ms delay between cards. Keep the animation smooth and lightweight. The grid should remain responsive and stable with no layout jumping.'
    },
    {
      title: 'Skeleton Loader',
      category: 'Loading',
      bestFor: 'Lists, cards, dashboards, media grids, and pages waiting for data',
      example: 'Temporary gray placeholder bars show where text, thumbnails, and cards will load.',
      prompt: 'Create a clean skeleton loading state for content cards. Use rounded placeholder blocks for titles, text, thumbnails, and buttons, with a subtle shimmer animation. The loader should match the final layout size so the page does not jump when real content appears.'
    },
    {
      title: 'Progress Bar With Status Text',
      category: 'Loading',
      bestFor: 'Apps that scan folders, import files, export data, or process long tasks',
      example: 'A progress bar shows percentage plus text like “Scanning files...” or “Processing 42 of 300 items.”',
      prompt: 'Create a user-friendly progress bar with clear status text. Show the current step, percentage progress, and a calm message explaining what is happening. Include a completed state and an error state. Keep the design clean, readable, and reassuring.'
    },
    {
      title: 'Expandable Card',
      category: 'Cards',
      bestFor: 'Reference cards, settings panels, prompt details, and compact dashboards',
      example: 'A compact card expands downward to reveal more details, buttons, or prompt text.',
      prompt: 'Create an expandable card animation. When opened, the card should smoothly grow downward to reveal more content without jumping, overlapping nearby elements, or losing scroll position. Include a clear collapsed and expanded state with a small chevron rotation.'
    },
    {
      title: 'Image Zoom Card',
      category: 'Cards',
      bestFor: 'Portfolio cards, design references, gallery items, and inspiration boards',
      example: 'The image inside a card zooms slightly while the card itself stays the same size.',
      prompt: 'Create a card hover animation where the image subtly zooms in inside its container while the card border brightens and the shadow increases slightly. The image must stay clipped inside the card, and the layout must not shift.'
    },
    {
      title: 'Animated Nav Underline',
      category: 'Navigation',
      bestFor: 'Top navigation menus, tab bars, and compact dashboards',
      example: 'A small underline slides under a nav link when hovered and stays visible on the active page.',
      prompt: 'Create a smooth animated underline for navigation links. On hover, the underline should slide in from the left. On the active page, the underline should remain visible. Keep the animation minimal, readable, and professional.'
    },
    {
      title: 'Sidebar Reveal',
      category: 'Navigation',
      bestFor: 'App dashboards, mobile menus, admin panels, and settings-heavy tools',
      example: 'A sidebar slides in from the left, the background dims, and a close button is clearly visible.',
      prompt: 'Create a sidebar reveal animation where the panel slides in smoothly from the left, the page background dims slightly, and the first interactive item receives focus. Include clear close behavior, keyboard accessibility, and no content overlap.'
    },
    {
      title: 'Toast Notification',
      category: 'Microinteractions',
      bestFor: 'Copy confirmations, saved settings, successful exports, and completed actions',
      example: 'A small message slides up saying “Copied to clipboard” and fades away after a short delay.',
      prompt: 'Create a polished toast notification animation. The toast should slide up gently, remain visible long enough to read, then fade out smoothly. It should not block important controls. Use friendly, concise wording and include success, warning, and error states.'
    },
    {
      title: 'Toggle Switch Motion',
      category: 'Microinteractions',
      bestFor: 'Settings pages, developer menus, theme toggles, and feature switches',
      example: 'The switch knob glides left or right and the label clearly changes between on and off.',
      prompt: 'Create a smooth toggle switch animation with clear on and off states. The knob should glide naturally, the label should update clearly, and the state should be obvious without relying only on color. Keep the control accessible and compact.'
    },
    {
      title: 'Search Result Reveal',
      category: 'Microinteractions',
      bestFor: 'Searchable libraries, file browsers, prompt hubs, and dashboards',
      example: 'Matching items remain visible while non-matching cards fade out or collapse cleanly.',
      prompt: 'Create a search result reveal animation where matching items fade in cleanly and non-matching items fade or collapse without layout glitches. Keep the interaction fast, responsive, and practical for large card lists.'
    }
  ],
  designCards: [
    {
      title: 'Dark Command Dashboard',
      category: 'Dashboard',
      bestFor: 'Personal hubs, prompt libraries, internal tools, and productivity dashboards',
      example: 'Dark background, compact cards, clear navigation, subtle blue accents, search/filter controls, and practical tools on the homepage.',
      prompt: 'Create a dark command dashboard UI for a personal productivity hub. Use a deep navy/black background, compact rounded cards, subtle borders, soft blue accent colors, clear navigation, searchable link cards, and practical utility sections. Make it feel private, fast, organized, and built for daily use rather than public marketing.'
    },
    {
      title: 'Compact Link Hub',
      category: 'Layout',
      bestFor: 'Homepages that will eventually contain many links and reference pages',
      example: 'Small cards in a dense grid with emoji icons, title, short description, and quick filtering.',
      prompt: 'Create a compact link hub layout with small clickable cards arranged in a responsive grid. Each card should include a small icon or emoji, a short title, and a one-line description. Include a filter/search bar so many future links remain easy to find. Keep spacing tight but readable.'
    },
    {
      title: 'Clean Apple-Style Interface',
      category: 'Minimal',
      bestFor: 'Media apps, portfolio pages, and polished utilities',
      example: 'Large white space, soft rounded panels, refined typography, minimal controls, and calm visual hierarchy.',
      prompt: 'Create a clean Apple-inspired interface with generous spacing, simple typography, soft neutral colors, rounded panels, and polished controls. Keep the UI calm, premium, and highly readable. Avoid clutter, heavy borders, and excessive decoration.'
    },
    {
      title: 'Bento Grid Layout',
      category: 'Layout',
      bestFor: 'Modern landing pages, feature hubs, and dashboard overview sections',
      example: 'Cards of different sizes form a visually interesting grid while still staying organized and responsive.',
      prompt: 'Create a modern bento grid layout with cards of different sizes, strong visual hierarchy, rounded corners, and clear section grouping. Use the layout to highlight the most important content first. Make sure the grid remains responsive and balanced on smaller screens.'
    },
    {
      title: 'Minimal Professional UI',
      category: 'Minimal',
      bestFor: 'Business tools, forms, documentation sites, and client-facing pages',
      example: 'Simple borders, readable typography, strong spacing, restrained color, and no unnecessary effects.',
      prompt: 'Create a minimal professional UI with crisp typography, simple borders, restrained colors, and strong spacing. Prioritize readability, clarity, and practical usability over decoration. Make every button, form field, and section label easy to understand.'
    },
    {
      title: 'Soft Gradient UI',
      category: 'Visual Style',
      bestFor: 'Friendly websites, creative tools, personal dashboards, and lightweight apps',
      example: 'Gentle gradients sit behind clean cards, giving the page personality without hurting readability.',
      prompt: 'Create a soft gradient UI with gentle background gradients, clean cards, subtle shadows, and readable buttons. Keep the colors controlled and professional so the design feels friendly without becoming distracting. Maintain strong contrast and clear spacing.'
    },
    {
      title: 'Form-Heavy Utility Layout',
      category: 'Layout',
      bestFor: 'Prompt generators, settings tools, admin utilities, and app builders',
      example: 'Grouped fields, clear labels, helpful placeholders, vertical flow, and a large generated output box.',
      prompt: 'Create a form-heavy utility interface that is easy to fill out. Use grouped fields, clear labels, helpful placeholder text, vertical spacing, and strong output areas. Keep the form responsive and avoid spreading controls too far across the screen.'
    },
    {
      title: 'Card-Based Reference Library',
      category: 'Library',
      bestFor: 'Prompt libraries, resource hubs, inspiration collections, and reusable examples',
      example: 'Searchable cards with category chips, best-use notes, examples, precise prompts, and copy buttons.',
      prompt: 'Create a card-based reference library with searchable cards, category filters, examples, copy-ready prompts, and copy buttons. Keep cards evenly spaced and easy to scan. Each card should show what the reference is, when to use it, an example, and a precise prompt to recreate it.'
    },
    {
      title: 'Internal IT Tool UI',
      category: 'Utility',
      bestFor: 'Help desk tools, admin utilities, support dashboards, and internal workflows',
      example: 'Status cards, safe action buttons, confirmation prompts, logs, progress states, and simple wording.',
      prompt: 'Create an internal IT tool interface that is practical and low-clutter. Include clear status messages, safe action buttons, confirmation prompts for risky actions, progress indicators for long tasks, and simple wording for non-technical users.'
    },
    {
      title: 'Prompt Generator Workspace',
      category: 'Prompt Tool',
      bestFor: 'Pages where users fill out fields to generate stronger prompts',
      example: 'Dropdowns and text fields on top, generated prompt output below, with copy and clear buttons.',
      prompt: 'Create a prompt generator workspace with guided fields, dropdowns, examples, generated output, copy buttons, and clear/reset controls. The layout should make it easy for someone to turn a rough idea into a complete precise prompt without needing to understand technical wording.'
    }
  ],
  appCards: [
    {
      title: 'Local Desktop Utility',
      category: 'Desktop App',
      bestFor: 'Small Windows tools, file helpers, and internal workflows',
      prompt: 'Create a complete local desktop utility using the best technology for the app idea. Prioritize fast startup, simple controls, clear status messages, friendly errors, and a README for non-developers. Do not force batch files unless they are the best fit or useful as optional launchers.'
    },
    {
      title: 'Internal IT Dashboard',
      category: 'IT Tool',
      bestFor: 'Support teams, status tracking, and admin workflows',
      prompt: 'Create an internal IT dashboard with a clean professional UI, quick actions, status cards, logs or activity history, safe confirmation prompts, and clear non-technical wording. Include loading indicators for network or file operations.'
    },
    {
      title: 'File Scanner / Organizer',
      category: 'File Tool',
      bestFor: 'Apps that read large folders or organize many files',
      prompt: 'Create a file scanner app that can handle large folders without freezing. Use background processing, pagination or lazy loading, progress bars, cancel controls, helpful error messages, and efficient memory usage.'
    },
    {
      title: 'Creative Studio Interface',
      category: 'Creative Tool',
      bestFor: 'Music, image, video, and design apps',
      prompt: 'Create a creative studio-style app with a polished workspace, organized side panels, preview area, tool controls, and smooth interactions. Keep the interface visually inspiring but still practical and easy to understand.'
    },
    {
      title: 'Prompt Generator App',
      category: 'Prompt Tool',
      bestFor: 'Guided builders and reusable prompt systems',
      prompt: 'Create a prompt generator app with guided fields, dropdowns, helpful examples, generated output, copy buttons, reset controls, and saved reference sections. Make the wording simple and the layout easy to follow.'
    },
    {
      title: 'Responsive Web App',
      category: 'Web App',
      bestFor: 'Browser-based tools and dashboards',
      prompt: 'Create a responsive web app with clean HTML, CSS, and JavaScript unless a framework is clearly better. Use accessible controls, mobile-friendly layout, clear loading states, and organized files that are easy to maintain.'
    },
    {
      title: 'Settings-Heavy GUI',
      category: 'GUI Tool',
      bestFor: 'Customization panels and developer menus',
      prompt: 'Create a settings-heavy GUI with grouped sections, clear labels, help text, reset options, search/filter support, and vertical scrolling. Avoid spreading controls across the screen or using technical wording that makes the app hard to use.'
    },
    {
      title: 'Dashboard With Data Cards',
      category: 'Dashboard',
      bestFor: 'Reports, status pages, and command centers',
      prompt: 'Create a dashboard with organized data cards, clear headings, filters, status indicators, and responsive spacing. Make the visual hierarchy obvious so users can quickly understand what needs attention.'
    }
  ]
};
