---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "The basis dimension k caps how wiggly a smooth can become, and `gam.check()` tests whether k was large enough by looking for leftover pattern in the residuals."
aliases:
  - "gam.check()"
  - "k.check()"
  - "k-index"
  - "Basis dimension"
status: seedling
---

# Basis Dimension and gam.check()

The **basis dimension** k caps how wiggly a smooth can become: the maximum edf is k − 1 for a centred smooth ([[Basis Function]], [[Effective Degrees of Freedom]]). Too small a k forces oversmoothing whatever λ is; too large a k mainly costs computing time, since the penalty handles the rest. `gam.check()` tests whether k was large enough by looking for leftover pattern in the residuals.

`gam.check(m)` prints, for each smooth, k′, edf, a k-index and a p-value, plots residual diagnostics, and reports whether the smoothing-parameter optimisation converged. The warning sign is a k-index below 1 with a small p-value and edf close to k′; then double k and refit, and if edf barely changes the original k was fine. In the code below a fast-oscillating curve fitted with k = 5 gives k′ = 4, edf 3.5, k-index 0.20 and p < 0.001; with k = 30 it gives edf 23.1, k-index 1.08 and p = 0.93.

[[Pedersen et al. 2019]] use `gam.check()` to judge k, as does the GAM lab ([[Course Website]], [[Smoothing Function s()]]). A low p-value does not always mean increase k: check whether edf is near k′ and whether a bigger k changes the fit.

```r
library(mgcv); set.seed(14); d <- data.frame(x = runif(400)); d$y <- sin(8 * pi * d$x) + rnorm(400, 0, 0.3)
m4 <- gam(y ~ s(x, k = 5), data = d, method = "REML"); m30 <- gam(y ~ s(x, k = 30), data = d, method = "REML")
round(rbind(k5 = k.check(m4)[1, ], k30 = k.check(m30)[1, ]), 3)
```

## Connections
- **Builds on:** [[Basis Function]], [[Effective Degrees of Freedom]]
- **Leads to:** [[Smoothing Function s()]], [[GAM Workflow in R]], [[Model Validation]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What does gam.check() test about k?
??
Whether there is leftover pattern in residuals suggesting the basis dimension is too small.
++++

What should you do if edf is close to k′ and the k-index is low?
??
Increase k (for example, double it) and refit.
++++
