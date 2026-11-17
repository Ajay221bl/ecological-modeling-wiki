---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "MCMC autocorrelation"
  - "Autocorrelation of draws"
  - "Autocorrelation plot"
  - "Within-chain correlation"
status: seedling
---

# Chain Autocorrelation

**In one line:** chain autocorrelation is the correlation between an MCMC draw and the draws that came shortly before it, which reduces how much information the chain holds.

> [!info] Before this, it helps to know
> [[Markov Chain]] (why it happens) · [[Correlation]] (what is measured) · [[Autocorrelation]] (the general concept)

## The everyday picture
Asking the same person for their opinion every five minutes. You get many answers and not much new information, because each answer is nearly the previous one.

## Start from zero
1. **Each draw is generated from the previous one.** So neighbours are alike.
2. **Lag-k autocorrelation:** the correlation between draws k iterations apart.
3. **Autocorrelation plot:** bars for lags 1, 2, 3, ... In a good chain they fall to zero within a few lags.
4. **High autocorrelation means slow mixing.** The chain needs many steps to cross the posterior.
5. **It doesn't bias the estimates.** It makes them noisier than the number of draws suggests.
6. **Effective sample size turns this into a number.**
7. **Causes:** a poorly tuned proposal, strongly correlated parameters, a weakly identified model.
8. **Remedies:** run longer, center predictors, reparameterise, switch to HMC.

## In R
```r
set.seed(27); sticky <- as.numeric(arima.sim(list(ar = 0.95), 5000)); free <- rnorm(5000)
round(rbind(sticky = acf(sticky, plot = FALSE)$acf[c(2, 6, 21)], free = acf(free, plot = FALSE)$acf[c(2, 6, 21)]), 2)      # autocorrelation at lags 1, 5 and 20
c(coda::effectiveSize(sticky), coda::effectiveSize(free))
```

## Common confusions
- **"Autocorrelated draws are invalid."** They are valid draws. There are effectively fewer of them.

## Explain it back
- What does high lag-1 autocorrelation imply for effective sample size?

*Pass test:* you can read an autocorrelation plot of a chain.

## Connections
- **Builds on:** [[Markov Chain]], [[Correlation]]
- **Leads to:** [[Effective Sample Size]], [[Thinning]], [[Trace Plot]], [[Temporal Autocorrelation]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is chain autocorrelation?
??
Correlation between successive MCMC draws, which reduces the information content of the chain.
++++
