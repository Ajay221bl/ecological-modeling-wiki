---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
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

**In one line:** the performance package provides one-line checks of a fitted model, including convergence, collinearity (VIF), singularity, R² and ICC.

> [!info] Before this, it helps to know
> [[lmer() and glmer()]] · [[Variance Inflation Factor]]

## Start from zero
1. **`check_convergence(m)`:** TRUE/FALSE with the gradient.
2. **`check_collinearity(m)`:** VIF for each fixed effect. Values above 5 to 10 flag problems.
3. **`check_singularity(m)`:** same as `lme4::isSingular()`.
4. **`r2(m)`:** marginal and conditional R² for mixed models (Nakagawa).
5. **`icc(m)`:** intraclass correlation.
6. **`check_model(m)`:** a panel of diagnostic plots.
7. **Works across lm, glm, lme4, glmmTMB and others.**

## In R
```r
library(lme4); m <- lmer(Reaction ~ Days + (Days | Subject), sleepstudy); performance::check_convergence(m)[1]; round(unlist(performance::r2(m)), 3)
```

## In the course
`performance::check_convergence()` in the GLMM lab ([[Course Website]]).

## Common confusions
- **"check_model() replaces thinking."** It shows plots you still must interpret.

## Explain it back
- Which function gives a mixed model's VIFs?

*Pass test:* you can run the main checks.

## Connections
- **Builds on:** [[lmer() and glmer()]], [[Variance Inflation Factor]]
- **Leads to:** [[Marginal and Conditional R-squared]], [[Intraclass Correlation]], [[Convergence Warnings]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

Which performance functions check convergence and collinearity?
??
check_convergence() and check_collinearity().
++++
