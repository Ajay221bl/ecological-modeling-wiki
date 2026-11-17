---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A regression coefficient is one of the numbers a model multiplies its predictors by, estimated from the data, that says how the response changes with that predictor."
aliases:
  - "Coefficient"
  - "β"
  - "Beta coefficient"
  - "Partial regression coefficient"
status: seedling
---

# Regression Coefficient

A recipe says "2 × flour + 1 × sugar + 0.5 × butter"; the numbers say how much each ingredient contributes to the result. A **regression coefficient** is one of the numbers a model multiplies its predictors by, estimated from the data, saying how the response changes with that predictor ([[Parameter]], [[Estimate]]). There is one per term: the intercept, each numeric predictor, each non-reference level of a factor and each interaction. The Greek β stands for the true value and b or β̂ for its estimate, and each is reported with a [[Standard Error]]. The simplest are the [[Intercept]] and the [[Slope]].

In the code below, richness is simulated as 20 − 0.1 × tree − 0.005 × elevation plus noise, and `lm(rich ~ tree + elev)` recovers coefficients close to those values. `coef(model)` extracts them, and `summary(model)$coefficients` adds standard errors and tests.

A coefficient's meaning depends on two things. First, what else is in the model: in multiple regression it is the effect of that predictor with the others held fixed, a "partial" effect ([[Holding Other Variables Constant]]). Second, the scale: in a GLM, coefficients live on the link scale, log units for Poisson and log-odds for logistic ([[Interpreting Regression Coefficients]]). The common mistake is to rank predictors by coefficient size, which depends on units; compare standardised effects or predicted changes over realistic ranges instead, for example with a [[Coefficient Plot]]. In mixed models these population-level coefficients are called [[Fixed Effect|fixed effects]].

```r
set.seed(1); d <- data.frame(tree = runif(50, 0, 60), elev = rnorm(50, 900, 50))
d$rich <- 20 - 0.1 * d$tree - 0.005 * d$elev + rnorm(50)
m <- lm(rich ~ tree + elev, d)
coef(m); round(summary(m)$coefficients, 3)
```

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
