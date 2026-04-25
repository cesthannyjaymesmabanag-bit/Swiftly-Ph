"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = React.useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-emerald-deep/95 backdrop-blur-md border-b border-gold-base/20"
          : "bg-cream/80 backdrop-blur-sm border-b border-transparent",
      )}
    >
      <Container size="xl">
        <nav
          aria-label="Primary"
          className="flex h-20 md:h-24 items-center justify-between"
        >
          <Link
            href="/"
            aria-label="Swiftly.ph — home"
            className="flex items-center"
          >
            <Logo variant={scrolled ? "dark" : "light"} size={56} priority />
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative text-sm font-medium tracking-tight transition-colors py-2",
                      scrolled
                        ? "text-cream hover:text-gold-light"
                        : "text-emerald-deep hover:text-emerald-mid",
                      active && "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:gold-gradient",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Button
              href="/contact"
              variant={scrolled ? "gold" : "primary"}
              size="sm"
            >
              Start a project
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className={cn(
              "md:hidden inline-flex items-center justify-center h-10 w-10 rounded-sm",
              scrolled ? "text-cream" : "text-emerald-deep",
            )}
          >
            <Menu size={22} />
          </button>
        </nav>
      </Container>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-emerald-deep text-cream flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between h-20 px-6 border-b border-gold-base/20">
            <Logo variant="dark" size={52} />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center h-10 w-10 rounded-sm text-cream"
            >
              <X size={22} />
            </button>
          </div>
          <ul className="flex-1 px-6 pt-12 space-y-6 overflow-y-auto">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className={cn(
                      "block font-serif text-3xl tracking-tightish",
                      active ? "gold-gradient-text" : "text-cream",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="px-6 pb-10 pt-6 border-t border-gold-base/20">
            <Button
              href="/contact"
              variant="gold"
              size="lg"
              className="w-full"
              onClick={closeMobile}
            >
              Start a project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
