# Typography

> Extracted from the Figma frame (see [Design.md](../Design.md) for source link).

## Typeface

**Geist** — used in three weights only:

- `Geist Regular` (400) — body copy and, notably, **large display headings are Regular, not Bold**. Size and negative tracking do the work that weight usually does.
- `Geist Medium` (500) — CTA link labels, callout-card headings, sub-emphasis.
- `Geist SemiBold` (600) — uppercase eyebrow/kicker labels only.

Fallback stack: `"Geist", "Inter", -apple-system, "Segoe UI", Roboto, sans-serif` (Geist and Inter share very similar metrics, making Inter a safe fallback if Geist isn't self-hosted).

There is no serif or monospace type anywhere in this frame.

## Type scale

Every size below was read directly off text nodes in the design, paired with its actual tracking (letter-spacing) and leading (line-height) — do not substitute a generic scale.

| Role | Size | Weight | Tracking | Leading | Color |
|---|---|---|---|---|---|
| Hero H1 | 52px | SemiBold 600 | −0.02em | 1.1× | `--ink-hero` |
| Contact H2 | 44px | Regular | −1.32px | 48.4px | white |
| Process number | 38px | Regular | −0.76px | 53.2px | `rgba(8,16,20,.4)` |
| H2 (section) | 36px | Regular | −1.62px | 41.76px | `--ink` |
| Mission statement | 36px | Regular | 0 | 52.8px | white → `rgba(255,255,255,.6)` |
| Client row H3 | 28px | Regular | −0.84px | 39.2px | `--ink` |
| Testimonial quote | 24px | Regular | −0.96px | 28.8px | `--ink` |
| Company / step row | 22px | Regular | −0.66px | 30.8px | `--ink` active, `--muted` idle |
| H3 (tile) | 20px | Regular | −0.4px | 28px | `--ink` |
| FAQ question | 19px | Regular | −0.38px | 26.6px | `--ink` open, `--muted` closed |
| Body large | 17px | Regular | −0.176px | 27.2px | `--muted` |
| Body | 16px | Regular | −0.176px | 24px | `--muted` |
| FAQ answer | 16.5px | Regular | −0.176px | 25.575px | `--muted` |
| Nav / button | 15px | Medium 500 | −0.176px / −0.15px | 21px | `--muted` / white |
| Eyebrow label | 14px | SemiBold 600 | +0.84px, uppercase | 19.6px | `--muted` |
| Testimonial meta | 12px | Medium 500 | +0.72px, uppercase | 16.8px | `--muted` |
| Team role | 11px | Medium 500 | +0.5px, uppercase | 1.4× | `--muted-role` |

**Note:** H2 is 36px here, not the 52px documented against the older template frame. Display headings are Regular weight — size and negative tracking do the work.

## The two governing rules

1. **Tracking scales inversely with size.** Large display type (52–72px) is pulled in tight, around −6% of its font size, which is what keeps huge headlines from feeling loose or "default." Small uppercase labels do the opposite — they're pushed apart by about +6%, which is what makes all-caps micro-copy readable instead of cramped.
2. **Every H2 is preceded by an eyebrow/kicker.** Pattern: a 12–14px SemiBold uppercase label (e.g. "PILLARS", "OUR APPROACH", "QUESTIONS & ANSWERS") sits directly above every section heading. This is a structural convention, not a one-off — reproduce it on every new section.

## Line-wrapping

Large headlines (H1/H2) are frequently set as individually-positioned words/phrases rather than one flowing paragraph, letting the designer control exactly where each line breaks. When implementing in HTML/CSS, achieve the same effect with deliberate `<br>`/`<span>` breaks or `max-width` tuned to force the same line breaks shown in the design — don't just let text reflow freely at 72px.
