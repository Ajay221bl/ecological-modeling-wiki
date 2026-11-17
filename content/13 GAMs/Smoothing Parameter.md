---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "Lambda (smoothing)"
  - "sp"
  - "Smoothing Parameter (lambda)"
  - "Smoothing parameter λ"
status: seedling
---

# Smoothing Parameter

**In one line:** the smoothing parameter λ sets how heavily wiggliness is penalised relative to fit, trading closeness to the data against smoothness of the curve.

> [!info] Before this, it helps to know
> [[Wiggliness Penalty]] · [[Bias-Variance Trade-off]]

## Start from zero
1. **Small λ:** curve follows the data closely (low bias, high variance).
2. **Large λ:** curve flattens toward the null space (high bias, low variance).
3. **mgcv estimates one λ per smooth** (several for tensor products).
4. **Methods:** REML (recommended), ML, GCV (default `GCV.Cp` in older code), UBRE.
5. **You can fix it:** `gam(..., sp = 0.1)`. Rarely needed.
6. **`m$sp`** shows the estimated values.

## See it
![[Smoothing parameter.png|700]]
*What to look at:* left λ tiny, middle moderate, right huge.

## In R
```r
library(mgcv); set.seed(9); d <- data.frame(x = runif(200)); d$y <- sin(2 * pi * d$x) + rnorm(200, 0, 0.3); m <- gam(y ~ s(x), data = d, method = "REML")
round(c(lambda = m$sp[[1]], edf = summary(m)$edf), 3)
```

## In the course
[[Pedersen et al. 2019]] (Fig. 2: λ by REML, λ = 0, λ very large). [[Noam Ross GAM Course]].

## Common confusions
- **"λ is chosen by the analyst."** mgcv estimates it.

## Explain it back
- What happens to the edf as λ grows?

*Pass test:* you can explain the bias-variance role of λ.

## Connections
- **Builds on:** [[Wiggliness Penalty]], [[Bias-Variance Trade-off]]
- **Leads to:** [[REML for Smoothness Selection]], [[Generalized Cross-validation]], [[Effective Degrees of Freedom]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What does the smoothing parameter control?
??
How strongly wiggliness is penalised: small λ is wiggly, large λ is smooth.
![[Smoothing parameter.png]]
++++
