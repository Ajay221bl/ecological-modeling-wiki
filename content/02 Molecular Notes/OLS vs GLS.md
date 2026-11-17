---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - autocorrelation
aliases: []
status: seedling
---

# OLS vs GLS

> [!summary] In plain words
> OLS assumes independent, equal-variance errors and weights all observations equally, while GLS estimates how errors are correlated and weights observations accordingly, giving honest standard errors when residuals are autocorrelated.

## The question
What actually changes when I switch from lm() to gls() with a correlation structure?

## Built from
- [[Least Squares|Ordinary Least Squares]] and [[Generalized Least Squares]].
- [[Correlation Structure]]: what GLS adds.
- [[Residual Autocorrelation]]: the reason to switch.

## The reasoning, step by step
1. **Same model for the mean:** y = Xβ.
2. **Different errors:** OLS assumes σ²I. GLS assumes σ²Σ(θ).
3. **Estimation:** OLS minimises Σ eᵢ². GLS minimises eᵀΣ⁻¹e, which down-weights clusters of correlated observations.
4. **Standard errors:** under positive residual autocorrelation, OLS SEs are too small. GLS SEs reflect the reduced information.
5. **Coefficients:** often similar, but can shift. Diniz-Filho et al. found GLS emphasised predictors acting at smaller scales.
6. **If Σ = I,** GLS and OLS give identical answers.
7. **Cost:** GLS needs a structure choice and is slower. Bad structures can mislead too.

| | OLS (lm) | GLS (gls) |
|---|---|---|
| Error covariance | σ²I | σ²Σ(θ) |
| Observations weighted | Equally | By their correlation |
| SEs under positive autocorrelation | Too small (when x is autocorrelated too) | Honest (if structure right) |
| Extra parameters | None | Range, φ, nugget... |
| Fitting | Least squares | REML or ML |

**A worked example in numbers.** in 100 simulated spatial datasets (n = 80, predictor and errors both autocorrelated), OLS slopes varied with SD 0.22 while OLS reported SEs of 0.11, so 34% of its 95% intervals missed the true slope. GLS slopes varied with SD 0.11, matching its reported SEs, and 5% of intervals missed.

## So in practice
Fit OLS, check residuals. If autocorrelated, fit GLS with candidate structures, compare by AIC (REML), check normalised residuals, then interpret.

## What would go wrong otherwise
Comparing the AIC of an lm() fit with a gls() fitted by REML. Use gls() for both, with the same method.

## Explain it back
- What does GLS minimise instead of the sum of squared residuals?

*Pass test:* you can explain both the estimates and the SEs.

## Connections
- **Related:** [[How to detect and handle autocorrelation]], [[Linear Model vs GLM]], [[Why non-independence inflates false positives]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Autocorrelation]], [[MOC - Linear Models and GLMs]]

## Flashcards

What does GLS change relative to OLS?
??
It models the error covariance (correlations and/or unequal variances) and weights observations accordingly, correcting standard errors.
++++
