---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Truncation"
  - "Zero-truncated"
  - "Truncated Poisson"
  - "Truncated normal"
status: seedling
---

# Truncated Distribution

**In one line:** a truncated distribution is an ordinary distribution with part of its range cut off and the remaining probabilities scaled up so that they again total 1.

> [!info] Before this, it helps to know
> [[Probability Distribution]] (the original) · [[Support of a Distribution]] (what gets cut) · [[Conditional Probability]] (the rescaling)

## The everyday picture
Height records from a ride with a "must be 120 cm" sign. Children under 120 cm never appear in the data. The heights you see follow the ordinary distribution of children's heights with its lower part sliced away.

## A tiny example
Group sizes of a herding animal. A group of zero can't be observed. Counts follow a Poisson with the zero removed.
- Poisson(2): P(0) = 0.135.
- Zero-truncated P(1) = 0.271 / (1 − 0.135) = 0.313.

## Start from zero
1. **Start with a distribution.**
2. **Declare a region impossible** (below a limit, above a limit, or the value zero).
3. **Divide the remaining probabilities by the probability of the allowed region.** *That is conditioning:* P(y | y is allowed).
4. **The mean shifts away from the cut.**
5. **Truncation vs censoring.** Truncated values are absent from the dataset entirely. Censored values are present but only known to lie beyond a limit.
6. **In ecology:** zero-truncated counts (litter size, group size, days in hospital), the count part of hurdle models, half-normal priors (a normal truncated at zero), detection limited to a maximum distance.

## In R
```r
ztp <- function(y, lam) dpois(y, lam) / (1 - dpois(0, lam))       # zero-truncated Poisson PMF
ztp(1:4, 2); sum(ztp(1:200, 2))
2 / (1 - exp(-2))                                                 # its mean: 2.31, above the untruncated 2
set.seed(19); y <- rpois(1e5, 2); mean(y[y > 0])
z <- abs(rnorm(1e5, 0, 1)); mean(z)                               # half-normal: a normal truncated at zero, mean 0.80
```

## In the course
Zero-truncated models: [[Zuur et al. 2009 Ch11]]. Truncated priors appear in the Bayesian labs ([[Course Website]]).

## Common confusions
- **"Truncation just deletes values."** The remaining probabilities must be rescaled.
- **"Truncated equals censored."** Censored observations are still recorded.

## Explain it back
- How do you turn a Poisson PMF into a zero-truncated one?

*Pass test:* you can write a truncated PMF by dividing by the allowed probability.

## Connections
- **Builds on:** [[Probability Distribution]], [[Conditional Probability]]
- **Leads to:** [[Hurdle Model]], [[Half-Normal Prior]], [[Censoring]]
- **Part of:** [[MOC - Probability and Distributions]]

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
