---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "The partial autocorrelation at lag k is the correlation between values k steps apart after removing the part explained by the values in between."
aliases:
  - "PACF"
  - "pacf()"
  - "Partial ACF"
status: seedling
---

# Partial Autocorrelation Function

The **partial autocorrelation** at [[Lag|lag k]] is the correlation between values k steps apart after removing the part explained by the values in between, the same "[[Holding Other Variables Constant|controlling for]]" idea as a [[Regression Coefficient|Partial Regression Coefficient]]. In an AR(1) process, values two steps apart are correlated only through the value between them, so the [[Autocorrelation Function]] at lag 2 is φ² while the PACF at lag 2 is about 0.

That makes it useful for choosing models: the PACF of an AR(p) process cuts off after lag p, and the ACF of an MA(q) process cuts off after lag q ([[AR(1) Error Structure]], [[ARMA Error Structure]]). In R use `pacf(x)`, whose lags start at 1. In the code below an AR(1) series with φ = 0.7 has ACF values of 0.73, 0.53, 0.37 and 0.26 at lags 1 to 4, but PACF values of 0.73, −0.02, −0.02 and 0.00: one spike, then nothing.

It is not used in the in-scope labs, but it is the standard partner of the ACF when choosing AR terms. The PACF and ACF are equal only at lag 1.

```r
set.seed(7); e <- as.numeric(arima.sim(list(ar = 0.7), n = 300))
round(rbind(acf = acf(e, plot = FALSE)$acf[2:5], pacf = pacf(e, plot = FALSE)$acf[1:4]), 2)
```

## Connections
- **Builds on:** [[Autocorrelation Function]], [[Regression Coefficient|Partial Regression Coefficient]], [[Lag]], [[Holding Other Variables Constant]]
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
