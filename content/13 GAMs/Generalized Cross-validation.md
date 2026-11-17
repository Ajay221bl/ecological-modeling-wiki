---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "Generalized cross-validation chooses the smoothing parameter that minimises an approximation to leave-one-out prediction error, and UBRE is its counterpart when the scale parameter is known."
aliases:
  - "GCV"
  - "GCV.Cp"
  - "UBRE"
  - "Un-biased risk estimator"
  - "Mallows Cp"
status: seedling
---

# Generalized Cross-validation

**Generalized cross-validation** (GCV) chooses the smoothing parameter that minimises an approximation to leave-one-out prediction error, and UBRE (Mallows' Cp) is its counterpart when the scale parameter is known, as for Poisson and binomial ([[Leave-one-out Cross-validation]], [[Smoothing Parameter]]). The GCV score is roughly n × RSS / (n − edf)²: small residuals help, and a high edf hurts. It is computed from one fit, without refitting n times.

It is mgcv's default (`method = "GCV.Cp"`). Its known weakness is that the score can be flat or have several minima, and it occasionally under-smooths, which is overfitting; REML is more stable ([[REML for Smoothness Selection]]). In the code below GCV picks a smooth with 5.46 effective degrees of freedom for a sine wave, with a GCV score of 0.091, close to the noise variance of 0.09.

[[Zuur et al. 2009 Ch3]] explain cross-validation for choosing smoothness ([[Cross-validation]]). GCV and REML usually agree closely, but not always: GCV is more variable.

```r
library(mgcv); set.seed(12); d <- data.frame(x = runif(150)); d$y <- sin(2 * pi * d$x) + rnorm(150, 0, 0.3); m <- gam(y ~ s(x), data = d)
round(c(gcv_score = m$gcv.ubre, edf = summary(m)$edf), 3)
```

## Connections
- **Builds on:** [[Leave-one-out Cross-validation]], [[Smoothing Parameter]]
- **Leads to:** [[REML for Smoothness Selection]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]], molecular note [[GCV vs REML for Smoothing]]

## Flashcards

What does GCV approximate?
??
Leave-one-out prediction error, computed from a single fit.
++++

When is UBRE used instead of GCV?
??
When the scale parameter is known, as for Poisson and binomial families.
++++
