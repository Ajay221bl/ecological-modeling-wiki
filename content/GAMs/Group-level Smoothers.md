---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "Group-level smooths"
  - "Group-specific smoothers"
  - "Group smooths"
status: seedling
---

# Group-level Smoothers

**In one line:** group-level smoothers are the curves, one per group, that describe how each group's relationship differs from the global curve or stands on its own.

> [!info] Before this, it helps to know
> [[Hierarchical GAM]] · [[Random Effect]]

## Start from zero
1. **Fitted with `s(x, group, bs = "fs")`** (shared wiggliness) or `s(x, by = group)` (separate wiggliness).
2. **Penalised toward zero,** so groups with little data stay close to the global curve.
3. **Their spread is like a random-effect variance,** but for curves.
4. **Plot them** with gratia's `draw()` or predictions per group.
5. **Lawton et al.** used group levels for nested spatial units (species range, geographic region, land unit).

## In the course
[[Pedersen et al. 2019]]. [[Lawton et al. 2022]].

## Common confusions
- **"Group smooths are fitted separately."** They are fitted jointly and penalised together.

## Explain it back
- What two mgcv codes fit group-level smoothers?

*Pass test:* you can fit group-level smoothers.

## Connections
- **Builds on:** [[Hierarchical GAM]], [[Random Effect]]
- **Leads to:** [[Factor-smooth Interaction]], [[by= Smooths]], [[Shared Wiggliness]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

What are group-level smoothers?
??
One smooth per group describing how that group's relationship differs or stands alone.
++++
