# Imagery & Iconography

> Extracted from the Figma frame (see [Design.md](../Design.md) for source link).

## Photography

- **Style**: documentary/editorial photography of people in professional settings (offices, consulting, buildings) — desaturated/muted tone, not saturated or heavily color-graded.
- **Crop**: always full-bleed, `object-fit: cover`, edge-to-edge within its container. Never inset, never framed, never rounded.
- **No shadow, no border, no radius** on any image — see [spacing-layout.md](spacing-layout.md#elevation--flat-no-shadows).
- **Scrim**: any image that has text sitting on top of it (hero, card backgrounds) gets a bottom-anchored gradient toward `--ink`/`--ink-alt` — see [colors.md](colors.md#scrims--overlays) for exact stops. This is mandatory whenever text overlays a photo; never rely on a flat dark tint.

## Floating callout card (recurring motif)

A small white card sits on top of / beside full-bleed photography in several sections (e.g. "Get started", "Can't find an answer to your question?"). Its anatomy is consistent — reproduce it exactly rather than improvising a new card style per instance:

- White (`#ffffff`) background, square corners, no border, no shadow.
- Padding: 12–20px.
- A small black "plus/cross" mark in one corner (see Iconography below) — the card's signature detail.
- One line of Medium-weight 16px heading text (`--ink`).
- One line of Regular-weight 14px supporting text (`--muted`), directly beneath.

## Iconography

- **No icon font, no filled/outlined SVG icon library look.** Icons in this frame are hand-built from plain geometry — thin 2px-thick bars/rectangles, rotated and positioned to form simple marks (a plus/cross, a chevron/arrow).
- **Color**: monochrome only — `--ink` (#081014) for primary icons/marks, `--muted` (#707070) for secondary/inactive icons (e.g. an unopened FAQ's expand icon). Never colored.
- **The "plus/cross" mark**: two 20×20 black squares/bars overlapping at a rotation to form a plus — this exact mark appears on every floating callout card as a kind of signature/logo-mark detail. Treat it as a reusable component, not a one-off.
- **Circular chip icons**: 36×36px circle, 1px hairline border (`rgba(8,16,20,0.12)` on light, `rgba(255,255,255,0.08)` on dark), used for nav/social icon buttons — the *only* place full rounding (`border-radius: 100px`) appears in this design.
- **Accordion expand icon**: built from the same 2px-bar language — a horizontal bar + vertical bar (plus), where the open state rotates the mark to a minus/dash via a 45–90° rotation (see [motion.md](motion.md)).
