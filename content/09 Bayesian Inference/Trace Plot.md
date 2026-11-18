---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A trace plot shows the sampled value of a parameter at each iteration, one line per chain, so you can see whether the chains have settled and are mixing well."
aliases:
  - "Traceplot"
  - "Trace plots"
  - "Chain history plot"
  - "Caterpillar trace"
status: seedling
---

# Trace Plot

A seismograph at rest shows steady background tremor; trends, steps and flat stretches are the earthquakes. A **trace plot** shows the sampled value of a parameter at each iteration, with iteration on the x-axis, the parameter's value on the y-axis and one colour per chain ([[MCMC Chains]], [[Line Plot]]). It lets you see whether the chains have settled and are mixing well ([[MCMC Convergence]]). A good trace is a "fuzzy caterpillar": horizontal, dense and with all chains on top of each other.

Bad patterns each have a meaning. A trend means the chain is still travelling and needs more warm-up ([[Burn-in]]). Chains at different levels mean no convergence, or a posterior with several peaks. Slow snaking means high autocorrelation and poor mixing ([[Chain Autocorrelation]]). Flat stretches mean the chain is stuck, through rejected proposals or divergences. The figure contrasts a braided band with separated, wandering lines. The code below draws a good and a bad set of three chains side by side; the good chains' means differ by 0.02, the bad ones' by 2.9.

Look at every important parameter, including variance parameters, which misbehave most often, alongside [[R-hat]]. In R use `plot(fit)` or `mcmc_trace()` for brms, and `traceplot()` for coda and [[Running Stan from R|rstan]] objects, as in the brms labs ([[Course Website]], [[Hobbs and Hooten 2015 Ch7]]). A trace plot does not show the posterior; it shows the sampler's path, and the density of the draws shows the posterior.

![[Trace plots good bad.png|700]]
*What to look at:* the difference between a braided band and separated, wandering lines.

```r
set.seed(24); good <- replicate(3, rnorm(500)); bad <- replicate(3, cumsum(rnorm(500, 0, 0.15)) + rnorm(1, 0, 2))
op <- par(mfrow = c(1, 2)); matplot(good, type = "l", lty = 1, main = "Good", xlab = "Iteration", ylab = "Value"); matplot(bad, type = "l", lty = 1, main = "Bad", xlab = "Iteration", ylab = "Value"); par(op)
round(c(good = diff(range(colMeans(good))), bad = diff(range(colMeans(bad)))), 2)           # how far apart the chain means are
```

## Connections
- **Builds on:** [[MCMC Chains]], [[MCMC Convergence]]
- **Leads to:** [[R-hat]], [[Burn-in]], [[Chain Autocorrelation]], [[Running Stan from R]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[How to check an MCMC fit]]

## Flashcards

What does a healthy trace plot look like?
??
A stable horizontal band in which all chains overlap and mix rapidly, a "fuzzy caterpillar".
![[Trace plots good bad.png]]
++++

What does a trace plot with chains at different levels indicate?
??
The chains have not converged to a common distribution.
++++
