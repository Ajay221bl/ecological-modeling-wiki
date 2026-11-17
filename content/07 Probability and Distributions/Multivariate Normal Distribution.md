---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "MVN"
  - "Multivariate Gaussian"
  - "mvrnorm()"
status: seedling
---

# Multivariate Normal Distribution

**In one line:** the multivariate normal distribution is the normal distribution extended to several variables at once, described by a vector of means and a matrix of variances and covariances.

> [!info] Before this, it helps to know
> [[Normal Distribution]] (each variable alone) · [[Covariance]] (how they are tied) · [[Matrix]] (holds the covariances) · [[Multivariate Distribution]] (the general idea)

## The everyday picture
A swarm of bees around a hive, seen from above. The swarm is densest at the centre and thins outward. If the wind stretches it into a tilted ellipse, then knowing a bee's east-west position tells you something about its north-south position.

## Start from zero
1. **A mean vector μ:** one mean per variable. The centre of the cloud.
2. **A covariance matrix Σ:** variances on the diagonal, covariances off it. The cloud's spread and tilt.
3. **Each variable alone is normal.**
4. **Each variable given the others is normal too.**
5. **Zero covariance means a round, untilted cloud** and, for this distribution, independence.
6. **Where it appears, 1:** random intercepts and slopes are drawn jointly from one, so their correlation can be estimated.
7. **Where it appears, 2:** spatially or temporally correlated errors. All n residuals are one draw from an n-dimensional normal whose covariance falls with distance.
8. **Where it appears, 3:** the estimated coefficients of a model are approximately multivariate normal, with covariance `vcov(model)`.

## See it
![[Bivariate normal.png|700]]
*What to look at:* the ellipse's tilt is the correlation, and each margin is an ordinary bell.

## In R
```r
library(MASS); set.seed(18)
Sigma <- matrix(c(4, 1.5, 1.5, 1), 2); xy <- mvrnorm(1e4, mu = c(10, 2), Sigma = Sigma)
round(colMeans(xy), 2); round(cov(xy), 2); round(cor(xy)[1, 2], 2)          # correlation 1.5 / (2 x 1) = 0.75
m <- lm(mpg ~ wt, mtcars); round(cov2cor(vcov(m)), 2)                       # coefficient estimates are jointly (approximately) normal
```

## In the course
[[Hobbs and Hooten 2015 Ch3]]. Random slopes: [[Zuur et al. 2009 Ch5]].

## Common confusions
- **"Normal margins mean multivariate normal."** Not necessarily, but the converse is true.

## Explain it back
- What do the diagonal and off-diagonal entries of Σ hold?

*Pass test:* you can simulate correlated normals and read Σ.

## Connections
- **Builds on:** [[Normal Distribution]], [[Covariance]], [[Matrix]]
- **Leads to:** [[Variance-Covariance Matrix]], [[Random Slope]], [[Correlation Structure]], [[Gaussian Process Smooths|Gaussian Process]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What two things parameterise a multivariate normal?
??
A mean vector and a variance-covariance matrix.
![[Bivariate normal.png]]
++++

Where do multivariate normals appear in mixed models?
??
As the joint distribution of correlated random effects, such as intercepts and slopes.
++++
