# Design — Figma look and feel

This is the design system source of truth for this site. It was extracted directly from a Figma reference frame — not invented — so treat every value in the linked files as a real constraint, not a suggestion.

**Source:** [Figma — UI Exploration · FieldTime BuildWitt](https://www.figma.com/design/rCZnwKVRQEaqrsfC31FyKC/UI-Exploration---FieldTime-BuildWitt?node-id=5256-34891), frame "Elite - Framer Template for Consultants / Agencies" (node `5256:34891`). Extracted 2026-09-17.

## The one-sentence summary

**Monochrome, sharp-edged, editorial.** Near-black ink on off-white paper, zero border-radius except full circles, no shadows, huge section whitespace, tight-tracked large display type, and full-bleed grayscale-toned photography carrying all the visual color. There is no brand accent hue anywhere in this reference.

## Read these in order

1. **[design/colors.md](design/colors.md)** — the (deliberately tiny) palette: ink, paper, two grays, and how borders/scrims are built from translucent washes rather than flat colors.
2. **[design/typography.md](design/typography.md)** — the Geist type scale, the exact tracking/leading values per size, and the eyebrow-label + H2 pairing convention.
3. **[design/spacing-layout.md](design/spacing-layout.md)** — "how it looks": radius (0 by default), elevation (flat, no shadows), the spacing scale, and the grid/section rhythm.
4. **[design/imagery-icons.md](design/imagery-icons.md)** — photography treatment, the floating callout-card motif, and the hand-built bar-icon language.
5. **[design/components.md](design/components.md)** — CTA links, circular icon chips, FAQ accordion states, and the logo strip.
6. **[design/motion.md](design/motion.md)** — timing and easing policy. (Flagged clearly: the source Figma file has no prototype animation attached, so this file is an inferred policy, not an extraction.)
7. **[design/tokens.css](design/tokens.css)** — every value above as copy-pasteable CSS custom properties. Reference only; not wired into `css/styles.css`.

## Using this when building or changing the site

- When asked to build new UI, match a page to "the Figma design," or keep the site "on brand," treat the files above as the spec — don't fall back on generic defaults (rounded corners, drop shadows, an accent color) that contradict what's documented here.
- If something isn't covered here (a component type that doesn't appear in the reference frame), extend the existing patterns — the section anatomy in [spacing-layout.md](design/spacing-layout.md#section-anatomy-recurring-pattern) and the eyebrow+H2 convention in [typography.md](design/typography.md) — rather than inventing a new visual language.
- **Note:** the current live site (`css/styles.css`) uses a different look — an orange accent (`#f1582d`), soft rounded corners (12–40px radii), and Instrument Sans. That's the *old* look. This Design.md describes the *target* look to move toward, not what's currently implemented.
