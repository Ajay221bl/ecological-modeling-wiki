---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Residual standard deviation"
  - "Residual variance"
  - "σ̂"
  - "Root mean square error"
status: seedling
---

# Residual Standard Error

**In one line:** the residual standard error is the estimated standard deviation of the scatter of observations around the fitted line.

> [!info] Before this, it helps to know
> [[Residual]] (what it summarises) · [[Standard Deviation]] (what kind of number it is) · [[Degrees of Freedom]] (in its formula)

## The everyday picture
The typical size of a miss. If the model's predictions are darts and the data are the target, this is how far a typical dart lands from where it was aimed.

## A tiny example
RSS = 1.1 from 5 observations and 2 coefficients: σ̂ = √(1.1 / 3) = 0.61 species. A typical plot lies about 0.6 species from the line.

## Start from zero
1. **σ̂ = √(RSS / (n − p)).** p is the number of coefficients.
2. **Why n − p:** p pieces of information were used up fitting the line, so only n − p independent residuals remain.
3. **Units:** those of the response.
4. **It estimates σ,** the SD of the error term.
5. **Rough reading:** about 95% of observations lie within 2σ̂ of the line.
6. **It feeds everything else:** every coefficient's standard error is σ̂ times a factor that depends on the x values.
7. **The name is misleading.** It is a standard deviation of residuals, not a standard error of an estimate.

## In R
```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5))
m <- lm(rich ~ tree, d); summary(m)$sigma; sigma(m)
sqrt(sum(resid(m)^2) / (5 - 2))
```

## Common confusions
- **"It is the standard error of the slope."** No. It is the SD of the scatter.

## Explain it back
- Why divide by n − p?

*Pass test:* you can compute σ̂ from the residuals.

## Connections
- **Builds on:** [[Residual]], [[Standard Deviation]], [[Degrees of Freedom]]
- **Leads to:** [[Standard Error]], [[Prediction Interval]], [[R-squared]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What does the residual standard error estimate?
??
σ, the standard deviation of the errors around the regression line.
++++

Formula for the residual standard error?
??
√(RSS / (n − p)), with p the number of estimated coefficients.
++++
