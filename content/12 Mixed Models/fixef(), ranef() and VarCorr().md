---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "`fixef()`, `ranef()` and `VarCorr()` pull the three main pieces out of a fitted mixed model: the fixed effects, the predicted group deviations, and the variances and correlations of the random effects."
aliases:
  - "fixef()"
  - "ranef()"
  - "VarCorr()"
  - "coef() for mixed models"
  - "Extracting mixed model results"
status: seedling
---

# fixef(), ranef() and VarCorr()

`fixef()`, `ranef()` and `VarCorr()` pull the three main pieces out of a fitted [[Mixed Effects Model|mixed model]]: the [[Fixed Effect|fixed effects]], the predicted group [[Deviation|deviations]] ([[Conditional Modes]]), and the variances and correlations of the [[Random Effect|random effects]] ([[Variance Components]], [[lmer()|lmer() and glmer()]]). `fixef(m)` returns a named vector; `ranef(m)` returns a list with one [[Data Frame|data frame]] per [[Grouping Variable|grouping factor]], rows for levels and columns for deviations; `coef(m)` adds the two to give each group's own coefficients; `VarCorr(m)` gives the SDs and correlations and the residual SD, and `as.data.frame(VarCorr(m))` turns them into a tidy table. `sigma(m)` gives the residual SD alone.

In the code below the `sleepstudy` fixed effects are 251.4 and 10.47. Subject 308's deviations are +2.3 for the intercept and +9.2 for the slope, so `coef()` gives it 253.7 and 19.7; subject 309's are −40.4 and −8.6. `VarCorr` reports SDs of 24.7 and 5.9, a correlation of 0.07 and a residual SD of 25.6.

The labs use them with [[tidy()|broom.mixed]], where `tidy(m, effects = "fixed")` or `"ran_pars"` gives data frames ([[Course Website]]). For mixed models `coef()` does not return the fixed effects; it returns group-specific coefficients.

```r
library(lme4); m <- lmer(Reaction ~ Days + (Days | Subject), data = sleepstudy)
fixef(m); head(ranef(m)$Subject, 2); head(coef(m)$Subject, 2); as.data.frame(VarCorr(m))[, c("grp", "var1", "var2", "sdcor")]
```

## Connections
- **Builds on:** [[lmer()|lmer() and glmer()]], [[Mixed Effects Model]], [[Deviation]], [[Random Effect]], [[Data Frame]], [[Grouping Variable]], [[tidy()]]
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
