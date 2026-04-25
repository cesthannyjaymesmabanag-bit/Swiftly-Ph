import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg" | "xl";
  as?: "div" | "section" | "article" | "header" | "footer" | "main";
};

const sizes = {
  sm: "max-w-4xl",
  md: "max-w-6xl",
  lg: "max-w-7xl",
  xl: "max-w-[88rem]",
};

export function Container({
  size = "lg",
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 md:px-10 lg:px-14",
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
