---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Calling `plot()` on a fitted linear model draws four standard diagnostic plots that check its assumptions."
aliases:
  - "Diagnostic plots"
  - "Diagnostic Plots for lm"
  - "plot.lm"
  - "plot(model)"
  - "Residual plots"
status: seedling
---

# plot() Diagnostics for lm

Calling **`plot()` on a fitted linear model** draws four standard diagnostic plots that check its assumptions; `par(mfrow = c(2, 2)); plot(m)` shows them together, and `plot(m, which = 1)` picks one. The first is the [[Residuals vs Fitted Plot]], which checks [[Linearity|linearity]]: you want a flat red line. The second is a normal [[QQ Plot]] of the residuals, which checks [[Normality|normality]]: you want points along the diagonal. The third, Scale-Location, plots the [[Square Root|square root]] of the absolute [[Standardizing|standardised]] residuals against fitted values, which checks [[Homogeneity of Variance|equal variance]]: you want a flat line and an even band. The fourth, Residuals vs Leverage, flags influential points: watch for points beyond the [[Cook's Distance]] contours ([[Leverage]]).

The figure shows all four for a well-behaved model. The code below fits fuel economy against weight and horsepower in `mtcars`, draws the four panels, and lists the cars whose Cook's distance exceeds the common rule of thumb of 4/n. `performance::check_model()` gives a ggplot version ([[Course Website]]).

These plots have blind spots. They do not check [[Independence of Observations|independence]], so plot residuals against time, space or group yourself, and they cannot see missing confounders; four clean plots do not prove a model valid ([[Linear Model Assumptions]], [[Model Validation]]). For [[Generalized Linear Model|GLMs]] they are hard to read, and simulated residuals from [[DHARMa Simulated Residuals|DHARMa]] work better.

![[lm diagnostic four.png|700]]
*What to look at:* the four panels for a well-behaved model.

```r
m <- lm(mpg ~ wt + hp, data = mtcars)
op <- par(mfrow = c(2, 2)); plot(m); par(op)
which(cooks.distance(m) > 4 / nrow(mtcars))       # cars flagged by a common rule of thumb
```

## Connections
- **Builds on:** [[Residuals vs Fitted Plot]], [[QQ Plot]], [[Cook's Distance]], [[Linearity]], [[Normality]], [[Square Root]], [[Standardizing]], [[Homogeneity of Variance]], [[Independence of Observations]], [[Generalized Linear Model]]
- **Leads to:** [[Linear Model Assumptions]], [[Model Validation]], [[DHARMa Simulated Residuals]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

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
