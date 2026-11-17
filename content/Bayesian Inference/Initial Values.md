---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Starting values"
  - "Inits"
  - "Initial values (MCMC)"
  - "Start values"
status: seedling
---

# Initial Values

**In one line:** initial values are the parameter values at which an MCMC chain (or an optimiser) begins.

> [!info] Before this, it helps to know
> [[MCMC Chains]] (what they start) · [[Numerical Optimization|Optimization]] (also needs them)

## The everyday picture
Where each search party is dropped off. It shouldn't matter in the end. A bad drop-off costs time, and a drop-off on the wrong side of a canyon can strand the party.

## Start from zero
1. **Every chain must start somewhere.**
2. **Use different, dispersed values for each chain,** so that agreement between chains is informative.
3. **They must be valid:** inside the parameter's support, with a finite likelihood. A negative standard deviation or log(0) stops the sampler at once.
4. **In theory they don't affect the final answer.** Warm-up is discarded so that their influence is forgotten.
5. **In practice bad ones can stall a chain** in a region of near-zero probability.
6. **Software chooses them for you:** Stan draws from Uniform(−2, 2) on its internal unconstrained scale. JAGS picks typical prior values.
7. **When to set them by hand:** "initialization failed" errors, or complex models. In brms: `init = 0` or a list of values.

## In R
```r
# norun (brms syntax)
# fit <- brm(y ~ x, data = d, init = 0)                      # start all parameters at 0 on the unconstrained scale
# fit <- brm(y ~ x, data = d, init = list(list(b = 0.1), list(b = -0.1), list(b = 0.5), list(b = -0.5)))
dnorm(5, 0, -1)                                             # an invalid starting value gives NaN: the sampler can't start there
```

## In the course
[[Hobbs and Hooten 2015 Ch7]]. JAGS and Stan labs ([[Course Website]]).

## Common confusions
- **"Initial values are priors."** They are starting points for the algorithm and carry no information into the posterior.

## Explain it back
- Why give the chains different starting values?

*Pass test:* you can say what makes an initial value valid.

## Connections
- **Builds on:** [[MCMC Chains]]
- **Leads to:** [[Burn-in]], [[MCMC Convergence]], [[Numerical Optimization|Optimization]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What are initial values in MCMC?
??
The parameter values at which each chain starts. They should be valid and dispersed across chains.
++++
