---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Ubms is an R package that fits the same occupancy and abundance models as unmarked, with the same formula style, but in a Bayesian way using Stan, which makes random effects easy."
aliases:
  - "ubms"
  - "stan_occu()"
status: seedling
---

# ubms Package

If unmarked is a calculator that gives you one best answer, ubms is the same calculator with a "show me every plausible answer" button. **ubms** is an [[Packages in R|R package]] that fits the same occupancy and abundance models as unmarked, with the same formula style, but in a Bayesian way using Stan ([[unmarked Package]], [[Stan]], [[Bayesian Inference]]). You build the same `unmarkedFrameOccu` data object and call `stan_occu(~ detection ~ occupancy, data)`; the result is a set of [[Posterior Draws|posterior draws]] for ψ and p rather than one maximum-likelihood estimate ([[Posterior Distribution]]).

The guest lecture lists it for "random effects", and that is its main reason to exist: you can write `(1 | region)` inside the occupancy formula, as in lme4, to let occupancy vary among regions or observers that you cannot measure ([[Random Effect]], [[Random Intercept]]). That is one cure for [[Unexplained Heterogeneity in Occupancy]] or in detection. Because it runs MCMC, you check it like any Bayesian fit: [[R-hat]] near 1, enough effective draws, and [[Posterior Predictive Check|posterior predictive checks]] ([[MCMC|Markov Chain Monte Carlo]]). The code below is shown but not run, since ubms is not installed in this wiki's R.

It is listed on the "Occupancy Software" slide of the [[Occupancy Guest Lecture]]. ubms is not a different model from unmarked's `occu()`: with vague priors and no random effects the two give almost the same ψ and p; the difference is how uncertainty is described and how easily extra structure is added.

```r
# norun (ubms is not installed here)
library(ubms)
umf <- unmarkedFrameOccu(y = y, siteCovs = data.frame(forest = forest, region = region), obsCovs = list(wind = wind))
fit <- stan_occu(~ wind ~ forest + (1 | region), data = umf, chains = 3, iter = 1500)
fit                       # posterior means, intervals, R-hat
predict(fit, submodel = "state")
```

## Connections
- **Builds on:** [[unmarked Package]], [[Stan]], [[Random Effect]], [[Packages in R]], [[Posterior Draws]], [[Posterior Predictive Check]]
- **Leads to:** [[Posterior Distribution]], [[R-hat]], [[spOccupancy Package]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Choosing Occupancy Software]]

## Flashcards

What does ubms add to unmarked-style occupancy models?
??
Bayesian fitting with Stan and easy random effects such as (1 | region) in the formula.
++++

Which ubms function fits a single-season occupancy model?
??
stan_occu().
++++
