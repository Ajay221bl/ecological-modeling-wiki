---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Binomial GLM"
  - "Logit model"
  - "Logistic model"
  - "Bernoulli GLM"
status: seedling
---

# Logistic Regression

**In one line:** logistic regression models the probability of a yes/no outcome as a function of predictors, using a Bernoulli (or binomial) distribution and a logit link.

> [!info] Before this, it helps to know
> [[Bernoulli Distribution]] (the random part) · [[Logit Link]] (the link) · [[Generalized Linear Model]] (the framework) · [[Odds Ratio]] (the effect measure)

## The everyday picture
A dimmer switch for chance. As the predictor rises, the probability of "yes" slides along an S-curve from nearly 0 to nearly 1. The model's job is to find where the curve sits and how steep it is.

## A tiny example
Probability a plot is occupied by a grassland bird, against tree cover.
- logit(p) = 2.0 − 0.08 × tree.
- At 0% cover: plogis(2.0) = 0.88.
- At 25%: plogis(0) = 0.50.
- At 50%: plogis(−2.0) = 0.12.
- Odds ratio per 1% cover: exp(−0.08) = 0.92. Each percent of tree cover cuts the odds of occupancy by 8%.

## Start from zero
1. **Response:** yᵢ is 0 or 1.
2. **Random part:** yᵢ ~ Bernoulli(pᵢ).
3. **Linear predictor:** ηᵢ = β₀ + β₁xᵢ.
4. **Link:** logit(pᵢ) = ηᵢ, so pᵢ = plogis(ηᵢ).
5. **Fit:** `glm(y ~ x, family = binomial)`.
6. **Intercept:** log-odds of "yes" when x = 0. `plogis(β₀)` is that probability.
7. **Slope:** change in log-odds per unit x. `exp(β₁)` is the odds ratio.
8. **The point where p = 0.5** is x = −β₀/β₁.
9. **No overdispersion is possible** for single 0/1 outcomes. The variance p(1 − p) is fixed by the mean.
10. **Checking:** raw residual plots are useless (two bands). Use binned or simulated residuals.

## See it
![[Logistic regression fit.png|700]]
*What to look at:* the 0/1 data as rugs at top and bottom, the fitted S-curve of probability between them and the point where it crosses 0.5.

## Why it is this way
A straight line fitted to 0/1 data predicts probabilities below 0 and above 1 and assumes a constant variance that binary data can't have. The logit link bends the line into an S that respects both limits, and the Bernoulli distribution supplies the right variance.

## In R
```r
set.seed(11); d <- data.frame(tree = runif(300, 0, 60)); d$occ <- rbinom(300, 1, plogis(2 - 0.08 * d$tree))
m <- glm(occ ~ tree, family = binomial, data = d); round(summary(m)$coefficients, 3)
exp(coef(m)[2])                                                   # odds ratio per 1% tree cover
-coef(m)[1] / coef(m)[2]                                          # tree cover at which occupancy is 50%
round(predict(m, data.frame(tree = c(0, 25, 50)), type = "response"), 2)
```

## In the course
Logistic regression lab ([[Course Website]]). [[Zuur et al. 2009 Ch10]], [[Guthery and Bingham 2007]].

## Common confusions
- **"The slope is the change in probability."** It is the change in log-odds.
- **"Logistic regression classifies."** It estimates probabilities. Classification needs an extra threshold decision.
- **"It needs equal numbers of 0s and 1s."** It doesn't, though rare outcomes carry little information.

## Explain it back
- Write the three parts of the model.
- At what x is p = 0.5?

*Pass test:* you can fit a logistic regression and report an odds ratio and predicted probabilities.

## Connections
- **Builds on:** [[Bernoulli Distribution]], [[Logit Link]], [[Generalized Linear Model]]
- **Leads to:** [[Odds Ratio]], [[Binomial GLM for Proportions]], [[Complete Separation]], [[Occupancy|Occupancy Model]], [[Presence-Absence Data]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[How to interpret a logistic regression coefficient]]

## Flashcards

What distribution and link define logistic regression?
??
Bernoulli (binomial) distribution with a logit link.
![[Logistic regression fit.png]]
++++

How is a logistic regression slope converted to an odds ratio?
??
Exponentiate it: exp(β).
++++

At what predictor value does a logistic curve cross p = 0.5?
??
x = −β₀/β₁.
++++
