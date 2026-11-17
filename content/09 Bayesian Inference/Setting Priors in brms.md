---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "prior()"
  - "get_prior()"
  - "set_prior()"
  - "default_prior()"
  - "Prior classes in brms"
status: seedling
---

# Setting Priors in brms

**In one line:** in brms you see which priors a model needs with `get_prior()` and assign them with `prior()`, addressing parameters by class and, if needed, by coefficient or group.

> [!info] Before this, it helps to know
> [[brm()]] (where priors are passed) · [[Prior Distribution]] (what is being set) · [[Weakly Informative Prior]] (the usual choice)

## Start from zero
1. **`get_prior(formula, data, family)`** returns a table of every parameter with its default prior.
2. **Classes:** `Intercept`, `b` (slopes, the "population-level" coefficients), `sd` (group-level standard deviations), `sigma` (residual sd), `cor` (correlations among group-level effects), `shape` (negative binomial or gamma), `phi` (beta).
3. **Set a prior for a whole class:** `prior(normal(0, 1), class = "b")`.
4. **Or for one coefficient:** `prior(normal(0, 0.5), class = "b", coef = "tree")`.
5. **Combine with `c()`.**
6. **Defaults:** flat for `b`. Student-t(3, ·, 2.5) scaled to the response for `Intercept`, `sd` and `sigma`. LKJ(1) for `cor`.
7. **The Intercept prior refers to the intercept with predictors centered** at their means, which is how brms parameterises internally.
8. **Distributions are written in Stan's syntax,** so `normal(0, 1)` uses a standard deviation.
9. **`prior_summary(fit)`** shows what was used.

## In R
```r
# norun (needs brms; shown for the syntax)
library(brms)
get_prior(count ~ tree + (1 | site), data = d, family = poisson())
pri <- c(prior(normal(0, 2), class = "Intercept"),
         prior(normal(0, 1), class = "b"),
         prior(exponential(1), class = "sd"))
fit <- brm(count ~ tree + (1 | site), data = d, family = poisson(), prior = pri)
prior_summary(fit)
```

## In the course
Bayesian labs ([[Course Website]]).

## Common confusions
- **"sd priors can be normal(0, 1) and go negative."** brms applies the lower bound of zero automatically, making it a half-normal.

## Explain it back
- Which class holds the regression slopes?

*Pass test:* you can list and set priors for a mixed model.

## Connections
- **Builds on:** [[brm()]], [[Prior Distribution]]
- **Leads to:** [[Weakly Informative Prior]], [[Half-Normal Prior]], [[Prior Predictive Check]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

Which brms function lists the priors a model needs?
??
get_prior().
++++

What is the default brms prior on regression slopes (class b)?
??
Flat (improper uniform).
++++
