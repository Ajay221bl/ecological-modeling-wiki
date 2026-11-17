---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Joint posterior"
  - "Full posterior"
status: seedling
---

# Joint Posterior Distribution

**In one line:** the joint posterior distribution describes the plausibility of all the model's parameters together, including how uncertainty in one is tied to uncertainty in another.

> [!info] Before this, it helps to know
> [[Posterior Distribution]] (one parameter) · [[Joint Probability]] (several things at once) · [[Correlation]] (the ties between parameters)

## The everyday picture
A weather forecast for temperature and rain together. "Hot and dry" and "cool and wet" may both be plausible while "hot and wet" is not. Separate forecasts for temperature and for rain would lose that link.

## Start from zero
1. **A model has several parameters:** intercept, slope, σ.
2. **The posterior is over all of them at once:** P(β₀, β₁, σ | y).
3. **Parameters are often correlated in the posterior.** A steeper slope goes with a lower intercept when x is uncentered.
4. **MCMC output is a table:** one row per draw, one column per parameter. Each row is one jointly plausible set of values.
5. **Always compute with whole rows.** A prediction uses the intercept and slope from the same draw. Mixing rows breaks the correlation and gets the uncertainty wrong.
6. **Pair plots** of draws show the joint shape.
7. **Strong posterior correlations slow samplers.** Centering predictors helps.

## In R
```r
set.seed(5); x <- runif(40, 10, 20); y <- 2 + 0.5 * x + rnorm(40); m <- lm(y ~ x)
draws <- MASS::mvrnorm(4000, coef(m), vcov(m))                      # approximate joint posterior of intercept and slope
cor(draws)[1, 2]                                                     # strongly negative
pred_joint <- draws[, 1] + draws[, 2] * 15; pred_mixed <- draws[, 1] + sample(draws[, 2]) * 15
c(sd_joint = sd(pred_joint), sd_mixed_rows = sd(pred_mixed))        # breaking the pairing inflates the uncertainty many-fold
```

## In the course
[[Hobbs and Hooten 2015 Ch6]] writes every model as a joint distribution first.

## Common confusions
- **"Each parameter's posterior can be used independently."** Only for statements about that parameter alone.

## Explain it back
- Why must predictions use parameters from the same draw?

*Pass test:* you can explain what one row of MCMC output represents.

## Connections
- **Builds on:** [[Posterior Distribution]], [[Joint Probability]]
- **Leads to:** [[Marginal Posterior Distribution]], [[Posterior Draws]], [[Derived Quantities]], [[Centering]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What is the joint posterior?
??
The posterior distribution of all parameters together, including their dependence on each other.
++++

What does one row of MCMC output represent?
??
One draw from the joint posterior: a jointly plausible set of values for all parameters.
++++
