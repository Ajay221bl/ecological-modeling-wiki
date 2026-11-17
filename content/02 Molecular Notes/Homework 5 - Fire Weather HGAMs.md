---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - gam
aliases:
  - "Homework 5"
  - "HW5"
  - "Fire weather homework"
  - "HGAM homework"
  - "FireWeather.csv"
status: seedling
---

# Homework 5 - Fire Weather HGAMs

> [!summary] In plain words
> Homework 5 asks how daily minimum humidity and maximum wind change over years, through the season and across the Great Plains, and the approach is to clean the weather data, pick a distribution for each variable, choose an HGAM structure from Pedersen et al. (2019) for smooths shared or differing by vegetation type and station, then check and explain the fits.

## The question
How do I approach Homework 5, from raw weather data to an HGAM I can defend?

## Built from
- [[Prescribed Fire]], [[Relative Humidity]], [[Woody Encroachment]]: why the question matters.
- [[Beta Regression]], [[Gamma Distribution]], [[Tweedie Distribution]]: distributions for the two responses.
- [[Hierarchical GAM]], [[Global Smoother]], [[Factor-smooth Interaction]], [[Choosing an HGAM Model Type]]: the hierarchy.
- [[Cyclic Spline]], [[Tensor Product Smooth]], [[Spatial Smooths]]: smooths over season, year and space.
- [[Basis Dimension and gam.check()]], [[Concurvity]]: diagnostics.
- [[GAM Workflow in R]]: the overall recipe.

## The reasoning, step by step
1. **Wrangle and clean.** 104,712 station-days from 71 stations in 7 vegetation types, 2010 to 2019, days 121 to 273. Check the extremes: wind maxima of 148 and 198 mph are not plausible daily values for these stations and look like sensor errors; RH has 137 values of exactly 100% and one of 0%. Decide and document what you drop or adjust ([[Outlier]]).
2. **Explore.** Plot each variable against day of year and against year, by vegetation type, and map stations by latitude. Expect RH to fall through summer and wind to be highest in spring in the south.
3. **Pick the RH distribution.** Minimum RH is a continuous percentage: divide by 100 and use `betar()` in mgcv, squeezing exact 0s and 1s just inside the interval first ([[Relative Humidity]], [[Beta Regression]]).
4. **Pick the wind distribution.** Wind is positive, continuous and right-skewed, so Gamma with a log link fits, but Gamma cannot take the 90 exact zeros: use `tw()` (Tweedie), which allows zeros, or justify a small offset ([[Gamma Distribution]], [[Tweedie Distribution]]).
5. **Choose the hierarchy.** Does every vegetation type share one seasonal curve with small deviations (model GS: a global smooth plus `s(Day, Veg_Type, bs = "fs")`), or does each have its own (model GI or I)? Station is a further level; a random intercept `s(Station_ID, bs = "re")` is the simplest way to let stations differ ([[Choosing an HGAM Model Type]]).
6. **Add time and space.** Year as a smooth or a factor for between-year change, day of year for the season, and either latitude as a smooth or a spatial smooth of longitude and latitude; `te(Day, Lat)` lets the seasonal curve change with latitude ([[Tensor Product Smooth]]).
7. **Fit efficiently.** With about 100,000 rows use `bam(..., method = "fREML", discrete = TRUE)`; compare a few structures with AIC as Pedersen et al. do.
8. **Check.** `gam.check()` for k and residuals, `concurvity()`, and residuals over time for autocorrelation, since consecutive days at a station are not independent ([[Temporal Autocorrelation]]).
9. **Explain in words.** One or two paragraphs on the approach and one or two on how each variable changes over years, season and latitude, with figures of the smooths.

## So in practice
Let the question choose the hierarchy: "do patterns differ across vegetation types?" is a GS versus G comparison, and "how much do individual stations differ?" is a random effect, so write the question first, then the formula.

## In R
```r
library(readr); library(dplyr)
w <- read_csv("https://raw.githubusercontent.com/LivingLandscapes/Course_EcologicalModeling/master/data/FireWeather.csv", show_col_types = FALSE)
c(rows = nrow(w), stations = n_distinct(w$Station_ID), veg_types = n_distinct(w$Veg_Type))
sort(w$Wind_mph_max, decreasing = TRUE)[1:4]                         # implausible maxima to check
c(RH_zero = sum(w$RH_per_min == 0, na.rm = TRUE), RH_100 = sum(w$RH_per_min == 100, na.rm = TRUE),
  wind_zero = sum(w$Wind_mph_max == 0, na.rm = TRUE), NAs = sum(is.na(w$RH_per_min) | is.na(w$Wind_mph_max)))
```

## What would go wrong otherwise
Using a Gaussian GAM on raw RH and wind, so fitted values fall below 0 or above 100%, the wind fit is dragged by a 198 mph sensor error, and the residuals fan out with the mean.

## Explain it back
- Why do the two weather variables need different distributions?
- What is the difference between a GS and a GI model in this homework's terms?

*Pass test:* you can write and defend an HGAM formula for each weather variable and say what each smooth represents.

## Connections
- **Related:** [[HGAM vs GLMM with Random Slopes]], [[GAM Workflow in R]], [[Homework 4 - Thistle Seedlings and Enemy Release]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 15 - GAMs|MOC - GAMs]], [[MOC 22 - Homework|MOC - Homework]]

## Flashcards

Which distribution suits daily minimum RH in an HGAM?
??
Beta (mgcv betar()) on RH/100, after nudging exact 0 and 1 inside.
++++

Why not a Gamma for maximum wind in this dataset?
??
There are 90 exact zeros, which a Gamma cannot take; a Tweedie (tw()) can.
++++

How would you let each vegetation type have its own wiggle around a shared seasonal curve?
??
A global smooth s(Day) plus s(Day, Veg_Type, bs = "fs"), Pedersen's model GS.
++++
