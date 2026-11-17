---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Exponential family of distributions"
status: seedling
---

# Exponential Family

**In one line:** the exponential family is a group of distributions, including the normal, Poisson, binomial and gamma, that share one mathematical form and can therefore all be fitted by the same GLM machinery.

> [!info] Before this, it helps to know
> [[Probability Distribution]] (the members) · [[Exponential Function]] (in the shared form) · [[Generalized Linear Model]] (what the family enables)

## The everyday picture
Appliances with the same plug. A kettle, a lamp and a radio do different things, but because they share a plug design, one socket powers them all. The GLM algorithm is the socket.

## Start from zero
1. **Each member's density can be rearranged into one template** built around exp(…).
2. **Members:** normal, Poisson, binomial, Bernoulli, gamma, inverse Gaussian. The negative binomial belongs when its size parameter is fixed.
3. **From the template two things drop out for every member:** its mean, and how its variance depends on its mean (the variance function).
4. **That is all a GLM needs.** One fitting algorithm, iteratively reweighted least squares, works for the whole family.
5. **Each member has a "canonical" link** that falls out of the template: identity for normal, log for Poisson, logit for binomial.
6. **Why you should care without the algebra:** it explains why `glm()` offers these particular `family =` choices and why their output looks alike.
7. **Don't confuse it with the exponential distribution,** which is one small member.

## In R
```r
fams <- list(gaussian(), poisson(), binomial(), Gamma())
sapply(fams, function(f) c(family = f$family, canonical_link = f$link))
sapply(fams, function(f) f$variance(0.5))        # variance functions at mean 0.5: 1, mu, mu(1 - mu), mu^2
```

## In the course
[[Zuur et al. 2009 Ch8]] introduces GLMs through this family.

## Common confusions
- **"Exponential family means exponential distribution."** The exponential distribution is only one member.

## Explain it back
- Name four members and their canonical links.

*Pass test:* you can say why one function, `glm()`, fits many distributions.

## Connections
- **Builds on:** [[Probability Distribution]]
- **Leads to:** [[Generalized Linear Model]], [[Link Function]], [[Mean-Variance Relationship]], [[Iteratively Reweighted Least Squares]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is the exponential family?
??
A class of distributions sharing a common mathematical form, including normal, Poisson, binomial and gamma.
++++

Why does the exponential family matter for GLMs?
??
Its shared form lets one algorithm fit all members, each with its own variance function and canonical link.
++++
