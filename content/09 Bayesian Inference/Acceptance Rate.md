---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Acceptance ratio"
  - "Acceptance probability"
  - "Metropolis ratio"
  - "Proportion accepted"
status: seedling
---

# Acceptance Rate

**In one line:** the acceptance rate is the fraction of proposed moves that an MCMC sampler accepts, a gauge of whether its step size is well matched to the posterior.

> [!info] Before this, it helps to know
> [[Metropolis Algorithm]] (where proposals are accepted or not) · [[Proposal Distribution]] (what determines it)

## The everyday picture
A batting average for the sampler's suggestions. Near 100% means it is only suggesting timid moves. Near 0% means its suggestions are wild.

## Start from zero
1. **For one step:** the acceptance probability is min(1, R), with R the ratio of posterior densities (the acceptance ratio).
2. **Over a run:** acceptance rate = accepted proposals / total proposals.
3. **Very high (above 90%)** in random-walk Metropolis: steps too small.
4. **Very low (below 5%):** steps too large.
5. **Good range for random-walk Metropolis:** about 20 to 50% (theory suggests about 44% for one parameter and about 23% for many).
6. **Different algorithms have different targets.** Gibbs accepts 100% by construction. Stan's NUTS aims for about 80% (`adapt_delta = 0.8`) on its own acceptance statistic.
7. **A good rate isn't proof of convergence.** It is one check among several.

## In R
```r
h <- function(p) if (p <= 0 || p >= 1) 0 else dbinom(30, 100, p); min(1, h(0.35) / h(0.30)); min(1, h(0.28) / h(0.30))      # acceptance probabilities for a downhill and a slightly downhill move
```

## In the course
[[Hobbs and Hooten 2015 Ch7]].

## Common confusions
- **"A higher acceptance rate is better."** In random-walk Metropolis a rate near 100% signals inefficiency.

## Explain it back
- What does a 99% acceptance rate tell you about a Metropolis sampler?

*Pass test:* you can interpret an acceptance rate.

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
