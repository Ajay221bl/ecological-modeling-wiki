---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "dbinom()"
  - "Binomial"
status: seedling
---

# Binomial Distribution

**In one line:** the binomial distribution gives the probability of each possible number of successes in a fixed number of independent yes/no trials that all share the same success probability.

> [!info] Before this, it helps to know
> [[Bernoulli Trial]] (each trial) · [[Binomial Coefficient]] (counts the arrangements) · [[Independent Events]] (the trials)

## The everyday picture
Flipping the same coin 10 times and counting heads. You might get 5, or 7, rarely 0 or 10. The binomial tells you how likely each count is.

## A tiny example
20 eggs, each hatching with probability 0.6.
- Expected hatchlings: 20 × 0.6 = 12.
- P(exactly 12) = 0.180. P(15 or more) = 0.126.

## Start from zero
1. **Fixed number of trials n,** known in advance.
2. **Each trial is success or failure.**
3. **Same p for every trial.**
4. **Trials independent.**
5. **Y = number of successes.** Support: 0, 1, …, n.
6. **PMF: P(Y = y) = C(n, y) p^y (1 − p)^(n − y).** *Why the pieces:* p^y (1 − p)^(n − y) is the probability of one particular sequence with y successes, and C(n, y) counts how many such sequences there are.
7. **Mean = np. Variance = np(1 − p).** Always less than the mean.
8. **In models:** survival out of n marked animals, seeds germinating out of n sown, detections out of n visits. A binomial GLM models p.

## See it
![[Binomial distribution.png|700]]
*What to look at:* the bars for n = 20 at three values of p, sliding from left to right and narrowing near the ends.

## In R
```r
dbinom(12, 20, 0.6); 1 - pbinom(14, 20, 0.6)
choose(20, 12) * 0.6^12 * 0.4^8                   # the formula by hand
set.seed(12); y <- rbinom(1e5, 20, 0.6); c(mean(y), var(y), 20 * 0.6 * 0.4)
```

## In the course
[[Hobbs and Hooten 2015 Ch3]], [[Powell and Gale 2015 Ch3]], and the distributions lab ([[Course Website]]).

## Common confusions
- **"Binomial is for any count."** Only counts with a known maximum n.
- **"Proportions can be modeled without n."** 3 of 4 and 75 of 100 are both 0.75 but carry very different information.

## Explain it back
- What four conditions define a binomial?
- Why does the formula include C(n, y)?

*Pass test:* you can compute a binomial probability and state its mean and variance.

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
