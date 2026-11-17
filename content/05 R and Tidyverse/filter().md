---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "dplyr filter"
  - "Subsetting rows"
status: seedling
---

# filter()

**In one line:** `filter()` keeps the rows of a table that pass a test and drops the rest.

> [!info] Before this, it helps to know
> [[Indexing in R]] (tests such as `x > 5`) · [[Pipe Operator]] (chaining) · [[Data Frame]] (the table)

## The everyday picture
A sieve. Pour the whole table through and only rows that meet the rule stay in the pan.

## Start from zero
1. **`filter(data, condition)`.** Rows where the condition is TRUE are kept.
2. **Several conditions separated by commas mean "and".** Use `|` for "or".
3. **Rows where the test is `NA` are dropped.** *Why to watch this:* an unknown isn't TRUE, so missing values vanish silently.
4. **`%in%` matches a set of values.**
5. **Columns are untouched.** For columns use [[select()]].

## In R
```r
library(dplyr)
d <- data.frame(site = c("A", "A", "B", "C", "C"), year = c(2020, 2021, 2020, 2020, 2021), birds = c(9, 8, NA, 5, 3))
d |> filter(year == 2020)
d |> filter(site %in% c("A", "C"), birds > 4)     # comma = AND
d |> filter(birds > 4 | year == 2021)
d |> filter(!is.na(birds))                        # drop rows with missing counts
```

## Common confusions
- **"filter() picks columns."** Rows only.
- **"`=` inside filter."** Use `==` to test equality.

## Explain it back
- What happens to rows where the condition is NA?

*Pass test:* you can keep rows by one or several conditions.

## Connections
- **Builds on:** [[Indexing in R]], [[Pipe Operator]]
- **Leads to:** [[select()]], [[mutate()]], [[Missing Values]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does filter() do?
??
Keeps the rows of a data frame for which a condition is TRUE.
++++

What happens to rows where filter()'s condition is NA?
??
They are dropped.
++++
