---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A quasi-Poisson model keeps the Poisson's mean structure but multiplies the variance by an estimated dispersion factor, widening the standard errors to match the data's actual spread."
aliases:
  - "Quasi-likelihood"
  - "Quasipoisson"
  - "Quasibinomial"
  - "Quasi-Poisson and quasi-likelihood"
status: seedling
---

# Quasi-Poisson

A weather forecast can carry a correction sticker: the forecast itself is unchanged, but the sticker says "multiply all stated uncertainties by 2", based on how wrong past forecasts turned out to be. A **quasi-Poisson** model is that sticker on a [[Poisson Regression]]. Its mean model is identical, log(μ) = η, so the coefficients come out the same, but its variance is φ × μ, where φ is estimated as the Pearson χ² divided by the residual df ([[Dispersion Parameter]]). Standard errors are multiplied by √φ, and because φ is estimated, tests switch from z to t and from chi-square to F ([[z-test]]).

In the code below, overdispersed counts fitted as Poisson and as quasi-Poisson give identical slope estimates, but the quasi-Poisson standard error is larger by exactly √φ. `family = quasibinomial` does the same for overdispersed proportions.

It is not a real probability distribution: only a mean and a variance rule are specified, which is what "quasi-likelihood" means. So there is no likelihood and no AIC; the last line of the code returns NA. The workaround is [[QAIC]]: fit the Poisson and divide its log-likelihood by ĉ, the same idea Anderson and Burnham call the variance inflation factor ([[Anderson and Burnham 2002]], [[Zuur et al. 2009 Ch9]]). Quasi-Poisson and the [[Negative Binomial GLM]] differ in how variance grows: in proportion to the mean for quasi-Poisson, with the mean squared for the negative binomial, so they weight large counts differently. Quasi-Poisson does not change the estimates, only their standard errors ([[Overdispersion]]).

```r
set.seed(21); x <- runif(200); y <- rnbinom(200, mu = exp(1 + x), size = 1.5)
mp <- glm(y ~ x, family = poisson); mq <- glm(y ~ x, family = quasipoisson)
rbind(poisson = summary(mp)$coefficients[2, 1:2], quasi = summary(mq)$coefficients[2, 1:2])
phi <- summary(mq)$dispersion; c(phi = phi, se_ratio = summary(mq)$coefficients[2, 2] / summary(mp)$coefficients[2, 2], sqrt_phi = sqrt(phi))
AIC(mq)                                               # NA: no likelihood
```

## Connections
- **Builds on:** [[Poisson Regression]], [[Dispersion Parameter]]
- **Leads to:** [[Negative Binomial GLM]], [[QAIC]], [[z-test]], [[Overdispersion]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What does a quasi-Poisson model change relative to Poisson?
??
It estimates a dispersion φ and multiplies standard errors by √φ. Coefficient estimates are unchanged.
++++

Why can't AIC be computed for quasi models?
??
They specify only a mean-variance relationship, not a full likelihood.
++++
