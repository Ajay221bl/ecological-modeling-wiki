---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "The unconditional variance of a model-averaged estimate adds the spread of estimates between models to each model's own sampling variance, so that the uncertainty about which model is best is included."
aliases:
  - "Unconditional standard error"
  - "Unconditional SE"
  - "Model-averaged standard error"
status: seedling
---

# Unconditional Variance

Each model in an averaged set has its own [[Standard Error|standard error]] for an estimate, the conditional SE, which assumes that model is true; but the models also disagree about the estimate itself. The **unconditional variance** of a model-averaged estimate adds that between-model spread to each model's own [[Variance of an Estimate|sampling variance]], so that uncertainty about which model is best is included ([[Model Averaging]], [[Variance]], [[Model Selection Uncertainty]]). Burnham and Anderson's formula is SE_unc = Σ wᵢ √(SEᵢ² + (θ̂ᵢ − θ̄)²).

It is never smaller than the [[Weighted Mean|weighted average]] of the conditional SEs. In the code below, estimates of 5.9, 5.2 and 7.4 with weights 0.6, 0.3 and 0.1 and SEs of 0.40, 0.35 and 0.50 average to 5.84; the weighted conditional SE is 0.40, but the unconditional SE is 0.63. Use it for model-averaged intervals, θ̄ ± 1.96 SE_unc ([[Confidence Interval]]); [[modavg()]] reports it.

Reporting the top model's SE with the averaged estimate omits selection uncertainty ([[Anderson and Burnham 2002]]).

```r
w <- c(0.6, 0.3, 0.1); est <- c(5.9, 5.2, 7.4); se <- c(0.40, 0.35, 0.50); avg <- sum(w * est)
c(average = avg, weighted_conditional_se = sum(w * se), unconditional_se = sum(w * sqrt(se^2 + (est - avg)^2)))
```

## Connections
- **Builds on:** [[Model Averaging]], [[Variance]], [[Model Selection Uncertainty]], [[Standard Error]], [[Variance of an Estimate]], [[Weighted Mean]]
- **Leads to:** [[Confidence Interval]], [[modavg()]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is the unconditional SE of a model-averaged estimate?
??
Σ wᵢ √(SEᵢ² + (θ̂ᵢ − θ̄)²): within-model variance plus between-model spread.
++++
