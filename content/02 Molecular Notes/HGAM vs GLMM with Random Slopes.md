---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - gam
aliases: []
status: seedling
---

# HGAM vs GLMM with Random Slopes

> [!summary] In plain words
> a GLMM with random slopes lets groups differ in straight-line responses, while an HGAM lets them differ in curved responses, and model GS is the direct smooth analogue of random intercepts and slopes.

## The question
My groups' responses look curved. Should I keep my random-slope GLMM or move to an HGAM?

## Built from
- [[Random Slope]] and [[GLMM]].
- [[Hierarchical GAM]] and [[Factor-smooth Interaction]].

## The reasoning, step by step
1. **GLMM:** each group's line is β₀ + b₀ⱼ + (β₁ + b₁ⱼ)x.
2. **Model GS:** each group's curve is f(x) + fⱼ(x), fⱼ penalised toward zero.
3. **fs smooths include random intercepts and slopes** as special cases (the null space).
4. **If edf for group smooths is near 2 per group,** the HGAM has essentially become a random-slope model.
5. **GLMMs are simpler to summarise** (one slope SD); HGAMs need plots.

| | Random-slope GLMM | HGAM (GS) |
|---|---|---|
| Group response | Straight line | Smooth curve |
| Shared part | Fixed slope | Global smooth |
| Group variation | Intercept and slope SDs | Penalised group smooths |
| R | `glmer(y ~ x + (x \| g))` | `gam(y ~ s(x) + s(x, g, bs = "fs"))` |

## So in practice
Plot raw data per group. If lines fit, keep the GLMM. If curves are evident, fit GS and compare AIC.

## What would go wrong otherwise
Adding x² random slopes to a GLMM to mimic curvature.

## Explain it back
- Which HGAM type is closest to random intercepts and slopes?

*Pass test:* you can choose between the two.

## Connections
- **Related:** [[Choosing an HGAM Model Type]], [[Random Intercept vs Random Slope]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 15 - GAMs|MOC - GAMs]], [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

Which HGAM type is the smooth analogue of a random-slope GLMM?
??
Model GS (global smooth plus factor smooths with shared wiggliness).
++++
