---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Stationary process"
  - "Second-order stationarity"
  - "Non-stationarity"
status: seedling
---

# Stationarity

**In one line:** a process is stationary when its mean, variance and correlation structure stay the same across space or time, so the correlation between two points depends only on how far apart they are.

> [!info] Before this, it helps to know
> [[Autocorrelation]] (what stationarity simplifies) · [[Variance]] · [[Mean]]

## The everyday picture
A river that looks the same whichever stretch you sample: same average depth, same choppiness. A river that gets deeper downstream is not stationary.

## Start from zero
1. **Constant mean:** no trend.
2. **Constant variance:** no fanning out.
3. **Correlation depends only on separation,** not on where you are.
4. **Correlograms, variograms, ACFs and correlation structures assume it.** That is what lets them describe correlation as a single function of distance or lag.
5. **Fix non-stationarity in the mean by modelling the trend** (covariates, a smooth). Then check stationarity of the residuals.
6. **Variance changes** can be handled with variance structures (`varIdent`, `varPower` in nlme).

## In R
```r
set.seed(4); t <- 1:200; trend <- 0.05 * t + rnorm(200); ok <- rnorm(200)
round(c(trend_first_half = mean(trend[1:100]), trend_second_half = mean(trend[101:200]), stationary_first = mean(ok[1:100]), stationary_second = mean(ok[101:200])), 2)
```

## In the course
[[Dynamic Ecology Autocorrelation Post]] names stationarity and isotropy as the assumptions that make correlation a function of distance only. [[Zuur et al. 2009 Ch6]].

## Common confusions
- **"Stationary means nothing changes."** Values vary; their statistical properties don't.

## Explain it back
- What three things must stay constant?

*Pass test:* you can say why variograms need stationarity.

## Connections
- **Builds on:** [[Autocorrelation]], [[Variance]], [[Mean]]
- **Leads to:** [[Isotropy]], [[Variogram]], [[Autocorrelation Function]], [[Variance Structures]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What is a stationary process?
??
One whose mean, variance and correlation structure are constant, so correlation depends only on separation.
++++
