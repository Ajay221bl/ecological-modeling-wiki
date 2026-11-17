---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "For mixed models, the marginal R² is the share of variance explained by the fixed effects alone and the conditional R² is the share explained by fixed and random effects together."
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

For mixed models, the **marginal R²** is the share of variance explained by the fixed effects alone, and the **conditional R²** the share explained by fixed and random effects together ([[R-squared]], [[Variance Components]]). Split the variance into σ²_f, the variance of the fixed-effect predictions; σ²_random, the sum of random-effect variances; and σ²_ε, the residual. Then marginal R² = σ²_f / (σ²_f + σ²_random + σ²_ε), and conditional R² = (σ²_f + σ²_random) / (σ²_f + σ²_random + σ²_ε).

GLMMs need a distribution-specific residual variance on the link scale, π²/3 for the logit (Nakagawa, Johnson and Schielzeth 2017), and with an observation-level random effect the conditional R² is inflated by the dispersion term (Harrison 2014). In R use `performance::r2(m)` or `MuMIn::r.squaredGLMM(m)` ([[performance Package Checks]]). In the code below a random-intercept `sleepstudy` model gives a marginal R² of 0.28 and a conditional R² of 0.70, by hand and from `performance` alike.

Nakagawa and Schielzeth (2013) introduced them, and [[Harrison et al. 2018]] recommend reporting both; [[Shipley et al. 2022]] did. Conditional R² does not measure predictive power for new groups, since random effects only help predict groups already seen.

```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), sleepstudy); vf <- var(as.vector(model.matrix(m) %*% fixef(m))); v <- as.data.frame(VarCorr(m))$vcov
round(c(marginal = vf / (vf + sum(v)), conditional = (vf + v[1]) / (vf + sum(v)), unlist(performance::r2(m))), 3)
```

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
