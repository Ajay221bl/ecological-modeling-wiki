---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Dotchart"
  - "Cleveland dotplot"
  - "dotchart()"
status: seedling
---

# Cleveland Dot Plot

**In one line:** a Cleveland dot plot draws each observation's value along the horizontal axis against its row number in the dataset on the vertical axis.

> [!info] Before this, it helps to know
> [[Outlier]] (what it helps find) · [[Observation]] (each dot is one)

## The everyday picture
Laying every data point out on a table in the order it was recorded, each pushed left or right according to its value. A point that sticks out sideways from the crowd is plain to see, and so is a run of neighbours that all stick out together.

## Start from zero
1. **Y axis: the order of the data** (row 1 at the bottom).
2. **X axis: the value.**
3. **Every observation is shown.** Nothing is summarised.
4. **A lone dot far right or left is a candidate outlier.**
5. **A block of shifted dots hints at structure.** *Why:* data files are usually sorted by site or date, so a shifted block means one site or period differs.
6. **Group and colour by a factor** to compare spread between groups.

## See it
![[Cleveland dot plot.png|700]]
*What to look at:* the single dot far to the right, and how easily it would hide inside a boxplot's whisker rule.

## Why it is this way
A boxplot reduces data to five numbers and applies an automatic rule that flags many points in skewed data. Zuur and colleagues prefer the dot plot because it shows every raw value and leaves the judgement to you.

## In R
```r
set.seed(3)
wing <- c(rnorm(30, 58, 2), 71)            # one suspicious wing length
dotchart(wing, xlab = "Wing length (mm)", ylab = "Order of the data")
site <- factor(rep(c("A", "B", "C"), c(10, 10, 11)))
dotchart(wing, groups = site, xlab = "Wing length (mm)")   # by group
```

## In the course
Zuur's favoured outlier tool in [[Zuur et al. 2010]] and [[Zuur et al. 2009 Ch2]].

## Common confusions
- **"The y-axis means something."** It is only row order, which matters only if the file's order does.
- **"It is a scatterplot of two variables."** One variable against its position.

## Explain it back
- What does a shifted block of dots suggest?

*Pass test:* you can draw and read a dot plot for outliers.

## Connections
- **Builds on:** [[Outlier]]
- **Leads to:** [[Boxplot]], [[Homogeneity of Variance]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What does a Cleveland dot plot show?
??
Each observation's value (x) against its order in the dataset (y).
![[Cleveland dot plot.png]]
++++

Why do Zuur and colleagues prefer it to a boxplot for outliers?
??
It shows every raw value without an automatic rule deciding what counts as extreme.
++++
