---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A colour scale is the rule that turns data values into colours, and a good one is readable by colour-blind viewers and in greyscale."
aliases:
  - "viridis"
  - "scale_colour_"
  - "Color scales"
status: seedling
---

# Colour Scales

On a map, height shown from dark green to white is instantly readable because lightness rises with height; a legend of random colours would have to be looked up for every spot. A **colour scale** is the rule that turns data values into colours, and a good one is readable by colour-blind viewers and in greyscale ([[Aesthetics]]). A continuous variable needs a gradient that gets steadily lighter or darker ([[Continuous Data]]). A categorical variable needs a few clearly distinct hues ([[Categorical Variable]]). Values around a meaningful midpoint, such as residuals or change, need a diverging scale: two hues meeting at a neutral centre.

viridis scales are the safe default because their lightness changes evenly, so they survive colour-blindness and black-and-white printing; rainbow scales do not. Use `scale_colour_*` for points and lines and `scale_fill_*` for areas. The code below makes one plot of each kind: a continuous viridis fill, a discrete viridis colour for cylinder count, and a diverging gradient centred on zero for [[Deviation|deviations]] from mean fuel economy. A diverging scale is also how a [[Bubble Plot of Residuals]] can be coloured.

More colours do not show more. Past six or seven categories people cannot tell them apart, so facet instead ([[Themes]]).

```r
library(ggplot2)
p <- ggplot(faithfuld, aes(waiting, eruptions, fill = density)) + geom_raster() + scale_fill_viridis_c()
q <- ggplot(mtcars, aes(wt, mpg, colour = factor(cyl))) + geom_point() + scale_colour_viridis_d(end = 0.85)
r2 <- ggplot(mtcars, aes(wt, mpg, colour = mpg - mean(mpg))) + geom_point() + scale_colour_gradient2(midpoint = 0)
c(class(p$scales$scales[[1]])[1], class(q$scales$scales[[1]])[1])
```

## Connections
- **Builds on:** [[Aesthetics]], [[Deviation]]
- **Leads to:** [[Themes]], [[Bubble Plot of Residuals]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

Why are viridis colour scales recommended?
??
Their lightness changes evenly, so they stay readable for colour-blind viewers and in greyscale.
++++

When is a diverging colour scale appropriate?
??
When values spread either side of a meaningful midpoint, such as residuals around zero.
++++
