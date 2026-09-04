# Xinyu Lu · Academic Homepage

Personal academic website for research in molecular AI, vibrational
spectroscopy, molecular generation, and geometric learning.

## Local development

Requires Node.js 22.12 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Before publishing:

```bash
pnpm lint
pnpm lint:styles
pnpm test:markdown
pnpm astro check
pnpm build
```

The site deploys to GitHub Pages after changes are pushed to `master`.

## Content

- Profile and navigation: `src/site.config.ts`
- Biography: `src/content/about.md`
- Publications: `src/content/publications/main.bib`
- Experience: `src/content/experience.json`

Built with [Astro](https://astro.build) and adapted from
[Astro Scholar](https://github.com/mychiffonn/astro-scholar). The upstream
license and notices are retained in this repository.
