---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`unique()` lists the different values that occur in a vector, each once."
aliases:
  - "levels()"
  - "n_distinct()"
  - "Distinct values"
status: seedling
---

# unique()

**`unique()`** lists the different values that occur in a vector, each one once, in order of first appearance ([[Vectors in R]]). `length(unique(x))` counts them, and dplyr's `n_distinct(x)` does the same in one step. In the example below, five site entries contain three distinct sites, A, B and C. Species richness, the number of different species recorded, is exactly `length(unique(species))` ([[Species Richness]]).

How many distinct groups a variable has matters for modeling. A [[Grouping Variable|grouping variable]] with only three or four levels is a poor candidate for a [[Random Effect|random effect]], because a variance cannot be estimated well from so few groups ([[How Many Levels for a Random Effect]]), so counting levels is a routine check. For finding rows entered twice, `duplicated()` flags each value that has appeared before.

For factors there is a subtlety. `levels(f)` lists the factor's allowed categories, and that list does not shrink when data are removed ([[Factors in R]]). In the example, after site C's rows are filtered out, `unique(f)` shows only A and B, but `levels(f)` still includes C. `droplevels()` removes unused levels, which matters because models and plots use the levels, not the data, to decide how many groups there are.

```r
site <- c("A", "B", "A", "C", "B")
unique(site); length(unique(site))        # "A" "B" "C" and 3
f <- factor(site)[site != "C"]
levels(f); unique(f)                      # level C lingers though no data remain
levels(droplevels(f))
sp <- c("robin", "wren", "robin", "lark"); length(unique(sp))   # richness = 3
duplicated(site)
```

## Connections
- **Builds on:** [[Vectors in R]], [[Factors in R]]
- **Leads to:** [[Species Richness]], [[How Many Levels for a Random Effect]], [[Grouping Variable]], [[Random Effect]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

How do you count distinct values in a vector?
??
length(unique(x)) or dplyr's n_distinct(x).
++++

How can levels(f) and unique(f) differ?
??
levels() keeps categories with no remaining observations until droplevels() is used.
++++
