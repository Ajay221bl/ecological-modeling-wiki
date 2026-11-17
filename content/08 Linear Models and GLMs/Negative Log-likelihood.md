---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The negative log-likelihood is the log-likelihood with its sign flipped, so that the best parameter values are found at its lowest point."
aliases:
  - "NLL"
  - "−log L"
  - "Minus log-likelihood"
status: seedling
---

# Negative Log-likelihood

Turn a hill upside down and it becomes a bowl: finding the top of the hill and the bottom of the bowl are the same search. Computer routines are written to roll a ball to the bottom, so we hand them the bowl. The **negative log-likelihood** (NLL) is the [[Log-likelihood]] with its sign flipped, NLL(θ) = −ℓ(θ), so the best parameter values are at its lowest point. Maximising the likelihood is the same as minimising the NLL, and optimisation functions such as `optim()` minimise by default ([[Numerical Optimization]]).

In the code below, six counts have a Poisson NLL that is lowest near λ = 3.17, and `optimize()` finds the minimum at exactly the sample mean, which is the Poisson's [[Maximum Likelihood Estimation|maximum likelihood estimate]]. The NLL behaves like a measure of misfit, lower being better, just as a sum of squares does. For normal errors it is the sum of squares in disguise, plus constants, which is why least squares and maximum likelihood agree for linear models.

[[Deviance]] and AIC are built on −2 × log-likelihood, twice the NLL ([[Johnson and Omland 2004]]). For discrete data, where log-likelihoods are negative, the negative log-likelihood is a positive number, despite its name.

```r
y <- c(2, 4, 3, 6, 1, 3)
nll <- function(lambda) -sum(dpois(y, lambda, log = TRUE))
sapply(c(2, 3, 3.17, 4), nll)                         # lowest near the sample mean
optimize(nll, c(0.1, 20))$minimum; mean(y)
```

## Connections
- **Builds on:** [[Log-likelihood]]
- **Leads to:** [[Numerical Optimization]], [[Maximum Likelihood Estimation]], [[Deviance]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is the negative log-likelihood used for?
??
As the objective to minimise when fitting by maximum likelihood.
++++
