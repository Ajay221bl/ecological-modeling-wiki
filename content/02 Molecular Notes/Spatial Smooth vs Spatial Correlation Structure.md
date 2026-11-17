---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - gam
aliases: []
status: seedling
---

# Spatial Smooth vs Spatial Correlation Structure

> [!summary] In plain words
> a spatial smooth models spatial pattern in the mean, while a spatial correlation structure models spatial dependence in the residuals, and both can remove residual autocorrelation but answer different questions.

## The question
Should I handle spatial autocorrelation with s(x, y) or with corExp in a GLS?

## Built from
- [[Spatial Smooths]] and [[Spatial Correlation Functions]].
- [[Generalized Least Squares]] and [[Generalized Additive Model]].
- [[Residual Autocorrelation]]: what both target.

## The reasoning, step by step
1. **Smooth:** adds a surface f(east, north) to the mean. You can map it.
2. **Correlation structure:** leaves the mean alone and says residuals at nearby points are correlated.
3. **Smooths are easy for any family** in mgcv. Correlation structures in GLS/lme are Gaussian (gamm and glmmTMB extend them).
4. **Smooths can absorb covariate effects** that are spatially structured (concurvity); correlation structures are less prone to steal fixed effects.
5. **Gaussian process smooths sit between the two.**
6. **Check residuals either way.**

| | Spatial smooth | Spatial correlation structure |
|---|---|---|
| Models | Mean surface | Residual dependence |
| Output | Map of f(x, y) | Range, nugget |
| Families | Any (mgcv) | Mostly Gaussian (gls, lme) |
| Risk | Concurvity with covariates | Mis-specified correlation shape |

**A worked example in numbers.** in the Spatial Smooths note's simulation, adding s(e, n) cut AIC from 724 to 161.

## So in practice
Many points and a non-normal response: spatial smooth. Gaussian response and interest in the correlation range: GLS with corExp.

## What would go wrong otherwise
Adding both a rich spatial smooth and a spatial correlation structure, which compete for the same pattern.

## Explain it back
- Which approach changes the fitted mean?

*Pass test:* you can choose between the two.

## Connections
- **Related:** [[How to detect and handle autocorrelation]], [[OLS vs GLS]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 15 - GAMs|MOC - GAMs]], [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What is the key difference between a spatial smooth and a spatial correlation structure?
??
The smooth models spatial pattern in the mean; the correlation structure models dependence among residuals.
++++
