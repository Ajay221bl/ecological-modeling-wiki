---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Model deviance"
  - "D"
  - "−2 log-likelihood difference from the saturated model"
status: seedling
---

# Deviance

**In one line:** deviance is a GLM's measure of misfit: twice the gap in log-likelihood between a perfect-fit model and your model, so smaller means closer to the data.

> [!info] Before this, it helps to know
> [[Log-likelihood]] (what it is built from) · [[Residual Sum of Squares]] (its counterpart in linear models) · [[Saturated Model]] (the yardstick)

## The everyday picture
A golf score. It counts how far you are over a perfect round. Zero would be perfect, and nobody expects zero. What matters is how many strokes one player is over compared with another.

## A tiny example
Saturated model log-likelihood: −210. Your model: −240. Deviance = 2 × (−210 − (−240)) = 60.

## Start from zero
1. **A saturated model** has one parameter per observation and fits every data point exactly. It has the highest log-likelihood any model of that family could reach.
2. **Deviance = 2 × (logLik of saturated − logLik of your model).**
3. **Always zero or positive.** Zero only for a perfect fit.
4. **For a normal model, deviance is the residual sum of squares.** So deviance generalises RSS to other distributions.
5. **Adding predictors never raises the deviance,** as it never raises RSS.
6. **Differences in deviance between nested models** are likelihood ratio statistics, compared with a chi-square distribution.
7. **It is a sum of per-observation contributions.** Their signed square roots are the deviance residuals.
8. **Its absolute size is rarely interpretable** on its own, especially for 0/1 data. Use it for comparisons.

## In R
```r
set.seed(1); x <- runif(100); y <- rpois(100, exp(0.5 + 1.5 * x)); m <- glm(y ~ x, family = poisson)
deviance(m)
sat <- sum(dpois(y, y, log = TRUE)); 2 * (sat - as.numeric(logLik(m)))        # the same number by hand: saturated model has mean = y
sum(resid(m, type = "deviance")^2)
all.equal(deviance(lm(y ~ x)), sum(resid(lm(y ~ x))^2))                       # for a normal model, deviance is RSS
```

## In the course
[[Zuur et al. 2009 Ch9]]. Reported at the bottom of every `summary(glm)` in the labs ([[Course Website]]).

## Common confusions
- **"Deviance is −2 × log-likelihood."** Only when the saturated log-likelihood is zero, as for 0/1 data. In general the saturated term is subtracted.
- **"Low deviance proves a good model."** A model can have low deviance by overfitting.

## Explain it back
- What is the saturated model?
- What does deviance become for a normal model?

*Pass test:* you can define deviance and say what it is used for.

## Connections
- **Builds on:** [[Log-likelihood]], [[Residual Sum of Squares]]
- **Leads to:** [[Null Deviance]], [[Residual Deviance]], [[Analysis of Deviance]], [[Deviance Residuals]], [[Likelihood Ratio Test]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is deviance?
??
Twice the difference in log-likelihood between the saturated model and the fitted model. A measure of misfit.
++++

What is deviance for a normal linear model?
??
The residual sum of squares.
++++
