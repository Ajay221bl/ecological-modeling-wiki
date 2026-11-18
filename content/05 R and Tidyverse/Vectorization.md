---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Vectorization means applying an operation to a whole vector in one statement, with no explicit loop."
aliases:
  - "Vectorized operations"
  - "Vectorised code"
status: seedling
---

# Vectorization

A cookie cutter with twelve shapes on one frame makes twelve cookies in a single press; cutting them one at a time with a knife gives the same result with more effort and more chances to slip. **Vectorization** means applying an operation to a whole vector in one statement, with no explicit loop ([[Vectors in R]]). R's arithmetic and most of its functions accept whole vectors, so `x * 2` doubles every element and `sqrt(x)` takes every [[Square Root|square root]].

There is still a loop, but it runs inside fast compiled code underneath R rather than in R itself, where each step is slow. The timing in the code below squares a million numbers both ways, and the vectorized `x^2` is far faster than the explicit [[For Loop]]. Vectorized code is also shorter and reads like the maths: `sum((y - mean(y))^2)` is the formula for a [[Sum of Squares|sum of squares]], giving 20 for 2, 4, 6 and 8. Creating new columns in the tidyverse relies on the same idea ([[mutate()]]).

Not everything vectorizes. Steps that depend on the previous result, such as a population projected year by year, still need a loop. And vectorization is not the same as using `apply()` or [[lapply()]], which hide a loop behind a function call but still call the function once per element; true vectorization is a single call on the whole vector. One more trap: `max(a, b)` returns one overall maximum, while the element-by-element version is `pmax()`, which gives 4, 5, 6 in the example ([[Loops, apply and map]]).

```r
x <- runif(1e6)
system.time(for (i in seq_along(x)) x[i]^2)   # loop
system.time(x^2)                              # vectorized: far faster
y <- c(2, 4, 6, 8)
sum((y - mean(y))^2)                          # 20, straight from the formula
pmax(c(1, 5, 3), c(4, 2, 6))                  # element-wise maximum: 4 5 6
```

## Connections
- **Builds on:** [[Vectors in R]], [[For Loop]], [[Square Root]], [[Sum of Squares]]
- **Leads to:** [[mutate()]], [[lapply()]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Loops, apply and map]]

## Flashcards

What is vectorization?
??
Operating on a whole vector in one statement instead of looping over elements.
++++

Why is vectorized code faster in R?
??
The looping runs in compiled code inside R, not in slow interpreted steps.
++++
