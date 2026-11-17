---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Markov chain Monte Carlo"
  - "Markov Chain Monte Carlo (MCMC)"
  - "MCMC sampling"
  - "MCMC algorithm"
  - "Sampler"
status: seedling
---

# MCMC

**In one line:** Markov chain Monte Carlo is a family of algorithms that produce draws from a posterior distribution by wandering through parameter space in such a way that the time spent in each region is proportional to its posterior probability.

> [!info] Before this, it helps to know
> [[Posterior Distribution]] (the target) · [[Monte Carlo Integration]] (why draws are enough) · [[Markov Chain]] (the wandering) · [[Normalizing Constant]] (what it avoids)

## The everyday picture
A hiker mapping a mountain range in fog. They can't see the whole landscape. They can only feel the height where they stand and one step away. They follow a rule: usually step uphill, sometimes step down. After a long walk, the places visited most often are the high ground. A record of the walk is a map of the range.

## Start from zero
1. **Goal:** draws from the posterior, so that every summary becomes arithmetic on draws.
2. **Obstacle:** the posterior's normalizing constant is unknown, so you can't sample from it directly.
3. **Trick:** build a random walk (a Markov chain) whose long-run distribution is the posterior.
4. **It needs only the unnormalised posterior,** likelihood × prior, at any point.
5. **Each iteration:** from the current values, generate new ones by a rule involving randomness.
6. **Early iterations depend on the starting point.** Discard them (warm-up).
7. **Later iterations are draws from the posterior,** though correlated with their neighbours.
8. **Run several chains** from different starts and check that they agree.
9. **Algorithms:** Metropolis, Metropolis-Hastings, Gibbs, Hamiltonian Monte Carlo (NUTS).
10. **Software:** JAGS (Gibbs and others), Stan and brms (NUTS).

## See it
![[Metropolis walk.png|700]]
*What to look at:* the path of a chain over the posterior's contours, dense where the posterior is high.

## Why it is this way
Posterior ∝ likelihood × prior is easy to write and usually impossible to integrate. Grids fail beyond a few parameters. MCMC, practical since the 1990s, made it possible to fit models with thousands of unknowns, and that is what brought Bayesian methods into everyday ecology.

## In R
```r
set.seed(14); y <- 3; n <- 10; logpost <- function(p) if (p <= 0 || p >= 1) -Inf else dbinom(y, n, p, log = TRUE) + dbeta(p, 1, 1, log = TRUE)
chain <- numeric(20000); cur <- 0.5
for (i in seq_along(chain)) { prop <- cur + rnorm(1, 0, 0.2); if (log(runif(1)) < logpost(prop) - logpost(cur)) cur <- prop; chain[i] <- cur }
keep <- chain[-(1:2000)]; round(c(mean(keep), quantile(keep, c(.025, .975))), 3)
round(c(4 / 12, qbeta(c(.025, .975), 4, 8)), 3)                          # exact answer: the sampler matches it
```

## In the course
[[Hobbs and Hooten 2015 Ch7]]. Every Bayesian lab ([[Course Website]]).

## Common confusions
- **"MCMC is a way of estimating parameters, like least squares."** It is a way of drawing from a distribution. Estimation comes from summarising the draws.
- **"More iterations give more information about the parameter."** They give a better picture of the same posterior.

## Explain it back
- Why does MCMC not need the marginal likelihood?
- What is discarded and why?

*Pass test:* you can explain in plain words how a chain comes to represent the posterior.

## Connections
- **Builds on:** [[Posterior Distribution]], [[Monte Carlo Integration]], [[Markov Chain]]
- **Leads to:** [[Metropolis Algorithm]], [[Gibbs Sampling]], [[Hamiltonian Monte Carlo]], [[MCMC Convergence]], [[Posterior Draws]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[How MCMC turns a formula into a posterior]]

## Flashcards

What is MCMC?
??
A class of algorithms that generate (correlated) draws from a posterior by constructing a Markov chain whose long-run distribution is that posterior.
![[Metropolis walk.png]]
++++

What does MCMC need to know about the posterior?
??
Only its value up to a constant: likelihood × prior.
++++
