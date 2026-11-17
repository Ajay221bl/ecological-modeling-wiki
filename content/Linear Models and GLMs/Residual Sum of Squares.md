---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "RSS"
  - "SSE"
  - "Sum of squared errors"
  - "Sum of squared residuals"
  - "SS residual"
status: seedling
---

# Residual Sum of Squares

**In one line:** the residual sum of squares is the total of the squared residuals, Σ(yᵢ − ŷᵢ)², measuring how much variation a fitted model leaves unexplained.

> [!info] Before this, it helps to know
> [[Sum of Squares]] · [[Residual]]

## The everyday picture
Darts around a bullseye drawn where the model says they should land. Square each miss and add them up: that is the RSS. Smaller means the model's targets were closer.

## A tiny example
Observations 3, 5, 7 with fitted values 4, 5, 6: residuals −1, 0, 1, so RSS = 1 + 0 + 1 = 2.

## Start from zero
1. **Least squares chooses coefficients to make RSS as small as possible.**
2. **Squaring** makes misses positive and punishes big misses more.
3. **RSS / (n − p)** estimates the residual variance σ²; its square root is the residual standard error.
4. **R² = 1 − RSS / TSS.**
5. **For a normal linear model,** deviance equals RSS, which is why deviance generalises it to GLMs.
6. **RSS always falls when you add predictors,** so it cannot choose model size alone.

## In R
```r
m <- lm(mpg ~ wt, data = mtcars)
c(RSS = sum(resid(m)^2), deviance = deviance(m), sigma_sq = sum(resid(m)^2) / df.residual(m), sigma_lm = sigma(m)^2)
```

## In the course
Linear models unit ([[Course Website]]). [[Zuur et al. 2009 Appendix A]].

## Common confusions
- **"Lower RSS means a better model."** It always falls with more terms; compare with AIC or held-out data.

## Explain it back
- How do RSS and residual variance relate?

*Pass test:* you can compute RSS and use it in R² and σ̂.

## Connections
- **Builds on:** [[Sum of Squares]], [[Residual]]
- **Leads to:** [[Least Squares]], [[R-squared]], [[Deviance]], [[Residual Standard Error]]
- **Part of:** [[MOC - Linear Models and GLMs]], molecular note [[Least Squares vs Maximum Likelihood]]

## Flashcards

What is the residual sum of squares?
??
Σ(yᵢ − ŷᵢ)², the squared residuals added up.
++++

How is the residual variance estimated from RSS?
??
RSS / (n − p).
++++
