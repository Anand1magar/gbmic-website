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
| Display / H1 (hero) | 72px | Regular | −4.32px (−6%) | 79.2px (1.1×) | white (on dark hero) |
| H2 (section heading) | 52px | Regular | −3.12px (−6%) | 57.2px (1.1×) | `--ink` |
| H3 (card/step heading) | 24px | Regular | −0.96px (−4%) | 28.8px (1.2×) | `--ink` |
| H4 / FAQ question | 20px | Regular | −0.4px (−2%) | 24px (1.2×) | `--ink` (active) / `--muted` (inactive) |
| Body large | 18px | Regular | 0 | 25.2px (1.4×) | `--muted-on-dark` or `--ink` |
| Body | 16px | Regular / Medium | 0 | 22.4–24px (1.4–1.5×) | `--muted` (paragraphs) / `--ink` (labels) |
| Small / label | 14px | Regular / SemiBold | 0 (body) / +0.84px uppercase (label) | 19.6px (1.4×) | `--muted` (body) / `--ink` (label) |
| Micro / eyebrow | 12px | Medium | +0.72px uppercase | 16.8px (1.4×) | `--muted-on-dark` or `--ink` |

## The two governing rules

1. **Tracking scales inversely with size.** Large display type (52–72px) is pulled in tight, around −6% of its font size, which is what keeps huge headlines from feeling loose or "default." Small uppercase labels do the opposite — they're pushed apart by about +6%, which is what makes all-caps micro-copy readable instead of cramped.
2. **Every H2 is preceded by an eyebrow/kicker.** Pattern: a 12–14px SemiBold uppercase label (e.g. "PILLARS", "OUR APPROACH", "QUESTIONS & ANSWERS") sits directly above every section heading. This is a structural convention, not a one-off — reproduce it on every new section.

## Line-wrapping

Large headlines (H1/H2) are frequently set as individually-positioned words/phrases rather than one flowing paragraph, letting the designer control exactly where each line breaks. When implementing in HTML/CSS, achieve the same effect with deliberate `<br>`/`<span>` breaks or `max-width` tuned to force the same line breaks shown in the design — don't just let text reflow freely at 72px.
