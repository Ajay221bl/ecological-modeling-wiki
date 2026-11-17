---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Thin"
  - "Thinning interval"
  - "Thinning rate"
  - "n.thin"
status: seedling
---

# Thinning

**In one line:** thinning means keeping only every k-th draw of an MCMC chain and discarding the rest.

> [!info] Before this, it helps to know
> [[Chain Autocorrelation]] (what it reduces) · [[MCMC Chains]] (what is thinned)

## The everyday picture
Taking a photo every tenth step of a slow walk. Successive photos now look more different from each other, and the album is smaller. But the album can't hold more information than the walk did.

## Start from zero
1. **Consecutive draws are correlated.**
2. **Keep every k-th draw:** the kept draws are less correlated.
3. **Main legitimate reason: memory and storage.** Long chains with many parameters make large files.
4. **It doesn't improve accuracy.** Discarding draws loses information. An unthinned chain of 10,000 is at least as accurate as the same chain thinned to 1,000.
5. **So thinning isn't a cure for autocorrelation.** Run longer, or reparameterise.
6. **With HMC** autocorrelation is low and thinning is rarely needed (`thin = 1` is the brms default).

## In R
```r
set.seed(22); x <- as.numeric(arima.sim(list(ar = 0.9), 20000))           # a strongly autocorrelated chain
c(full = unname(coda::effectiveSize(x)), thinned_by_10 = unname(coda::effectiveSize(x[seq(1, 20000, 10)])))      # thinning doesn't add information
```

## In the course
[[Hobbs and Hooten 2015 Ch7]].

## Common confusions
- **"Thinning is needed to get independent samples."** Summaries don't require independent draws. They need enough effective draws.

## Explain it back
- What is the one good reason to thin?

*Pass test:* you can explain why thinning doesn't improve precision.

## Connections
- **Builds on:** [[Chain Autocorrelation]]
- **Leads to:** [[Effective Sample Size]], [[Burn-in]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What is thinning?
??
Keeping only every k-th MCMC draw.
++++

Does thinning improve the precision of posterior summaries?
??
No. It mainly saves memory. The full chain contains at least as much information.
++++
