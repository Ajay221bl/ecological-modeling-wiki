---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Bayesian R-squared measures the share of variance explained by a Bayesian model, computed for every posterior draw so that it comes with its own uncertainty."
aliases:
  - "Bayes R2"
  - "bayes_R2()"
  - "Bayesian R2"
status: seedling
---

# Bayesian R-squared

**Bayesian R-squared** is the usual "how much of the scatter does the model account for", reported as a range to show that the answer is itself uncertain ([[R-squared]]). Classical R² = 1 − residual SS / total SS can exceed 1 in a Bayesian model with strong priors, which makes no sense. The Bayesian version is computed for each posterior draw s as R²_s = Var(fitted values) / (Var(fitted values) + Var(residuals)), so it always lies between 0 and 1 ([[Variance]], [[Posterior Draws]]).

You get a posterior distribution of R² and report its median and interval; in brms use `bayes_R2(fit)`. In the code below, a regression's Bayesian R² has median 0.46 and 95% interval 0.30 to 0.57, while the classical value is 0.46. For mixed models it can be computed with or without group-level effects, matching the conditional and marginal versions ([[Marginal and Conditional R-squared]]).

The same cautions apply as for any R² or [[Deviance Explained]]: it isn't a model selection tool and says nothing about whether assumptions hold. The labs use `bayes_R2()` ([[Course Website]]). It is usually close to the classical number but, unlike it, is a distribution.

```r
set.seed(13); x <- runif(60); y <- 1 + 2 * x + rnorm(60, 0, 0.6); m <- lm(y ~ x); X <- cbind(1, x)
B <- MASS::mvrnorm(2000, coef(m), vcov(m)); r2 <- apply(B, 1, function(b) { f <- X %*% b; var(f) / (var(f) + var(y - f)) })
round(c(median = median(r2), quantile(r2, c(.025, .975)), classical = summary(m)$r.squared), 3)
```

## Connections
- **Builds on:** [[R-squared]], [[Posterior Draws]]
- **Leads to:** [[Marginal and Conditional R-squared]], [[Deviance Explained]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

How is Bayesian R² defined for one posterior draw?
??
Variance of the fitted values divided by (variance of fitted values + variance of residuals).
++++
