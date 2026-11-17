---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "BLUPs"
  - "Best linear unbiased predictors"
  - "Conditional modes (BLUPs, ranef)"
  - "Predicted random effects"
  - "Empirical Bayes estimates"
status: seedling
---

# Conditional Modes

**In one line:** conditional modes are a mixed model's best guesses of each group's random effect, given the data and the estimated variance components, and they are shrunk toward zero.

> [!info] Before this, it helps to know
> [[Random Effect]] · [[Partial Pooling]]

## Start from zero
1. **Random effects aren't parameters in the frequentist model,** so they are "predicted", not "estimated".
2. **For LMMs they are BLUPs** (best linear unbiased predictors). For GLMMs lme4 calls them conditional modes.
3. **`ranef(m)`** returns them. `coef(m)` adds the fixed effects.
4. **They are shrunk:** their variance is smaller than the estimated σ²_b.
5. **Their uncertainty:** `ranef(m, condVar = TRUE)` gives conditional variances for caterpillar plots (`lattice::dotplot(ranef(m, condVar = TRUE))`).
6. **Don't use them as data in a second analysis** (for example, regressing BLUPs on a site covariate) without care: their uncertainty and shrinkage are ignored. Put the covariate in the model instead.

## In R
```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), data = sleepstudy); b <- ranef(m)$Subject[, 1]
round(c(sd_of_BLUPs = sd(b), estimated_sd_b = attr(VarCorr(m)$Subject, "stddev")[[1]]), 1)      # BLUPs vary less than sigma_b
```

## In the course
`ranef()` in the linear mixed models lab ([[Course Website]]).

## Common confusions
- **"BLUPs are the group means."** They are shrunk group deviations.

## Explain it back
- Why is the SD of BLUPs smaller than σ_b?

*Pass test:* you can extract and plot conditional modes.

## Connections
- **Builds on:** [[Random Effect]], [[Partial Pooling]]
- **Leads to:** [[fixef(), ranef() and VarCorr()]], [[Shrinkage]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What are conditional modes (BLUPs)?
??
The predicted values of each group's random effect, given the data and variance estimates, shrunk toward zero.
++++
