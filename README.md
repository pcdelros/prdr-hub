# PRDR Repo Hub

A basic GitHub Pages directory that lists my GitHub repositories and links to each website and source repo.

## Main file

- `index.html` — the full hub page, including the layout, styles, and script.

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

## Fallback list

`index.html` also includes a small fallback repo list. This is only used if GitHub cannot be reached from the browser.
