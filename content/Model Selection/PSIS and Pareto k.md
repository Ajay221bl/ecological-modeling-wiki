---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Pareto smoothed importance sampling"
  - "PSIS"
  - "Pareto k"
  - "Pareto k diagnostic"
  - "k-hat"
status: seedling
---

# PSIS and Pareto k

**In one line:** Pareto smoothed importance sampling is the technique that approximates leave-one-out posteriors from a single fit, and its Pareto k value flags observations for which the approximation is unreliable.

> [!info] Before this, it helps to know
> [[Leave-one-out Cross-validation]] (what it serves) · [[Posterior Draws]] (what is reweighted) · [[Cook's Distance|Influential Observation]] (what high k usually reveals)

## Start from zero
1. **Importance sampling:** reweight draws from the full posterior so they behave like draws from the posterior without observation i. Weight ∝ 1 / p(yᵢ | θ).
2. **Problem:** if yᵢ is very influential, a few draws get enormous weights and the estimate is unstable.
3. **Pareto smoothing:** fit a generalised Pareto distribution to the largest weights and replace them with smoothed values.
4. **The fitted shape parameter is k.**
5. **Thresholds (loo package):** k < 0.5 good. 0.5 to 0.7 ok. Above 0.7 bad: the estimate for that observation is unreliable. Recent versions adjust the threshold slightly for the number of draws.
6. **What to do with bad k:** check the observation (outlier? coding error?), refit leaving it out (`reloo`), use k-fold CV, or reconsider the model (a heavier-tailed likelihood).
7. **Many high k values** usually mean a misspecified or overly flexible model.

## In R
```r
set.seed(7); x <- c(runif(59, 0, 10), 30); y <- c(1 + 0.5 * x[1:59] + rnorm(59), 1); m <- lm(y ~ x)          # one far-out, influential point
B <- MASS::mvrnorm(4000, coef(m), vcov(m)); sig <- sigma(m) * sqrt(58 / rchisq(4000, 58)); ll <- sapply(1:60, function(i) dnorm(y[i], B[, 1] + B[, 2] * x[i], sig, log = TRUE))
k <- suppressWarnings(loo::loo(ll))$diagnostics$pareto_k; round(c(max_other = max(k[-60]), influential_point = k[60]), 2)
```

## In the course
Pareto k tables appear in `loo()` output in the labs ([[Course Website]]).

## Common confusions
- **"High k means the model is wrong."** It means the LOO estimate for that point is unreliable. The model may or may not be at fault.

## Explain it back
- What k value is considered bad?

*Pass test:* you can explain where Pareto k comes from and what to do.

## Connections
- **Builds on:** [[Leave-one-out Cross-validation]], [[Posterior Draws]], [[Cook's Distance|Influential Observation]]
- **Leads to:** [[loo_compare()]], [[Outlier]]
- **Part of:** [[MOC - Bayesian Model Selection]]

## Flashcards

What does a Pareto k above 0.7 mean in loo output?
??
The importance-sampling estimate for that observation is unreliable, usually because the point is highly influential.
++++
