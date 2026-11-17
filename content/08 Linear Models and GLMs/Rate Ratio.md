---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A rate ratio is the factor by which the expected count is multiplied for a one-unit increase in a predictor, obtained by exponentiating a log-link coefficient."
aliases:
  - "Incidence rate ratio"
  - "IRR"
  - "exp(β) in a count model"
  - "Multiplicative change in the mean"
status: seedling
---

# Rate Ratio

A **rate ratio** is like an exchange rate between plots one unit apart: a rate ratio of 0.8 says that whatever the count is here, expect 80% of it one unit further along. It is the factor by which the expected count is multiplied for a one-unit increase in a predictor, RR = exp(β), from a [[Log Link]] coefficient ([[Multiplicative Effects]]). RR = 1 is no change, above 1 an increase, below 1 a decrease. The percent change is (RR − 1) × 100, so RR 1.25 is +25% and RR 0.8 is −20%; for k units it is RR^k. For a factor level, it is the ratio of that level's mean to the reference level's mean.

A coefficient of 0.223 gives RR = 1.25, a 25% increase, and a coefficient of −0.36 gives 0.70, a 30% decrease. The interval comes from exponentiating the ends of the coefficient's interval: 0.05 to 0.40 becomes 1.05 to 1.49. In the code below, a Poisson model compares burned with control plots, and the rate ratio equals the ratio of the two group means.

Rate ratios are easier to grasp than odds ratios because they act directly on the mean ([[Odds Ratio]], [[Interpreting Regression Coefficients]]). They are the natural way to report a [[Poisson Regression]]. A rate ratio of 2 means twice as many, not 2 more.

```r
b <- 0.223; ci <- c(0.05, 0.40); exp(b); exp(ci); (exp(b) - 1) * 100
set.seed(7); g <- gl(2, 50, labels = c("control", "burned")); y <- rpois(100, c(4, 6)[g]); m <- glm(y ~ g, family = poisson)
exp(coef(m)[2]); mean(y[g == "burned"]) / mean(y[g == "control"])       # the rate ratio is the ratio of group means
```

## Connections
- **Builds on:** [[Log Link]], [[Multiplicative Effects]]
- **Leads to:** [[Poisson Regression]], [[Odds Ratio]], [[Interpreting Regression Coefficients]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is a rate ratio?
??
exp(β) from a log-link model: the multiplicative change in the expected count per unit of the predictor.
++++

A rate ratio of 0.7 means what?
??
The expected count falls by 30% per unit increase in the predictor.
++++
