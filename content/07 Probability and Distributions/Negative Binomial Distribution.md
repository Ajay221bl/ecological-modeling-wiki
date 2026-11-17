---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "dnbinom()"
  - "NB"
  - "Gamma-Poisson"
  - "NegBin"
status: seedling
---

# Negative Binomial Distribution

**In one line:** the negative binomial distribution is a distribution for counts that allows the variance to be larger than the mean, using one extra parameter to set how much larger.

> [!info] Before this, it helps to know
> [[Poisson Distribution]] (which it generalises) · [[Overdispersion]] (what it handles) · [[Mixture Distribution]] (how it arises)

## The everyday picture
Raindrops again, but now some paving stones sit under a dripping tree. Stones differ in their own average. Count drops across all stones and you see more empty stones and more soaked ones than a single-rate Poisson can produce.

## A tiny example
Mean 4, size k = 2: variance = 4 + 4²/2 = 12, three times the mean. A Poisson with mean 4 has variance 4.

## Start from zero
1. **Two parameters (ecological form):** mean μ and size k (also called θ, or the dispersion parameter).
2. **Variance = μ + μ²/k.**
3. **Small k: strong overdispersion,** clumped counts with many zeros and a long tail.
4. **Large k: the extra term vanishes** and it becomes the Poisson.
5. **Where it comes from:** each unit's count is Poisson, but units have different means, and those means follow a gamma distribution. *It is a Poisson with unexplained variation in its rate.*
6. **Why ecologists reach for it:** animals clump, habitat is patchy and covariates are missing, so real counts almost always vary more than a Poisson allows.
7. **In R:** `dnbinom(y, mu = , size = )`. `MASS::glm.nb` reports k as "theta".
8. **The name** comes from another story (failures before the k-th success) that gives the same formula.

## See it
![[Poisson vs negative binomial.png|700]]
*What to look at:* same mean, but the negative binomial has more zeros and a longer right tail.

## In R
```r
set.seed(14); y <- rnbinom(1e5, mu = 4, size = 2); c(mean(y), var(y), 4 + 4^2 / 2)
c(nb = mean(y == 0), pois = dpois(0, 4))               # 11% zeros versus 1.8%
var(rnbinom(1e5, mu = 4, size = 1000))                 # huge size: variance back to about 4
```

## In the course
[[Zuur et al. 2009 Ch9]], [[Hobbs and Hooten 2015 Ch3]], and the count GLM lab ([[Course Website]]).

## Common confusions
- **"Larger size means more dispersion."** The reverse: small k means more overdispersion.
- **"The negative binomial is about negative numbers."** It is for non-negative counts.

## Explain it back
- Write the variance formula and say what happens as k grows.

*Pass test:* you can compute the variance from μ and k and explain the gamma-Poisson story.

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
