---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A multi-panel figure arranges several separate plots side by side as one image with panel labels."
aliases:
  - "cowplot"
  - "plot_grid()"
  - "patchwork"
status: seedling
---

# Multi-panel Figures

A comic strip lays out separate drawings in order, labelled, to tell one story. A **multi-panel figure** arranges several separate plots side by side as one image with panel labels ([[ggplot2 Grammar of Graphics]]). Store each plot in an object, then call `cowplot::plot_grid(p1, p2, labels = c("A", "B"), ncol = 2)`; patchwork does the same with `p1 + p2`. The code below combines a histogram of fuel economy with a scatterplot of fuel economy against weight.

It differs from [[Facets]]: facets repeat one plot design across groups, while panels combine different plots, such as a histogram beside a scatterplot. You cannot use facets for everything, because facets need one shared plot specification ([[Facets|Multi-panel Plots]]).

It is worth the effort because journals limit figure counts and related plots are easier to compare together. The data exploration lab combines diagnostic plots this way ([[Course Website]]), and the combined figure is saved like any other ([[Saving Figures]]).

```r
library(ggplot2); library(cowplot)
p1 <- ggplot(mtcars, aes(mpg)) + geom_histogram(bins = 10)
p2 <- ggplot(mtcars, aes(wt, mpg)) + geom_point()
both <- plot_grid(p1, p2, labels = c("A", "B"), ncol = 2)
class(both)[1]
```

## Connections
- **Builds on:** [[ggplot2 Grammar of Graphics]], [[Facets]]
- **Leads to:** [[Saving Figures]], [[Facets|Multi-panel Plots]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What is the difference between facets and a multi-panel figure?
??
Facets repeat one plot design across groups. A multi-panel figure combines different plots.
++++
