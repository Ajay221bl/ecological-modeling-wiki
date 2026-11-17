---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A linear mixed model is a linear regression with normally distributed errors plus one or more normally distributed random effects for groups."
aliases:
  - "LMM"
  - "Linear mixed-effects model"
  - "Gaussian mixed model"
  - "Linear mixed model (LMM)"
status: seedling
---

# Linear Mixed Model

A **linear mixed model** (LMM) is a linear regression with normally distributed errors plus one or more normally distributed random effects for groups ([[Mixed Effects Model]], [[Linear Regression|Linear Model]], [[Normal Distribution]]). In matrix form it is y = Xβ + Zb + ε, with b ~ Normal(0, G) and ε ~ Normal(0, σ²I). X holds the predictors for the [[Fixed Effect|fixed effects]], and Z says which group each observation belongs to, plus the slope values for random slopes. It is fitted with `lme4::lmer()` or `nlme::lme()`, by [[REML]] by default.

Its assumptions are a linear fixed part, normal residuals with constant variance, normal random effects, and independence once the random effects are accounted for. Check it with residuals against fitted values, a Q-Q plot of residuals, a Q-Q plot of the random effects, and residuals by group. In the code below the `sleepstudy` model with random intercepts and slopes gives an intercept of 251.4 ms (SE 6.8) and a Days slope of 10.5 ms per day (SE 1.5, t = 6.8).

[[Shipley et al. 2022]] used LMMs (lme4 and lmerTest) for tree swallow body size over decades, with nest as a random effect, and reported marginal and conditional R² ([[Marginal and Conditional R-squared]]). It is taught in the linear mixed models lab ([[Course Website]], [[Zuur et al. 2009 Ch5]]). The non-normal version is the [[GLMM]]. Checking that LMM residuals look like lm residuals is not enough: check them within groups too.

```r
library(lme4); m <- lmer(Reaction ~ Days + (Days | Subject), data = sleepstudy); round(summary(m)$coefficients, 2)
```

## Connections
- **Builds on:** [[Mixed Effects Model]], [[Linear Regression|Linear Model]], [[Normal Distribution]]
- **Leads to:** [[GLMM]], [[REML]], [[lmer() and glmer()]], [[Model Validation]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What is a linear mixed model?
??
A linear regression with normal errors plus normally distributed random effects for groups.
++++
