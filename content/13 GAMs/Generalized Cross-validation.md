---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "GCV"
  - "GCV.Cp"
  - "UBRE"
  - "Un-biased risk estimator"
  - "Mallows Cp"
status: seedling
---

# Generalized Cross-validation

**In one line:** generalized cross-validation chooses the smoothing parameter that minimises an approximation to leave-one-out prediction error, and UBRE is its counterpart when the scale parameter is known.

> [!info] Before this, it helps to know
> [[Leave-one-out Cross-validation]] · [[Smoothing Parameter]]

## Start from zero
1. **GCV score ≈ n × RSS / (n − edf)².** Small residuals help, high edf hurts.
2. **Computed from one fit,** without refitting n times.
3. **UBRE (Mallows' Cp):** used for Poisson and binomial, where the scale is known (1).
4. **mgcv default** (`method = "GCV.Cp"`).
5. **Known weakness:** the GCV score can be flat with multiple minima, and tends to under-smooth (overfit) occasionally. REML is more stable.
6. **Zuur Ch3 explains cross-validation** for choosing smoothness.

## In R
```r
library(mgcv); set.seed(12); d <- data.frame(x = runif(150)); d$y <- sin(2 * pi * d$x) + rnorm(150, 0, 0.3); m <- gam(y ~ s(x), data = d)
round(c(gcv_score = m$gcv.ubre, edf = summary(m)$edf), 3)
```

## In the course
[[Zuur et al. 2009 Ch3]] (cross-validation).

## Common confusions
- **"GCV and REML always agree."** Usually close; GCV is more variable.

## Explain it back
- When does mgcv use UBRE instead of GCV?

*Pass test:* you can explain GCV's role.

## Connections
- **Builds on:** [[Leave-one-out Cross-validation]], [[Smoothing Parameter]]
- **Leads to:** [[REML for Smoothness Selection]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]], molecular note [[GCV vs REML for Smoothing]]

## Flashcards

What does GCV approximate?
??
Leave-one-out prediction error, computed from a single fit.
++++

When is UBRE used instead of GCV?
??
When the scale parameter is known, as for Poisson and binomial families.
++++
