---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`rename()` changes column names without touching the data."
aliases:
  - "dplyr rename"
  - "Renaming columns"
status: seedling
---

# rename()

Raw data files arrive with column names such as `Tree.Cover..2km.`, `SPP_RICH` or `X1`. **`rename()`**, from dplyr, changes column names without touching the data. The form is `rename(data, new_name = old_name)`, new name on the left, the same direction as assignment ([[Data Frame]]). In the example below, `rename(tree = `Tree Cover`, richness = SPP_RICH)` gives two short, readable names.

Why bother? You will type column names hundreds of times during a project, in models, plots and summaries. Short, lowercase names without spaces prevent typing errors and make code readable. Names that contain spaces have to be wrapped in backticks every time, as `` `Tree Cover` `` shows, which is reason enough to rename them once at the start. `rename_with()` applies a function to all names at once: the second line of the example turns every name to lowercase and replaces spaces with underscores.

The common slip is writing the names the wrong way round, `old = new`; remember new on the left. Renaming is usually one of the first steps of [[Data Wrangling]], and [[select()]] can also rename columns while choosing them.

```r
library(dplyr)
d <- data.frame(`Tree Cover` = c(10, 30), SPP_RICH = c(9, 6), check.names = FALSE)
d |> rename(tree = `Tree Cover`, richness = SPP_RICH)
d |> rename_with(~ tolower(gsub(" ", "_", .x)))
```

## Connections
- **Builds on:** [[Data Frame]]
- **Leads to:** [[select()]], [[Data Wrangling]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is the argument order in rename()?
??
new_name = old_name.
++++
