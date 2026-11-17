---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
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

**In one line:** in Stan, `y ~ normal(mu, sigma)` and `target += normal_lpdf(y | mu, sigma)` both add the log density of the data or prior to `target`, the running total of the log posterior that the sampler explores.

> [!info] Before this, it helps to know
> [[Stan Program Blocks]] · [[Log-likelihood]] · [[Bayes' Theorem]]

## The everyday picture
A scorekeeper adding points. Each line of the model block adds its log density to one running score; the sampler then explores where that score is high.

## A tiny example
Occupancy likelihood for an all-zero site, written by hand:
`target += log_sum_exp(log(psi) + binomial_lpmf(0 | K, p), log1m(psi));`

## Start from zero
1. **Log posterior = log prior + log likelihood + constant.**
2. **`target`** holds that sum for the current parameter values.
3. **`~` drops constant terms;** `target +=` with `_lpdf` keeps them. Posteriors are the same; only `target +=` gives a full log density (needed for some tools like bridge sampling).
4. **`_lpdf`** is for continuous densities; **`_lpmf`** for discrete masses (poisson_lpmf).
5. **`target +=` is how you write custom likelihoods,** such as mixtures for occupancy: `log_sum_exp(...)`.
6. **Multiplying probabilities becomes adding logs,** which avoids numbers too small for a computer.

## In the course
Stan labs ([[Course Website]]).

## Common confusions
- **"`~` draws a random number."** In the model block it adds a log density; it does not simulate.

## Explain it back
- What is the difference between `~` and `target +=`?

*Pass test:* you can write a likelihood with either form.

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
