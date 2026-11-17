---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`paste()` glues pieces of text and values together into one string."
aliases:
  - "paste0()"
  - "Concatenating strings"
status: seedling
---

# paste()

**`paste()`** glues pieces of text and values together into one string ([[Strings in R]]). `paste("plot", 3)` gives "plot 3", joining with a space; `paste0("plot", 3)` gives "plot3", with nothing between; and `sep = "_"` sets any other separator. It is vectorized, so `paste0("site", 1:3)` gives three labels at once, "site1", "site2" and "site3" ([[Vectors in R]]). The `collapse` argument works the other way, squeezing a whole vector into a single string: `paste(c("tree", "burn", "year"), collapse = " + ")` gives "tree + burn + year".

In the course, `paste()` builds things that would be tedious or error-prone to type. Joining a base web address to each file name gives the URLs for reading data ([[Reading Data from a URL]]). File names and plot labels can be built from variables. And text can become a model: `as.formula(paste("birds ~", "tree + burn"))` turns a string into a formula ([[Model Formula Syntax]]), which is how every combination of predictors can be generated automatically for a candidate set ([[Building All Fixed x Random Combinations]]).

`paste()` does not add numbers: it turns them into text and joins them, so `paste(2, 3)` is "2 3", not 5.

```r
paste("plot", 3); paste0("plot", 3)
paste0("site", 1:3)
repo <- "https://example.org/data/"; paste0(repo, "deer.txt")
paste(c("tree", "burn", "year"), collapse = " + ")
as.formula(paste("birds ~", paste(c("tree", "burn"), collapse = " + ")))   # a formula built from text
```

## Connections
- **Builds on:** [[Strings in R]]
- **Leads to:** [[Reading Data from a URL]], [[Building All Fixed x Random Combinations]], [[Model Formula Syntax]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is the difference between paste() and paste0()?
??
paste() separates pieces with a space by default. paste0() joins them with nothing between.
++++

How do you turn a text string into a model formula?
??
as.formula("y ~ a + b").
++++
