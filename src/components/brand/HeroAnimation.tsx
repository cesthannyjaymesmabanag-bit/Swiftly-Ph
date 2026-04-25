"use client";

import * as React from "react";
import gsap from "gsap";

/**
 * Targets `[data-hero-anim]` elements inside the closest hero section
 * and stages a single fade-up timeline. Stagger is 80ms per element.
 */
export function HeroAnimation() {
  const sentinelRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const root = sentinelRef.current?.closest("section") ?? document.body;
    const targets = root.querySelectorAll<HTMLElement>("[data-hero-anim]");
    if (targets.length === 0) return;

    gsap.set(targets, { opacity: 0, y: 18 });
    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.05,
    });

    return () => {
      tween.kill();
      gsap.set(targets, { clearProps: "opacity,transform,y" });
    };
  }, []);

  return <div ref={sentinelRef} aria-hidden="true" className="hidden" />;
}
