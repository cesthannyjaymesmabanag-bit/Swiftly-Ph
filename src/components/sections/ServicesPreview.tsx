import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { Reveal } from "@/components/brand/Reveal";
import { services } from "@/lib/content";

export function ServicesPreview() {
  return (
    <section
      aria-labelledby="services-heading"
      className="py-20 md:py-28 border-t border-gold-base/20"
    >
      <Container size="xl">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <p className="label-eyebrow gold-gradient-text">What we do</p>
            <h2
              id="services-heading"
              className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
            >
              Three disciplines, one team.
            </h2>
          </div>
          <p className="md:max-w-md text-ink-muted leading-relaxed">
            Most of the websites we admire were built by people who could do all
            three of these things at once. So we built a studio that can.
          </p>
        </Reveal>

        <GoldDivider width="full" className="opacity-50" />

        <Reveal
          stagger={0.08}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group focus:outline-none"
              >
                <Card className="h-full p-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-gold-base/60 group-focus-visible:ring-2 group-focus-visible:ring-gold-base group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-cream">
                  <div className="flex items-center justify-center h-12 w-12 rounded-sm border border-gold-base/40 text-emerald-deep">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl tracking-tightish text-emerald-deep">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-ink-muted leading-relaxed">
                    {service.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-emerald-deep text-sm font-medium group-hover:text-emerald-mid">
                    Learn more
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Card>
              </Link>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
