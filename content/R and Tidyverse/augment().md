---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "broom augment"
status: seedling
---

# augment()

**In one line:** `augment()` from the broom package returns the original data with the model's fitted values and residuals added as new columns.

> [!info] Before this, it helps to know
> [[Fitted Value]] and [[Residual]] (what gets added) · [[tidy()]] (its sibling for coefficients)

## The everyday picture
A marked exam handed back. Your original answers are all still there, and next to each one the teacher has written the expected answer and how far off you were.

## Start from zero
1. **`augment(model)`** gives the data plus `.fitted`, `.resid` and diagnostics such as `.hat` and `.cooksd`.
2. **`augment(model, newdata = nd)`** adds predictions to new data.
3. **`type.predict = "response"`** returns the response scale for GLMs.
4. **Why it helps:** residual plots need residuals lined up with predictors, including ones not in the model. With everything in one data frame, each plot is one `ggplot()` call.

## In R
```r
library(broom)
m <- lm(mpg ~ wt, data = mtcars)
a <- augment(m)
head(a[, c("mpg", "wt", ".fitted", ".resid", ".cooksd")], 3)
cor(a$.fitted, a$.resid)        # essentially 0, as least squares guarantees
```

## Common confusions
- **"augment gives predictions with intervals for every model."** For `lm` you can ask for intervals. For GLMs you get `.se.fit` and must build the interval yourself.

## Explain it back
- Which columns does `augment()` add?

*Pass test:* you can make a residuals-versus-fitted data frame in one line.

## Connections
- **Builds on:** [[Fitted Value]], [[Residual]], [[tidy()]]
- **Leads to:** [[Model Validation]], [[Cook's Distance]], [[plot() Diagnostics for lm]]
- **Part of:** [[MOC - Reproducible Coding and Figures]]

## Flashcards

What does augment() add to the data?
??
Columns of fitted values, residuals and diagnostics such as leverage and Cook's distance.
++++
