---
version: alpha
name: Josh Lamb Systems
description: >-
  Brand system for Josh Lamb Systems, an AI-native systems partner for small businesses.
  Generated from tokens/*.tokens.json by `npm run build`; edit the tokens, not this block.
colors:
  primary: "#064ef2"
  secondary: "#2c6dff"
  bg: "#fff"
  bg-alt: "#f7f9fc"
  surface: "#fff"
  text: "#000"
  text-soft: "#3d4451"
  text-faint: "#667085"
  border: "#eaecf0"
  border-strong: "#d0d5dd"
  accent: "#064ef2"
  accent-hover: "#0540c4"
  accent-text: "#064ef2"
  accent-soft: "#eef3ff"
  on-accent: "#fff"
  focus: "#2c6dff"
  inverse-bg: "#000"
  inverse-text: "#fff"
  inverse-text-soft: "#d0d5dd"
  inverse-text-faint: "#8a92a3"
  inverse-accent-text: "#85abff"
  inverse-border: "#2a2f3a"
  success: "#067647"
  success-soft: "#ecfdf3"
  warning: "#b54708"
  warning-soft: "#fffaeb"
  danger: "#b42318"
  danger-soft: "#fef3f2"
typography:
  display:
    fontFamily: Poppins
    fontSize: 4.5rem
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.135rem
  h1:
    fontFamily: Poppins
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.09rem
  h2:
    fontFamily: Poppins
    fontSize: 2.375rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.05rem
  h3:
    fontFamily: Poppins
    fontSize: 1.5rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.015rem
  h4:
    fontFamily: Poppins
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0rem
  lead:
    fontFamily: Source Sans 3
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0rem
  body:
    fontFamily: Source Sans 3
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0rem
  small:
    fontFamily: Source Sans 3
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0rem
  eyebrow:
    fontFamily: Poppins
    fontSize: 0.8125rem
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: 0.065rem
  button:
    fontFamily: Poppins
    fontSize: 0.9375rem
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0rem
rounded:
  sm: 6px
  md: 10px
  lg: 14px
  pill: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  5xl: 128px
components:
  page:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
  section-alt:
    backgroundColor: "{colors.bg-alt}"
    textColor: "{colors.text-soft}"
  caption:
    textColor: "{colors.text-faint}"
    typography: "{typography.small}"
  section-inverse:
    backgroundColor: "{colors.inverse-bg}"
    textColor: "{colors.inverse-text}"
  section-inverse-body:
    backgroundColor: "{colors.inverse-bg}"
    textColor: "{colors.inverse-text-soft}"
  section-inverse-caption:
    backgroundColor: "{colors.inverse-bg}"
    textColor: "{colors.inverse-text-faint}"
  section-inverse-divider:
    backgroundColor: "{colors.inverse-border}"
    height: 1px
  section-inverse-link:
    backgroundColor: "{colors.inverse-bg}"
    textColor: "{colors.inverse-accent-text}"
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
  focus-ring:
    backgroundColor: "{colors.focus}"
    width: 2px
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 14px 28px
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 14px 28px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-soft}"
    rounded: "{rounded.lg}"
    padding: 32px
  tag:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-text}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  tag-quick-win:
    backgroundColor: "{colors.success-soft}"
    textColor: "{colors.success}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
  tag-medium-term:
    backgroundColor: "{colors.warning-soft}"
    textColor: "{colors.warning}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
  alert-danger:
    backgroundColor: "{colors.danger-soft}"
    textColor: "{colors.danger}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  button-primary-pressed:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-accent}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 12px 14px
---
---
---

## Overview

Josh Lamb Systems is an AI-native systems partner for small businesses. The flagship offer is the
**AI Roadmap Sprint**: a two-week, $1,500 flat engagement that maps a business's workflows, scores
every AI opportunity by ROI, and hands over a prioritized implementation roadmap.

The look is clean, confident and bright: lots of white, black type, and one strong blue that carries
every action. It should feel like a sharp operator's notebook, not a futuristic AI brand. No neon, no
robots, no glowing brains.

**Load it with one line** (any HTML: websites, doop frames, slides, HyperFrames compositions):

```html
<link rel="stylesheet" href="BASE_URL/jls.css">
<body class="jls">
```

`jls.css` = webfonts + every `--jls-*` token + an optional base layer (element defaults and the
`.jls-*` components below). Only want the variables? Link `BASE_URL/tokens.css` instead. Use the
semantic `--jls-color-*` tokens; the raw `--jls-palette-*` values are there for edge cases. Dark mode:
add `class="jls-dark"` (or `data-theme="dark"`) to any element.

## Voice & Tone

**Direct, warm, practical.** Write like a trusted operator talking across the table: plain words,
specific numbers, no hype.

- **Direct:** lead with the outcome. Short sentences. One idea per sentence. Name the price, the
  timeline, the hours saved.
- **Warm:** talk to "you" and "your team". Acknowledge the real pain ("Do you have an AI adoption
  problem?"). Confident, never smug or salesy.
- **Practical:** concrete examples over abstractions: "invoice generation from job notes", not
  "intelligent document automation". Every claim should be something a business owner could check.

Use: *map, score, roadmap, quick win, hours saved, flat price, guarantee, your workflows, ROI*.
Avoid: *revolutionize, unlock, leverage, cutting-edge, synergy, game-changer, AI-powered* (as filler),
exclamation marks, and vague "transformation" language.

Reference lines from the live site:

- "Find out exactly where AI can save your business 10+ hours a week."
- "$1,500 flat · 3–5 hours of your team's time · money-back guarantee"
- "No vague strategy, no jargon."

## Colors

Black, white and the brand blue do almost all of the work. Blue means *action or emphasis*. Keep it
scarce so it stays loud.

- **Brand blue (`primary`, `--jls-color-accent`):** primary buttons, links, highlights, key
  numbers. 6.2:1 on white, safe for text.
- **Brand light blue (`secondary`):** only inside the brand gradient and for large decorative
  fills. 4.4:1 on white, so never small text on white.
- **Brand gradient (`--jls-gradient-brand`, light blue to blue at 135deg):** primary buttons, the
  logo symbol, one hero accent per page. Never as a full-page background.
- **Text:** headings in `text` (pure black), body in `text-soft`, captions and meta in `text-faint`.
  All three pass WCAG AA on `bg` and `bg-alt`.
- **Surfaces:** `bg` white, `bg-alt` for alternating sections, `surface` for cards, `border` for
  hairlines.
- **Inverse:** `inverse-bg` (brand black) with `inverse-text`, `inverse-text-soft`,
  `inverse-text-faint`, `inverse-accent-text` and `inverse-border`, for closing CTA bands and section-break slides. These stay black in both
  themes. Use the reversed logo on them.
- **Status:** `success` / `warning` / `danger` with their `-soft` backgrounds, for status only and
  never as decoration. Quick wins can be tagged with success green.

Dark mode swaps every semantic color. Primary buttons stay brand blue in both themes.

## Typography

Two families: **Poppins** for display (headings, buttons, labels, numbers) and **Source Sans 3** for
reading (paragraphs, lists, forms). Poppins is the brandbook face and carries the brand. Source Sans 3
is a warm, humanist sans that stays comfortable at paragraph length where Poppins tires the eye.

- Headings are Poppins Bold (700) with slightly tight tracking. `display` is Poppins ExtraBold (800)
  for hero lines and slide titles.
- Body is Source Sans 3 Regular at 17px (`--jls-font-size-md`), line height 1.6. Source Sans runs
  smaller than Poppins, so do not drop body text below 15px.
- Eyebrows are Poppins Bold, 13px, uppercase, tracked out, in `accent-text` or `text-faint`.
- Big numbers (prices, hours saved, ROI) are Poppins ExtraBold.
- Measure: running text max 720px (`--jls-layout-prose`).

## Layout

8px baseline grid. Every spacing value is a multiple of 8 (the `xxs` 4px step is only for tight
inline gaps).

- Content max width 1120px (`--jls-layout-content`) with 24px side padding.
- Sections breathe: 96px vertical padding on desktop (`--jls-space-4xl`), 64px on mobile.
- Generous white space beats extra content. One message per section.
- Cards sit in 2 to 4 column grids with 24px gaps and collapse to one column under 720px.

## Elevation & Depth

Mostly flat. Depth comes from borders and white space, not shadows.

- Cards rest with a 1px `border` and no shadow. On hover they get `--jls-shadow-md` and an accent
  border.
- `--jls-shadow-lg` is for floating things only: popovers, modals, product mockups.
- Primary buttons carry a soft blue glow (`--jls-shadow-accent`).

## Shapes

Soft, friendly corners, never fully sharp and never bubbly.

- `rounded.sm` 6px: tags, small inputs. `rounded.md` 10px: buttons, inputs. `rounded.lg` 14px: cards
  and panels. `rounded.pill`: status tags and avatars.
- Borders are 1px; secondary buttons and focused inputs use 1.5px.

## Components

The base layer in `jls.css` ships these classes:

- **Buttons:** `.jls-btn.jls-btn--primary` (gradient, white text, blue glow; one per view),
  `.jls-btn.jls-btn--secondary` (white, bordered), `.jls-btn--lg` for hero CTAs, `.jls-btn--sm` for
  dense spots. Labels are verbs:
  "Book a call", "Book your sprint", "See the roadmap".
- **Cards:** `.jls-card`, plus `.jls-card--interactive` for clickable cards.
- **Tags:** `.jls-tag`, `.jls-tag--success` (quick win), `.jls-tag--warning` (medium-term),
  `.jls-tag--neutral`.
- **Type helpers:** `.jls-eyebrow`, `.jls-lead`, `.jls-small`, `.jls-gradient-text` (one phrase per
  page at most).
- **Forms:** `.jls-field`, `.jls-label`, `.jls-input` (inputs, textareas and selects), `.jls-hint`,
  and `.jls-error` under an input marked `aria-invalid="true"`.
- **Layout:** `.jls-container`, `.jls-section`, `.jls-section--alt`, `.jls-prose`.

## Logo

Files live in `BASE_URL/logos/`:

| File | Use |
| --- | --- |
| `jls-logo.svg` | Full logo: gradient symbol and black wordmark. Default on light backgrounds. |
| `jls-logo-reversed.svg` | Full logo with a white wordmark, for dark or blue backgrounds. |
| `jls-logo@2x.png` | 360px-wide PNG of the full logo (at 2x) for email, where SVG is often blocked. |
| `jls-symbol.svg` | Gradient symbol alone: favicons, avatars, small spaces. |
| `jls-symbol-black.svg`, `jls-symbol-white.svg` | One-color symbol for monochrome uses (engraving, embroidery, single-color print). |

Rules from the brandbook:

- **Clear space:** keep a margin equal to the width of the "b" in the wordmark on all four sides. For
  the symbol alone, use half the symbol's width.
- **Minimum size (web):** full logo at least 150px wide on phones, 250px on tablets, 350px on
  desktop pages. Fixed-format media set their own size: 240px on 1920×1080 slides, 180px in email
  (use the PNG). Below that, use the symbol.
- **Position:** top left, top center, bottom right, or center.
- **Backgrounds:** white, black, or brand blue only. Never on busy photos or mid-tone colors.
- **Never:** stretch, rotate, recolor the gradient, add effects or shadows, outline it, or rebuild
  the wordmark in another font.

## Imagery

Real work over abstract AI art. Use photos of people at work, desks, whiteboards and real tools, or
clean diagrams and UI mockups that show workflows, scores and roadmaps. Keep color calm so the brand
blue stays the loudest thing on the page. Avoid robots, glowing brains, circuit boards, sci-fi
gradients and stock handshakes.

## Media

The same tokens drive every medium. Only scale and density change.

### Web and doop frames

Load `jls.css`, put `class="jls"` on the body or the frame root, and build from the components
above. Responsive by default: headings scale with `clamp()`, and grids collapse under 720px.

### Slides (1920×1080)

- One idea per slide. A headline of at most 8 words, plus one supporting line or a single visual.
- Titles 72 to 96px Poppins ExtraBold; body 32 to 40px Source Sans 3; nothing under 24px.
- 96px outer margin. Logo bottom right at 240px wide.
- Mostly white slides. Use a full brand-blue or black slide only for section breaks and the closing
  call to action.
- Big numbers carry slides: "10+ hours a week", "$1,500 flat", "2 weeks".

### Video (HyperFrames compositions, 1920×1080 or 1080×1920)

- Treat every frame like a slide that moves: one message per scene, about 3 to 5 seconds each.
- Minimum text 48px (landscape) or 56px (portrait). Headlines 120px and up.
- Keep 120px safe margins (more on vertical video, where platform UI covers the edges).
- No web chrome: no nav bars, cookie banners or tiny links.
- Motion is calm and confident: 300 to 600ms eases out (`--jls-easing-out`), no bounces or spins. Let
  the brand gradient sweep in for emphasis at most once per video.
- End on the logo plus one call to action ("Book a 2-week AI Roadmap Sprint").

### Email and newsletter

- Single 600px column, table layout, all styles inline. The email templates are built with literal
  values because email clients ignore CSS variables.
- Webfonts are not reliable in email, so headings fall back to Arial Bold. Keep the hierarchy, not the
  font.
- One primary button per email. Use a solid brand-blue button: many clients drop gradients.

### Print and documents

- At least 48px safe margins on letterheads and print (`--jls-layout-print-margin`).
- Logo top left or top center. Black text on white, with brand blue for headings or key numbers only.

## Do's and Don'ts

**Do**

- Use brand blue for one main action per view.
- Lead with specific outcomes and numbers: hours saved, price, timeline.
- Keep layouts airy, on the 8px grid.
- Use Poppins for headings and Source Sans 3 for reading.
- Check contrast: small text needs 4.5:1 or better.

**Don't**

- Don't use light blue (`#2c6dff`) for small text on white.
- Don't introduce new colors, gradients or fonts.
- Don't fill space with generic AI imagery or hype words.
- Don't put more than one primary button in a view.
- Don't place the logo on busy backgrounds or squeeze it below its minimum size.
