import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FishIcon } from "@/components/brand/FishIcon";

export function CTABand() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative bg-emerald-deep text-cream overflow-hidden"
    >
      {/* Subtle repeating fish pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
      >
        <div className="absolute -top-10 -left-10">
          <FishIcon size={220} color="current" className="text-cream" />
        </div>
        <div className="absolute top-32 right-1/3">
          <FishIcon size={140} color="current" className="text-cream" />
        </div>
        <div className="absolute -bottom-12 right-0">
          <FishIcon size={300} color="current" className="text-cream" />
        </div>
      </div>

      <Container size="xl" className="relative py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="label-eyebrow text-gold-light">Let&rsquo;s talk</p>
          <h2
            id="cta-heading"
            className="mt-5 font-serif text-4xl md:text-6xl tracking-display leading-[1.05] text-cream"
          >
            Let&rsquo;s Build Something That Grows.
          </h2>
          <p className="mt-6 text-cream/85 max-w-xl leading-relaxed">
            Tell us about the work. We&rsquo;ll come back inside two business days
            with a written response — not a calendar link.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="gold" size="lg">
              Get in touch
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
