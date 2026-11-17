---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "bs = \"cr\""
  - "Cubic spline"
  - "Natural cubic spline"
  - "Cubic regression splines"
status: seedling
---

# Cubic Regression Spline

**In one line:** a cubic regression spline is a spline made of cubic pieces joined at a set of knots, parameterised by the curve's values at those knots.

> [!info] Before this, it helps to know
> [[Spline]] · [[Knots]]

## Start from zero
1. **`s(x, bs = "cr", k = 10)`** in mgcv.
2. **Knots at quantiles of x** by default.
3. **Fast and easy to interpret** (coefficients relate to heights at knots).
4. **Zuur Ch3 uses it** for the bioluminescence examples.
5. **Tensor products often use "cr" marginals.**
6. **Shrinkage version `"cs"`** lets the whole term shrink to zero.

## In R
```r
library(mgcv); set.seed(6); d <- data.frame(x = runif(200, 0, 10)); d$y <- sin(d$x) + rnorm(200, 0, 0.3)
round(c(edf_cr = summary(gam(y ~ s(x, bs = "cr"), data = d, method = "REML"))$edf, edf_tp = summary(gam(y ~ s(x), data = d, method = "REML"))$edf), 2)
```

## In the course
[[Zuur et al. 2009 Ch3]] (GAM in mgcv with cubic regression splines).

## Common confusions
- **"cr and tp give very different fits."** With the penalty, they usually agree closely.

## Explain it back
- What does bs = "cs" add?

*Pass test:* you can switch bases in s().

## Connections
- **Builds on:** [[Spline]], [[Knots]]
- **Leads to:** [[Thin Plate Regression Spline]], [[Tensor Product Smooth]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

What mgcv basis code gives a cubic regression spline?
??
bs = "cr".
++++
