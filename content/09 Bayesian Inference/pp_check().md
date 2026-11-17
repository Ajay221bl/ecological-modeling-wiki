---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "pp_check"
  - "ppc_dens_overlay"
  - "Posterior predictive plots in brms"
status: seedling
---

# pp_check()

**In one line:** `pp_check()` draws posterior predictive check plots for a fitted Bayesian model, overlaying data simulated from the model on the observed data.

> [!info] Before this, it helps to know
> [[Posterior Predictive Check]] (the concept) · [[brms]] (where it is called)

## Start from zero
1. **`pp_check(fit)`:** density of the observed y (dark) over densities of several simulated datasets (light).
2. **`ndraws = 100`:** how many simulated datasets to show.
3. **`type = "bars"`:** for counts. `"hist"`, `"ecdf_overlay"`, `"scatter_avg"` and others are available.
4. **`type = "stat", stat = "mean"`** (or `"sd"`, `"max"`, or your own function): a histogram of the statistic across simulations with the observed value marked.
5. **`type = "stat_grouped", group = "site"`:** the same by group.
6. **For a custom statistic** define a function, such as `prop_zero <- function(y) mean(y == 0)`, and pass `stat = "prop_zero"`.
7. **It comes from the bayesplot package,** which brms calls for you.

## In R
```r
# norun (needs a brms fit)
pp_check(fit, ndraws = 100)
pp_check(fit, type = "bars", ndraws = 200)
prop_zero <- function(y) mean(y == 0)
pp_check(fit, type = "stat", stat = "prop_zero")
```

## In the course
Run after every model in the Bayesian labs ([[Course Website]]).

## Common confusions
- **"The dark line should match each light line."** It should look like one more member of the family of light lines.

## Explain it back
- How do you check the proportion of zeros?

*Pass test:* you can produce density and statistic checks.

## Connections
- **Builds on:** [[Posterior Predictive Check]], [[brms]]
- **Leads to:** [[Bayesian P-value]], [[Posterior Predictive Distribution]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What does pp_check() show by default?
??
The density of the observed response overlaid on densities of datasets simulated from the posterior predictive distribution.
++++
