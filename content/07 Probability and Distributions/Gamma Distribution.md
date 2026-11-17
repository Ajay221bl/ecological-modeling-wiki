---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "dgamma()"
  - "Gamma"
status: seedling
---

# Gamma Distribution

**In one line:** the gamma distribution is a flexible right-skewed distribution for positive continuous quantities, set by a shape and a rate.

> [!info] Before this, it helps to know
> [[Distribution Parameters]] (shape and rate) · [[Support of a Distribution]] (positive values) · [[Moment Matching]] (to get its parameters)

## The everyday picture
Waiting for the third bus. If buses arrive at random at a steady average rate, the wait for one bus is very variable and skewed. The wait for several is longer and more regular. "How many buses you wait for" is the shape. "How frequent buses are" is the rate.

## Start from zero
1. **Support:** positive real numbers.
2. **Two parameters:** shape (a) and rate (b). Or shape and scale = 1/rate.
3. **Mean = a/b. Variance = a/b².**
4. **Shape controls skew.** Shape 1 is the exponential, a steep decline. Large shape approaches a symmetric bell.
5. **Coefficient of variation = 1/√shape,** whatever the mean. *So the SD is proportional to the mean, and variance to the mean squared.*
6. **From a mean and SD:** shape = μ²/σ², rate = μ/σ².
7. **In models:** positive skewed responses (biomass, durations, rainfall) in a gamma GLM, and priors for parameters that must be positive.

## See it
![[Gamma distribution.png|700]]
*What to look at:* increasing the shape moves the curve from a slope to a hump.

## In R
```r
a <- 4; b <- 2; c(mean = a / b, var = a / b^2)
set.seed(3); y <- rgamma(1e5, shape = a, rate = b); c(mean(y), var(y), min(y))
curve(dgamma(x, 1, 1), 0, 8); curve(dgamma(x, 3, 1), add = TRUE, col = 2); curve(dgamma(x, 9, 3), add = TRUE, col = 4)
sapply(c(1, 4, 25), function(s) { z <- rgamma(1e5, s, 1); sd(z) / mean(z) })    # CV = 1/sqrt(shape): 1, 0.5, 0.2
```

## In the course
[[Hobbs and Hooten 2015 Ch3]]. Gamma GLMs appear in [[Zuur et al. 2009 Ch8]].

## Common confusions
- **"Gamma distribution and gamma function are the same."** The function is an ingredient of the distribution's formula.
- **"Second argument is the scale."** In R's `dgamma` the second positional argument is the rate.

## Explain it back
- Give the mean and variance of Gamma(shape 9, rate 3).

*Pass test:* you can move between shape and rate and mean and variance.

## Connections
- **Builds on:** [[Distribution Parameters]], [[Moment Matching]]
- **Leads to:** [[Exponential Distribution]], [[Inverse Gamma Distribution]], [[Negative Binomial Distribution]], [[Gamma Function]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is the support of the gamma distribution?
??
Positive real numbers.
![[Gamma distribution.png]]
++++

Mean and variance of a gamma with shape a and rate b?
??
Mean a/b, variance a/b².
++++

How does a gamma's variance relate to its mean?
??
Variance is proportional to the mean squared (constant coefficient of variation).
++++
