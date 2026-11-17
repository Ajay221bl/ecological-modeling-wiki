---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The moments of a distribution are summary numbers that describe its shape, the first being its mean and the second central moment its variance."
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

Describe a person by a few measurements: height first, then width, then posture, each adding a refinement. The **moments** of a distribution do this for its shape. The first moment is the mean, μ = E(Y), where the distribution is centred ([[Expected Value]]). The second *central* moment, "central" meaning measured from the mean, is the [[Variance]], σ² = E[(Y − μ)²], how spread out it is. The third, standardised, is *skewness*, which tail is longer; the fourth, standardised, is *kurtosis*, how heavy the tails are.

Moments matter because people think in means and variances, while many distributions are written with other parameters, such as the gamma's shape and rate or the beta's a and b ([[Distribution Parameters]]). Each family has formulas for its moments in terms of its parameters, and those formulas are the bridge between the two. A gamma with shape 4 and rate 2 has mean shape/rate = 2 and variance shape/rate² = 1; a beta with a = 2 and b = 6 has mean a/(a + b) = 0.25 and variance ab / ((a + b)²(a + b + 1)) ≈ 0.021. The code below checks the gamma's moments against 100,000 simulated draws.

Running the bridge backwards, from a desired mean and variance to parameters, is [[Moment Matching]], which Hobbs and Hooten use constantly ([[Hobbs and Hooten 2015 Ch3]]). How a family's variance depends on its mean is its [[Mean-Variance Relationship]]. Mean and variance fully describe only some families, such as the normal; for others, the higher moments carry real information about shape.

```r
shape <- 4; rate <- 2
c(mean = shape / rate, var = shape / rate^2)                 # gamma moments from its parameters: 2 and 1
set.seed(11); y <- rgamma(1e5, shape, rate); c(mean(y), var(y))
a <- 2; b <- 6; c(mean = a / (a + b), var = a * b / ((a + b)^2 * (a + b + 1)))   # beta: 0.25 and 0.0208
```

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
