---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "MCMC convergence means the chains have forgotten their starting points and are all drawing from the same stable distribution, which we take to be the posterior."
aliases:
  - "Chain convergence"
  - "Convergence of chains"
  - "Mixing"
  - "Well-mixed chains"
  - "Convergence diagnostics"
  - "MCMC Convergence Diagnostics"
  - "Gelman-Rubin"
status: seedling
---

# MCMC Convergence

Stir cream into coffee: at first there are streaks, and after enough stirring the colour is uniform and a spoonful from anywhere looks the same. **MCMC convergence** is "no more streaks": the chains have forgotten their starting points and are all drawing from the same stable distribution, which we take to be the posterior ([[MCMC Chains]], [[Markov Chain]]). Before convergence draws reflect where the chain started ([[Burn-in]]); after, they come from the stationary distribution. Mixing describes how quickly a chain moves around the posterior: rapid, wide-ranging moves are good mixing, slow drifting poor.

You can never prove convergence, only fail to find evidence against it. The four checks are: a [[Trace Plot]], where chains should overlap in a stable, fuzzy band with no trend, as on the left of the figure; [[R-hat]], close to 1 and below 1.01; [[Effective Sample Size]], large enough for stable summaries; and, in Stan, no [[Divergent Transitions]]. In the code below, three well-mixed chains give R-hat 1.0 and three that sit at different levels and drift give 1.8.

If the checks fail, run longer, improve priors, center or standardise [[Predictor Variable|predictors]], reparameterise or simplify the model; non-convergence is often a symptom of a poorly identified model. Checks are done after every fit in the Bayesian labs ([[Hobbs and Hooten 2015 Ch7]], [[Course Website]]). MCMC convergence is not the [[Convergence]] of a [[Maximum Likelihood Estimation|maximum likelihood]] optimiser, which is about reaching a peak. Convergence means the sampler worked, not that the model is good. And R-hat below the threshold does not prove convergence; it fails to show a problem, which is weaker.

![[Trace plots good bad.png|700]]
*What to look at:* left, four chains braided together. Right, chains that sit at different levels and drift.

```r
set.seed(23); good <- cbind(rnorm(1000), rnorm(1000), rnorm(1000)); bad <- cbind(rnorm(1000, 0), rnorm(1000, 1.5), cumsum(rnorm(1000, 0, 0.1)))
library(coda); f <- function(m) gelman.diag(mcmc.list(lapply(1:3, function(j) mcmc(m[, j]))))$psrf[1]
round(c(good = f(good), bad = f(bad)), 2)
```

## Connections
- **Builds on:** [[MCMC Chains]], [[Markov Chain]], [[Predictor Variable]], [[Maximum Likelihood Estimation]]
- **Leads to:** [[R-hat]], [[Trace Plot]], [[Effective Sample Size]], [[Divergent Transitions]], [[Convergence]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[How to check an MCMC fit]]

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
