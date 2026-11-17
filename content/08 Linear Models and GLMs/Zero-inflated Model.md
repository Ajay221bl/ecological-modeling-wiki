---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A zero-inflated model treats count data as a mixture of two processes: one that produces only zeros and one that produces ordinary counts, which may also be zero."
aliases:
  - "Zero-inflated Poisson"
  - "ZIP"
  - "ZINB"
  - "Zero-inflated negative binomial"
  - "ziformula"
status: seedling
---

# Zero-inflated Model

At a lake, some visitors never cast a line, so they catch zero fish no matter what; the rest fish, and their catch follows the usual luck, which sometimes is also zero. Two kinds of zero are mixed in the data. A **zero-inflated model** treats count data as a mixture of two processes, one producing only zeros and one producing ordinary counts that may also be zero ([[Zero Inflation]], [[Mixture Distribution]]). With probability π an observation is a structural zero, the "can't happen here" state; with probability 1 − π it comes from a Poisson or negative binomial with mean μ. So P(Y = 0) = π + (1 − π) × P(count = 0), and P(Y = k) = (1 − π) × P(count = k) for k > 0, an application of the [[Law of Total Probability]]. The overall mean is (1 − π) × μ.

It has two linear predictors, logit(π) for the zero part and log(μ) for the count part, each with its own covariates, combining a [[Logistic Regression]] and a [[Poisson Regression]]. Ecologically, π describes unsuitable sites and μ abundance where suitable, close in spirit to an [[Occupancy|Occupancy Model]]. In the code below, counts are zero wherever habitat is unsuitable, and suitability rises with a habitat score. The zero-inflated model recovers the count mean exp(1.2) and a zero part in which the probability of a structural zero falls with habitat; the observed share of zeros is far above what a Poisson with the same mean would give, and AIC strongly prefers the zero-inflated model. The figure shows the extra bar at zero that a count distribution alone cannot produce.

It is fitted with `glmmTMB(y ~ x, ziformula = ~ z, family = poisson)` or `pscl::zeroinfl(y ~ x | z)` ([[Zuur et al. 2009 Ch11]], [[Course Website]]). Try a [[Negative Binomial GLM]] first, because many apparent cases of zero inflation are plain overdispersion. Two confusions. The zero part does not model all zeros, only the extra ones; the count part produces zeros too. And the zero-part coefficients are usually for the probability of a structural zero, so their signs are reversed relative to presence. A model with only one source of zeros is the [[Hurdle Model]].

![[Zero inflation.png|700]]
*What to look at:* the extra bar at zero that the count distribution alone can't produce.

```r
library(pscl); set.seed(22); n <- 600; hab <- runif(n); suitable <- rbinom(n, 1, plogis(-1 + 3 * hab)); y <- suitable * rpois(n, exp(1.2))
m <- zeroinfl(y ~ 1 | hab, dist = "poisson"); round(coef(m), 2)          # count mean: exp(1.2). Zero part: P(structural zero) falls with habitat
c(observed_zeros = mean(y == 0), poisson_would_expect = dpois(0, mean(y)))
AIC(glm(y ~ 1, family = poisson), m)
```

## Connections
- **Builds on:** [[Zero Inflation]], [[Mixture Distribution]]
- **Leads to:** [[Hurdle Model]], [[Negative Binomial GLM]], [[Occupancy|Occupancy Model]], [[Law of Total Probability]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Zero-inflated vs Hurdle Model]]

## Flashcards

What two processes make up a zero-inflated model?
??
A binary process producing structural zeros and a count process that can also produce zeros.
![[Zero inflation.png]]
++++

P(Y = 0) in a zero-inflated Poisson?
??
π + (1 − π)·e^(−μ).
++++
