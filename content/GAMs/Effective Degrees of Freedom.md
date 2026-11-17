---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "edf"
  - "EDF"
  - "Effective degrees of freedom (edf)"
  - "Estimated degrees of freedom"
status: seedling
---

# Effective Degrees of Freedom

**In one line:** the effective degrees of freedom of a smooth measure how flexible it turned out after penalisation, with 1 meaning a straight line and larger values meaning more wiggles.

> [!info] Before this, it helps to know
> [[Degrees of Freedom]] · [[Smoothing Parameter]] · [[Effective Number of Parameters]] (the same idea for any penalised model)

## Start from zero
1. **Ranges from about 1 (or 0 with shrinkage smooths) up to k − 1.**
2. **edf ≈ 1:** effectively linear. edf 2 to 3: gentle curve. edf near k − 1: check whether k is too small.
3. **Reported in `summary(gam)`** with a test of whether the smooth differs from zero.
4. **Not an integer,** because penalised coefficients count as partial parameters.
5. **Ref.df** in the summary is a reference df used for the test.

## In R
```r
library(mgcv); set.seed(10); d <- data.frame(x1 = runif(300), x2 = runif(300)); d$y <- 2 * d$x1 + sin(2 * pi * d$x2) + rnorm(300, 0, 0.3)
round(summary(gam(y ~ s(x1) + s(x2), data = d, method = "REML"))$s.table[, 1:2], 2)        # x1 nearly straight (edf under 2), x2 clearly curved
```

## In the course
GAM lab summaries ([[Course Website]]). [[Zuur et al. 2009 Ch3]].

## Common confusions
- **"High edf means a strong effect."** It means a wiggly effect; strength is in the size of the curve.

## Explain it back
- What does edf = 1 mean?

*Pass test:* you can read edf from a GAM summary.

## Connections
- **Builds on:** [[Degrees of Freedom]], [[Smoothing Parameter]], [[Effective Number of Parameters]]
- **Leads to:** [[Basis Dimension and gam.check()]], [[Partial Effect Plots]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

What does an edf of about 1 mean for a smooth?
??
The smooth is effectively a straight line.
++++
