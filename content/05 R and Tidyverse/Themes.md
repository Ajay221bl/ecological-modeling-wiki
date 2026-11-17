---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A theme controls everything about a plot's look that isn't data: background, gridlines, fonts, legend position."
aliases:
  - "theme()"
  - "theme_bw()"
  - "Plot appearance"
status: seedling
---

# Themes

The frame and matting around a painting do not change the picture, but they decide whether it looks finished. A **theme** controls everything about a plot's look that is not data: background, gridlines, fonts and legend position ([[ggplot2 Grammar of Graphics]]). Complete themes change it all at once: `theme_bw()`, `theme_classic()`, `theme_minimal()`. Their `base_size` argument scales every font, and default text is usually too small for print. `theme()` adjusts single elements, such as `legend.position = "bottom"` or `panel.grid.minor = element_blank()`.

`theme_set()` applies one theme to every plot in the script, so figures in a paper match; the code below sets `theme_bw(base_size = 14)` once and then moves one plot's legend to the bottom and removes its minor gridlines. The guiding principle is to remove ink that does not show data ([[Axis Labels and Titles]]).

Order matters: a complete theme added after `theme()` overwrites your tweaks, so put `theme()` last. Font sizes also depend on the size at which the figure is saved ([[Saving Figures]], [[Multi-panel Figures]]).

```r
library(ggplot2)
theme_set(theme_bw(base_size = 14))                       # once, near the top of a script
p <- ggplot(mtcars, aes(wt, mpg, colour = factor(cyl))) + geom_point() +
  theme(legend.position = "bottom", panel.grid.minor = element_blank())
p$theme$legend.position
```

## Connections
- **Builds on:** [[ggplot2 Grammar of Graphics]]
- **Leads to:** [[Axis Labels and Titles]], [[Saving Figures]], [[Multi-panel Figures]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What does a ggplot theme control?
??
Non-data appearance: background, gridlines, fonts and legend placement.
++++
