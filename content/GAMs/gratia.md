---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "gratia package"
  - "draw()"
  - "appraise()"
  - "smooth_estimates()"
  - "gratia (draw, appraise)"
status: seedling
---

# gratia

**In one line:** gratia is an R package that draws ggplot2 graphics of mgcv models and computes derived quantities such as derivatives and posterior simulations.

> [!info] Before this, it helps to know
> [[Generalized Additive Model]] · [[ggplot2 Grammar of Graphics|ggplot2]]

## Start from zero
1. **`draw(m)`:** partial effect plots for every smooth.
2. **`appraise(m)`:** four residual diagnostic plots (Q-Q, residuals vs linear predictor, histogram, observed vs fitted).
3. **`smooth_estimates(m)`:** a tidy data frame of smooth values and SEs.
4. **`derivatives(m)`:** derivatives with intervals.
5. **`fitted_samples()`, `smooth_samples()`:** posterior draws.
6. **Written by Gavin Simpson,** a co-author of Pedersen et al. (2019).

## In R
```r
# norun (gratia is not installed in the wiki's build environment)
library(gratia); draw(m); appraise(m); derivatives(m, select = "s(t)")
```

## In the course
GAM and HGAM labs use mgcv and gratia ([[Course Website]]).

## Common confusions
- **"gratia fits GAMs."** mgcv fits them; gratia summarises and plots.

## Explain it back
- Which gratia function plots residual diagnostics?

*Pass test:* you can visualise a GAM with gratia.

## Connections
- **Builds on:** [[Generalized Additive Model]], [[ggplot2 Grammar of Graphics|ggplot2]]
- **Leads to:** [[Partial Effect Plots]], [[Derivatives of a Smooth]], [[Basis Dimension and gam.check()]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

What do gratia's draw() and appraise() do?
??
draw() plots partial effects; appraise() plots residual diagnostics.
++++
