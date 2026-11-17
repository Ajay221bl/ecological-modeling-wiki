---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "A process is stationary when its mean, variance and correlation structure stay the same across space or time, so the correlation between two points depends only on how far apart they are."
aliases:
  - "Stationary process"
  - "Second-order stationarity"
  - "Non-stationarity"
status: seedling
---

# Stationarity

A river that looks the same whichever stretch you sample, with the same average depth and the same choppiness, is stationary; one that gets deeper downstream is not. A process is **stationary** when its [[Mean]], [[Variance]] and correlation structure stay the same across space or time, so the correlation between two points depends only on how far apart they are, not on where they are ([[Autocorrelation]]). That means a constant mean with no trend, a constant variance with no fanning out, and correlation that depends only on separation.

Correlograms, variograms, ACFs and correlation structures all assume it, which is what lets them describe correlation as a single function of distance or lag ([[Variogram]], [[Autocorrelation Function]]). In the code below a series with a trend has a mean of 2.6 in its first half and 7.5 in its second, while a stationary series has means of −0.04 and −0.08.

Fix non-stationarity in the mean by modelling the trend with covariates or a smooth, then check the residuals; changing variance can be handled with [[Variance Structures]] such as `varIdent` and `varPower` in nlme. The [[Dynamic Ecology Autocorrelation Post]] names stationarity and [[Isotropy]] as the assumptions that make correlation a function of distance only ([[Zuur et al. 2009 Ch6]]). Stationary does not mean nothing changes: values vary, but their statistical properties don't.

```r
set.seed(4); t <- 1:200; trend <- 0.05 * t + rnorm(200); ok <- rnorm(200)
round(c(trend_first_half = mean(trend[1:100]), trend_second_half = mean(trend[101:200]), stationary_first = mean(ok[1:100]), stationary_second = mean(ok[101:200])), 2)
```

## Connections
- **Builds on:** [[Autocorrelation]], [[Variance]], [[Mean]]
- **Leads to:** [[Isotropy]], [[Variogram]], [[Autocorrelation Function]], [[Variance Structures]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What is a stationary process?
??
One whose mean, variance and correlation structure are constant, so correlation depends only on separation.
++++
