---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "ε"
  - "epsilon"
  - "Random error"
  - "Noise term"
status: seedling
---

# Error Term

**In one line:** the error term is the part of each observation that the deterministic part of the model doesn't account for, treated as a random draw from a distribution.

> [!info] Before this, it helps to know
> [[Stochastic Component]] (it is this, in regression) · [[Random Variable]] (ε is one) · [[Normal Distribution]] (its assumed distribution)

## The everyday picture
The static on a radio signal. The song is the systematic part. The hiss riding on top is unpredictable from moment to moment, but its loudness is steady and can be measured.

## Start from zero
1. **yᵢ = β₀ + β₁xᵢ + εᵢ.** The εᵢ is what remains.
2. **Assumed: εᵢ ~ Normal(0, σ),** independent across observations.
3. **Mean zero:** the line is right on average.
4. **One σ for all:** equal variance.
5. **What it stands for:** everything not in the model. Unmeasured causes, individual differences, measurement error, pure chance.
6. **It is never observed.** Residuals are its estimates.
7. **"Error" doesn't mean mistake.** It means deviation.
8. **Why the modern notation drops it:** writing yᵢ ~ Normal(μᵢ, σ) says the same thing and extends to Poisson or binomial data, where there is no additive ε.

## In R
```r
set.seed(2); x <- runif(100, 0, 60); eps <- rnorm(100, 0, 2); y <- 12 - 0.1 * x + eps      # we know the true errors
m <- lm(y ~ x); cor(eps, resid(m)); c(sd(eps), summary(m)$sigma)                          # residuals closely track them
```

## Common confusions
- **"The error term is measurement error."** It bundles measurement error with real unexplained variation.

## Explain it back
- What three things are assumed about ε?

*Pass test:* you can explain what ε represents and why it is unobservable.

## Connections
- **Builds on:** [[Stochastic Component]], [[Normal Distribution]]
- **Leads to:** [[Residual]], [[Residual Standard Error]], [[Linear Model Assumptions]], [[Process Variation]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What does the error term ε represent?
??
All variation in the response not explained by the model's deterministic part.
++++

What is assumed about ε in a linear model?
??
Independent, normally distributed, mean zero, constant variance.
++++
