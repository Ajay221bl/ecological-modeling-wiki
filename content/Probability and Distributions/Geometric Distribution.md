---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "dgeom()"
status: seedling
---

# Geometric Distribution

**In one line:** the geometric distribution gives the probability of each possible number of failures before the first success in a run of independent yes/no trials.

> [!info] Before this, it helps to know
> [[Bernoulli Trial]] (each trial) · [[Independent Events]] (the run)

## The everyday picture
Knocking on doors until someone answers. Maybe the first door, maybe the fifth. If each door has the same chance of opening, the number of unanswered doors before the first answer is geometric.

## Start from zero
1. **One parameter: p,** the success probability per trial.
2. **Y = number of failures before the first success.** Support: 0, 1, 2, ….
3. **PMF: P(Y = y) = (1 − p)^y p.** y failures in a row, then a success.
4. **Mean = (1 − p)/p.**
5. **The most likely value is always 0,** and probabilities fall by a constant factor each step.
6. **It is the negative binomial with size 1,** and the discrete cousin of the exponential (it is memoryless too).
7. **In ecology:** years survived before death under constant annual survival, visits before first detection.

## In R
```r
p <- 0.3; dgeom(0:3, p); (1 - p)^(0:3) * p
set.seed(15); c(mean(rgeom(1e5, p)), (1 - p) / p)
all.equal(dgeom(0:5, p), dnbinom(0:5, size = 1, prob = p))
```

## In the course
Listed among count distributions in [[Zuur et al. 2009 Ch8]].

## Common confusions
- **"It counts trials."** R's version counts failures before the success. Some textbooks count trials, which adds 1.

## Explain it back
- With detection 0.25 per visit, what is the expected number of failed visits before the first detection?

*Pass test:* you can compute geometric probabilities.

## Connections
- **Builds on:** [[Bernoulli Trial]]
- **Leads to:** [[Negative Binomial Distribution]], [[Exponential Distribution]], [[Detection Probability]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What does the geometric distribution describe?
??
The number of failures before the first success in independent Bernoulli trials.
++++

What is its mean (failures before first success)?
??
(1 − p) / p.
++++
