---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "method = \"REML\""
  - "REML (GAMs)"
  - "Marginal likelihood smoothness selection"
status: seedling
---

# REML for Smoothness Selection

**In one line:** using REML to choose smoothing parameters treats the wiggly parts of a smooth like random effects and picks λ by maximising their restricted likelihood, which is stable and resists overfitting.

> [!info] Before this, it helps to know
> [[REML]] · [[Smoothing Parameter]] · [[Random Effect]] (the analogy)

## Start from zero
1. **A penalised smooth is mathematically a mixed model:** penalised coefficients are random effects, λ relates to their variance.
2. **So λ can be estimated like a variance component,** by REML.
3. **Pedersen et al. strongly recommend REML or ML** over GCV.
4. **`gam(..., method = "REML")`.** Must be stated; the default is `"GCV.Cp"`.
5. **Compare models with different fixed parametric terms using ML,** as with mixed models.

## In R
```r
library(mgcv); r <- t(sapply(1:100, function(s) { set.seed(s); d <- data.frame(x = runif(100)); d$y <- d$x + rnorm(100, 0, 0.5)       # truth is a straight line
  c(GCV = summary(gam(y ~ s(x), data = d))$edf, REML = summary(gam(y ~ s(x), data = d, method = "REML"))$edf) }))
round(rbind(share_with_edf_over_1.5 = colMeans(r > 1.5), max_edf = apply(r, 2, max)), 2)        # GCV overfits a straight line more often and more wildly
```

## In the course
[[Pedersen et al. 2019]] (all examples use REML).

## Common confusions
- **"mgcv uses REML by default."** The default is GCV.Cp.

## Explain it back
- Why can REML choose λ?

*Pass test:* you can set and justify method = "REML".

## Connections
- **Builds on:** [[REML]], [[Smoothing Parameter]], [[Random Effect]]
- **Leads to:** [[Generalized Cross-validation]], [[Random-effect Smooth]]
- **Part of:** [[MOC - GAMs]], molecular note [[GCV vs REML for Smoothing]]

## Flashcards

Why can a smoothing parameter be estimated by REML?
??
A penalised smooth is equivalent to a mixed model where λ relates to a random-effect variance.
++++

What is mgcv's default smoothing selection method?
??
GCV.Cp (so set method = "REML" explicitly).
++++
