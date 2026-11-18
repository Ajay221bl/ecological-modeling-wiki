---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Homogeneity of variance means the scatter of the data around the model's fitted values is the same size everywhere."
aliases:
  - "Homoscedasticity"
  - "Equal variance"
  - "Constant variance"
  - "Homogeneity"
status: seedling
---

# Homogeneity of Variance

A dart player who is equally steady wherever they aim scatters darts the same amount around the bullseye as around the 20; a player whose throws go wild only when aiming high is not. **Homogeneity of variance**, also called homoscedasticity or constant variance, means the scatter of the data around a model's [[Fitted Value|fitted values]] is the same size everywhere. A [[Linear Model|linear model]] has a single error [[Variance]], σ², describing the scatter around the line ([[Linear Regression]]), and one number can only be right if the scatter really is the same in every group and at every value of the [[Predictor Variable|predictors]].

You check it in two ways. For groups, use side-by-side boxplots: are the boxes of similar length? For continuous predictors, plot each [[Residual]] against its fitted value: is the band of even width ([[Residuals vs Fitted Plot]])? The figure and code below contrast an even band with a funnel whose spread grows with x; splitting x into thirds, the [[Residual Standard Error|residual variance]] climbs across the funnel data but stays roughly equal for the even data. A rule of thumb for groups is that trouble starts when the largest group variance is about four times the smallest. Formal tests exist ([[Bartlett Test]]), but plots show how big the difference is.

It matters because σ² feeds every [[Standard Error|standard error]]. If the true scatter is bigger in some places than the model assumes, the standard errors and p-values there are wrong, usually too optimistic. Two confusions. Homogeneity is about spread, not about groups having the same mean. And it is not an assumption of every model: a [[Poisson Regression|Poisson GLM]] expects variance to grow with the mean, so there the check is whether variance grows the way the distribution says. When the assumption fails, the result is [[Heteroscedasticity]], and Zuur's Chapter 4 is about modeling it directly ([[Variance Structures]], [[Zuur et al. 2009 Ch4]]). This is step 2 of the exploration protocol ([[Zuur et al. 2010]]).

![[Homogeneity vs heterogeneity.png|700]]
*What to look at:* left, an even band. Right, a funnel that opens as the fitted value grows.

```r
set.seed(1)
x <- runif(200, 1, 10)
even <- 2 + 0.5 * x + rnorm(200, 0, 1)
fan  <- 2 + 0.5 * x + rnorm(200, 0, 0.3 * x)        # spread grows with x
op <- par(mfrow = c(1, 2)); plot(fitted(lm(even ~ x)), resid(lm(even ~ x))); plot(fitted(lm(fan ~ x)), resid(lm(fan ~ x))); par(op)
tapply(resid(lm(fan ~ x)), cut(x, 3), var)           # variance climbs across thirds of x
tapply(resid(lm(even ~ x)), cut(x, 3), var)          # roughly equal
```

## Connections
- **Builds on:** [[Variance]], [[Residual]], [[Predictor Variable]], [[Standard Error]]
- **Leads to:** [[Heteroscedasticity]], [[Residuals vs Fitted Plot]], [[Variance Structures]], [[Bartlett Test]], [[Fitted Value]], [[Linear Model]], [[Residual Standard Error]], [[Poisson Regression]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

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
