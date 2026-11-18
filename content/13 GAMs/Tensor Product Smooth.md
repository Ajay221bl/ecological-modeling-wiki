---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A tensor product smooth builds a smooth surface of two or more predictors from one-dimensional smooths of each, allowing different amounts of smoothness in each direction."
aliases:
  - "te()"
  - "ti()"
  - "t2()"
  - "Tensor product"
  - "Tensor Product Smooth (te, ti)"
status: seedling
---

# Tensor Product Smooth

A **tensor product smooth** builds a smooth surface of two or more [[Predictor Variable|predictors]] from one-dimensional smooths of each, allowing different amounts of smoothness in each direction ([[Thin Plate Regression Spline]], [[Interaction Term]]). `te(x, z)` is a smooth interaction for predictors on different scales, such as temperature and depth, or week and latitude. It has a separate [[Smoothing Parameter|smoothing parameter]] for each direction, so it is unaffected by [[Scaling Predictors|rescaling]] x or z. This contrasts with `s(x, z)`, which assumes the same smoothness in both directions.

`ti(x, z)` gives only the interaction, excluding main effects, so `s(x) + s(z) + ti(x, z)` tests whether the interaction is needed; `t2()` is an alternative parameterisation that works with gamm4 ([[GAMM]]). In the code below the effect of temperature grows with depth: the [[Generalized Additive Model|additive model]] has AIC 107.9 and adding `ti(temp, depth)` drops it to −59.1.

[[Pedersen et al. 2019]] model bird counts with `te(week, latitude)`, using a cyclic basis for week ([[Cyclic Spline]]). `te(x, z)` and `s(x, z)` are not interchangeable: te handles different units, while s assumes equal smoothness.

```r
library(mgcv); set.seed(18); d <- data.frame(temp = runif(300, 0, 30), depth = runif(300, 0, 500)); d$y <- sin(d$temp / 5) * (d$depth / 500) + rnorm(300, 0, 0.2)
m1 <- gam(y ~ s(temp) + s(depth), data = d, method = "REML"); m2 <- gam(y ~ s(temp) + s(depth) + ti(temp, depth), data = d, method = "REML"); round(c(AIC_additive = AIC(m1), AIC_with_interaction = AIC(m2)), 1)
```

## Connections
- **Builds on:** [[Thin Plate Regression Spline]], [[Interaction Term]], [[Predictor Variable]], [[Smoothing Parameter]], [[Scaling Predictors]], [[Generalized Additive Model]]
- **Leads to:** [[Spatial Smooths]], [[Cyclic Spline]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

When should you use te(x, z) instead of s(x, z)?
??
When x and z are on different scales or units.
++++

What does ti(x, z) represent?
??
Only the interaction between x and z, without their main effects.
++++
