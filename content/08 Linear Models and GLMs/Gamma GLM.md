---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A gamma GLM models a positive, continuous, right-skewed response whose spread grows in proportion to its mean, usually with a log link."
aliases:
  - "Gamma regression"
  - "Gamma model"
status: seedling
---

# Gamma GLM

A 10-minute trip varies by a minute or two; a 5-hour trip varies by half an hour. The scatter is a constant percentage of the [[Expected Value|expected value]], and travel time can never be negative. A **gamma GLM** models a positive, continuous, right-skewed response of that kind, such as biomass, time, distance or concentration, using the [[Gamma Distribution]] with mean μᵢ and constant shape ([[Generalized Linear Model]]). Its variance is [[Proportional To|proportional to]] μ², a constant [[Coefficient of Variation|coefficient of variation]] ([[Mean-Variance Relationship]]). The usual link is log, `Gamma(link = "log")`; R's default is the canonical [[Inverse Link Function|inverse link]], which is awkward to interpret. With a log link the coefficients are multiplicative, as in a count model ([[Log Link]]).

In the code below, data are simulated with log-mean 1 + 0.2x and shape 4. The gamma GLM recovers the coefficients, a multiplier of exp(0.2) = 1.22 per unit of x, and a dispersion close to 1/shape = 0.25.

The alternative is a lognormal model: log-transform and use `lm()`. The gamma GLM models the mean directly, while the lognormal models the median, which matters when back-transforming ([[Lognormal Distribution]], [[Back-transformation]]). Zeros are not allowed; with true zeros, use a hurdle-gamma or [[Tweedie Distribution|Tweedie]] model ([[Zuur et al. 2009 Ch8]]). The gamma is for positive [[Continuous Data|continuous data]], not for counts.

```r
set.seed(24); x <- runif(200, 0, 10); mu <- exp(1 + 0.2 * x); y <- rgamma(200, shape = 4, rate = 4 / mu)
m <- glm(y ~ x, family = Gamma(link = "log")); round(coef(m), 3); exp(coef(m)[2])
c(dispersion = summary(m)$dispersion, one_over_shape = 1 / 4)
```

## Connections
- **Builds on:** [[Gamma Distribution]], [[Log Link]], [[Expected Value]], [[Proportional To]], [[Coefficient of Variation]], [[Inverse Link Function]], [[Continuous Data]]
- **Leads to:** [[Lognormal Distribution]], [[Mean-Variance Relationship]], [[Back-transformation]], [[Tweedie Distribution]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What kind of response suits a gamma GLM?
??
Positive, continuous, right-skewed data with variance proportional to the mean squared.
++++
