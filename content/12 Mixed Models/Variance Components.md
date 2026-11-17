---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Variance components are the separate variances a mixed model estimates, one for each random effect and one for the residual, showing how much variation lies at each level of the hierarchy."
aliases:
  - "Variance component"
  - "Random-effect variance"
  - "Variance partitioning (mixed models)"
status: seedling
---

# Variance Components

**Variance components** are the separate variances a mixed model estimates, one for each random effect and one for the residual, showing how much variation lies at each level of the hierarchy ([[Variance]], [[Random Effect]], [[Hierarchical Data]]). In a random-intercept model, total variance = σ²_group + σ²_residual; more levels add more components, as in σ²_region + σ²_site + σ²_residual. Their ratios answer biological questions, such as how repeatable a trait is ([[Intraclass Correlation]]) or how much variation is among sites versus within.

`VarCorr(m)` reports them as SDs by default; `print(VarCorr(m), comp = "Variance")` gives variances. In the code below the `sleepstudy` subject variance is 1,378 (SD 37.1) and the residual variance 960 (SD 31.0). Estimate them with [[REML]] for normal models, which is less biased than ML.

They can't be negative, and a zero estimate means a [[Singular Fit]]. Their uncertainty is often large with few groups, so get intervals by profiling or bootstrapping ([[Confidence Intervals for Variance Components]]). [[Harrison et al. 2018]] discuss estimating them with a clutch-mass example ([[Zuur et al. 2009 Ch5]]). `VarCorr` shows standard deviations by default, not variances.

```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), data = sleepstudy); vc <- as.data.frame(VarCorr(m)); vc[, c("grp", "vcov", "sdcor")]
```

## Connections
- **Builds on:** [[Variance]], [[Random Effect]], [[Hierarchical Data]]
- **Leads to:** [[Intraclass Correlation]], [[REML]], [[Confidence Intervals for Variance Components]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What are variance components?
??
The separate variances estimated for each random effect and the residual in a mixed model.
++++
