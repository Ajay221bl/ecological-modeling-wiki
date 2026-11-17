---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Gamma-Poisson update"
  - "Gamma prior with Poisson likelihood"
status: seedling
---

# Gamma-Poisson Conjugacy

**In one line:** with a Gamma(a, b) prior on a Poisson rate and n counts that sum to S, the posterior is Gamma(a + S, b + n).

> [!info] Before this, it helps to know
> [[Conjugate Prior]] (the idea) · [[Gamma Distribution]] (prior and posterior) · [[Poisson Distribution]] (the likelihood)

## The everyday picture
A running total. The prior is "a events seen in b units of effort". New data add S events over n more units. The rate estimate is total events over total effort.

## A tiny example
Prior Gamma(2, 1): about 2 birds per point. Five point counts: 3, 5, 4, 6, 2 (sum 20). Posterior Gamma(22, 6), mean 22/6 = 3.7.

## Start from zero
1. **Prior:** λ ~ Gamma(shape a, rate b), mean a/b.
2. **Likelihood for n counts:** ∝ λ^S e^(−nλ), where S is the sum.
3. **Multiply:** ∝ λ^(a+S−1) e^(−(b+n)λ).
4. **Recognise it:** Gamma(a + S, b + n).
5. **Posterior mean = (a + S)/(b + n).** Between the prior mean a/b and the sample mean S/n.
6. **b is the prior's "number of observations".**
7. **Link to the negative binomial:** a Poisson whose rate is gamma-distributed has a negative binomial distribution.

## In R
```r
y <- c(3, 5, 4, 6, 2); a <- 2; b <- 1
c(shape = a + sum(y), rate = b + length(y), mean = (a + sum(y)) / (b + length(y)))
qgamma(c(0.025, 0.975), a + sum(y), b + length(y)); mean(y)
```

## Common confusions
- **"Gamma's second parameter is always a rate."** R allows rate or scale. The update above uses the rate.

## Explain it back
- Update Gamma(1, 1) with counts 0, 2, 1.

*Pass test:* you can do the update for a set of counts.

## Connections
- **Builds on:** [[Conjugate Prior]], [[Gamma Distribution]], [[Poisson Distribution]]
- **Leads to:** [[Beta-Binomial Conjugacy]], [[Negative Binomial Distribution]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

Gamma(a, b) prior and n Poisson counts summing to S give what posterior?
??
Gamma(a + S, b + n).
++++
