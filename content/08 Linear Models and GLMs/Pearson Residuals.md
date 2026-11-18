---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A Pearson residual is the raw residual divided by the standard deviation the model expects at that fitted value, so that all residuals are on a comparable scale."
aliases:
  - "Pearson residual"
  - "Standardised (Pearson) residuals"
  - "type = \"pearson\""
status: seedling
---

# Pearson Residuals

Grading on a curve: a miss of 7 where a miss of 7 is normal scores 1, while a miss of 7 where the usual miss is 1.4 scores 5. A **Pearson residual** is the [[Residual|raw residual]] divided by the [[Standard Deviation|standard deviation]] the model expects at that [[Fitted Value|fitted value]], rᵢ = (yᵢ − μ̂ᵢ) / √Var(μ̂ᵢ), so all residuals are on a comparable scale ([[Response Residuals]], [[Standardizing|Standardization]]). For a Poisson, divide by √μ̂; for a binomial, by √(n p̂(1 − p̂)); for a negative binomial, by √(μ̂ + μ̂²/k) ([[Mean-Variance Relationship]]). With fitted Poisson mean 4 and observed 8, the raw residual is 4, the expected SD is √4 = 2, and the Pearson residual is 2; with fitted mean 9 and observed 1 it is (1 − 9)/3 = −2.67.

If the model is right, Pearson residuals have mean 0 and variance about 1 at every fitted value. In the code below, the same Poisson data whose raw residuals fanned out have Pearson residuals with SD about 1 in every band. Plot them against fitted values and each [[Predictor Variable|predictor]]: a trend means a wrong mean, a fan a wrong variance function. Their [[Sum of Squares|sum of squares]] is the Pearson chi-square statistic, and divided by residual df it is the dispersion estimate ([[Dispersion Parameter]], [[Overdispersion]]).

Their weakness is that for small counts and 0/1 data they are skewed and fall in bands, so patterns are hard to judge, and they are not normal even under a correct model. That is the case for [[Randomized Quantile Residuals]] ([[Zuur et al. 2009 Ch9]], [[Harrison et al. 2018]]). Pearson residuals have nothing to do with the [[Correlation|Pearson correlation]] beyond the statistician's name. R's default GLM residuals are [[Deviance Residuals]].

```r
(8 - 4) / sqrt(4)
set.seed(7); x <- runif(300); y <- rpois(300, exp(1 + 3 * x)); m <- glm(y ~ x, family = poisson)
rp <- resid(m, type = "pearson"); all.equal(unname(rp), unname((y - fitted(m)) / sqrt(fitted(m))))
tapply(rp, cut(fitted(m), c(0, 5, 15, 60)), sd)                         # about 1 everywhere
sum(rp^2) / df.residual(m)
```

## Connections
- **Builds on:** [[Response Residuals]], [[Mean-Variance Relationship]], [[Residual]], [[Standard Deviation]], [[Fitted Value]], [[Predictor Variable]], [[Sum of Squares]], [[Correlation]]
- **Leads to:** [[Overdispersion]], [[Deviance Residuals]], [[Randomized Quantile Residuals]], [[Dispersion Parameter]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Which residuals to use for a GLM]]

## Flashcards

What is a Pearson residual?
??
(observed − fitted) divided by the model's expected standard deviation at that fitted value.
++++

What is the sum of squared Pearson residuals divided by residual df?
??
The estimated dispersion.
++++
