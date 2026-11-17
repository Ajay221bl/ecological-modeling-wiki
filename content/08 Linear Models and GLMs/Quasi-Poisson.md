---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Quasi-likelihood"
  - "Quasipoisson"
  - "Quasibinomial"
  - "Quasi-Poisson and quasi-likelihood"
status: seedling
---

# Quasi-Poisson

**In one line:** a quasi-Poisson model keeps the Poisson's mean structure but multiplies the variance by an estimated dispersion factor, widening the standard errors to match the data's actual spread.

> [!info] Before this, it helps to know
> [[Poisson Regression]] (which it corrects) · [[Dispersion Parameter]] (the φ it estimates) · [[Overdispersion]] (the reason)

## The everyday picture
A weather forecast with a correction sticker. The forecast itself is unchanged. A sticker on the front says "multiply all stated uncertainties by 2", based on how wrong past forecasts turned out to be.

## Start from zero
1. **Mean model identical to Poisson:** log(μ) = η. Coefficients come out the same.
2. **Variance = φ × μ.** φ is estimated as Pearson χ² / residual df.
3. **Standard errors are multiplied by √φ.**
4. **Tests switch from z to t and from chi-square to F,** because φ is estimated.
5. **It is not a real probability distribution.** Only a mean and a variance rule are specified. This is "quasi-likelihood".
6. **Consequence: no likelihood, so no AIC.** (QAIC is the workaround: fit Poisson, divide the log-likelihood by ĉ.)
7. **Quasi-Poisson vs negative binomial:** quasi says variance grows in proportion to the mean. Negative binomial says it grows with the mean squared. They weight large counts differently.
8. **`family = quasibinomial`** does the same for overdispersed proportions.

## In R
```r
set.seed(21); x <- runif(200); y <- rnbinom(200, mu = exp(1 + x), size = 1.5)
mp <- glm(y ~ x, family = poisson); mq <- glm(y ~ x, family = quasipoisson)
rbind(poisson = summary(mp)$coefficients[2, 1:2], quasi = summary(mq)$coefficients[2, 1:2])
phi <- summary(mq)$dispersion; c(phi = phi, se_ratio = summary(mq)$coefficients[2, 2] / summary(mp)$coefficients[2, 2], sqrt_phi = sqrt(phi))
AIC(mq)                                               # NA: no likelihood
```

## In the course
[[Zuur et al. 2009 Ch9]]. [[Anderson and Burnham 2002]] use the same idea as the variance inflation factor ĉ.

## Common confusions
- **"Quasi-Poisson changes the estimates."** Only their standard errors.

## Explain it back
- Why has a quasi-Poisson model no AIC?

*Pass test:* you can fit a quasi-Poisson model and explain what changed.

## Connections
- **Builds on:** [[Poisson Regression]], [[Dispersion Parameter]]
- **Leads to:** [[Negative Binomial GLM]], [[QAIC]], [[z-test]], [[Overdispersion]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What does a quasi-Poisson model change relative to Poisson?
??
It estimates a dispersion φ and multiplies standard errors by √φ. Coefficient estimates are unchanged.
++++

Why can't AIC be computed for quasi models?
??
They specify only a mean-variance relationship, not a full likelihood.
++++
