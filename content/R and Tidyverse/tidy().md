---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "broom tidy"
  - "broom package"
  - "broom.mixed"
status: seedling
---

# tidy()

**In one line:** `tidy()` from the broom package turns a fitted model's coefficient table into an ordinary data frame.

> [!info] Before this, it helps to know
> [[Regression Coefficient]] (what the table holds) · [[Data Frame]] (what you get) · [[Lists in R]] (what a model object is)

## The everyday picture
Pouring a cluttered toolbox onto a pegboard. The same tools, now each on its own hook where you can count, sort and pick them.

## Start from zero
1. **`summary(model)` prints a table for reading,** not for reuse.
2. **`tidy(model)` returns a tibble:** term, estimate, std.error, statistic, p.value.
3. **`conf.int = TRUE` adds interval columns.**
4. **`exponentiate = TRUE`** gives odds ratios or rate ratios for logit and log links.
5. **Why you want a data frame:** it goes straight into `ggplot()` for a coefficient plot, into `kable()` for a table, or into `bind_rows()` to compare many models.
6. **`broom.mixed` extends it to lme4 and brms models.**

## In R
```r
library(broom)
m <- glm(am ~ wt + hp, family = binomial, data = mtcars)
tidy(m)
tidy(m, conf.int = TRUE, exponentiate = TRUE)[, c("term", "estimate", "conf.low", "conf.high")]
glance(m)[, c("AIC", "deviance", "df.residual")]      # one-row model summary
```
`glance()` is the companion that returns one row of fit statistics per model.

## In the course
The confidence interval lab uses `broom.mixed` to tabulate mixed model estimates ([[Course Website]]).

## Common confusions
- **"tidy() changes the model."** It only reformats the output.

## Explain it back
- Why is a data frame of coefficients more useful than a printed summary?

*Pass test:* you can get a coefficient table with confidence intervals as a data frame.

## Connections
- **Builds on:** [[Regression Coefficient]], [[Data Frame]]
- **Leads to:** [[augment()]], [[Coefficient Plot]], [[kable()]]
- **Part of:** [[MOC - Reproducible Coding and Figures]]

## Flashcards

What does broom's tidy() return?
??
A data frame with one row per model term: estimate, standard error, statistic and p-value.
++++

What does glance() return?
??
A one-row data frame of whole-model statistics such as AIC and deviance.
++++
