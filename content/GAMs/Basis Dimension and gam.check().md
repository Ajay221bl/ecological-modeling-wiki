---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "gam.check()"
  - "k.check()"
  - "k-index"
  - "Basis dimension"
status: seedling
---

# Basis Dimension and gam.check()

**In one line:** the basis dimension k caps how wiggly a smooth can become, and `gam.check()` tests whether k was large enough by looking for leftover pattern in the residuals.

> [!info] Before this, it helps to know
> [[Basis Function]] · [[Effective Degrees of Freedom]]

## Start from zero
1. **k sets the maximum edf** (k − 1 for a centred smooth).
2. **Too small k forces oversmoothing,** whatever λ is.
3. **Too large k mainly costs computing time;** the penalty handles the rest.
4. **`gam.check(m)`** prints, for each smooth, k′, edf, a k-index and a p-value. It also plots residual diagnostics.
5. **Warning sign:** k-index below 1 with a small p-value, and edf close to k′. Then double k and refit.
6. **If edf barely changes after increasing k,** the original k was fine.
7. **Also reports convergence** of the smoothing parameter optimisation.

## In R
```r
library(mgcv); set.seed(14); d <- data.frame(x = runif(400)); d$y <- sin(8 * pi * d$x) + rnorm(400, 0, 0.3)
m4 <- gam(y ~ s(x, k = 5), data = d, method = "REML"); m30 <- gam(y ~ s(x, k = 30), data = d, method = "REML")
round(rbind(k5 = k.check(m4)[1, ], k30 = k.check(m30)[1, ]), 3)
```

## In the course
[[Pedersen et al. 2019]] (`mgcv::gam.check()` to judge k). GAM lab ([[Course Website]]).

## Common confusions
- **"A low p-value in gam.check always means increase k."** Check whether edf is near k′ and whether a bigger k changes the fit.

## Explain it back
- What two signs together suggest k is too small?

*Pass test:* you can run and act on gam.check.

## Connections
- **Builds on:** [[Basis Function]], [[Effective Degrees of Freedom]]
- **Leads to:** [[Smoothing Function s()]], [[GAM Workflow in R]], [[Model Validation]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

What does gam.check() test about k?
??
Whether there is leftover pattern in residuals suggesting the basis dimension is too small.
++++

What should you do if edf is close to k′ and the k-index is low?
??
Increase k (for example, double it) and refit.
++++
