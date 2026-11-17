---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "ARMA"
  - "corARMA()"
  - "ARMA(p, q)"
  - "Moving average errors"
  - "MA(q)"
  - "AR(p)"
status: seedling
---

# ARMA Error Structure

**In one line:** an ARMA(p, q) error structure combines autoregressive terms (dependence on the previous p residuals) with moving-average terms (dependence on the previous q random shocks), allowing more flexible temporal correlation than AR(1).

> [!info] Before this, it helps to know
> [[AR(1) Error Structure]] (the simplest case, ARMA(1, 0)) · [[Partial Autocorrelation Function]]

## Start from zero
1. **AR(p):** εₜ = φ₁εₜ₋₁ + ... + φₚεₜ₋ₚ + ηₜ.
2. **MA(q):** εₜ = ηₜ + θ₁ηₜ₋₁ + ... + θ_qηₜ₋q. A shock affects only the next q steps.
3. **ARMA(p, q)** combines both.
4. **nlme:** `corARMA(form = ~ year, p = 2, q = 0)`.
5. **Choose p and q with AIC,** trying small values (0 to 3). ACF and PACF give hints.
6. **More parameters, more convergence trouble,** especially in short series. Zuur et al. caution that higher orders are rarely needed.

## In R
```r
library(nlme); set.seed(3); d <- data.frame(year = 1:80); d$y <- as.numeric(arima.sim(list(ar = c(0.5, 0.3)), 80))
sapply(list(ar1 = corAR1(form = ~ year), ar2 = corARMA(form = ~ year, p = 2), arma11 = corARMA(form = ~ year, p = 1, q = 1)), function(cs) round(AIC(gls(y ~ 1, correlation = cs, data = d)), 1))
```

## In the course
[[Zuur et al. 2009 Ch6]] (section on ARMA error structures).

## Common confusions
- **"Higher p and q are always better."** They overfit and often fail to converge.

## Explain it back
- What does an MA(1) term mean in words?

*Pass test:* you can fit and compare ARMA structures.

## Connections
- **Builds on:** [[AR(1) Error Structure]], [[Partial Autocorrelation Function]]
- **Leads to:** [[Correlation Structure]], [[AIC]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[ACF vs PACF]]

## Flashcards

What is an ARMA(p, q) error structure?
??
Residuals depending on their p previous values (AR) and on the q previous random shocks (MA).
++++
