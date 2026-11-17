---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "levels()"
  - "n_distinct()"
  - "Distinct values"
status: seedling
---

# unique()

**In one line:** `unique()` lists the different values that occur in a vector, each once.

> [!info] Before this, it helps to know
> [[Vectors in R]] (what it scans) · [[Factors in R]] (which have levels)

## Start from zero
1. **`unique(x)` returns each value once,** in order of first appearance.
2. **`length(unique(x))` counts them.** dplyr's `n_distinct(x)` does the same.
3. **`levels(f)` lists a factor's allowed categories,** including ones that no longer occur.
4. **Why you need the count:** the number of distinct groups decides whether a variable can be a random effect ([[How Many Levels for a Random Effect]]), and species richness is just a count of unique species.
5. **`duplicated()` flags repeats,** useful for finding rows entered twice.

## In R
```r
site <- c("A", "B", "A", "C", "B")
unique(site); length(unique(site))        # "A" "B" "C" and 3
f <- factor(site)[site != "C"]
levels(f); unique(f)                      # level C lingers though no data remain
levels(droplevels(f))
sp <- c("robin", "wren", "robin", "lark"); length(unique(sp))   # richness = 3
duplicated(site)
```

## Common confusions
- **"levels() and unique() agree."** Not after filtering: unused levels stay until `droplevels()`.

## Explain it back
- How do you count the number of groups in a column?

*Pass test:* you can count groups and remove unused factor levels.

## Connections
- **Builds on:** [[Vectors in R]], [[Factors in R]]
- **Leads to:** [[Species Richness]], [[How Many Levels for a Random Effect]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

How do you count distinct values in a vector?
??
length(unique(x)) or dplyr's n_distinct(x).
++++

How can levels(f) and unique(f) differ?
??
levels() keeps categories with no remaining observations until droplevels() is used.
++++
