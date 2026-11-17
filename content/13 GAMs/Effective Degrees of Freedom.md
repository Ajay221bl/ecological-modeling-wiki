---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "The effective degrees of freedom of a smooth measure how flexible it turned out after penalisation, with 1 meaning a straight line and larger values meaning more wiggles."
aliases:
  - "edf"
  - "EDF"
  - "Effective degrees of freedom (edf)"
  - "Estimated degrees of freedom"
status: seedling
---

# Effective Degrees of Freedom

The **effective degrees of freedom** (edf) of a smooth measure how flexible it turned out after penalisation, with 1 meaning a straight line and larger values meaning more wiggles ([[Degrees of Freedom]], [[Smoothing Parameter]]). The edf ranges from about 1, or 0 with shrinkage smooths, up to k − 1. An edf near 1 is effectively linear; 2 to 3 is a gentle curve; near k − 1, check whether k is too small ([[Basis Dimension and gam.check()]]). It is not an integer, because penalised coefficients count as partial parameters, the same idea as the [[Effective Number of Parameters]] of any penalised model.

`summary(gam)` reports it with a test of whether the smooth differs from zero; Ref.df is a reference df used for that test. In the code below x1 has a truly linear effect and x2 a sine-shaped one: s(x1) gets an edf of 1.67, nearly straight, and s(x2) an edf of 7.49, clearly curved.

The GAM lab summaries report edf ([[Course Website]], [[Zuur et al. 2009 Ch3]], [[Generalized Additive Model]]). A high edf does not mean a strong effect; it means a wiggly one, and strength is in the size of the curve ([[Partial Effect Plots]]).

```r
library(mgcv); set.seed(10); d <- data.frame(x1 = runif(300), x2 = runif(300)); d$y <- 2 * d$x1 + sin(2 * pi * d$x2) + rnorm(300, 0, 0.3)
round(summary(gam(y ~ s(x1) + s(x2), data = d, method = "REML"))$s.table[, 1:2], 2)        # x1 nearly straight (edf under 2), x2 clearly curved
```

## Connections
- **Builds on:** [[Degrees of Freedom]], [[Smoothing Parameter]], [[Effective Number of Parameters]]
- **Leads to:** [[Basis Dimension and gam.check()]], [[Partial Effect Plots]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What does an edf of about 1 mean for a smooth?
??
The smooth is effectively a straight line.
++++
