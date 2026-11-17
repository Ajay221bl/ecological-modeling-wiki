---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Variance components have skewed, bounded sampling distributions, so their confidence intervals come from profiling the likelihood or bootstrapping rather than from estimate ± 2 SE."
aliases:
  - "CIs for variance components"
  - "confint() for mixed models"
  - "Profile CI for random effects"
  - "CI for random-effect SD"
status: seedling
---

# Confidence Intervals for Variance Components

Variance components have skewed, bounded sampling distributions: a variance can't go below zero, so a symmetric Wald interval of estimate ± 2 SE can cross zero ([[Variance Components]]). Their confidence intervals therefore come from profiling the likelihood or from bootstrapping ([[Profile Likelihood Confidence Interval]], [[Parametric Bootstrap]]). For an lmer model `confint(m)` profiles by default and gives intervals for the SDs, the residual SD and the fixed effects; `confint(m, method = "Wald")` returns NA for the variance parameters for this reason; and `confint(m, method = "boot")` or [[bootMer()]] gives parametric bootstrap intervals.

In the code below the `sleepstudy` subject SD has a profile interval of 26.0 to 52.9 around its estimate of 37.1, clearly lopsided, while the residual SD runs from 27.8 to 34.6 and the Days slope from 8.9 to 12.0. With few groups the intervals are wide, which is honest rather than a failure ([[How Many Levels for a Random Effect]]).

Bayesian credible intervals for SDs, from the posterior of `sd_group__Intercept`, are a natural alternative ([[Bayesian GLMM]]). The CIs for mixed models lab uses the sleepstudy and deer data ([[Course Website]]). Wald intervals don't work for SDs: they ignore the skew and the zero boundary.

```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), sleepstudy); round(confint(m, method = "profile", oldNames = FALSE), 1)
```

## Connections
- **Builds on:** [[Variance Components]], [[Profile Likelihood Confidence Interval]], [[Parametric Bootstrap]]
- **Leads to:** [[bootMer()]], [[Wald Confidence Interval]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Wald, Profile and Bootstrap Intervals]]

## Flashcards

Which confint() method does lme4 use by default for lmer models?
??
Profile likelihood.
++++

Why are symmetric Wald intervals poor for variance components?
??
Variances are bounded at zero and have skewed sampling distributions.
++++
