---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "CIs for variance components"
  - "confint() for mixed models"
  - "Profile CI for random effects"
  - "CI for random-effect SD"
status: seedling
---

# Confidence Intervals for Variance Components

**In one line:** variance components have skewed, bounded sampling distributions, so their confidence intervals come from profiling the likelihood or bootstrapping rather than from estimate ± 2 SE.

> [!info] Before this, it helps to know
> [[Variance Components]] · [[Profile Likelihood Confidence Interval]] · [[Parametric Bootstrap]]

## Start from zero
1. **A variance can't go below zero,** so its sampling distribution is skewed and a symmetric Wald interval can cross zero.
2. **`confint(m)`** for an lmer model profiles the likelihood by default: intervals for SDs (`.sig01`, ...), the residual SD (`.sigma`) and fixed effects.
3. **`confint(m, method = "Wald")`** returns NA for the variance parameters for this reason.
4. **`confint(m, method = "boot")`** or `bootMer()` gives parametric bootstrap intervals.
5. **With few groups the intervals are wide.** That is honest, not a failure.
6. **Bayesian credible intervals for SDs** are a natural alternative (posterior of `sd_group__Intercept`).

## In R
```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), sleepstudy); round(confint(m, method = "profile", oldNames = FALSE), 1)
```

## In the course
CIs for mixed models lab (sleepstudy and deer data; [[Course Website]]).

## Common confusions
- **"Wald intervals work for SDs."** They ignore the skew and the zero boundary.

## Explain it back
- Why does confint(method = "Wald") return NA for random-effect SDs?

*Pass test:* you can get intervals for variance components.

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
