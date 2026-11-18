---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "A multivariate distribution describes several random variables at once, including how they vary together."
aliases:
  - "Joint distribution of several variables"
  - "Multivariate"
status: seedling
---

# Multivariate Distribution

A weather report gives temperature and [[Relative Humidity|humidity]] together. Each has its own distribution, but hot days tend to be humid, and a full description must capture that link. A **multivariate distribution** describes several [[Random Variable|random variables]] at once, including how they vary together. One draw is a whole [[Vector]] of values, one per variable. Each variable has its own marginal distribution ([[Marginal Probability]]), and the multivariate distribution also encodes the dependence among them, for instance through their [[Covariance]]. It is the continuous version of a [[Joint Probability]]: picture a landscape over the temperature-humidity plane, with a ridge where combinations are common.

Slicing a multivariate distribution at one value of a variable gives a conditional distribution; summing or integrating over a variable gives a marginal. If the variables are independent, the distribution is just the product of the marginals. The figure shows a bivariate normal: the tilt of the cloud is the covariance, and the curves on the edges are the marginals. In the code below, 5,000 draws from a bivariate normal with correlation 0.7 reproduce that covariance, and among draws where the first variable is near 1, the second averages about 0.7: the conditional mean.

Multivariate distributions turn up throughout the course. A posterior over several parameters is multivariate ([[Joint Posterior Distribution]]); [[Random Intercept|random intercepts]] and slopes follow a [[Multivariate Normal Distribution]]; spatially [[Residual Autocorrelation|correlated errors]] form one large multivariate normal described by a [[Variance-Covariance Matrix]]; and counts across several categories follow a [[Multinomial Distribution]] ([[Hobbs and Hooten 2015 Ch3]]). It is not several separate distributions listed together: the dependence between variables is the point.

![[Bivariate normal.png|700]]
*What to look at:* the tilted cloud. Its tilt is the covariance, and the curves on the edges are the marginals.

```r
library(MASS); set.seed(16)
S <- matrix(c(1, 0.7, 0.7, 1), 2)
xy <- mvrnorm(5000, mu = c(0, 0), Sigma = S)       # each row is one draw of two variables
round(cov(xy), 2); round(colMeans(xy), 2)
mean(xy[abs(xy[, 1] - 1) < 0.1, 2])                # conditional mean of the second given the first is near 1: about 0.7
```

## Connections
- **Builds on:** [[Joint Probability]], [[Covariance]], [[Random Variable]]
- **Leads to:** [[Multivariate Normal Distribution]], [[Multinomial Distribution]], [[Joint Posterior Distribution]], [[Variance-Covariance Matrix]], [[Relative Humidity]], [[Random Intercept]], [[Residual Autocorrelation]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is a multivariate distribution?
??
A probability distribution for several random variables jointly, including their dependence.
![[Bivariate normal.png]]
++++

When does a multivariate distribution equal the product of its marginals?
??
When the variables are independent.
++++
