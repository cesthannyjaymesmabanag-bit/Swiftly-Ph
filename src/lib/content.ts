import { Code2, Search, Feather, type LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    id: "tech",
    slug: "tech",
    icon: Code2,
    title: "Development",
    short:
      "Production-grade websites and growth systems engineered with the discipline of a senior team.",
    description:
      "We build the kind of systems that compound — fast, accessible, observable, and easy to extend. From marketing sites to full product surfaces, we ship with the performance budgets and engineering rigor of teams much larger than us.",
    deliverables: [
      "Next.js marketing and product sites with full SSR/SSG",
      "Headless commerce, CMS, and integration work",
      "Performance and Core Web Vitals remediation",
      "Custom internal tools, dashboards, and APIs",
      "Migration off legacy stacks and rebuilds",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
      "Sanity / Contentful",
    ],
  },
  {
    id: "seo",
    slug: "seo",
    icon: Search,
    title: "SEO strategy",
    short:
      "Technical and editorial SEO that earns compounding traffic — built into the codebase, not bolted on.",
    description:
      "SEO is engineering, not magic. We audit the technical foundations, fix what's quietly costing you rankings, and ship the on-page architecture that lets your best content reach the people searching for it.",
    deliverables: [
      "Full technical and on-page audits with prioritized fixes",
      "Keyword and intent mapping by funnel stage",
      "Programmatic SEO architecture and templates",
      "Schema.org structured data implementation",
      "Internal linking systems and content hubs",
    ],
    stack: [
      "Ahrefs",
      "Search Console",
      "Screaming Frog",
      "Schema.org",
      "Looker Studio",
    ],
  },
  {
    id: "content",
    slug: "content",
    icon: Feather,
    title: "Content production",
    short:
      "Long-form, well-researched content that earns trust and ranks — written by people who understand the subject.",
    description:
      "We write the way senior practitioners read: precise, opinionated, and grounded in real work. Our writers come from the disciplines they cover, so the output reads like expertise — because it is.",
    deliverables: [
      "Editorial strategy and content calendars",
      "Pillar pages and supporting cluster content",
      "Customer case studies and long-form essays",
      "Conversion-focused landing page copy",
      "Email courses and lifecycle sequences",
    ],
    stack: ["Notion", "Figma", "Grammarly Pro", "Surfer SEO"],
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  type: string;
  outcome: string;
  metric: string;
  cover: string;
  coverFit?: "cover" | "contain";
  brief: string;
  challenge: string;
  approach: string[];
  outcomeBody: string;
  stats: { label: string; value: string }[];
  stack: string[];
  testimonial?: { quote: string; author: string; role: string };
  website?: string;
  publishedAt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "archant-shopify-maintenance",
    client: "Archant",
    title: "Shopify maintenance and custom apps for a design commerce brand",
    type: "Shopify · Maintenance · Custom apps",
    outcome: "Ongoing ecommerce improvements",
    metric: "Shopify support",
    cover: "/images/archant-homepage.jpg",
    brief:
      "Archant is an Australia-based design commerce brand with an established Shopify storefront. Swiftlyph supports the existing site through maintenance, targeted improvements, and custom app work. We did not build the original store; our role is to improve and extend it carefully around live commerce operations.",
    challenge:
      "Archant's Shopify site supports product discovery, trade account flows, editorial inspiration, and ecommerce conversion. The work requires steady technical maintenance and scoped improvements without interrupting customers, internal teams, or day-to-day store operations.",
    approach: [
      "Maintain and improve the existing Shopify theme and app surface without unnecessary rebuild work.",
      "Ship scoped frontend and backend improvements around real commerce workflows.",
      "Build custom Shopify app functionality where off-the-shelf tooling does not fit the operational need.",
      "Handle technical fixes, quality checks, and incremental enhancements with care for the live storefront.",
    ],
    outcomeBody:
      "Archant has an ongoing technical partner for Shopify maintenance, improvements, and custom app work. The engagement is intentionally practical: keep the existing commerce platform stable, make the right improvements at the right time, and extend Shopify where the business needs more than standard theme or app configuration.",
    stats: [
      { label: "Engagement", value: "Ongoing" },
      { label: "Platform", value: "Shopify" },
      { label: "Scope", value: "Maintenance + apps" },
    ],
    stack: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "Shopify apps",
      "Ecommerce maintenance",
    ],
    website: "https://www.archant.com.au",
    publishedAt: "2026-06-25",
  },
  {
    slug: "crateonscene-mvp",
    client: "CrateOnScene",
    title: "MVP build for a national car event discovery platform",
    type: "MVP · Product build · Ongoing support",
    outcome: "From ideation to live product",
    metric: "MVP launched",
    cover: "/images/crateos-logo.png",
    coverFit: "contain",
    brief:
      "CrateOnScene is a car-event discovery platform for spectators, drivers, event producers, and businesses connected to the automotive scene. Swiftlyph helped take the product from ideation through MVP design, build, and deployment, then continued with new features, bug fixes, and product improvements after launch.",
    challenge:
      "The product needed to move quickly from concept to a usable public platform while supporting several real workflows: event discovery, event detail pages, business profiles, user registration, role-specific onboarding, and a lightweight app-like experience for repeat users.",
    approach: [
      "Shaped the MVP scope from the initial product idea into a buildable launch plan.",
      "Built and deployed the public event-discovery experience with event listings, featured spotlights, and location/date context.",
      "Implemented account flows and role-specific paths for spectators, drivers, businesses, and event producers.",
      "Continued post-launch development with new features, bug fixes, UX refinements, and operational support.",
    ],
    outcomeBody:
      "CrateOnScene launched as a working MVP with a live public event directory and the foundations for a broader automotive-scene platform. The work did not stop at deployment: Swiftlyph continues to support the product through feature development, bug fixing, and practical improvements informed by real usage.",
    stats: [
      { label: "Stage", value: "MVP to live" },
      { label: "Scope", value: "Build + support" },
      { label: "Product", value: "Event platform" },
    ],
    stack: [
      "Product strategy",
      "Full-stack development",
      "MVP delivery",
      "Deployment",
      "Feature support",
    ],
    website: "https://crateonscene.com",
    publishedAt: "2026-06-25",
  },
];

export const faqs = [
  {
    q: "What does an engagement with Swiftly look like?",
    a: "Most projects begin with a two-week discovery — interviews, audits, and a written plan with a fixed scope and timeline. From there we work in two-week cycles, shipping continuously and reviewing every Friday with the client team. Engagements are typically 8 to 16 weeks for a build, with optional retainer support after launch.",
  },
  {
    q: "Are you a full-time team or a network of freelancers?",
    a: "Swiftly is a small core team based in Iligan with a curated bench of senior collaborators we have worked with for years. Every project is led by a Swiftly principal who is on the engagement from kickoff to launch — there is no junior handoff and no offshore translation layer.",
  },
  {
    q: "How do you price work?",
    a: "Fixed price for defined-scope projects, monthly retainers for ongoing work. We share a written estimate with assumptions and a payment schedule before any contract is signed. We do not charge by the hour for project work, because we are paid for outcomes, not time.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. About a third of our work is for clients in the US, Singapore, and Australia. We work in English, run two daily windows of overlap with each region, and our delivery process does not depend on real-time presence.",
  },
  {
    q: "What is the Isaiah 60:22 reference?",
    a: "It is the verse the studio is named for. We take it as a working philosophy — that small, disciplined work compounds, and that there is a season for ambitious things to happen quickly. It shapes how we think about quality and patience, not the work we accept.",
  },
];
