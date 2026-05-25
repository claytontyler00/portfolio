import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";

const CONTENT_DIR = path.join(process.cwd(), "content", "case-studies");

export type CaseMeta = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  order: number;
  summary: string;
  metric: string;
  metricLabel: string;
  tldr?: string;
  stats?: { value: string; label: string }[];
  nextSlug?: string;
};

export type CaseStudy = CaseMeta & {
  html: string;
};

function buildMeta(slug: string, data: Record<string, unknown>): CaseMeta {
  const str = (k: string, d = "") => String(data[k] ?? d);
  return {
    slug,
    title: str("title"),
    subtitle: str("subtitle"),
    role: str("role"),
    year: str("year"),
    order: Number(data.order ?? 999),
    summary: str("summary"),
    metric: str("metric"),
    metricLabel: str("metricLabel"),
    tldr: data.tldr ? String(data.tldr) : undefined,
    stats: Array.isArray(data.stats)
      ? (data.stats as Array<{ value?: unknown; label?: unknown }>).map((s) => ({
          value: String(s.value ?? ""),
          label: String(s.label ?? ""),
        }))
      : undefined,
    nextSlug: data.nextSlug ? String(data.nextSlug) : undefined,
  };
}

export function getAllCaseStudies(): CaseMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  const items: CaseMeta[] = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data } = matter(raw);
    return buildMeta(slug, data);
  });
  return items.sort((a, b) => a.order - b.order);
}

// Sanitize schema allows <picture>, <source>, and data-* attrs we add.
const schema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), "picture", "source", "figure", "figcaption"],
  attributes: {
    ...(defaultSchema.attributes ?? {}),
    img: [
      ...((defaultSchema.attributes?.img as string[]) ?? []),
      "loading",
      "decoding",
      "width",
      "height",
    ],
    source: ["src", "srcset", "type", "media"],
    figure: ["className"],
    figcaption: ["className"],
  },
};

/**
 * Rehype plugin that wraps <img> tags in <picture> with AVIF + WebP sources,
 * assuming sibling files exist at the same path with .avif/.webp extensions.
 * Also upgrades to <figure><figcaption> when alt text is present.
 */
function rehypeImagePipeline() {
  return (tree: unknown) => {
    visit(tree as never, "element", (node: { tagName?: string; properties?: Record<string, unknown>; children?: unknown[] }, index, parent: { children?: unknown[] } | null) => {
      if (node.tagName !== "img" || !parent) return;
      const props = (node.properties ?? {}) as Record<string, string>;
      const src = props.src;
      if (!src) return;
      // Only upgrade same-origin /case-studies/ images
      if (!src.startsWith("/")) return;
      const base = src.replace(/\.(png|jpe?g)$/i, "");
      const avif = `${base}.avif`;
      const webp = `${base}.webp`;

      const alt = typeof props.alt === "string" ? props.alt : "";

      const picture = {
        type: "element" as const,
        tagName: "picture",
        properties: {},
        children: [
          {
            type: "element" as const,
            tagName: "source",
            properties: { srcset: avif, type: "image/avif" },
            children: [],
          },
          {
            type: "element" as const,
            tagName: "source",
            properties: { srcset: webp, type: "image/webp" },
            children: [],
          },
          {
            type: "element" as const,
            tagName: "img",
            properties: {
              ...props,
              loading: "lazy",
              decoding: "async",
            },
            children: [],
          },
        ],
      };

      // Wrap in <figure> with optional <figcaption>
      const figure = {
        type: "element" as const,
        tagName: "figure",
        properties: { className: "case-figure" },
        children: [
          picture,
          ...(alt
            ? [
                {
                  type: "element" as const,
                  tagName: "figcaption",
                  properties: {},
                  children: [{ type: "text" as const, value: alt }],
                },
              ]
            : []),
        ],
      };

      if (typeof index === "number") {
        (parent.children as unknown[])[index] = figure;
      }
    });
  };
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  const file = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark()
    .use(remarkRehype)
    .use(rehypeImagePipeline)
    .use(rehypeSanitize, schema)
    .use(rehypeStringify)
    .process(content);

  const html = String(processed);
  return {
    ...buildMeta(slug, data),
    html,
  };
}
