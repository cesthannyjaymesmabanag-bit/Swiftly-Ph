import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans text-sm font-medium tracking-tight transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-base focus-visible:ring-offset-2 focus-visible:ring-offset-cream whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald-deep text-cream hover:bg-emerald-mid border border-emerald-deep hover:border-emerald-mid [&_.gold]:gold-gradient-text",
        gold: "gold-gradient text-emerald-deep border border-gold-dark/40 hover:opacity-90",
        ghost:
          "bg-transparent text-emerald-deep border border-transparent hover:border-gold-base/40",
        outline:
          "bg-transparent text-emerald-deep border border-emerald-deep/20 hover:border-emerald-deep hover:bg-emerald-deep hover:text-cream",
        link: "bg-transparent text-emerald-deep underline-offset-4 hover:underline decoration-gold-base/60 px-0",
      },
      size: {
        sm: "h-9 px-4 rounded-sm",
        md: "h-11 px-6 rounded-sm",
        lg: "h-12 px-8 rounded-sm text-[0.95rem]",
        icon: "h-10 w-10 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type CommonProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button({ className, variant, size, ...props }, ref) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if ("href" in props && props.href !== undefined) {
    const { href, children, ...rest } = props;
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...rest}
      >
        {children}
      </Link>
    );
  }
  const { children, type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
});

export { buttonVariants };
