import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  /** Rendered height in pixels. Width is derived from the SVG's 320:60 aspect ratio. */
  size?: number;
  priority?: boolean;
};

const SVG_ASPECT = 320 / 60; // intrinsic ratio of the navbar lockup

const SOURCES = {
  light: "/logo/swiftly-navbar-light.svg",
  dark: "/logo/swiftly-navbar-dark.svg",
} as const;

/**
 * Swiftly.ph logo lockup (fish + wordmark) rendered from the static SVG assets.
 * "light" is for cream/light backgrounds (emerald wordmark).
 * "dark" is for emerald/dark backgrounds (cream wordmark).
 */
export function Logo({
  variant = "light",
  className,
  size = 32,
  priority = false,
}: LogoProps) {
  const height = size;
  const width = Math.round(height * SVG_ASPECT);
  return (
    <Image
      src={SOURCES[variant]}
      alt="Swiftly.ph"
      width={width}
      height={height}
      priority={priority}
      className={cn("block h-auto w-auto", className)}
      style={{ height: `${height}px` }}
    />
  );
}
