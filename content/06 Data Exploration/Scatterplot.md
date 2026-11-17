---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A scatterplot shows two numeric variables at once by drawing one dot per observation, placed by its value on each axis."
aliases:
  - "Scatter plot"
  - "XY plot"
  - "geom_point()"
status: seedling
---

# Scatterplot

On a star map each star is located by two coordinates, and patterns in the sky, a band, a cluster, a lone star, stand out. A **scatterplot** shows two numeric variables at once in the same way, with one dot per observation placed by its value on each axis. By convention the [[Explanatory Variable]] goes on the horizontal axis and the [[Response Variable]] on the vertical one.

There are four things to read. Direction: rising, falling or flat. Form: straight, curved, humped or stepped. Spread: even along x, or fanning out? And oddities: isolated points, clusters, gaps. In the code below, bird richness falls with tree cover, and a smoother added with `lowess()` guides the eye along the trend ([[LOESS Smoother]]). Overlapping dots, common with counts, hide how many points there are, so use transparency or a little jitter.

Always plot before calculating a [[Correlation]], because a correlation coefficient gives one number, and very different pictures share the same number. Anscombe's famous quartet, in the last line of the code, is four datasets that all have a correlation of 0.82, yet one is a straight line, one a curve, one a line with an outlier and one a vertical stack with a single distant point; the figure makes the same point. A scatterplot of the response against each predictor is protocol step 6 ([[Relationships Between Y and X]]), and a grid of them is a [[Pairplot]]. No visible pattern does not prove no relationship, because another variable may be masking it, and a straight-line pattern is what [[Linear Regression]] summarises.

![[Correlation panels.png|700]]
*What to look at:* similar correlation values can come from very different patterns.

```r
set.seed(9)
tree <- runif(60, 0, 60); rich <- rpois(60, exp(2.3 - 0.025 * tree))
plot(tree, rich, xlab = "Tree cover (%)", ylab = "Bird species")
lines(lowess(tree, rich), col = 2)               # add a smoother to guide the eye
cor(tree, rich)
# same correlation, different stories: Anscombe's quartet
sapply(1:4, function(i) round(cor(anscombe[[paste0("x", i)]], anscombe[[paste0("y", i)]]), 2))
```
All four Anscombe datasets have correlation 0.82. Plot them to see four different shapes.

## Connections
- **Builds on:** [[Response Variable]], [[Explanatory Variable]]
- **Leads to:** [[Pairplot]], [[LOESS Smoother]], [[Linear Regression]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What does a scatterplot show?
??
The relationship between two numeric variables, one dot per observation.
![[Correlation panels.png]]
++++

Why plot before computing a correlation?
??
Very different patterns, including curves and outliers, can give the same correlation coefficient.
++++
