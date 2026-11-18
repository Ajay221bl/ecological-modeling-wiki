---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A generalized linear mixed model is a GLM (any family and link) with random effects added to the linear predictor, for grouped counts, proportions or binary data."
aliases:
  - "Generalized linear mixed model"
  - "GLMM (generalized linear mixed model)"
  - "Generalized Linear Mixed Model"
status: seedling
---

# GLMM

A **generalized linear mixed model** (GLMM) is a GLM, with any family and link, plus [[Random Effect|random effects]] in the [[Linear Predictor|linear predictor]], for grouped counts, proportions or binary data ([[Generalized Linear Model]], [[Mixed Effects Model]], [[Link Function]]). The linear predictor is ηᵢⱼ = β₀ + b₀ⱼ + β₁xᵢⱼ, and the response is yᵢⱼ ~ Family(g⁻¹(ηᵢⱼ)), such as Poisson with a [[Log Link|log link]] or binomial with a [[Logit Link|logit link]]. The random effects live on the [[Link Scale|link scale]]: a random-intercept SD of 0.5 on the log scale means groups differ by factors of about e^0.5 = 1.65.

The likelihood has no closed form, so it is approximated with the [[Laplace Approximation]] or adaptive quadrature in `lme4::glmer()` or `glmmTMB()`, or the model is fitted by MCMC in brms ([[Bayesian GLMM]]). Poisson and binomial GLMMs have no separate [[Residual Standard Error|residual variance]], so overdispersion must be checked (DHARMa) and handled with an observation-level random effect or a negative binomial ([[Overdispersion]]). In the code below, simulated infection data from 20 farms give an intercept of −0.43, a length effect of 0.79 and a farm SD of 0.93, close to the true −0.5, 0.8 and 1.

Its [[Fixed Effect|fixed effects]] are conditional, for a typical group, not population averages ([[Marginal Model]]). [[Christensen et al. 2020]] used a binomial GLMM for county-level haemorrhagic disease presence with [[Random Intercept|random intercepts]] for state and year. The generalized linear mixed models lab fits deer *E. cervi* infection by farm with `glmer()` ([[Course Website]], [[Harrison et al. 2018]]). A GLMM's random-effect SD is on the link scale, not the [[Response Scale|response scale]].

```r
library(lme4); set.seed(5); d <- data.frame(farm = factor(rep(1:20, each = 15)), len = rnorm(300)); u <- rnorm(20, 0, 1)
d$inf <- rbinom(300, 1, plogis(-0.5 + 0.8 * d$len + u[d$farm])); m <- glmer(inf ~ len + (1 | farm), family = binomial, data = d)
round(c(fixef(m), sd_farm = attr(VarCorr(m)$farm, "stddev")[[1]]), 2)
```

## Connections
- **Builds on:** [[Generalized Linear Model]], [[Mixed Effects Model]], [[Link Function]], [[Random Effect]], [[Linear Predictor]], [[Log Link]], [[Logit Link]], [[Link Scale]], [[Residual Standard Error]], [[Fixed Effect]], [[Random Intercept]], [[Response Scale]]
- **Leads to:** [[Laplace Approximation]], [[Observation-level Random Effect]], [[Marginal Model]], [[Bayesian GLMM]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What is a GLMM?
??
A GLM with random effects added to the linear predictor.
++++

On which scale are GLMM random effects?
??
The link scale (for example log or logit).
++++
