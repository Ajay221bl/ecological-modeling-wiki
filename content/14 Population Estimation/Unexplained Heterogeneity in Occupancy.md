---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Unexplained heterogeneity in occupancy means sites differ in their true chance of being occupied for reasons the model does not include, which the basic model assumes away."
aliases:
  - "No unexplained heterogeneity in occupancy"
  - "Constant occupancy assumption"
  - "Heterogeneity in psi"
status: seedling
---

# Unexplained Heterogeneity in Occupancy

Asking "what share of houses on this street have cats?" gives one number, but if the street has flats on one end and family houses with gardens on the other, that one number hides two very different groups. **Unexplained heterogeneity in occupancy** means sites differ in their true chance of being occupied for reasons the model does not include ([[Occupancy]], [[Site Covariates]]). The guest lecture states the assumption as "no unexplained heterogeneity in occupancy": ψ is the same at every site, or its differences are explained by site covariates that were measured and put in the model. If it is violated, "error rates for occupancy" go up.

In practice the average ψ̂ is often still close, but every site-level statement is wrong, and if the same hidden variable also changes detection, the bias spreads to ψ̂ itself. In the code below a vegetation variable makes site occupancy range from 0.10 to 0.94 (5th to 95th percentile) and also lowers detection. The model that ignores vegetation reports one ψ̂ of 0.52 for every site when the truth averages 0.54; adding vegetation to both parts gives 0.55 and recovers its effect (1.48 against a true 1.5). So the map is the real casualty: a constant-ψ model cannot say where the species lives ([[Species Distribution Model]]).

The fix is to measure the things you think matter (habitat, elevation, land use, other species, management history) and model them on the [[Logit Link]] scale, or to add a site-level [[Random Effect]] when the cause cannot be measured ([[Occupancy Guest Lecture]], [[Single-season Occupancy]]). Heterogeneity in occupancy is not the same as heterogeneity in detection: one is about where the species is, the other about how easily you see it, and they are separate assumptions ([[Unexplained Heterogeneity in Detection]]).

```r
set.seed(5); S <- 400; K <- 3; veg <- rnorm(S)
z <- rbinom(S, 1, plogis(0.3 + 1.5 * veg)); y <- matrix(rbinom(S * K, 1, z * plogis(0.5 - veg)), S, K); d <- rowSums(y)
round(quantile(plogis(0.3 + 1.5 * veg), c(0.05, 0.95)), 2)   # true site occupancy varies a lot
nll <- function(b, x) { ps <- plogis(b[1] + b[2] * x); pp <- plogis(b[3] + b[4] * x); -sum(log(ps * pp^d * (1 - pp)^(K - d) + (1 - ps) * (d == 0))) }
o0 <- optim(c(0, 0, 0, 0), nll, x = 0 * veg, method = "BFGS"); o1 <- optim(c(0, 0, 0, 0), nll, x = veg, method = "BFGS")
round(c(true = mean(z), ignore_veg = plogis(o0$par[1]), with_veg = mean(plogis(o1$par[1] + o1$par[2] * veg)), b_veg = o1$par[2]), 2)
```

## Connections
- **Builds on:** [[Occupancy]], [[Site Covariates]]
- **Leads to:** [[Unexplained Heterogeneity in Detection]], [[Random Effect]], [[Species Distribution Model]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Assumptions of Occupancy Models]]

## Flashcards

State the "no unexplained heterogeneity in occupancy" assumption.
??
ψ is equal across sites, or its differences are explained by measured site covariates in the model.
++++

If occupancy varies for an unmeasured reason, what is lost first?
??
Site-level predictions (the map); bias in ψ̂ follows if the hidden cause also affects detection.
++++
