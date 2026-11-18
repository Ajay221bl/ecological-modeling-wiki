---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The multivariate normal distribution is the normal distribution extended to several variables at once, described by a vector of means and a matrix of variances and covariances."
aliases:
  - "MVN"
  - "Multivariate Gaussian"
  - "mvrnorm()"
status: seedling
---

# Multivariate Normal Distribution

Seen from above, a swarm of bees around a hive is densest at the centre and thins outward. If the wind stretches it into a tilted ellipse, then knowing a bee's east-west position tells you something about its north-south position. The **multivariate normal distribution** is the [[Normal Distribution]] extended to several variables at once ([[Multivariate Distribution]]). It is described by a vector of means μ, one per variable, which is the centre of the cloud, and a covariance [[Matrix]] Σ, with variances on the diagonal and [[Covariance|covariances]] off it, which sets the cloud's spread and tilt. Each variable on its own is normal, and each variable given the others is normal too.

An example in the code below: two variables with means 10 and 2, variances 4 and 1, and covariance 1.5. Their correlation is 1.5 / (2 × 1) = 0.75, and 10,000 simulated draws reproduce the means, the covariance matrix and that correlation. The figure shows the result as a tilted ellipse whose margins are ordinary bells. Zero covariance gives a round, untilted cloud, and for this distribution that means [[Independence of Observations|independence]]. Normal margins alone do not guarantee a multivariate normal, though every multivariate normal has normal margins.

It appears in three main places. [[Random Intercept|Random intercepts]] and slopes are drawn jointly from one, so their correlation can be estimated ([[Random Slope]], [[Zuur et al. 2009 Ch5]]). Spatially or temporally [[Residual Autocorrelation|correlated errors]] are one draw from an n-dimensional normal whose covariance falls with distance ([[Correlation Structure]], [[Gaussian Process Smooths|Gaussian Process]], [[Variance-Covariance Matrix]]). And the estimated coefficients of a fitted model are approximately multivariate normal with covariance `vcov(model)`; the last line of the code shows the strongly negative correlation between the intercept and slope estimates of `lm(mpg ~ wt)` ([[Hobbs and Hooten 2015 Ch3]]).

![[Bivariate normal.png|700]]
*What to look at:* the ellipse's tilt is the correlation, and each margin is an ordinary bell.

```r
library(MASS); set.seed(18)
Sigma <- matrix(c(4, 1.5, 1.5, 1), 2); xy <- mvrnorm(1e4, mu = c(10, 2), Sigma = Sigma)
round(colMeans(xy), 2); round(cov(xy), 2); round(cor(xy)[1, 2], 2)          # correlation 1.5 / (2 x 1) = 0.75
m <- lm(mpg ~ wt, mtcars); round(cov2cor(vcov(m)), 2)                       # coefficient estimates are jointly (approximately) normal
```

## Connections
- **Builds on:** [[Normal Distribution]], [[Covariance]], [[Matrix]], [[Independence of Observations]]
- **Leads to:** [[Variance-Covariance Matrix]], [[Random Slope]], [[Correlation Structure]], [[Gaussian Process Smooths|Gaussian Process]], [[Random Intercept]], [[Residual Autocorrelation]]
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
