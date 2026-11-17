---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Log likelihood"
  - "logLik()"
  - "ℓ(θ)"
  - "LL"
status: seedling
---

# Log-likelihood

**In one line:** the log-likelihood is the natural logarithm of the likelihood, used because it turns a product of many tiny probabilities into a manageable sum.

> [!info] Before this, it helps to know
> [[Likelihood]] (what is logged) · [[Natural Logarithm]] (the function) · [[Summation Notation]] (the result is a sum)

## The everyday picture
Measuring earthquakes on the Richter scale. The raw energies span such a range that you report their logarithm. The ranking of quakes doesn't change, but the numbers become usable.

## A tiny example
Three Poisson counts 2, 4, 3 with mean 3: probabilities 0.224, 0.168, 0.224.
- Likelihood: 0.224 × 0.168 × 0.224 = 0.0084.
- Log-likelihood: log(0.224) + log(0.168) + log(0.224) = −4.78.

## Start from zero
1. **Likelihood of n independent observations = product of n probabilities.**
2. **Each is below 1, so the product shrinks fast.** With 1,000 observations it is smaller than a computer can store, and becomes 0.
3. **Take logs: the product becomes a sum.** log(a × b) = log(a) + log(b).
4. **ℓ(θ) = Σ log P(yᵢ | θ).**
5. **The log is always increasing,** so the θ that maximises the log-likelihood also maximises the likelihood. Nothing is lost.
6. **Values are negative** for discrete data (logs of probabilities below 1). Closer to zero is better.
7. **Differences of log-likelihoods are ratios of likelihoods.** This is the quantity AIC and likelihood ratio tests use.
8. **In R:** `logLik(model)`, or `sum(dpois(y, lambda, log = TRUE))`.

## In R
```r
y <- c(2, 4, 3); prod(dpois(y, 3)); sum(dpois(y, 3, log = TRUE)); log(prod(dpois(y, 3)))
set.seed(1); big <- rpois(2000, 3); prod(dpois(big, 3)); sum(dpois(big, 3, log = TRUE))      # the product underflows to 0. The sum is fine
m <- glm(big ~ 1, family = poisson); logLik(m)
```

## In the course
[[Hobbs and Hooten 2015 Ch4]], [[Johnson and Omland 2004]], [[Zuur et al. 2009 Ch8]].

## Common confusions
- **"A log-likelihood of −500 is a bad fit."** Its size depends on n and on the data's units. Only compare log-likelihoods of models fitted to the same data.
- **"Positive log-likelihoods are errors."** Densities can exceed 1, so continuous data can give positive values.

## Explain it back
- Give two reasons to work with the log of the likelihood.

*Pass test:* you can compute a log-likelihood by summing log probabilities.

## Connections
- **Builds on:** [[Likelihood]], [[Natural Logarithm]]
- **Leads to:** [[Negative Log-likelihood]], [[Maximum Likelihood Estimation]], [[AIC]], [[Deviance]]
- **Part of:** [[MOC - Likelihood and Estimation]]

## Flashcards

Why use the log-likelihood instead of the likelihood?
??
Products of many small probabilities underflow and are awkward. Logs turn them into sums with the same maximum.
++++

How is the log-likelihood of independent observations computed?
??
As the sum of the log probabilities (or log densities) of each observation.
++++
