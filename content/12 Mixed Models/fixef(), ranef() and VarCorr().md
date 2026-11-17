---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "fixef()"
  - "ranef()"
  - "VarCorr()"
  - "coef() for mixed models"
  - "Extracting mixed model results"
status: seedling
---

# fixef(), ranef() and VarCorr()

**In one line:** `fixef()`, `ranef()` and `VarCorr()` pull the three main pieces out of a fitted mixed model: the fixed effects, the predicted group deviations, and the variances and correlations of the random effects.

> [!info] Before this, it helps to know
> [[lmer() and glmer()]]

## Start from zero
1. **`fixef(m)`:** named vector of fixed effects.
2. **`ranef(m)`:** list with one data frame per grouping factor; rows are levels, columns are deviations.
3. **`coef(m)`:** fixed + random for each group (group-specific coefficients).
4. **`VarCorr(m)`:** SDs and correlations of random effects and the residual SD. `as.data.frame(VarCorr(m))` gives a tidy table.
5. **`sigma(m)`:** residual SD.
6. **broom.mixed:** `tidy(m, effects = "fixed")` or `"ran_pars"` gives data frames, as used in the labs.

## In R
```r
library(lme4); m <- lmer(Reaction ~ Days + (Days | Subject), data = sleepstudy)
fixef(m); head(ranef(m)$Subject, 2); head(coef(m)$Subject, 2); as.data.frame(VarCorr(m))[, c("grp", "var1", "var2", "sdcor")]
```

## In the course
Labs use these with `broom.mixed` ([[Course Website]]).

## Common confusions
- **"coef() returns fixed effects."** For mixed models it returns group-specific coefficients.

## Explain it back
- What is the difference between ranef() and coef()?

*Pass test:* you can extract every part of a mixed model.

## Connections
- **Builds on:** [[lmer() and glmer()]]
- **Leads to:** [[Conditional Modes]], [[Variance Components]], [[Fixed Effect]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What does coef() return for an lmer model?
??
Group-specific coefficients: fixed effects plus each group's random deviations.
++++

What does VarCorr() return?
??
The standard deviations and correlations of the random effects and the residual.
++++
