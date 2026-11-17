---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Zero-inflated Poisson"
  - "ZIP"
  - "ZINB"
  - "Zero-inflated negative binomial"
  - "ziformula"
status: seedling
---

# Zero-inflated Model

**In one line:** a zero-inflated model treats count data as a mixture of two processes: one that produces only zeros and one that produces ordinary counts, which may also be zero.

> [!info] Before this, it helps to know
> [[Zero Inflation]] (the symptom) · [[Mixture Distribution]] (the construction) · [[Poisson Regression]] and [[Logistic Regression]] (its two halves)

## The everyday picture
Counting fish caught per visitor at a lake. Some visitors never cast a line, so they score zero no matter what. The rest fish, and their catch follows the usual luck, which sometimes is also zero. Two kinds of zero are mixed in the data.

## Start from zero
1. **With probability π, the observation is a structural zero** (the "can't happen here" state).
2. **With probability 1 − π, it comes from a count distribution** (Poisson or negative binomial) with mean μ.
3. **P(Y = 0) = π + (1 − π) × P(count = 0).**
4. **P(Y = k) = (1 − π) × P(count = k)** for k > 0.
5. **Two linear predictors.** logit(π) for the zero part and log(μ) for the count part, each with its own covariates.
6. **Ecological reading:** π describes unsuitable sites (or absence). μ describes abundance where suitable.
7. **Fit:** `glmmTMB(y ~ x, ziformula = ~ z, family = poisson)` or `pscl::zeroinfl(y ~ x | z)`.
8. **Try the negative binomial first.** Many apparent zero-inflation cases are plain overdispersion.
9. **Overall mean = (1 − π) × μ.**

## See it
![[Zero inflation.png|700]]
*What to look at:* the extra bar at zero that the count distribution alone can't produce.

## In R
```r
library(pscl); set.seed(22); n <- 600; hab <- runif(n); suitable <- rbinom(n, 1, plogis(-1 + 3 * hab)); y <- suitable * rpois(n, exp(1.2))
m <- zeroinfl(y ~ 1 | hab, dist = "poisson"); round(coef(m), 2)          # count mean: exp(1.2). Zero part: P(structural zero) falls with habitat
c(observed_zeros = mean(y == 0), poisson_would_expect = dpois(0, mean(y)))
AIC(glm(y ~ 1, family = poisson), m)
```

## In the course
[[Zuur et al. 2009 Ch11]]. Mentioned in the GLM lectures as the next step after negative binomial ([[Course Website]]).

## Common confusions
- **"The zero part models all zeros."** It models only the extra ones. The count part produces zeros too.
- **"The zero-part coefficients are for presence."** In most software they model the probability of a structural zero, so signs are reversed relative to presence.

## Explain it back
- Write P(Y = 0) under a zero-inflated Poisson.

*Pass test:* you can explain the two processes and read both sets of coefficients.

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
