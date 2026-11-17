---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`rep()` repeats values, either the whole set several times or each value several times."
aliases:
  - "Repeat"
  - "Replicating values"
status: seedling
---

# rep()

**`rep()`** repeats values ([[Vectors in R]]), in one of two orders. `rep(x, times = n)` repeats the whole vector n times, so `rep(c("A", "B"), times = 3)` gives A B A B A B. `rep(x, each = n)` repeats each element n times before moving on, so `rep(c("A", "B"), each = 3)` gives A A A B B B.

The difference matters because `rep()` is how you build labels for simulated or designed data ([[Simulating Data]]). For 3 sites with 4 visits each, `site <- rep(1:3, each = 4)` gives 1 1 1 1 2 2 2 2 3 3 3 3, and `visit <- rep(1:4, times = 3)` gives 1 2 3 4 1 2 3 4 1 2 3 4; side by side, as in the code below, every row is one visit to one site. Combining both arguments builds nested layouts, such as plots within sites, which become the grouping variables of mixed models ([[Grouping Factor]]).

Mixing up `times` and `each` scrambles a design without any error: the labels are still the right length, just attached to the wrong rows. Print the first few rows to check. Its partner [[seq()]] makes stepped sequences rather than repeats.

```r
rep(c("A", "B"), times = 3)       # A B A B A B
rep(c("A", "B"), each = 3)        # A A A B B B
site  <- rep(1:3, each = 4)       # 3 sites, 4 visits each
visit <- rep(1:4, times = 3)
data.frame(site, visit)[1:6, ]
```

## Connections
- **Builds on:** [[Vectors in R]]
- **Leads to:** [[seq()]], [[Simulating Data]], [[Grouping Factor]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is the difference between rep(x, times = 2) and rep(x, each = 2)?
??
times repeats the whole vector (A B A B). each repeats every element in place (A A B B).
++++
