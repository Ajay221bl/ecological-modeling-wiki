---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "Gratia is an R package that draws ggplot2 graphics of mgcv models and computes derived quantities such as derivatives and posterior simulations."
aliases:
  - "gratia package"
  - "draw()"
  - "appraise()"
  - "smooth_estimates()"
  - "gratia (draw, appraise)"
status: seedling
---

# gratia

**gratia** is an [[Packages in R|R package]] that draws ggplot2 graphics of mgcv models and computes [[Derived Quantities|derived quantities]] such as derivatives and posterior simulations ([[Generalized Additive Model]], [[ggplot2 Grammar of Graphics|ggplot2]]). `draw(m)` gives [[Partial Effect Plots]] for every smooth; `appraise(m)` four residual [[plot() Diagnostics for lm|diagnostic plots]] (Q-Q, residuals against the [[Linear Predictor|linear predictor]], [[Histogram|histogram]], observed against fitted); `smooth_estimates(m)` a [[Tidy Data|tidy data]] frame of smooth values and SEs; `derivatives(m)` derivatives with intervals ([[Derivatives of a Smooth]]); and `fitted_samples()` and `smooth_samples()` [[Posterior Draws|posterior draws]].

It is written by Gavin Simpson, a co-author of [[Pedersen et al. 2019]]. The code below, not run in the wiki build because gratia is not installed there, shows the three calls used most: `draw()`, `appraise()` and `derivatives()`.

The GAM and HGAM labs use mgcv and gratia ([[Course Website]], [[Hierarchical GAM]]). gratia doesn't fit GAMs: mgcv fits them, and gratia summarises and plots.

```r
# norun (gratia is not installed in the wiki's build environment)
library(gratia); draw(m); appraise(m); derivatives(m, select = "s(t)")
```

## Connections
- **Builds on:** [[Generalized Additive Model]], [[ggplot2 Grammar of Graphics|ggplot2]], [[Packages in R]], [[Derived Quantities]], [[plot() Diagnostics for lm]], [[Linear Predictor]], [[Histogram]], [[Tidy Data]], [[Posterior Draws]]
- **Leads to:** [[Partial Effect Plots]], [[Derivatives of a Smooth]], [[Basis Dimension and gam.check()]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What do gratia's draw() and appraise() do?
??
draw() plots partial effects; appraise() plots residual diagnostics.
++++
