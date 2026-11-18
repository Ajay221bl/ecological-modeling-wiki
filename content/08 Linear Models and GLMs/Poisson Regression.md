---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Poisson regression models a count response as Poisson-distributed with a mean that depends on predictors through a log link."
aliases:
  - "Poisson GLM"
  - "Log-linear model for counts"
  - "Count regression"
status: seedling
---

# Poisson Regression

The expected number of customers per hour changes with weather and day of week, each by a percentage, and the actual number in any hour scatters around that expectation, more widely when it is high. **Poisson regression** models a count response that way: yᵢ ~ Poisson(μᵢ) with log(μᵢ) = β₀ + β₁xᵢ ([[Poisson Distribution]], [[Log Link]], [[Count Data]]). It is fitted with `glm(y ~ x, family = poisson)`. exp(β₀) is the expected count at x = 0, and exp(β₁) is the [[Rate Ratio]] per unit of x.

With log(μ) = 2.3 − 0.02 × tree, 0% cover gives 10.0 birds expected, 30% gives 5.5 and 60% gives 3.0, and each 1% of cover multiplies the expected count by 0.98. The figure shows the curve of expected counts with scatter widening where the mean is higher. The code below simulates 150 plots, recovers the coefficients and the three predictions, and computes the dispersion statistic, the sum of squared [[Pearson Residuals|Pearson residuals]] divided by residual df, which is near 1 here as it should be.

The Poisson's built-in assumption is that the variance equals the mean, so check it. A dispersion statistic well above 1 means [[Overdispersion]]: the standard errors are too small. Then move to a [[Negative Binomial GLM]] or [[Quasi-Poisson]], or find the missing structure, such as [[Predictor Variable|covariates]], grouping or [[Zero Inflation|zero inflation]]. Unequal effort calls for an [[Offset]]. Log-transforming counts and using `lm()` instead fails because zeros cannot be logged, small counts are not normal, and the variance is not constant ([[Generalized Linear Model]], [[Zuur et al. 2009 Ch9]], [[Harrison et al. 2018]], [[Course Website]]). Poisson regression is not right for all counts, since most field counts are overdispersed, and its significant results should not be trusted before the dispersion check.

![[Poisson regression fit.png|700]]
*What to look at:* the curve of expected counts, with scatter that widens where the mean is higher.

```r
set.seed(15); d <- data.frame(tree = runif(150, 0, 60)); d$birds <- rpois(150, exp(2.3 - 0.02 * d$tree))
m <- glm(birds ~ tree, family = poisson, data = d); round(summary(m)$coefficients, 4)
exp(coef(m))
sum(resid(m, type = "pearson")^2) / df.residual(m)                 # dispersion statistic: near 1
round(predict(m, data.frame(tree = c(0, 30, 60)), type = "response"), 1)
```

## Connections
- **Builds on:** [[Poisson Distribution]], [[Log Link]], [[Generalized Linear Model]], [[Pearson Residuals]], [[Predictor Variable]], [[Zero Inflation]]
- **Leads to:** [[Overdispersion]], [[Offset]], [[Negative Binomial GLM]], [[Rate Ratio]], [[Quasi-Poisson]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Poisson vs Negative Binomial]]

## Flashcards

What are the distribution and link in Poisson regression?
??
Poisson distribution with a log link.
![[Poisson regression fit.png]]
++++

What assumption of Poisson regression must be checked?
??
That the variance equals the mean (no overdispersion).
++++

How is the dispersion statistic computed?
??
Sum of squared Pearson residuals divided by residual degrees of freedom.
++++
