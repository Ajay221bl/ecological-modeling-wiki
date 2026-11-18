---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The exponential family is a group of distributions, including the normal, Poisson, binomial and gamma, that share one mathematical form and can therefore all be fitted by the same GLM machinery."
aliases:
  - "Exponential family of distributions"
status: seedling
---

# Exponential Family

A kettle, a lamp and a radio do different things, but because they share a plug design, one socket powers them all. The **exponential family** is a group of distributions that share one mathematical form, so the same fitting machinery works for all of them ([[Probability Distribution]]). Each member's density can be rearranged into one template built around exp(…) ([[Exponential Function]]). Members include the normal, Poisson, binomial, Bernoulli, gamma and inverse [[Normal Distribution|Gaussian]], and the negative binomial when its size parameter is fixed.

From the template, two things drop out for every member: its mean, and how its variance depends on its mean, the *variance function* ([[Mean-Variance Relationship]]). That is all a [[Generalized Linear Model]] needs, so one fitting algorithm, [[Iteratively Reweighted Least Squares]], works for the whole family. Each member also has a *canonical* link that falls out of the template: identity for the normal, log for the Poisson, [[Logit Link|logit]] for the binomial ([[Link Function]]). The code below lists these canonical links and evaluates the variance functions at a mean of 0.5: constant (1) for the normal, μ for the Poisson, μ(1 − μ) for the binomial and μ² for the gamma.

You do not need the algebra to benefit. The family explains why `glm()` offers exactly these `family =` choices and why their output looks alike, and Zuur introduces GLMs through it ([[Zuur et al. 2009 Ch8]]). Do not confuse it with the exponential *distribution*, which is only one small member.

```r
fams <- list(gaussian(), poisson(), binomial(), Gamma())
sapply(fams, function(f) c(family = f$family, canonical_link = f$link))
sapply(fams, function(f) f$variance(0.5))        # variance functions at mean 0.5: 1, mu, mu(1 - mu), mu^2
```

## Connections
- **Builds on:** [[Probability Distribution]], [[Normal Distribution]]
- **Leads to:** [[Generalized Linear Model]], [[Link Function]], [[Mean-Variance Relationship]], [[Iteratively Reweighted Least Squares]], [[Logit Link]]
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
