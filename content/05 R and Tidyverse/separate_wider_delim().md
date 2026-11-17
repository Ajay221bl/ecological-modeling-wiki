---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "separate()"
  - "Splitting a column"
status: seedling
---

# separate_wider_delim()

**In one line:** `separate_wider_delim()` splits one text column into several columns wherever a chosen separator character appears.

> [!info] Before this, it helps to know
> [[Tidy Data]] (one value per cell) · [[Strings in R]] (text handling)

## The everyday picture
Cutting a combined label, "VC-03-T", along its dashes to get three separate tags: site VC, plot 03, treatment T.

## Start from zero
1. **A cell holding two facts breaks the "one value per cell" rule.**
2. **Name the column, the delimiter and the new column names.**
3. **Each piece becomes its own column.**
4. **Pieces are text.** Convert numbers afterwards.
5. **Why it matters:** site codes often pack the grouping structure (site, plot, subplot) that a mixed model needs as separate factors.

## In R
```r
library(tidyr)
d <- data.frame(code = c("VC-03-T", "VC-04-C", "SA-01-T"), cover = c(40, 55, 20))
d2 <- separate_wider_delim(d, code, delim = "-", names = c("site", "plot", "trt"))
d2
unite(d2, "code", site, plot, trt, sep = "-")     # the reverse
```

## In the course
Homework 1 starts by splitting a site code column in the Valles Caldera vegetation data ([[Course Website]]).

## Common confusions
- **"separate() is the function."** The older `separate()` still works. The `separate_wider_*` family replaced it.

## Explain it back
- Why split a combined site code before modeling?

*Pass test:* you can split a code into site and plot columns.

## Connections
- **Builds on:** [[Tidy Data]], [[Strings in R]]
- **Leads to:** [[Grouping Factor]], [[Nested Random Effects]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does separate_wider_delim() do?
??
Splits one text column into several at each occurrence of a delimiter.
++++
