---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A chain is one complete run of an MCMC sampler from one starting point, and several chains are run so that their agreement can be checked."
aliases:
  - "Chain"
  - "Chains"
  - "Multiple chains"
  - "Number of chains"
  - "Chains and Initial Values"
status: seedling
---

# MCMC Chains

Send several search parties into a forest from different edges: if they all end up circling the same clearing, you can believe the clearing is the place, while one party alone might be lost in a side valley without knowing it. A **chain** is one complete run of an MCMC sampler from one starting point, a sequence of draws each depending on the last ([[MCMC]], [[Initial Values]]). A single chain can't reveal that it is stuck in one part of the posterior, so several, usually 4, are run from different, dispersed starting values. If they converge to the same distribution, that is evidence the sampler found the posterior.

[[R-hat]] compares variation between chains with variation within them, and a [[Trace Plot]] shows the chains side by side ([[MCMC Convergence]]). After warm-up the chains are combined into one pool of draws ([[Burn-in]]). They run in parallel on separate processor cores with `cores = 4`, and the brms default is 4 chains of 2,000 iterations, half warm-up, giving 4,000 kept draws. In the code below, four chains started at 0.05, 0.35, 0.65 and 0.95 settle at means of 0.303, 0.305, 0.301 and 0.304: four starts, one answer.

The labs use `chains = 4` ([[Course Website]], [[Hobbs and Hooten 2015 Ch7]]). One long chain is not as good as four, because it can't show whether a second chain would have gone elsewhere.

```r
set.seed(20); h <- function(p) if (p <= 0 || p >= 1) 0 else dbinom(30, 100, p)
one <- function(start) { cur <- start; out <- numeric(3000); for (i in 1:3000) { pr <- cur + rnorm(1, 0, .1); if (runif(1) < h(pr) / h(cur)) cur <- pr; out[i] <- cur }; out }
ch <- sapply(c(0.05, 0.35, 0.65, 0.95), one); round(colMeans(ch[-(1:500), ]), 3)          # four chains, four starts, one answer
```

## Connections
- **Builds on:** [[MCMC]], [[Initial Values]]
- **Leads to:** [[R-hat]], [[Trace Plot]], [[MCMC Convergence]], [[Burn-in]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

Why are multiple MCMC chains run?
??
So that agreement between chains started from different values can be used to assess convergence.
++++
