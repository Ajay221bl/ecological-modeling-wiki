---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
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

**In one line:** leave-one-out cross-validation predicts each observation from a model fitted to all the other observations, and adds up how well those predictions did.

> [!info] Before this, it helps to know
> [[Cross-validation]] (the general idea, with k = n) · [[Expected Log Predictive Density]] (what it estimates) · [[Posterior Predictive Distribution]] (each prediction)

## The everyday picture
Asking each student in turn to leave the room while the class works out what they would have said, then calling them back in to check. Repeat for every student.

## Start from zero
1. **For each i:** fit to all data except yᵢ, then compute log p(yᵢ | y₋ᵢ).
2. **elpd_loo = Σᵢ log p(yᵢ | y₋ᵢ).**
3. **Doing n refits is expensive,** especially with MCMC.
4. **PSIS-LOO avoids refitting:** it reweights the full-data posterior draws to approximate each leave-one-out posterior (importance sampling), stabilised with Pareto smoothing.
5. **Output from `loo()`:** elpd_loo with SE, p_loo, looic, and a Pareto k diagnostic for each observation.
6. **High Pareto k (above about 0.7)** means the approximation is unreliable for that observation. Usually an influential or outlying point. Refit for those points (`reloo = TRUE`) or use k-fold CV.
7. **Preferred over WAIC** by its developers (Vehtari, Gelman and Gabry 2017) because of the diagnostic.
8. **For structured data,** leaving out single observations may be too easy. Leave out whole groups (leave-one-group-out) if you want to predict new groups.

## In R
```r
set.seed(6); x <- runif(60, 0, 10); y <- 1 + 0.5 * x + rnorm(60); m <- lm(y ~ x)
exact <- sum(sapply(1:60, function(i) { mi <- lm(y ~ x, subset = -i); p <- predict(mi, data.frame(x = x[i]), se.fit = TRUE); dt((y[i] - p$fit) / sqrt(p$se.fit^2 + sigma(mi)^2), 57, log = TRUE) - log(sqrt(p$se.fit^2 + sigma(mi)^2)) }))
B <- MASS::mvrnorm(4000, coef(m), vcov(m)); sig <- sigma(m) * sqrt(58 / rchisq(4000, 58)); ll <- sapply(1:60, function(i) dnorm(y[i], B[, 1] + B[, 2] * x[i], sig, log = TRUE))
l <- suppressWarnings(loo::loo(ll)); c(psis_loo = l$estimates["elpd_loo", "Estimate"], exact_refits = exact); table(cut(l$diagnostics$pareto_k, c(-Inf, 0.5, 0.7, Inf)))
```

## In the course
`loo()` in the Bayesian model comparison lab ([[Course Website]]). [[Hobbs and Hooten 2015 Ch9]].

## Common confusions
- **"LOO refits the model n times."** PSIS-LOO approximates that from one fit.
- **"Ignore Pareto k warnings."** They mean the estimate for those points may be badly off.

## Explain it back
- What does PSIS do?
- What does a high Pareto k indicate?

*Pass test:* you can run loo and act on its diagnostics.

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
