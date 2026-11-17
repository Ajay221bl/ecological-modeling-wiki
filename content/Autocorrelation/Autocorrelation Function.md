---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "ACF"
  - "acf()"
  - "ACF plot"
  - "Autocorrelation Function (ACF)"
  - "Auto-correlation function"
status: seedling
---

# Autocorrelation Function

**In one line:** the autocorrelation function gives the correlation between a series and itself shifted by each lag, and its plot is the standard first check for temporal autocorrelation.

> [!info] Before this, it helps to know
> [[Lag]] (the x-axis) · [[Correlation]] (the y-axis) · [[Time Series]] (the input)

## The everyday picture
Slide a transparent copy of a wiggly line one step to the right and ask how well it lines up with the original. Then two steps, three steps. The ACF plots how good the match is at each slide.

## Start from zero
1. **`acf(x)`** plots correlation (y) against lag (x).
2. **Lag 0 is always 1.**
3. **Dashed blue lines at about ±1.96/√n:** bars beyond them are larger than expected for an independent series.
4. **Use it on residuals,** in time order, with no gaps. Gaps need care (the lab converts dates to day of year).
5. **Slow decay** suggests AR-type dependence or an unmodelled trend. A spike at lag 12 in monthly data suggests seasonality.
6. **With n = 100, about 1 in 20 bars crosses the band by chance.** Don't chase single small crossings.

## See it
![[ACF plot.png|700]]
*What to look at:* bars fall roughly as 0.7 to the power of the lag and cross into the band after a few lags.

## In R
```r
set.seed(6); e <- as.numeric(arima.sim(list(ar = 0.7), n = 200)); a <- acf(e, lag.max = 5, plot = FALSE)
round(rbind(acf = a$acf[1:6], theory = 0.7^(0:5)), 2); round(1.96 / sqrt(200), 2)       # the band
```

## In the course
`acf()` in the autocorrelation lab, reading the lag axis, the blue dashed significance band and the correlation axis ([[Course Website]]). [[Zuur et al. 2009 Ch6]].

## Common confusions
- **"Use the ACF on raw data."** Use it on model residuals to check the model.
- **"Every bar outside the band is meaningful."** Expect some by chance.

## Explain it back
- What do the dashed lines on an ACF plot show?

*Pass test:* you can read an ACF plot.

## Connections
- **Builds on:** [[Lag]], [[Correlation]], [[Time Series]]
- **Leads to:** [[Partial Autocorrelation Function]], [[Cross-correlation]], [[AR(1) Error Structure]]
- **Part of:** [[MOC - Autocorrelation]], molecular note [[ACF vs PACF]]

## Flashcards

What does an ACF plot show?
??
The correlation of a series with itself at each lag, with dashed bounds for what an independent series would show.
![[ACF plot.png]]
++++

What are the approximate bounds on an ACF plot?
??
±1.96/√n.
++++
