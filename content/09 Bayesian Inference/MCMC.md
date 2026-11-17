---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Markov chain Monte Carlo is a family of algorithms that produce draws from a posterior distribution by wandering through parameter space in such a way that the time spent in each region is proportional to its posterior probability."
aliases:
  - "Markov chain Monte Carlo"
  - "Markov Chain Monte Carlo (MCMC)"
  - "MCMC sampling"
  - "MCMC algorithm"
  - "Sampler"
status: seedling
---

# MCMC

A hiker mapping a mountain range in fog can feel only the height where they stand and one step away. They follow a rule, usually stepping uphill and sometimes down, and after a long walk the places visited most often are the high ground; a record of the walk is a map of the range. **Markov chain Monte Carlo** (MCMC) is a family of algorithms that work this way: they wander through parameter space so that the time spent in each region is proportional to its posterior probability ([[Posterior Distribution]]). The goal is draws from the posterior, so that every summary becomes arithmetic on draws ([[Monte Carlo Integration]]). The obstacle is that the posterior's [[Normalizing Constant]] is unknown, so you can't sample from it directly; the trick is a random walk, a [[Markov Chain]], whose long-run distribution is the posterior and which needs only likelihood × prior at any point.

Each iteration generates new values from the current ones by a rule involving randomness. Early iterations depend on the starting point and are discarded ([[Burn-in]]); later ones are draws from the posterior, though correlated with their neighbours. Several chains are run from different starts and checked for agreement ([[MCMC Chains]], [[MCMC Convergence]]). Algorithms include the [[Metropolis Algorithm]], Metropolis-Hastings, [[Gibbs Sampling]] and [[Hamiltonian Monte Carlo]]; JAGS mainly uses Gibbs, and Stan and brms use NUTS. The figure shows a chain's path over the posterior's contours, dense where the posterior is high. In the code below a 20-line Metropolis sampler for 3 occupied ponds out of 10 gives a mean of 0.33 and an interval of 0.11 to 0.60, matching the exact Beta(4, 8) answer of 0.33, 0.11 and 0.61 ([[Posterior Draws]]).

Posterior ∝ likelihood × prior is easy to write and usually impossible to integrate, and grids fail beyond a few parameters. MCMC, practical since the 1990s, made it possible to fit models with thousands of unknowns, which brought Bayesian methods into everyday ecology; it is used in every Bayesian lab ([[Hobbs and Hooten 2015 Ch7]], [[Course Website]]). MCMC is not an estimation method like least squares: it draws from a distribution, and estimates come from summarising the draws. More iterations give a better picture of the same posterior, not more information about the parameter.

![[Metropolis walk.png|700]]
*What to look at:* the path of a chain over the posterior's contours, dense where the posterior is high.

```r
set.seed(14); y <- 3; n <- 10; logpost <- function(p) if (p <= 0 || p >= 1) -Inf else dbinom(y, n, p, log = TRUE) + dbeta(p, 1, 1, log = TRUE)
chain <- numeric(20000); cur <- 0.5
for (i in seq_along(chain)) { prop <- cur + rnorm(1, 0, 0.2); if (log(runif(1)) < logpost(prop) - logpost(cur)) cur <- prop; chain[i] <- cur }
keep <- chain[-(1:2000)]; round(c(mean(keep), quantile(keep, c(.025, .975))), 3)
round(c(4 / 12, qbeta(c(.025, .975), 4, 8)), 3)                          # exact answer: the sampler matches it
```

## Connections
- **Builds on:** [[Posterior Distribution]], [[Monte Carlo Integration]], [[Markov Chain]]
- **Leads to:** [[Metropolis Algorithm]], [[Gibbs Sampling]], [[Hamiltonian Monte Carlo]], [[MCMC Convergence]], [[Posterior Draws]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[How MCMC turns a formula into a posterior]]

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
