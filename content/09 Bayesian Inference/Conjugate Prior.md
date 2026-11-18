---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A conjugate prior is one that, combined with a given likelihood, produces a posterior from the same distribution family, so the update can be done with simple arithmetic."
aliases:
  - "Conjugacy"
  - "Conjugate"
  - "Conjugate distributions"
  - "Conjugate pair"
status: seedling
---

# Conjugate Prior

Adding fractions that already share a denominator needs no conversion: add the numerators and you are done. A **conjugate prior** shares the likelihood's "denominator" in the same way: combined with a given [[Likelihood]], it produces a posterior in the same distribution family as the prior, so the update is simple arithmetic ([[Prior Distribution]], [[Posterior Distribution]]). Usually likelihood × prior is an awkward function that needs numerical methods, but for special pairs the product has the prior's algebraic form, with updated parameters.

The pairs worth knowing are a [[Beta Distribution]] prior with binomial data ([[Beta-Binomial Conjugacy]]), a gamma prior with Poisson data ([[Gamma-Poisson Conjugacy]]), a normal prior for a normal mean with known variance, and a gamma prior on a normal precision. The update rules are sums: add the successes, add the counts. The prior's parameters read as "pretend data", so a Beta(a, b) acts like a − 1 successes and b − 1 failures seen earlier. In the code below, a Beta(2, 2) prior and 7 successes in 20 give Beta(9, 15), and a grid calculation gives the same curve.

Conjugacy is used for teaching, for checking code and in [[Gibbs Sampling]], which relies on it for each parameter in turn; [[Hobbs and Hooten 2015 Ch5]] has a table of pairs. [[Bayesian Inference|Bayesian analysis]] does not require conjugate priors; that was a constraint before fast computing, and modern samplers handle any prior.

```r
a <- 2; b <- 2; y <- 7; n <- 20
c(a + y, b + n - y)                                                 # posterior is Beta(9, 15)
p <- seq(0, 1, 0.001); g <- dbeta(p, a, b) * dbinom(y, n, p); g <- g / sum(g) / 0.001
max(abs(g - dbeta(p, 9, 15)))                                       # grid posterior and conjugate formula agree
```

## Connections
- **Builds on:** [[Prior Distribution]], [[Likelihood]], [[Bayesian Inference]]
- **Leads to:** [[Beta-Binomial Conjugacy]], [[Gamma-Poisson Conjugacy]], [[Gibbs Sampling]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is a conjugate prior?
??
A prior that yields a posterior in the same distribution family when combined with a particular likelihood.
++++

Name the conjugate prior for binomial data and for Poisson data.
??
Beta for binomial. Gamma for Poisson.
++++
