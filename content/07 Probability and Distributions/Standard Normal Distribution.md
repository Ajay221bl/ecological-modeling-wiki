---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The standard normal distribution is the normal distribution with mean 0 and standard deviation 1, the reference scale on which values are counted in standard deviations."
aliases:
  - "z distribution"
  - "Standard normal"
  - "z"
  - "N(0, 1)"
status: seedling
---

# Standard Normal Distribution

Imagine a universal measuring tape marked in "standard deviations from average". Any normal variable, whether millimetres of wing or grams of mass, can be laid against it. The **standard normal distribution** is that tape: the [[Normal Distribution]] with mean 0 and standard deviation 1, written N(0, 1), whose values are called z. To move any normal variable onto it, subtract its mean and divide by its standard deviation, z = (y − μ)/σ ([[Standardizing]]). Then one table serves all normals: 95% of z lies between −1.96 and +1.96.

With wing length Normal(60, 2), a 64 mm wing has z = (64 − 60)/2 = 2: it is two standard deviations above average, and the code below shows only 2.3% of birds are longer. The same scale is used to judge estimates. An estimate divided by its standard error is roughly standard normal when the true value is zero, so "z = 2.5" says the estimate is 2.5 standard errors from zero, and a value that far out in either direction happens by chance only 1.2% of the time. That is the logic of the [[z-test]] and the [[Wald Test]].

The scale also helps with priors: once predictors are standardised, a Normal(0, 1) prior on a slope is a sensible weak default ([[Weakly Informative Prior]]). When the standard deviation is estimated from a small sample, the right reference is the slightly heavier-tailed [[Student t Distribution]] instead. The common confusion is that z-scores make data normal. Standardising only rescales: it shifts and stretches the values but does not change their shape.

```r
qnorm(0.975); pnorm(1.96) - pnorm(-1.96)
(64 - 60) / 2                                # a 64 mm wing is z = 2
1 - pnorm(2)                                 # 2.3% of birds are longer
2 * (1 - pnorm(2.5))                         # two-sided tail beyond |z| = 2.5: 0.012
```

## Connections
- **Builds on:** [[Normal Distribution]], [[Standardizing]]
- **Leads to:** [[z-test]], [[Wald Test]], [[Student t Distribution]], [[Weakly Informative Prior]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is the standard normal distribution?
??
A normal distribution with mean 0 and SD 1.
++++

How do you convert a normal value to a z-score?
??
z = (y − μ) / σ.
++++
