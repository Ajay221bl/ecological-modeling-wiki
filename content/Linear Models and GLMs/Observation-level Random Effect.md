---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "OLRE"
  - "Observation-level random intercept"
  - "Poisson-lognormal model"
status: seedling
---

# Observation-level Random Effect

**In one line:** an observation-level random effect gives every row of the data its own random intercept, which soaks up extra variation and so models overdispersion in Poisson and binomial GLMMs.

> [!info] Before this, it helps to know
> [[Overdispersion]] (what it handles) · [[Random Intercept]] (what it is) · [[GLMM]] (the framework)

## The everyday picture
Giving every plot its own private nudge. On top of what the predictors say, each observation gets a small random push up or down on the log scale. Those pushes are the extra variation that the Poisson alone could not produce.

## Start from zero
1. **Create an id with one level per row:** `d$obs <- factor(seq_len(nrow(d)))`.
2. **Add `(1 | obs)`** to a Poisson or binomial mixed model.
3. **Model:** log(μᵢ) = ηᵢ + εᵢ, with εᵢ ~ Normal(0, σ²).
4. **The counts are then Poisson-lognormal,** an overdispersed distribution similar in spirit to the negative binomial.
5. **σ measures the overdispersion.** Near zero means none.
6. **Works for grouped binomial data too,** as an alternative to the beta-binomial.
7. **Don't use it for Bernoulli (0/1) data,** where overdispersion isn't identifiable, or for normal models, where it would duplicate the residual.
8. **Caution:** it can perform poorly when overdispersion comes from zero inflation.

## In R
```r
library(lme4); set.seed(12); d <- data.frame(x = runif(300)); d$y <- rnbinom(300, mu = exp(1 + d$x), size = 1.5); d$obs <- factor(seq_len(300))
m0 <- glm(y ~ x, family = poisson, d); m1 <- glmer(y ~ x + (1 | obs), family = poisson, d)
rbind(poisson = summary(m0)$coefficients[2, 1:2], olre = summary(m1)$coefficients[2, 1:2]); VarCorr(m1)
```

## In the course
[[Harrison et al. 2018]] discusses observation-level random effects as a remedy for overdispersion.

## Common confusions
- **"One level per observation can't be estimated."** In a Poisson or binomial model it can, because the distribution fixes the residual variance.

## Explain it back
- What does the variance of the observation-level effect measure?

*Pass test:* you can add one to a model and say when not to.

## Connections
- **Builds on:** [[Overdispersion]], [[Random Intercept]]
- **Leads to:** [[Negative Binomial GLM]], [[Beta-binomial Distribution]], [[GLMM]]
- **Part of:** [[MOC - Generalized Linear Models]], molecular note [[What to do about overdispersion]]

## Flashcards

What is an observation-level random effect?
??
A random intercept with a separate level for every observation, used to absorb overdispersion in Poisson or binomial models.
++++
