---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Heteroscedasticity means the scatter around the fitted values changes in size, for example growing as the response gets larger."
aliases:
  - "Heterogeneity of variance"
  - "Heterogeneity"
  - "Unequal variance"
  - "Non-constant variance"
status: seedling
---

# Heteroscedasticity

Guess people's incomes from their age. For teenagers every guess is close, because they all earn little; for 50-year-olds your guesses miss by huge amounts in both directions. Same guesser, wildly different error sizes. **Heteroscedasticity**, or heterogeneity of variance, means the scatter around a model's [[Fitted Value|fitted values]] changes in size, typically growing as the response gets larger. It breaks the assumption of [[Homogeneity of Variance]], and it is the usual state of ecological data, because bigger things vary more in absolute terms. Zuur's Chapter 4 opens with squid: small squid differ in weight by a few grams, large squid by hundreds, which shows on a [[Residuals vs Fitted Plot|residual plot]] as a funnel opening to the right ([[Zuur et al. 2009 Ch4]]).

In a [[Linear Model|linear model]] the slope estimates stay unbiased; what breaks is the uncertainty, the standard errors and tests. There are three fixes. First, transform the response: a log pulls large values in and often evens the spread ([[Log Transformation]]). Second, choose a distribution whose variance grows with the mean, such as Poisson, negative binomial or gamma ([[Mean-Variance Relationship]]). Third, model the variance itself: [[Generalized Least Squares]] lets σ differ by group or change with a [[Predictor Variable|covariate]] ([[Variance Structures]]). The code below simulates weights whose spread grows with length, then fits the same regression with and without a variance model in which the [[Standard Deviation|standard deviation]] is [[Proportional To|proportional to]] length. The variance model has a far lower AIC, and the slope is similar while its [[Standard Error|standard error]] changes.

The second and third fixes are often better than transforming, because the pattern in the spread is frequently biology worth describing, and modeling it keeps the response on its natural scale ([[Transform the data or change the model]], [[OLS vs GLS]]). Heteroscedasticity does not mainly bias the slope; it corrupts its uncertainty.

```r
library(nlme)
set.seed(2)
d <- data.frame(len = runif(150, 5, 40)); d$wt <- 3 * d$len + rnorm(150, 0, 0.8 * d$len)
m0 <- gls(wt ~ len, data = d)
m1 <- gls(wt ~ len, data = d, weights = varFixed(~ len^2))     # SD proportional to length
AIC(m0, m1)                                                    # the variance model fits far better
rbind(summary(m0)$tTable[2, 1:2], summary(m1)$tTable[2, 1:2])  # similar slope, different SE
```

## Connections
- **Builds on:** [[Homogeneity of Variance]], [[Predictor Variable]], [[Standard Deviation]], [[Proportional To]], [[Standard Error]]
- **Leads to:** [[Variance Structures]], [[Log Transformation]], [[Mean-Variance Relationship]], [[Generalized Least Squares]], [[Fitted Value]], [[Residuals vs Fitted Plot]], [[Linear Model]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]], molecular note [[OLS vs GLS]], [[Transform the data or change the model]]

## Flashcards

What is heteroscedasticity?
??
Residual spread that changes across groups or along the fitted values.
++++

What does heteroscedasticity mainly damage in a linear model?
??
The standard errors and tests. The coefficient estimates remain unbiased.
++++

What are three remedies for unequal variance?
??
Transform the response, use a distribution whose variance depends on the mean, or model the variance directly (GLS variance structures).
++++
