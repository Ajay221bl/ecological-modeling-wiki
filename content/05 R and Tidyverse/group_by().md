---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "dplyr group_by"
  - "Grouped data frame"
status: seedling
---

# group_by()

**In one line:** `group_by()` marks a table as split into groups, so that the verbs after it work separately on each group.

> [!info] Before this, it helps to know
> [[Categorical Variable]] (what defines groups) · [[summarise()]] (the usual next step)

## The everyday picture
Sorting a deck into four piles by suit before counting. You haven't counted anything yet. You've only arranged things so that the next instruction, "count each pile", makes sense.

## Start from zero
1. **`group_by(data, g)` changes nothing visible.** It attaches a label.
2. **The next verb acts within groups.** `summarise` gives one row each, `mutate` computes group-wise, `slice_max` picks per group.
3. **Group by several columns for combinations:** site and year.
4. **`ungroup()` when finished.** *Why:* a forgotten grouping silently changes later calculations.
5. **This is split-apply-combine,** the most common move in data analysis.

## See it
```mermaid
flowchart LR
  A[Whole table] -- group_by site --> B[A rows | B rows | C rows]
  B -- summarise --> C[one row per site]
```
*What to look at:* split, apply, combine.

## In R
```r
library(dplyr)
d <- data.frame(site = c("A", "A", "B", "B"), year = c(1, 2, 1, 2), birds = c(9, 8, 6, 5))
d |> group_by(site) |> summarise(mean_birds = mean(birds))
d |> group_by(site) |> mutate(dev = birds - mean(birds)) |> ungroup()
d |> count(site, year)          # shortcut for group_by + summarise(n = n())
```

## Common confusions
- **"group_by() sorts or changes the data."** It only records the grouping.

## Explain it back
- Why should you `ungroup()`?

*Pass test:* you can explain split-apply-combine with a two-line example.

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
