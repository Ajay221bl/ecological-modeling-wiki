---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Traceplot"
  - "Trace plots"
  - "Chain history plot"
  - "Caterpillar trace"
status: seedling
---

# Trace Plot

**In one line:** a trace plot shows the sampled value of a parameter at each iteration, one line per chain, so you can see whether the chains have settled and are mixing well.

> [!info] Before this, it helps to know
> [[MCMC Chains]] (the lines) · [[MCMC Convergence]] (what you are judging) · [[Line Plot]] (the plot type)

## The everyday picture
A seismograph. A healthy chain looks like steady background tremor: a dense horizontal band. Trends, steps and flat stretches are the earthquakes.

## Start from zero
1. **x-axis:** iteration. **y-axis:** the parameter's value. **One colour per chain.**
2. **Good:** a "fuzzy caterpillar". Horizontal, dense, all chains on top of each other.
3. **Bad, trend:** still travelling. Needs more warm-up.
4. **Bad, chains at different levels:** not converged, or a multimodal posterior.
5. **Bad, slow snaking:** high autocorrelation, poor mixing.
6. **Bad, flat stretches:** the chain is stuck (rejected proposals or divergences).
7. **Look at every important parameter,** including variance parameters, which misbehave most often.
8. **In R:** `plot(fit)` or `mcmc_trace()` for brms. `traceplot()` for coda and rstan objects.

## See it
![[Trace plots good bad.png|700]]
*What to look at:* the difference between a braided band and separated, wandering lines.

## In R
```r
set.seed(24); good <- replicate(3, rnorm(500)); bad <- replicate(3, cumsum(rnorm(500, 0, 0.15)) + rnorm(1, 0, 2))
op <- par(mfrow = c(1, 2)); matplot(good, type = "l", lty = 1, main = "Good", xlab = "Iteration", ylab = "Value"); matplot(bad, type = "l", lty = 1, main = "Bad", xlab = "Iteration", ylab = "Value"); par(op)
round(c(good = diff(range(colMeans(good))), bad = diff(range(colMeans(bad)))), 2)           # how far apart the chain means are
```

## In the course
`plot(fit)` in the brms labs ([[Course Website]]). [[Hobbs and Hooten 2015 Ch7]].

## Common confusions
- **"A trace plot shows the posterior."** It shows the sampler's path. The density of the draws shows the posterior.

## Explain it back
- Describe three bad patterns and their meaning.

*Pass test:* you can judge convergence from a trace plot.

## Connections
- **Builds on:** [[MCMC Chains]], [[MCMC Convergence]]
- **Leads to:** [[R-hat]], [[Burn-in]], [[Chain Autocorrelation]]
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
