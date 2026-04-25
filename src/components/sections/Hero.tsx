import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { VerseBlock } from "@/components/brand/VerseBlock";
import { FishIcon } from "@/components/brand/FishIcon";
import { HeroAnimation } from "@/components/brand/HeroAnimation";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative fish silhouette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -right-12 md:-right-20 opacity-[0.05]"
      >
        <FishIcon size={420} color="current" className="text-emerald-deep" />
      </div>

      <HeroAnimation />

      <Container size="xl" as="div" className="relative pt-20 md:pt-28 pb-20 md:pb-32">
        <div className="max-w-4xl">
          <p data-hero-anim className="label-eyebrow gold-gradient-text">
            Tech · SEO · Content
          </p>
          <h1
            data-hero-anim
            className="mt-6 font-serif text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] leading-[1.05] tracking-display text-emerald-deep"
          >
            We build websites that move{" "}
            <span className="italic gold-gradient-text">swiftly.</span>
          </h1>
          <p
            data-hero-anim
            className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-muted"
          >
            A Philippine-based studio for ambitious teams. We design and engineer
            production websites, earn organic growth that compounds, and write
            content that earns the reader&rsquo;s attention.
          </p>
          <div
            data-hero-anim
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" variant="primary" size="lg">
              Start a project
              <ArrowRight size={16} />
            </Button>
            <Button href="/work" variant="link" size="lg">
              View our work
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>

        <div data-hero-anim className="mt-20 md:mt-28">
          <GoldDivider width="medium" />
          <VerseBlock size="md" className="mt-8" />
        </div>
      </Container>
    </section>
  );
}
