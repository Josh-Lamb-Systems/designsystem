# Josh Lamb Systems design system

One source of truth for every Josh Lamb Systems design: websites, slide decks, HyperFrames video,
email, print, and doop canvases.

```
tokens/*.tokens.json   ← THE source. Edit values here (DTCG 2025.10 format).
        │  npm run build
        ├─▶ dist/tokens.css    every value as a --jls-* CSS variable (light + dark)
        ├─▶ dist/jls.css       one-link bundle: fonts + tokens + base components
        ├─▶ DESIGN.md          front matter regenerated; the prose (rules, voice) is hand-written
        ├─▶ dist/templates/    landing, deck, poster, form, email, newsletter
        └─▶ dist/index.html    gallery: colors, type, components, logos, templates
```

## Use it

Any HTML (websites, doop frames, slides, HyperFrames compositions):

```html
<link rel="stylesheet" href="BASE_URL/jls.css">
<body class="jls">
```

- **Only the variables:** link `BASE_URL/tokens.css`.
- **Dark mode:** add `class="jls-dark"` or `data-theme="dark"` to any element.
- **AI agents:** give them `DESIGN.md`. It holds the token values *and* the rules: voice, logo
  usage, and per-medium guidance for web, slides, video, email and print.
- **Tools** (Figma plugins, Penpot, Style Dictionary): read `BASE_URL/tokens/jls.resolver.json`.
- **Tailwind v4:** `npm run export:tailwind > theme.css`.

`BASE_URL` is wherever `dist/` is published. With the included workflow, that's
`https://<github-user>.github.io/jls-design-system`. After the first publish, replace `BASE_URL` in
`DESIGN.md` and `src/index.html`.

## Change something

1. Edit a value in `tokens/` (or run `npx tz lab` for a visual token editor).
2. Edit rules or voice in the prose of `DESIGN.md`. Never edit its front matter by hand: the build
   rewrites it.
3. `npm run build`, then open `dist/index.html` to check.
4. `npm run check` before committing. It lints the tokens, confirms DESIGN.md is in sync, and lints
   DESIGN.md against the spec, including WCAG contrast.

## Layout

| Path | What |
| --- | --- |
| `tokens/base.tokens.json` | Palette, gradient, fonts, type scale, spacing, radius, layout, motion |
| `tokens/theme.light.tokens.json`, `theme.dark.tokens.json` | Semantic colors and shadows per theme |
| `tokens/jls.resolver.json` | DTCG resolver tying base + theme together |
| `src/base.css` | Optional base layer: element defaults and `.jls-*` components |
| `src/index.html` | Gallery page |
| `templates/` | Template sources (emails get tokens inlined at build) |
| `fonts/` | Poppins (display) and Source Sans 3 (body), self-hosted, SIL OFL 1.1 |
| `logos/` | Full logo, reversed logo, symbol (gradient, black, white), favicons |
| `docs/brandbook.pdf` | Original brandbook |
| `scripts/build.mjs` | Assembles `dist/` and regenerates DESIGN.md front matter |

## Provenance

Built from the Open Design export (Oct 2026), the brandbook, and the live CSS of
joshlambsystems.com. The export's generated Ant Design palette was dropped in favor of the colors
the site actually uses. The body font changed from Poppins to Source Sans 3 for readability, while
Poppins stays the display face.
