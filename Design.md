# Design — Figma look and feel

This is the design system source of truth for this site. Every value in the linked files was pulled from the Figma reference — not invented — so treat them as real constraints, not suggestions.

**Source:** [Figma — GBMIC — Global Business Management & Investment Company](https://www.figma.com/design/rCZnwKVRQEaqrsfC31FyKC/UI-Exploration---FieldTime-BuildWitt?node-id=5517-78048), frame `5517:78048` (1920 × 12089). Extracted 2026-10-09.

> **Earlier source, now superseded.** This file previously pointed at frame `5256:34891` ("Elite — Framer Template for Consultants / Agencies") in the same Figma file. That was a generic template; `5517:78048` is the real GBMIC page design and overrides it wherever the two disagree. The two biggest corrections: the type scale is **smaller** than the template's (36px H2, not 52px), and there **is** a brand accent (see below).

## The one-sentence summary

**Monochrome, sharp-edged, editorial.** Near-black ink on off-white paper, zero border-radius, no shadows, big section whitespace, tight-tracked Geist, full-colour photography carrying the visual weight — with a single 16×2px blue→red gradient dash as the only hue in the entire system.

## The section rhythm

The page alternates grounds in a fixed pattern. Getting this sequence right matters more than any single component:

| # | Section | Ground |
|---|---|---|
| 1 | Header + hero + banner photo | `#ffffff` |
| 2 | Mission statement | `#0b0c0e` |
| 3 | About — four divisions | `#111111` |
| 4 | Our companies | `#f2f3f5` |
| 5 | Services | `#ffffff` |
| 6 | Our clients | `#f2f3f5` |
| 7 | Coast banner + logo strip | `#ffffff` |
| 8 | Why choose us | `#f2f3f5` |
| 9 | Process | `#ffffff` |
| 10 | Team | `#f2f3f5` |
| 11 | Testimonials | `#f2f3f5` (cards `#ffffff`) |
| 12 | FAQ | `#f2f3f5` |
| 13 | Contact + footer | `#121214` |

Two near-black bands sit back to back near the top (mission, then about) and the page closes on a third. Everything between them alternates white and paper.

## The brand accent

The only colour in the system is a **16×2px dash** carrying `linear-gradient(to right, #274fa2, #ed1f24)` — the GBMIC logo's blue and red. It sits 8px after an eyebrow label, and nowhere else, with three exceptions that also use `#274fa2` alone: the active "Our Companies" row arrow, the open FAQ `+`, and nothing more.

**It is never a fill.** No coloured buttons, backgrounds, body text, borders, or links. Three sections — Team, Testimonials, Why Choose Us — carry their eyebrow with *no* dash at all; the rest have it.

## Read these in order

1. **[design/colors.md](design/colors.md)** — the palette and how borders/scrims are built from translucent washes.
2. **[design/typography.md](design/typography.md)** — the Geist scale with exact tracking/leading per size.
3. **[design/spacing-layout.md](design/spacing-layout.md)** — radius (0), elevation (flat), the spacing scale, grid and section rhythm.
4. **[design/imagery-icons.md](design/imagery-icons.md)** — photography treatment and the line-icon language.
5. **[design/components.md](design/components.md)** — buttons, accordions, the logo strip.
6. **[design/motion.md](design/motion.md)** — timing and easing. (The source frame has no prototype animation, so this is inferred policy, not extraction.)
7. **[design/tokens.css](design/tokens.css)** — every value as copy-pasteable custom properties.

## Where this lives in code

Unlike the previous revision of this file, the system **is** implemented: `css/styles.css` is a direct build of frame `5517:78048`, and `index.html` follows its section order one-for-one. `about.html` shares the same tokens and components. The Figma's own exported photography and 40×40 line icons are committed under `assets/figma/`.

When extending the site with UI the reference frame doesn't cover, build on the section anatomy in [spacing-layout.md](design/spacing-layout.md) and the eyebrow + H2 convention in [typography.md](design/typography.md) rather than inventing a new visual language.
