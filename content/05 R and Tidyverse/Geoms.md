---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A geom is the kind of mark a ggplot layer draws: points, lines, bars, boxes, ribbons."
aliases:
  - "Geometric objects"
status: seedling
---

# Geoms

The same notes can be written with dots, a continuous line or a thick shaded band; the data and mapping say where the ink goes, and the pen decides the mark. A **geom** is the kind of mark a ggplot layer draws ([[ggplot2 Grammar of Graphics]]). Pick it by what you are showing. Raw data: `geom_point()`, or `geom_jitter()`, which nudges overlapping points. Distributions: `geom_histogram()`, `geom_density()`, `geom_boxplot()`, `geom_violin()` ([[Histogram]], [[Boxplot]]). Trends and fits: `geom_line()`, `geom_smooth()`. Uncertainty: `geom_ribbon()` for bands, `geom_errorbar()` and `geom_pointrange()` ([[Error Bars]]). Reference marks: `geom_hline()`, `geom_vline()`, `geom_abline()`. Maps: `geom_sf()`.

Each geom needs certain [[Aesthetics]]; a ribbon, for example, needs `ymin` and `ymax`. Layers can use different data, so points come from the raw data while the line and ribbon come from a prediction table ([[Plotting Model Predictions with Ribbons]]). The code below stacks a ribbon, a line, points and a dashed reference line, and lists the four layers in drawing order.

Layer order matters: later layers are drawn on top, so put ribbons first or they will hide the points.

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
