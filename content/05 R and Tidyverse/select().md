---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`select()` keeps, drops or reorders the columns of a table by name."
aliases:
  - "dplyr select"
  - "Choosing columns"
status: seedling
---

# select()

Printing a wide spreadsheet, you tick the columns you want, in the order you want them, and leave the rest off the page. **`select()`**, from dplyr, keeps, drops or reorders the columns of a table by name; rows are untouched. `select(data, a, b)` keeps columns a and b in that order, and a minus sign drops, so `select(data, -notes)` removes the notes column ([[Data Frame]], [[Pipe|Pipe Operator]]).

Helpers save typing when tables are wide. A range such as `a:d` takes every column from a to d; `starts_with("tree")` and `ends_with("_km")` match by name; `where(is.numeric)` keeps every numeric column; and `everything()` means "all the rest", so `select(birds, everything())` moves birds to the front. The code below uses each. The same helpers work inside [[across()]] for applying one function to many columns, and columns can be renamed while selecting, or separately with [[rename()]].

Remember the division of labour: select is for columns, [[filter()]] is for rows. One practical trap: the MASS package also has a function called `select()`, and if MASS is loaded after dplyr, `select()` fails with a strange error about unused arguments. Writing `dplyr::select()` names the right one explicitly, as in the last line of the example.

```r
library(dplyr)
d <- data.frame(site = c("A", "B"), tree_2km = c(10, 30), tree_5km = c(12, 25), birds = c(9, 6), notes = c("ok", "windy"))
d |> select(site, birds)
d |> select(-notes)
d |> select(site, starts_with("tree"))
d |> select(where(is.numeric))
d |> dplyr::select(birds, everything())     # move birds to the front
```

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
