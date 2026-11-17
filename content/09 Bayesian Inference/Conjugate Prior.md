---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Conjugacy"
  - "Conjugate"
  - "Conjugate distributions"
  - "Conjugate pair"
status: seedling
---

# Conjugate Prior

**In one line:** a conjugate prior is one that, combined with a given likelihood, produces a posterior from the same distribution family, so the update can be done with simple arithmetic.

> [!info] Before this, it helps to know
> [[Prior Distribution]] and [[Posterior Distribution]] (the two ends) · [[Likelihood]] (what it must pair with) · [[Beta Distribution]] (the standard example)

## The everyday picture
Adding fractions that already share a denominator. No conversion is needed. You add the numerators and are done. A conjugate prior shares the likelihood's "denominator".

## Start from zero
1. **Normally, posterior ∝ likelihood × prior is an awkward function** that needs numerical methods.
2. **For special pairs the product has the same algebraic form as the prior.**
3. **Then the posterior is the same family with updated parameters.**
4. **Pairs worth knowing:** beta prior with binomial data. Gamma prior with Poisson data. Normal prior with a normal mean (known variance). Gamma prior on a normal precision.
5. **The update rules are sums:** add the successes, add the counts.
6. **Prior parameters read as "pretend data".** A Beta(a, b) acts like a − 1 successes and b − 1 failures seen earlier.
7. **Uses:** teaching, checking code, and Gibbs sampling, which relies on conjugacy for each parameter in turn.
8. **You are not obliged to use them.** Modern samplers handle any prior.

## In R
```r
a <- 2; b <- 2; y <- 7; n <- 20
c(a + y, b + n - y)                                                 # posterior is Beta(9, 15)
p <- seq(0, 1, 0.001); g <- dbeta(p, a, b) * dbinom(y, n, p); g <- g / sum(g) / 0.001
max(abs(g - dbeta(p, 9, 15)))                                       # grid posterior and conjugate formula agree
```

## In the course
[[Hobbs and Hooten 2015 Ch5]] has a table of conjugate pairs.

## Common confusions
- **"Bayesian analysis requires conjugate priors."** That was a constraint before fast computing.

## Explain it back
- What does "conjugate" promise about the posterior?

*Pass test:* you can name two conjugate pairs and apply one update.

## Connections
- **Builds on:** [[Prior Distribution]], [[Likelihood]]
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
