---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "Group-level smoothers are the curves, one per group, that describe how each group's relationship differs from the global curve or stands on its own."
aliases:
  - "Group-level smooths"
  - "Group-specific smoothers"
  - "Group smooths"
status: seedling
---

# Group-level Smoothers

**Group-level smoothers** are the curves, one per group, that describe how each group's relationship differs from the [[Global Smoother]] or stands on its own ([[Hierarchical GAM]], [[Random Effect]]). They are fitted with `s(x, group, bs = "fs")` for shared wiggliness or `s(x, by = group)` for separate wiggliness ([[Factor-smooth Interaction]], [[by= Smooths]], [[Shared Wiggliness]]).

They are penalised toward zero, so groups with little data stay close to the global curve, and their spread is like a random-effect variance, but for curves ([[Partial Pooling]]). Plot them with gratia's `draw()` or with predictions per group ([[gratia]]).

[[Lawton et al. 2022]] used group levels for nested spatial units: species range, geographic region and land unit ([[Pedersen et al. 2019]]). Group smooths are not fitted separately; they are fitted jointly and penalised together.

## Connections
- **Builds on:** [[Hierarchical GAM]], [[Random Effect]]
- **Leads to:** [[Factor-smooth Interaction]], [[by= Smooths]], [[Shared Wiggliness]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What are group-level smoothers?
??
One smooth per group describing how that group's relationship differs or stands alone.
++++
