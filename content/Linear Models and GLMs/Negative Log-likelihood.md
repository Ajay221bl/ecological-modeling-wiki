---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "NLL"
  - "−log L"
  - "Minus log-likelihood"
status: seedling
---

# Negative Log-likelihood

**In one line:** the negative log-likelihood is the log-likelihood with its sign flipped, so that the best parameter values are found at its lowest point.

> [!info] Before this, it helps to know
> [[Log-likelihood]] (what is negated) · [[Numerical Optimization]] (which minimises by convention)

## The everyday picture
Turning a hill upside down into a bowl. Finding the top of a hill and finding the bottom of a bowl are the same search. Computer routines are written to roll a ball to the bottom, so we hand them the bowl.

## Start from zero
1. **NLL(θ) = −ℓ(θ).**
2. **Maximising the likelihood = minimising the NLL.**
3. **Why flip:** optimisation functions such as `optim()` minimise by default.
4. **It behaves like a measure of misfit:** lower is better, as with a sum of squares.
5. **For normal errors it is the sum of squares in disguise,** plus constants. That is why least squares and maximum likelihood agree for linear models.
6. **Deviance and AIC are built on −2 × log-likelihood.**

## In R
```r
y <- c(2, 4, 3, 6, 1, 3)
nll <- function(lambda) -sum(dpois(y, lambda, log = TRUE))
sapply(c(2, 3, 3.17, 4), nll)                         # lowest near the sample mean
optimize(nll, c(0.1, 20))$minimum; mean(y)
```

## In the course
[[Johnson and Omland 2004]] frames model fitting as minimising it.

## Common confusions
- **"Negative log-likelihood is a negative number."** For discrete data it is positive.

## Explain it back
- Why do we minimise the NLL instead of maximising the likelihood?

*Pass test:* you can write an NLL function and minimise it.

## Connections
- **Builds on:** [[Log-likelihood]]
- **Leads to:** [[Numerical Optimization]], [[Maximum Likelihood Estimation]], [[Deviance]]
- **Part of:** [[MOC - Likelihood and Estimation]]

## Flashcards

What is the negative log-likelihood used for?
??
As the objective to minimise when fitting by maximum likelihood.
++++
