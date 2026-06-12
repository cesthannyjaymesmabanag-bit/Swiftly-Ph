import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Swiftlyph",
  url: "https://swiftlyph.com",
  shortName: "Swiftly",
  tagline: "Development · SEO · Content. Built swiftly.",
  description:
    "Swiftlyph is a Philippine-based tech, SEO, and content agency. We build websites and growth systems that compound, with the discipline of senior engineering and the patience of long-form craft.",
  email: "hello@swiftlyph.com",
  location: "Iligan, Philippines",
  social: {
    facebook: "https://facebook.com/swiftlyph",
    instagram: "https://instagram.com/swiftlyph",
    linkedin: "https://linkedin.com/company/swiftlyph",
  },
  verse: {
    text: "The least of you will become a thousand, the smallest a mighty nation. I am the Lord; in its time I will do this swiftly.",
    reference: "Isaiah 60:22",
  },
} as const;
