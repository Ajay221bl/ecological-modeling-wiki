---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Kernel density estimate"
  - "geom_density()"
status: seedling
---

# Density Plot

**In one line:** a density plot is a smoothed histogram: a curve whose height shows where values are concentrated and whose total area is 1.

> [!info] Before this, it helps to know
> [[Histogram]] (the unsmoothed version) · [[Probability Density Function]] (the idea of area as probability)

## The everyday picture
Pouring a small heap of sand on the table at each data point. Where points crowd, the heaps pile into a hill. Where they are sparse, the surface stays low. The outline of the sand is the density curve.

## Start from zero
1. **Place a small bump (kernel) on every observation.**
2. **Add the bumps up.**
3. **Scale so the area is 1.**
4. **The bump width (bandwidth) plays the role of bin width.** Wide gives a smooth blur, narrow gives a spiky curve.
5. **Why use it instead of a histogram:** several groups can be overlaid and compared, and there are no arbitrary bin edges.
6. **Beware the edges.** The curve can spill below zero for data that can't be negative.

## See it
![[Density vs histogram.png|700]]
*What to look at:* the curve follows the bars, without depending on where the bins start.

## In R
```r
set.seed(5)
mass <- c(rnorm(60, 18, 1.5), rnorm(40, 24, 1.5))
d <- density(mass); plot(d, main = "")
integrate(approxfun(d), min(d$x), max(d$x))$value      # area close to 1
plot(density(mass, adjust = 3)); plot(density(mass, adjust = 0.2))   # too smooth, too wiggly
```

## Common confusions
- **"The y-axis is a count or a probability."** It is density. Only areas are probabilities.
- **"The curve shows real data below zero."** That is smoothing leaking over a boundary.

## Explain it back
- What plays the role of bin width in a density plot?

*Pass test:* you can explain a density curve as summed bumps and name its tuning choice.

## Connections
- **Builds on:** [[Histogram]]
- **Leads to:** [[Violin Plot]], [[Probability Density Function]], [[Posterior Distribution]]
- **Part of:** [[MOC - Data Exploration]]

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
