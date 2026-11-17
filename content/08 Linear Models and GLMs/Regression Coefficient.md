---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Coefficient"
  - "β"
  - "Beta coefficient"
  - "Partial regression coefficient"
status: seedling
---

# Regression Coefficient

**In one line:** a regression coefficient is one of the numbers a model multiplies its predictors by, estimated from the data, that says how the response changes with that predictor.

> [!info] Before this, it helps to know
> [[Parameter]] (what it is) · [[Slope]] and [[Intercept]] (the two simplest ones) · [[Estimate]] (what software reports)

## The everyday picture
The amounts in a recipe. "2 × flour + 1 × sugar + 0.5 × butter". The coefficients say how much each ingredient contributes to the result.

## Start from zero
1. **One coefficient per term in the model:** the intercept, each numeric predictor, each non-reference level of a factor, each interaction.
2. **Greek β for the true value, b or β̂ for the estimate.**
3. **Each is reported with a standard error.**
4. **Meaning depends on what else is in the model.** In multiple regression it is the effect of that predictor with the others held fixed ("partial").
5. **Meaning depends on the scale.** In a GLM, coefficients live on the link scale: log units for Poisson, log-odds for logistic.
6. **`coef(model)` extracts them. `summary(model)$coefficients` adds SEs and tests.**

## In R
```r
set.seed(1); d <- data.frame(tree = runif(50, 0, 60), elev = rnorm(50, 900, 50))
d$rich <- 20 - 0.1 * d$tree - 0.005 * d$elev + rnorm(50)
m <- lm(rich ~ tree + elev, d)
coef(m); round(summary(m)$coefficients, 3)
```

## Common confusions
- **"Coefficient size shows importance."** Sizes depend on units. Compare standardised effects or predicted changes over realistic ranges.

## Explain it back
- Why is a coefficient in multiple regression called "partial"?

*Pass test:* you can read a coefficient table.

## Connections
- **Builds on:** [[Parameter]], [[Slope]]
- **Leads to:** [[Interpreting Regression Coefficients]], [[Standard Error]], [[Coefficient Plot]], [[Fixed Effect]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What is a regression coefficient?
??
An estimated parameter that multiplies a model term, giving that term's contribution to the predicted response.
++++

On what scale are GLM coefficients expressed?
??
The link scale (for example log or logit).
++++
