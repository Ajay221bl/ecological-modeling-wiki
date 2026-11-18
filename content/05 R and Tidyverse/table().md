---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`table()` counts how many times each value occurs, or each combination of values from two or more variables."
aliases:
  - "Frequency table"
  - "Cross-tabulation"
  - "count()"
status: seedling
---

# table()

Tally marks on a clipboard: one mark each time a category turns up. With two clipboards crossed, sites down the side and years across the top, each cell tallies one combination. **`table()`** counts how many times each value occurs in a variable, usually a [[Categorical Variable]], or each combination of values from two or more variables. `table(x)` counts each distinct value; `table(x, y)` makes a cross-tabulation; `prop.table()` turns counts into proportions.

Its main use is checking the design before modeling. In the example below, `table(d$site, d$trt)` shows that site C has a burned plot but no control. Empty cells show as 0, and you want to see them, because a combination with no data cannot be estimated. Homework 1 checks balance this way ([[Balanced Data|Balanced vs Unbalanced Data]]), and the [[GLMM]] lab uses it to find farms where every animal was infected or none was, a cause of [[Complete Separation]]. Counting zeros in a response is a first check for [[Zero Inflation]].

[[Missing Values|Missing values]] are hidden from `table()` by default; add `useNA = "ifany"` to count them, as the last line does. The result is a table object, not a [[Data Frame|data frame]]; `as.data.frame()` converts it, and dplyr's `count()` gives the same counts directly as a data frame ([[Inspecting Data]]).

```r
d <- data.frame(site = c("A", "A", "A", "B", "B", "C"), trt = c("burn", "burn", "ctrl", "burn", "ctrl", "burn"))
table(d$site)
table(d$site, d$trt)          # site C has no control: unbalanced
prop.table(table(d$trt))      # as proportions
table(c(0, 0, 3, 0, 1, NA), useNA = "ifany")   # how many zeros and NAs?
```

## Connections
- **Builds on:** [[Categorical Variable]], [[Missing Values]], [[Data Frame]]
- **Leads to:** [[Balanced Data|Balanced vs Unbalanced Data]], [[Complete Separation]], [[Zero Inflation]], [[GLMM]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does table(x, y) show?
??
The number of observations for each combination of x and y.
++++

Why look for zeros in a cross-tabulation before modeling?
??
Combinations with no data can't be estimated and signal unbalance or separation.
++++
