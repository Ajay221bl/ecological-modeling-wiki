---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`augment()` from the broom package returns the original data with the model's fitted values and residuals added as new columns."
aliases:
  - "broom augment"
status: seedling
---

# augment()

A marked exam comes back with your original answers still there and, next to each, the expected answer and how far off you were. **`augment()`**, from the broom package, returns the original data with the model's [[Fitted Value|fitted values]] and [[Residual|residuals]] added as new columns. `augment(model)` adds `.fitted` and `.resid` plus diagnostics such as `.hat` and `.cooksd` ([[Cook's Distance]]); `augment(model, newdata = nd)` adds predictions to new data; and `type.predict = "response"` returns the response scale for GLMs.

In the code below, the augmented `mtcars` data show fuel economy, weight, fitted value, residual and Cook's distance side by side, and the correlation between fitted values and residuals is essentially 0, as least squares guarantees.

It helps because residual plots need residuals lined up with predictors, including ones not in the model, and with everything in one data frame each plot is one `ggplot()` call ([[Model Validation]], [[plot() Diagnostics for lm]]). It does not give prediction intervals for every model: for `lm` you can ask for them, but for GLMs you get `.se.fit` and must build the interval yourself. Its sibling for coefficients is [[tidy()]].

```r
library(broom)
m <- lm(mpg ~ wt, data = mtcars)
a <- augment(m)
head(a[, c("mpg", "wt", ".fitted", ".resid", ".cooksd")], 3)
cor(a$.fitted, a$.resid)        # essentially 0, as least squares guarantees
```

## Connections
- **Builds on:** [[Fitted Value]], [[Residual]], [[tidy()]]
- **Leads to:** [[Model Validation]], [[Cook's Distance]], [[plot() Diagnostics for lm]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What does augment() add to the data?
??
Columns of fitted values, residuals and diagnostics such as leverage and Cook's distance.
++++
