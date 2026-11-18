---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Gibbs sampling updates one parameter at a time by drawing it directly from its full-conditional distribution, cycling through all parameters over and over."
aliases:
  - "Gibbs sampler"
  - "Gibbs updates"
  - "Gibbs"
status: seedling
---

# Gibbs Sampling

You can't tidy a whole house at once, but given the present state of the other rooms you can put this one in order; go round and round and the whole house gets there. **Gibbs sampling** updates one parameter at a time by drawing it directly from its [[Full-conditional Distribution]], cycling through all parameters over and over ([[MCMC]]). Start with values for all parameters; draw parameter 1 from [θ₁ | all others, data]; draw parameter 2 from [θ₂ | all others, data], using the new θ₁; continue through all parameters for one iteration, and repeat. The sequence converges to the [[Joint Posterior Distribution|joint posterior]].

No proposals are rejected, since each draw comes from the exact conditional, but this needs recognisable full conditionals, which a [[Conjugate Prior]] provides. Its weakness is that when parameters are strongly correlated, moving one at a time is slow. In the code below, Gibbs sampling of two normal variables with correlation 0.9 reproduces the correlation (0.90) and sd (0.98), but successive draws of x have a lag-1 autocorrelation of 0.80, so the chain moves slowly ([[Chain Autocorrelation]]).

JAGS stands for "Just Another Gibbs Sampler" and BUGS for "[[Bayesian Inference|Bayesian inference]] Using Gibbs Sampling"; both mix Gibbs with other methods where needed ([[JAGS and BUGS]], [[Hobbs and Hooten 2015 Ch7]]). Gibbs is not a different idea from the [[Metropolis-Hastings Algorithm]]: it is the special case with [[Acceptance Rate|acceptance probability]] 1. [[Hamiltonian Monte Carlo]] copes better with correlated parameters.

```r
set.seed(19); rho <- 0.9; x <- y <- 0; out <- matrix(NA, 5000, 2)        # Gibbs for a correlated bivariate normal
for (i in 1:5000) { x <- rnorm(1, rho * y, sqrt(1 - rho^2)); y <- rnorm(1, rho * x, sqrt(1 - rho^2)); out[i, ] <- c(x, y) }
round(c(cor = cor(out)[1, 2], sd_x = sd(out[, 1]), lag1_autocorrelation = acf(out[, 1], plot = FALSE)$acf[2]), 2)
```

## Connections
- **Builds on:** [[Full-conditional Distribution]], [[Conjugate Prior]], [[Joint Posterior Distribution]], [[Bayesian Inference]], [[Acceptance Rate]]
- **Leads to:** [[JAGS and BUGS]], [[Metropolis-Hastings Algorithm]], [[Hamiltonian Monte Carlo]], [[Chain Autocorrelation]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

How does Gibbs sampling work?
??
It cycles through the parameters, drawing each from its full-conditional distribution given the current values of the others.
++++

What do JAGS and BUGS stand for?
??
Just Another Gibbs Sampler. Bayesian inference Using Gibbs Sampling.
++++
