---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - autocorrelation
aliases: []
status: seedling
---

# Why residual autocorrelation can mean a missing covariate

> [!summary] In plain words
> if an important predictor that varies smoothly in space or time is left out, its effect ends up in the residuals, and because it is spatially or temporally structured the residuals inherit that structure.

## The everyday picture
Soil maps of a valley that forgot to include elevation. Every low site has positive residuals and every high site negative ones. The "spatial correlation" is really elevation.

## The question
My residuals are spatially autocorrelated. Is that genuine spatial dependence or something I forgot?

## Built from
- [[Residual Autocorrelation]]: the symptom.
- [[Omitted Variable Bias]]: the cause.
- [[Bubble Plot of Residuals]]: how to see it.
- [[Spatial Correlation Functions]]: what fails to fix it.

## The reasoning, step by step
1. **The residual is everything the model didn't explain.**
2. **A missing smooth covariate (elevation, distance to coast, geology) is spatially structured.**
3. **So the residuals are spatially structured too.**
4. **A correlation structure can soak some of this up,** but the fitted variogram often won't match the empirical one.
5. **Zuur et al. (Ch7.5), Irish river pH:** adding corRatio or corExp lowered AIC from 248 to 206 and 209, yet the variogram of normalised residuals still showed pattern. A bubble plot showed negative residuals along the south and southeast coast and positive ones in the west: a missing covariate.
6. **The fix is a better model of the mean,** not a fancier correlation structure.
7. **Omitted covariates can also bias coefficients** of correlated included predictors, which no correlation structure fixes.

**A worked example in numbers.** Zuur Ch7.5: AIC 248.34 without correlation, 205.95 with corRatio, 208.57 with corExp, but residual pattern remained.

## So in practice
When residuals cluster geographically, map them and ask what varies that way. Add that variable if it can be measured.

## What would go wrong otherwise
Accepting the structure with the lowest AIC without checking whether it actually removed the residual pattern.

## Explain it back
- Why didn't corRatio solve the Irish pH problem?

*Pass test:* you can tell missing-covariate structure from genuine dependence.

## Connections
- **Related:** [[How to detect and handle autocorrelation]], [[Autocorrelation as Signal or Nuisance]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

How can a missing covariate create residual spatial autocorrelation?
??
The omitted variable is spatially structured, so its effect left in the residuals is spatially structured too.
++++

In Zuur's Irish pH example, what revealed the missing covariate?
??
A bubble plot of residuals clustered by coastline.
++++
