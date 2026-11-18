---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Conditional modes are a mixed model's best guesses of each group's random effect, given the data and the estimated variance components, and they are shrunk toward zero."
aliases:
  - "BLUPs"
  - "Best linear unbiased predictors"
  - "Conditional modes (BLUPs, ranef)"
  - "Predicted random effects"
  - "Empirical Bayes estimates"
status: seedling
---

# Conditional Modes

**Conditional modes** are a [[Mixed Effects Model|mixed model]]'s best guesses of each group's random effect, given the data and the estimated [[Variance Components|variance components]] ([[Random Effect]]). In the frequentist model random effects aren't parameters, so they are "predicted" rather than "estimated". For LMMs they are BLUPs, best linear unbiased predictors; for GLMMs lme4 calls them conditional modes. `ranef(m)` returns them and `coef(m)` adds the [[Fixed Effect|fixed effects]].

They are shrunk toward zero ([[Partial Pooling]]), so their variance is smaller than the estimated σ²_b. In the code below the `sleepstudy` BLUPs have an SD of 35.9 against an estimated σ_b of 37.1. Their uncertainty comes from `ranef(m, condVar = TRUE)`, which gives conditional variances for caterpillar plots with `lattice::dotplot(ranef(m, condVar = TRUE))` ([[fixef(), ranef() and VarCorr()]]).

Don't use them as data in a second analysis, such as regressing BLUPs on a site [[Predictor Variable|covariate]], without care, since their uncertainty and shrinkage are ignored; put the covariate in the model instead. They are extracted with `ranef()` in the lab ([[Course Website]]). BLUPs are not the group means; they are shrunk group [[Deviation|deviations]].

```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), data = sleepstudy); b <- ranef(m)$Subject[, 1]
round(c(sd_of_BLUPs = sd(b), estimated_sd_b = attr(VarCorr(m)$Subject, "stddev")[[1]]), 1)      # BLUPs vary less than sigma_b
```

## Connections
- **Builds on:** [[Random Effect]], [[Partial Pooling]], [[Mixed Effects Model]], [[Variance Components]], [[Fixed Effect]], [[Predictor Variable]], [[Deviation]]
- **Leads to:** [[fixef(), ranef() and VarCorr()]], [[Shrinkage]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What are conditional modes (BLUPs)?
??
The predicted values of each group's random effect, given the data and variance estimates, shrunk toward zero.
++++
