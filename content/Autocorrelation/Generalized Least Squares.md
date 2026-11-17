---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "GLS"
  - "gls()"
  - "Generalised least squares"
  - "Spatial GLS"
status: seedling
---

# Generalized Least Squares

**In one line:** generalized least squares is linear regression that allows the residuals to be correlated (and to have unequal variances) by estimating a covariance structure for them, instead of assuming they are independent.

> [!info] Before this, it helps to know
> [[Least Squares|Ordinary Least Squares]] (the special case with independent, equal-variance errors) · [[Variance-Covariance Matrix|Covariance Matrix]] (what GLS models) · [[Correlation Structure]] (how it is specified)

## The everyday picture
OLS treats every observation as an independent witness. GLS knows some witnesses talked to each other before testifying, and down-weights the overlapping parts of their stories.

## Start from zero
1. **OLS assumes the error covariance is σ²I:** equal variances, zero correlations.
2. **GLS assumes σ²Σ,** where Σ has a structure with a few parameters (for example correlation = exp(−distance/range)).
3. **It estimates β and the structure's parameters together,** usually by REML (the nlme default) or ML.
4. **Coefficients are reweighted** to account for overlap, and standard errors reflect the reduced information.
5. **OLS standard errors are too small mainly when the predictor is autocorrelated too.** In the simulation below, OLS reported an SE of 0.11 while its slopes actually scattered with SD 0.22, so its 95% intervals missed the truth 34% of the time. GLS slopes scattered less (SD 0.11) and its SEs matched, missing 5% of the time.
6. **In R:** `nlme::gls(y ~ x, correlation = corExp(form = ~ east + north), data = d)`. Add `weights = varIdent(...)` for unequal variances.
7. **If residuals are independent, GLS reduces to OLS** (Diniz-Filho et al.).
8. **Compare structures with AIC** (same fixed effects, REML), then compare fixed effects with ML (Zuur's protocol).
9. **Check the normalised residuals** (`resid(m, type = "normalized")`): they should no longer show autocorrelation.

## In R
```r
library(nlme); set.seed(1); n <- 80; xy <- data.frame(east = runif(n, 0, 10), north = runif(n, 0, 10)); L <- t(chol(exp(-as.matrix(dist(xy)) / 2)))   # correlation range 2
r <- t(replicate(100, { d <- xy; d$x <- as.numeric(L %*% rnorm(n)); d$y <- 1 + 0.3 * d$x + as.numeric(L %*% rnorm(n))      # x and errors both spatially patterned
  m0 <- lm(y ~ x, d); m1 <- gls(y ~ x, correlation = corExp(form = ~ east + north), data = d)
  c(coef(m0)[[2]], summary(m0)$coef[2, 2], coef(m1)[[2]], summary(m1)$tTable[2, 2]) }))
round(rbind(OLS = c(sd_of_slopes = sd(r[, 1]), mean_reported_SE = mean(r[, 2]), CI_misses_truth = mean(abs(r[, 1] - 0.3) > 1.96 * r[, 2])),
            GLS = c(sd(r[, 3]), mean(r[, 4]), mean(abs(r[, 3] - 0.3) > 1.96 * r[, 4]))), 3)        # 100 simulated datasets
```

## In the course
[[Diniz-Filho et al. 2003]] compare OLS and spatial GLS for bird richness. [[Dynamic Ecology Autocorrelation Post]] (McGill's preferred method). `nlme` in the autocorrelation lab ([[Course Website]]). [[Zuur et al. 2009 Ch6]] and [[Zuur et al. 2009 Ch7]].

## Common confusions
- **"GLS is for non-normal data."** That is GLM. GLS keeps normal errors but lets them correlate.
- **"GLS only changes p-values."** It can also change coefficients (Diniz-Filho et al. found GLS gave more weight to small-scale predictors).

## Explain it back
- What does GLS assume about the error covariance?

*Pass test:* you can fit a GLS with a correlation structure and compare it with OLS.

## Connections
- **Builds on:** [[Least Squares|Ordinary Least Squares]], [[Variance-Covariance Matrix|Covariance Matrix]], [[Correlation Structure]]
- **Leads to:** [[AR(1) Error Structure]], [[Spatial Correlation Functions]], [[Variance Structures]], [[REML vs ML]]
- **Part of:** [[MOC - Autocorrelation]], molecular note [[OLS vs GLS]], [[How to detect and handle autocorrelation]]

## Flashcards

What is generalized least squares?
??
Linear regression whose errors may be correlated or have unequal variances, with that covariance structure estimated from the data.
++++

When does GLS reduce to OLS?
??
When the residuals are independent with equal variance.
++++
