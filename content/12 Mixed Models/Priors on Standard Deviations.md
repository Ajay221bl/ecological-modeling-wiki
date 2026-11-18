---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Random-effect standard deviations must be positive, so their priors are distributions on positive numbers, usually chosen to favour moderate values while still allowing large ones."
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

Random-effect standard [[Deviation|deviations]] must be positive, so their priors are distributions on positive numbers, usually chosen to favour moderate values while still allowing large ones ([[Prior Distribution]]). Common choices are half-normal(0, s) ([[Half-Normal Prior]]), half-Student-t(3, 0, s), half-Cauchy(0, s) ([[Half-Cauchy Prior]]) and exponential(rate) ([[Exponential Distribution]]). The brms default for `sd` is a half Student-t with 3 df, location 0 and a data-based scale of at least 2.5; exponential(1), with mean 1, mode 0 and 95% of its mass below 3, has been popular since McElreath's *Statistical Rethinking*.

Choose the scale on the [[Link Scale|link scale]]: on a [[Log Link|log link]] an SD of 1 already means groups differ by factors of about 2.7, and an SD of 5 is implausible. Avoid [[Inverse Gamma Distribution|inverse-gamma]](ε, ε) "vague" priors on variances, which are informative near zero and behave badly with few groups (Gelman 2006), and check any choice with a [[Prior Predictive Check]]. In the code below the medians are similar (0.7 for half-normal(1) and exponential(1), 1.0 for half-Cauchy(1), 1.9 for half-t3(2.5)) but the tails differ hugely: the 99th percentiles are 2.6, 4.6, 66 and 14.8.

They are set in brms in the Bayesian [[Mixed Effects Model|mixed models]] lab and Homework 4 ([[Course Website]], [[Hobbs and Hooten 2015 Ch6]], [[Bayesian GLMM]]). A wide [[Vague Prior|uniform prior]] on an SD is not uninformative: it can put most of its mass on implausibly large values.

```r
set.seed(2); n <- 1e5; draws <- cbind(half_normal_1 = abs(rnorm(n, 0, 1)), half_t3_2.5 = abs(2.5 * rt(n, 3)), half_cauchy_1 = abs(rcauchy(n, 0, 1)), exponential_1 = rexp(n, 1))
round(apply(draws, 2, quantile, c(0.5, 0.9, 0.99)), 1)        # tails differ a lot
```

## Connections
- **Builds on:** [[Prior Distribution]], [[Half-Normal Prior]], [[Half-Cauchy Prior]], [[Exponential Distribution]], [[Deviation]], [[Link Scale]], [[Log Link]], [[Inverse Gamma Distribution]], [[Mixed Effects Model]], [[Vague Prior]]
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
