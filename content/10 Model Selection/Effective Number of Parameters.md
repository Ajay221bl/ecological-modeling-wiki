---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "The effective number of parameters measures how flexible a fitted model really is, which can be fewer than its nominal parameter count when priors, pooling or penalties constrain the parameters."
aliases:
  - "p_D"
  - "p_waic"
  - "p_loo"
  - "Effective parameters"
status: seedling
---

# Effective Number of Parameters

A team listed with eleven players, several told to stay near the goal, has fewer people roaming free than the team sheet says. The **effective number of parameters** measures how flexible a fitted model really is ([[Number of Parameters]]). In AIC each parameter counts as fully free, but in a hierarchical or penalised model parameters are pulled toward each other or toward zero, so they don't each use a full degree of freedom ([[Partial Pooling]], [[Regularization]]). Twenty group intercepts with strong pooling might count as only five effective parameters.

Different criteria estimate it differently. [[DIC]]'s pD is the mean deviance minus the deviance at the [[Posterior Summary|posterior mean]]; [[WAIC]]'s p_waic is the sum over observations of the posterior variance of log p(yᵢ | θ); and LOO's p_loo is [[Log Pointwise Predictive Density|lppd]] − [[Expected Log Predictive Density|elpd_loo]] ([[Leave-one-out Cross-validation]]). In the code below 20 group means with little true difference between groups are shrunk so strongly that they count as about 9.5 effective parameters.

As a diagnostic, p_loo much larger than the nominal count, or larger than n/5, signals a misspecified model or very influential points. [[Generalized Additive Model|GAMs]] report [[Effective Degrees of Freedom]], the same idea for smooths ([[Hobbs and Hooten 2015 Ch9]]). pD need not be a whole number; it is a continuous measure.

```r
set.seed(3); J <- 20; g <- rep(1:J, each = 3); a <- rnorm(J, 0, 0.3); y <- 5 + a[g] + rnorm(60)
m <- lme4::lmer(y ~ 1 + (1 | g), REML = FALSE); vc <- as.data.frame(lme4::VarCorr(m))$vcov; tau2 <- vc[1]; s2 <- vc[2]
shrink <- tau2 / (tau2 + s2 / 3); c(nominal_group_means = J, effective_approx = round(J * shrink, 1))      # strong pooling: far fewer effective parameters
```

## Connections
- **Builds on:** [[Number of Parameters]], [[Partial Pooling]], [[Regularization]], [[Posterior Summary]], [[Log Pointwise Predictive Density]], [[Expected Log Predictive Density]]
- **Leads to:** [[DIC]], [[WAIC]], [[Leave-one-out Cross-validation]], [[Effective Degrees of Freedom]], [[Generalized Additive Model]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]]

## Flashcards

What is the effective number of parameters?
??
A measure of a model's actual flexibility, reduced below the nominal count by priors, pooling or penalties.
++++
