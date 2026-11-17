---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Selection uncertainty"
  - "Model uncertainty"
status: seedling
---

# Model Selection Uncertainty

**In one line:** model selection uncertainty is the doubt about which model is best, which arises because a different sample from the same process could rank the models differently.

> [!info] Before this, it helps to know
> [[Sampling Variation]] (its source) · [[Akaike Weight]] (how it is shown)

## The everyday picture
Rerunning a close election. If the winner won by a whisker, a rerun might easily give a different winner. Reporting the winner alone hides how close it was.

## Start from zero
1. **Rankings are estimates.** They vary from sample to sample.
2. **Signs of high uncertainty:** the top weight is small, many models lie within Δ 2, the confidence set is large.
3. **Ignoring it** makes intervals too narrow and conclusions overconfident, because the analysis pretends the chosen model was known in advance.
4. **Ways to include it:** model averaging with unconditional standard errors, bootstrapping the selection, reporting the confidence set.

## In R
```r
set.seed(13); winners <- replicate(500, { x1 <- rnorm(60); x2 <- rnorm(60); y <- 0.3 * x1 + 0.2 * x2 + rnorm(60)
  a <- c(x1 = AIC(lm(y ~ x1)), x2 = AIC(lm(y ~ x2)), both = AIC(lm(y ~ x1 + x2))); names(which.min(a)) })
table(winners) / 500                                      # same process, different samples, different "best" model
```

## In the course
[[Anderson and Burnham 2002]].

## Common confusions
- **"The selected model's standard errors include selection uncertainty."** They assume the model was fixed in advance.

## Explain it back
- Name two signs of high selection uncertainty.

*Pass test:* you can explain why selection uncertainty widens intervals.

## Connections
- **Builds on:** [[Sampling Variation]], [[Akaike Weight]]
- **Leads to:** [[Unconditional Variance]], [[Model Averaging]], [[Confidence Set of Models]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is model selection uncertainty?
??
Uncertainty about which model is best, because other samples from the same process could rank models differently.
++++
