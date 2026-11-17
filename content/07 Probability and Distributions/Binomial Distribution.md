---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The binomial distribution gives the probability of each possible number of successes in a fixed number of independent yes/no trials that all share the same success probability."
aliases:
  - "dbinom()"
  - "Binomial"
status: seedling
---

# Binomial Distribution

Flip the same coin 10 times and count heads. You might get 5 or 7, rarely 0 or 10. The **binomial distribution** gives the probability of each possible number of successes in a fixed number n of independent yes/no trials that all share the same success probability p ([[Bernoulli Trial]], [[Independent Events]]). Those are its four conditions: a known number of trials, two outcomes per trial, the same p each time, and independence. Its support is 0, 1, …, n, its mean is np, and its variance np(1 − p), always less than the mean.

Take 20 eggs, each hatching with probability 0.6. The expected number of hatchlings is 20 × 0.6 = 12, but P(exactly 12) is only 0.180, and P(15 or more) is 0.126. The formula is P(Y = y) = C(n, y) p^y (1 − p)^(n − y). The piece p^y (1 − p)^(n − y) is the probability of one particular sequence with y successes, and C(n, y), the [[Binomial Coefficient]], counts how many such sequences there are. The code below computes P(12) both with `dbinom()` and by hand, and the figure shows the bars for n = 20 sliding right and narrowing near the ends as p changes.

Ecologists use it for survival out of n marked animals, seeds germinating out of n sown, and detections out of n visits, and a [[Binomial GLM for Proportions]] models how p depends on predictors ([[Hobbs and Hooten 2015 Ch3]], [[Powell and Gale 2015 Ch3]]). Two confusions. It is not for any count, only counts with a known maximum n; counts without one are [[Poisson Distribution|Poisson]]-like. And proportions should not be modelled without n: 3 of 4 and 75 of 100 are both 0.75 but carry very different information. When the trials vary more than one shared p allows, the [[Beta-binomial Distribution]] adds that extra variation, using a [[Beta Distribution]] for p.

![[Binomial distribution.png|700]]
*What to look at:* the bars for n = 20 at three values of p, sliding from left to right and narrowing near the ends.

```r
dbinom(12, 20, 0.6); 1 - pbinom(14, 20, 0.6)
choose(20, 12) * 0.6^12 * 0.4^8                   # the formula by hand
set.seed(12); y <- rbinom(1e5, 20, 0.6); c(mean(y), var(y), 20 * 0.6 * 0.4)
```

## Connections
- **Builds on:** [[Bernoulli Trial]], [[Binomial Coefficient]]
- **Leads to:** [[Binomial GLM for Proportions]], [[Poisson Distribution]], [[Beta Distribution]], [[Beta-binomial Distribution]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]], molecular note [[Binomial vs Poisson]]

## Flashcards

What does the binomial distribution describe?
??
The number of successes in n independent trials with common success probability p.
![[Binomial distribution.png]]
++++

Mean and variance of Binomial(n, p)?
??
Mean np, variance np(1 − p).
++++

What distinguishes binomial counts from Poisson counts?
??
Binomial counts have a known upper limit n.
++++
