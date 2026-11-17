---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "cowplot"
  - "plot_grid()"
  - "patchwork"
status: seedling
---

# Multi-panel Figures

**In one line:** a multi-panel figure arranges several separate plots side by side as one image with panel labels.

> [!info] Before this, it helps to know
> [[ggplot2 Grammar of Graphics]] (plots are objects) · [[Facets]] (the alternative when panels share a design)

## The everyday picture
A comic strip. Each frame is its own drawing. Laid out in order with letters A, B, C, they tell one story.

## Start from zero
1. **Store each plot in an object.**
2. **`cowplot::plot_grid(p1, p2, labels = c("A", "B"), ncol = 2)`** arranges them.
3. **Facets vs panels:** facets repeat one plot design across groups. Panels combine different plots, such as a histogram beside a scatterplot.
4. **Why bother:** journals limit figure counts, and related plots are easier to compare together.
5. **patchwork does the same with `p1 + p2`.**

## In R
```r
library(ggplot2); library(cowplot)
p1 <- ggplot(mtcars, aes(mpg)) + geom_histogram(bins = 10)
p2 <- ggplot(mtcars, aes(wt, mpg)) + geom_point()
both <- plot_grid(p1, p2, labels = c("A", "B"), ncol = 2)
class(both)[1]
```

## In the course
The data exploration lab combines diagnostic plots with `cowplot::plot_grid()` ([[Course Website]]).

## Common confusions
- **"Use facets for everything."** Facets need one shared plot specification.

## Explain it back
- When do you need panels instead of facets?

*Pass test:* you can combine two different plots into one labelled figure.

## Connections
- **Builds on:** [[ggplot2 Grammar of Graphics]], [[Facets]]
- **Leads to:** [[Saving Figures]], [[Facets|Multi-panel Plots]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What is the difference between facets and a multi-panel figure?
??
Facets repeat one plot design across groups. A multi-panel figure combines different plots.
++++
