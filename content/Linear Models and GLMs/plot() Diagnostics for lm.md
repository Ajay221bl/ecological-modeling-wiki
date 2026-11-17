---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Diagnostic plots"
  - "Diagnostic Plots for lm"
  - "plot.lm"
  - "plot(model)"
  - "Residual plots"
status: seedling
---

# plot() Diagnostics for lm

**In one line:** calling `plot()` on a fitted linear model draws four standard diagnostic plots that check its assumptions.

> [!info] Before this, it helps to know
> [[Residuals vs Fitted Plot]] (plot 1) · [[QQ Plot]] (plot 2) · [[Leverage]] and [[Cook's Distance]] (plot 4)

## Start from zero
1. **`par(mfrow = c(2, 2)); plot(m)`** shows all four at once.
2. **Residuals vs Fitted.** Checks linearity. Want a flat red line.
3. **Normal Q-Q.** Checks normality of residuals. Want points on the diagonal.
4. **Scale-Location.** √|standardised residuals| against fitted. Checks equal variance. Want a flat line and even band.
5. **Residuals vs Leverage.** Flags influential points. Watch for points beyond the Cook's distance contours.
6. **`plot(m, which = 1)`** picks one.
7. **These don't check independence.** Plot residuals against time, space or group yourself.
8. **For GLMs these plots are hard to read.** Use simulated residuals (DHARMa) instead.

## See it
![[lm diagnostic four.png|700]]
*What to look at:* the four panels for a well-behaved model.

## In R
```r
m <- lm(mpg ~ wt + hp, data = mtcars)
op <- par(mfrow = c(2, 2)); plot(m); par(op)
which(cooks.distance(m) > 4 / nrow(mtcars))       # cars flagged by a common rule of thumb
```

## In the course
Linear regression lab ([[Course Website]]). `performance::check_model()` gives a ggplot version.

## Common confusions
- **"Four clean plots mean the model is valid."** They can't see non-independence or missing confounders.

## Explain it back
- Which assumption does each of the four plots address?

*Pass test:* you can produce and read the four plots.

## Connections
- **Builds on:** [[Residuals vs Fitted Plot]], [[QQ Plot]], [[Cook's Distance]]
- **Leads to:** [[Linear Model Assumptions]], [[Model Validation]], [[DHARMa Simulated Residuals]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What four plots does plot(lm_model) produce?
??
Residuals vs fitted, normal QQ, scale-location, residuals vs leverage.
![[lm diagnostic four.png]]
++++

Which assumption do the default lm diagnostic plots not check?
??
Independence of observations.
++++
