---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`tidy()` from the broom package turns a fitted model's coefficient table into an ordinary data frame."
aliases:
  - "broom tidy"
  - "broom package"
  - "broom.mixed"
status: seedling
---

# tidy()

Pour a cluttered toolbox onto a pegboard and the same tools hang each on its own hook, where you can count, sort and pick them. **`tidy()`**, from the broom package, turns a fitted model's coefficient table into an ordinary data frame. `summary(model)` prints a table for reading, not for reuse; `tidy(model)` returns a tibble with columns term, estimate, std.error, statistic and p.value ([[Regression Coefficient]], [[Data Frame]]). `conf.int = TRUE` adds interval columns, and `exponentiate = TRUE` gives odds ratios or rate ratios for logit and log links. A model object is really a list, and `tidy()` digs the table out of it ([[Lists in R]]).

The code below fits a logistic regression, prints its tidy table, then the odds ratios with intervals. Its companion `glance()` returns one row of fit statistics per model, such as AIC, deviance and residual df.

A data frame is what you want because it goes straight into `ggplot()` for a [[Coefficient Plot]], into [[kable()]] for a table, or into `bind_rows()` to compare many models. `broom.mixed` extends it to lme4 and brms models, as the confidence interval lab uses ([[Course Website]]). `tidy()` does not change the model; it only reformats the output. Its sibling for data-level output is [[augment()]].

```r
library(broom)
m <- glm(am ~ wt + hp, family = binomial, data = mtcars)
tidy(m)
tidy(m, conf.int = TRUE, exponentiate = TRUE)[, c("term", "estimate", "conf.low", "conf.high")]
glance(m)[, c("AIC", "deviance", "df.residual")]      # one-row model summary
```
`glance()` is the companion that returns one row of fit statistics per model.

## Connections
- **Builds on:** [[Regression Coefficient]], [[Data Frame]]
- **Leads to:** [[augment()]], [[Coefficient Plot]], [[kable()]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What does broom's tidy() return?
??
A data frame with one row per model term: estimate, standard error, statistic and p-value.
++++

What does glance() return?
??
A one-row data frame of whole-model statistics such as AIC and deviance.
++++
