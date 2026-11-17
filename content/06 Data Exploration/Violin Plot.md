---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A violin plot shows a variable's density curve mirrored on both sides of a centre line, one \"violin\" per group."
aliases:
  - "geom_violin()"
status: seedling
---

# Violin Plot

A vase turned on a potter's wheel is fat where there is plenty of clay and pinched where there is little. A **violin plot** shows a variable's density curve ([[Density Plot]]) turned upright and mirrored on both sides of a centre line, one "violin" per group. The width at any height shows how common that value is, so two bulges mean two clusters. A small boxplot or the raw points are usually drawn inside to mark the median and quartiles.

Its advantage over a plain [[Boxplot]] is that two very different distributions can share the same five-number summary. In the code below, one group has a single peak and the other two separate peaks, but their quartiles are similar, so their boxes look almost the same; the violins show the difference immediately. Two peaks often signal a mixture of two kinds of unit, such as two species or two sexes ([[Mixture Distribution]], [[Mode]]). The course's data exploration lab adds violins alongside boxplots ([[Course Website]]).

Two cautions. By default every violin has the same area whatever its sample size, so width does not show n. And with few observations, under about 20 per group, the smooth outline overpromises detail the data cannot support; show the points instead.

![[Violin vs boxplot.png|700]]
*What to look at:* the two groups have nearly the same box, but one violin has two bulges.

```r
library(ggplot2)
set.seed(6)
d <- data.frame(group = rep(c("one peak", "two peaks"), each = 100),
                y = c(rnorm(100, 10, 2), c(rnorm(50, 8, 0.7), rnorm(50, 12, 0.7))))
tapply(d$y, d$group, quantile)       # similar quartiles
p <- ggplot(d, aes(group, y)) + geom_violin(fill = "grey85") + geom_boxplot(width = 0.12)
```

## Connections
- **Builds on:** [[Density Plot]], [[Boxplot]]
- **Leads to:** [[Mixture Distribution]], [[Mode]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What does the width of a violin plot represent?
??
The estimated density of observations at that value.
![[Violin vs boxplot.png]]
++++

What can a violin plot show that a boxplot cannot?
??
The shape of the distribution, such as two peaks.
++++
