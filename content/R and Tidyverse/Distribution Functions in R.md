---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "d, p, q, r functions"
  - "dnorm pnorm qnorm rnorm"
status: seedling
---

# Distribution Functions in R

**In one line:** for every probability distribution R has four functions, starting with d, p, q and r, that give the height of the curve, the probability up to a value, the value at a probability, and random draws.

> [!info] Before this, it helps to know
> [[Probability Distribution]] (what they describe) · [[Quantile]] (value at a given fraction) · [[Simulating Data]] (the r functions)

## The everyday picture
A road with distance markers. **d** asks "how crowded is it right at kilometre x?". **p** asks "what share of the traffic is behind kilometre x?". **q** asks the reverse: "at which kilometre is 90% of the traffic behind me?". **r** drops random cars on the road in the right pattern.

## A tiny example
Standard normal (mean 0, SD 1):
- `dnorm(0)` = 0.399, the height at the peak.
- `pnorm(1.96)` = 0.975, the area to the left of 1.96.
- `qnorm(0.975)` = 1.96, undoing `pnorm`.
- `rnorm(3)` gives three random values.

## Start from zero
1. **Prefix + distribution name:** `norm`, `binom`, `pois`, `nbinom`, `gamma`, `beta`, `unif`, `lnorm`, `t`.
2. **d = density (or probability for counts).** The likelihood of an observation ([[Likelihood]]).
3. **p = cumulative probability,** P(X ≤ x) ([[Cumulative Distribution Function]]).
4. **q = quantile,** the inverse of p ([[Quantile Function]]).
5. **r = random draws.**
6. **Why four:** they answer the four questions you ever ask of a distribution. d for likelihood, p for p-values, q for interval limits, r for simulation.

## See it
![[dpqr functions.png|700]]
*What to look at:* d is a height, p is a shaded area, q reads the axis from an area, r scatters points under the curve.

## In R
```r
dnorm(0); pnorm(1.96); qnorm(0.975)
dbinom(7, size = 10, prob = 0.7)        # P(exactly 7 of 10) = 0.267
pbinom(7, 10, 0.7)                      # P(7 or fewer) = 0.617
qpois(c(0.025, 0.975), lambda = 4)      # middle 95% of a Poisson(4): 1 to 8
set.seed(1); rpois(5, 4)
1 - pnorm(2.5)                          # upper-tail area: a one-sided p-value
```

## Common confusions
- **"dnorm gives a probability."** For continuous distributions d is a density. Probabilities come from p.
- **"pbinom(7, ...) is P(X = 7)."** It is P(X ≤ 7).

## Explain it back
- Which prefix would you use for a likelihood, a p-value, an interval limit and a simulation?

*Pass test:* you can pick the right prefix for a question about any distribution.

## Connections
- **Builds on:** [[Probability Distribution]], [[Quantile]]
- **Leads to:** [[Likelihood]], [[P-value]], [[plogis()|plogis() and qlogis()]]
- **Part of:** [[MOC - R for Ecological Modeling]]

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
