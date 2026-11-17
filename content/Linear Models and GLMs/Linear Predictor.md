---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "η"
  - "eta"
  - "Systematic component"
  - "Xβ"
status: seedling
---

# Linear Predictor

**In one line:** the linear predictor is the weighted sum of predictors, β₀ + β₁x₁ + β₂x₂ + …, that a GLM computes before converting it to a mean with the inverse link.

> [!info] Before this, it helps to know
> [[Regression Coefficient]] (the weights) · [[Model Matrix]] (η = Xβ) · [[Generalized Linear Model]] (where it sits)

## The everyday picture
A score. A lending officer adds up points for income, subtracts points for debts and gets a total. The total isn't the decision. It is fed into a rule that converts scores into an approval probability.

## Start from zero
1. **η = β₀ + β₁x₁ + … + β_p x_p.**
2. **It can be any real number,** negative or positive.
3. **It is the same object as the right-hand side of a linear regression.**
4. **It lives on the link scale:** log units, log-odds units.
5. **The inverse link maps it to the mean:** μ = g⁻¹(η).
6. **Effects are additive here** and only here. On the response scale they generally aren't.
7. **`predict(m, type = "link")` returns it.**

## In R
```r
set.seed(2); x <- runif(50); y <- rbinom(50, 1, plogis(-1 + 3 * x)); m <- glm(y ~ x, family = binomial)
eta <- predict(m, data.frame(x = c(0.2, 0.8)), type = "link"); eta
coef(m)[1] + coef(m)[2] * c(0.2, 0.8)                 # by hand
plogis(eta)                                           # converted to probabilities
```

## In the course
[[Zuur et al. 2009 Ch8]], [[Harrison et al. 2018]].

## Common confusions
- **"The linear predictor is the prediction."** It is the prediction on the link scale. Readers usually need the response scale.

## Explain it back
- What range of values can η take?

*Pass test:* you can compute η by hand and convert it.

## Connections
- **Builds on:** [[Regression Coefficient]], [[Model Matrix]]
- **Leads to:** [[Link Function]], [[Inverse Link Function]], [[Link Scale]], [[Offset]]
- **Part of:** [[MOC - Generalized Linear Models]]

## Flashcards

What is the linear predictor of a GLM?
??
η = β₀ + β₁x₁ + …, the linear combination of predictors on the link scale.
++++

How is the mean obtained from the linear predictor?
??
By applying the inverse link function.
++++
