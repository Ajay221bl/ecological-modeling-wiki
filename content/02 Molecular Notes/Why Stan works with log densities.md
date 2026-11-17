---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - stan
aliases: []
status: seedling
---

# Why Stan works with log densities

> [!summary] In plain words
> Stan adds log densities instead of multiplying probabilities because products of many small numbers underflow to zero on a computer, and because HMC needs smooth gradients of the log posterior.

## The question
Why does Stan use target += and log densities instead of probabilities?

## Built from
- [[Sampling Statements and target +=]].
- [[Log-likelihood]] and [[Logarithm]].
- [[Hamiltonian Monte Carlo]].

## The reasoning, step by step
1. **Likelihood is a product** over observations; log turns it into a sum.
2. **Underflow:** 0.01 multiplied 200 times is 10⁻⁴⁰⁰, smaller than a double can store (about 10⁻³⁰⁸); its log, −921, is easy.
3. **Bayes in logs:** log posterior = log prior + log likelihood − log evidence; the last is constant and ignored.
4. **HMC uses the gradient** of the log posterior as a force; logs make this smooth and well-scaled.
5. **Mixtures** (occupancy, zero-inflation) need log_sum_exp to add probabilities stored as logs.

## So in practice
When writing custom likelihoods, stay on the log scale throughout, and use log1m(x) for log(1 − x) and log_sum_exp for sums.

## In R
```r
p <- rep(0.01, 200); c(product = prod(p), sum_of_logs = sum(log(p)))
```

## What would go wrong otherwise
Computing a likelihood as a product in generated quantities and getting 0 for every draw.

## Explain it back
- What is the log of 0.01²⁰⁰?

*Pass test:* you can explain why Stan uses log densities.

## Connections
- **Related:** [[Writing a Stan Model Step by Step]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 17 - Stan|MOC - Stan]]

## Flashcards

Why does Stan work on the log scale?
??
Products of many small probabilities underflow, and HMC needs smooth gradients of the log posterior.
++++
