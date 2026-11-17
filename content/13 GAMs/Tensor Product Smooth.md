---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "te()"
  - "ti()"
  - "t2()"
  - "Tensor product"
  - "Tensor Product Smooth (te, ti)"
status: seedling
---

# Tensor Product Smooth

**In one line:** a tensor product smooth builds a smooth surface of two or more predictors from one-dimensional smooths of each, allowing different amounts of smoothness in each direction.

> [!info] Before this, it helps to know
> [[Thin Plate Regression Spline]] · [[Interaction Term]]

## Start from zero
1. **`te(x, z)`:** a smooth interaction for predictors on different scales (temperature and depth, week and latitude).
2. **Separate smoothing parameters for each direction,** so it is invariant to rescaling x or z.
3. **`ti(x, z)`:** only the interaction, excluding main effects. Use with `s(x) + s(z) + ti(x, z)` to test whether the interaction is needed.
4. **`t2()`:** an alternative parameterisation that works with gamm4.
5. **Pedersen et al.** model bird counts with `te(week, latitude)`, using a cyclic basis for week.
6. **Contrast with `s(x, z)`,** which assumes the same smoothness in both directions.

## In R
```r
library(mgcv); set.seed(18); d <- data.frame(temp = runif(300, 0, 30), depth = runif(300, 0, 500)); d$y <- sin(d$temp / 5) * (d$depth / 500) + rnorm(300, 0, 0.2)
m1 <- gam(y ~ s(temp) + s(depth), data = d, method = "REML"); m2 <- gam(y ~ s(temp) + s(depth) + ti(temp, depth), data = d, method = "REML"); round(c(AIC_additive = AIC(m1), AIC_with_interaction = AIC(m2)), 1)
```

## In the course
[[Pedersen et al. 2019]] (bird migration example).

## Common confusions
- **"te(x, z) and s(x, z) are interchangeable."** te handles different units; s assumes equal smoothness.

## Explain it back
- What does ti() leave out?

*Pass test:* you can fit and test a smooth interaction.

## Connections
- **Builds on:** [[Thin Plate Regression Spline]], [[Interaction Term]]
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
