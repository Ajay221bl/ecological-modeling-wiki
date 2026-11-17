---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The residual sum of squares is the total of the squared residuals, Σ(yᵢ − ŷᵢ)², measuring how much variation a fitted model leaves unexplained."
aliases:
  - "RSS"
  - "SSE"
  - "Sum of squared errors"
  - "Sum of squared residuals"
  - "SS residual"
status: seedling
---

# Residual Sum of Squares

Throw darts at a bullseye drawn where the model says they should land, square each miss and add them up: that is the **residual sum of squares** (RSS), Σ(yᵢ − ŷᵢ)², the total of the squared residuals, which measures how much variation a fitted model leaves unexplained ([[Sum of Squares]], [[Residual]]). With observations 3, 5 and 7 and fitted values 4, 5 and 6, the residuals are −1, 0 and 1, so RSS = 1 + 0 + 1 = 2. Squaring makes misses positive and punishes big misses more, and [[Least Squares]] chooses the coefficients that make RSS as small as possible.

RSS / (n − p) estimates the residual variance σ², and its square root is the residual standard error. R² = 1 − RSS / TSS ([[Total Sum of Squares]], [[R-squared]]). For a normal linear model the [[Deviance]] equals RSS, which is why deviance generalises it to GLMs. In the code below `lm(mpg ~ wt)` on `mtcars` has RSS 278.3, the same as `deviance(m)`, and RSS divided by its 30 residual df gives 9.28, exactly `sigma(m)²`.

RSS always falls when you add predictors, so it cannot choose model size alone ([[Overfitting]], [[AIC]]). It belongs to the linear models unit ([[Course Website]], [[Zuur et al. 2009 Appendix A]]). Lower RSS does not mean a better model: compare with AIC or held-out data.

```r
m <- lm(mpg ~ wt, data = mtcars)
c(RSS = sum(resid(m)^2), deviance = deviance(m), sigma_sq = sum(resid(m)^2) / df.residual(m), sigma_lm = sigma(m)^2)
```

## Connections
- **Builds on:** [[Sum of Squares]], [[Residual]]
- **Leads to:** [[Least Squares]], [[R-squared]], [[Deviance]], [[Residual Standard Error]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], molecular note [[Least Squares vs Maximum Likelihood]]

## Flashcards

What is the residual sum of squares?
??
Σ(yᵢ − ŷᵢ)², the squared residuals added up.
++++

How is the residual variance estimated from RSS?
??
RSS / (n − p).
++++
