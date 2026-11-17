---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "Common smoothing parameter"
  - "Shared penalty"
  - "Individual wiggliness"
status: seedling
---

# Shared Wiggliness

**In one line:** shared wiggliness means all group-level smooths use one smoothing parameter, so they are assumed equally complex, whereas individual wiggliness gives each group its own.

> [!info] Before this, it helps to know
> [[Smoothing Parameter]] · [[Group-level Smoothers]]

## Start from zero
1. **Shared (one λ):** models GS and S. `bs = "fs"`.
2. **Individual (one λ per group):** models GI and I. `by = group`.
3. **Shared is more parsimonious and stable** with many groups.
4. **Individual suits groups with genuinely different dynamics** (one species cycles, another trends).
5. **Analogy:** a shared variance for all random slopes versus a separate variance per group.

## In the course
[[Pedersen et al. 2019]]. [[Lawton et al. 2022]] (GS and S, shared penalty, selected).

## Common confusions
- **"Shared wiggliness means identical curves."** Curves differ in shape; only their overall complexity is shared.

## Explain it back
- Which HGAM types use individual wiggliness?

*Pass test:* you can choose shared or individual wiggliness.

## Connections
- **Builds on:** [[Smoothing Parameter]], [[Group-level Smoothers]]
- **Leads to:** [[Factor-smooth Interaction]], [[by= Smooths]]
- **Part of:** [[MOC - GAMs]], molecular note [[Choosing an HGAM Model Type]]

## Flashcards

What does shared wiggliness mean in an HGAM?
??
All group smooths share one smoothing parameter, so they have similar complexity.
++++
