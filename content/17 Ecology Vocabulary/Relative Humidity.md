---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
description: "Relative humidity is how much water vapour the air holds as a percentage of the most it could hold at that temperature, so it is bounded between 0 and 100 and drops in the afternoon as air warms."
aliases:
  - "RH"
  - "Minimum relative humidity"
  - "RH_per_min"
  - "Humidity"
status: seedling
---

# Relative Humidity

A sponge can soak up only so much water before it drips. Air is the same: at each temperature it can hold a maximum amount of water vapour, and warm air can hold more than cold air. **Relative humidity** (RH) is how much water vapour the air holds as a percentage of that maximum. At 100% the air is saturated and dew or fog forms; at 15% it is very dry. Because the maximum rises with temperature, RH falls in the afternoon even when no water leaves the air, which is why daily *minimum* RH usually happens in the hottest hours.

Fire managers care about minimum RH because dry air dries the dead grass and twigs that carry fire. Below roughly 20 to 25% fires can spread too fast to control; well above 40 to 50% grass may not burn well enough to kill woody plants ([[Prescribed Fire]]). Homework 5's RH_per_min column is the daily minimum RH at weather stations across the Great Plains.

For a model, RH is a percentage bounded between 0 and 100, so a Normal distribution can predict impossible values near the edges. Divide by 100 to get a proportion strictly between 0 and 1 and a [[Beta Regression]] respects the bounds ([[Beta Distribution]], [[Why the response type decides the distribution]]). It is a measured continuous percentage, not a count of successes out of trials, so a binomial model does not fit it.

```r
rh <- c(12.4, 25, 47.9, 88, 99.5)
y <- rh / 100                                   # proportion for a beta model
n <- length(y); y_sq <- (y * (n - 1) + 0.5) / n  # squeeze away from exact 0 or 1 (Smithson and Verkuilen 2006)
round(rbind(rh, y, y_sq), 3)
```

## Connections
- **Builds on:** [[Proportion]], [[Beta Distribution]]
- **Leads to:** [[Beta Regression]], [[Prescribed Fire]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]], molecular note [[Homework 5 - Fire Weather HGAMs]]

## Flashcards

What is relative humidity?
??
The water vapour in the air as a percentage of the most it could hold at that temperature.
++++

Why does RH drop in the afternoon?
??
Warmer air can hold more water vapour, so the same vapour is a smaller percentage of the maximum.
++++

Which distribution suits a minimum RH response and why?
??
A beta distribution on RH/100, because RH is a continuous percentage bounded by 0 and 100.
++++
