---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "Generalized least squares is linear regression that allows the residuals to be correlated (and to have unequal variances) by estimating a covariance structure for them, instead of assuming they are independent."
aliases:
  - "GLS"
  - "gls()"
  - "Generalised least squares"
  - "Spatial GLS"
status: seedling
---

# Generalized Least Squares

Ordinary least squares treats every observation as an independent witness. **Generalized least squares** (GLS) knows some witnesses talked to each other before testifying, and down-weights the overlapping parts of their stories. It is [[Linear Regression|linear regression]] that allows the residuals to be correlated, and to have unequal variances, by estimating a structure for their [[Variance-Covariance Matrix|Covariance Matrix]] instead of assuming [[Independence of Observations|independence]] ([[Least Squares|Ordinary Least Squares]]). OLS assumes the error covariance is σ²I, equal variances and zero correlations; GLS assumes σ²Σ, where Σ follows a [[Correlation Structure]] with a few parameters, for example correlation = exp(−distance/range).

GLS estimates β and the structure's parameters together, by [[REML]] (the nlme default) or ML, so coefficients are reweighted to account for overlap and standard errors reflect the reduced information. In R, `nlme::gls(y ~ x, correlation = corExp(form = ~ east + north), data = d)` fits it, and `weights = varIdent(...)` adds unequal variances ([[Variance Structures]]). OLS standard errors are too small mainly when the [[Predictor Variable|predictor]] is [[Autocorrelation|autocorrelated]] too. In the code below, 100 datasets have spatially patterned x and errors: OLS reports an SE of 0.11 while its slopes actually scatter with SD 0.22, so its 95% intervals miss the truth 34% of the time; GLS slopes scatter less (SD 0.11), its SEs match, and it misses 5% of the time.

If residuals are independent, GLS reduces to OLS. Zuur's protocol compares structures with AIC under REML with the same [[Fixed Effect|fixed effects]], then compares fixed effects under ML ([[REML vs ML]]), and checks that the normalised residuals, `resid(m, type = "normalized")`, no longer show autocorrelation. [[Diniz-Filho et al. 2003]] compare OLS and spatial GLS for bird [[Species Richness|richness]]; it is McGill's preferred method in the [[Dynamic Ecology Autocorrelation Post]] and is fitted with nlme in the autocorrelation lab ([[Course Website]], [[Zuur et al. 2009 Ch6]], [[Zuur et al. 2009 Ch7]]). GLS is not for non-normal data, which is GLM; it keeps normal errors but lets them correlate. And it does not only change p-values: Diniz-Filho et al. found it also changed which predictors carried the weight. Temporal and spatial versions use the [[AR(1) Error Structure]] and [[Spatial Correlation Functions]].

```r
library(nlme); set.seed(1); n <- 80; xy <- data.frame(east = runif(n, 0, 10), north = runif(n, 0, 10)); L <- t(chol(exp(-as.matrix(dist(xy)) / 2)))   # correlation range 2
r <- t(replicate(100, { d <- xy; d$x <- as.numeric(L %*% rnorm(n)); d$y <- 1 + 0.3 * d$x + as.numeric(L %*% rnorm(n))      # x and errors both spatially patterned
  m0 <- lm(y ~ x, d); m1 <- gls(y ~ x, correlation = corExp(form = ~ east + north), data = d)
  c(coef(m0)[[2]], summary(m0)$coef[2, 2], coef(m1)[[2]], summary(m1)$tTable[2, 2]) }))
round(rbind(OLS = c(sd_of_slopes = sd(r[, 1]), mean_reported_SE = mean(r[, 2]), CI_misses_truth = mean(abs(r[, 1] - 0.3) > 1.96 * r[, 2])),
            GLS = c(sd(r[, 3]), mean(r[, 4]), mean(abs(r[, 3] - 0.3) > 1.96 * r[, 4]))), 3)        # 100 simulated datasets
```

## Connections
- **Builds on:** [[Least Squares|Ordinary Least Squares]], [[Variance-Covariance Matrix|Covariance Matrix]], [[Correlation Structure]], [[Linear Regression]], [[Independence of Observations]], [[Predictor Variable]], [[Autocorrelation]], [[Species Richness]]
- **Leads to:** [[AR(1) Error Structure]], [[Spatial Correlation Functions]], [[Variance Structures]], [[REML vs ML]], [[REML]], [[Fixed Effect]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[OLS vs GLS]], [[How to detect and handle autocorrelation]]

## Flashcards

What is generalized least squares?
??
Linear regression whose errors may be correlated or have unequal variances, with that covariance structure estimated from the data.
++++

When does GLS reduce to OLS?
??
When the residuals are independent with equal variance.
++++
