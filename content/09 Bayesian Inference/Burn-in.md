---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Warm-up"
  - "Warmup"
  - "Burn-in (warm-up)"
  - "Adaptation phase"
  - "Burn in"
status: seedling
---

# Burn-in

**In one line:** burn-in is the early part of an MCMC chain that is thrown away because the sampler hadn't yet reached the posterior, or was still tuning itself.

> [!info] Before this, it helps to know
> [[MCMC Chains]] (what is being trimmed) · [[Initial Values]] (whose influence it removes) · [[Tuning Parameter]] (adapted during it)

## The everyday picture
Letting the tap run before filling a glass. The first water has been sitting in the pipes. You let it go and keep what comes after.

## Start from zero
1. **A chain starts at arbitrary values.**
2. **It takes a while to travel to the region of high posterior probability.**
3. **Those early draws aren't from the posterior.** Keeping them would bias the summaries.
4. **So discard the first part.**
5. **How much?** Look at trace plots: discard at least until all chains overlap in a stable band.
6. **"Warm-up" in Stan** also covers adaptation, when step size and other settings are tuned. brms discards the first half by default (`warmup = 1000` of `iter = 2000`).
7. **In JAGS** adaptation (`n.adapt`) and burn-in are separate phases.
8. **Reported sample sizes exclude it.**

## See it
![[Burn-in.png|700]]
*What to look at:* chains starting far apart, then merging. Everything left of the dashed line is discarded.

## In R
```r
set.seed(21); h <- function(p) if (p <= 0 || p >= 1) 0 else dbinom(30, 100, p); cur <- 0.99; out <- numeric(2000)
for (i in 1:2000) { pr <- cur + rnorm(1, 0, 0.02); if (runif(1) < h(pr) / h(cur)) cur <- pr; out[i] <- cur }
round(c(with_burnin_kept = mean(out), burnin_removed = mean(out[-(1:500)]), truth = 31 / 102), 3)
```

## In the course
`warmup` in the brms labs ([[Course Website]]). [[Hobbs and Hooten 2015 Ch7]].

## Common confusions
- **"Burn-in fixes a chain that hasn't converged."** If the chains never settle, discarding more doesn't help.

## Explain it back
- Why are warm-up draws discarded?

*Pass test:* you can choose a burn-in length from a trace plot.

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
