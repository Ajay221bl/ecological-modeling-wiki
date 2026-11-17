---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Number of estimated parameters"
  - "df in logLik"
  - "Model degrees of freedom"
status: seedling
---

# Number of Parameters

**In one line:** in AIC and its relatives, K is the total number of parameters the model estimates from the data, including variance and dispersion parameters.

> [!info] Before this, it helps to know
> [[Parameter]] (what is counted) · [[AIC]] (where it is used) · [[Degrees of Freedom]] (a related count)

## Start from zero
1. **Count every estimated quantity:** intercept, slopes, factor-level contrasts, interaction terms.
2. **Plus the residual standard deviation** in a normal model.
3. **Plus dispersion parameters:** negative binomial θ, beta φ, gamma shape.
4. **Plus variance components and correlations** in mixed models (each random-effect sd and correlation).
5. **Plus ĉ** when using QAIC.
6. **A factor with L levels adds L − 1.**
7. **R's `logLik()` reports it as `df`.** `AIC()` uses it automatically.
8. **Not counted:** fixed quantities such as an offset's coefficient.
9. **For Bayesian and penalised models** the effective number of parameters (pD, p_waic) is smaller than the nominal count, because priors and penalties constrain parameters.

## In R
```r
d <- data.frame(y = rnorm(30), x = rnorm(30), f = gl(3, 10), g = gl(6, 5))
attr(logLik(lm(y ~ x + f, d)), "df")                                    # intercept, x, 2 contrasts, sigma = 5
attr(logLik(MASS::glm.nb(rpois(30, 3) ~ x, d)), "df")                    # intercept, slope, theta = 3
suppressMessages(attr(logLik(lme4::lmer(y ~ x + (1 | g), d, REML = FALSE)), "df"))     # intercept, slope, group sd, residual sd = 4
```

## In the course
[[Anderson and Burnham 2002]] stress counting all parameters.

## Common confusions
- **"σ isn't a parameter, it's just error."** It is estimated, so it counts.

## Explain it back
- What is K for a Poisson GLM with one continuous predictor and a three-level factor?

*Pass test:* you can count K for an lm, a GLM and a mixed model.

## Connections
- **Builds on:** [[Parameter]], [[Degrees of Freedom]]
- **Leads to:** [[AIC]], [[AICc]], [[Effective Number of Parameters]], [[Uninformative Parameters]]
- **Part of:** [[MOC - Model Selection]]

## Flashcards

What does K count in AIC?
??
All estimated parameters, including variance, dispersion and random-effect parameters.
++++

How many parameters does a factor with L levels contribute?
??
L − 1.
++++
