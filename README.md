# Clayton Tyler · Portfolio

Personal portfolio at [claytontyler.com](https://claytontyler.com).

Built with Next.js 16 (App Router) + React 19. Case studies are markdown in `content/case-studies/`, rendered through a remark → rehype pipeline with sanitized HTML and `<picture>` tags emitting AVIF + WebP + PNG fallbacks.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/` — pages (home, about, case studies, sitemap, robots, OG image, 404, error)
- `components/` — shared Nav + Footer
- `content/case-studies/*.md` — case study source with frontmatter (title, subtitle, role, year, metric, stats, tldr)
- `lib/case-studies.ts` — markdown loader + rehype image pipeline
- `public/case-studies/<slug>/` — hero and inline images per case study
- `scripts/optimize-images.mjs` — batch resize + convert to AVIF/WebP

## Deploying

Configured for Vercel. Push to `main` = production deploy. PRs auto-preview.

Env vars (optional):
- `NEXT_PUBLIC_SITE_URL` — override the canonical origin (defaults to `claytontyler.com` in production; Vercel preview uses `VERCEL_URL` automatically)
