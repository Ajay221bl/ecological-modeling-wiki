---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Inverse-gamma"
  - "Inverted gamma"
status: seedling
---

# Inverse Gamma Distribution

**In one line:** the inverse gamma distribution is the distribution of one divided by a gamma-distributed quantity, traditionally used as a prior for variances.

> [!info] Before this, it helps to know
> [[Gamma Distribution]] (what is inverted) · [[Variance]] (what it is used for) · [[Prior Distribution]] (its role)

## The everyday picture
Speed and travel time. If your speed varies from trip to trip, your travel time (distance ÷ speed) varies too, with a different shape. The inverse gamma is to the gamma what travel time is to speed.

## Start from zero
1. **If X ~ Gamma(shape a, rate b), then 1/X ~ Inverse-gamma(a, b).**
2. **Support:** positive numbers.
3. **Mean = b/(a − 1),** which exists only if a > 1.
4. **Shape:** right-skewed with a heavy upper tail.
5. **Why it was the standard variance prior:** with normal data it is conjugate for the variance σ², so the posterior is also inverse gamma. Equivalently, the precision 1/σ² gets a gamma prior. That is why old JAGS and BUGS code is full of `dgamma(0.001, 0.001)` on precisions.
6. **Why it fell out of favour for random-effect variances:** when the true variance is near zero, the "vague" inverse-gamma(0.001, 0.001) turns out to be strongly informative. Half-normal, half-Cauchy or exponential priors on the standard deviation are now preferred.

## In R
```r
set.seed(6); a <- 3; b <- 4
v <- 1 / rgamma(1e5, shape = a, rate = b)
c(mean(v), b / (a - 1))                         # 2
quantile(v, c(0.025, 0.5, 0.975))               # skewed: long upper tail
```

## In the course
[[Hobbs and Hooten 2015 Ch3]] and the conjugate examples in their Chapter 5. Gelman's critique is discussed with variance priors in the Bayesian mixed-model lab.

## Common confusions
- **"Inverse gamma(0.001, 0.001) is harmless."** It can dominate the posterior of a small group-level variance.

## Explain it back
- How do you simulate an inverse gamma in R?

*Pass test:* you can say what it is a prior for and why it is now often replaced.

## Connections
- **Builds on:** [[Gamma Distribution]], [[Variance]]
- **Leads to:** [[Conjugate Prior]], [[Precision Parameter]], [[Half-Cauchy Prior]], [[Variance Components|Variance Component]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What is the inverse gamma distribution?
??
The distribution of the reciprocal of a gamma random variable.
++++

What is it traditionally used for?
??
As a conjugate prior for a normal variance.
++++
