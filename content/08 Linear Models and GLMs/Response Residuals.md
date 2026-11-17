---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Response residuals are the plain differences between observed values and fitted means, on the scale of the data."
aliases:
  - "Raw residuals"
  - "Ordinary residuals"
status: seedling
---

# Response Residuals

Marking every runner by "seconds off their predicted time" treats a sprint and a marathon alike, though ten seconds is a disaster in one and nothing in the other. **Response residuals** are the plain differences between observed values and fitted means, eᵢ = yᵢ − μ̂ᵢ, on the scale of the data ([[Residual]], [[Fitted Value|Fitted Values]]). They are fine for normal models, where every observation has the same expected spread.

They mislead for GLMs because spread changes with the mean ([[Mean-Variance Relationship]]). A Poisson observation with mean 50 is expected to miss by about 7, one with mean 2 by about 1.4, so raw residuals fan out even when the model is perfect. In the code below, data simulated from the correct Poisson model have response residuals whose standard deviation grows steadily across bands of fitted values.

So a funnel in raw residuals is not evidence of a problem in a count model; it is expected. Use response residuals to understand errors in real units, and scaled residuals for diagnostics: [[Pearson Residuals]], [[Deviance Residuals]] or [[Randomized Quantile Residuals]].

```r
set.seed(6); x <- runif(300); y <- rpois(300, exp(1 + 3 * x)); m <- glm(y ~ x, family = poisson)
r <- resid(m, type = "response"); tapply(r, cut(fitted(m), c(0, 5, 15, 60)), sd)      # spread grows with the mean in a correct model
```

## Connections
- **Builds on:** [[Residual]], [[Fitted Value|Fitted Values]]
- **Leads to:** [[Pearson Residuals]], [[Deviance Residuals]], [[Randomized Quantile Residuals]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Which residuals to use for a GLM]]

## Flashcards

What are response residuals?
??
Observed minus fitted values on the data scale.
++++

Why are raw residuals poor diagnostics for a Poisson GLM?
??
Their spread grows with the mean even when the model is correct.
++++
