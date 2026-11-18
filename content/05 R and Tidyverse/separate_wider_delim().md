---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`separate_wider_delim()` splits one text column into several columns wherever a chosen separator character appears."
aliases:
  - "separate()"
  - "Splitting a column"
status: seedling
---

# separate_wider_delim()

A label such as "VC-03-T" packs three facts into one cell: site VC, plot 03, treatment T. Cut it along its dashes and you get three separate tags. **`separate_wider_delim()`**, from tidyr, does that: it splits one text column into several columns wherever a chosen separator, the *delimiter*, appears ([[Strings in R]]). You name the column, the delimiter and the new column names, as in `separate_wider_delim(d, code, delim = "-", names = c("site", "plot", "trt"))` in the example below.

A cell holding several facts breaks the [[Tidy Data]] rule of one value per cell, and the facts inside are often exactly the ones a model needs. Site codes commonly pack the grouping structure of a study, site within region, plot within site, so splitting them gives the separate [[Grouping Variable|Grouping Factor]] columns that a [[Mixed Effects Model|mixed model]] with [[Nested Random Effects]] requires. Homework 1 starts this way, by splitting the site code column of the Valles Caldera vegetation data ([[Course Website]]).

The pieces arrive as text, so convert any that are numbers. `unite()` does the reverse, pasting columns back together with a separator. Older code uses `separate()`, which still works, but the `separate_wider_*` family has replaced it.

```r
library(tidyr)
d <- data.frame(code = c("VC-03-T", "VC-04-C", "SA-01-T"), cover = c(40, 55, 20))
d2 <- separate_wider_delim(d, code, delim = "-", names = c("site", "plot", "trt"))
d2
unite(d2, "code", site, plot, trt, sep = "-")     # the reverse
```

## Connections
- **Builds on:** [[Tidy Data]], [[Strings in R]]
- **Leads to:** [[Grouping Variable|Grouping Factor]], [[Nested Random Effects]], [[Mixed Effects Model]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does separate_wider_delim() do?
??
Splits one text column into several at each occurrence of a delimiter.
++++
