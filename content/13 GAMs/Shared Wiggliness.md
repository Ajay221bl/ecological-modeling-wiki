---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "Shared wiggliness means all group-level smooths use one smoothing parameter, so they are assumed equally complex, whereas individual wiggliness gives each group its own."
aliases:
  - "Common smoothing parameter"
  - "Shared penalty"
  - "Individual wiggliness"
status: seedling
---

# Shared Wiggliness

**Shared wiggliness** means all group-level smooths use one smoothing parameter, so they are assumed equally complex; individual wiggliness gives each group its own ([[Smoothing Parameter]], [[Group-level Smoothers]]). Shared, one λ, is models GS and S with `bs = "fs"`; individual, one λ per group, is models GI and I with `by = group` ([[Factor-smooth Interaction]], [[by= Smooths]]).

Shared is more parsimonious and more stable with many groups; individual suits groups with genuinely different dynamics, such as one species that cycles and another that trends. The analogy is a single variance for all random slopes against a separate variance for each group ([[Random Slope]]).

It is one of the two choices that define Pedersen's model types ([[Pedersen et al. 2019]], [[Hierarchical GAM]]); [[Lawton et al. 2022]] usually selected the shared-penalty models GS and S. Shared wiggliness does not mean identical curves: the curves differ in shape, and only their overall complexity is shared.

## Connections
- **Builds on:** [[Smoothing Parameter]], [[Group-level Smoothers]]
- **Leads to:** [[Factor-smooth Interaction]], [[by= Smooths]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]], molecular note [[Choosing an HGAM Model Type]]

## Flashcards

What does shared wiggliness mean in an HGAM?
??
All group smooths share one smoothing parameter, so they have similar complexity.
++++
