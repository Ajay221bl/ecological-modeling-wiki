---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Moments"
  - "First moment"
  - "Second moment"
  - "Central moments"
  - "Raw moments"
  - "Mean and variance of a distribution"
status: seedling
---

# Moments of a Distribution

**In one line:** the moments of a distribution are summary numbers that describe its shape, the first being its mean and the second central moment its variance.

> [!info] Before this, it helps to know
> [[Expected Value]] (the first moment) · [[Variance]] (the second central moment)

## The everyday picture
Describing a person by a few measurements: height first, then width, then posture. The first measurement tells you most, each later one adds a refinement. Moments do this for a distribution: centre, spread, lopsidedness, tail weight.

## Start from zero
1. **First moment: the mean, μ = E(Y).** Where the distribution is centred.
2. **Second central moment: the variance, σ² = E[(Y − μ)²].** How spread out it is.
3. **Third (standardised): skewness.** Which tail is longer.
4. **Fourth (standardised): kurtosis.** How heavy the tails are.
5. **"Central" means measured from the mean.**
6. **Why they matter:** people think in means and variances, but many distributions are written with other parameters (gamma's shape and rate, beta's a and b). The moments are the bridge between the two.
7. **Each family has formulas for its moments in terms of its parameters.**

## In R
```r
shape <- 4; rate <- 2
c(mean = shape / rate, var = shape / rate^2)                 # gamma moments from its parameters: 2 and 1
set.seed(11); y <- rgamma(1e5, shape, rate); c(mean(y), var(y))
a <- 2; b <- 6; c(mean = a / (a + b), var = a * b / ((a + b)^2 * (a + b + 1)))   # beta: 0.25 and 0.0208
```

## In the course
[[Hobbs and Hooten 2015 Ch3]] gives moments for each distribution and uses them for moment matching.

## Common confusions
- **"Mean and variance fully describe a distribution."** Only for some families, such as the normal.

## Explain it back
- What do the first two moments describe?

*Pass test:* you can name the first two moments and find them for a gamma.

## Connections
- **Builds on:** [[Expected Value]], [[Variance]]
- **Leads to:** [[Moment Matching]], [[Distribution Parameters]], [[Mean-Variance Relationship]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What are the first two moments of a distribution?
??
The mean (first moment) and the variance (second central moment).
++++

Why are moments useful with distributions like the gamma or beta?
??
They translate between intuitive mean and variance and the distribution's own parameters.
++++
