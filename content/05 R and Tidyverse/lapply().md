---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "List apply"
status: seedling
---

# lapply()

**In one line:** `lapply()` runs a function on every element of a list or vector and returns the results as a list.

> [!info] Before this, it helps to know
> [[Lists in R]] (what it walks through and returns) · [[Writing Your Own Function]] (what it applies)

## The everyday picture
A stamp-and-conveyor line. Items roll past, each gets the same stamp, and they come off the end in the same order they went on.

## Start from zero
1. **`lapply(X, FUN)`.** X is a list or vector, FUN a function.
2. **FUN is called once per element.**
3. **The output is always a list, same length and names as X.** *Why:* results such as models can be any shape, and only a list can hold them.
4. **Extra arguments pass through:** `lapply(forms, glm, data = d, family = poisson)`.
5. **Write the function inline when needed:** `function(m) coef(m)[2]`.

## In R
```r
d <- data.frame(tree = c(10, 20, 30, 40, 50, 15, 35), burn = c(1, 1, 0, 0, 0, 1, 0), birds = c(9, 8, 6, 5, 3, 9, 5))
forms <- list(null = birds ~ 1, cover = birds ~ tree, both = birds ~ tree + burn)
mods <- lapply(forms, glm, data = d, family = poisson)    # fit every model
names(mods)
lapply(mods, function(m) round(coef(m), 2))               # a list of coefficient vectors
```
One line fits the whole candidate set.

## In the course
The model selection lab fits its model list with `lapply(mods, glm, ...)` ([[Course Website]]).

## Common confusions
- **"lapply changes X."** It returns a new list. Assign it.
- **"It returns a vector."** Always a list. Use `sapply()` if you want it simplified.

## Explain it back
- What does `lapply()` always return?
- How do you pass `data = d` to the function being applied?

*Pass test:* you can fit a list of formulas with one `lapply()` call.

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
