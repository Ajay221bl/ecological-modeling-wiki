---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Beta-binomial update"
  - "Beta prior with binomial likelihood"
  - "Beta-binomial model (conjugate)"
status: seedling
---

# Beta-Binomial Conjugacy

**In one line:** with a Beta(a, b) prior on a probability and y successes in n trials, the posterior is Beta(a + y, b + n − y).

> [!info] Before this, it helps to know
> [[Conjugate Prior]] (the idea) · [[Beta Distribution]] (prior and posterior) · [[Binomial Distribution]] (the likelihood)

## The everyday picture
A tally board. The prior has some chalk marks already under "success" and "failure". Each new observation adds a mark to one column. The posterior is the updated board.

## A tiny example
Prior Beta(1, 1). Survey: 3 of 10 ponds occupied. Posterior Beta(4, 8), mean 4/12 = 0.33.
Second survey: 6 of 20. Posterior Beta(10, 22), mean 0.31, and narrower.

## Start from zero
1. **Prior:** p ~ Beta(a, b), density ∝ p^(a−1) (1 − p)^(b−1).
2. **Likelihood:** ∝ p^y (1 − p)^(n−y).
3. **Multiply:** ∝ p^(a+y−1) (1 − p)^(b+n−y−1).
4. **Recognise it:** Beta(a + y, b + n − y).
5. **Posterior mean = (a + y)/(a + b + n).** A weighted average of the prior mean a/(a + b) and the data proportion y/n, with weights a + b and n.
6. **a + b is the prior's "sample size".** A Beta(1, 1) is worth 2 observations. A Beta(12, 8) is worth 20.
7. **Updating in batches or all at once gives the same posterior.**

## In R
```r
post <- function(a, b, y, n) c(a = a + y, b = b + n - y)
post(1, 1, 3, 10); p1 <- post(1, 1, 3, 10); post(p1[1], p1[2], 6, 20); post(1, 1, 9, 30)      # sequential equals all at once
qbeta(c(0.025, 0.5, 0.975), 10, 22)
c(prior_mean = 12 / 20, data = 3 / 10, posterior_mean = (12 + 3) / (20 + 10))                 # Beta(12, 8) prior, 20 pseudo-observations, outweighs 10 real ones
```

## In the course
[[Hobbs and Hooten 2015 Ch5]]. [[Harrison et al. 2018]] mentions the beta-binomial for overdispersion (a related but different use).

## Common confusions
- **"Beta-binomial conjugacy is the beta-binomial distribution."** The first is an updating rule for a parameter. The second is a distribution for overdispersed data.

## Explain it back
- Update Beta(2, 2) with 8 successes in 10 trials.

*Pass test:* you can do the update and compute the posterior mean in your head.

## Connections
- **Builds on:** [[Conjugate Prior]], [[Beta Distribution]], [[Binomial Distribution]]
- **Leads to:** [[Posterior Distribution]], [[Gamma-Poisson Conjugacy]], [[Beta-binomial Distribution]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

Beta(a, b) prior and y successes in n trials give what posterior?
??
Beta(a + y, b + n − y).
++++

What is the posterior mean in the beta-binomial model?
??
(a + y) / (a + b + n).
++++
