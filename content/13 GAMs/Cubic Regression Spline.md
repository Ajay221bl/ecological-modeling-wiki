---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A cubic regression spline is a spline made of cubic pieces joined at a set of knots, parameterised by the curve's values at those knots."
aliases:
  - "bs = \"cr\""
  - "Cubic spline"
  - "Natural cubic spline"
  - "Cubic regression splines"
status: seedling
---

# Cubic Regression Spline

A **cubic regression spline** is a [[Spline]] made of cubic pieces joined at a set of [[Knots]], parameterised by the curve's values at those knots. In mgcv it is `s(x, bs = "cr", k = 10)`, with knots at quantiles of x by default. It is fast and easy to interpret, because its coefficients relate to heights at the knots.

[[Zuur et al. 2009 Ch3]] use it for the bioluminescence examples, and tensor products often use "cr" marginals ([[Tensor Product Smooth]]). The shrinkage version, `"cs"`, lets the whole term shrink to zero ([[Double Penalty Selection]]). In the code below a sine wave fitted with `bs = "cr"` uses 8.33 effective degrees of freedom and the default thin plate spline 8.37: once penalised, the two bases agree closely ([[Thin Plate Regression Spline]]).

It is the basis used in Zuur's GAM chapter with mgcv. "cr" and "tp" do not give very different fits; with the penalty they usually agree closely.

```r
library(mgcv); set.seed(6); d <- data.frame(x = runif(200, 0, 10)); d$y <- sin(d$x) + rnorm(200, 0, 0.3)
round(c(edf_cr = summary(gam(y ~ s(x, bs = "cr"), data = d, method = "REML"))$edf, edf_tp = summary(gam(y ~ s(x), data = d, method = "REML"))$edf), 2)
```

## Connections
- **Builds on:** [[Spline]], [[Knots]]
- **Leads to:** [[Thin Plate Regression Spline]], [[Tensor Product Smooth]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What mgcv basis code gives a cubic regression spline?
??
bs = "cr".
++++
