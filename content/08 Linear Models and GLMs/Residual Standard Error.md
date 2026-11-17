---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The residual standard error is the estimated standard deviation of the scatter of observations around the fitted line."
aliases:
  - "Residual standard deviation"
  - "Residual variance"
  - "σ̂"
  - "Root mean square error"
status: seedling
---

# Residual Standard Error

If a model's predictions are darts and the data are the target, the **residual standard error** is how far a typical dart lands from where it was aimed. It is the estimated standard deviation of the scatter of observations around the fitted line, written σ̂, in the units of the response ([[Residual]], [[Standard Deviation]]). Its formula is σ̂ = √(RSS / (n − p)), where p is the number of coefficients. Dividing by n − p rather than n is because p pieces of information were used up fitting the line, so only n − p independent residuals remain ([[Degrees of Freedom]]).

For the bird plots, RSS = 1.1 from 5 observations and 2 coefficients, so σ̂ = √(1.1 / 3) = 0.61 species: a typical plot lies about 0.6 species from the line. As a rough reading, about 95% of observations lie within 2σ̂ of the line. The code below gets 0.61 from `summary(m)$sigma`, from `sigma(m)` and by hand.

It estimates σ, the SD of the error term, and it feeds everything else: every coefficient's [[Standard Error]] is σ̂ times a factor that depends on the x values, and [[Prediction Interval|prediction intervals]] are built from it. The name is misleading. It is a standard deviation of residuals, not the standard error of any estimate, and in particular not the standard error of the slope. A related summary of how much scatter the model removed is [[R-squared]].

```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5))
m <- lm(rich ~ tree, d); summary(m)$sigma; sigma(m)
sqrt(sum(resid(m)^2) / (5 - 2))
```

## Connections
- **Builds on:** [[Residual]], [[Standard Deviation]], [[Degrees of Freedom]]
- **Leads to:** [[Standard Error]], [[Prediction Interval]], [[R-squared]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What does the residual standard error estimate?
??
σ, the standard deviation of the errors around the regression line.
++++

Formula for the residual standard error?
??
√(RSS / (n − p)), with p the number of estimated coefficients.
++++
