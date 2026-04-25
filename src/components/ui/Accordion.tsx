"use client";

import * as React from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItemProps = {
  question: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  id?: string;
};

export function AccordionItem({
  question,
  children,
  defaultOpen = false,
  id,
}: AccordionItemProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  const generatedId = React.useId();
  const panelId = id ?? `panel-${generatedId}`;
  const headerId = `${panelId}-header`;

  return (
    <div className="border-b border-gold-base/30">
      <h3 id={headerId}>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "w-full flex items-center justify-between gap-4 py-6 text-left",
            "font-serif text-lg md:text-xl text-emerald-deep tracking-tightish",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-base focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
          )}
        >
          <span>{question}</span>
          <span className="shrink-0 text-gold-dark">
            {open ? <Minus size={18} /> : <Plus size={18} />}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        hidden={!open}
        className="pb-6 pr-10 text-ink-muted leading-relaxed text-[0.95rem]"
      >
        {children}
      </div>
    </div>
  );
}

export function Accordion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("border-t border-gold-base/30", className)}>{children}</div>;
}
