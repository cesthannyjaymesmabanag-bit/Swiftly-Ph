import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  ogImage?: string;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
  readingMinutes: number;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

async function listMdxFiles(): Promise<string[]> {
  try {
    const entries = await fs.readdir(BLOG_DIR);
    return entries.filter((f) => f.endsWith(".mdx"));
  } catch {
    return [];
  }
}

function parseFrontmatter(raw: string, slug: string): BlogPost {
  const { data, content } = matter(raw);
  const fm = data as Partial<BlogFrontmatter>;
  if (!fm.title || !fm.description || !fm.date || !fm.author) {
    throw new Error(`Blog post "${slug}" is missing required frontmatter`);
  }
  const stats = readingTime(content);
  return {
    slug,
    title: fm.title,
    description: fm.description,
    date: fm.date,
    author: fm.author,
    tags: fm.tags ?? [],
    ogImage: fm.ogImage,
    readingMinutes: Math.max(1, Math.round(stats.minutes)),
    content,
  };
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const files = await listMdxFiles();
  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = await fs.readFile(path.join(BLOG_DIR, file), "utf8");
      const { content: _content, ...meta } = parseFrontmatter(raw, slug);
      void _content;
      return meta;
    }),
  );
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const raw = await fs.readFile(path.join(BLOG_DIR, `${slug}.mdx`), "utf8");
    return parseFrontmatter(raw, slug);
  } catch {
    return null;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const files = await listMdxFiles();
  return files.map((f) => f.replace(/\.mdx$/, ""));
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function extractHeadings(markdown: string): {
  id: string;
  text: string;
  level: 2 | 3;
}[] {
  const headings: { id: string; text: string; level: 2 | 3 }[] = [];
  const lines = markdown.split("\n");
  let inFence = false;
  for (const line of lines) {
    if (/^```/.test(line.trim())) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (!m) continue;
    const level = (m[1].length as 2 | 3);
    const text = m[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    headings.push({ id, text, level });
  }
  return headings;
}
