---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "ICC"
  - "Intra-class correlation coefficient"
  - "Repeatability"
  - "Adjusted ICC"
status: seedling
---

# Intraclass Correlation

**In one line:** the intraclass correlation is the share of the total variance that lies between groups, which equals the correlation between two observations from the same group.

> [!info] Before this, it helps to know
> [[Variance Components]] · [[Correlation]]

## Start from zero
1. **ICC = σ²_group / (σ²_group + σ²_residual).**
2. **Near 0:** groups barely differ; observations are almost independent.
3. **Near 1:** observations within a group are nearly identical; the group is the real unit of information.
4. **In behavioural ecology this is "repeatability"** (Nakagawa and Schielzeth 2010): how consistent individuals are.
5. **For GLMMs** the residual variance is defined on the link scale (π²/3 for logit), so ICCs are approximate.
6. **`performance::icc(m)`** computes it.
7. **Design implication:** with high ICC, adding more groups helps far more than adding observations per group.

## In R
```r
library(lme4); m <- lmer(Reaction ~ 1 + (1 | Subject), data = sleepstudy); v <- as.data.frame(VarCorr(m))$vcov
round(c(ICC_by_hand = v[1] / sum(v), performance = performance::icc(m)$ICC_adjusted), 3)
```

## In the course
[[Harrison et al. 2018]] (repeatability from an intercept-only model).

## Common confusions
- **"High ICC means the predictor is strong."** It is about grouping, not predictors.

## Explain it back
- What does an ICC of 0.8 imply about sampling more within groups?

*Pass test:* you can compute an ICC and use it in design.

## Connections
- **Builds on:** [[Variance Components]], [[Correlation]]
- **Leads to:** [[Compound Symmetry]], [[Effective Sample Size|Effective Sample Size under Autocorrelation]], [[Pseudoreplication]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

How is the intraclass correlation computed?
??
σ²_group / (σ²_group + σ²_residual).
++++

What is repeatability in behavioural ecology?
??
The intraclass correlation of a trait measured repeatedly on the same individuals.
++++
