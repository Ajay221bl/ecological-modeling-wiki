---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "The smoothing parameter λ sets how heavily wiggliness is penalised relative to fit, trading closeness to the data against smoothness of the curve."
aliases:
  - "Lambda (smoothing)"
  - "sp"
  - "Smoothing Parameter (lambda)"
  - "Smoothing parameter λ"
status: seedling
---

# Smoothing Parameter

The **smoothing parameter** λ sets how heavily wiggliness is penalised relative to fit, trading closeness to the data against smoothness of the curve ([[Wiggliness Penalty]], [[Bias-Variance Trade-off]]). A small λ lets the curve follow the data closely, with low bias and high variance; a large λ flattens it toward the null space, with high bias and low variance. The figure shows λ tiny on the left, moderate in the middle and huge on the right.

mgcv estimates one λ per smooth, several for tensor products, by REML (recommended), ML, GCV (the default `GCV.Cp`) or UBRE ([[REML for Smoothness Selection]], [[Generalized Cross-validation]]). You can fix it with `gam(..., sp = 0.1)`, though this is rarely needed, and `m$sp` shows the estimates. In the code below REML picks λ = 0.018 for a sine wave, which gives a smooth with 7.3 effective degrees of freedom ([[Effective Degrees of Freedom]]).

[[Pedersen et al. 2019]] (Fig. 2) contrast λ chosen by REML with λ = 0 and λ very large ([[Noam Ross GAM Course]]). λ is not chosen by the analyst; mgcv estimates it.

![[Smoothing parameter.png|700]]
*What to look at:* left λ tiny, middle moderate, right huge.

```r
library(mgcv); set.seed(9); d <- data.frame(x = runif(200)); d$y <- sin(2 * pi * d$x) + rnorm(200, 0, 0.3); m <- gam(y ~ s(x), data = d, method = "REML")
round(c(lambda = m$sp[[1]], edf = summary(m)$edf), 3)
```

## Connections
- **Builds on:** [[Wiggliness Penalty]], [[Bias-Variance Trade-off]]
- **Leads to:** [[REML for Smoothness Selection]], [[Generalized Cross-validation]], [[Effective Degrees of Freedom]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What does the smoothing parameter control?
??
How strongly wiggliness is penalised: small λ is wiggly, large λ is smooth.
![[Smoothing parameter.png]]
++++
