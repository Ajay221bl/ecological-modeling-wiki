---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "WAIC estimates out-of-sample predictive accuracy from posterior draws by taking the log pointwise predictive density and subtracting a penalty equal to the posterior variance of each observation's log-likelihood."
aliases:
  - "Widely Applicable Information Criterion"
  - "Watanabe-Akaike Information Criterion"
  - "waic()"
status: seedling
---

# WAIC

**WAIC**, the Widely Applicable or Watanabe-Akaike Information Criterion, is AIC rebuilt for Bayesian output. Instead of counting parameters, it measures how much each data point's likelihood wobbles across the posterior, so points the model is unsure about contribute more penalty. Compute the [[Log Pointwise Predictive Density]], lppd = Σᵢ log(mean over draws of p(yᵢ | θ)), and the penalty p_waic = Σᵢ variance over draws of log p(yᵢ | θ) ([[Effective Number of Parameters]]). Then [[Expected Log Predictive Density|elpd_waic]] = lppd − p_waic, and WAIC = −2 × elpd_waic, on which scale smaller is better.

It is fully Bayesian, using the whole posterior rather than a point estimate, works better than [[DIC]] for [[Hierarchical Model|hierarchical models]] and is asymptotically equivalent to [[Leave-one-out Cross-validation]]. In the code below a regression has lppd = −82.9 and p_waic = 3.0, close to its three parameters, giving WAIC = 171.8 against an [[AIC]] of 171.4; `loo::waic()` gives the same with a [[Standard Error|standard error]]. In brms use `waic(fit)` and compare with [[loo_compare()]].

Its weakness is that it is less reliable than PSIS-LOO with weak priors or influential observations; the loo package warns when individual p_waic terms exceed 0.4 and recommends LOO. It is covered in the Bayesian [[Model Selection|model comparison]] lecture and lab ([[Course Website]], [[Hobbs and Hooten 2015 Ch9]]). WAIC does not need the [[Number of Parameters|number of parameters]]: it estimates the penalty from the posterior.

```r
set.seed(5); x <- runif(60, 0, 10); y <- 1 + 0.5 * x + rnorm(60); m <- lm(y ~ x)
B <- MASS::mvrnorm(4000, coef(m), vcov(m)); sig <- sigma(m) * sqrt(58 / rchisq(4000, 58))
ll <- sapply(1:60, function(i) dnorm(y[i], B[, 1] + B[, 2] * x[i], sig, log = TRUE))
lppd <- sum(log(colMeans(exp(ll)))); pw <- sum(apply(ll, 2, var)); c(lppd = lppd, p_waic = pw, WAIC = -2 * (lppd - pw), AIC = AIC(m))
round(suppressWarnings(loo::waic(ll))$estimates, 2)
```

## Connections
- **Builds on:** [[Log Pointwise Predictive Density]], [[Effective Number of Parameters]], [[AIC]], [[Expected Log Predictive Density]], [[Hierarchical Model]], [[Standard Error]], [[Model Selection]], [[Number of Parameters]]
- **Leads to:** [[Leave-one-out Cross-validation]], [[DIC]], [[loo_compare()]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]], molecular note [[AIC, WAIC and LOO]]

## Flashcards

What is the WAIC penalty term?
??
p_waic: the sum over observations of the posterior variance of the log-likelihood.
++++

How is WAIC computed?
??
−2 × (lppd − p_waic).
++++
