---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A Cleveland dot plot draws each observation's value along the horizontal axis against its row number in the dataset on the vertical axis."
aliases:
  - "Dotchart"
  - "Cleveland dotplot"
  - "dotchart()"
status: seedling
---

# Cleveland Dot Plot

Lay every data point out on a table in the order it was recorded, each pushed left or right according to its value. A point that sticks out sideways from the crowd is plain to see, and so is a run of neighbours that all stick out together. A **Cleveland dot plot** is that picture: each observation's value on the horizontal axis, plotted against its row number in the dataset on the vertical axis, with row 1 at the bottom. Every observation is shown and nothing is summarised, which makes it Zuur and colleagues' favoured tool for spotting an [[Outlier]] ([[Zuur et al. 2010]], [[Zuur et al. 2009 Ch2]]).

Reading it is simple. A lone dot far to the right or left is a candidate outlier, like the wing length of 71 mm among values near 58 in the code below. A whole block of shifted dots hints at structure: data files are usually sorted by site or date, so a shifted block means one site or period differs. Grouping and colouring the dots by a factor, as in the second plot, compares spread between groups, a quick check of [[Homogeneity of Variance]].

Why prefer it to a [[Boxplot]]? A boxplot reduces the data to five numbers and applies an automatic rule that flags many points in skewed data, while the dot plot shows every raw value and leaves the judgement to you. Two confusions: the vertical axis is only row order, which means something only if the file's order does; and it is not a scatterplot of two variables, but one variable against its position.

![[Cleveland dot plot.png|700]]
*What to look at:* the single dot far to the right, and how easily it would hide inside a boxplot's whisker rule.

```r
set.seed(3)
wing <- c(rnorm(30, 58, 2), 71)            # one suspicious wing length
dotchart(wing, xlab = "Wing length (mm)", ylab = "Order of the data")
site <- factor(rep(c("A", "B", "C"), c(10, 10, 11)))
dotchart(wing, groups = site, xlab = "Wing length (mm)")   # by group
```

## Connections
- **Builds on:** [[Outlier]]
- **Leads to:** [[Boxplot]], [[Homogeneity of Variance]]
- **See also:** [[Observation]]
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
