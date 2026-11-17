---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Chain convergence"
  - "Convergence of chains"
  - "Mixing"
  - "Well-mixed chains"
  - "Convergence diagnostics"
status: seedling
---

# MCMC Convergence

**In one line:** MCMC convergence means the chains have forgotten their starting points and are all drawing from the same stable distribution, which we take to be the posterior.

> [!info] Before this, it helps to know
> [[MCMC Chains]] (what converges) · [[Markov Chain]] (the stationary distribution) · [[Burn-in]] (what precedes it)

## The everyday picture
Cream stirred into coffee. At first there are streaks. After enough stirring the colour is uniform, and a spoonful from anywhere looks the same. Convergence is "no more streaks".

## Start from zero
1. **Before convergence:** draws reflect where the chain started.
2. **After:** draws come from the stationary distribution.
3. **You can never prove convergence.** You can only fail to find evidence against it.
4. **Check 1, trace plots:** chains overlap in a stable, fuzzy band with no trend.
5. **Check 2, R-hat:** close to 1 (below 1.01).
6. **Check 3, effective sample size:** large enough for stable summaries.
7. **Check 4 (Stan):** no divergent transitions.
8. **Mixing** describes how quickly a chain moves around the posterior. Good mixing: rapid, wide-ranging moves. Poor mixing: slow drifting.
9. **If it fails:** run longer, improve priors, center or standardise predictors, reparameterise, or simplify the model. Non-convergence is often a symptom of a poorly identified model.
10. **Not the same as the optimiser convergence** of maximum likelihood, which is about reaching a peak.

## See it
![[Trace plots good bad.png|700]]
*What to look at:* left, four chains braided together. Right, chains that sit at different levels and drift.

## In R
```r
set.seed(23); good <- cbind(rnorm(1000), rnorm(1000), rnorm(1000)); bad <- cbind(rnorm(1000, 0), rnorm(1000, 1.5), cumsum(rnorm(1000, 0, 0.1)))
library(coda); f <- function(m) gelman.diag(mcmc.list(lapply(1:3, function(j) mcmc(m[, j]))))$psrf[1]
round(c(good = f(good), bad = f(bad)), 2)
```

## In the course
[[Hobbs and Hooten 2015 Ch7]]. Checked after every fit in the Bayesian labs ([[Course Website]]).

## Common confusions
- **"Convergence means the model is good."** It means the sampler worked. The model can still be wrong.
- **"R-hat below 1.1 proves convergence."** It fails to show a problem. That is weaker.

## Explain it back
- List four convergence checks.

*Pass test:* you can assess convergence from standard output.

## Connections
- **Builds on:** [[MCMC Chains]], [[Markov Chain]]
- **Leads to:** [[R-hat]], [[Trace Plot]], [[Effective Sample Size]], [[Divergent Transitions]], [[Convergence]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[How to check an MCMC fit]]

## Flashcards

What does MCMC convergence mean?
??
The chains are sampling from the same stationary (posterior) distribution, independent of their starting values.
![[Trace plots good bad.png]]
++++

Name three convergence checks.
??
Trace plots, R-hat near 1, adequate effective sample size (and no divergent transitions).
++++
