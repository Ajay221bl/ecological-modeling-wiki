---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "The acceptance rate is the fraction of proposed moves that an MCMC sampler accepts, a gauge of whether its step size is well matched to the posterior."
aliases:
  - "Acceptance ratio"
  - "Acceptance probability"
  - "Metropolis ratio"
  - "Proportion accepted"
status: seedling
---

# Acceptance Rate

A batting average for the sampler's suggestions: near 100% means it is only suggesting timid moves, near 0% that its suggestions are wild. The **acceptance rate** is the fraction of proposed moves that an MCMC sampler accepts, a gauge of whether its step size is well matched to the posterior ([[Metropolis Algorithm]], [[Proposal Distribution]]). For one step the acceptance probability is min(1, R), with R the ratio of posterior densities; over a run, the rate is accepted proposals divided by total proposals. In the code below, with 30 successes in 100 trials and a current value of 0.30, a move to 0.35 is accepted with probability 0.57 and a move to 0.28 with probability 0.91.

For random-walk Metropolis, above about 90% means steps are too small and below about 5% that they are too large; a good range is about 20 to 50%, with theory suggesting about 44% for one parameter and about 23% for many ([[Tuning Parameter]]). Different algorithms have different targets. Gibbs accepts 100% by construction, and Stan's NUTS aims for about 80% on its own acceptance statistic, set by `adapt_delta = 0.8` ([[Hamiltonian Monte Carlo]]).

A good acceptance rate isn't proof of convergence; it is one check among several ([[Hobbs and Hooten 2015 Ch7]]). Higher is not better: in random-walk Metropolis a rate near 100% signals inefficiency.

```r
h <- function(p) if (p <= 0 || p >= 1) 0 else dbinom(30, 100, p); min(1, h(0.35) / h(0.30)); min(1, h(0.28) / h(0.30))      # acceptance probabilities for a downhill and a slightly downhill move
```

## Connections
- **Builds on:** [[Metropolis Algorithm]], [[Proposal Distribution]]
- **Leads to:** [[Tuning Parameter]], [[Hamiltonian Monte Carlo]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is the acceptance rate?
??
The proportion of proposed MCMC moves that are accepted.
++++

What acceptance rate is roughly ideal for random-walk Metropolis?
??
About 20 to 50% (around 23% in high dimensions).
++++
