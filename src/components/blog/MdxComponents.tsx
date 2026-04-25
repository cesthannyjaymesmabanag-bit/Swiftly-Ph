import type { ComponentPropsWithoutRef, ReactNode } from "react";

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function nodeToText(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(nodeToText).join("");
  if (children && typeof children === "object") {
    const obj = children as unknown as { props?: { children?: ReactNode } };
    if (obj.props && obj.props.children !== undefined) {
      return nodeToText(obj.props.children);
    }
  }
  return "";
}

export const mdxComponents = {
  h1: () => null, // posts already have an H1 from frontmatter
  h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => {
    const id = slugify(nodeToText(children));
    return (
      <h2 id={id} {...props} className="scroll-mt-24">
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => {
    const id = slugify(nodeToText(children));
    return (
      <h3 id={id} {...props} className="scroll-mt-24">
        {children}
      </h3>
    );
  },
  a: ({ href = "#", children, ...rest }: ComponentPropsWithoutRef<"a">) => (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      {...rest}
    >
      {children}
    </a>
  ),
};
