---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "list()"
  - "Named list"
status: seedling
---

# Lists in R

**In one line:** a list is a container whose slots can hold anything, of any type and size, including other lists, datasets and fitted models.

> [!info] Before this, it helps to know
> [[Vectors in R]] (one type only) · [[Objects and Assignment]] (naming things)

## The everyday picture
A filing cabinet. One drawer holds a single sheet, the next a thick report, the next another small cabinet. Drawers are labelled so you can find things. A vector, by contrast, is a carton that takes only eggs.

## Start from zero
1. **`list(a = ..., b = ...)` makes named slots.**
2. **Slots can differ in type and length.** *Why:* results such as a fitted model bundle coefficients, residuals and settings, which don't fit a table.
3. **`x$a` or `x[["a"]]` opens a slot** and gives its contents.
4. **`x["a"]` gives a smaller list** still wrapped up.
5. **Lists are how you store many models.** Fit each, keep them in a named list, then loop or `lapply()` over it.
6. **A data frame is a list of equal-length columns.** A fitted `lm` is a list too.

## In R
```r
d <- data.frame(tree = c(10, 20, 30, 40, 50), birds = c(9, 8, 6, 5, 3))
mods <- list(null = lm(birds ~ 1, d), cover = lm(birds ~ tree, d))   # a named list of models
names(mods)
mods$cover                 # one model
sapply(mods, AIC)          # the same function applied to every slot
str(mods$cover, max.level = 1, give.attr = FALSE)[1:3]   # a model is itself a list
```
Keeping models in a named list is the pattern the model selection lab uses before `aictab()`.

## In the course
The crash course and model selection labs build named lists of formulas and models ([[Course Website]]).

## Common confusions
- **"`[ ]` and `[[ ]]` are interchangeable."** `[[ ]]` takes the contents out. `[ ]` hands you a list containing it.
- **"Lists are advanced."** You use one every time you fit a model.

## Explain it back
- Why can't a vector hold several fitted models?
- What is the difference between `mods["cover"]` and `mods[["cover"]]`?

*Pass test:* you can store two models in a named list and apply a function to both.

## Connections
- **Builds on:** [[Vectors in R]]
- **Leads to:** [[lapply()]], [[Indexing in R]], [[Candidate Model Set]]
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
