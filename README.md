# PRDR Repo Hub

A basic GitHub Pages directory that lists my GitHub repositories and links to each website and source repo.

## Main files

- `index.html` — the full hub page, including the layout, styles, sorting, dark mode, and script.
- `favicon.svg` — the website icon shown in the browser tab.

## How it works

The page loads public repositories from the GitHub API for `pcdelros`.

For each repo, the **Website** button uses:

1. The repo's saved homepage URL, if one exists in GitHub.
2. The standard GitHub Pages URL format if no homepage URL is saved:

```text
https://pcdelros.github.io/repo-name/
```

The **Repo** button links directly to the GitHub repository.

## New website workflow

When a new website repo is created, make sure GitHub Pages is enabled for that repo. The hub will automatically pick up public repos from GitHub when the page loads.

If a website uses a custom URL, set that URL in the repo's GitHub **Website** field so the hub links to the correct site.

## Changing the browser tab icon

The browser tab icon is controlled by this line in `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="favicon.svg" />
```

To change it, replace `favicon.svg` with a new SVG icon using the same file name.

You can also use a PNG icon instead. Add a file such as `favicon.png`, then change the line in `index.html` to:

```html
<link rel="icon" type="image/png" href="favicon.png" />
```

After changing the icon, clear the browser cache or open the site in a private window if the old icon still appears.

## Fallback list

`index.html` also includes a small fallback repo list. This is only used if GitHub cannot be reached from the browser.
