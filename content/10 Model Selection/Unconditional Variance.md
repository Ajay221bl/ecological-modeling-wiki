---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Unconditional standard error"
  - "Unconditional SE"
  - "Model-averaged standard error"
status: seedling
---

# Unconditional Variance

**In one line:** the unconditional variance of a model-averaged estimate adds the spread of estimates between models to each model's own sampling variance, so that the uncertainty about which model is best is included.

> [!info] Before this, it helps to know
> [[Model Averaging]] (what it accompanies) · [[Variance]] (what is combined) · [[Model Selection Uncertainty]] (what it accounts for)

## Start from zero
1. **Each model has its own SE** for the estimate: the conditional SE, which assumes that model is true.
2. **Models also disagree** about the estimate itself.
3. **Burnham and Anderson's formula:** SE_unc = Σ wᵢ √(SEᵢ² + (θ̂ᵢ − θ̄)²).
4. **It is never smaller than the weighted average of the conditional SEs.**
5. **Use it for model-averaged confidence intervals:** θ̄ ± 1.96 SE_unc.

## In R
```r
w <- c(0.6, 0.3, 0.1); est <- c(5.9, 5.2, 7.4); se <- c(0.40, 0.35, 0.50); avg <- sum(w * est)
c(average = avg, weighted_conditional_se = sum(w * se), unconditional_se = sum(w * sqrt(se^2 + (est - avg)^2)))
```

## In the course
[[Anderson and Burnham 2002]].

## Common confusions
- **"Report the top model's SE with the averaged estimate."** That omits selection uncertainty.

## Explain it back
- What extra term does the unconditional SE include?

*Pass test:* you can compute it.

## Connections
- **Builds on:** [[Model Averaging]], [[Variance]], [[Model Selection Uncertainty]]
- **Leads to:** [[Confidence Interval]], [[modavg()]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is the unconditional SE of a model-averaged estimate?
??
Σ wᵢ √(SEᵢ² + (θ̂ᵢ − θ̄)²): within-model variance plus between-model spread.
++++
