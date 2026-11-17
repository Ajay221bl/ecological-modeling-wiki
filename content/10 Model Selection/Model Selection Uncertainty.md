---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Model selection uncertainty is the doubt about which model is best, which arises because a different sample from the same process could rank the models differently."
aliases:
  - "Selection uncertainty"
  - "Model uncertainty"
status: seedling
---

# Model Selection Uncertainty

If a close election were rerun, a winner by a whisker might easily lose, and reporting the winner alone hides how close it was. **Model selection uncertainty** is the doubt about which model is best, which arises because a different sample from the same process could rank the models differently ([[Sampling Variation]]). Rankings are estimates that vary from sample to sample. Signs of high uncertainty are a small top weight, many models within Δ 2 and a large [[Confidence Set of Models]] ([[Akaike Weight]]).

In the code below, 500 samples of 60 observations are drawn from the same process, where both x1 and x2 have real effects. The model with both wins 46% of the time, x1 alone 39% and x2 alone 14%: same process, different "best" model.

Ignoring it makes intervals too narrow and conclusions overconfident, because the analysis pretends the chosen model was known in advance. Ways to include it are [[Model Averaging]] with an [[Unconditional Variance]], bootstrapping the selection, and reporting the confidence set ([[Anderson and Burnham 2002]]). The selected model's standard errors do not include selection uncertainty; they assume the model was fixed in advance.

```r
set.seed(13); winners <- replicate(500, { x1 <- rnorm(60); x2 <- rnorm(60); y <- 0.3 * x1 + 0.2 * x2 + rnorm(60)
  a <- c(x1 = AIC(lm(y ~ x1)), x2 = AIC(lm(y ~ x2)), both = AIC(lm(y ~ x1 + x2))); names(which.min(a)) })
table(winners) / 500                                      # same process, different samples, different "best" model
```

## Connections
- **Builds on:** [[Sampling Variation]], [[Akaike Weight]]
- **Leads to:** [[Unconditional Variance]], [[Model Averaging]], [[Confidence Set of Models]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is model selection uncertainty?
??
Uncertainty about which model is best, because other samples from the same process could rank models differently.
++++
