---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Axis labels and titles are the words on a figure that say what each axis measures, in what units, and what the colours mean."
aliases:
  - "labs()"
  - "Figure labels"
status: seedling
---

# Axis Labels and Titles

A graph with axes labelled `ysf` and `sr` is a locked door; "Years since fire" and "Grassland bird species per route" are the key. **Axis labels and titles** are the words on a figure that say what each axis measures, in what units, and what the colours mean ([[ggplot2 Grammar of Graphics]], [[Variable]]). In ggplot2, `labs(x = , y = , colour = , title = , caption = )` sets them. Use words and units, not column names, as in "Body mass (g)"; label the legend too; and state the scale if it is transformed.

The code below relabels the `mtcars` axes as "Weight (1,000 lb)" and "Fuel economy (miles per gallon)", names the legend "Transmission", and replaces its 0 and 1 with "automatic" and "manual".

It matters because readers look at figures first, often only at figures, so a figure should stand alone with its caption ([[Writing Results Sections]]). In papers, the title usually goes in the caption rather than on the plot ([[Themes]]). "Everyone knows what the variable is" is true for you, today.

```r
library(ggplot2)
p <- ggplot(mtcars, aes(wt, mpg, colour = factor(am))) + geom_point() +
  labs(x = "Weight (1,000 lb)", y = "Fuel economy (miles per gallon)", colour = "Transmission") +
  scale_colour_discrete(labels = c("automatic", "manual"))
p$labels$x; p$labels$y
```

## Connections
- **Builds on:** [[ggplot2 Grammar of Graphics]]
- **Leads to:** [[Themes]], [[Writing Results Sections]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What should an axis label contain?
??
A plain-language name of the variable and its units.
++++
