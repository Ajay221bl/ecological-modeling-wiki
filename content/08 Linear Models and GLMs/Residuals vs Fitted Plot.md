---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A residuals-versus-fitted plot puts each observation's fitted value on the horizontal axis and its residual on the vertical axis, to reveal what the model has missed."
aliases:
  - "Residual plot"
  - "Residuals against fitted values"
  - "Fitted-residual plot"
status: seedling
---

# Residuals vs Fitted Plot

After sweeping a floor, the dust left behind tells you where the sweeping failed: a line along one wall or a pile in a corner. A **residuals-versus-fitted plot** shows a model's leftovers the same way. Each observation's [[Fitted Value]] goes on the horizontal axis and its [[Residual]] on the vertical axis. Fitted values are used because they summarise all the predictors in one dimension, so the plot works for any number of predictors.

The ideal is a shapeless horizontal band centred on zero. A curve means the mean structure is wrong ([[Linearity]]); a funnel means the variance changes with the mean ([[Heteroscedasticity]]); isolated points far from zero are outliers; and diagonal stripes mean the response is discrete, which is normal for counts. The figure shows the good case, a curve, a funnel and an outlier. In the code below, one model has constant scatter and the other scatter that grows with x, and their residual plots show a flat band and a funnel; `plot(good, which = 1)` draws R's own version with a smoother through the points ([[plot() Diagnostics for lm]]).

Also plot residuals against each predictor, against predictors left out of the model, against time and against location: patterns there point to missing terms or dependence ([[Linear Model Assumptions]], [[Zuur et al. 2009 Ch2]]). The common mistake is to plot residuals against the *observed* response; that always shows a trend, even for a perfect model, so use fitted values. For GLMs, where raw residual plots are hard to read, use [[DHARMa Simulated Residuals]].

![[Residual patterns.png|700]]
*What to look at:* four panels showing the good case, a curve, a funnel and an outlier.

```r
set.seed(2); x <- runif(150, 1, 10)
good <- lm(I(2 + x + rnorm(150)) ~ x); funnel <- lm(I(2 + x + rnorm(150, 0, 0.4 * x)) ~ x)
op <- par(mfrow = c(1, 2)); plot(fitted(good), resid(good)); abline(h = 0); plot(fitted(funnel), resid(funnel)); abline(h = 0); par(op)
plot(good, which = 1)            # R's built-in version with a smoother
```

## Connections
- **Builds on:** [[Residual]], [[Fitted Value]]
- **Leads to:** [[plot() Diagnostics for lm]], [[Linearity]], [[Heteroscedasticity]], [[DHARMa Simulated Residuals]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What should a residuals-versus-fitted plot look like for an adequate model?
??
A patternless horizontal band of roughly constant width centred on zero.
![[Residual patterns.png]]
++++

What does a funnel shape in this plot indicate?
??
Variance that changes with the fitted value (heteroscedasticity).
++++
