import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhySwiftly } from "@/components/sections/WhySwiftly";
import { CaseStudyTeaser } from "@/components/sections/CaseStudyTeaser";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: `${SITE.name} — Development, SEO & content built swiftly`,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: SITE.url,
    title: `${SITE.name} — Development, SEO & content built swiftly`,
    description: SITE.description,
  },
};

const homeBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeBreadcrumb} id="home-breadcrumb" />
      <Hero />
      <ServicesPreview />
      <WhySwiftly />
      <CaseStudyTeaser />
      <CTABand />
    </>
  );
}
