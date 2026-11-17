---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A rug plot draws a small tick on the axis at every observed value, showing exactly where the data are."
aliases:
  - "geom_rug()"
  - "Rug"
status: seedling
---

# Rug Plot

Tick marks on a ruler showing where each guest stood reveal what a smooth outline of the crowd hides: that nobody was standing in the far corner at all. A **rug plot** draws a short tick on the axis at every observed value, showing exactly where the data are. Dense ticks mean lots of data; gaps mean none. It is added to other plots, usually a [[Density Plot]] or a fitted curve.

Its job is honesty. A density curve or a fitted model curve is drawn smoothly across the whole range, looking equally confident everywhere, including stretches with no observations at all. In the code below, the data have a gap between 30 and 70; the density curve passes smoothly over it, and only the rug shows that the curve there is a guess. On a fitted curve, the stretch over a gap is interpolation, and beyond the last tick it is [[Extrapolation]].

This is why every smooth in a GAM plot comes with a rug of the predictor's values ([[Partial Effect Plots]]). A rug is not decoration: it is the label that tells a reader where a curve is supported by data.

```r
set.seed(8)
x <- c(runif(40, 0, 30), runif(5, 70, 100))        # a gap between 30 and 70
plot(density(x), main = ""); rug(x)
library(ggplot2); p <- ggplot(data.frame(x), aes(x)) + geom_density() + geom_rug()
```

## Connections
- **Builds on:** [[Density Plot]]
- **Leads to:** [[Partial Effect Plots]], [[Extrapolation]]
- **See also:** [[Scatterplot]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What does a rug plot show?
??
A tick at each observed value, revealing where data are dense or absent.
++++
