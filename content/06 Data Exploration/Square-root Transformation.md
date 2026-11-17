---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A square-root transformation replaces each value with its square root, a milder squeeze than the log that can be applied to zeros."
aliases:
  - "sqrt(y)"
  - "Square root transform"
status: seedling
---

# Square-root Transformation

A dimmer switch instead of an off switch: the log squeezes large values hard, while the square root turns them down gently, so 100 becomes 10, 4 becomes 2 and 0 stays 0. A **square-root transformation** replaces each value with its [[Square Root]] ([[Transformation]]). Zero is allowed, unlike for the log, and negative values are not. Large values shrink more than small ones, so right skew is reduced.

It was the classical fix for counts. For [[Poisson Distribution|Poisson]] counts the variance equals the mean, so spread grows with the mean ([[Mean-Variance Relationship]]). After a square root, the variance is roughly constant at about ¼, whatever the mean, as long as the mean is not tiny. The code below checks this for means of 2, 5, 20 and 80: the raw variance tracks the mean, while the variance of the square roots stays near 0.25 once the mean is above a few.

Its drawbacks explain why it is used less today. A slope is in square-root units, with no tidy multiplier to report. And it evens the variance of counts without making them normal: small counts stay discrete and skewed. A Poisson or negative binomial GLM, which models counts as counts, is now preferred ([[Poisson Regression]]). Zuur's exploration chapter lists it among the transformations ([[Zuur et al. 2009 Ch2]]).

```r
set.seed(15)
sapply(c(2, 5, 20, 80), function(m) { y <- rpois(1e5, m); c(mean = m, var_raw = var(y), var_sqrt = var(sqrt(y))) })
```
Raw variance tracks the mean. After the square root it stays near 0.25 once the mean is above a few.

## Connections
- **Builds on:** [[Square Root]], [[Transformation]]
- **Leads to:** [[Poisson Distribution]], [[Poisson Regression]], [[Mean-Variance Relationship]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

Why was the square root the classic transformation for counts?
??
It makes the variance of Poisson data roughly constant (about 0.25) regardless of the mean.
++++

How does it differ from the log?
??
It is milder and defined at zero.
++++
