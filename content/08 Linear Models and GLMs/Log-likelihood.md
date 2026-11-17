---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The log-likelihood is the natural logarithm of the likelihood, used because it turns a product of many tiny probabilities into a manageable sum."
aliases:
  - "Log likelihood"
  - "logLik()"
  - "ℓ(θ)"
  - "LL"
status: seedling
---

# Log-likelihood

Earthquake energies span such a range that we report their logarithm on the Richter scale: the ranking of quakes does not change, but the numbers become usable. The **log-likelihood** is the natural logarithm of the [[Likelihood]], written ℓ(θ) ([[Natural Logarithm]]). The likelihood of n independent observations is a product of n probabilities, each below 1, so the product shrinks fast; with 1,000 observations it is smaller than a computer can store and becomes 0. Taking logs turns the product into a sum, since log(a × b) = log(a) + log(b), so ℓ(θ) = Σ log P(yᵢ | θ) ([[Summation Notation]]).

Three Poisson counts 2, 4 and 3, under mean 3, have probabilities 0.224, 0.168 and 0.224. The likelihood is 0.224 × 0.168 × 0.224 = 0.0084, and the log-likelihood is log(0.224) + log(0.168) + log(0.224) = −4.78. The code below checks both, then shows 2,000 counts whose product underflows to 0 while the sum of logs is fine; `logLik()` on a fitted model reports the same sum. In R the sum comes from the `log = TRUE` argument of the d functions.

Nothing is lost by logging, because the log always increases: the θ that maximises the log-likelihood also maximises the likelihood ([[Maximum Likelihood Estimation]]). For discrete data the values are negative, closer to zero being better; for continuous data they can be positive, because densities can exceed 1. Differences of log-likelihoods are ratios of likelihoods, which is what [[AIC]], [[Deviance]] and likelihood ratio tests use ([[Hobbs and Hooten 2015 Ch4]], [[Johnson and Omland 2004]], [[Zuur et al. 2009 Ch8]]). Its size depends on n and on the data's units, so a log-likelihood of −500 is not a "bad fit" on its own; only compare log-likelihoods of models fitted to the same data. Flipped in sign it becomes the [[Negative Log-likelihood]].

```r
y <- c(2, 4, 3); prod(dpois(y, 3)); sum(dpois(y, 3, log = TRUE)); log(prod(dpois(y, 3)))
set.seed(1); big <- rpois(2000, 3); prod(dpois(big, 3)); sum(dpois(big, 3, log = TRUE))      # the product underflows to 0. The sum is fine
m <- glm(big ~ 1, family = poisson); logLik(m)
```

## Connections
- **Builds on:** [[Likelihood]], [[Natural Logarithm]]
- **Leads to:** [[Negative Log-likelihood]], [[Maximum Likelihood Estimation]], [[AIC]], [[Deviance]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

Why use the log-likelihood instead of the likelihood?
??
Products of many small probabilities underflow and are awkward. Logs turn them into sums with the same maximum.
++++

How is the log-likelihood of independent observations computed?
??
As the sum of the log probabilities (or log densities) of each observation.
++++
