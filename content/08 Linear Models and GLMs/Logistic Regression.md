---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Logistic regression models the probability of a yes/no outcome as a function of predictors, using a Bernoulli (or binomial) distribution and a logit link."
aliases:
  - "Binomial GLM"
  - "Logit model"
  - "Logistic model"
  - "Bernoulli GLM"
status: seedling
---

# Logistic Regression

Think of a dimmer switch for chance: as a [[Predictor Variable|predictor]] rises, the probability of "yes" slides along an S-curve from nearly 0 to nearly 1, and the model's job is to find where the curve sits and how steep it is. **Logistic regression** models the probability of a yes/no outcome as a function of predictors. The response yᵢ is 0 or 1; the random part is yᵢ ~ Bernoulli(pᵢ) ([[Bernoulli Distribution]]); the [[Linear Predictor|linear predictor]] is ηᵢ = β₀ + β₁xᵢ; and the link is logit(pᵢ) = ηᵢ, so pᵢ = [[Logistic Function|plogis]](ηᵢ) ([[Logit Link]], [[Generalized Linear Model]]). It is fitted with `glm(y ~ x, family = binomial)`. The intercept is the log-odds of "yes" when x = 0, and `plogis(β₀)` is that probability. The slope is the change in log-odds per unit of x, and exp(β₁) is the [[Odds Ratio]]. The curve crosses p = 0.5 at x = −β₀/β₁.

An example: the probability that a plot is occupied by a grassland bird, against tree cover, with logit(p) = 2.0 − 0.08 × tree. At 0% cover p = plogis(2.0) = 0.88; at 25%, plogis(0) = 0.50; at 50%, plogis(−2.0) = 0.12. The odds ratio per 1% cover is exp(−0.08) = 0.92, so each percent of tree cover cuts the odds of occupancy by 8%. The code below simulates 300 plots from this model and recovers the coefficients, the odds ratio, the 50% point near 25% cover, and the three probabilities. The figure shows the 0/1 data as rugs at the top and bottom with the fitted S-curve between them.

A [[Equation of a Line|straight line]] fitted to 0/1 data would predict probabilities below 0 and above 1 and assume a [[Homogeneity of Variance|constant variance]] that binary data cannot have. The logit link bends the line into an S that respects both limits, and the Bernoulli supplies the right variance, p(1 − p), fixed by the mean, so single 0/1 outcomes cannot be [[Overdispersion|overdispersed]]. [[Residual|Raw residual]] plots are useless here, showing two bands, so use binned or simulated residuals ([[DHARMa Simulated Residuals]]). Three confusions: the slope is the change in log-odds, not in probability; logistic regression estimates probabilities, and classifying needs an extra threshold decision; and it does not need equal numbers of 0s and 1s, though rare outcomes carry little information. When a predictor splits the data perfectly, see [[Complete Separation]]. [[Hierarchical Data|Grouped data]] use the [[Binomial GLM for Proportions]], and [[Imperfect Detection|imperfect detection]] leads to the [[Occupancy|Occupancy Model]] ([[Presence-Absence Data]], [[Zuur et al. 2009 Ch10]], [[Guthery and Bingham 2007]], [[Course Website]]).

![[Logistic regression fit.png|700]]
*What to look at:* the 0/1 data as rugs at top and bottom, the fitted S-curve of probability between them and the point where it crosses 0.5.

```r
set.seed(11); d <- data.frame(tree = runif(300, 0, 60)); d$occ <- rbinom(300, 1, plogis(2 - 0.08 * d$tree))
m <- glm(occ ~ tree, family = binomial, data = d); round(summary(m)$coefficients, 3)
exp(coef(m)[2])                                                   # odds ratio per 1% tree cover
-coef(m)[1] / coef(m)[2]                                          # tree cover at which occupancy is 50%
round(predict(m, data.frame(tree = c(0, 25, 50)), type = "response"), 2)
```

## Connections
- **Builds on:** [[Bernoulli Distribution]], [[Logit Link]], [[Generalized Linear Model]], [[Predictor Variable]], [[Linear Predictor]], [[Logistic Function]], [[Equation of a Line]], [[Homogeneity of Variance]], [[Overdispersion]], [[Residual]]
- **Leads to:** [[Odds Ratio]], [[Binomial GLM for Proportions]], [[Complete Separation]], [[Occupancy|Occupancy Model]], [[Presence-Absence Data]], [[Hierarchical Data]], [[Imperfect Detection]]
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
