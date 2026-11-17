---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Variance component"
  - "Random-effect variance"
  - "Variance partitioning (mixed models)"
status: seedling
---

# Variance Components

**In one line:** variance components are the separate variances a mixed model estimates, one for each random effect and one for the residual, showing how much variation lies at each level of the hierarchy.

> [!info] Before this, it helps to know
> [[Variance]] · [[Random Effect]] · [[Hierarchical Data]]

## Start from zero
1. **Random-intercept model:** total variance = σ²_group + σ²_residual.
2. **More levels add more components:** σ²_region + σ²_site + σ²_residual.
3. **`VarCorr(m)`** reports them (as SDs by default; `print(VarCorr(m), comp = "Variance")` for variances).
4. **Their ratios answer biological questions:** how repeatable is a trait (ICC), how much variation is among sites versus within.
5. **Estimate them with REML** for Gaussian models (less biased than ML).
6. **They can't be negative.** A zero estimate means a singular fit.
7. **Their uncertainty is often large** with few groups. Get intervals by profiling or bootstrapping.

## In R
```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), data = sleepstudy); vc <- as.data.frame(VarCorr(m)); vc[, c("grp", "vcov", "sdcor")]
```

## In the course
[[Harrison et al. 2018]] (estimating variance components, the clutch-mass example). [[Zuur et al. 2009 Ch5]].

## Common confusions
- **"VarCorr shows variances."** It prints standard deviations by default.

## Explain it back
- What does VarCorr() print by default?

*Pass test:* you can extract and interpret variance components.

## Connections
- **Builds on:** [[Variance]], [[Random Effect]], [[Hierarchical Data]]
- **Leads to:** [[Intraclass Correlation]], [[REML]], [[Confidence Intervals for Variance Components]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What are variance components?
??
The separate variances estimated for each random effect and the residual in a mixed model.
++++
