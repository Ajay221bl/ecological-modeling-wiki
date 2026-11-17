---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Box-and-whisker plot"
  - "geom_boxplot()"
status: seedling
---

# Boxplot

**In one line:** a boxplot summarises a variable with a box from the first to third quartile, a line at the median, whiskers to the most extreme ordinary values and dots for points beyond.

> [!info] Before this, it helps to know
> [[Quantile]] (quartiles) · [[Interquartile Range]] (the box length) · [[Median]] (the centre line)

## The everyday picture
A five-line summary of a crowd's heights: the shortest ordinary person, the quarter mark, the middle person, the three-quarter mark, the tallest ordinary person. Anyone unusually short or tall is drawn separately.

## Start from zero
1. **Box:** Q1 to Q3, holding the middle half.
2. **Line in the box:** the median.
3. **Whiskers:** out to the furthest point within 1.5 × IQR of the box.
4. **Dots:** points beyond the whiskers.
5. **Side-by-side boxes compare groups.** *This is its real strength:* differences in centre and in spread across levels of a factor show at once.
6. **Read the shape.** Median off-centre and one long whisker mean skew.

## See it
![[Boxplot anatomy.png|700]]
*What to look at:* each part of the box labelled with the quantity it represents.

## In R
```r
set.seed(4)
d <- data.frame(burn = rep(c("burned", "unburned"), each = 30))
d$rich <- c(rpois(30, 9), rpois(30, 5))
boxplot(rich ~ burn, data = d, ylab = "Bird species")
tapply(d$rich, d$burn, quantile)             # the numbers behind each box
library(ggplot2)
p <- ggplot(d, aes(burn, rich)) + geom_boxplot() + geom_jitter(width = 0.1, alpha = 0.4)   # add the raw points
```

## In the course
Used in protocol steps 1 and 2. The crash course asks for boxplots with facets ([[Course Website]]).

## Common confusions
- **"The line is the mean."** It is the median.
- **"Dots are outliers to delete."** They are points more than 1.5 IQRs out. Skewed data have many.
- **"A boxplot shows the distribution."** It hides bimodality and sample size. Overlay the points, or use a violin plot.

## Explain it back
- What do the box, line, whiskers and dots stand for?
- What does a boxplot hide?

*Pass test:* you can sketch a boxplot from five numbers and compare two groups with it.

## Connections
- **Builds on:** [[Quantile]], [[Interquartile Range]], [[Median]]
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
