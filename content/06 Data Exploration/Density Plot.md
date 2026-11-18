---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A density plot is a smoothed histogram: a curve whose height shows where values are concentrated and whose total area is 1."
aliases:
  - "Kernel density estimate"
  - "geom_density()"
status: seedling
---

# Density Plot

Pour a small heap of sand on the table at each data point. Where points crowd, the heaps pile into a hill; where they are sparse, the surface stays low. The outline of the sand is a **density plot**: a smoothed [[Histogram]], a curve whose height shows where values are concentrated and whose total area is 1. Technically it is a *kernel density estimate*: place a small bump, the kernel, on every observation, add the bumps up, and scale so the area under the curve is 1, just like a [[Probability Density Function]].

The width of each bump, the *bandwidth*, plays the role of bin width. Wide bumps give a smooth blur; narrow bumps give a spiky curve. In the code below, the default bandwidth shows the two peaks of a two-group [[Mixture Distribution|mixture]] of body masses; `adjust = 3` smooths them away, and `adjust = 0.2` makes the curve wiggle with noise. The area check confirms the curve integrates to about 1.

Density plots have two advantages over histograms: there are no arbitrary bin edges, and several groups can be overlaid on one axis and compared. Mirrored and set upright, one per group, they make a [[Violin Plot]], and the same kind of curve is used to show a [[Posterior Distribution]]. Two cautions. The vertical axis is density, not a count or a probability; only areas under the curve are probabilities. And the curve can spill below zero for data that cannot be negative, which is smoothing leaking over a boundary, not real data.

![[Density vs histogram.png|700]]
*What to look at:* the curve follows the bars, without depending on where the bins start.

```r
set.seed(5)
mass <- c(rnorm(60, 18, 1.5), rnorm(40, 24, 1.5))
d <- density(mass); plot(d, main = "")
integrate(approxfun(d), min(d$x), max(d$x))$value      # area close to 1
plot(density(mass, adjust = 3)); plot(density(mass, adjust = 0.2))   # too smooth, too wiggly
```

## Connections
- **Builds on:** [[Histogram]]
- **Leads to:** [[Violin Plot]], [[Probability Density Function]], [[Posterior Distribution]], [[Mixture Distribution]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What is a density plot?
??
A smoothed histogram: a curve with total area 1 showing where values concentrate.
![[Density vs histogram.png]]
++++

What does the bandwidth control?
??
How smooth the curve is, the equivalent of a histogram's bin width.
++++
