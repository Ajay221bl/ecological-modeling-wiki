---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Variance structures let the residual variance change with a covariate or between groups, modelling heteroscedasticity directly instead of transforming the response."
aliases:
  - "varIdent()"
  - "varPower()"
  - "varExp()"
  - "varFixed()"
  - "varConstPower()"
  - "varComb()"
  - "weights argument"
  - "Variance Structures for Heterogeneity"
status: seedling
---

# Variance Structures

**Variance structures** let the residual variance change with a covariate or between groups, modelling [[Heteroscedasticity]] directly instead of transforming the response ([[Generalized Least Squares]], [[nlme lme()]]). They are used through the `weights =` argument of `gls()` and `lme()`. `varFixed(~ x)` makes the variance proportional to x; `varIdent(form = ~ 1 | sex)` gives each level of a factor its own variance; `varPower(form = ~ x)` makes it proportional to |x|^(2δ); `varExp(form = ~ x)` to exp(2δx); and `varConstPower` and `varComb` combine them.

Choose among them with AIC from REML fits with the same fixed effects, then check the normalised residuals (Zuur Ch4). In the code below males are simulated with three times the residual SD of females; a constant-variance `gls()` has AIC 540.3, the `varIdent` model 479.2, and it estimates the male-to-female SD ratio as 3.16.

[[Harrison et al. 2018]] note `varIdent` as an alternative to transformation for unequal variances between groups ([[Zuur et al. 2009 Ch4]]). Unequal variance does not always need a log transform; a variance structure models it without changing the scale of the mean.

```r
library(nlme); set.seed(6); d <- data.frame(sex = factor(rep(c("F", "M"), each = 60)), x = runif(120, 1, 10)); d$y <- 2 + 0.5 * d$x + rnorm(120, 0, ifelse(d$sex == "F", 1, 3))
m0 <- gls(y ~ x + sex, data = d); m1 <- gls(y ~ x + sex, weights = varIdent(form = ~ 1 | sex), data = d)
round(c(AIC_constant = AIC(m0), AIC_varIdent = AIC(m1), sd_ratio_M_to_F = coef(m1$modelStruct$varStruct, unconstrained = FALSE)[[1]]), 2)
```

## Connections
- **Builds on:** [[Heteroscedasticity]], [[Generalized Least Squares]], [[nlme lme()]]
- **Leads to:** [[Homogeneity of Variance]], [[Correlation Structure]], [[Transform the data or change the model]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What does varIdent(form = ~ 1 | sex) do?
??
Gives each sex its own residual variance.
++++

How are variance structures added to gls() or lme()?
??
Through the weights argument.
++++
