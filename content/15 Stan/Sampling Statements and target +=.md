---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
description: "In Stan, `y ~ normal(mu, sigma)` and `target += normal_lpdf(y | mu, sigma)` both add the log density of the data or prior to `target`, the running total of the log posterior that the sampler explores."
aliases:
  - "target +="
  - "target"
  - "~ in Stan"
  - "Log density"
  - "Sampling statement"
  - "_lpdf"
  - "_lpmf"
  - "log posterior"
status: seedling
---

# Sampling Statements and target +=

A scorekeeper adds points: each line of the model block adds its log density to one running score, and the sampler explores where that score is high. In Stan, `y ~ normal(mu, sigma)` and `target += normal_lpdf(y | mu, sigma)` both add the log density of the data or prior to `target`, the running total of the log posterior ([[Stan Program Blocks]], [[Log-likelihood]], [[Bayes' Theorem]]). The log posterior is log prior + log likelihood + a constant, and multiplying probabilities becomes adding logs, which avoids numbers too small for a computer.

`~` drops constant terms while `target +=` with `_lpdf` keeps them; posteriors are the same, but only `target +=` gives a full log density, which some tools such as bridge sampling need. `_lpdf` is for continuous densities and `_lpmf` for discrete masses, such as `poisson_lpmf`. `target +=` is how you write custom likelihoods, such as mixtures for occupancy with `log_sum_exp(...)`. For example, an all-zero occupancy site is `target += log_sum_exp(log(psi) + binomial_lpmf(0 | K, p), log1m(psi));`, adding the "occupied but missed" and "unoccupied" routes on the probability scale ([[Detection History]], [[Occupancy]]).

These statements are used throughout the Stan labs ([[Course Website]], [[Vectorized Sampling Statements]]). In the model block `~` does not draw a random number; it adds a log density and does not simulate.

## Connections
- **Builds on:** [[Stan Program Blocks]], [[Log-likelihood]], [[Bayes' Theorem]]
- **Leads to:** [[Vectorized Sampling Statements]], [[Jacobian Adjustment]], [[Occupancy]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]], molecular note [[Why Stan works with log densities]]

## Flashcards

What does `y ~ normal(mu, sigma)` do in a Stan model block?
??
Adds the normal log density of y (dropping constants) to target.
++++

What is `target` in Stan?
??
The running total of the log posterior density.
++++
