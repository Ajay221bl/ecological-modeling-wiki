---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "TPRS"
  - "bs = \"tp\""
  - "Thin plate spline"
  - "Thin-plate regression spline"
status: seedling
---

# Thin Plate Regression Spline

**In one line:** a thin plate regression spline is mgcv's default smoother, which avoids choosing knots by starting from a spline through every data point and keeping its smoothest low-rank version.

> [!info] Before this, it helps to know
> [[Spline]] · [[Basis Function]]

## The everyday picture
A thin metal sheet bent to pass near a set of pins. It takes the shape that needs the least bending energy.

## Start from zero
1. **Default in `s()`:** `bs = "tp"`, `k = 10`.
2. **No knot placement** decisions.
3. **Works in several dimensions with equal smoothness in every direction** (isotropic), so `s(x, y)` suits spatial coordinates on the same scale.
4. **Penalty order m:** m = 2 penalises curvature (second derivative), leaving straight lines unpenalised. m = 1 penalises slope, leaving only flat lines unpenalised.
5. **Pedersen et al. use m = 1 for group-level smooths in model GI** to reduce overlap with the global smooth.
6. **Slower for very large data;** bam() or "cr" help.

## In R
```r
library(mgcv); set.seed(7); d <- data.frame(x = runif(200), z = runif(200)); d$y <- sin(3 * d$x) * cos(3 * d$z) + rnorm(200, 0, 0.1)
round(summary(gam(y ~ s(x, z), data = d, method = "REML"))$edf, 1)          # 2-D thin plate smooth
```

## In the course
[[Pedersen et al. 2019]] (TPRS, m = 1 vs m = 2).

## Common confusions
- **"Use s(x, z) for any two variables."** Only when they share units; otherwise use a tensor product.

## Explain it back
- What does m = 1 penalise?

*Pass test:* you can explain the default smoother.

## Connections
- **Builds on:** [[Spline]], [[Basis Function]]
- **Leads to:** [[Tensor Product Smooth]], [[Spatial Smooths]], [[Wiggliness Penalty]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

What is mgcv's default smoother?
??
A thin plate regression spline (bs = "tp") with k = 10.
++++

When is an isotropic s(x, z) appropriate?
??
When x and z are on the same scale, such as spatial coordinates.
++++
