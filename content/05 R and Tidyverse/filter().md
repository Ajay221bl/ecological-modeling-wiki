---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`filter()` keeps the rows of a table that pass a test and drops the rest."
aliases:
  - "dplyr filter"
  - "Subsetting rows"
status: seedling
---

# filter()

Pour a whole table through a sieve and only the rows that meet your rule stay in the pan. **`filter()`**, from dplyr, keeps the rows of a table that pass a test and drops the rest. The call is `filter(data, condition)`, and the condition is the same kind of TRUE/FALSE test used in base R indexing, such as `year == 2020` ([[Indexing in R]], [[Data Frame]]). It works on rows only; columns are untouched, and choosing columns is the job of [[select()]].

Conditions combine in the usual ways. Several conditions separated by commas mean "and", so `filter(site %in% c("A", "C"), birds > 4)` keeps rows from sites A or C *and* with more than 4 birds; `|` means "or"; and `%in%` matches any of a set of values. Equality is tested with `==`, never a single `=`. The code below shows each of these in a pipe ([[Pipe Operator]]).

One behaviour deserves attention: rows where the test comes out `NA` are dropped, because an unknown is not TRUE. In the example, site B's bird count is missing, so it silently disappears from `filter(birds > 4 | year == 2021)` even though we never asked to remove it. Sometimes that is what you want, and `filter(!is.na(birds))` does it explicitly; often it is a surprise, so count rows before and after ([[Missing Values]]). Filtered tables are commonly the starting point for new columns ([[mutate()]]).

```r
library(dplyr)
d <- data.frame(site = c("A", "A", "B", "C", "C"), year = c(2020, 2021, 2020, 2020, 2021), birds = c(9, 8, NA, 5, 3))
d |> filter(year == 2020)
d |> filter(site %in% c("A", "C"), birds > 4)     # comma = AND
d |> filter(birds > 4 | year == 2021)
d |> filter(!is.na(birds))                        # drop rows with missing counts
```

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
