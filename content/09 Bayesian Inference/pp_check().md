---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "`pp_check()` draws posterior predictive check plots for a fitted Bayesian model, overlaying data simulated from the model on the observed data."
aliases:
  - "pp_check"
  - "ppc_dens_overlay"
  - "Posterior predictive plots in brms"
status: seedling
---

# pp_check()

**`pp_check()`** draws posterior predictive check plots for a fitted Bayesian model, overlaying data simulated from the model on the observed data ([[Posterior Predictive Check]], [[brms]]). By default it shows the density of the observed y as a dark line over the densities of several simulated datasets in light lines; `ndraws = 100` sets how many simulated datasets to show.

Other types suit other data: `type = "bars"` for counts, and `"hist"`, `"ecdf_overlay"`, `"scatter_avg"` and others. `type = "stat", stat = "mean"` (or `"sd"`, `"max"` or your own function) draws a histogram of the statistic across simulations with the observed value marked, which is the picture behind a [[Bayesian P-value]], and `type = "stat_grouped", group = "site"` does the same by group. For a custom statistic define a function, such as `prop_zero <- function(y) mean(y == 0)`, and pass `stat = "prop_zero"`, as in the code below, which is not run in the wiki build because it needs a brms fit. It comes from the bayesplot package, which brms calls for you.

It is run after every model in the Bayesian labs ([[Course Website]], [[Posterior Predictive Distribution]]). The dark line need not match each light line exactly; it should look like one more member of the family of light lines.

```r
# norun (needs a brms fit)
pp_check(fit, ndraws = 100)
pp_check(fit, type = "bars", ndraws = 200)
prop_zero <- function(y) mean(y == 0)
pp_check(fit, type = "stat", stat = "prop_zero")
```

## Connections
- **Builds on:** [[Posterior Predictive Check]], [[brms]]
- **Leads to:** [[Bayesian P-value]], [[Posterior Predictive Distribution]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What does pp_check() show by default?
??
The density of the observed response overlaid on densities of datasets simulated from the posterior predictive distribution.
++++
