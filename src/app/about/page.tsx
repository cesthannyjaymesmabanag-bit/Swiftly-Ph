import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { VerseBlock } from "@/components/brand/VerseBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { SITE } from "@/lib/utils";

const title = "About — the studio behind Swiftlyph";
const description =
  "Swiftly is a small Iligan-based studio building tech, SEO, and content for ambitious teams. Rooted in Isaiah 60:22, built for compounding growth.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    url: `${SITE.url}/about`,
    title: `${title} — ${SITE.name}`,
    description,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${SITE.url}/about`,
    },
  ],
};

const team = [
  {
    name: "Rean Cirl Balaba",
    role: "Principal · Engineering",
    bio: "Leads technical builds. Ten years across product engineering, performance work, and growth-side platforms.",
  },
  {
    name: "Editor at large",
    role: "Editorial · Content",
    bio: "Writes the long form. Former trade journalist; obsessed with sentence-level rhythm and cited claims.",
  },
  {
    name: "SEO lead",
    role: "Strategy · SEO",
    bio: "Owns the technical SEO program. Built and ranked editorial sites with millions of monthly sessions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} id="about-breadcrumb" />

      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-12">
        <Container size="lg">
          <p className="label-eyebrow gold-gradient-text">About</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl tracking-display text-emerald-deep leading-[1]">
            We are <span className="italic gold-gradient-text">swiftly.</span>
          </h1>
          <GoldDivider width="medium" className="mt-12" />
        </Container>
      </section>

      {/* Story */}
      <section className="py-12 md:py-20">
        <Container size="sm">
          <div className="prose-swiftly">
            <p>
              Swiftly began as a quiet idea: that a small team — really small —
              could do excellent work, the kind that compounds, if it had the
              patience to do it well and the discipline to ship it on time.
            </p>
            <p>
              We are based in Iligan and we work with founders, marketing
              leaders, and product teams who care about how their websites are
              built, not only how they look on launch day. Our background is
              senior product engineering and editorial work; we treat marketing
              sites as software, and we treat content as something a senior
              practitioner should write.
            </p>
            <h2>What we believe</h2>
            <p>
              The best websites we have ever admired share three traits. They
              are fast. They are written with the rigor of someone who knows
              their subject. And they are findable — because the technical
              foundations underneath them were laid with intent. We try to do
              the same, every project, no exceptions.
            </p>
            <h2>How we work</h2>
            <p>
              Two-week cycles, weekly Friday reviews, written estimates with
              assumptions, fixed scope where the work is fixed and retainers
              where it is not. Every engagement is led by a Swiftly principal
              from kickoff to launch. There is no junior handoff and no
              translation layer between the people who plan the work and the
              people who do it.
            </p>
          </div>
        </Container>
      </section>

      {/* Verse — full bleed emerald */}
      <section
        aria-label="Isaiah 60:22"
        className="bg-emerald-deep text-cream py-24 md:py-32"
      >
        <Container size="md">
          <p className="label-eyebrow text-gold-light">Our foundation</p>
          <p className="mt-8 font-serif italic text-3xl md:text-5xl lg:text-6xl text-cream leading-[1.15] tracking-tightish max-w-4xl">
            “{SITE.verse.text}”
          </p>
          <p className="mt-10 label-eyebrow text-gold-light">
            — {SITE.verse.reference}
          </p>
          <p className="mt-12 max-w-2xl text-cream/85 leading-relaxed">
            We took the studio&rsquo;s name from this verse. We hold it as a working
            philosophy — that disciplined, patient work compounds, and that
            there is a season for ambitious things to happen quickly. It is the
            posture, not the pitch.
          </p>
        </Container>
      </section>

      {/* Team */}
      <section
        aria-labelledby="team-heading"
        className="py-20 md:py-28 border-t border-gold-base/20"
      >
        <Container size="xl">
          <div className="max-w-2xl">
            <p className="label-eyebrow gold-gradient-text">The team</p>
            <h2
              id="team-heading"
              className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
            >
              Senior people, on every project.
            </h2>
            <p className="mt-6 text-ink-muted leading-relaxed">
              The studio is small on purpose. Each project is led by one of us
              from kickoff to launch.
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((person) => (
              <li
                key={person.name}
                className="border border-gold-base/30 rounded-sm p-7 bg-cream"
              >
                <div className="aspect-[4/5] mb-6 bg-emerald-soft border border-gold-base/30 rounded-sm flex items-center justify-center">
                  <span className="font-serif text-5xl gold-gradient-text">
                    {person.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>
                <p className="label-eyebrow text-emerald-mid">{person.role}</p>
                <h3 className="mt-3 font-serif text-xl text-emerald-deep tracking-tightish">
                  {person.name}
                </h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {person.bio}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-20">
            <VerseBlock size="sm" align="center" className="mx-auto" />
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
