---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "In AIC and its relatives, K is the total number of parameters the model estimates from the data, including variance and dispersion parameters."
aliases:
  - "Number of estimated parameters"
  - "df in logLik"
  - "Model degrees of freedom"
status: seedling
---

# Number of Parameters

In [[AIC]] and its relatives, **K** is the total number of parameters the model estimates from the data ([[Parameter]]). Count every estimated quantity: the intercept, slopes, factor-level contrasts (a factor with L levels adds L − 1) and interaction terms; the [[Residual Standard Error|residual standard deviation]] in a normal model; dispersion parameters such as the negative binomial θ, the beta φ and the gamma shape; every random-effect [[Standard Deviation|standard deviation]] and correlation in a [[Mixed Effects Model|mixed model]]; and ĉ when using [[QAIC]]. Fixed quantities such as an offset's [[Regression Coefficient|coefficient]] are not counted.

R's `logLik()` reports K as `df`, and `AIC()` uses it automatically. In the code below a [[Linear Model|linear model]] with x and a three-level factor has K = 5 (intercept, x, two contrasts, σ); a negative binomial model with one [[Predictor Variable|predictor]] has K = 3 (intercept, slope, θ); and a mixed model with a [[Random Intercept|random intercept]] has K = 4 (intercept, slope, group sd, residual sd). It is related to, but not the same as, residual [[Degrees of Freedom]].

For Bayesian and penalised models the [[Effective Number of Parameters]] is smaller than the nominal count, because priors and penalties constrain the parameters; small K also matters for [[AICc]] and for spotting [[Uninformative Parameters]] ([[Anderson and Burnham 2002]]). σ is a parameter, not "just error": it is estimated, so it counts.

```r
d <- data.frame(y = rnorm(30), x = rnorm(30), f = gl(3, 10), g = gl(6, 5))
attr(logLik(lm(y ~ x + f, d)), "df")                                    # intercept, x, 2 contrasts, sigma = 5
attr(logLik(MASS::glm.nb(rpois(30, 3) ~ x, d)), "df")                    # intercept, slope, theta = 3
suppressMessages(attr(logLik(lme4::lmer(y ~ x + (1 | g), d, REML = FALSE)), "df"))     # intercept, slope, group sd, residual sd = 4
```

## Connections
- **Builds on:** [[Parameter]], [[Degrees of Freedom]], [[Residual Standard Error]], [[Standard Deviation]], [[Regression Coefficient]], [[Linear Model]], [[Predictor Variable]]
- **Leads to:** [[AIC]], [[AICc]], [[Effective Number of Parameters]], [[Uninformative Parameters]], [[Mixed Effects Model]], [[Random Intercept]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What does K count in AIC?
??
All estimated parameters, including variance, dispersion and random-effect parameters.
++++

How many parameters does a factor with L levels contribute?
??
L − 1.
++++
