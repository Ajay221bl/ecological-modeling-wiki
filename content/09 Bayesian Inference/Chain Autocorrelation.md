---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Chain autocorrelation is the correlation between an MCMC draw and the draws that came shortly before it, which reduces how much information the chain holds."
aliases:
  - "MCMC autocorrelation"
  - "Autocorrelation of draws"
  - "Autocorrelation plot"
  - "Within-chain correlation"
status: seedling
---

# Chain Autocorrelation

Ask the same person their opinion every five minutes and you get many answers but little new information, because each is nearly the previous one. **Chain autocorrelation** is the correlation between an MCMC draw and the draws shortly before it ([[Correlation]], [[Autocorrelation]]). It happens because each draw is generated from the previous one, so neighbours are alike ([[Markov Chain]]). Lag-k autocorrelation is the correlation between draws k iterations apart, and an autocorrelation plot shows bars for lags 1, 2, 3 and so on; in a good chain they fall to zero within a few lags.

High autocorrelation means slow mixing: the chain needs many steps to cross the posterior. It doesn't bias the estimates, but it makes them noisier than the number of draws suggests, and the [[Effective Sample Size]] turns this into a number. In the code below a "sticky" chain has autocorrelations of 0.95, 0.80 and 0.35 at lags 1, 5 and 20, and its 5,000 draws are worth about 140 independent ones; independent draws have autocorrelations near 0 and an effective size near 4,000 or more.

Causes are a poorly tuned proposal, strongly correlated parameters and a weakly identified model; remedies are running longer, centering predictors, reparameterising or switching to HMC. [[Thinning]] reduces it without adding information, and it shows in a [[Trace Plot]] as slow snaking. Autocorrelated draws are valid draws; there are effectively fewer of them. The same idea in field data over time is [[Temporal Autocorrelation]].

```r
set.seed(27); sticky <- as.numeric(arima.sim(list(ar = 0.95), 5000)); free <- rnorm(5000)
round(rbind(sticky = acf(sticky, plot = FALSE)$acf[c(2, 6, 21)], free = acf(free, plot = FALSE)$acf[c(2, 6, 21)]), 2)      # autocorrelation at lags 1, 5 and 20
c(coda::effectiveSize(sticky), coda::effectiveSize(free))
```

## Connections
- **Builds on:** [[Markov Chain]], [[Correlation]]
- **Leads to:** [[Effective Sample Size]], [[Thinning]], [[Trace Plot]], [[Temporal Autocorrelation]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is chain autocorrelation?
??
Correlation between successive MCMC draws, which reduces the information content of the chain.
++++
