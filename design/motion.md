# Motion

> **Note on source data:** the Figma file has no prototype/keyframe animation attached to this frame — `get_motion_context` returned an empty motion summary. Nothing below is "extracted"; it's a motion policy inferred from the frame's static visual language (restraint, sharp edges, generous whitespace, monochrome), written so implementation stays consistent with that look. Treat this file as a recommendation, and revise it if the Figma file is later updated with real prototype motion.

## Principle: motion should feel like editing, not decorating

Nothing in this design is playful, bouncy, or attention-seeking — the visual language is restrained and architectural. Motion should follow the same rule: it exists to make state changes legible (something opened, something is now in view, something is now hovered), never to entertain.

## Timing

| Token | Value | Usage |
|---|---|---|
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default for nearly everything |
| `--duration-fast` | `150ms` | Hover/focus state changes (border, opacity) |
| `--duration-base` | `250ms` | Accordion open/close, tab switches |
| `--duration-slow` | `400–600ms` | Scroll-reveal entrances |

Never use spring/bounce/elastic easing. Never exceed ~600ms for any UI transition.

## Patterns

- **Hover on text links/CTAs**: no color change (there's no accent color to shift to) — use an underline reveal, a small icon shift (e.g. arrow nudges 2–4px right), or an opacity dip to ~0.7.
- **Hover on the circular icon chips**: border/background shifts from `rgba(8,16,20,0.12)` to a slightly stronger fill (`rgba(8,16,20,0.4)` or the dark-surface equivalent) — a tonal shift, not a color shift.
- **FAQ accordion**: rotate the plus icon 45°/90°→cross-to-dash over `--duration-base`, height auto-animates or crossfades; the divider under the open item switches from the translucent hairline to the solid `--ink` border instantly (no need to animate the border color itself).
- **Scroll reveal**: sections/headlines fade in and translate up ~16–24px as they enter viewport, using `--duration-slow`. Stagger children (e.g. the words of a headline, or cards in a row) by ~50–80ms each — subtle, not a "typewriter" effect.
- **Image scrims**: static, not animated (the gradient is a fixed design element, not a hover effect).

## What to avoid

- Parallax, tilt/3D hover effects, glow/blur pulses — too decorative for this aesthetic.
- Any color-based hover feedback — this palette has no accent color to animate toward.
- Fast/snappy (<100ms) or very slow (>800ms) transitions — both read as out of step with the deliberate, unhurried pacing set by the 112–160px section spacing.
