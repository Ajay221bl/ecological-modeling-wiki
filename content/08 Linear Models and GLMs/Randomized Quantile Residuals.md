---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Quantile residuals"
  - "Dunn-Smyth residuals"
  - "Scaled residuals"
  - "PIT residuals"
status: seedling
---

# Randomized Quantile Residuals

**In one line:** a randomized quantile residual records where each observation falls within the distribution the model predicted for it, giving residuals that are uniform (or normal) for any correct model, whatever the response type.

> [!info] Before this, it helps to know
> [[Cumulative Distribution Function]] (how the position is found) · [[Uniform Distribution]] (what they should follow) · [[Pearson Residuals]] (what they improve on)

## The everyday picture
Percentile rank. Instead of saying a child is "12 cm off", say "this child is at the 90th percentile for their age". If your growth charts are right, a random group of children should be spread evenly over all percentiles. A pile-up at the extremes means the charts are wrong.

## Start from zero
1. **For each observation,** take the model's predicted distribution.
2. **Compute the cumulative probability of the observed value:** the fraction of that distribution below it.
3. **If the model is right, those probabilities are uniform** between 0 and 1. (This is the probability integral transform.)
4. **For discrete data** the value sits on a step of the CDF. Pick a random point on that step. That is the "randomized" part, and it removes the banding.
5. **Optionally convert to normal** with `qnorm`, so that familiar Q-Q plots apply.
6. **Read them as usual:** no trend against fitted values or predictors, uniform (or normal) overall.
7. **They work for any distribution,** which is why modern GLM and GLMM checking is built on them.

## In R
```r
set.seed(9); x <- runif(500); y <- rpois(500, exp(1 + x)); m <- glm(y ~ x, family = poisson); mu <- fitted(m)
u <- runif(500, ppois(y - 1, mu), ppois(y, mu))                    # random point on each observation's CDF step
round(quantile(u, c(.1, .25, .5, .75, .9)), 2)                     # close to 0.10, 0.25, 0.50, 0.75, 0.90: uniform
ks.test(u, "punif")$p.value
y2 <- rnbinom(500, mu = exp(1 + x), size = 1); m2 <- glm(y2 ~ x, family = poisson); u2 <- runif(500, ppois(y2 - 1, fitted(m2)), ppois(y2, fitted(m2)))
round(quantile(u2, c(.1, .25, .5, .75, .9)), 2)                    # overdispersed data: piled up near 0 and 1
```

## Common confusions
- **"Residuals differ each time I compute them, so something is broken."** The randomisation is deliberate. Set a seed.

## Explain it back
- Why should the residuals be uniform if the model is right?

*Pass test:* you can compute them for a Poisson model by hand.

## Connections
- **Builds on:** [[Cumulative Distribution Function]], [[Uniform Distribution]]
- **Leads to:** [[DHARMa Simulated Residuals]], [[QQ Plot|Q-Q Plot]], [[Posterior Predictive Check]]
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
