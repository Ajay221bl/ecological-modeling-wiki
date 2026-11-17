---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "REML estimates variance components after removing the information used up by the fixed effects, which avoids the downward bias in variances that ordinary maximum likelihood has."
aliases:
  - "Restricted maximum likelihood"
  - "Residual maximum likelihood"
  - "REML estimation"
status: seedling
---

# REML

Dividing by n − 1 instead of n for a sample variance corrects for having estimated the mean from the same data; **REML**, restricted maximum likelihood, generalises that idea. It estimates [[Variance Components]] after removing the information used up by the fixed effects, which avoids the downward bias that ordinary [[Maximum Likelihood Estimation]] has because ML treats the estimated fixed effects as if they were known ([[Degrees of Freedom]]). It does this by maximising a likelihood of residual contrasts that don't depend on the fixed effects; for a simple sample, ML variance divides by n and REML by n − 1.

Use REML for final estimates of variance components and for comparing models that differ only in random effects; use ML to compare models with different fixed effects, because REML likelihoods for different fixed parts are not comparable ([[Top-down Model Selection Protocol]]). The difference is small with many groups and few fixed effects and large with few groups. In the code below REML gives a subject SD of 37.1 and residual SD of 31.0 for `sleepstudy`, and ML a slightly smaller 36.0 and 30.9.

REML is the default in `lmer()` and `lme()` but not available for GLMMs in lme4, where `glmer()` uses ML ([[Zuur et al. 2009 Ch5]], [[Harrison et al. 2018]], [[Course Website]]). Don't compare any two models by AIC from REML fits; only do it when their fixed effects are identical ([[REML vs ML]]).

```r
library(lme4); m_reml <- lmer(Reaction ~ Days + (1 | Subject), sleepstudy); m_ml <- update(m_reml, REML = FALSE)
round(rbind(REML = as.data.frame(VarCorr(m_reml))$sdcor, ML = as.data.frame(VarCorr(m_ml))$sdcor), 2)       # ML variances slightly smaller
```

## Connections
- **Builds on:** [[Maximum Likelihood Estimation]], [[Variance Components]], [[Degrees of Freedom]]
- **Leads to:** [[REML vs ML]], [[Top-down Model Selection Protocol]], [[Why the variance divides by n minus 1]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What is REML?
??
Restricted maximum likelihood: estimating variances after accounting for the fixed effects, which reduces bias.
++++

When must you use ML rather than REML?
??
When comparing models with different fixed effects.
++++
