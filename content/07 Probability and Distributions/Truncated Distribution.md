---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "A truncated distribution is an ordinary distribution with part of its range cut off and the remaining probabilities scaled up so that they again total 1."
aliases:
  - "Truncation"
  - "Zero-truncated"
  - "Truncated Poisson"
  - "Truncated normal"
status: seedling
---

# Truncated Distribution

A fairground ride has a "must be 120 cm" sign. Children under 120 cm never appear in its records, so the heights you see follow the ordinary distribution of children's heights with its lower part sliced away. A **truncated distribution** is an ordinary distribution with part of its range cut off and the remaining probabilities scaled up so that they again total 1 ([[Probability Distribution]], [[Support of a Distribution]]). Start with a distribution, declare a region impossible (below a limit, above a limit, or the value zero), and divide the remaining probabilities by the probability of the allowed region. That [[Scaling Predictors|rescaling]] is conditioning: the new probabilities are P(y | y is allowed) ([[Conditional Probability]]).

Group sizes of a herding animal are an example, because a group of zero cannot be observed. If sizes follow a Poisson with mean 2 with the zero removed, P(0) = 0.135 is lost, so the zero-truncated P(1) = 0.271 / (1 − 0.135) = 0.313. The code below writes this zero-truncated Poisson as a function and checks its probabilities add to 1. Cutting off one end shifts the mean away from the cut: the truncated mean is 2 / (1 − e⁻²) = 2.31, above the untruncated 2, which a simulation that simply discards zeros confirms.

In ecology truncation appears in zero-truncated counts such as litter or group size, in the count part of a [[Hurdle Model]], in detection limited to a maximum distance, and in priors: a half-normal is a normal truncated at zero, with mean 0.80 for a [[Standard Normal Distribution|standard normal]], as the last line shows ([[Half-Normal Prior]], [[Zuur et al. 2009 Ch11]]). Two confusions. Truncation is not just deleting values; the remaining probabilities must be rescaled. And truncated is not the same as censored: truncated values are absent from the dataset entirely, while [[Censoring|censored]] values are present but known only to lie beyond a limit.

```r
ztp <- function(y, lam) dpois(y, lam) / (1 - dpois(0, lam))       # zero-truncated Poisson PMF
ztp(1:4, 2); sum(ztp(1:200, 2))
2 / (1 - exp(-2))                                                 # its mean: 2.31, above the untruncated 2
set.seed(19); y <- rpois(1e5, 2); mean(y[y > 0])
z <- abs(rnorm(1e5, 0, 1)); mean(z)                               # half-normal: a normal truncated at zero, mean 0.80
```

## Connections
- **Builds on:** [[Probability Distribution]], [[Conditional Probability]], [[Scaling Predictors]], [[Standard Normal Distribution]]
- **Leads to:** [[Hurdle Model]], [[Half-Normal Prior]], [[Censoring]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is a truncated distribution?
??
A distribution restricted to part of its range and rescaled to total probability 1.
++++

How is a zero-truncated Poisson probability computed?
??
dpois(y, λ) / (1 − dpois(0, λ)) for y ≥ 1.
++++

How does truncation differ from censoring?
??
Truncated values never enter the data. Censored values are recorded as "beyond a limit".
++++
