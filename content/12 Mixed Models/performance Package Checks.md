---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "The performance package provides one-line checks of a fitted model, including convergence, collinearity (VIF), singularity, R² and ICC."
aliases:
  - "performance package"
  - "check_collinearity()"
  - "check_model()"
  - "check_singularity()"
  - "r2()"
  - "icc()"
  - "check_convergence() and check_collinearity()"
status: seedling
---

# performance Package Checks

The **performance** package gives one-line checks of a fitted model, working across lm, glm, lme4, glmmTMB and others ([[lmer()|lmer() and glmer()]]). `check_convergence(m)` returns TRUE or FALSE with the gradient ([[Convergence Warnings]]); `check_collinearity(m)` gives a [[Variance Inflation Factor]] for each [[Fixed Effect|fixed effect]], with values above 5 to 10 flagging problems; `check_singularity(m)` matches `lme4::isSingular()` ([[Singular Fit]]); `r2(m)` gives marginal and conditional R² ([[Marginal vs Conditional R-squared|Marginal and Conditional R-squared]]); `icc(m)` gives the [[Intraclass Correlation]]; and `check_model(m)` draws a panel of [[plot() Diagnostics for lm|diagnostic plots]].

In the code below the `sleepstudy` model with [[Random Slope|random slopes]] passes the convergence check, and `r2()` reports a conditional R² of 0.80 and a marginal R² of 0.28: Days alone explains 28% of the variance, and adding subject differences raises it to 80%.

`performance::check_convergence()` is used in the [[GLMM]] lab ([[Course Website]]). `check_model()` doesn't replace thinking: it shows plots you still have to interpret.

```r
library(lme4); m <- lmer(Reaction ~ Days + (Days | Subject), sleepstudy); performance::check_convergence(m)[1]; round(unlist(performance::r2(m)), 3)
```

## Connections
- **Builds on:** [[lmer()|lmer() and glmer()]], [[Variance Inflation Factor]], [[Fixed Effect]], [[plot() Diagnostics for lm]], [[Random Slope]], [[GLMM]]
- **Leads to:** [[Marginal vs Conditional R-squared|Marginal and Conditional R-squared]], [[Intraclass Correlation]], [[Convergence Warnings]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

Which performance functions check convergence and collinearity?
??
check_convergence() and check_collinearity().
++++
