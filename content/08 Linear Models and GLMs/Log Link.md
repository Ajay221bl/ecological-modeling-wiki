---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The log link models the logarithm of the mean as a linear function of predictors, which keeps the mean positive and makes effects multiplicative."
aliases:
  - "Log link function"
  - "Logarithmic link"
  - "Log-linear model"
status: seedling
---

# Log Link

A dimmer with a "percent" dial changes brightness by the same percentage with each click, never by a fixed amount, and no number of clicks takes it below zero. The **log link** models the logarithm of the mean as a linear function of predictors: log(μ) = η, so μ = exp(η) ([[Natural Logarithm]], [[Link Function]]). Because exp() of anything is positive, the mean cannot go below zero. Adding on the log scale is multiplying on the count scale, exp(β₀ + β₁x) = exp(β₀) × exp(β₁)^x, so effects are multiplicative ([[Multiplicative Effects]]). exp(β₀) is the expected count when predictors are zero, and exp(β₁) is the factor by which the mean is multiplied per unit of x, called a [[Rate Ratio]].

With log(μ) = 2.3 − 0.02 × tree, exp(−0.02) = 0.98: each extra 1% of tree cover multiplies the expected count by 0.98, a 2% drop, and 10% more cover multiplies it by 0.98¹⁰ = 0.82, an 18% drop. A coefficient of 0.4 would mean exp(0.4) = 1.49, a 49% rise per unit. The code below checks these, then fits a Poisson GLM and reports the multipliers with intervals. On the response scale a log link implies an exponential curve.

It is the default for Poisson and negative binomial models and the usual choice for gamma ([[Poisson Regression]]). It suits counts biologically because births, deaths and movement act per individual, so effects on abundance are naturally proportional; it also makes effort adjustments possible through an [[Offset]] ([[Zuur et al. 2009 Ch9]], [[Hobbs and Hooten 2015 Ch3]]). Two confusions. A log link does not fail with zero counts: it is applied to the mean, which is positive, and zeros in the data are fine. And a coefficient of −0.02 does not mean 0.02 fewer birds; it means about 2% fewer.

```r
exp(-0.02); exp(-0.02)^10; exp(-0.02 * 10)
set.seed(6); tree <- runif(200, 0, 60); y <- rpois(200, exp(2.3 - 0.02 * tree)); m <- glm(y ~ tree, family = poisson)
exp(cbind(estimate = coef(m), confint.default(m)))        # multipliers with intervals
```

## Connections
- **Builds on:** [[Natural Logarithm]], [[Link Function]]
- **Leads to:** [[Poisson Regression]], [[Rate Ratio]], [[Offset]], [[Multiplicative Effects]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What does the log link model?
??
log(μ) as a linear function of the predictors, so μ = exp(η).
++++

How is a log-link coefficient β interpreted?
??
Each unit increase in x multiplies the expected response by exp(β).
++++
