---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "plogis() and qlogis()"
  - "qlogis()"
  - "Inverse logit in R"
  - "Logit in R"
status: seedling
---

# plogis()

**In one line:** `plogis()` converts log-odds to probabilities and `qlogis()` converts probabilities to log-odds.

> [!info] Before this, it helps to know
> [[Logit Link]] (qlogis) · [[Logistic Function]] (plogis) · [[Distribution Functions in R]] (they are the p and q functions of the logistic distribution)

## Start from zero
1. **`plogis(x)` = 1 / (1 + exp(−x)).** Link scale to probability.
2. **`qlogis(p)` = log(p / (1 − p)).** Probability to link scale.
3. **They undo each other.**
4. **Why the odd names:** they are the cumulative distribution and quantile functions of the standard logistic distribution, which happen to be these formulas.
5. **Typical use:** `plogis(predict(m))` or `plogis(coef(m)[1])` for the baseline probability.
6. **Vectorised:** apply to whole columns of predictions or posterior draws.

## In R
```r
plogis(c(-2, 0, 2)); qlogis(c(0.119, 0.5, 0.881)); qlogis(plogis(1.7))
set.seed(8); y <- rbinom(200, 1, 0.3); m <- glm(y ~ 1, family = binomial); plogis(coef(m)); mean(y)
```

## In the course
Used in the logistic regression, occupancy and Bayesian labs ([[Course Website]]).

## Common confusions
- **"plogis gives the logit."** The p function gives a probability. `qlogis` gives the logit.

## Explain it back
- Which function turns a GLM's logit-scale prediction into a probability?

*Pass test:* you can convert in both directions.

## Connections
- **Builds on:** [[Logit Link]], [[Logistic Function]]
- **Leads to:** [[Logistic Regression]], [[Inverse Link Function]]
- **Part of:** [[MOC - Generalized Linear Models]]

## Flashcards

Which R function converts log-odds to probability?
??
plogis().
++++

Which R function converts probability to log-odds?
??
qlogis().
++++
