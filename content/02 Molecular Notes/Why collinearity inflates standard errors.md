---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - exploration
aliases:
  - "Why collinearity makes coefficients unstable"
  - "Collinearity and standard errors"
  - "VIF and standard errors"
status: seedling
---

# Why collinearity inflates standard errors

> [!summary] In plain words
> when predictors are strongly correlated, the data contain little information about what each does on its own, so the model cannot separate their effects; standard errors grow by the square root of the variance inflation factor, and estimates can swing or flip sign between samples.

## The question
Why do my coefficients become unstable when predictors are correlated?

## Built from
- [[Collinearity]] and [[Variance Inflation Factor]].
- [[Standard Error]] and [[Holding Other Variables Constant]].
- [[Multiple Regression]].

## The reasoning, step by step
1. **A partial effect compares units that differ in x₁ but share x₂.**
2. **If x₁ and x₂ move together,** there are few such units, so the comparison rests on little information.
3. **VIF = 1 / (1 − R²ⱼ),** where R²ⱼ comes from regressing xⱼ on the other predictors; SE is multiplied by √VIF.
4. **r = 0.95 between two predictors gives VIF ≈ 10** and SEs about 3.2 times larger.
5. **Predictions inside the data cloud stay fine;** it is the separate coefficients that are unstable.
6. **Zuur et al. (2010)** suggest dropping predictors until VIFs are below about 3; other options are combining them (an index, PCA) or choosing one on biological grounds.
Two predictors with correlation 0.95, true slopes 1 and 1, n = 100: across 1,000 simulated data sets, the SD of the estimated slope is 0.33 compared with 0.10 when the predictors are uncorrelated, about √10 times larger.

## So in practice
Check VIFs (or pairwise correlations) before fitting; if two predictors measure the same thing, keep the one that matches your hypothesis.

## In R
```r
set.seed(8)
sim <- function(r) replicate(1000, { x1 <- rnorm(100); x2 <- r * x1 + sqrt(1 - r^2) * rnorm(100); coef(lm(x1 + x2 + rnorm(100) ~ x1 + x2))[2] })
round(c(sd_r0 = sd(sim(0)), sd_r95 = sd(sim(0.95)), vif_r95 = 1 / (1 - 0.95^2)), 2)
```

## What would go wrong otherwise
Interpreting a flipped sign on one of two near-duplicate predictors as a real negative effect.

## Explain it back
- What multiplies the SE of a coefficient under collinearity?

*Pass test:* you can explain instability with VIF and a simulation.

## Connections
- **Related:** [[Simple vs Multiple Regression]], [[Why explore data before modeling]], [[Centering, Scaling and Standardizing]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 04 - Data Exploration|MOC - Data Exploration]], [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

How much does collinearity inflate a coefficient's SE?
??
By √VIF, where VIF = 1/(1 − R²ⱼ).
++++

Does collinearity harm predictions?
??
Not inside the range of the data; it harms separate coefficient estimates.
++++
