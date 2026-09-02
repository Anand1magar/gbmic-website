# Design System — Bhim Gurung Website

Extracted from the referenced Figma design (UX Bootcamp · Visa Vista / editorial personal-portfolio style).
This is the single source of truth for the site's look and feel.

**Feel:** Elegant, editorial, minimal. Generous whitespace, quiet confidence, rounded cards,
one restrained orange accent (the brand-logo orange), alternating light/dark sections. Big
headlines with tight negative letter-spacing. Everything calm and premium — nothing loud.

---

## Colors

| Token            | Hex        | Role                                             |
|------------------|------------|--------------------------------------------------|
| `--ink`          | `#111111`  | Primary text, near-black                         |
| `--ink-soft`     | `#1f1f1f`  | Dark section surfaces                             |
| `--muted`        | `#6c7179`  | Secondary text, captions                         |
| `--line`         | `#d1d3d6`  | Borders, hairline dividers                        |
| `--paper`        | `#f7f7f7`  | Scaffold / section background                     |
| `--white`        | `#ffffff`  | Cards, base background                            |
| `--accent`       | `#f1582d`  | Brand orange (logo mark) — highlight card, links  |
| `--tint-cream`   | `#fefee8`  | Soft badge tint                                   |
| `--tint-rose`    | `#fdeee7`  | Soft badge tint (light wash of brand orange)      |
| `--tint-green`   | `#eefff3`  | Soft badge tint / "available" state              |

Use the orange accent sparingly — one highlighted moment per screen, not scattered.

---

## Typography

**Family:** `Instrument Sans` (variable, width axis) for everything, with a system sans fallback.
Only two weights in play: **Medium (500)** for display/labels, **Regular (400)** for body.

| Role         | Size (clamp target) | Weight | Line height | Letter-spacing |
|--------------|---------------------|--------|-------------|----------------|
| Display / H1 | 40–64px             | 500    | 1.05–1.1    | −1.44px        |
| Section / H2 | 36px                | 500    | 1.2         | −0.72px        |
| Card / H3    | 24px                | 500    | 1.3         | −0.6px         |
| Body large   | 20px                | 400    | 1.3         | −0.6px         |
| Body         | 16px                | 400    | 1.4         | −0.48px        |
| Eyebrow/label| 16px                | 500    | 1.3         | −0.48px        |

Negative tracking scales with size — the bigger the type, the tighter it sets.

---

## Spacing & Layout

- **Container:** max-width `1120px`, side padding `24px` (mobile `20px`).
- **Section rhythm:** vertical padding `clamp(96px, 12vw, 200px)` — the whitespace is the design.
- **Grid gaps:** `12 / 16 / 20 / 32 / 40 / 80px`.
- **Card padding:** `24px`.

## Radii

| Token        | Value    | Use                              |
|--------------|----------|----------------------------------|
| `--r-sm`     | `12px`   | Default — inputs, small cards     |
| `--r-md`     | `20px`   | Cards                            |
| `--r-lg`     | `24px`   | Feature cards                    |
| `--r-xl`     | `40px`   | Hero image, big panels           |
| `--r-pill`   | `100px`  | Buttons, badges                  |

## Shadows

Subtle and layered — never heavy. Cards lift only slightly on hover.
`0 1px 2px rgba(17,17,17,.04), 0 12px 32px -12px rgba(17,17,17,.10)`

---

## Components

- **Buttons:** pill (`--r-pill`). Primary = `--ink` bg / white text. Ghost = transparent with `--line` border.
- **Badges:** pill, tinted background (`--tint-*`), small medium-weight label; "available" uses green dot + `--tint-green`.
- **Cards:** white, `--r-lg`, hairline `--line` border, `24px` padding. One highlighted card may use `--accent` bg / white text.
- **Nav:** minimal — wordmark left, center links, pill CTA right. Sticky, blurs on scroll.
- **Dark sections** (Process, final CTA, Footer): `--ink-soft` / `--ink` background, white text, muted = lightened gray.

---

## Motion

Deliberately quiet — subtle, not loud. No parallax, no animation library; plain CSS
transitions driven by a small vanilla `IntersectionObserver` for scroll reveal.

- **Load:** a single, brief CSS fade/rise on the hero (media, badge, title, aside) — no JS
  dependency, so content is never hidden waiting on a script or font.
- **Scroll reveal:** elements marked `data-reveal` fade + rise into place once, the first
  time they cross into the viewport (`~0.7s`, no re-hide on scroll-up). Siblings inside a
  `data-reveal-group` cascade in with a short stagger (`~70ms` per item) instead of
  popping in together. Progressive enhancement throughout: without JS (or if it fails to
  load), everything stays fully visible — the hidden state only applies once a `.js`
  class is present, so content is never hidden waiting on a script.
- **Hover:** buttons and cards lift subtly via CSS transitions (`~0.25–0.4s`, gentle easing).
- **Accessibility:** the load fade and the scroll reveal are both skipped entirely under
  `prefers-reduced-motion` — everything renders in its final state immediately.
