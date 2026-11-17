---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`group_by()` marks a table as split into groups, so that the verbs after it work separately on each group."
aliases:
  - "dplyr group_by"
  - "Grouped data frame"
status: seedling
---

# group_by()

Before counting a deck of cards by suit, you sort it into four piles. You have not counted anything yet; you have only arranged things so that the next instruction, "count each pile", makes sense. **`group_by()`** does that to a table. It marks the table as split into groups defined by one or more categorical columns ([[Categorical Variable]]), so that the verbs after it work separately on each group. By itself it changes nothing visible: it neither sorts nor alters the data, it just attaches a grouping label.

The next verb then acts within groups. [[summarise()]] gives one row per group; [[mutate()]] computes within groups, so `birds - mean(birds)` becomes each count's deviation from its own site's mean, as in the second line of the example below; and functions such as `slice_max()` pick rows per group. Grouping by several columns, such as site and year, makes groups for every combination. `count(site, year)` is a shortcut for grouping and counting rows. This pattern of splitting a table, applying a calculation to each piece and combining the results, called *split-apply-combine*, is the most common move in data analysis, and the diagram traces it.

When you are finished, call `ungroup()`. A grouping that is forgotten carries on silently and changes later calculations, so that a mean you think is overall is actually per site. Grouping variables in a table play the same role as the grouping factors of mixed models ([[Grouping Factor]]).

```mermaid
flowchart LR
  A[Whole table] -- group_by site --> B["A rows, B rows, C rows"]
  B -- summarise --> C[one row per site]
```
*What to look at:* split, apply, combine.

```r
library(dplyr)
d <- data.frame(site = c("A", "A", "B", "B"), year = c(1, 2, 1, 2), birds = c(9, 8, 6, 5))
d |> group_by(site) |> summarise(mean_birds = mean(birds))
d |> group_by(site) |> mutate(dev = birds - mean(birds)) |> ungroup()
d |> count(site, year)          # shortcut for group_by + summarise(n = n())
```

## Connections
- **Builds on:** [[Categorical Variable]]
- **Leads to:** [[summarise()]], [[mutate()]], [[Grouping Factor]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does group_by() do on its own?
??
Nothing visible. It tags the data so later verbs operate within each group.
++++

Why call ungroup()?
??
So later calculations aren't unintentionally done within the old groups.
++++
