---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`kable()` turns a data frame into a cleanly formatted table in a knitted report."
aliases:
  - "knitr kable"
  - "Tables in reports"
status: seedling
---

# kable()

A data frame printed in a report looks like raw console output. **`kable()`**, from the knitr package, turns a data frame into a cleanly formatted table in a knitted [[R Markdown]] document. `knitr::kable(df)` does the basic job; `digits` rounds the numbers, `col.names` relabels the columns, and `caption` adds a title. The example below formats a small model selection table with model names, numbers of parameters, ΔAICc values and weights.

The point is not only looks. Because the table is generated from the data or model objects, often via [[summarise()]] or a tidy table of coefficients ([[tidy()]]), it updates automatically when the analysis changes and is never retyped by hand. Tables typed into a word processor go stale and collect typos. Typical content in this course is model selection tables ([[Model Ranking Tables]]) and coefficient tables for a results section ([[Writing Results Sections]]).

```r
library(knitr)
tab <- data.frame(model = c("cover + burn", "cover", "null"), K = c(4, 3, 2), dAICc = c(0, 1.8, 14.2), weight = c(0.71, 0.29, 0.00))
kable(tab, digits = 2, col.names = c("Model", "K", "ΔAICc", "Weight"), caption = "Model selection table")
```

## Connections
- **Builds on:** [[R Markdown]]
- **Leads to:** [[Model Ranking Tables]], [[tidy()]], [[Writing Results Sections]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does kable() do?
??
Formats a data frame as a report-quality table in a knitted document.
++++
