# Layout, Spacing, Radius & Elevation ("how it looks")

> Extracted from the Figma frame (see [Design.md](../Design.md) for source link).

## Radius — sharp by default

This is the second most distinctive property of the design, after the monochrome palette: **corner radius is 0 on every card, button, image, and container in the entire frame.** The only rounded elements are small circular icon chips (nav/social icons, decorative dots), which are fully round (`border-radius: 100px` / a perfect circle), never a soft intermediate radius like 8px or 16px.

| Token | Value | Usage |
|---|---|---|
| `--radius-none` | `0px` | Default — cards, buttons, images, panels, inputs |
| `--radius-full` | `100px` (or `9999px`) | Circular icon chips only |

There is nothing in between. If a component doesn't obviously need to be a circle, it has square corners.

## Elevation — flat, no shadows

No `box-shadow` was found anywhere in the sampled sections. Depth and separation come from three things only:

1. **Whitespace** — generous padding does the separating, not a shadow.
2. **Flat color contrast** — a white card on an off-white page, or a dark section against a light one.
3. **Hairline borders** — a 1px translucent line (see [colors.md](colors.md#borders--dividers)) where two surfaces of similar tone actually touch, e.g. FAQ list dividers.

Do not add drop shadows, glows, or blurred elevation to cards/buttons when implementing this look — it will immediately read as off-brand.

## Spacing scale

All spacing values observed in the frame, in px (they cluster tightly around a 4px base unit):

```
4  8  10  12  16  20  24  32  36  40  44  50  56  60  72  100  112  120  140  160
```

Practical guidance:
- **Micro spacing** (4–16px): gaps between an icon and its label, between stacked lines of a heading.
- **Component spacing** (20–44px): padding inside cards, gaps between a heading and its body copy.
- **Section spacing** (56–72px): gaps between distinct blocks within a section (e.g. heading block → CTA row).
- **Section rhythm** (112–160px): vertical padding at the *top and bottom of every full section*. This is what gives the page its editorial, unhurried pace — sections never feel cramped. When in doubt, err toward the larger end of this range for section padding rather than the smaller end.

## Grid & page structure

- Design frame width: **1440px**.
- Content max-width: **1200px**, centered, with **120px** fixed gutters left/right on desktop.
- Two-column section layout is the dominant pattern: two columns of roughly **550–560px** each, separated by a **60–112px** gap (varies by section — wider gap when one side is a large image).
- Full-width sections (hero, logo strip) break out to the full 1440px frame width; content within them still respects the 1200px/120px-gutter rule.

## Section anatomy (recurring pattern)

Almost every content section follows the same shape:

1. Eyebrow label (12–14px uppercase) — see [typography.md](typography.md).
2. H2 heading (52px).
3. Optional supporting paragraph (18px, muted).
4. Body content — either a two-column image+text split, a stacked list (steps, FAQ), or a card grid.
5. 112–160px of breathing room before the next section starts.

Reproduce this anatomy for new sections rather than inventing a new layout shape per section.
