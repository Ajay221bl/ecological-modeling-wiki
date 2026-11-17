---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Chain"
  - "Chains"
  - "Multiple chains"
  - "Number of chains"
  - "Chains and Initial Values"
status: seedling
---

# MCMC Chains

**In one line:** a chain is one complete run of an MCMC sampler from one starting point, and several chains are run so that their agreement can be checked.

> [!info] Before this, it helps to know
> [[MCMC]] (what a chain is a run of) · [[Initial Values]] (where each begins)

## The everyday picture
Several search parties sent into the same forest from different edges. If they all end up circling the same clearing, you can believe the clearing is the place. One party alone might have been lost in a side valley without knowing it.

## Start from zero
1. **One chain:** a sequence of draws, each depending on the last.
2. **A single chain can't reveal that it is stuck** in one part of the posterior.
3. **Run several (usually 4)** from different, dispersed starting values.
4. **If they converge to the same distribution,** that is evidence the sampler found the posterior.
5. **R-hat compares variation between chains with variation within them.**
6. **After warm-up, the chains are combined** into one pool of draws.
7. **Chains run in parallel** on separate processor cores (`cores = 4`).
8. **brms default:** 4 chains × 2000 iterations, half of them warm-up, giving 4000 kept draws.

## In R
```r
set.seed(20); h <- function(p) if (p <= 0 || p >= 1) 0 else dbinom(30, 100, p)
one <- function(start) { cur <- start; out <- numeric(3000); for (i in 1:3000) { pr <- cur + rnorm(1, 0, .1); if (runif(1) < h(pr) / h(cur)) cur <- pr; out[i] <- cur }; out }
ch <- sapply(c(0.05, 0.35, 0.65, 0.95), one); round(colMeans(ch[-(1:500), ]), 3)          # four chains, four starts, one answer
```

## In the course
`chains = 4` in the labs ([[Course Website]]). [[Hobbs and Hooten 2015 Ch7]].

## Common confusions
- **"One long chain is as good as four."** It can't show you whether a second chain would have gone elsewhere.

## Explain it back
- Why run more than one chain?

*Pass test:* you can say what chains are and why four are run.

## Connections
- **Builds on:** [[MCMC]], [[Initial Values]]
- **Leads to:** [[R-hat]], [[Trace Plot]], [[MCMC Convergence]], [[Burn-in]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

Why are multiple MCMC chains run?
??
So that agreement between chains started from different values can be used to assess convergence.
++++
