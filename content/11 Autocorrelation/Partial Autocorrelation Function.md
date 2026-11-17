---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "PACF"
  - "pacf()"
  - "Partial ACF"
status: seedling
---

# Partial Autocorrelation Function

**In one line:** the partial autocorrelation at lag k is the correlation between values k steps apart after removing the part explained by the values in between.

> [!info] Before this, it helps to know
> [[Autocorrelation Function]] (the unadjusted version) · [[Regression Coefficient|Partial Regression Coefficient]] (the same "controlling for" idea)

## Start from zero
1. **In an AR(1) process,** values two steps apart are correlated only through the value between them. ACF at lag 2 = φ², but PACF at lag 2 ≈ 0.
2. **PACF of an AR(p) process cuts off after lag p.** That helps choose p.
3. **ACF of an MA(q) process cuts off after lag q.**
4. **`pacf(x)` in R.** Lags start at 1.

## In R
```r
set.seed(7); e <- as.numeric(arima.sim(list(ar = 0.7), n = 300))
round(rbind(acf = acf(e, plot = FALSE)$acf[2:5], pacf = pacf(e, plot = FALSE)$acf[1:4]), 2)
```

## In the course
Not used in the in-scope labs. Included because it is the standard partner of the ACF when choosing AR terms.

## Common confusions
- **"PACF and ACF are the same at every lag."** Only at lag 1.

## Explain it back
- Why is the lag-2 PACF near zero for AR(1)?

*Pass test:* you can use PACF to pick an AR order.

## Connections
- **Builds on:** [[Autocorrelation Function]], [[Regression Coefficient|Partial Regression Coefficient]]
- **Leads to:** [[AR(1) Error Structure]], [[ARMA Error Structure]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[ACF vs PACF]]

## Flashcards

What does the partial autocorrelation at lag k measure?
??
The correlation between values k apart after removing the effect of the intermediate values.
++++

What PACF pattern indicates an AR(p) process?
??
A cut-off after lag p.
++++
