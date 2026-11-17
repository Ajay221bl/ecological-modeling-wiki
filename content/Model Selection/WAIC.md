---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Widely Applicable Information Criterion"
  - "Watanabe-Akaike Information Criterion"
  - "waic()"
status: seedling
---

# WAIC

**In one line:** WAIC estimates out-of-sample predictive accuracy from posterior draws by taking the log pointwise predictive density and subtracting a penalty equal to the posterior variance of each observation's log-likelihood.

> [!info] Before this, it helps to know
> [[Log Pointwise Predictive Density]] (the fit term) · [[Effective Number of Parameters]] (the penalty) · [[AIC]] (its frequentist relative)

## The everyday picture
AIC rebuilt for Bayesian output. Instead of counting parameters, it measures how much each data point's likelihood wobbles across the posterior. Points the model is unsure about contribute more penalty.

## Start from zero
1. **lppd = Σᵢ log(mean over draws of p(yᵢ | θ)).**
2. **p_waic = Σᵢ var over draws of log p(yᵢ | θ).**
3. **elpd_waic = lppd − p_waic.**
4. **WAIC = −2 × elpd_waic.** Smaller is better (on that scale).
5. **Fully Bayesian:** it uses the whole posterior, not a point estimate.
6. **Works for hierarchical models** better than DIC.
7. **Asymptotically equivalent to leave-one-out cross-validation.**
8. **Weakness:** less reliable than PSIS-LOO with weak priors or influential observations. The loo package warns when p_waic terms are large (above 0.4) and recommends LOO.
9. **In brms:** `waic(fit)`. Comparisons via `loo_compare()`.

## In R
```r
set.seed(5); x <- runif(60, 0, 10); y <- 1 + 0.5 * x + rnorm(60); m <- lm(y ~ x)
B <- MASS::mvrnorm(4000, coef(m), vcov(m)); sig <- sigma(m) * sqrt(58 / rchisq(4000, 58))
ll <- sapply(1:60, function(i) dnorm(y[i], B[, 1] + B[, 2] * x[i], sig, log = TRUE))
lppd <- sum(log(colMeans(exp(ll)))); pw <- sum(apply(ll, 2, var)); c(lppd = lppd, p_waic = pw, WAIC = -2 * (lppd - pw), AIC = AIC(m))
round(suppressWarnings(loo::waic(ll))$estimates, 2)
```

## In the course
Bayesian model comparison lecture and lab ([[Course Website]]). [[Hobbs and Hooten 2015 Ch9]].

## Common confusions
- **"WAIC needs the number of parameters."** It estimates the penalty from the posterior.

## Explain it back
- What is the penalty term in WAIC?

*Pass test:* you can compute WAIC from a log-likelihood matrix.

## Connections
- **Builds on:** [[Log Pointwise Predictive Density]], [[Effective Number of Parameters]], [[AIC]]
- **Leads to:** [[Leave-one-out Cross-validation]], [[DIC]], [[loo_compare()]]
- **Part of:** [[MOC - Bayesian Model Selection]], molecular note [[AIC, WAIC and LOO]]

## Flashcards

What is the WAIC penalty term?
??
p_waic: the sum over observations of the posterior variance of the log-likelihood.
++++

How is WAIC computed?
??
−2 × (lppd − p_waic).
++++
