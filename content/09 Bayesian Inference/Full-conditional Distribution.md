---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "The full-conditional distribution of a parameter is its distribution given the data and the current values of every other unknown in the model."
aliases:
  - "Full conditional"
  - "Full conditional distribution"
  - "Full conditionals"
status: seedling
---

# Full-conditional Distribution

In sudoku you ask what one cell can be, given everything else on the board, and solve the puzzle one cell at a time. The **full-conditional distribution** of a parameter is its distribution given the data and the current values of every other unknown in the model ([[Conditional Probability]], [[Joint Posterior Distribution]]). The joint posterior of many parameters is hard to sample all at once, but holding all but one fixed often leaves a simple, recognisable distribution, thanks to conjugacy ([[Conjugate Prior]]).

To find it, collect every term of the [[Joint Probability|joint distribution]] that contains the parameter and drop the rest as constants; on a [[Directed Acyclic Graph]] these are the terms for the node, its parents and its children. MCMC can then cycle through the parameters, updating each from its full conditional, which is [[Gibbs Sampling]] ([[MCMC]]). The code below samples the mean and precision of 30 normal observations by alternating between their two full conditionals; after 2,000 rounds the estimates, mean 4.31 and sd 1.78, match the sample's 4.31 and 1.73.

[[Hobbs and Hooten 2015 Ch7]] derives full conditionals as the basis of MCMC. A full conditional is not the [[Marginal Posterior Distribution|marginal posterior]]: it conditions on the other parameters, while the marginal averages over them.

```r
set.seed(10); y <- rnorm(30, 5, 2); mu <- 0; tau <- 1                # sample a mean and a precision by alternating full conditionals
out <- matrix(NA, 2000, 2)
for (i in 1:2000) {
  mu <- rnorm(1, (tau * sum(y)) / (tau * 30 + 0.001), sqrt(1 / (tau * 30 + 0.001)))        # [mu | tau, y], prior Normal(0, precision 0.001)
  tau <- rgamma(1, 0.01 + 15, 0.01 + sum((y - mu)^2) / 2)                                   # [tau | mu, y], prior Gamma(0.01, 0.01)
  out[i, ] <- c(mu, 1 / sqrt(tau)) }
round(colMeans(out[-(1:200), ]), 2); round(c(mean(y), sd(y)), 2)
```

## Connections
- **Builds on:** [[Conditional Probability]], [[Joint Posterior Distribution]], [[Joint Probability]], [[Marginal Posterior Distribution]]
- **Leads to:** [[Gibbs Sampling]], [[MCMC]], [[Conjugate Prior]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is a full-conditional distribution?
??
The distribution of one unknown given the data and all other unknowns in the model.
++++

Which MCMC algorithm samples each parameter from its full conditional?
??
Gibbs sampling.
++++
