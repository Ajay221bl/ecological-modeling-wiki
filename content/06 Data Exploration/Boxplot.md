---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A boxplot summarises a variable with a box from the first to third quartile, a line at the median, whiskers to the most extreme ordinary values and dots for points beyond."
aliases:
  - "Box-and-whisker plot"
  - "geom_boxplot()"
status: seedling
---

# Boxplot

Summarise the heights of a crowd in five lines: the shortest ordinary person, the quarter mark, the middle person, the three-quarter mark and the tallest ordinary person, with anyone unusually short or tall drawn separately. A **boxplot**, or box-and-whisker plot, does this for a variable. The box runs from the first to the third quartile, so it holds the middle half of the data and its length is the [[Interquartile Range]] ([[Quantile]]). The line inside the box is the [[Median]]. The whiskers reach out to the furthest points within 1.5 × IQR of the box, and dots mark the points beyond them.

The real strength is comparing groups. Side-by-side boxes, as in the code below for bird [[Species Richness|richness]] on burned and unburned plots, show differences in both centre and spread across [[Factors in R|levels of a factor]] at a glance, which makes them the standard tool for protocol steps 1 (outliers) and 2 (equal spread, [[Homogeneity of Variance]]). The shape can be read too: a median off-centre in the box and one long whisker mean skew. `tapply(d$rich, d$burn, quantile)` prints the numbers behind each box.

Three confusions. The line is the median, not the mean. The dots are not "outliers to delete", just points more than 1.5 IQRs from the box, and skewed data have many of them ([[Outlier]]). And a boxplot does not show the whole distribution: it hides two peaks and hides the [[Sample Size|sample size]]. Overlaying the raw points, as `geom_jitter()` does in the example, or using a [[Violin Plot]], fixes both.

![[Boxplot anatomy.png|700]]
*What to look at:* each part of the box labelled with the quantity it represents.

```r
set.seed(4)
d <- data.frame(burn = rep(c("burned", "unburned"), each = 30))
d$rich <- c(rpois(30, 9), rpois(30, 5))
boxplot(rich ~ burn, data = d, ylab = "Bird species")
tapply(d$rich, d$burn, quantile)             # the numbers behind each box
library(ggplot2)
p <- ggplot(d, aes(burn, rich)) + geom_boxplot() + geom_jitter(width = 0.1, alpha = 0.4)   # add the raw points
```

## Connections
- **Builds on:** [[Quantile]], [[Interquartile Range]], [[Median]], [[Species Richness]], [[Factors in R]], [[Sample Size]]
- **Leads to:** [[Violin Plot]], [[Homogeneity of Variance]], [[Outlier]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What do the parts of a boxplot show?
??
Box: Q1 to Q3. Line: median. Whiskers: furthest points within 1.5 IQR. Dots: points beyond.
![[Boxplot anatomy.png]]
++++

What can a boxplot hide?
??
The sample size and features such as two peaks.
++++
