---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "bs = \"cc\""
  - "Cyclic cubic spline"
  - "Cyclic smooth"
  - "Cyclic Splines"
status: seedling
---

# Cyclic Spline

**In one line:** a cyclic spline forces the smooth to have the same value and slope at both ends of its range, for predictors that wrap around such as day of year, hour or compass direction.

> [!info] Before this, it helps to know
> [[Spline]] · [[Dates in R|Dates and Julian Day in R]]

## Start from zero
1. **31 December and 1 January are neighbours.** An ordinary smooth treats them as far apart.
2. **`s(doy, bs = "cc", k = 12)`** with knots set to the full cycle: `knots = list(doy = c(0.5, 366.5))`.
3. **Without explicit knots,** the cycle closes at the minimum and maximum observed values, which may not be the true cycle ends.
4. **Common in phenology, seasonal abundance and diel activity.**
5. **In tensor products:** `te(week, latitude, bs = c("cc", "tp"))` (Pedersen et al.).

## In R
```r
library(mgcv); set.seed(19); d <- data.frame(doy = sample(1:365, 300, TRUE)); d$y <- sin(2 * pi * d$doy / 365) + rnorm(300, 0, 0.3)
m <- gam(y ~ s(doy, bs = "cc", k = 10), data = d, knots = list(doy = c(0.5, 365.5)), method = "REML"); round(predict(m, data.frame(doy = c(0.5, 365.5))), 3)      # equal at the ends
```

## In the course
[[Pedersen et al. 2019]].

## Common confusions
- **"Day of year is fine as an ordinary smooth."** Unless you predict across New Year.

## Explain it back
- Why set knots for a cyclic smooth?

*Pass test:* you can fit a cyclic seasonal effect.

## Connections
- **Builds on:** [[Spline]], [[Dates in R|Dates and Julian Day in R]]
- **Leads to:** [[Tensor Product Smooth]], [[Phenology]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

What does a cyclic spline enforce?
??
The same value and slope at both ends of the range.
++++
