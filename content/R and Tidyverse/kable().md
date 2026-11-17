---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "knitr kable"
  - "Tables in reports"
status: seedling
---

# kable()

**In one line:** `kable()` turns a data frame into a cleanly formatted table in a knitted report.

> [!info] Before this, it helps to know
> [[R Markdown]] (where it is used) · [[summarise()]] (what often feeds it)

## Start from zero
1. **Raw printed data frames look like console output** in a report.
2. **`knitr::kable(df)` formats one as a proper table.**
3. **`digits` rounds, `col.names` relabels, `caption` adds a title.**
4. **Why it matters:** the table is generated from the model objects, so it updates when the analysis changes and is never retyped by hand.
5. **Typical content:** model selection tables and coefficient tables.

## In R
```r
library(knitr)
tab <- data.frame(model = c("cover + burn", "cover", "null"), K = c(4, 3, 2), dAICc = c(0, 1.8, 14.2), weight = c(0.71, 0.29, 0.00))
kable(tab, digits = 2, col.names = c("Model", "K", "ΔAICc", "Weight"), caption = "Model selection table")
```

## Common confusions
- **"Tables should be typed into Word."** Typed tables go stale and collect typos.

## Explain it back
- Why generate tables from code?

*Pass test:* you can print a rounded, captioned table from a data frame.

## Connections
- **Builds on:** [[R Markdown]]
- **Leads to:** [[Model Ranking Tables]], [[tidy()]], [[Writing Results Sections]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

What does kable() do?
??
Formats a data frame as a report-quality table in a knitted document.
++++
