---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "lmerTest"
  - "Satterthwaite"
  - "Kenward-Roger"
  - "Denominator degrees of freedom"
  - "Satterthwaite approximation"
  - "p-values in Mixed Models (Satterthwaite, Kenward-Roger, lmerTest)"
status: seedling
---

# p-values in Mixed Models

**In one line:** fixed-effect p-values in mixed models are approximate because the right degrees of freedom aren't known exactly, and packages like lmerTest supply them with the Satterthwaite or Kenward-Roger approximations.

> [!info] Before this, it helps to know
> [[P-value]] · [[Degrees of Freedom]] · [[Student t Distribution|t Distribution]]

## Start from zero
1. **In lm, t = estimate/SE is compared with a t distribution on n − p df.**
2. **In a mixed model, the effective df lies somewhere between the number of groups and the number of observations,** depending on the predictor's level.
3. **lme4's `lmer()` deliberately prints no p-values** for this reason.
4. **`lmerTest::lmer()`** adds Satterthwaite df and p-values to `summary()` and `anova()`. `ddf = "Kenward-Roger"` uses KR (via pbkrtest), better in small samples.
5. **For GLMMs, `glmer()` gives Wald z p-values,** which can be optimistic with few groups.
6. **Other options:** likelihood ratio tests with ML fits (`anova(m0, m1)`), parametric bootstrap (`pbkrtest::PBmodcomp`), confidence intervals.
7. **Shipley et al. (2022)** assessed significance with lmerTest.

## In R
```r
m <- lmerTest::lmer(Reaction ~ Days + (Days | Subject), data = lme4::sleepstudy); round(summary(m)$coefficients, 3)        # df near 17: the number of subjects matters, not 180 rows
```

## In the course
`lmerTest` for p-values in the linear mixed models lab ([[Course Website]]). [[Harrison et al. 2018]]. [[Shipley et al. 2022]].

## Common confusions
- **"df for the Days slope should be 178."** The slope varies by subject, so its df is close to the number of subjects.

## Explain it back
- Why are df for a random-slope predictor near the number of groups?

*Pass test:* you can get and defend mixed-model p-values.

## Connections
- **Builds on:** [[P-value]], [[Degrees of Freedom]], [[Student t Distribution|t Distribution]]
- **Leads to:** [[Boundary Problem When Testing Variances]], [[Parametric Bootstrap]], [[Likelihood Ratio Test]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

Why doesn't lmer() print p-values?
??
The correct degrees of freedom for mixed models are not known exactly.
++++

Which package adds Satterthwaite p-values to lmer models?
??
lmerTest.
++++
