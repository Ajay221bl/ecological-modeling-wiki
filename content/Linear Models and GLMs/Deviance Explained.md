---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Pseudo R-squared"
  - "Proportion of deviance explained"
  - "D-squared"
  - "McFadden's R-squared"
status: seedling
---

# Deviance Explained

**In one line:** deviance explained is the fraction of the null deviance that a GLM's predictors remove, a rough counterpart of R-squared.

> [!info] Before this, it helps to know
> [[Null Deviance]] and [[Residual Deviance]] (its ingredients) · [[R-squared]] (what it imitates)

## The everyday picture
"The lessons took 30% off my handicap." A proportional improvement over where you started.

## Start from zero
1. **D² = 1 − residual deviance / null deviance.**
2. **Between 0 and 1.** For a normal model it equals R².
3. **Not "variance explained".** It is on the likelihood scale.
4. **For 0/1 data it is typically low** even for useful models, because single yes/no outcomes are inherently noisy.
5. **Many rival pseudo-R² definitions exist** and give different numbers. Say which one you report.
6. **It always rises as predictors are added.** Not a tool for choosing models.

## In R
```r
set.seed(4); x <- runif(200); y <- rpois(200, exp(0.5 + 1.5 * x)); m <- glm(y ~ x, family = poisson)
1 - deviance(m) / m$null.deviance
yb <- rbinom(200, 1, plogis(-1 + 2 * x)); mb <- glm(yb ~ x, family = binomial); 1 - deviance(mb) / mb$null.deviance      # low, although x has a real effect
```

## In the course
`mgcv` prints "Deviance explained" for every GAM in the later labs ([[Course Website]]).

## Common confusions
- **"A pseudo-R² of 0.1 means a useless model."** For binary data that can be a strong effect.

## Explain it back
- Write the formula.

*Pass test:* you can compute it and state its limits.

## Connections
- **Builds on:** [[Null Deviance]], [[Residual Deviance]]
- **Leads to:** [[R-squared]], [[Marginal and Conditional R-squared]]
- **Part of:** [[MOC - Generalized Linear Models]]

## Flashcards

How is the proportion of deviance explained computed?
??
1 − (residual deviance / null deviance).
++++
