---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Priors for variance parameters"
  - "Exponential prior"
  - "Half-t prior"
  - "sd prior"
  - "Priors on Standard Deviations (half-normal, half-Cauchy, exponential)"
  - "class = sd"
status: seedling
---

# Priors on Standard Deviations

**In one line:** random-effect standard deviations must be positive, so their priors are distributions on positive numbers, usually chosen to favour moderate values while still allowing large ones.

> [!info] Before this, it helps to know
> [[Prior Distribution]] · [[Half-Normal Prior]] · [[Half-Cauchy Prior]] · [[Exponential Distribution]]

## Start from zero
1. **Common choices:** half-normal(0, s), half-Student-t(3, 0, s), half-Cauchy(0, s), exponential(rate).
2. **brms default for `sd`:** a half Student-t with 3 df, location 0 and a scale based on the data (at least 2.5).
3. **Exponential(1):** mean 1, mode 0, 95% of mass below 3. Popular since McElreath's *Statistical Rethinking*.
4. **Choose the scale on the link scale.** On a log link, an SD of 1 already means groups differ by factors of 2.7 on average; an SD of 5 is implausible.
5. **Avoid inverse-gamma(ε, ε) "vague" priors on variances:** they are informative near zero and behave badly with few groups (Gelman 2006).
6. **Check with a prior predictive simulation.**

## In R
```r
set.seed(2); n <- 1e5; draws <- cbind(half_normal_1 = abs(rnorm(n, 0, 1)), half_t3_2.5 = abs(2.5 * rt(n, 3)), half_cauchy_1 = abs(rcauchy(n, 0, 1)), exponential_1 = rexp(n, 1))
round(apply(draws, 2, quantile, c(0.5, 0.9, 0.99)), 1)        # tails differ a lot
```

## In the course
Bayesian mixed models lab and Homework 4 set priors in brms ([[Course Website]]). [[Hobbs and Hooten 2015 Ch6]].

## Common confusions
- **"A wide uniform prior on an SD is uninformative."** It can put most mass on implausibly large values.

## Explain it back
- Why choose prior scales on the link scale?

*Pass test:* you can choose and justify an SD prior.

## Connections
- **Builds on:** [[Prior Distribution]], [[Half-Normal Prior]], [[Half-Cauchy Prior]], [[Exponential Distribution]]
- **Leads to:** [[Bayesian GLMM]], [[Setting Priors in brms]], [[Prior Predictive Check]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What is brms's default prior for random-effect SDs?
??
A half Student-t with 3 degrees of freedom and a data-based scale (at least 2.5).
++++

Why are inverse-gamma(ε, ε) priors on variances discouraged?
??
They are surprisingly informative near zero and unstable with few groups.
++++
