---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Model residual deviance"
status: seedling
---

# Residual Deviance

**In one line:** residual deviance is the deviance left over after fitting your model, the GLM counterpart of the residual sum of squares.

> [!info] Before this, it helps to know
> [[Deviance]] (what is measured) · [[Null Deviance]] (the baseline) · [[Degrees of Freedom]] (it comes with n − p)

## The everyday picture
Your golf score after the lessons. Compare it with the score before to see what the lessons bought.

## Start from zero
1. **The deviance of the fitted model.**
2. **Degrees of freedom: n − number of estimated coefficients.**
3. **Compare with the null deviance** to see how much the predictors explain.
4. **Rough dispersion check for Poisson and grouped binomial models:** residual deviance ÷ residual df should be near 1. Much larger suggests overdispersion.
5. **That check fails for 0/1 data** and is unreliable when counts are small. The Pearson statistic or simulation is safer.

## In R
```r
set.seed(3); x <- runif(100); y <- rpois(100, exp(0.5 + 1.5 * x)); m <- glm(y ~ x, family = poisson)
c(null = m$null.deviance, residual = deviance(m), df = df.residual(m), ratio = deviance(m) / df.residual(m))
```

## In the course
[[Zuur et al. 2009 Ch9]] uses residual deviance over df as a first look at overdispersion.

## Common confusions
- **"Residual deviance should be near zero."** For a well-fitting Poisson model it should be near its degrees of freedom.

## Explain it back
- What should residual deviance roughly equal if a Poisson model fits?

*Pass test:* you can read both deviances from a summary and compare them.

## Connections
- **Builds on:** [[Deviance]], [[Null Deviance]]
- **Leads to:** [[Overdispersion]], [[Analysis of Deviance]], [[Deviance Explained]]
- **Part of:** [[MOC - Generalized Linear Models]]

## Flashcards

What is residual deviance?
??
The deviance of the fitted model: the misfit remaining after the predictors are included.
++++

For a Poisson GLM, residual deviance far above its degrees of freedom suggests what?
??
Overdispersion (or a misspecified mean).
++++
