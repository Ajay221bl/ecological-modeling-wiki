---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A randomized quantile residual records where each observation falls within the distribution the model predicted for it, giving residuals that are uniform (or normal) for any correct model, whatever the response type."
aliases:
  - "Quantile residuals"
  - "Dunn-Smyth residuals"
  - "Scaled residuals"
  - "PIT residuals"
status: seedling
---

# Randomized Quantile Residuals

Instead of saying a child is "12 cm off", say "this child is at the 90th [[Quantile|percentile]] for their age". If the growth charts are right, a random group of children spreads evenly over all percentiles; a pile-up at the extremes means the charts are wrong. A **randomized quantile residual** records where each observation falls within the distribution the model predicted for it. For each observation take the model's predicted distribution and compute the cumulative probability of the observed value, the fraction of that distribution below it ([[Cumulative Distribution Function]]). If the model is right, those probabilities are uniform between 0 and 1, the "probability integral transform" ([[Uniform Distribution]]). For [[Discrete Data|discrete data]] the observed value sits on a step of the CDF, so pick a random point on that step; that is the "randomized" part, and it removes the banding that troubles [[Pearson Residuals]].

In the code below, Poisson data fitted with the right model give quantile residuals whose 10th, 25th, 50th, 75th and 90th percentiles sit close to 0.10, 0.25, 0.50, 0.75 and 0.90: uniform. [[Overdispersion|Overdispersed]] data fitted with a Poisson give residuals piled up near 0 and 1, because too many observations are extreme for the model. They can be converted to a normal scale with `qnorm()` so a familiar [[QQ Plot|Q-Q Plot]] applies; read them as usual, looking for no trend against [[Fitted Value|fitted values]] or [[Predictor Variable|predictors]].

They work for any distribution, which is why modern GLM and [[GLMM]] checking is built on them; [[DHARMa Simulated Residuals]] are the simulated version, and a [[Posterior Predictive Check]] uses the same logic. Because of the randomisation they differ slightly each time you compute them; that is deliberate, so set a seed.

```r
set.seed(9); x <- runif(500); y <- rpois(500, exp(1 + x)); m <- glm(y ~ x, family = poisson); mu <- fitted(m)
u <- runif(500, ppois(y - 1, mu), ppois(y, mu))                    # random point on each observation's CDF step
round(quantile(u, c(.1, .25, .5, .75, .9)), 2)                     # close to 0.10, 0.25, 0.50, 0.75, 0.90: uniform
ks.test(u, "punif")$p.value
y2 <- rnbinom(500, mu = exp(1 + x), size = 1); m2 <- glm(y2 ~ x, family = poisson); u2 <- runif(500, ppois(y2 - 1, fitted(m2)), ppois(y2, fitted(m2)))
round(quantile(u2, c(.1, .25, .5, .75, .9)), 2)                    # overdispersed data: piled up near 0 and 1
```

## Connections
- **Builds on:** [[Cumulative Distribution Function]], [[Uniform Distribution]], [[Quantile]], [[Discrete Data]], [[Overdispersion]], [[Fitted Value]], [[Predictor Variable]]
- **Leads to:** [[DHARMa Simulated Residuals]], [[QQ Plot|Q-Q Plot]], [[Posterior Predictive Check]], [[GLMM]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Which residuals to use for a GLM]]

## Flashcards

What is a randomized quantile residual?
??
The (randomised) cumulative probability of each observation under its fitted distribution. Uniform if the model is correct.
++++

Why are quantile residuals useful for count and binary models?
??
They have the same known distribution for any correct model, avoiding the bands and skew of Pearson or deviance residuals.
++++
