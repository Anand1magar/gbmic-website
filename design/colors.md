# Color

> Extracted from the Figma frame (see [Design.md](../Design.md) for source link). All values are exact hex/rgba pulled from the design context — nothing here is guessed.

## Near-monochrome, with exactly one hue

The frame is built from near-black, white, and three grays. Contrast, whitespace, and photography carry the visual weight — not colour.

The single exception is the **brand dash**: a 16×2px bar filled with `linear-gradient(to right, #274fa2, #ed1f24)`, the GBMIC logo's blue and red. It sits 8px after an eyebrow label and appears nowhere else. `#274fa2` alone also marks two active states — the current "Our Companies" row arrow and the open FAQ `+`.

Three sections carry their eyebrow with **no dash**: Team, Testimonials, Why Choose Us.

Never extend the accent past those spots. No coloured buttons, backgrounds, body text, borders, or links.

## Core tokens

| Token | Value | Usage |
|---|---|---|
| `--ink` | `#081014` | Headings, body on light, button fill, icon strokes |
| `--ink-hero` | `#1c1f22` | Hero H1 only — a hair lighter than `--ink` |
| `--ink-name` | `#0f1215` | Team member name only |
| `--muted` | `#707070` | Body copy on light, inactive list rows, eyebrow labels |
| `--muted-hero` | `#62666a` | Hero lead paragraph only |
| `--muted-role` | `#9c9c9c` | Team role label (11px uppercase) |
| `--paper` | `#f2f3f5` | The alternating off-white section ground |
| `--white` | `#ffffff` | White sections and testimonial cards |
| `--dark-mission` | `#0b0c0e` | Mission band |
| `--dark-pillars` | `#111111` | About / four-divisions band |
| `--dark-deep` | `#121214` | Contact + footer |
| `--muted-dark` | `#c8c8c8` | Secondary text on dark |
| `--link-dark` | `#d5d7da` | Footer links |
| `--brand-blue` | `#274fa2` | Dash start, active-state marks |
| `--brand-red` | `#ed1f24` | Dash end, form error text |

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
