---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "Using REML to choose smoothing parameters treats the wiggly parts of a smooth like random effects and picks λ by maximising their restricted likelihood, which is stable and resists overfitting."
aliases:
  - "method = \"REML\""
  - "REML (GAMs)"
  - "Marginal likelihood smoothness selection"
status: seedling
---

# REML for Smoothness Selection

Using **REML for smoothness selection** treats the wiggly parts of a smooth like random effects and picks λ by maximising their restricted likelihood, which is stable and resists overfitting ([[REML]], [[Smoothing Parameter]]). A penalised smooth is mathematically a mixed model: the penalised coefficients are random effects, and λ relates to their variance ([[Random Effect]]). So λ can be estimated like a variance component, by REML.

You must ask for it with `gam(..., method = "REML")`, because mgcv's default is `"GCV.Cp"` ([[Generalized Cross-validation]]). Compare models with different parametric terms using ML, as with mixed models. In the code below the truth is a straight line in 100 simulated datasets: GCV gives an edf above 1.5 in 28% of them and up to 8.2, REML in 23% and at most 4.8. GCV overfits a straight line more often and more wildly.

[[Pedersen et al. 2019]] strongly recommend REML or ML over GCV, and all their examples use REML ([[Bayesian GAMs]] take the same mixed-model view). mgcv does not use REML by default; the default is GCV.Cp.

```r
library(mgcv); r <- t(sapply(1:100, function(s) { set.seed(s); d <- data.frame(x = runif(100)); d$y <- d$x + rnorm(100, 0, 0.5)       # truth is a straight line
  c(GCV = summary(gam(y ~ s(x), data = d))$edf, REML = summary(gam(y ~ s(x), data = d, method = "REML"))$edf) }))
round(rbind(share_with_edf_over_1.5 = colMeans(r > 1.5), max_edf = apply(r, 2, max)), 2)        # GCV overfits a straight line more often and more wildly
```

## Connections
- **Builds on:** [[REML]], [[Smoothing Parameter]], [[Random Effect]]
- **Leads to:** [[Generalized Cross-validation]], [[Random-effect Smooth]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]], molecular note [[GCV vs REML for Smoothing]]

## Flashcards

Why can a smoothing parameter be estimated by REML?
??
A penalised smooth is equivalent to a mixed model where λ relates to a random-effect variance.
++++

What is mgcv's default smoothing selection method?
??
GCV.Cp (so set method = "REML" explicitly).
++++
