---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "`plogis()` converts log-odds to probabilities and `qlogis()` converts probabilities to log-odds."
aliases:
  - "plogis() and qlogis()"
  - "qlogis()"
  - "Inverse logit in R"
  - "Logit in R"
status: seedling
---

# plogis()

**`plogis()`** converts log-odds to probabilities and **`qlogis()`** converts probabilities to log-odds. `plogis(x)` = 1 / (1 + exp(−x)) takes the [[Link Scale|link scale]] to a probability, the [[Logistic Function]]; `qlogis(p)` = log(p / (1 − p)) takes a probability to the link scale, the [[Logit Link]]. They undo each other. The odd names come from R's naming of distribution functions: they are the cumulative distribution and quantile functions of the standard logistic distribution, which happen to be these formulas ([[Distribution Functions in R]]).

The code below converts −2, 0 and 2 to probabilities 0.119, 0.5 and 0.881 and back, and checks that `qlogis(plogis(1.7))` returns 1.7. It then fits an intercept-only logistic regression and shows `plogis(coef(m))` equals the observed proportion of 1s. Typical uses are `plogis(predict(m))` and `plogis(coef(m)[1])` for the baseline probability; both are vectorised, so they apply to whole columns of predictions or [[Posterior Draws|posterior draws]] ([[Logistic Regression]], [[Inverse Link Function]]).

They are used throughout the logistic regression, occupancy and Bayesian labs ([[Course Website]]). The common slip: `plogis()` does not give the logit. The p function gives a probability; `qlogis()` gives the logit.

```r
plogis(c(-2, 0, 2)); qlogis(c(0.119, 0.5, 0.881)); qlogis(plogis(1.7))
set.seed(8); y <- rbinom(200, 1, 0.3); m <- glm(y ~ 1, family = binomial); plogis(coef(m)); mean(y)
```

## Connections
- **Builds on:** [[Logit Link]], [[Logistic Function]], [[Link Scale]]
- **Leads to:** [[Logistic Regression]], [[Inverse Link Function]], [[Posterior Draws]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

Which R function converts log-odds to probability?
??
plogis().
++++

Which R function converts probability to log-odds?
??
qlogis().
++++
