---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A list is a container whose slots can hold anything, of any type and size, including other lists, datasets and fitted models."
aliases:
  - "list()"
  - "Named list"
status: seedling
---

# Lists in R

A filing cabinet can hold a single sheet in one drawer, a thick report in the next, and a whole smaller cabinet in a third, each drawer labelled. A **list** is R's filing cabinet: a container whose slots can hold anything, of any type and size, including datasets, fitted models and other lists. A vector, by contrast, is an egg carton that takes only one kind of thing ([[Vectors in R]]). You make one with `list(a = ..., b = ...)`, which gives named slots.

Lists exist because many results do not fit in a table. A fitted model bundles coefficients, residuals, the formula and the settings, all different shapes, and so a fitted `lm` is itself a list; so is a [[Data Frame|data frame]], which is a list of equal-length columns. You open a slot with `x$a` or `x[["a"]]`, which hands you the contents. Single brackets, `x["a"]`, instead give you a smaller list still wrapped around the contents, and mixing the two up is a common source of errors.

The most useful pattern in this course is storing several models in a named list, as in the code below: a [[Null Model|null model]] and a tree-cover model kept together as `mods`, so that one call, `sapply(mods, AIC)`, computes the same summary for every model. The [[Model Selection|model selection]] lab builds its [[Candidate Model Set]] this way before comparing models, and functions such as [[lapply()]] are designed to walk through lists. Lists are not an advanced topic: you use one every time you fit a model ([[Indexing in R]], [[Course Website]]).

```r
d <- data.frame(tree = c(10, 20, 30, 40, 50), birds = c(9, 8, 6, 5, 3))
mods <- list(null = lm(birds ~ 1, d), cover = lm(birds ~ tree, d))   # a named list of models
names(mods)
mods$cover                 # one model
sapply(mods, AIC)          # the same function applied to every slot
str(mods$cover, max.level = 1, give.attr = FALSE)[1:3]   # a model is itself a list
```
Keeping models in a named list is the pattern the model selection lab uses before `aictab()`.

## Connections
- **Builds on:** [[Vectors in R]], [[Data Frame]]
- **Leads to:** [[lapply()]], [[Indexing in R]], [[Candidate Model Set]], [[Null Model]], [[Model Selection]]
- **See also:** [[Objects and Assignment]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is a list in R?
??
A container whose elements can be of any type or size, including models and other lists.
++++

What is the difference between `x[["a"]]` and `x["a"]`?
??
`x[["a"]]` returns the element itself. `x["a"]` returns a list containing that element.
++++

Why keep fitted models in a named list?
??
So one function call can be applied to all of them, for example to compute AIC.
++++
