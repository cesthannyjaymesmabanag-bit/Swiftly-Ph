import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/brand/Reveal";

const points = [
  {
    n: "01",
    title: "Speed of execution",
    body: "We work in two-week cycles and ship every Friday. There is no sprint that ends with a slide deck and no progress.",
  },
  {
    n: "02",
    title: "Engineering for compounding growth",
    body: "Marketing sites are software. We treat them with the rigor of product engineering: clean architecture, observability, performance budgets, and tests.",
  },
  {
    n: "03",
    title: "Faith-rooted craftsmanship",
    body: "We treat every project as work that should outlast the brief. Quiet care, honest timelines, and the patience to build things that hold up.",
  },
];

export function WhySwiftly() {
  return (
    <section
      aria-labelledby="why-heading"
      className="py-20 md:py-28 bg-cream border-t border-gold-base/20"
    >
      <Container size="xl">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="label-eyebrow gold-gradient-text">Why Swiftly</p>
            <h2
              id="why-heading"
              className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
            >
              Built for the multiplication.
            </h2>
            <p className="mt-6 text-ink-muted leading-relaxed max-w-md">
              The studio is small on purpose. Every engagement is led by a
              principal who is on the work from kickoff to launch — there is no
              junior handoff, no offshore translation layer.
            </p>
          </div>
          <Reveal as="ol" stagger={0.08} className="lg:col-span-7 space-y-10">
            {points.map((p) => (
              <li
                key={p.n}
                className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 pb-10 border-b border-gold-base/30 last:border-0 last:pb-0"
              >
                  <span className="font-serif text-3xl gold-gradient-text leading-none">
                    {p.n}
                  </span>
                <div>
                  <h3 className="font-serif text-2xl text-emerald-deep tracking-tightish">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-ink-muted leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </Reveal>
        </Reveal>
      </Container>
    </section>
  );
}
