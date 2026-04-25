import { cn } from "@/lib/utils";

type GoldDividerProps = {
  className?: string;
  width?: "full" | "short" | "medium";
  align?: "left" | "center";
};

export function GoldDivider({
  className,
  width = "short",
  align = "left",
}: GoldDividerProps) {
  const widthClass =
    width === "full" ? "w-full" : width === "medium" ? "w-24" : "w-12";
  const alignClass = align === "center" ? "mx-auto" : "";
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn(
        "block h-px gold-gradient",
        widthClass,
        alignClass,
        className,
      )}
    />
  );
}
