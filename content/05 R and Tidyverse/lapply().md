---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`lapply()` runs a function on every element of a list or vector and returns the results as a list."
aliases:
  - "List apply"
status: seedling
---

# lapply()

On a stamp-and-conveyor line, items roll past, each gets the same stamp, and they come off the end in the order they went on. **`lapply()`**, short for "list apply", does that: it runs a function on every element of a list or vector and returns the results as a list of the same length, with the same names ([[Lists in R]]). The call is `lapply(X, FUN)`, and FUN is called once per element. The output is always a list because the results, such as fitted models, can be any shape, and only a list can hold them.

Its signature use in the course is fitting a whole set of models in one line. In the code below, `forms` is a named list of three formulas, and `lapply(forms, glm, data = d, family = poisson)` fits each one; the extra arguments after the function name are passed through to `glm()` every time. When the step you need is not an existing function, you write one inline, as in `function(m) round(coef(m), 2)`, which pulls out each model's coefficients ([[Writing Your Own Function]]). The model selection lab fits its [[Candidate Model Set]] exactly this way.

Two confusions. `lapply()` does not change its input; it returns a new list, which you must assign to keep. And it never returns a vector, even when every result is a single number; for that, [[sapply()]] tries to simplify the list, and the tidyverse's [[map()]] offers typed versions. A [[For Loop]] can do the same job, but `lapply()` is shorter and cannot forget to store results ([[Loops, apply and map]]).

```r
d <- data.frame(tree = c(10, 20, 30, 40, 50, 15, 35), burn = c(1, 1, 0, 0, 0, 1, 0), birds = c(9, 8, 6, 5, 3, 9, 5))
forms <- list(null = birds ~ 1, cover = birds ~ tree, both = birds ~ tree + burn)
mods <- lapply(forms, glm, data = d, family = poisson)    # fit every model
names(mods)
lapply(mods, function(m) round(coef(m), 2))               # a list of coefficient vectors
```
One line fits the whole candidate set.

## Connections
- **Builds on:** [[Lists in R]], [[Writing Your Own Function]]
- **Leads to:** [[sapply()]], [[map()]], [[Candidate Model Set]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Loops, apply and map]]

## Flashcards

What does lapply(X, FUN) return?
??
A list with FUN applied to each element of X.
++++

How do you fit a list of formulas with the same data?
??
lapply(forms, glm, data = d, family = ...).
++++
