---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The error term is the part of each observation that the deterministic part of the model doesn't account for, treated as a random draw from a distribution."
aliases:
  - "ε"
  - "epsilon"
  - "Random error"
  - "Noise term"
status: seedling
---

# Error Term

On a radio, the song is the systematic part and the hiss riding on top is unpredictable from moment to moment, though its loudness is steady and can be measured. The **error term**, ε, is the hiss: the part of each observation that the deterministic part of the model does not account for, treated as a random draw from a distribution ([[Stochastic Component]], [[Random Variable]]). In yᵢ = β₀ + β₁xᵢ + εᵢ, linear regression assumes εᵢ ~ Normal(0, σ), independent across observations ([[Normal Distribution]]). Mean zero means the line is right on average, and a single σ for all means equal variance ([[Linear Model Assumptions]]).

It stands for everything not in the model: unmeasured causes, individual differences, measurement error and pure chance ([[Process Variation]]). It is never observed; the [[Residual|residuals]] are its estimates. In the code below we simulate data so that the true errors are known, fit the model, and find the residuals track the errors very closely, with nearly the same standard deviation as the [[Residual Standard Error]].

"Error" does not mean mistake; it means deviation. Nor is it only measurement error: it bundles measurement error with real unexplained variation. Modern notation often drops ε and writes yᵢ ~ Normal(μᵢ, σ) instead. That says the same thing and extends to Poisson or binomial data, where there is no additive error term to write.

```r
set.seed(2); x <- runif(100, 0, 60); eps <- rnorm(100, 0, 2); y <- 12 - 0.1 * x + eps      # we know the true errors
m <- lm(y ~ x); cor(eps, resid(m)); c(sd(eps), summary(m)$sigma)                          # residuals closely track them
```

## Connections
- **Builds on:** [[Stochastic Component]], [[Normal Distribution]]
- **Leads to:** [[Residual]], [[Residual Standard Error]], [[Linear Model Assumptions]], [[Process Variation]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What does the error term ε represent?
??
All variation in the response not explained by the model's deterministic part.
++++

What is assumed about ε in a linear model?
??
Independent, normally distributed, mean zero, constant variance.
++++
