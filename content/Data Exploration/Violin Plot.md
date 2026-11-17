---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "geom_violin()"
status: seedling
---

# Violin Plot

**In one line:** a violin plot shows a variable's density curve mirrored on both sides of a centre line, one "violin" per group.

> [!info] Before this, it helps to know
> [[Density Plot]] (the curve being mirrored) · [[Boxplot]] (what it improves on)

## The everyday picture
A vase turned on a potter's wheel. It is fat where data are plentiful and pinched where they are scarce. Two bulges mean two clusters, which a box would have hidden completely.

## Start from zero
1. **Compute a density curve for each group.**
2. **Turn it upright and mirror it.**
3. **Width at any height = how common that value is.**
4. **Add a boxplot or points inside** for the median and quartiles.
5. **Why it beats a plain boxplot:** two very different distributions can share the same five-number summary. The violin shows the difference.
6. **With few observations it overpromises.** Under about 20 per group, show the points instead.

## See it
![[Violin vs boxplot.png|700]]
*What to look at:* the two groups have nearly the same box, but one violin has two bulges.

## In R
```r
library(ggplot2)
set.seed(6)
d <- data.frame(group = rep(c("one peak", "two peaks"), each = 100),
                y = c(rnorm(100, 10, 2), c(rnorm(50, 8, 0.7), rnorm(50, 12, 0.7))))
tapply(d$y, d$group, quantile)       # similar quartiles
p <- ggplot(d, aes(group, y)) + geom_violin(fill = "grey85") + geom_boxplot(width = 0.12)
```

## In the course
Added in the data exploration lab alongside boxplots ([[Course Website]]).

## Common confusions
- **"Width shows sample size."** By default every violin has the same area whatever its n.

## Explain it back
- When does a violin reveal something a boxplot hides?

*Pass test:* you can read modes and skew from a violin.

## Connections
- **Builds on:** [[Density Plot]], [[Boxplot]]
- **Leads to:** [[Mixture Distribution]], [[Mode]]
- **Part of:** [[MOC - Data Exploration]]

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
