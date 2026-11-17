---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "labs()"
  - "Figure labels"
status: seedling
---

# Axis Labels and Titles

**In one line:** axis labels and titles are the words on a figure that say what each axis measures, in what units, and what the colours mean.

> [!info] Before this, it helps to know
> [[ggplot2 Grammar of Graphics]] (the plot) · [[Variable]] (what the axes show)

## The everyday picture
A graph with axes labelled `ysf` and `sr` is a locked door. "Years since fire" and "Grassland bird species per route" are the key.

## Start from zero
1. **`labs(x = , y = , colour = , title = , caption = )`** sets them.
2. **Use words and units,** not column names. "Body mass (g)".
3. **Label the legend too.**
4. **State the scale if it is transformed.**
5. **Why it matters:** readers look at figures first, often only at figures. A figure should stand alone with its caption.
6. **In papers the title usually goes in the caption,** not on the plot.

## In R
```r
library(ggplot2)
p <- ggplot(mtcars, aes(wt, mpg, colour = factor(am))) + geom_point() +
  labs(x = "Weight (1,000 lb)", y = "Fuel economy (miles per gallon)", colour = "Transmission") +
  scale_colour_discrete(labels = c("automatic", "manual"))
p$labels$x; p$labels$y
```

## Common confusions
- **"Everyone knows what the variable is."** You do, today.

## Explain it back
- What three things should an axis label convey?

*Pass test:* you can relabel axes and legend with names and units.

## Connections
- **Builds on:** [[ggplot2 Grammar of Graphics]]
- **Leads to:** [[Themes]], [[Writing Results Sections]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What should an axis label contain?
??
A plain-language name of the variable and its units.
++++
