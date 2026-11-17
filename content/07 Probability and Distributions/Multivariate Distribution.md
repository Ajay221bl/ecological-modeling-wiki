---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Joint distribution of several variables"
  - "Multivariate"
status: seedling
---

# Multivariate Distribution

**In one line:** a multivariate distribution describes several random variables at once, including how they vary together.

> [!info] Before this, it helps to know
> [[Joint Probability]] (the idea, for events) · [[Covariance]] (how the variables are tied) · [[Vector]] (the values come as one)

## The everyday picture
A weather report giving temperature and humidity together. Each has its own distribution. But hot days tend to be humid, and a full description must capture that link. A multivariate distribution is a landscape over the temperature-humidity plane, with a ridge where combinations are common.

## Start from zero
1. **One draw is a whole vector** of values, one per variable.
2. **Each variable has its own marginal distribution.**
3. **The distribution also encodes dependence** among them, for instance through covariances.
4. **Slicing it gives conditionals.** Summing over a variable gives marginals.
5. **If the variables are independent, it is just the product of the marginals.**
6. **Why it shows up in this course:** a posterior over several parameters is multivariate. Random intercepts and slopes are a multivariate normal. Spatially correlated errors are one big multivariate normal. Counts across several categories are multinomial.

## See it
![[Bivariate normal.png|700]]
*What to look at:* the tilted cloud. Its tilt is the covariance, and the curves on the edges are the marginals.

## In R
```r
library(MASS); set.seed(16)
S <- matrix(c(1, 0.7, 0.7, 1), 2)
xy <- mvrnorm(5000, mu = c(0, 0), Sigma = S)       # each row is one draw of two variables
round(cov(xy), 2); round(colMeans(xy), 2)
mean(xy[abs(xy[, 1] - 1) < 0.1, 2])                # conditional mean of the second given the first is near 1: about 0.7
```

## In the course
[[Hobbs and Hooten 2015 Ch3]] covers the multivariate normal, multinomial and Dirichlet.

## Common confusions
- **"It is several separate distributions listed together."** The dependence between variables is the point.

## Explain it back
- What extra information does a multivariate distribution hold beyond the marginals?

*Pass test:* you can simulate correlated pairs and read their covariance.

## Connections
- **Builds on:** [[Joint Probability]], [[Covariance]]
- **Leads to:** [[Multivariate Normal Distribution]], [[Multinomial Distribution]], [[Joint Posterior Distribution]], [[Variance-Covariance Matrix]]
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
