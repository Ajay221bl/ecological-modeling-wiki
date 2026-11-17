---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Burn-in is the early part of an MCMC chain that is thrown away because the sampler hadn't yet reached the posterior, or was still tuning itself."
aliases:
  - "Warm-up"
  - "Warmup"
  - "Burn-in (warm-up)"
  - "Adaptation phase"
  - "Burn in"
status: seedling
---

# Burn-in

Let the tap run before filling a glass: the first water has been sitting in the pipes. **Burn-in**, or warm-up, is the early part of an MCMC chain that is thrown away because the sampler hadn't yet reached the posterior, or was still tuning itself ([[MCMC Chains]]). A chain starts at arbitrary [[Initial Values]] and takes a while to travel to the region of high posterior probability; those early draws aren't from the posterior, and keeping them would bias the summaries.

How much to discard is judged from a [[Trace Plot]]: at least until all chains overlap in a stable band, as in the figure, where everything left of the dashed line is discarded. In Stan, warm-up also covers adaptation, when the step size and other settings are tuned ([[Tuning Parameter]]); brms discards the first half by default (`warmup = 1000` of `iter = 2000`). In JAGS, adaptation (`n.adapt`) and burn-in are separate phases. Reported sample sizes exclude it. In the code below, a chain started at 0.99 with small steps has a mean of 0.325 if its first 500 draws are kept and 0.312 once they are removed, against a true posterior mean of 0.304.

Its use appears as `warmup` in the brms labs ([[Course Website]], [[Hobbs and Hooten 2015 Ch7]]). Burn-in does not fix a chain that hasn't converged: if the chains never settle, discarding more doesn't help ([[MCMC Convergence]]). It is different from [[Thinning]], which discards draws throughout the chain.

![[Burn-in.png|700]]
*What to look at:* chains starting far apart, then merging. Everything left of the dashed line is discarded.

```r
set.seed(21); h <- function(p) if (p <= 0 || p >= 1) 0 else dbinom(30, 100, p); cur <- 0.99; out <- numeric(2000)
for (i in 1:2000) { pr <- cur + rnorm(1, 0, 0.02); if (runif(1) < h(pr) / h(cur)) cur <- pr; out[i] <- cur }
round(c(with_burnin_kept = mean(out), burnin_removed = mean(out[-(1:500)]), truth = 31 / 102), 3)
```

## Connections
- **Builds on:** [[MCMC Chains]], [[Initial Values]]
- **Leads to:** [[Trace Plot]], [[MCMC Convergence]], [[Thinning]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is burn-in (warm-up)?
??
The initial portion of an MCMC chain discarded because it reflects the starting values or the adaptation phase.
![[Burn-in.png]]
++++
