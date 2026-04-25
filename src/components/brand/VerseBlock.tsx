import { cn } from "@/lib/utils";
import { SITE } from "@/lib/utils";

type VerseBlockProps = {
  variant?: "cream" | "emerald";
  size?: "sm" | "md" | "lg";
  className?: string;
  align?: "left" | "center";
};

export function VerseBlock({
  variant = "cream",
  size = "md",
  className,
  align = "left",
}: VerseBlockProps) {
  const onEmerald = variant === "emerald";
  const sizeClass =
    size === "lg"
      ? "text-2xl md:text-4xl leading-snug"
      : size === "sm"
        ? "text-base leading-relaxed"
        : "text-xl md:text-2xl leading-snug";
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <figure
      className={cn(
        "font-serif italic max-w-3xl",
        align === "center" && "mx-auto",
        alignClass,
        className,
      )}
    >
      <blockquote
        className={cn(
          sizeClass,
          onEmerald ? "text-cream/95" : "text-ink",
          "tracking-tightish",
        )}
      >
        “{SITE.verse.text}”
      </blockquote>
      <figcaption
        className={cn(
          "mt-4 label-eyebrow not-italic",
          onEmerald ? "text-gold-light" : "gold-gradient-text",
        )}
      >
        — {SITE.verse.reference}
      </figcaption>
    </figure>
  );
}
