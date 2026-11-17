---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "p_D"
  - "p_waic"
  - "p_loo"
  - "Effective parameters"
status: seedling
---

# Effective Number of Parameters

**In one line:** the effective number of parameters measures how flexible a fitted model really is, which can be fewer than its nominal parameter count when priors, pooling or penalties constrain the parameters.

> [!info] Before this, it helps to know
> [[Number of Parameters]] (the nominal count) · [[Partial Pooling]] (one reason it shrinks) · [[Regularization]] (another)

## The everyday picture
A team listed with eleven players, several of whom are told to stay near the goal. On paper eleven, in practice fewer people roaming free.

## Start from zero
1. **In AIC, K counts parameters.** Each one is fully free.
2. **In a hierarchical or penalised model** parameters are pulled toward each other or toward zero, so they don't each use a full degree of freedom.
3. **The effective number estimates the actual flexibility.**
4. **DIC's pD:** mean deviance minus deviance at the posterior mean.
5. **WAIC's p_waic:** sum over observations of the posterior variance of log p(yᵢ | θ).
6. **LOO's p_loo:** lppd − elpd_loo.
7. **Example:** 20 group intercepts with strong pooling might count as only 5 effective parameters.
8. **Diagnostic:** p_loo much larger than the nominal count, or larger than n/5, signals a misspecified model or very influential points.
9. **GAMs report effective degrees of freedom** (edf), the same idea for smooths.

## In R
```r
set.seed(3); J <- 20; g <- rep(1:J, each = 3); a <- rnorm(J, 0, 0.3); y <- 5 + a[g] + rnorm(60)
m <- lme4::lmer(y ~ 1 + (1 | g), REML = FALSE); vc <- as.data.frame(lme4::VarCorr(m))$vcov; tau2 <- vc[1]; s2 <- vc[2]
shrink <- tau2 / (tau2 + s2 / 3); c(nominal_group_means = J, effective_approx = round(J * shrink, 1))      # strong pooling: far fewer effective parameters
```

## In the course
[[Hobbs and Hooten 2015 Ch9]].

## Common confusions
- **"pD must be a whole number."** It is a continuous measure.

## Explain it back
- Why is the effective number below the nominal count in a hierarchical model?

*Pass test:* you can explain p_waic and p_loo.

## Connections
- **Builds on:** [[Number of Parameters]], [[Partial Pooling]], [[Regularization]]
- **Leads to:** [[DIC]], [[WAIC]], [[Leave-one-out Cross-validation]], [[Effective Degrees of Freedom]]
- **Part of:** [[MOC - Bayesian Model Selection]]

## Flashcards

What is the effective number of parameters?
??
A measure of a model's actual flexibility, reduced below the nominal count by priors, pooling or penalties.
++++
