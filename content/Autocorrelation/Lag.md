---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Time lag"
  - "Lag k"
  - "Spatial lag"
status: seedling
---

# Lag

**In one line:** a lag is the separation, in time steps or distance, between two observations whose values are being compared.

> [!info] Before this, it helps to know
> [[Time Series]] (where lags are counted)

## Start from zero
1. **Lag 1:** each value paired with the one just before it.
2. **Lag k:** each value paired with the one k steps before.
3. **Lag 0 correlation is always 1.**
4. **In cross-correlation,** lags can be negative: x at time t paired with y at time t − k or t + k.
5. **In space, the "lag" is a distance class.**
6. **Lagged predictors** (last year's rainfall) are a separate idea: using a past value of a covariate as a predictor.

## In R
```r
x <- c(5, 7, 6, 9, 8); cbind(x_t = x[-1], x_t_minus_1 = x[-5])        # lag-1 pairs
```

## In the course
Reading the lag axis on `acf()` and `ccf()` plots in the autocorrelation lab ([[Course Website]]).

## Common confusions
- **"Lag is measured in calendar units."** In `acf()` it is in observation steps (or units of the series' frequency).

## Explain it back
- What is the lag-0 autocorrelation?

*Pass test:* you can build lagged pairs.

## Connections
- **Builds on:** [[Time Series]]
- **Leads to:** [[Autocorrelation Function]], [[Cross-correlation]], [[Distance Classes]]
- **Part of:** [[MOC - Autocorrelation]]

## Flashcards

What is a lag?
??
The separation in time steps or distance between two observations being compared.
++++
