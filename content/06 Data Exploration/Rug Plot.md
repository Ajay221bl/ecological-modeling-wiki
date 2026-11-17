---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "geom_rug()"
  - "Rug"
status: seedling
---

# Rug Plot

**In one line:** a rug plot draws a small tick on the axis at every observed value, showing exactly where the data are.

> [!info] Before this, it helps to know
> [[Scatterplot]] or [[Density Plot]] (the plots it is added to)

## The everyday picture
Tick marks on a ruler showing where each guest stood. A smooth curve drawn over a room looks equally confident everywhere. The ticks reveal that nobody was standing in the far corner at all.

## Start from zero
1. **One short line per observation along the axis.**
2. **Dense ticks: lots of data. Gaps: none.**
3. **Why add it to a fitted curve:** the curve is drawn across the whole range, including stretches with no observations. The rug shows where it is supported and where it is a guess.
4. **Standard on GAM plots,** where each smooth has a rug of the predictor's values.

## In R
```r
set.seed(8)
x <- c(runif(40, 0, 30), runif(5, 70, 100))        # a gap between 30 and 70
plot(density(x), main = ""); rug(x)
library(ggplot2); p <- ggplot(data.frame(x), aes(x)) + geom_density() + geom_rug()
```

## Common confusions
- **"It is decoration."** It is the honesty label on a smooth curve.

## Explain it back
- What does a gap in the rug warn you about?

*Pass test:* you can explain why GAM plots carry a rug.

## Connections
- **Builds on:** [[Density Plot]]
- **Leads to:** [[Partial Effect Plots]], [[Extrapolation]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What does a rug plot show?
??
A tick at each observed value, revealing where data are dense or absent.
++++
