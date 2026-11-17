---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "An observation-level random effect gives every row of the data its own random intercept, which soaks up extra variation and so models overdispersion in Poisson and binomial GLMMs."
aliases:
  - "OLRE"
  - "Observation-level random intercept"
  - "Poisson-lognormal model"
status: seedling
---

# Observation-level Random Effect

Give every plot its own private nudge: on top of what the predictors say, each observation gets a small random push up or down on the log scale, and those pushes are the extra variation a Poisson alone could not produce. An **observation-level random effect** (OLRE) gives every row of the data its own random intercept ([[Random Intercept]]). Create an id with one level per row, `d$obs <- factor(seq_len(nrow(d)))`, and add `(1 | obs)` to a Poisson or binomial mixed model ([[GLMM]]). The model becomes log(μᵢ) = ηᵢ + εᵢ with εᵢ ~ Normal(0, σ²), so the counts are Poisson-lognormal, an overdispersed distribution similar in spirit to the negative binomial. σ measures the overdispersion, and near zero means none ([[Overdispersion]]).

In the code below, overdispersed counts are fitted as a plain Poisson and with an OLRE. The slope estimate is similar, but its standard error is larger and more honest with the OLRE, and `VarCorr()` reports the size of the extra variation.

One level per observation can be estimated in a Poisson or binomial model because the distribution fixes the residual variance. It works for grouped binomial data too, as an alternative to the [[Beta-binomial Distribution]], and Harrison and colleagues discuss it as a remedy for overdispersion ([[Harrison et al. 2018]], [[Negative Binomial GLM]]). Do not use it for Bernoulli (0/1) data, where overdispersion is not identifiable, or for normal models, where it would duplicate the residual. It can perform poorly when the overdispersion comes from zero inflation.

```r
library(lme4); set.seed(12); d <- data.frame(x = runif(300)); d$y <- rnbinom(300, mu = exp(1 + d$x), size = 1.5); d$obs <- factor(seq_len(300))
m0 <- glm(y ~ x, family = poisson, d); m1 <- glmer(y ~ x + (1 | obs), family = poisson, d)
rbind(poisson = summary(m0)$coefficients[2, 1:2], olre = summary(m1)$coefficients[2, 1:2]); VarCorr(m1)
```

## Connections
- **Builds on:** [[Overdispersion]], [[Random Intercept]]
- **Leads to:** [[Negative Binomial GLM]], [[Beta-binomial Distribution]], [[GLMM]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[What to do about overdispersion]]

## Flashcards

What is an observation-level random effect?
??
A random intercept with a separate level for every observation, used to absorb overdispersion in Poisson or binomial models.
++++
