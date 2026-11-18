---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Fixed-effect p-values in mixed models are approximate because the right degrees of freedom aren't known exactly, and packages like lmerTest supply them with the Satterthwaite or Kenward-Roger approximations."
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

In an lm, t = estimate / SE is compared with a t distribution on n − p degrees of freedom. In a [[Mixed Effects Model|mixed model]] the effective df lie somewhere between the number of groups and the number of observations, depending on the level at which the [[Predictor Variable|predictor]] varies, so fixed-effect p-values are approximate ([[P-value]], [[Degrees of Freedom]], [[Student t Distribution|t Distribution]]). lme4's `lmer()` deliberately prints none for this reason. `lmerTest::lmer()` adds Satterthwaite df and p-values to `summary()` and `anova()`, and `ddf = "Kenward-Roger"` uses Kenward-Roger via pbkrtest, which is better in small samples.

For GLMMs, `glmer()` gives Wald z p-values, which can be optimistic with few groups. Other options are [[Likelihood Ratio|likelihood ratio]] tests with ML fits (`anova(m0, m1)`), a parametric bootstrap (`pbkrtest::PBmodcomp`) and confidence intervals ([[Likelihood Ratio Test]]). In the code below lmerTest gives the Days slope t = 6.77 on 17 df, not 178: the slope varies by subject, so the 18 subjects, not the 180 rows, set the df.

[[Shipley et al. 2022]] assessed significance with lmerTest, and the linear mixed models lab uses it ([[Course Website]], [[Harrison et al. 2018]], [[lmer()|lmer() and glmer()]]). The df for the Days slope should not be 178.

```r
m <- lmerTest::lmer(Reaction ~ Days + (Days | Subject), data = lme4::sleepstudy); round(summary(m)$coefficients, 3)        # df near 17: the number of subjects matters, not 180 rows
```

## Connections
- **Builds on:** [[P-value]], [[Degrees of Freedom]], [[Student t Distribution|t Distribution]], [[Mixed Effects Model]], [[Predictor Variable]], [[Likelihood Ratio]]
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
