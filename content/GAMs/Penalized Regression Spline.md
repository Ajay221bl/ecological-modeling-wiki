---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "Penalised spline"
  - "P-spline"
  - "Smoothing spline"
  - "Penalized spline"
status: seedling
---

# Penalized Regression Spline

**In one line:** a penalized regression spline uses more basis functions than needed and adds a penalty for wiggliness to the fitting criterion, so the data and the penalty together decide how bendy the curve is.

> [!info] Before this, it helps to know
> [[Spline]] · [[Wiggliness Penalty]] · [[Least Squares]]

## Start from zero
1. **Fitting criterion:** fit to data (deviance or sum of squares) + λ × wiggliness.
2. **λ = 0:** an unpenalised, very wiggly spline.
3. **λ → ∞:** the curve becomes the unpenalised part (a straight line for m = 2).
4. **λ is estimated** by REML, ML or GCV.
5. **Solves the knot-choice problem** of regression splines: just choose k large enough.
6. **Zuur Ch3:** "smoothing splines alias penalised splines".

## See it
![[Smoothing parameter.png|700]]
*What to look at:* the same basis, three λ values, three very different curves.

## In R
```r
library(mgcv); set.seed(8); d <- data.frame(x = runif(150)); d$y <- sin(2 * pi * d$x) + rnorm(150, 0, 0.3)
sapply(c(1e-6, NA, 1e3), function(l) round(summary(if (is.na(l)) gam(y ~ s(x, k = 20), data = d, method = "REML") else gam(y ~ s(x, k = 20), data = d, sp = l))$edf, 1))    # tiny, REML-chosen, large lambda
```

## In the course
[[Zuur et al. 2009 Ch3]]. [[Pedersen et al. 2019]].

## Common confusions
- **"The penalty removes flexibility you might need."** It removes only what the data don't support.

## Explain it back
- What does the curve become as λ grows very large?

*Pass test:* you can write the penalised fitting criterion.

## Connections
- **Builds on:** [[Spline]], [[Wiggliness Penalty]], [[Least Squares]]
- **Leads to:** [[Smoothing Parameter]], [[Effective Degrees of Freedom]], [[Regularization]]
- **Part of:** [[MOC - GAMs]], molecular note [[Why penalize wiggliness]]

## Flashcards

What is a penalized regression spline?
??
A spline with many basis functions fitted with a penalty on wiggliness, so the smoothness is chosen from the data.
![[Smoothing parameter.png]]
++++
