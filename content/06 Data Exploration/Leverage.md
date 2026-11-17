---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Hat value"
  - "hatvalues()"
  - "Leverage point"
status: seedling
---

# Leverage

**In one line:** leverage measures how far an observation's predictor values lie from the centre of all the predictor values, and so how much power it has to pull the fitted line.

> [!info] Before this, it helps to know
> [[Outlier]] (in X specifically) · [[Linear Regression]] (the line being pulled) · [[Mean]] (the centre of X)

## The everyday picture
A seesaw. A child sitting near the pivot barely moves it. The same child at the very end tips the whole board. Observations far from the mean of X sit at the end of the seesaw.

## Start from zero
1. **The fitted line always passes through the point (mean of X, mean of Y).** That is the pivot.
2. **A point far from the mean of X has a long lever arm.**
3. **The hat value hᵢ measures this.** It runs from 1/n to 1.
4. **The hat values add up to p,** the number of coefficients, so the average is p/n.
5. **A common flag:** hᵢ more than two or three times p/n.
6. **High leverage is only potential.** *If the point lies on the trend of the others, it does no harm and even sharpens the slope estimate. If it lies off the trend, it drags the line.*
7. **Leverage depends only on X.** The response plays no part.

## See it
![[Leverage and influence.png|700]]
*What to look at:* the far-right point in line with the others changes nothing. The far-right point off the line swings the fit.

## In R
```r
set.seed(9)
x <- c(runif(20, 0, 10), 30); y <- 2 + 0.5 * x + rnorm(21)
m <- lm(y ~ x); h <- hatvalues(m)
round(c(max = max(h), mean = mean(h), p_over_n = 2 / 21), 3)
which(h > 3 * mean(h))                    # observation 21
sum(h)                                    # equals the number of coefficients, 2
```

## In the course
Appears on the x-axis of the fourth `plot(lm)` diagnostic ([[plot() Diagnostics for lm]]; [[Zuur et al. 2009 Ch2]]).

## Common confusions
- **"High leverage means a bad point."** It means a powerful point. Whether it is harmful depends on its residual.

## Explain it back
- What two things together make a point influential?

*Pass test:* you can explain leverage with the seesaw.

## Connections
- **Builds on:** [[Outlier]], [[Linear Regression]]
- **Leads to:** [[Cook's Distance]], [[Residual]], [[Extrapolation]]
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
