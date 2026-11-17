---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - mixed
aliases:
  - "Confidence vs prediction interval"
status: seedling
---

# Prediction vs Confidence Interval

> [!summary] In plain words
> a confidence interval describes uncertainty about the mean response at a given x, while a prediction interval describes where a single new observation is likely to fall, so it adds the residual scatter and is always wider.

## The question
My figure has a narrow band but the points scatter far outside it. Is something wrong?

## Built from
- [[Confidence Interval]]: for the mean.
- [[Residual Standard Error|Residual Variance]]: what a prediction interval adds.
- [[Confidence Envelopes]]: the confidence version drawn as a band.
- [[Posterior Predictive Distribution]]: the Bayesian prediction interval.

## The reasoning, step by step
1. **Confidence interval for the mean at x:** ŷ ± t × SE(ŷ). Shrinks toward zero width as n grows.
2. **Prediction interval for a new y at x:** ŷ ± t × √(SE(ŷ)² + σ²). Never narrower than about ±2σ.
3. **Mixed models add a layer:** a new observation from a new group adds the group variance too.
4. **Most data points fall outside a confidence band** when n is large. That is expected.
5. **R:** `predict(lm, newdata, interval = "confidence")` versus `interval = "prediction"`.

| | Confidence interval | Prediction interval |
|---|---|---|
| About | Mean response | One new observation |
| Includes residual σ² | No | Yes |
| As n grows | Shrinks toward 0 | Shrinks toward ±2σ |
| Mixed model, new group | Mean of typical group | Add group variance too |

**A worked example in numbers.** for a simulated lm (n = 50, σ = 1, seed 1), the 95% confidence interval at the mean of x had half-width 0.26 and the prediction interval 1.89.

## So in practice
Use confidence bands to show what you learned about the relationship; use prediction intervals when forecasting individual values.

## What would go wrong otherwise
Calling a confidence band "where 95% of observations fall".

## Explain it back
- Why does a prediction interval stop shrinking as n grows?

*Pass test:* you can compute and explain both.

## Connections
- **Related:** [[Conditional vs Marginal Predictions]], [[Confidence vs Credible Interval]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 14 - Mixed Models|MOC - Mixed Models]], [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What does a prediction interval add to a confidence interval?
??
The residual variance (scatter of individual observations).
++++

Which interval shrinks toward zero width as sample size grows?
??
The confidence interval for the mean.
++++
