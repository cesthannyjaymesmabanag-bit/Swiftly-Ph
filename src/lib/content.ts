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
  brief: string;
  challenge: string;
  approach: string[];
  outcomeBody: string;
  stats: { label: string; value: string }[];
  stack: string[];
  testimonial?: { quote: string; author: string; role: string };
  publishedAt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cordillera-coffee",
    client: "Cordillera Coffee Co.",
    title: "Rebuilding a heritage coffee brand for the modern shelf",
    type: "Brand site · E-commerce · SEO",
    outcome: "+312% organic traffic in 6 months",
    metric: "+312% organic",
    cover: "/images/cover-cordillera.svg",
    brief:
      "Cordillera Coffee Co. is a third-generation Benguet roaster moving from wholesale into direct-to-consumer. They came to us with a thin Shopify theme, no organic strategy, and a story their existing site was hiding.",
    challenge:
      "The existing storefront ranked for nothing. Page speed was painful, the content was generic, and the brand's heritage — three generations of farmers in the Cordilleras — was buried beneath stock photography.",
    approach: [
      "Rebuilt the storefront on Next.js with a headless Shopify backend, cutting LCP from 4.2s to 1.1s.",
      "Mapped the keyword landscape across origin coffee, brewing methods, and Filipino specialty roasters.",
      "Produced twelve pillar guides written by a former barista trainer, each with original photography from the farms.",
      "Implemented Product, Article, and Organization schema across the catalog and editorial content.",
    ],
    outcomeBody:
      "Six months in, organic sessions tripled and the brand now ranks first for nine of its target queries. DTC revenue grew from 8% of total to 34%, and the editorial work has been republished by two industry trade publications.",
    stats: [
      { label: "Organic traffic", value: "+312%" },
      { label: "DTC revenue share", value: "8% → 34%" },
      { label: "LCP", value: "4.2s → 1.1s" },
    ],
    stack: ["Next.js", "Shopify (Storefront API)", "Sanity", "Vercel"],
    testimonial: {
      quote:
        "We finally have a site that sounds like us and works as hard as we do. Swiftly didn't just rebuild the store — they rebuilt how customers find us.",
      author: "Marisol Bautista",
      role: "Director, Cordillera Coffee Co.",
    },
    publishedAt: "2026-02-12",
  },
  {
    slug: "manila-fintech",
    client: "Cobra Pay",
    title: "A fintech homepage that finally explained the product",
    type: "Marketing site · Tech · Content",
    outcome: "2.4× signup conversion in 90 days",
    metric: "2.4× signups",
    cover: "/images/cover-cobra.svg",
    brief:
      "Cobra Pay is a Manila-based payments platform for SME exporters. Their old site led with vague value props and lost most visitors before they understood the product.",
    challenge:
      "Engineering had built a powerful platform, but marketing was speaking in abstractions. Bounce on the homepage was 71%. The content didn't match the sophistication of the underlying product.",
    approach: [
      "Interviewed nine customers to surface the real jobs-to-be-done and the language they use.",
      "Rewrote the homepage and four product pages around concrete workflows, not abstract benefits.",
      "Rebuilt the marketing site on Next.js with a CMS so the team could ship copy weekly without engineering.",
      "Added schema and a content hub for SME exporter education that is now the team's top lead source.",
    ],
    outcomeBody:
      "Inside 90 days, signup conversion from the homepage went from 1.7% to 4.1%. The exporter education hub now drives more qualified leads than paid acquisition, at roughly a tenth of the cost.",
    stats: [
      { label: "Homepage signup CVR", value: "1.7% → 4.1%" },
      { label: "Bounce rate", value: "71% → 38%" },
      { label: "Organic leads", value: "+490%" },
    ],
    stack: ["Next.js", "Sanity", "Vercel", "Segment"],
    testimonial: {
      quote:
        "Swiftly did the work we'd been trying to do for two years. The new site finally describes what we actually built.",
      author: "JP Tan",
      role: "Co-founder, Cobra Pay",
    },
    publishedAt: "2026-01-18",
  },
];

export const faqs = [
  {
    q: "What does an engagement with Swiftly look like?",
    a: "Most projects begin with a two-week discovery — interviews, audits, and a written plan with a fixed scope and timeline. From there we work in two-week cycles, shipping continuously and reviewing every Friday with the client team. Engagements are typically 8 to 16 weeks for a build, with optional retainer support after launch.",
  },
  {
    q: "Are you a full-time team or a network of freelancers?",
    a: "Swiftly is a small core team based in Manila with a curated bench of senior collaborators we have worked with for years. Every project is led by a Swiftly principal who is on the engagement from kickoff to launch — there is no junior handoff and no offshore translation layer.",
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
