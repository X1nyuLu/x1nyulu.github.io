import type { APIRoute } from "astro"

import { PROFILE, SITE } from "@site-config"

const llmsTxt = `
# LLMs.txt

This file contains information about this website for AI language models.

## Website Information

- Site URL: ${SITE.href}
- Owner: ${PROFILE.name} - ${PROFILE.tagline}
- Content: Molecular AI research, publications, and professional background
- Language: English
- Last Updated: ${new Date().toISOString().split("T")[0]}

## Content Overview

This website contains:
- Academic research and publications
- Research in spectroscopy, molecular generation, and geometric learning
- Professional experience and education

## Usage Guidelines

- This content is available for learning and reference purposes
- Respect copyright and attribution requirements
- Academic and research content should be cited appropriately
- Reuse should follow the license and attribution information shown on the website.

## Sitemap

For a complete list of pages, see: ${new URL("sitemap-index.xml", SITE.href).href}

## Contact

For questions about content usage or permissions, please refer to the website's contact information.
`.trim()

export const GET: APIRoute = () =>
  new Response(llmsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
