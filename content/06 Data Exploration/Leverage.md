---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Leverage measures how far an observation's predictor values lie from the centre of all the predictor values, and so how much power it has to pull the fitted line."
aliases:
  - "Hat value"
  - "hatvalues()"
  - "Leverage point"
status: seedling
---

# Leverage

On a seesaw, a child sitting near the pivot barely moves it, while the same child at the very end tips the whole board. A fitted regression line always passes through the point (mean of X, mean of Y), which acts as the pivot ([[Linear Regression]], [[Mean]]). **Leverage** measures how far an observation's [[Predictor Variable|predictor]] values lie from the centre of all the predictor values, and so how much power it has to pull the line. It is measured by the *hat value* hᵢ, which runs from 1/n to 1. The hat values add up to p, the number of coefficients, so the average is p/n, and a common flag is a hat value more than two or three times p/n. In the code below, 20 points lie between 0 and 10 and one sits at x = 30; its hat value is far above the average and the hat values sum to 2, the intercept and slope.

High leverage is only potential. If the point lies on the trend of the others, it does no harm and even sharpens the slope estimate, because it extends the range of X. If it lies off the trend, it drags the line toward itself. The figure shows both: a far-right point in line with the others changes nothing, while a far-right point off the line swings the fit. So leverage is power, not guilt, and whether a powerful point is harmful depends on its [[Residual]]. The combination of the two is measured by [[Cook's Distance]].

Leverage depends only on X; the response plays no part. It is an [[Outlier]] in the predictors specifically, and it is also a warning about [[Extrapolation]], since few points support the fit out there. It appears on the horizontal axis of the fourth diagnostic plot that `plot()` draws for a [[Linear Model|linear model]] ([[plot() Diagnostics for lm]], [[Zuur et al. 2009 Ch2]]).

![[Leverage and influence.png|700]]
*What to look at:* the far-right point in line with the others changes nothing. The far-right point off the line swings the fit.

```r
set.seed(9)
x <- c(runif(20, 0, 10), 30); y <- 2 + 0.5 * x + rnorm(21)
m <- lm(y ~ x); h <- hatvalues(m)
round(c(max = max(h), mean = mean(h), p_over_n = 2 / 21), 3)
which(h > 3 * mean(h))                    # observation 21
sum(h)                                    # equals the number of coefficients, 2
```

## Connections
- **Builds on:** [[Outlier]], [[Linear Regression]], [[Predictor Variable]]
- **Leads to:** [[Cook's Distance]], [[Residual]], [[Extrapolation]], [[Linear Model]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What is leverage?
??
A measure of how unusual an observation's predictor values are, and so its potential to pull the fitted line.
![[Leverage and influence.png]]
++++

What is the average hat value?
??
p/n, the number of coefficients divided by the number of observations.
++++

Does high leverage always distort the fit?
??
No. Only if the point also lies away from the trend of the rest.
++++
