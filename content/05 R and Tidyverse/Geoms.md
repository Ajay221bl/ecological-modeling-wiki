---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Geometric objects"
status: seedling
---

# Geoms

**In one line:** a geom is the kind of mark a ggplot layer draws: points, lines, bars, boxes, ribbons.

> [!info] Before this, it helps to know
> [[ggplot2 Grammar of Graphics]] (layers) · [[Aesthetics]] (what each geom needs)

## The everyday picture
Different pens for the same notes. The data and mapping say where the ink goes. The geom is whether you use dots, a continuous line, or a thick shaded band.

## Start from zero
1. **Pick by what you are showing.**
2. **Raw data:** `geom_point()`, `geom_jitter()` (nudges overlapping points).
3. **Distributions:** `geom_histogram()`, `geom_density()`, `geom_boxplot()`, `geom_violin()`.
4. **Trends and fits:** `geom_line()`, `geom_smooth()`.
5. **Uncertainty:** `geom_ribbon()` (bands), `geom_errorbar()`, `geom_pointrange()`.
6. **Reference marks:** `geom_hline()`, `geom_vline()`, `geom_abline()`.
7. **Maps:** `geom_sf()`.
8. **Each geom needs certain aesthetics.** A ribbon needs `ymin` and `ymax`. *Why layers can use different data:* points come from the raw data, the line and ribbon from a prediction table.

## In R
```r
library(ggplot2)
d <- data.frame(x = c(1, 2, 3, 4), y = c(2, 4, 5, 7), lo = c(1, 3, 4, 5.5), hi = c(3, 5, 6, 8.5))
p <- ggplot(d, aes(x, y)) +
  geom_ribbon(aes(ymin = lo, ymax = hi), alpha = 0.2) +   # band first, so it sits underneath
  geom_line() +
  geom_point(size = 3) +
  geom_hline(yintercept = 0, linetype = 2)
sapply(p$layers, function(l) class(l$geom)[1])            # the four layers in drawing order
```

## Common confusions
- **"Layer order doesn't matter."** Later layers are drawn on top. Put ribbons first.

## Explain it back
- Which geom draws a confidence band, and which aesthetics does it need?

*Pass test:* you can choose a geom for raw data, a fitted trend and its uncertainty.

## Connections
- **Builds on:** [[ggplot2 Grammar of Graphics]], [[Aesthetics]]
- **Leads to:** [[Plotting Model Predictions with Ribbons]], [[Error Bars]], [[Boxplot]], [[Histogram]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What is a geom?
??
The type of mark a ggplot layer draws, such as points, lines, bars or ribbons.
++++

Which geom draws an uncertainty band?
??
geom_ribbon(), which needs ymin and ymax.
++++
