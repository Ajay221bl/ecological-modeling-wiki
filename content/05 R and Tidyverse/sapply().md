---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`sapply()` is `lapply()` that then tries to simplify the result into a vector or matrix."
aliases:
  - "Simplifying apply"
  - "vapply()"
status: seedling
---

# sapply()

Picture the same conveyor line as [[lapply()]], but at the end someone tips the items out of their separate boxes onto one tray, if they are all the same size. **`sapply()`**, the "simplifying apply", calls a function on each element of a list or vector exactly as `lapply()` does, then tries to simplify the result. If every result is a single value, you get a named vector; if every result has the same length greater than one, you get a matrix; otherwise you get the list back.

That makes it ideal for quick summaries. In the code below, `sapply(mods, AIC)` gives a named vector of three AIC values, one per model, and `sapply(mods, function(m) length(coef(m)))` counts each model's coefficients. Because a data frame is a list of columns, `sapply(d, class)` reports the type of every column at once, a handy check when inspecting new data ([[Inspecting Data]]).

The convenience has a cost: the shape of the output depends on the data. If one model unexpectedly returns two values, the result silently changes from a vector to a list, and code downstream breaks somewhere else. So `sapply()` always giving a vector is a myth, and inside functions you write for reuse the stricter `vapply()`, which states the expected type, or the tidyverse's typed [[map()]] functions are safer ([[Loops, apply and map]]).

```r
d <- data.frame(tree = c(10, 20, 30, 40, 50, 15, 35), burn = c(1, 1, 0, 0, 0, 1, 0), birds = c(9, 8, 6, 5, 3, 9, 5))
mods <- lapply(list(null = birds ~ 1, cover = birds ~ tree, both = birds ~ tree + burn), glm, data = d, family = poisson)
sapply(mods, AIC)                           # one number each: a named vector
sapply(mods, function(m) length(coef(m)))   # number of coefficients
sapply(d, class)                            # the class of every column of a data frame
```

## Connections
- **Builds on:** [[lapply()]]
- **Leads to:** [[map()]], [[Inspecting Data]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Loops, apply and map]]

## Flashcards

How does sapply() differ from lapply()?
??
It simplifies the result to a vector or matrix when it can. lapply() always returns a list.
++++
