---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Gamma regression"
  - "Gamma model"
status: seedling
---

# Gamma GLM

**In one line:** a gamma GLM models a positive, continuous, right-skewed response whose spread grows in proportion to its mean, usually with a log link.

> [!info] Before this, it helps to know
> [[Gamma Distribution]] (the random part) · [[Log Link]] (the usual link) · [[Generalized Linear Model]] (the framework)

## The everyday picture
Travel times. A 10-minute trip varies by a minute or two. A 5-hour trip varies by half an hour. The scatter is a constant percentage of the expected value, and it can never be negative.

## Start from zero
1. **Response:** strictly positive continuous values. Biomass, time, distance, concentration.
2. **yᵢ ~ Gamma with mean μᵢ and constant shape.**
3. **Variance ∝ μ².** A constant coefficient of variation.
4. **Link:** log is usual (`Gamma(link = "log")`). R's default is the canonical inverse link, which is awkward to interpret.
5. **Coefficients with a log link are multiplicative,** as in a count model.
6. **Alternative:** a lognormal model (log-transform and use `lm`). The gamma GLM models the mean directly. The lognormal models the median.
7. **Zeros aren't allowed.** With true zeros use a hurdle-gamma or Tweedie model.

## In R
```r
set.seed(24); x <- runif(200, 0, 10); mu <- exp(1 + 0.2 * x); y <- rgamma(200, shape = 4, rate = 4 / mu)
m <- glm(y ~ x, family = Gamma(link = "log")); round(coef(m), 3); exp(coef(m)[2])
c(dispersion = summary(m)$dispersion, one_over_shape = 1 / 4)
```

## In the course
[[Zuur et al. 2009 Ch8]] lists it in the exponential family.

## Common confusions
- **"Gamma is for counts."** It is for positive continuous data.

## Explain it back
- What mean-variance relationship does the gamma assume?

*Pass test:* you can fit a gamma GLM with a log link.

## Connections
- **Builds on:** [[Gamma Distribution]], [[Log Link]]
- **Leads to:** [[Lognormal Distribution]], [[Mean-Variance Relationship]], [[Back-transformation]]
- **Part of:** [[MOC - Generalized Linear Models]]

## Flashcards

What kind of response suits a gamma GLM?
??
Positive, continuous, right-skewed data with variance proportional to the mean squared.
++++
