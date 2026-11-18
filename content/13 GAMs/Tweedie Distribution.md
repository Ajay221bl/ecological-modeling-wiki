---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "The Tweedie distribution covers non-negative continuous data with a lump of exact zeros, such as biomass or catch weight, by mixing a Poisson number of gamma-distributed amounts."
aliases:
  - "Tweedie"
  - "tw()"
  - "Compound Poisson-gamma"
status: seedling
---

# Tweedie Distribution

The **Tweedie distribution** covers non-negative [[Continuous Data|continuous data]] with a lump of exact zeros, such as biomass or catch weight, by mixing a Poisson number of gamma-distributed amounts ([[Gamma Distribution]], [[Poisson Distribution]]). The story: the number of fish caught is Poisson, each fish's weight is gamma, and the total weight is Tweedie, with exactly zero when no fish are caught. Its variance is φμᵖ with 1 < p < 2 in this compound Poisson-gamma range; p near 1 is Poisson-like and p near 2 gamma-like.

In mgcv `family = tw()` estimates p, and glmmTMB offers `tweedie()` ([[Generalized Additive Model]]). It is an alternative to hurdle models for positive continuous data with zeros ([[Hurdle Model]]). In the code below catches with a mean of 1.2 fish each give 30.0% zeros, matching e^(−1.2) = 0.301, and a mean total weight of 2.4.

It is not in the in-scope labs; it is included because GAM examples often use it for biomass. Zeros don't need a [[Zero-inflated Model]]: a Tweedie handles exact zeros naturally.

```r
set.seed(25); n <- 1e4; k <- rpois(n, 1.2); w <- sapply(k, function(i) sum(rgamma(i, 2, 1)))
round(c(prop_zero = mean(w == 0), expected_zero = exp(-1.2), mean = mean(w)), 3)
```

## Connections
- **Builds on:** [[Gamma Distribution]], [[Poisson Distribution]], [[Zero-inflated Model]], [[Continuous Data]]
- **Leads to:** [[Generalized Additive Model]], [[Hurdle Model]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What data suit a Tweedie distribution?
??
Non-negative continuous data with exact zeros, such as biomass.
++++
