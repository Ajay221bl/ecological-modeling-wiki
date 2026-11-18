---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A cyclic spline forces the smooth to have the same value and slope at both ends of its range, for predictors that wrap around such as day of year, hour or compass direction."
aliases:
  - "bs = \"cc\""
  - "Cyclic cubic spline"
  - "Cyclic smooth"
  - "Cyclic Splines"
status: seedling
---

# Cyclic Spline

31 December and 1 January are neighbours, but an ordinary smooth treats them as far apart. A **cyclic spline** forces the smooth to have the same value and slope at both ends of its range, for [[Predictor Variable|predictors]] that wrap around such as day of year, hour or compass direction ([[Spline]], [[Dates in R|Dates and Julian Day in R]]). In mgcv it is `s(doy, bs = "cc", k = 12)` with knots set to the full cycle, `knots = list(doy = c(0.5, 366.5))` ([[Knots]]).

Without explicit knots the cycle closes at the [[Range|minimum and maximum]] observed values, which may not be the true ends of the cycle. Cyclic splines are common in phenology, seasonal abundance and diel activity, and they combine with others in tensor products, as in `te(week, latitude, bs = c("cc", "tp"))` ([[Tensor Product Smooth]]). In the code below a seasonal smooth with the cycle set from 0.5 to 365.5 predicts exactly the same value, −0.04, at both ends.

Pedersen et al. use it for week of year ([[Pedersen et al. 2019]]). Day of year is fine as an ordinary smooth only if you never predict across New Year.

```r
library(mgcv); set.seed(19); d <- data.frame(doy = sample(1:365, 300, TRUE)); d$y <- sin(2 * pi * d$doy / 365) + rnorm(300, 0, 0.3)
m <- gam(y ~ s(doy, bs = "cc", k = 10), data = d, knots = list(doy = c(0.5, 365.5)), method = "REML"); round(predict(m, data.frame(doy = c(0.5, 365.5))), 3)      # equal at the ends
```

## Connections
- **Builds on:** [[Spline]], [[Dates in R|Dates and Julian Day in R]], [[Predictor Variable]], [[Range]]
- **Leads to:** [[Tensor Product Smooth]], [[Phenology]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What does a cyclic spline enforce?
??
The same value and slope at both ends of the range.
++++
