const PRDR_DATA = {
  animationCards: [
    {
      title: 'Soft Hover Lift',
      category: 'Buttons',
      bestFor: 'Primary buttons, cards, and dashboard actions',
      prompt: 'Create a subtle hover lift animation for a modern light professional dashboard. The element should rise slightly, gain a soft shadow, and return smoothly when the cursor leaves. Keep the motion polished, quick, and not distracting.'
    },
    {
      title: 'Ripple Click Feedback',
      category: 'Buttons',
      bestFor: 'Buttons that need clear click confirmation',
      prompt: 'Create a clean ripple click animation for a button. When clicked, a soft circular ripple should expand from the click point and fade quickly. Keep the effect lightweight, professional, and easy to see without feeling flashy.'
    },
    {
      title: 'Animated Border Focus',
      category: 'Buttons',
      bestFor: 'Important call-to-action buttons and form controls',
      prompt: 'Create an animated border effect where the border gently brightens or traces around the element on hover or focus. Use smooth timing, accessible contrast, and a restrained professional style.'
    },
    {
      title: 'Fade-In Page Load',
      category: 'Page Transitions',
      bestFor: 'Simple websites and reference dashboards',
      prompt: 'Create a smooth page-load animation where the main content fades in and moves upward slightly. Keep the animation short, professional, and optimized so the page still feels fast.'
    },
    {
      title: 'Staggered Card Reveal',
      category: 'Page Transitions',
      bestFor: 'Dashboards, galleries, and prompt libraries',
      prompt: 'Create a staggered reveal animation for a grid of cards. Each card should fade in and slide up one after another with a small delay. Keep the animation smooth, lightweight, and polished.'
    },
    {
      title: 'Skeleton Loader',
      category: 'Loading',
      bestFor: 'Lists, cards, dashboards, and media grids',
      prompt: 'Create a clean skeleton loading state for content cards. Use soft placeholder blocks with a gentle shimmer effect. Make it feel professional and helpful while data or files are loading.'
    },
    {
      title: 'Progress Bar With Status Text',
      category: 'Loading',
      bestFor: 'Apps that scan, import, export, or process files',
      prompt: 'Create a user-friendly progress bar with clear status text. Show the current step, percentage progress, and a calm message explaining what is happening. Keep the visual design clean and reassuring.'
    },
    {
      title: 'Expandable Card',
      category: 'Cards',
      bestFor: 'Reference cards, settings panels, and content previews',
      prompt: 'Create an expandable card animation. When opened, the card should smoothly grow to reveal more content without jumping or overlapping nearby elements. Keep spacing stable and the motion polished.'
    },
    {
      title: 'Image Zoom Card',
      category: 'Cards',
      bestFor: 'Portfolio, gallery, and inspiration cards',
      prompt: 'Create a card hover animation where the image subtly zooms in while the card shadow becomes slightly stronger. Keep the image inside its container and avoid layout shift.'
    },
    {
      title: 'Animated Nav Underline',
      category: 'Navigation',
      bestFor: 'Top navigation menus and tabs',
      prompt: 'Create a smooth animated underline for navigation links. The underline should slide in on hover and clearly show the active page. Keep it minimal, readable, and professional.'
    },
    {
      title: 'Sidebar Reveal',
      category: 'Navigation',
      bestFor: 'App dashboards and admin tools',
      prompt: 'Create a sidebar reveal animation where the panel slides in smoothly, the background dims slightly, and the content remains easy to read. Include clear close behavior and avoid trapping the user.'
    },
    {
      title: 'Toast Notification',
      category: 'Microinteractions',
      bestFor: 'Copy confirmations, saved settings, and success messages',
      prompt: 'Create a polished toast notification animation. The message should slide in gently, remain visible long enough to read, then fade out smoothly. Use friendly wording and avoid blocking the interface.'
    },
    {
      title: 'Toggle Switch Motion',
      category: 'Microinteractions',
      bestFor: 'Settings panels and developer options',
      prompt: 'Create a smooth toggle switch animation with clear on and off states. The knob should glide naturally, the label should be readable, and the state should be obvious without relying only on color.'
    },
    {
      title: 'Search Result Reveal',
      category: 'Microinteractions',
      bestFor: 'Searchable libraries and file browsers',
      prompt: 'Create a search result reveal animation where matching items fade in cleanly and non-matching items disappear without layout glitches. Keep the interaction fast and responsive.'
    }
  ],
  designCards: [
    {
      title: 'Light Professional Dashboard',
      category: 'Dashboard',
      bestFor: 'Reference hubs, internal tools, and productivity apps',
      prompt: 'Create a light professional dashboard UI with a soft gray background, white rounded cards, subtle shadows, clean typography, and clear spacing. The layout should feel organized, trustworthy, and easy to scan. Avoid clutter, overlapping elements, and overly decorative effects.'
    },
    {
      title: 'Clean Apple-Style Interface',
      category: 'Minimal',
      bestFor: 'Media apps, portfolio pages, and polished utilities',
      prompt: 'Create a clean Apple-inspired interface with generous spacing, simple typography, soft neutral colors, rounded panels, and polished controls. Keep the UI calm, premium, and highly readable.'
    },
    {
      title: 'Bento Grid Layout',
      category: 'Layout',
      bestFor: 'Modern landing pages and feature hubs',
      prompt: 'Create a modern bento grid layout with cards of different sizes, strong visual hierarchy, rounded corners, and clear section grouping. Make sure the layout remains responsive and balanced on smaller screens.'
    },
    {
      title: 'Minimal Professional UI',
      category: 'Minimal',
      bestFor: 'Business tools, forms, and documentation sites',
      prompt: 'Create a minimal professional UI with crisp typography, simple borders, restrained colors, and strong spacing. Prioritize readability, clarity, and practical usability over decoration.'
    },
    {
      title: 'Soft Gradient UI',
      category: 'Visual Style',
      bestFor: 'Friendly websites, creative tools, and personal dashboards',
      prompt: 'Create a soft gradient UI with gentle background gradients, white cards, subtle shadows, and clean buttons. Keep the colors controlled and professional so the design feels friendly without becoming distracting.'
    },
    {
      title: 'Command Center Dashboard',
      category: 'Dashboard',
      bestFor: 'Powerful hubs, admin panels, and workflow tools',
      prompt: 'Create a command center dashboard with clear navigation, grouped cards, quick actions, search/filter controls, and status sections. Make it feel powerful but not overwhelming. Keep the layout clean, practical, and expandable.'
    },
    {
      title: 'Form-Heavy Utility Layout',
      category: 'Layout',
      bestFor: 'Prompt generators, settings tools, and app builders',
      prompt: 'Create a form-heavy utility interface that is easy to fill out. Use grouped fields, clear labels, helpful placeholder text, vertical spacing, and strong output areas. Avoid technical jargon in the user-facing wording.'
    },
    {
      title: 'Card-Based Reference Library',
      category: 'Library',
      bestFor: 'Prompt libraries, resource hubs, and inspiration collections',
      prompt: 'Create a card-based reference library with searchable cards, category filters, copy buttons, and short descriptions. Keep the cards evenly spaced, consistent in height where possible, and easy to scan.'
    },
    {
      title: 'Modern SaaS Landing Page',
      category: 'Website',
      bestFor: 'Service websites and product pages',
      prompt: 'Create a modern SaaS landing page with a clear hero section, benefit cards, feature sections, testimonials, pricing or CTA area, and a polished footer. Use clean typography, soft shadows, and a professional visual hierarchy.'
    },
    {
      title: 'Internal IT Tool UI',
      category: 'Utility',
      bestFor: 'Help desk tools, admin utilities, and support dashboards',
      prompt: 'Create an internal IT tool interface that is practical and low-clutter. Include clear status messages, safe action buttons, confirmation prompts for risky actions, progress indicators for long tasks, and simple wording for non-technical users.'
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
