---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "LMM"
  - "Linear mixed-effects model"
  - "Gaussian mixed model"
  - "Linear mixed model (LMM)"
status: seedling
---

# Linear Mixed Model

**In one line:** a linear mixed model is a linear regression with normally distributed errors plus one or more normally distributed random effects for groups.

> [!info] Before this, it helps to know
> [[Mixed Effects Model]] (the general idea) · [[Linear Regression|Linear Model]] (the fixed part) · [[Normal Distribution]]

## Start from zero
1. **y = Xβ + Zb + ε,** with b ~ Normal(0, G) and ε ~ Normal(0, σ²I).
2. **X holds the predictors for fixed effects. Z says which group each observation belongs to** (and the slope values for random slopes).
3. **Fitted with `lme4::lmer()` or `nlme::lme()`,** by REML by default.
4. **Assumptions:** linear fixed part, normal residuals with constant variance, normal random effects, independence given the random effects.
5. **Check:** residuals versus fitted, Q-Q of residuals, Q-Q of random effects, residuals by group.
6. **Shipley et al. (2022)** used LMMs (lme4, lmerTest) for tree swallow body size over decades, with nest as a random effect, and reported marginal and conditional R².

## In R
```r
library(lme4); m <- lmer(Reaction ~ Days + (Days | Subject), data = sleepstudy); round(summary(m)$coefficients, 2)
```

## In the course
Linear mixed models lab ([[Course Website]]). [[Zuur et al. 2009 Ch5]]. [[Shipley et al. 2022]].

## Common confusions
- **"LMM residuals should look like lm residuals with no structure by group."** Check them within groups too.

## Explain it back
- What do X and Z hold?

*Pass test:* you can fit and check an LMM.

## Connections
- **Builds on:** [[Mixed Effects Model]], [[Linear Regression|Linear Model]], [[Normal Distribution]]
- **Leads to:** [[GLMM]], [[REML]], [[lmer() and glmer()]], [[Model Validation]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What is a linear mixed model?
??
A linear regression with normal errors plus normally distributed random effects for groups.
++++
