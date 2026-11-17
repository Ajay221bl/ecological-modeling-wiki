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

**gratia** is an R package that draws ggplot2 graphics of mgcv models and computes derived quantities such as derivatives and posterior simulations ([[Generalized Additive Model]], [[ggplot2 Grammar of Graphics|ggplot2]]). `draw(m)` gives [[Partial Effect Plots]] for every smooth; `appraise(m)` four residual diagnostic plots (Q-Q, residuals against the linear predictor, histogram, observed against fitted); `smooth_estimates(m)` a tidy data frame of smooth values and SEs; `derivatives(m)` derivatives with intervals ([[Derivatives of a Smooth]]); and `fitted_samples()` and `smooth_samples()` posterior draws.

It is written by Gavin Simpson, a co-author of [[Pedersen et al. 2019]]. The code below, not run in the wiki build because gratia is not installed there, shows the three calls used most: `draw()`, `appraise()` and `derivatives()`.

The GAM and HGAM labs use mgcv and gratia ([[Course Website]], [[Hierarchical GAM]]). gratia doesn't fit GAMs: mgcv fits them, and gratia summarises and plots.

```r
# norun (gratia is not installed in the wiki's build environment)
library(gratia); draw(m); appraise(m); derivatives(m, select = "s(t)")
```

## Connections
- **Builds on:** [[Generalized Additive Model]], [[ggplot2 Grammar of Graphics|ggplot2]]
- **Leads to:** [[Partial Effect Plots]], [[Derivatives of a Smooth]], [[Basis Dimension and gam.check()]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What do gratia's draw() and appraise() do?
??
draw() plots partial effects; appraise() plots residual diagnostics.
++++
