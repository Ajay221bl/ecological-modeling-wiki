---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
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

**In one line:** variance structures let the residual variance change with a covariate or between groups, modelling heteroscedasticity directly instead of transforming the response.

> [!info] Before this, it helps to know
> [[Heteroscedasticity]] · [[Generalized Least Squares]] · [[nlme lme()]]

## Start from zero
1. **Used through `weights =` in `gls()` and `lme()`.**
2. **`varFixed(~ x)`:** variance proportional to x.
3. **`varIdent(form = ~ 1 | sex)`:** a different variance for each level of a factor.
4. **`varPower(form = ~ x)`:** variance ∝ |x|^(2δ).
5. **`varExp(form = ~ x)`:** variance ∝ exp(2δx).
6. **`varConstPower`, `varComb`:** combinations.
7. **Choose with AIC (REML, same fixed effects),** then check normalised residuals (Zuur Ch4).
8. **Harrison et al. note varIdent as an alternative to transformation** for unequal variances between groups.

## In R
```r
library(nlme); set.seed(6); d <- data.frame(sex = factor(rep(c("F", "M"), each = 60)), x = runif(120, 1, 10)); d$y <- 2 + 0.5 * d$x + rnorm(120, 0, ifelse(d$sex == "F", 1, 3))
m0 <- gls(y ~ x + sex, data = d); m1 <- gls(y ~ x + sex, weights = varIdent(form = ~ 1 | sex), data = d)
round(c(AIC_constant = AIC(m0), AIC_varIdent = AIC(m1), sd_ratio_M_to_F = coef(m1$modelStruct$varStruct, unconstrained = FALSE)[[1]]), 2)
```

## In the course
[[Zuur et al. 2009 Ch4]]. [[Harrison et al. 2018]].

## Common confusions
- **"Unequal variance always needs a log transform."** A variance structure models it without changing the scale of the mean.

## Explain it back
- Which variance function gives each sex its own variance?

*Pass test:* you can add and choose a variance structure.

## Connections
- **Builds on:** [[Heteroscedasticity]], [[Generalized Least Squares]], [[nlme lme()]]
- **Leads to:** [[Homogeneity of Variance]], [[Correlation Structure]], [[Transform the data or change the model]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What does varIdent(form = ~ 1 | sex) do?
??
Gives each sex its own residual variance.
++++

How are variance structures added to gls() or lme()?
??
Through the weights argument.
++++
