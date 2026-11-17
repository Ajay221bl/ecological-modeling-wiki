---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases: []
status: seedling
---

# Which residuals to use for a GLM

> [!summary] In plain words
> raw residuals mislead for GLMs because spread changes with the mean, Pearson and deviance residuals correct the scale but still band for small counts, and quantile (simulated) residuals are the type that behaves the same for every correct model.

## The question
R offers response, Pearson, deviance and simulated residuals. Which should I plot, and why?

## Built from
- [[Response Residuals]]: observed minus fitted.
- [[Pearson Residuals]]: scaled by expected sd.
- [[Deviance Residuals]]: signed root of deviance contribution.
- [[Randomized Quantile Residuals]] and [[DHARMa Simulated Residuals]]: position within the predicted distribution.

## The reasoning, step by step
1. **Response residuals:** real units, but they fan out with the mean in any count model. Not for diagnostics.
2. **Pearson residuals:** divide by the expected sd. Constant spread if the variance function is right. Used for the dispersion statistic.
3. **Deviance residuals:** similar job, R's default, a little more symmetric.
4. **Both band and skew** for small counts and binary data, where patterns become unreadable.
5. **Quantile residuals:** uniform for any correct model. No bands.
6. **Simulated versions (DHARMa)** extend this to mixed models and unusual families.

| Type | Scale-corrected | Works for 0/1 and small counts | Main use |
|---|---|---|---|
| Response | No | No | Errors in real units |
| Pearson | Yes | Poorly | Dispersion, quick plots |
| Deviance | Yes | Poorly | R default, quick plots |
| Quantile / simulated | Yes | Yes | General diagnostics |

## So in practice
Counts with large means: Pearson residual plots are fine. Binary data, small counts, zero-heavy data or mixed models: quantile or simulated residuals.

## What would go wrong otherwise
Judging a logistic regression from a raw residual plot leads nowhere: it always shows two bands.

## Explain it back
- Why do Pearson residuals fail for binary data?

*Pass test:* you can choose a residual type for a given model.

## Connections
- **Related:** [[Model Validation]], [[What to do about overdispersion]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Generalized Linear Models]]

## Flashcards

Which residuals are most generally reliable for GLM and GLMM diagnostics?
??
Randomized quantile (simulation-based) residuals, such as those from DHARMa.
++++

What are Pearson residuals mainly used for?
??
Scale-corrected residual plots and the dispersion statistic.
++++
