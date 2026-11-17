---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "viridis"
  - "scale_colour_"
  - "Color scales"
status: seedling
---

# Colour Scales

**In one line:** a colour scale is the rule that turns data values into colours, and a good one is readable by colour-blind viewers and in greyscale.

> [!info] Before this, it helps to know
> [[Aesthetics]] (colour mapped to a variable) · [[Categorical Variable]] and [[Continuous Data]] (which need different scales)

## The everyday picture
A map legend. Height shown as dark green to white is instantly readable because lightness rises with height. A legend using random colours would have to be looked up for every spot.

## Start from zero
1. **Mapping a variable to colour needs a scale.**
2. **Continuous variable: a gradient** that gets steadily lighter or darker.
3. **Categorical variable: clearly distinct hues,** few of them.
4. **Values around a meaningful midpoint (residuals, change): a diverging scale,** two hues meeting at a neutral centre.
5. **viridis scales are the safe default.** *Why:* lightness changes evenly, so they survive colour-blindness and black-and-white printing. Rainbow scales don't.
6. **`scale_colour_*` for points and lines, `scale_fill_*` for areas.**

## In R
```r
library(ggplot2)
p <- ggplot(faithfuld, aes(waiting, eruptions, fill = density)) + geom_raster() + scale_fill_viridis_c()
q <- ggplot(mtcars, aes(wt, mpg, colour = factor(cyl))) + geom_point() + scale_colour_viridis_d(end = 0.85)
r2 <- ggplot(mtcars, aes(wt, mpg, colour = mpg - mean(mpg))) + geom_point() + scale_colour_gradient2(midpoint = 0)
c(class(p$scales$scales[[1]])[1], class(q$scales$scales[[1]])[1])
```

## Common confusions
- **"More colours show more."** Past six or seven categories, people can't tell them apart. Facet instead.

## Explain it back
- Which kind of scale suits residuals, and why?

*Pass test:* you can choose a sequential, categorical or diverging scale for a variable.

## Connections
- **Builds on:** [[Aesthetics]]
- **Leads to:** [[Themes]], [[Bubble Plot of Residuals]]
- **Part of:** [[MOC - Reproducible Coding and Figures]]

## Flashcards

Why are viridis colour scales recommended?
??
Their lightness changes evenly, so they stay readable for colour-blind viewers and in greyscale.
++++

When is a diverging colour scale appropriate?
??
When values spread either side of a meaningful midpoint, such as residuals around zero.
++++
