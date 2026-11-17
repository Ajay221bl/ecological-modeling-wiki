---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Marginal R2"
  - "Conditional R2"
  - "Nakagawa R2"
  - "R2 for mixed models"
  - "Marginal vs Conditional R-squared"
  - "r.squaredGLMM()"
status: seedling
---

# Marginal and Conditional R-squared

**In one line:** for mixed models, the marginal R² is the share of variance explained by the fixed effects alone and the conditional R² is the share explained by fixed and random effects together.

> [!info] Before this, it helps to know
> [[R-squared]] · [[Variance Components]]

## Start from zero
1. **Variance split:** σ²_f (variance of fixed-effect predictions), σ²_random (sum of random-effect variances), σ²_ε (residual).
2. **Marginal R² = σ²_f / (σ²_f + σ²_random + σ²_ε).**
3. **Conditional R² = (σ²_f + σ²_random) / (σ²_f + σ²_random + σ²_ε).**
4. **Nakagawa and Schielzeth (2013)** introduced them. Harrison et al. recommend reporting both.
5. **GLMMs need a distribution-specific residual variance** on the link scale (π²/3 for logit). Extended by Nakagawa, Johnson and Schielzeth (2017).
6. **With an OLRE, conditional R² is inflated** by the dispersion term (Harrison 2014).
7. **R:** `performance::r2(m)` or `MuMIn::r.squaredGLMM(m)`.

## In R
```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), sleepstudy); vf <- var(as.vector(model.matrix(m) %*% fixef(m))); v <- as.data.frame(VarCorr(m))$vcov
round(c(marginal = vf / (vf + sum(v)), conditional = (vf + v[1]) / (vf + sum(v)), unlist(performance::r2(m))), 3)
```

## In the course
[[Harrison et al. 2018]] (R² section). [[Shipley et al. 2022]] report conditional and marginal R².

## Common confusions
- **"Conditional R² measures predictive power for new groups."** Random effects only help predict groups already seen.

## Explain it back
- Which R² includes the random effects?

*Pass test:* you can compute and report both.

## Connections
- **Builds on:** [[R-squared]], [[Variance Components]]
- **Leads to:** [[performance Package Checks]], [[Observation-level Random Effect]], [[Intraclass Correlation]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What is marginal R² for a mixed model?
??
Variance explained by fixed effects alone.
++++

What is conditional R² for a mixed model?
??
Variance explained by fixed and random effects together.
++++
