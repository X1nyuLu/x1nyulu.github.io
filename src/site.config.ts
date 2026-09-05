import type {
  FooterConfig,
  LinkConfig,
  ProfileConfig,
  PublicationConfig,
  SiteConfig,
} from "@/types"

export const SITE: SiteConfig = {
  title: "Xinyu Lu",
  homeTitle: "Xinyu Lu — Molecular AI & Vibrational Spectroscopy",
  description:
    "Molecular AI research across vibrational spectroscopy, molecular generation, and geometric learning.",
  href: "https://x1nyulu.github.io",
  author: "Xinyu Lu",
  dir: "ltr",
  defaultPageImage: "/img/social-preview.png",
  defaultPostImage: "/img/social-preview.png",

  locale: {
    lang: "en-US",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    },
  },

  // Table of contents depth shared by blog posts and project detail pages.
  tocMaxDepth: 3,

  blog: {
    featuredPostCount: 0,
    postsPerPage: 8,
    shareActions: ["x"],
  },

  home: {
    careerHighlightCount: 3,
    updateCount: 0,
    publicationCount: 4,
  },

  favicon: "/favicon.svg",
  prerender: true,
  npmCDN: "https://cdn.jsdelivr.net/npm",

  license: {
    label: "CC-BY-4.0",
    href: "https://creativecommons.org/licenses/by/4.0/",
  },
}

export const PROFILE: ProfileConfig = {
  name: SITE.title,
  othernames: "逯新宇",
  tagline: "Molecular AI · Spectroscopy · Geometric Learning",
  email: "xinyulu@stu.xmu.edu.cn",
  location: "Xiamen · Shanghai, China",
  links: {
    github: "https://github.com/X1nyuLu",
    googleScholar:
      "https://scholar.google.com/citations?user=ZU9k5qQAAAAJ&hl=en",
    researchgate: "https://www.researchgate.net/profile/Xinyu-Lu-40",
    cv: "/#cv",
  },
  highlightLinks: ["googleScholar", "github"],
  linksPlacement: {
    header: ["email", "googleScholar", "github", "researchgate"],
    about: false,
    footer: false,
  },
}

export const NAV_LINKS: LinkConfig[] = [
  { href: "/#publications", label: "Publications" },
  { href: "/#cv", label: "CV" },
]

export const NAVIGATION: LinkConfig[] = NAV_LINKS.map(({ href, label }) => ({
  href,
  label,
}))

export const PUB_CONFIG: PublicationConfig = {
  maxFirstAuthors: 6,
  maxLastAuthors: 1,
  highlightAuthor: {
    firstName: "Xinyu",
    lastName: "Lu",
    aliases: ["X. Lu", "Lu, Xinyu"],
  },
  equalSymbols: {
    first: "*",
    second: "†",
    third: "‡",
    last: "§",
  },
}

export const FOOTER: FooterConfig = {
  credits: false,
  sourceCode: "https://github.com/X1nyuLu/x1nyulu.github.io",
  sourceContent:
    "https://github.com/X1nyuLu/x1nyulu.github.io/tree/master/src/content",
  footerLinks: [],
}

if (import.meta.env.DEV && typeof window === "undefined") {
  const {
    FooterConfigSchema,
    ProfileConfigSchema,
    PublicationConfigSchema,
    SiteConfigSchema,
  } = await import("@/schemas")
  SiteConfigSchema.parse(SITE)
  ProfileConfigSchema.parse(PROFILE)
  FooterConfigSchema.parse(FOOTER)
  PublicationConfigSchema.parse(PUB_CONFIG)
}
