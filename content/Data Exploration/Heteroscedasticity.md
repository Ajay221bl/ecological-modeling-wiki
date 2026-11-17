---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Heterogeneity of variance"
  - "Heterogeneity"
  - "Unequal variance"
  - "Non-constant variance"
status: seedling
---

# Heteroscedasticity

**In one line:** heteroscedasticity means the scatter around the fitted values changes in size, for example growing as the response gets larger.

> [!info] Before this, it helps to know
> [[Homogeneity of Variance]] (the assumption this breaks)

## The everyday picture
Guessing people's incomes from their age. For teenagers every guess is close, because they all earn little. For 50-year-olds your guesses miss by huge amounts in both directions. Same guesser, wildly different error sizes.

## A tiny example
Squid weight against body length. Small squid differ by a few grams. Large squid differ by hundreds. On a residual plot this is a funnel opening to the right.

## Start from zero
1. **It is the usual state of ecological data.** Bigger things vary more in absolute terms.
2. **The estimates of the slopes are still unbiased** in a linear model. *What breaks is the uncertainty:* standard errors and tests.
3. **Fix 1: transform the response.** A log pulls large values in and often evens the spread.
4. **Fix 2: choose a distribution whose variance grows with the mean.** Poisson, negative binomial, gamma.
5. **Fix 3: model the variance itself.** Generalised least squares lets σ differ by group or change with a covariate.
6. **Why prefer fixes 2 and 3:** the pattern in the spread is often biology, and modeling it keeps the response on its natural scale.

## In R
```r
library(nlme)
set.seed(2)
d <- data.frame(len = runif(150, 5, 40)); d$wt <- 3 * d$len + rnorm(150, 0, 0.8 * d$len)
m0 <- gls(wt ~ len, data = d)
m1 <- gls(wt ~ len, data = d, weights = varFixed(~ len^2))     # SD proportional to length
AIC(m0, m1)                                                    # the variance model fits far better
rbind(summary(m0)$tTable[2, 1:2], summary(m1)$tTable[2, 1:2])  # similar slope, different SE
```

## In the course
Zuur's squid example opens Chapter 4 ([[Zuur et al. 2009 Ch4]]).

## Common confusions
- **"Heterogeneity biases the slope."** In a linear model it mainly corrupts the standard errors.
- **"It must be transformed away."** Modeling it is often better and is informative in itself.

## Explain it back
- Name three ways to deal with unequal variance.

*Pass test:* you can name the symptom, the consequence and three remedies.

## Connections
- **Builds on:** [[Homogeneity of Variance]]
- **Leads to:** [[Variance Structures]], [[Log Transformation]], [[Mean-Variance Relationship]], [[Generalized Least Squares]]
- **Part of:** [[MOC - Data Exploration]], molecular note [[OLS vs GLS]], [[Transform the data or change the model]]

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
