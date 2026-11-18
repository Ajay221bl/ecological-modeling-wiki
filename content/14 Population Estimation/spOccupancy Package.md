---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "SpOccupancy is an R package that fits Bayesian single-species, multi-species and spatial occupancy models quickly, using a spatial random effect to soak up spatial autocorrelation among sites."
aliases:
  - "spOccupancy"
  - "spPGOcc()"
  - "PGOcc()"
status: seedling
---

# spOccupancy Package

When neighbouring sites tend to be occupied together because of things you did not measure, a plain [[Occupancy Model|occupancy model]] treats them as independent and gets overconfident. **spOccupancy** is an [[Packages in R|R package]] that fits Bayesian single-species, multi-species and spatial occupancy models, adding a spatial random effect so that nearby sites can share unexplained ups and downs in occupancy ([[Spatial Autocorrelation]], [[Random Effect]], [[Bayesian Inference]]). Its spatial models use a nearest-neighbour [[Normal Distribution|Gaussian]] process, a shortcut that makes spatial models feasible for thousands of sites ([[Gaussian Process Smooths]]).

Its functions follow a naming pattern: `PGOcc()` for a non-spatial single-species model, `spPGOcc()` for a spatial one, and `msPGOcc()` for multiple species. You pass a list with the detection matrix y, [[Site Covariates|occupancy covariates]], [[Detection Covariates|detection covariates]] and site coordinates, plus formulas for occupancy and detection. The output is [[Posterior Draws|MCMC draws]], checked with R-hat and [[Effective Sample Size|effective sample size]], with [[Posterior Predictive Check|posterior predictive checks]] through `ppcOcc()` and [[Model Selection|model comparison]] by WAIC through `waicOcc()` ([[R-hat]], [[WAIC]]). The code below is shown but not run, because spOccupancy is not installed in this wiki's R.

It is listed on the "Occupancy Software" slide of the [[Occupancy Guest Lecture]]. It is a direct answer to the [[Site Independence Assumption]] when sites cannot be spaced far apart. A spatial random effect is not a habitat [[Predictor Variable|covariate]]: it absorbs unexplained spatial pattern, so a strong spatial effect is a hint that something important is missing from the model ([[Why residual autocorrelation can mean a missing covariate]]).

```r
# norun (spOccupancy is not installed here)
library(spOccupancy)
dat <- list(y = y, occ.covs = data.frame(forest = forest), det.covs = list(wind = wind), coords = xy)
fit <- spPGOcc(occ.formula = ~ forest, det.formula = ~ wind, data = dat, cov.model = "exponential",
               NNGP = TRUE, n.neighbors = 5, n.batch = 400, batch.length = 25, n.burn = 5000, n.chains = 3)
summary(fit); waicOcc(fit)
```

## Connections
- **Builds on:** [[Spatial Autocorrelation]], [[Random Effect]], [[Bayesian Inference]], [[Packages in R]], [[Site Covariates]], [[Posterior Draws]], [[Effective Sample Size]], [[Posterior Predictive Check]], [[Model Selection]], [[Predictor Variable]], [[Normal Distribution]]
- **Leads to:** [[Site Independence Assumption]], [[WAIC]], [[ubms Package]], [[Occupancy Model]], [[Detection Covariates]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Choosing Occupancy Software]]

## Flashcards

What problem does spOccupancy's spatial model address?
??
Spatial autocorrelation among sites, via a spatial random effect (nearest-neighbour Gaussian process).
++++

Which spOccupancy function fits a spatial single-species occupancy model?
??
spPGOcc().
++++
