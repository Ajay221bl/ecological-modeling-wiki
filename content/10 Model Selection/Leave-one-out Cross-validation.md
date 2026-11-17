---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Leave-one-out cross-validation predicts each observation from a model fitted to all the other observations, and adds up how well those predictions did."
aliases:
  - "LOO"
  - "LOO-CV"
  - "PSIS-LOO"
  - "loo()"
  - "Leave-one-out"
  - "LOOIC"
  - "Leave-one-out Cross-validation (LOO)"
status: seedling
---

# Leave-one-out Cross-validation

Ask each student in turn to leave the room while the class works out what they would have said, then call them back to check, and repeat for every student. **Leave-one-out cross-validation** (LOO) predicts each observation from a model fitted to all the others and adds up how well those predictions did: for each i, fit to all data except yᵢ and compute log p(yᵢ | y₋ᵢ), and elpd_loo = Σᵢ log p(yᵢ | y₋ᵢ) ([[Cross-validation]] with k = n, [[Expected Log Predictive Density]], [[Posterior Predictive Distribution]]).

Doing n refits is expensive, especially with MCMC. PSIS-LOO avoids refitting by reweighting the full-data posterior draws to approximate each leave-one-out posterior, stabilised with Pareto smoothing ([[PSIS and Pareto k]]). `loo()` reports elpd_loo with its SE, p_loo, looic and a Pareto k diagnostic for each observation; k above about 0.7 means the approximation is unreliable for that observation, usually an influential or outlying point, so refit for those points (`reloo = TRUE`) or use k-fold CV. In the code below PSIS-LOO from one fit gives elpd_loo = −85.45, against −85.35 from 60 exact refits, with 59 observations having good k and one ok.

Its developers (Vehtari, Gelman and Gabry 2017) prefer it to [[WAIC]] because of the diagnostic, and models are compared with [[loo_compare()]]; [[AIC]] approximates it for maximum likelihood fits. For structured data, leaving out single observations may be too easy, so leave out whole groups if you want to predict new groups. It is used with `loo()` in the Bayesian model comparison lab ([[Course Website]], [[Hobbs and Hooten 2015 Ch9]]). PSIS-LOO does not refit the model n times, it approximates that from one fit; and Pareto k warnings should not be ignored, since the estimate for those points may be badly off.

```r
set.seed(6); x <- runif(60, 0, 10); y <- 1 + 0.5 * x + rnorm(60); m <- lm(y ~ x)
exact <- sum(sapply(1:60, function(i) { mi <- lm(y ~ x, subset = -i); p <- predict(mi, data.frame(x = x[i]), se.fit = TRUE); dt((y[i] - p$fit) / sqrt(p$se.fit^2 + sigma(mi)^2), 57, log = TRUE) - log(sqrt(p$se.fit^2 + sigma(mi)^2)) }))
B <- MASS::mvrnorm(4000, coef(m), vcov(m)); sig <- sigma(m) * sqrt(58 / rchisq(4000, 58)); ll <- sapply(1:60, function(i) dnorm(y[i], B[, 1] + B[, 2] * x[i], sig, log = TRUE))
l <- suppressWarnings(loo::loo(ll)); c(psis_loo = l$estimates["elpd_loo", "Estimate"], exact_refits = exact); table(cut(l$diagnostics$pareto_k, c(-Inf, 0.5, 0.7, Inf)))
```

## Connections
- **Builds on:** [[Cross-validation]], [[Expected Log Predictive Density]]
- **Leads to:** [[PSIS and Pareto k]], [[loo_compare()]], [[WAIC]], [[AIC]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]], molecular note [[AIC, WAIC and LOO]]

## Flashcards

What does leave-one-out cross-validation compute?
??
The sum over observations of the log predictive density of each observation given all the others.
++++

How does PSIS-LOO avoid refitting the model n times?
??
By importance-reweighting the full-data posterior draws, stabilised with Pareto smoothing.
++++
