---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Raw residuals"
  - "Ordinary residuals"
status: seedling
---

# Response Residuals

**In one line:** response residuals are the plain differences between observed values and fitted means, on the scale of the data.

> [!info] Before this, it helps to know
> [[Residual]] (the idea) · [[Fitted Value|Fitted Values]] (what is subtracted) · [[Mean-Variance Relationship]] (why they mislead in GLMs)

## The everyday picture
Marking every runner by "seconds off their predicted time", whether they ran a sprint or a marathon. Ten seconds is a disaster in one and nothing in the other.

## Start from zero
1. **eᵢ = yᵢ − μ̂ᵢ.**
2. **Fine for normal models,** where every observation has the same expected spread.
3. **Misleading for GLMs.** A Poisson observation with mean 50 is expected to miss by about 7. One with mean 2 by about 1.4. Raw residuals fan out even when the model is perfect.
4. **So a funnel in raw residuals is not evidence of a problem** in a count model.
5. **Use them for** understanding errors in real units. Use scaled residuals for diagnostics.

## In R
```r
set.seed(6); x <- runif(300); y <- rpois(300, exp(1 + 3 * x)); m <- glm(y ~ x, family = poisson)
r <- resid(m, type = "response"); tapply(r, cut(fitted(m), c(0, 5, 15, 60)), sd)      # spread grows with the mean in a correct model
```

## Common confusions
- **"A funnel in residuals means the GLM is wrong."** In raw residuals a funnel is expected.

## Explain it back
- Why do raw residuals fan out in a correct Poisson model?

*Pass test:* you can say when raw residuals are and aren't informative.

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
