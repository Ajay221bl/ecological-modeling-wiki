---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "For every probability distribution R has four functions, starting with d, p, q and r, that give the height of the curve, the probability up to a value, the value at a probability, and random draws."
aliases:
  - "d, p, q, r functions"
  - "dnorm pnorm qnorm rnorm"
status: seedling
---

# Distribution Functions in R

Picture a road with distance markers and traffic along it. You can ask four questions: how crowded is it right at kilometre x? What share of the traffic is behind kilometre x? At which kilometre is 90% of the traffic behind me? And: scatter some cars on the road in the right pattern. For every [[Probability Distribution]], R has four functions that answer exactly those questions, named by a prefix and the distribution: **d** gives the density, the height of the curve (for counts, the probability of that exact value); **p** gives the cumulative probability P(X ≤ x) ([[Cumulative Distribution Function]]); **q** gives the [[Quantile]], the value below which a given fraction lies, undoing p ([[Quantile Function]]); and **r** gives random draws ([[Simulating Data]]). The names include `norm`, `binom`, `pois`, `nbinom`, `gamma`, `beta`, `unif`, `lnorm` and `t`.

For the standard normal: `dnorm(0)` = 0.399, the height at the peak; `pnorm(1.96)` = 0.975, the area to the left of 1.96; `qnorm(0.975)` = 1.96, undoing `pnorm`; and `rnorm(3)` gives three random values. For a binomial with 10 trials and p = 0.7, `dbinom(7, 10, 0.7)` = 0.267 is the probability of exactly 7 successes, while `pbinom(7, 10, 0.7)` = 0.617 is the probability of 7 *or fewer*. `qpois(c(0.025, 0.975), 4)` says the middle 95% of a Poisson with mean 4 runs from 1 to 8, and `1 - pnorm(2.5)` is an upper-tail area, a one-sided p-value. The figure shows each as a picture: a height, a shaded area, an axis value read from an area, and scattered points.

Why exactly four? They answer the four questions you ever ask of a distribution: d for the [[Likelihood]] of an observation, p for [[P-value|p-values]], q for interval limits, and r for simulation. Two confusions. For a continuous distribution, d is a density, not a probability, and can exceed 1; probabilities come from p. And `pbinom(7, ...)` is P(X ≤ 7), not P(X = 7). The logistic versions, `plogis()` and `qlogis()`, convert between probabilities and log-odds ([[plogis()|plogis() and qlogis()]]).

![[dpqr functions.png|700]]
*What to look at:* d is a height, p is a shaded area, q reads the axis from an area, r scatters points under the curve.

```r
dnorm(0); pnorm(1.96); qnorm(0.975)
dbinom(7, size = 10, prob = 0.7)        # P(exactly 7 of 10) = 0.267
pbinom(7, 10, 0.7)                      # P(7 or fewer) = 0.617
qpois(c(0.025, 0.975), lambda = 4)      # middle 95% of a Poisson(4): 1 to 8
set.seed(1); rpois(5, 4)
1 - pnorm(2.5)                          # upper-tail area: a one-sided p-value
```

## Connections
- **Builds on:** [[Probability Distribution]], [[Quantile]]
- **Leads to:** [[Likelihood]], [[P-value]], [[plogis()|plogis() and qlogis()]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What do the prefixes d, p, q and r mean for R distribution functions?
??
d: density or probability at a value. p: cumulative probability up to a value. q: quantile for a probability. r: random draws.
![[dpqr functions.png]]
++++

Which prefix computes the likelihood of an observation?
??
d, for example dbinom() or dnorm().
++++

What is qnorm(0.975)?
??
1.96, the value with 97.5% of a standard normal below it.
++++
