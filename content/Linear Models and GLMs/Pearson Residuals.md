---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Pearson residual"
  - "Standardised (Pearson) residuals"
  - "type = \"pearson\""
status: seedling
---

# Pearson Residuals

**In one line:** a Pearson residual is the raw residual divided by the standard deviation the model expects at that fitted value, so that all residuals are on a comparable scale.

> [!info] Before this, it helps to know
> [[Response Residuals]] (the numerator) · [[Mean-Variance Relationship]] (the denominator) · [[Standardizing|Standardization]] (the idea)

## The everyday picture
Grading on a curve. A miss of 7 where a miss of 7 is normal scores 1. A miss of 7 where the usual miss is 1.4 scores 5.

## A tiny example
Poisson, fitted mean 4, observed 8. Raw residual 4. Expected sd √4 = 2. Pearson residual = 2.

## Start from zero
1. **rᵢ = (yᵢ − μ̂ᵢ) / √Var(μ̂ᵢ).**
2. **Poisson:** divide by √μ̂. **Binomial:** by √(n p̂(1 − p̂)). **Negative binomial:** by √(μ̂ + μ̂²/k).
3. **If the model is right they have mean 0 and variance about 1** at every fitted value.
4. **Plot them against fitted values and each predictor.** Look for trends (wrong mean) and fans (wrong variance function).
5. **Their sum of squares is the Pearson chi-square statistic.** Divided by residual df, it is the dispersion estimate.
6. **Weakness:** for small counts and 0/1 data they are skewed and fall in bands, so patterns are hard to judge.

## In R
```r
(8 - 4) / sqrt(4)
set.seed(7); x <- runif(300); y <- rpois(300, exp(1 + 3 * x)); m <- glm(y ~ x, family = poisson)
rp <- resid(m, type = "pearson"); all.equal(unname(rp), unname((y - fitted(m)) / sqrt(fitted(m))))
tapply(rp, cut(fitted(m), c(0, 5, 15, 60)), sd)                         # about 1 everywhere
sum(rp^2) / df.residual(m)
```

## In the course
[[Zuur et al. 2009 Ch9]] uses Pearson residuals for GLM validation plots. [[Harrison et al. 2018]].

## Common confusions
- **"Pearson residuals should be normal."** For small counts they aren't, even under a correct model.
- **"Pearson residual and Pearson correlation are related."** Same statistician, different ideas.

## Explain it back
- Compute the Pearson residual for y = 1 with fitted Poisson mean 9.

*Pass test:* you can compute and plot Pearson residuals and get the dispersion from them.

## Connections
- **Builds on:** [[Response Residuals]], [[Mean-Variance Relationship]]
- **Leads to:** [[Overdispersion]], [[Deviance Residuals]], [[Randomized Quantile Residuals]], [[Dispersion Parameter]]
- **Part of:** [[MOC - Generalized Linear Models]], molecular note [[Which residuals to use for a GLM]]

## Flashcards

What is a Pearson residual?
??
(observed − fitted) divided by the model's expected standard deviation at that fitted value.
++++

What is the sum of squared Pearson residuals divided by residual df?
??
The estimated dispersion.
++++
