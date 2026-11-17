---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The negative binomial distribution is a distribution for counts that allows the variance to be larger than the mean, using one extra parameter to set how much larger."
aliases:
  - "dnbinom()"
  - "NB"
  - "Gamma-Poisson"
  - "NegBin"
status: seedling
---

# Negative Binomial Distribution

Raindrops again, but now some paving stones sit under a dripping tree. Stones differ in their own average, so counted across all stones there are more empty stones and more soaked ones than a single-rate Poisson can produce. The **negative binomial distribution** is a distribution for counts that allows the variance to be larger than the mean, using one extra parameter to say how much larger ([[Poisson Distribution]], [[Overdispersion]]). In its ecological form it has a mean μ and a size k (also called θ, theta, or the dispersion parameter), and its variance is μ + μ²/k.

With mean 4 and k = 2, the variance is 4 + 4²/2 = 12, three times the mean, whereas a Poisson with mean 4 has variance 4. The figure shows what that looks like at the same mean: more zeros and a longer right tail. The code below confirms the variance of 12 by simulation and finds 11% zeros, against 1.8% for the Poisson. Small k means strong overdispersion, clumped counts with many zeros; as k grows the extra term vanishes and it becomes the Poisson, as the last line shows with k = 1,000.

It arises as a [[Mixture Distribution]]: each unit's count is Poisson, but units have different means, and those means follow a [[Gamma Distribution]]. So it is a Poisson with unexplained variation in its rate, which is why ecologists reach for it: animals clump, habitat is patchy and covariates are missing, so real counts almost always vary more than a Poisson allows ([[Zuur et al. 2009 Ch9]], [[Hobbs and Hooten 2015 Ch3]]). In R, `dnbinom(y, mu = , size = )` uses this form, and `MASS::glm.nb()` reports k as "theta" ([[Negative Binomial GLM]], [[Dispersion Parameter]]). Two confusions: a *larger* size means *less* overdispersion; and the name has nothing to do with negative numbers, since it comes from another story, counting failures before the k-th success, that gives the same formula. If zeros are still too many, see [[Zero Inflation]].

![[Poisson vs negative binomial.png|700]]
*What to look at:* same mean, but the negative binomial has more zeros and a longer right tail.

```r
set.seed(14); y <- rnbinom(1e5, mu = 4, size = 2); c(mean(y), var(y), 4 + 4^2 / 2)
c(nb = mean(y == 0), pois = dpois(0, 4))               # 11% zeros versus 1.8%
var(rnbinom(1e5, mu = 4, size = 1000))                 # huge size: variance back to about 4
```

## Connections
- **Builds on:** [[Poisson Distribution]], [[Overdispersion]]
- **Leads to:** [[Negative Binomial GLM]], [[Dispersion Parameter]], [[Zero Inflation]], [[Gamma Distribution]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]], molecular note [[Poisson vs Negative Binomial]]

## Flashcards

What is the variance of a negative binomial with mean μ and size k?
??
μ + μ²/k.
![[Poisson vs negative binomial.png]]
++++

What happens to the negative binomial as k becomes very large?
??
It approaches the Poisson.
++++

What mixture produces the negative binomial?
??
Poisson counts whose means vary according to a gamma distribution.
++++
