# Components

> Extracted from the Figma frame (see [Design.md](../Design.md) for source link). Cross-references: [colors.md](colors.md), [typography.md](typography.md), [spacing-layout.md](spacing-layout.md), [imagery-icons.md](imagery-icons.md), [motion.md](motion.md).

## CTA / links

There are **no filled pill/rectangle buttons** in this design — every call-to-action is a text link paired with a small icon, set in Medium weight. This is a deliberate low-chrome choice; don't introduce a filled-button component when matching this look.

- Text: 16px Medium, `--ink` on light backgrounds / white on dark backgrounds.
- Icon: small arrow, same monochrome bar-icon language as elsewhere (see [imagery-icons.md](imagery-icons.md)), positioned after the label.
- Hover: icon nudges slightly in the direction of travel and/or label opacity dips — see [motion.md](motion.md#patterns). No underline-by-default; no color shift (no accent color exists to shift to).
- Two CTA links commonly sit side-by-side in the hero with a small gap (~20px), e.g. a primary action ("Book a Call") and a secondary one ("View Case Studies").

## Circular icon chip

Used for nav/social icons.

- 36×36px, `border-radius: 100px` (full circle).
- 1px hairline border: `rgba(8,16,20,0.12)` on light sections, `rgba(255,255,255,0.08)` on dark sections.
- Icon centered inside, monochrome.
- Hover: border/fill strengthens to the "strong" border token — see [motion.md](motion.md#patterns).

## FAQ / accordion item

- Row: question (20px Regular) + expand icon (plus/cross bar mark, right-aligned), full-width, 1px bottom hairline divider (`rgba(8,16,20,0.12)`).
- **Closed** row: question text in `--muted` (#707070), icon rotated to a "+" orientation.
- **Open/active** row: question text in `--ink` (#081014), answer paragraph revealed below in 16px Regular `--muted`, icon rotated 90°/45° to a "−"/rotated-cross orientation, and the divider under this specific item switches from the translucent hairline to a **solid `--ink` border** — this is how the design marks "this is the open one" instead of using a background fill.
- Only one item is shown open at a time in the source (first item), consistent with standard single-open-accordion behavior.
- Transition timing: see [motion.md](motion.md#patterns).

## Floating callout card

Documented fully in [imagery-icons.md](imagery-icons.md#floating-callout-card) since it's inseparable from the photography it sits on.

## Section eyebrow + heading block

Documented in [typography.md](typography.md#the-two-governing-rules) — every section opens with an uppercase eyebrow label directly above its H2. Treat this pairing as a single reusable "section header" component rather than styling the eyebrow and heading independently per section.

## Logo strip

A horizontal row of grayscale/monochrome partner or client logo marks (fixed-height ~30px, variable widths), evenly spaced, sitting in its own full-width thin section between the hero and the first content section. No card, no border, no background treatment beyond the page's own `--paper` color.

## Section shapes (page anatomy)

The reference file has **8 distinct section shapes**, not one repeated pattern — pulled from `get_design_context` on every section in the frame (node `5256:34891`), not just the hero. Don't default to a single "sticky list" template for everything; pick the shape below that matches the content.

1. **Hero** — full-bleed photo, bottom-anchored content over a vertical scrim (transparent → `--ink` at the bottom third), H1 + lead + two CTA links. Content sits at the bottom edge, not vertically centered.
2. **Logo strip** — see above.
3. **Pillars** — eyebrow + H2 + a **numbered roman-numeral list, no dividers** (36px circle chip with "I"/"II"/... + 20px title + 16px text, 50px gap between items) in one column; a photo card with a **frosted contact bar** (avatar + name/role + CTA link, `backdrop-filter: blur(5px)` over `rgba(255,255,255,0.12)`) in the other.
4. **Services** — eyebrow + H2 full-width on top, then a **row of full-bleed dark photo cards** (not a list): each card is a photo with a bottom gradient scrim, a white square icon-chip in the top-right corner, and a white title near the bottom; a plain caption paragraph sits below each card, outside the dark box.
5. **Framework** — eyebrow + H2 full-width on top, then a **grid of icon/mark + title + text tiles** — no card background, no divider, separation by whitespace alone (44px row gap, wide column gap). This is the shape for a numbered process that isn't a single-file list.
6. **Case studies** — eyebrow + H2 (centered) on top, then **full-width horizontal photo cards stacked vertically**, each with a frosted glass text panel (`rgba(8,16,20,0.12)` + blur) anchored to one side containing a small logo mark, title, description, and an underlined link. A floating white CTA card overlaps the bottom edge of the stack.
7. **Our approach** — a photo (with a floating white CTA card in its corner) beside an eyebrow + H2 + a **numbered list with hairline dividers** (title + right-aligned index number + text; the open/first item's divider is solid `--ink`, the rest are the translucent hairline). This is the shape for a sequential process that *is* a single-file list — contrast with Framework (#5) above, which is the non-sequential/grid version of the same idea.
8. **Testimonials** — eyebrow + H2 on top, then a **row of white cards**: avatar (60px circle) top-left, optional brand mark top-right, a 24px quote, and a name/role block set off by a **left border** (`border-left: 1px solid` — ink for a static card, white for a video-treatment card). One card in the reference is a video variant (dark photo + centered play-button circle) instead of a quote.
9. **FAQ** — eyebrow + H2 + white callout card in one column; an accordion list with hairline dividers in the other. (Fully documented above under "FAQ / accordion item".)

When building a new section, match it to the shape whose *purpose* fits (a short enumerated list → Pillars; a handful of offerings that deserve photography → Services; a multi-step process → Our Approach if strictly sequential, Framework if not; a couple of in-depth spotlights → Case Studies) rather than reusing whichever shape was built most recently.
