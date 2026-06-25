import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/brand/Reveal";
import { caseStudies } from "@/lib/content";

export function CaseStudyTeaser() {
  const featured = caseStudies[0];
  if (!featured) return null;

  return (
    <section
      aria-labelledby="featured-heading"
      className="py-20 md:py-28 border-t border-gold-base/20"
    >
      <Container size="xl">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="label-eyebrow gold-gradient-text">Featured work</p>
            <h2
              id="featured-heading"
              className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
            >
              The work, the outcome.
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-emerald-deep hover:text-emerald-mid"
          >
            All case studies
            <ArrowRight size={14} />
          </Link>
        </div>

        <Link
          href={`/work/${featured.slug}`}
          className="group block focus:outline-none"
        >
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-gold-base/30 bg-emerald-soft">
                <Image
                  src={featured.cover}
                  alt={`${featured.client} — ${featured.title}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <p className="label-eyebrow text-emerald-mid">{featured.type}</p>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl text-emerald-deep tracking-tightish leading-[1.15]">
                {featured.title}
              </h3>
              <p className="mt-6 text-ink-muted leading-relaxed">
                {featured.brief}
              </p>
              <p className="mt-8 font-serif text-2xl gold-gradient-text">
                {featured.outcome}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-emerald-deep text-sm font-medium group-hover:text-emerald-mid">
                Read case study
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </Reveal>
        </Link>
      </Container>
    </section>
  );
}
