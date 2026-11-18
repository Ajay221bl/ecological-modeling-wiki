---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Initial values are the parameter values at which an MCMC chain (or an optimiser) begins."
aliases:
  - "Starting values"
  - "Inits"
  - "Initial values (MCMC)"
  - "Start values"
status: seedling
---

# Initial Values

Where a search party is dropped off shouldn't matter in the end, but a bad drop-off costs time, and one on the wrong side of a canyon can strand the party. **Initial values** are the parameter values at which an MCMC chain, or an [[Numerical Optimization|optimiser]], begins ([[MCMC Chains]]). Use different, dispersed values for each chain so that agreement between chains is informative. They must be valid, inside the parameter's support and with a finite likelihood: a negative [[Standard Deviation|standard deviation]] or log(0) stops the sampler at once, as the code below shows by returning NaN for a normal density with sd −1.

In theory they don't affect the final answer, since warm-up is discarded so their influence is forgotten ([[Burn-in]]); in practice bad ones can stall a chain in a region of near-zero probability ([[MCMC Convergence]]). Software chooses them for you: Stan draws from Uniform(−2, 2) on its internal unconstrained scale, and JAGS picks typical prior values.

Set them by hand after "initialization failed" errors or for complex models; in brms use `init = 0` or a list of values, as in the commented lines ([[Hobbs and Hooten 2015 Ch7]], [[Course Website]]). Initial values are not priors: they are starting points for the algorithm and carry no information into the posterior.

```r
# norun (brms syntax)
# fit <- brm(y ~ x, data = d, init = 0)                      # start all parameters at 0 on the unconstrained scale
# fit <- brm(y ~ x, data = d, init = list(list(b = 0.1), list(b = -0.1), list(b = 0.5), list(b = -0.5)))
dnorm(5, 0, -1)                                             # an invalid starting value gives NaN: the sampler can't start there
```

## Connections
- **Builds on:** [[MCMC Chains]], [[Standard Deviation]]
- **Leads to:** [[Burn-in]], [[MCMC Convergence]], [[Numerical Optimization|Optimization]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What are initial values in MCMC?
??
The parameter values at which each chain starts. They should be valid and dispersed across chains.
++++
