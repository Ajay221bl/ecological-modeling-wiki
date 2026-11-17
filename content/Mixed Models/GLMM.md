---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Generalized linear mixed model"
  - "GLMM (generalized linear mixed model)"
  - "Generalized Linear Mixed Model"
  - "glmer"
status: seedling
---

# GLMM

**In one line:** a generalized linear mixed model is a GLM (any family and link) with random effects added to the linear predictor, for grouped counts, proportions or binary data.

> [!info] Before this, it helps to know
> [[Generalized Linear Model]] · [[Mixed Effects Model]] · [[Link Function]]

## Start from zero
1. **Linear predictor: ηᵢⱼ = β₀ + b₀ⱼ + β₁xᵢⱼ.**
2. **Response: yᵢⱼ ~ Family(g⁻¹(ηᵢⱼ)).** Poisson with log link, binomial with logit link, and so on.
3. **Random effects live on the link scale.** A random intercept SD of 0.5 on the log scale means groups differ by factors of about e^0.5 = 1.65.
4. **Fitted by approximating the likelihood** (Laplace, adaptive quadrature) with `lme4::glmer()` or `glmmTMB()`, or by MCMC (brms).
5. **No separate residual variance** for Poisson or binomial. Overdispersion must be checked (DHARMa) and handled (OLRE, negative binomial).
6. **Fixed effects are conditional** (for a typical group), not population averages.
7. **Christensen et al. (2020)** used a binomial GLMM for county-level hemorrhagic disease presence, with random intercepts for state and year.

## In R
```r
library(lme4); set.seed(5); d <- data.frame(farm = factor(rep(1:20, each = 15)), len = rnorm(300)); u <- rnorm(20, 0, 1)
d$inf <- rbinom(300, 1, plogis(-0.5 + 0.8 * d$len + u[d$farm])); m <- glmer(inf ~ len + (1 | farm), family = binomial, data = d)
round(c(fixef(m), sd_farm = attr(VarCorr(m)$farm, "stddev")[[1]]), 2)
```

## In the course
Generalized linear mixed models lab (deer *E. cervi* infection by farm, `glmer()`) ([[Course Website]]). [[Christensen et al. 2020]]. [[Harrison et al. 2018]].

## Common confusions
- **"A GLMM's random-effect SD is on the response scale."** It is on the link scale.

## Explain it back
- On what scale do GLMM random effects act?

*Pass test:* you can fit and interpret a binomial or Poisson GLMM.

## Connections
- **Builds on:** [[Generalized Linear Model]], [[Mixed Effects Model]], [[Link Function]]
- **Leads to:** [[Laplace Approximation]], [[Observation-level Random Effect]], [[Marginal Model]], [[Bayesian GLMM]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What is a GLMM?
??
A GLM with random effects added to the linear predictor.
++++

On which scale are GLMM random effects?
??
The link scale (for example log or logit).
++++
