---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The gamma distribution is a flexible right-skewed distribution for positive continuous quantities, set by a shape and a rate."
aliases:
  - "dgamma()"
  - "Gamma"
status: seedling
---

# Gamma Distribution

Buses arrive at random at a steady average rate. The wait for one bus is very variable, often short but sometimes long; the wait for the third bus is longer and more regular. "How many buses you wait for" is the gamma's *shape*, and "how frequent buses are" is its *rate*. The **gamma distribution** is a flexible right-skewed distribution for positive continuous quantities, set by those two parameters, shape a and rate b, or equivalently shape and scale = 1/rate ([[Distribution Parameters]], [[Support of a Distribution]]). Its mean is a/b and its variance a/b².

Shape controls the form, as the figure shows: shape 1 is the [[Exponential Distribution]], a steep decline from zero, and larger shapes give a hump that approaches a symmetric bell. With shape 4 and rate 2 the mean is 2 and the variance 1, which the code below checks by simulation. The [[Coefficient of Variation|coefficient of variation]] is 1/√shape whatever the mean, so the [[Standard Deviation|standard deviation]] is [[Proportional To|proportional to]] the mean and the variance to the mean squared; the last line shows CVs of 1, 0.5 and 0.2 for shapes 1, 4 and 25 ([[Mean-Variance Relationship]]). To get a gamma with a chosen mean μ and SD σ, use shape = μ²/σ² and rate = μ/σ² ([[Moment Matching]]).

It is used for positive skewed responses such as biomass, durations and rainfall in a [[Gamma GLM|gamma GLM]] ([[Zuur et al. 2009 Ch8]]), and as a prior for parameters that must be positive ([[Hobbs and Hooten 2015 Ch3]]). A gamma whose values set a Poisson mean produces the [[Negative Binomial Distribution]], and one over a gamma variable gives the [[Inverse Gamma Distribution]]. Two confusions: the gamma distribution is not the [[Gamma Function]], which is just an ingredient of its formula; and in R's `dgamma()` the second positional argument is the rate, not the scale.

![[Gamma distribution.png|700]]
*What to look at:* increasing the shape moves the curve from a slope to a hump.

```r
a <- 4; b <- 2; c(mean = a / b, var = a / b^2)
set.seed(3); y <- rgamma(1e5, shape = a, rate = b); c(mean(y), var(y), min(y))
curve(dgamma(x, 1, 1), 0, 8); curve(dgamma(x, 3, 1), add = TRUE, col = 2); curve(dgamma(x, 9, 3), add = TRUE, col = 4)
sapply(c(1, 4, 25), function(s) { z <- rgamma(1e5, s, 1); sd(z) / mean(z) })    # CV = 1/sqrt(shape): 1, 0.5, 0.2
```

## Connections
- **Builds on:** [[Distribution Parameters]], [[Moment Matching]], [[Coefficient of Variation]], [[Standard Deviation]], [[Proportional To]]
- **Leads to:** [[Exponential Distribution]], [[Inverse Gamma Distribution]], [[Negative Binomial Distribution]], [[Gamma Function]], [[Gamma GLM]]
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
