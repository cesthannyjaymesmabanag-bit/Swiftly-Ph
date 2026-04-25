import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { caseStudies } from "@/lib/content";
import { SITE } from "@/lib/utils";

const title = "Work — selected case studies";
const description =
  "Selected work from Swiftly.ph: brand sites, marketing platforms, and SEO programs that earned compounding growth for the teams behind them.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    url: `${SITE.url}/work`,
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
      name: "Work",
      item: `${SITE.url}/work`,
    },
  ],
};

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} id="work-breadcrumb" />

      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <Container size="xl">
          <p className="label-eyebrow gold-gradient-text">Work</p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl md:text-6xl lg:text-7xl tracking-display text-emerald-deep leading-[1.05]">
            A short, honest portfolio.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-muted">
            We share the work we are most proud of — and the outcomes the work
            earned. Every engagement starts with the same question: what should
            this site do that the current one cannot?
          </p>
          <GoldDivider width="medium" className="mt-10" />
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((s) => (
              <CaseStudyCard key={s.slug} study={s} />
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
