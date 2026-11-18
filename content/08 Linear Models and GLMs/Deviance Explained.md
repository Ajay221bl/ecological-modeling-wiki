---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Deviance explained is the fraction of the null deviance that a GLM's predictors remove, a rough counterpart of R-squared."
aliases:
  - "Pseudo R-squared"
  - "Proportion of deviance explained"
  - "D-squared"
  - "McFadden's R-squared"
status: seedling
---

# Deviance Explained

"The lessons took 30% off my handicap" is a proportional improvement over where you started. **Deviance explained** is the same for a GLM: the fraction of the [[Null Deviance]] that the [[Predictor Variable|predictors]] remove, D² = 1 − residual deviance / null deviance ([[Residual Deviance]]). It lies between 0 and 1, and for a normal model it equals [[R-squared]]. It is a rough counterpart of R², one of several "pseudo-R²" measures.

In the code below, a Poisson model with a strong predictor explains a large share of its null deviance, while a [[Logistic Regression|logistic regression]] on the same predictor explains only a small share, even though x has a real effect. For 0/1 data deviance explained is typically low even for useful models, because single yes/no outcomes are inherently noisy. So a pseudo-R² of 0.1 does not mean a useless model; for binary data it can reflect a strong effect.

It is not "variance explained", since it is on the likelihood scale. Many rival pseudo-R² definitions exist and give different numbers, so say which one you report; [[Mixed Effects Model|mixed models]] have their own versions ([[Marginal vs Conditional R-squared|Marginal and Conditional R-squared]]). Like R², it always rises as predictors are added, so it is not a tool for choosing models. `mgcv` prints "Deviance explained" for every GAM in the later labs ([[Course Website]]).

```r
set.seed(4); x <- runif(200); y <- rpois(200, exp(0.5 + 1.5 * x)); m <- glm(y ~ x, family = poisson)
1 - deviance(m) / m$null.deviance
yb <- rbinom(200, 1, plogis(-1 + 2 * x)); mb <- glm(yb ~ x, family = binomial); 1 - deviance(mb) / mb$null.deviance      # low, although x has a real effect
```

## Connections
- **Builds on:** [[Null Deviance]], [[Residual Deviance]], [[Predictor Variable]], [[Logistic Regression]]
- **Leads to:** [[R-squared]], [[Marginal vs Conditional R-squared|Marginal and Conditional R-squared]], [[Mixed Effects Model]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

How is the proportion of deviance explained computed?
??
1 − (residual deviance / null deviance).
++++
