---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "dplyr select"
  - "Choosing columns"
status: seedling
---

# select()

**In one line:** `select()` keeps, drops or reorders the columns of a table by name.

> [!info] Before this, it helps to know
> [[Data Frame]] (columns are variables) · [[Pipe Operator]] (chaining)

## The everyday picture
Choosing which columns of a wide spreadsheet to print. You tick the ones you want, in the order you want them, and leave the rest off the page.

## Start from zero
1. **`select(data, a, b)` keeps columns a and b, in that order.**
2. **A minus drops:** `select(data, -notes)`.
3. **Ranges and helpers save typing:** `a:d`, `starts_with("tree")`, `ends_with("_km")`, `where(is.numeric)`.
4. **Rows are untouched.**
5. **MASS also has a `select()`.** *Why to know:* if MASS is loaded after dplyr, `select()` breaks with a strange error. Write `dplyr::select()`.

## In R
```r
library(dplyr)
d <- data.frame(site = c("A", "B"), tree_2km = c(10, 30), tree_5km = c(12, 25), birds = c(9, 6), notes = c("ok", "windy"))
d |> select(site, birds)
d |> select(-notes)
d |> select(site, starts_with("tree"))
d |> select(where(is.numeric))
d |> dplyr::select(birds, everything())     # move birds to the front
```

## Common confusions
- **"select() and filter() are interchangeable."** select is columns, filter is rows.

## Explain it back
- How do you keep every column whose name starts with "tree"?

*Pass test:* you can keep, drop and reorder columns.

## Connections
- **Builds on:** [[Data Frame]]
- **Leads to:** [[filter()]], [[rename()]], [[across()]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does select() do?
??
Keeps, drops or reorders columns of a data frame by name.
++++

Why might select() fail after loading MASS?
??
MASS has its own select() that masks dplyr's. Call the dplyr one explicitly.
++++
