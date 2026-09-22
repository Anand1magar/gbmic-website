# Color

> Extracted from the Figma frame (see [Design.md](../Design.md) for source link). All values are exact hex/rgba pulled from the design context — nothing here is guessed.

## The palette is deliberately monochrome

There is **no brand accent color** anywhere in this design — no orange, no blue, nothing. The entire frame is built from near-black, white, and two grays. Color is not a design tool here; contrast, whitespace, and photography carry all of the visual weight. This is the single most important — and most different from the current GBMIC site — property of this look. Do not introduce an accent color when implementing this design; if a CTA needs emphasis, use ink-on-white / white-on-ink inversion, not a hue.

## Core tokens

| Token | Value | Usage |
|---|---|---|
| `--ink` | `#081014` | Primary text, headings, icon strokes, solid dark section backgrounds, gradient scrim end-color |
| `--ink-alt` | `#121214` | Alternate near-black used specifically as the end-stop of image scrims inside cards (very close to `--ink`, treat as the same family) |
| `--paper` | `#f2f3f5` | Page/body background — an off-white, not pure white |
| `--white` | `#ffffff` | Card surfaces that sit on top of `--paper` (e.g. floating callout cards) |
| `--muted` | `#707070` | Secondary/body text on light backgrounds, inactive icon strokes |
| `--muted-on-dark` | `#c8c8c8` | Secondary/body text on dark (`--ink`) backgrounds |

## Borders & dividers

Borders are hairline and translucent, never a flat gray — they're built as a low-opacity wash of the surface's own ink/white so they self-adjust to whatever sits behind them.

| Token | Value | Usage |
|---|---|---|
| `--border-on-light` | `rgba(8,16,20,0.12)` | Default 1px hairline divider on light/paper sections (FAQ item separators, nav chip outline) |
| `--border-on-light-strong` | `rgba(8,16,20,0.4)` | Stronger divider, used sparingly |
| `--border-on-light-active` | `#081014` (solid) | Divider under the *currently open/active* item, e.g. the expanded FAQ answer |
| `--border-on-dark` | `rgba(255,255,255,0.08)` | Default hairline on dark sections |
| `--border-on-dark-strong` | `rgba(255,255,255,0.12)` | Stronger hairline / hover fill on dark sections |

## Scrims & overlays

Photography is always full-bleed and always gets a soft gradient toward ink at the bottom so white text stays legible. This is a gradient, not a flat tint — it typically starts fully transparent around the 33–60% mark and reaches solid ink only at the very edge.

```css
/* Text-over-photo scrim, e.g. hero */
background: linear-gradient(to bottom, rgba(8,16,20,0) 33%, #081014 100%);

/* Card-image scrim (slightly darker end-color) */
background: linear-gradient(to bottom, rgba(18,18,20,0) 24.6%, #121214 100%);
```

## Applying color to surfaces

- **Light section**: `background: var(--paper)`, text `var(--ink)`, secondary text `var(--muted)`.
- **Dark/hero section**: `background: var(--ink)` (usually a photo + scrim, not a flat fill), text `#ffffff`, secondary text `var(--muted-on-dark)`.
- **Card on paper**: `background: var(--white)`, no border, separated purely by being a white rectangle against the off-white page.
- **Never**: tinted backgrounds, colored buttons, colored icons, colored links. Everything is grayscale except full-color photography.
