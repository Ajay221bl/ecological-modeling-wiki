---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The geometric distribution gives the probability of each possible number of failures before the first success in a run of independent yes/no trials."
aliases:
  - "dgeom()"
status: seedling
---

# Geometric Distribution

You knock on doors until someone answers. It might be the first door or the fifth. If every door has the same chance of opening, the number of unanswered doors before the first answer follows the **geometric distribution**: the probability of each possible number of failures before the first success in a run of independent yes/no trials ([[Bernoulli Trial]], [[Independent Events]]). It has one parameter, the success probability p per trial, and its support is 0, 1, 2, …. Its formula reads like the story: P(Y = y) = (1 − p)^y p, y failures in a row and then a success.

With p = 0.3, P(0) = 0.3, P(1) = 0.7 × 0.3 = 0.21, P(2) = 0.147, and so on: the most likely value is always 0, and each step multiplies the probability by the same factor 1 − p. The mean is (1 − p)/p, so with p = 0.3 it is 2.33 failures, and with detection 0.25 per visit you expect 3 failed visits before the first detection ([[Detection Probability]]). The code below checks the formula against `dgeom()` and the mean by simulation.

In ecology it describes years survived before death under constant annual survival, or visits before first detection ([[Zuur et al. 2009 Ch8]]). It is the [[Negative Binomial Distribution]] with size 1, which the last line confirms, and the discrete cousin of the [[Exponential Distribution]], memoryless in the same way. Watch the counting convention: R's version counts failures before the success, while some textbooks count trials, which adds 1.

```r
p <- 0.3; dgeom(0:3, p); (1 - p)^(0:3) * p
set.seed(15); c(mean(rgeom(1e5, p)), (1 - p) / p)
all.equal(dgeom(0:5, p), dnbinom(0:5, size = 1, prob = p))
```

## Connections
- **Builds on:** [[Bernoulli Trial]]
- **Leads to:** [[Negative Binomial Distribution]], [[Exponential Distribution]], [[Detection Probability]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What does the geometric distribution describe?
??
The number of failures before the first success in independent Bernoulli trials.
++++

What is its mean (failures before first success)?
??
(1 − p) / p.
++++
