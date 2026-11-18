---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A penalized regression spline uses more basis functions than needed and adds a penalty for wiggliness to the fitting criterion, so the data and the penalty together decide how bendy the curve is."
aliases:
  - "Penalised spline"
  - "P-spline"
  - "Smoothing spline"
  - "Penalized spline"
status: seedling
---

# Penalized Regression Spline

A **penalized regression spline** uses more [[Basis Function|basis functions]] than needed and adds a penalty for wiggliness to the fitting criterion, so the data and the penalty together decide how bendy the curve is ([[Spline]], [[Wiggliness Penalty]], [[Least Squares]]). The criterion is fit to the data (deviance or [[Sum of Squares|sum of squares]]) + λ × wiggliness. With λ = 0 you get an unpenalised, very wiggly spline; as λ grows the curve becomes the unpenalised part, a [[Equation of a Line|straight line]] for m = 2. λ itself is estimated by [[REML]], ML or GCV ([[Smoothing Parameter]], [[REML for Smoothness Selection]], [[Generalized Cross-validation]]).

This solves the knot-choice problem of regression splines: just choose k large enough ([[Basis Dimension and gam.check()]]). The figure shows the same basis with three λ values and three very different curves. In the code below a 20-function basis through a sine wave uses 19.0 effective degrees of freedom with a tiny λ, 7.2 with the REML-chosen λ, and 1.0, a straight line, with a huge λ ([[Effective Degrees of Freedom]]).

Zuur Ch3 calls them "smoothing splines alias penalised splines" ([[Zuur et al. 2009 Ch3]], [[Pedersen et al. 2019]]). The penalty doesn't remove flexibility you need; it removes only what the data don't support.

![[Smoothing parameter.png|700]]
*What to look at:* the same basis, three λ values, three very different curves.

```r
library(mgcv); set.seed(8); d <- data.frame(x = runif(150)); d$y <- sin(2 * pi * d$x) + rnorm(150, 0, 0.3)
sapply(c(1e-6, NA, 1e3), function(l) round(summary(if (is.na(l)) gam(y ~ s(x, k = 20), data = d, method = "REML") else gam(y ~ s(x, k = 20), data = d, sp = l))$edf, 1))    # tiny, REML-chosen, large lambda
```

## Connections
- **Builds on:** [[Spline]], [[Wiggliness Penalty]], [[Least Squares]], [[Basis Function]], [[Sum of Squares]], [[Equation of a Line]], [[REML]]
- **Leads to:** [[Smoothing Parameter]], [[Effective Degrees of Freedom]], [[Regularization]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]], molecular note [[Why penalize wiggliness]]

## Flashcards

What is a penalized regression spline?
??
A spline with many basis functions fitted with a penalty on wiggliness, so the smoothness is chosen from the data.
![[Smoothing parameter.png]]
++++
