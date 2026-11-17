---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Homoscedasticity"
  - "Equal variance"
  - "Constant variance"
  - "Homogeneity"
status: seedling
---

# Homogeneity of Variance

**In one line:** homogeneity of variance means the scatter of the data around the model's fitted values is the same size everywhere.

> [!info] Before this, it helps to know
> [[Variance]] (what must be constant) · [[Residual]] (where it is checked) · [[Linear Regression]] (the model that assumes it)

## The everyday picture
A dart player who is equally steady whatever part of the board they aim at. Their darts scatter the same amount around the bullseye as around the 20. A player whose throws go wild only when aiming high breaks the assumption.

## Start from zero
1. **A linear model has one error variance, σ².** It describes the scatter around the line.
2. **One number can only be right if the scatter is the same everywhere:** in every group and at every value of the predictors.
3. **Check groups** with side-by-side boxplots. Are the boxes of similar length?
4. **Check continuous predictors** with a plot of residuals against fitted values. Is the band of even width?
5. **Why it matters:** σ² feeds every standard error. If the true scatter is bigger in some places, the model's standard errors and p-values are wrong there, usually too optimistic.
6. **A rule of thumb for groups:** trouble starts when the largest group variance is around four times the smallest.

## See it
![[Homogeneity vs heterogeneity.png|700]]
*What to look at:* left, an even band. Right, a funnel that opens as the fitted value grows.

## In R
```r
set.seed(1)
x <- runif(200, 1, 10)
even <- 2 + 0.5 * x + rnorm(200, 0, 1)
fan  <- 2 + 0.5 * x + rnorm(200, 0, 0.3 * x)        # spread grows with x
op <- par(mfrow = c(1, 2)); plot(fitted(lm(even ~ x)), resid(lm(even ~ x))); plot(fitted(lm(fan ~ x)), resid(lm(fan ~ x))); par(op)
tapply(resid(lm(fan ~ x)), cut(x, 3), var)           # variance climbs across thirds of x
tapply(resid(lm(even ~ x)), cut(x, 3), var)          # roughly equal
```

## In the course
Protocol step 2 ([[Zuur et al. 2010]]). Zuur's Chapter 4 is about what to do when it fails ([[Zuur et al. 2009 Ch4]]).

## Common confusions
- **"It means the groups have the same mean."** It concerns spread, not centre.
- **"It applies to every model."** A Poisson GLM expects variance to grow with the mean. There the check is whether variance grows the way the distribution says.

## Explain it back
- Which plot checks equal variance for a continuous predictor?
- Why do unequal variances damage standard errors?

*Pass test:* you can recognise a funnel in a residual plot and say why it matters.

## Connections
- **Builds on:** [[Variance]], [[Residual]]
- **Leads to:** [[Heteroscedasticity]], [[Residuals vs Fitted Plot]], [[Variance Structures]], [[Bartlett Test]]
- **Part of:** [[MOC - Data Exploration]]

## Flashcards

What is homogeneity of variance?
??
The spread of the residuals is the same across all groups and all values of the predictors.
![[Homogeneity vs heterogeneity.png]]
++++

How do you check it by eye?
??
Boxplots by group, and residuals against fitted values looking for an even band.
++++

What goes wrong when it fails in a linear model?
??
Standard errors, confidence intervals and p-values become unreliable.
++++
