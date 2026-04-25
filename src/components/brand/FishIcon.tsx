import { cn } from "@/lib/utils";

type FishIconProps = {
  className?: string;
  variant?: "filled" | "outline";
  /** "auto" (default) keeps the gradient; otherwise uses currentColor */
  color?: "auto" | "current";
  size?: number;
  ariaLabel?: string;
};

let fishIconCounter = 0;

export function FishIcon({
  className,
  variant = "filled",
  color = "auto",
  size = 24,
  ariaLabel,
}: FishIconProps) {
  // Unique gradient id so multiple instances don't collide.
  const id = `fish-grad-${++fishIconCounter}`;
  const useGradient = color === "auto";
  const stroke = useGradient ? `url(#${id})` : "currentColor";
  const fill =
    variant === "filled"
      ? useGradient
        ? `url(#${id})`
        : "currentColor"
      : "none";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role={ariaLabel ? "img" : "presentation"}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      className={cn(className)}
    >
      {useGradient && (
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F4E5A1" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M6 32 L38 16 L38 25 L58 32 L38 39 L38 48 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={variant === "outline" ? 1.2 : 0}
        strokeLinejoin="round"
      />
    </svg>
  );
}
