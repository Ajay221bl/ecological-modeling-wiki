---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "theme()"
  - "theme_bw()"
  - "Plot appearance"
status: seedling
---

# Themes

**In one line:** a theme controls everything about a plot's look that isn't data: background, gridlines, fonts, legend position.

> [!info] Before this, it helps to know
> [[ggplot2 Grammar of Graphics]] (the plot being styled)

## The everyday picture
The frame and matting around a painting. They don't change the picture, but they decide whether it looks finished.

## Start from zero
1. **Complete themes change it all at once:** `theme_bw()`, `theme_classic()`, `theme_minimal()`.
2. **`base_size` scales every font.** Default text is usually too small for print.
3. **`theme()` adjusts single elements:** `legend.position = "bottom"`, `panel.grid.minor = element_blank()`.
4. **`theme_set()` applies one theme to every plot in the script.** *Why:* figures in a paper should match.
5. **The principle:** remove ink that doesn't show data.

## In R
```r
library(ggplot2)
theme_set(theme_bw(base_size = 14))                       # once, near the top of a script
p <- ggplot(mtcars, aes(wt, mpg, colour = factor(cyl))) + geom_point() +
  theme(legend.position = "bottom", panel.grid.minor = element_blank())
p$theme$legend.position
```

## Common confusions
- **"theme() goes before the complete theme."** A complete theme added afterwards overwrites your tweaks.

## Explain it back
- Why set a theme once for the whole script?

*Pass test:* you can apply a clean theme and move the legend.

## Connections
- **Builds on:** [[ggplot2 Grammar of Graphics]]
- **Leads to:** [[Axis Labels and Titles]], [[Saving Figures]], [[Multi-panel Figures]]
- **Part of:** [[MOC - Reproducible Coding and Figures]]

## Flashcards

What does a ggplot theme control?
??
Non-data appearance: background, gridlines, fonts and legend placement.
++++
