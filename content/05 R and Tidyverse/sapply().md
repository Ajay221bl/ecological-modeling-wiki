---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Simplifying apply"
  - "vapply()"
status: seedling
---

# sapply()

**In one line:** `sapply()` is `lapply()` that then tries to simplify the result into a vector or matrix.

> [!info] Before this, it helps to know
> [[lapply()]] (the same idea, returning a list)

## The everyday picture
The same conveyor line, but at the end someone tips the items out of their separate boxes onto one tray, if they are all the same size.

## Start from zero
1. **It calls the function on each element, like `lapply()`.**
2. **If every result is a single value, you get a named vector.**
3. **If every result has the same length, you get a matrix.**
4. **Otherwise you get a list back.** *Why this matters:* the output shape depends on the data, so inside functions the stricter `vapply()` or `purrr::map_dbl()` is safer.

## In R
```r
d <- data.frame(tree = c(10, 20, 30, 40, 50, 15, 35), burn = c(1, 1, 0, 0, 0, 1, 0), birds = c(9, 8, 6, 5, 3, 9, 5))
mods <- lapply(list(null = birds ~ 1, cover = birds ~ tree, both = birds ~ tree + burn), glm, data = d, family = poisson)
sapply(mods, AIC)                           # one number each: a named vector
sapply(mods, function(m) length(coef(m)))   # number of coefficients
sapply(d, class)                            # the class of every column of a data frame
```

## Common confusions
- **"sapply always gives a vector."** Only when each result has length one.

## Explain it back
- When does `sapply()` return a matrix?
- Why is `sapply(d, class)` handy?

*Pass test:* you can pull one number from each model in a list.

## Connections
- **Builds on:** [[lapply()]]
- **Leads to:** [[map()]], [[Inspecting Data]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Loops, apply and map]]

## Flashcards

How does sapply() differ from lapply()?
??
It simplifies the result to a vector or matrix when it can. lapply() always returns a list.
++++
