---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A thin plate regression spline is mgcv's default smoother, which avoids choosing knots by starting from a spline through every data point and keeping its smoothest low-rank version."
aliases:
  - "TPRS"
  - "bs = \"tp\""
  - "Thin plate spline"
  - "Thin-plate regression spline"
status: seedling
---

# Thin Plate Regression Spline

Imagine a thin metal sheet bent to pass near a set of pins: it takes the shape that needs the least bending energy. A **thin plate regression spline** (TPRS) is mgcv's default smoother, which avoids choosing knots by starting from a spline through every data point and keeping its smoothest low-rank version ([[Spline]], [[Basis Function]]). It is the default in `s()`, with `bs = "tp"` and `k = 10`, and needs no knot-placement decisions ([[Knots]]).

It works in several dimensions with equal smoothness in every direction ([[Isotropy|isotropic]]), so `s(x, y)` suits spatial coordinates on the same scale ([[Spatial Smooths]]). Its penalty order m matters: m = 2 penalises curvature, the second derivative, leaving straight lines unpenalised, while m = 1 penalises slope, leaving only flat lines unpenalised ([[Wiggliness Penalty]]). It is slower for very large data, where [[bam()]] or "cr" help. In the code below a two-dimensional thin plate smooth of a wavy surface in x and z uses 22.9 [[Effective Degrees of Freedom|effective degrees of freedom]].

[[Pedersen et al. 2019]] compare m = 1 with m = 2 and use m = 1 for [[Group-level Smoothers|group-level smooths]] in model GI to reduce overlap with the global smooth ([[Global Smoother]]). Don't use `s(x, z)` for any two variables, only for ones that share units; otherwise use a [[Tensor Product Smooth]].

```r
library(mgcv); set.seed(7); d <- data.frame(x = runif(200), z = runif(200)); d$y <- sin(3 * d$x) * cos(3 * d$z) + rnorm(200, 0, 0.1)
round(summary(gam(y ~ s(x, z), data = d, method = "REML"))$edf, 1)          # 2-D thin plate smooth
```

## Connections
- **Builds on:** [[Spline]], [[Basis Function]], [[Isotropy]], [[Effective Degrees of Freedom]], [[Group-level Smoothers]]
- **Leads to:** [[Tensor Product Smooth]], [[Spatial Smooths]], [[Wiggliness Penalty]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What is mgcv's default smoother?
??
A thin plate regression spline (bs = "tp") with k = 10.
++++

When is an isotropic s(x, z) appropriate?
??
When x and z are on the same scale, such as spatial coordinates.
++++
