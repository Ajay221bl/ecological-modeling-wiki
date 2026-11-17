---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "tidybayes package"
  - "spread_draws()"
  - "add_epred_draws()"
  - "stat_halfeye()"
  - "gather_draws()"
status: seedling
---

# tidybayes

**In one line:** tidybayes is an R package that pulls posterior draws out of Bayesian model objects into tidy data frames and offers ggplot2 geoms for plotting distributions.

> [!info] Before this, it helps to know
> [[Posterior Draws]] (what it extracts) · [[Tidy Data]] (the format it produces) · [[ggplot2 Grammar of Graphics]] (how results are plotted)

## Start from zero
1. **`spread_draws(fit, b_tree, b_Intercept)`:** one row per draw, one column per parameter.
2. **`gather_draws()`:** long format, one row per draw per parameter.
3. **Indexed parameters:** `spread_draws(fit, r_site[site, term])` gives one row per draw per site.
4. **`add_epred_draws(newdata, fit)`:** draws of the expected value for each row of new data. `add_predicted_draws()`: draws of new observations. `add_linpred_draws()`: the linear predictor.
5. **Summaries:** `median_qi()`, `mean_hdi()` reduce draws to a point and an interval.
6. **Plots:** `stat_halfeye()` (density plus interval), `stat_lineribbon()` (fitted line with uncertainty bands), `stat_pointinterval()`.
7. **Works with** brms, rstanarm, rstan, JAGS and other outputs.

## In R
```r
# norun (the tidybayes package is not installed in the wiki's build environment)
library(tidybayes); library(dplyr); library(ggplot2)
fit |> spread_draws(b_tree) |> median_qi(b_tree)
fit |> gather_draws(b_Intercept, b_tree) |> ggplot(aes(x = .value, y = .variable)) + stat_halfeye()
tibble(tree = seq(0, 60, 5)) |> add_epred_draws(fit) |>
  ggplot(aes(tree, .epred)) + stat_lineribbon(.width = c(0.5, 0.8, 0.95)) + scale_fill_brewer()
```

## In the course
Used for plotting posteriors in the Bayesian labs ([[Course Website]]).

## Common confusions
- **"epred and predicted draws are the same."** `epred` is the expected value. `predicted` adds observation noise.

## Explain it back
- Which function gives draws of fitted means for new data?

*Pass test:* you can extract draws and plot a posterior with an interval.

## Connections
- **Builds on:** [[Posterior Draws]], [[Tidy Data]]
- **Leads to:** [[brms]], [[Posterior Predictive Distribution]], [[Plotting Model Predictions with Ribbons]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What does tidybayes do?
??
Extracts posterior draws into tidy data frames and provides ggplot2 geoms for visualising posterior distributions.
++++
