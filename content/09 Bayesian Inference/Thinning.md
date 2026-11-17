---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Thinning means keeping only every k-th draw of an MCMC chain and discarding the rest."
aliases:
  - "Thin"
  - "Thinning interval"
  - "Thinning rate"
  - "n.thin"
status: seedling
---

# Thinning

Taking a photo every tenth step of a slow walk makes successive photos look more different and the album smaller, but the album can't hold more information than the walk did. **Thinning** means keeping only every k-th draw of an MCMC chain and discarding the rest ([[MCMC Chains]]). Because consecutive draws are correlated, the kept draws are less correlated ([[Chain Autocorrelation]]).

The main legitimate reason to thin is memory and storage, since long chains with many parameters make large files. It doesn't improve accuracy: discarding draws loses information, and an unthinned chain of 10,000 is at least as accurate as the same chain thinned to 1,000. In the code below, a strongly autocorrelated chain of 20,000 draws has an [[Effective Sample Size]] of about 1,070; thinned by 10 it falls to about 820.

So thinning isn't a cure for autocorrelation; run longer or reparameterise. With HMC autocorrelation is low and thinning is rarely needed, and `thin = 1` is the brms default ([[Hobbs and Hooten 2015 Ch7]]). Summaries don't require independent draws, only enough effective ones. Thinning is not [[Burn-in]], which removes the start of the chain.

```r
set.seed(22); x <- as.numeric(arima.sim(list(ar = 0.9), 20000))           # a strongly autocorrelated chain
c(full = unname(coda::effectiveSize(x)), thinned_by_10 = unname(coda::effectiveSize(x[seq(1, 20000, 10)])))      # thinning doesn't add information
```

## Connections
- **Builds on:** [[Chain Autocorrelation]]
- **Leads to:** [[Effective Sample Size]], [[Burn-in]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is thinning?
??
Keeping only every k-th MCMC draw.
++++

Does thinning improve the precision of posterior summaries?
??
No. It mainly saves memory. The full chain contains at least as much information.
++++
