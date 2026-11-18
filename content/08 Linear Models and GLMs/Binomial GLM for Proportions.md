---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A binomial GLM for proportions models data recorded as a number of successes out of a known number of trials per row."
aliases:
  - "Proportion data"
  - "Grouped binomial"
  - "cbind(successes, failures)"
  - "Aggregated binomial"
status: seedling
---

# Binomial GLM for Proportions

A report card showing "17 out of 20" says more than a bare 85%: 17 of 20 is firmer evidence than 3 of 4, though both are about the same percentage. A **binomial GLM for proportions** models data recorded as a number of successes out of a known number of trials per row, such as nests fledged out of nests found or seeds germinated out of seeds sown ([[Proportion]]). The model is yᵢ ~ Binomial(nᵢ, pᵢ) with [[Logit Link|logit]](pᵢ) = ηᵢ ([[Binomial Distribution]]); [[Logistic Regression]] is the one-trial case. In R, write `glm(cbind(successes, failures) ~ x, family = binomial)`, where the second column is failures, not totals, or equivalently `glm(prop ~ x, weights = n, family = binomial)`.

The code below simulates mortality out of 20 animals at six doses and fits both forms; the coefficients are identical, and the [[Residual Deviance|residual deviance]] divided by residual df is near 1, so there is no overdispersion. Modeling the proportion with `lm()` instead would go wrong three ways: rows with different n have different precision, the variance depends on p, and predictions can leave 0 to 1.

Unlike single 0/1 outcomes, grouped binomial data can be overdispersed, because trials within a row may share a fate, such as chicks in one nest ([[Overdispersion]]). Check the dispersion; if it is high, use [[Quasi-Poisson|quasibinomial]], a [[Beta-binomial Distribution]] or an [[Observation-level Random Effect]] ([[Harrison et al. 2018]], [[Zuur et al. 2009 Ch10]]). It is not for continuous proportions with no count behind them, such as [[Percent Cover|percent cover]], which need [[Beta Regression]]; percent cover is binomial only if it is a count out of a known number of points.

```r
set.seed(12); d <- data.frame(dose = rep(1:6, each = 5), n = 20); d$dead <- rbinom(30, d$n, plogis(-3 + 0.9 * d$dose))
m1 <- glm(cbind(dead, n - dead) ~ dose, family = binomial, data = d)
m2 <- glm(I(dead / n) ~ dose, weights = n, family = binomial, data = d)
rbind(coef(m1), coef(m2)); deviance(m1) / df.residual(m1)            # same model both ways. Ratio near 1: no overdispersion
```

## Connections
- **Builds on:** [[Binomial Distribution]], [[Logistic Regression]], [[Logit Link]], [[Residual Deviance]], [[Quasi-Poisson]]
- **Leads to:** [[Overdispersion]], [[Beta-binomial Distribution]], [[Beta Regression]], [[Observation-level Random Effect]], [[Percent Cover]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

How do you specify successes out of trials in glm()?
??
cbind(successes, failures) ~ predictors, with family = binomial.
++++

Can a binomial GLM for grouped data be overdispersed?
??
Yes, unlike a Bernoulli model for single 0/1 outcomes.
++++
