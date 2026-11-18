---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Tidybayes is an R package that pulls posterior draws out of Bayesian model objects into tidy data frames and offers ggplot2 geoms for plotting distributions."
aliases:
  - "tidybayes package"
  - "spread_draws()"
  - "add_epred_draws()"
  - "stat_halfeye()"
  - "gather_draws()"
status: seedling
---

# tidybayes

**tidybayes** is an [[Packages in R|R package]] that pulls [[Posterior Draws]] out of Bayesian model objects into tidy data frames and offers ggplot2 [[Geoms|geoms]] for plotting distributions ([[Tidy Data]], [[ggplot2 Grammar of Graphics]]). `spread_draws(fit, b_tree, b_Intercept)` gives one row per draw and one column per parameter; `gather_draws()` gives long format, one row per draw per parameter; and indexed parameters such as `spread_draws(fit, r_site[site, term])` give one row per draw per site.

`add_epred_draws(newdata, fit)` gives draws of the [[Expected Value|expected value]] for each row of new data, `add_predicted_draws()` draws of new observations ([[Posterior Predictive Distribution]]) and `add_linpred_draws()` the [[Linear Predictor|linear predictor]]. `median_qi()` and `mean_hdi()` reduce draws to a point and an interval. For plots, `stat_halfeye()` shows a density plus interval, `stat_lineribbon()` a fitted line with uncertainty bands ([[Plotting Model Predictions with Ribbons]]) and `stat_pointinterval()` a point and interval. It works with [[brms]], rstanarm, [[Running Stan from R|rstan]], JAGS and other outputs. The code below, not run in the wiki build because the package is not installed there, summarises a slope, plots two parameters' posteriors and draws a fitted curve with 50%, 80% and 95% bands.

It is used for plotting posteriors in the Bayesian labs ([[Course Website]]). epred and predicted draws are not the same: `epred` is the expected value, and `predicted` adds observation noise.

```r
# norun (the tidybayes package is not installed in the wiki's build environment)
library(tidybayes); library(dplyr); library(ggplot2)
fit |> spread_draws(b_tree) |> median_qi(b_tree)
fit |> gather_draws(b_Intercept, b_tree) |> ggplot(aes(x = .value, y = .variable)) + stat_halfeye()
tibble(tree = seq(0, 60, 5)) |> add_epred_draws(fit) |>
  ggplot(aes(tree, .epred)) + stat_lineribbon(.width = c(0.5, 0.8, 0.95)) + scale_fill_brewer()
```

## Connections
- **Builds on:** [[Posterior Draws]], [[Tidy Data]], [[Packages in R]], [[Geoms]], [[Expected Value]], [[Linear Predictor]]
- **Leads to:** [[brms]], [[Posterior Predictive Distribution]], [[Plotting Model Predictions with Ribbons]], [[Running Stan from R]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What does tidybayes do?
??
Extracts posterior draws into tidy data frames and provides ggplot2 geoms for visualising posterior distributions.
++++
