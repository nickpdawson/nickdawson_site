# nickdawson.net

Personal site for Nick Dawson. Astro + Cloudflare Workers Static Assets.

## Local dev

```bash
npm install
npm run dev          # local preview at localhost:4321
npm run build        # produces ./dist
npm run preview      # preview the built site
npm run deploy       # build + wrangler deploy
```

## Architecture

- **Astro** (static output) — builds to `./dist`
- **Cloudflare Workers Static Assets** — `wrangler.toml` serves `./dist` to the edge
- **Content collections** — Markdown in `src/content/notes/`, `src/content/projects/`, `src/content/courses/`

## Adding a Notes post

1. Create `src/content/notes/YYYY-MM-DD-slug.md`
2. Frontmatter: `title`, `date` (ISO format), optional `summary`
3. Write the body in Markdown
4. `git push` — Cloudflare auto-deploys on push to `main`

## Adding a project to Workshop

`src/content/projects/<slug>.md` — same pattern.

## Adding a course to Lectures

`src/content/courses/<slug>.md` — same pattern.

## Companion design docs

See `/Users/ndawson/Development/Notes/personal-website/` for `design_direction.md`, `content_map.md`, and `prototype.html` (the original static prototype this was ported from).
