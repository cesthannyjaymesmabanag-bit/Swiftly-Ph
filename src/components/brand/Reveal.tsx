"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before this element animates in */
  delay?: number;
  /** Stagger child elements (direct children of the wrapper) */
  stagger?: number;
  /** Translate distance in px (default 16) */
  distance?: number;
  /** Render as a section/article/div, etc. */
  as?: "div" | "section" | "ul" | "ol" | "article";
};

/**
 * Tasteful scroll-triggered fade-up. Renders content statically on the server
 * (no opacity hack, no FOUC); GSAP only enhances after hydration on capable
 * browsers. Falls back to no animation if reduced motion is preferred.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  stagger,
  distance = 16,
  as: Tag = "div",
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const targets =
      stagger !== undefined ? Array.from(el.children) : [el];
    if (targets.length === 0) return;

    gsap.set(targets, { opacity: 0, y: distance });

    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      delay,
      stagger: stagger ?? 0,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(targets, { clearProps: "opacity,transform,y" });
    };
  }, [delay, stagger, distance]);

  return (
    <Tag ref={ref as React.Ref<never>} className={cn(className)}>
      {children}
    </Tag>
  );
}
