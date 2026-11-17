---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Vectorized operations"
  - "Vectorised code"
status: seedling
---

# Vectorization

**In one line:** vectorization means applying an operation to a whole vector in one statement, with no explicit loop.

> [!info] Before this, it helps to know
> [[Vectors in R]] (whole columns as objects) · [[For Loop]] (the alternative)

## The everyday picture
A cookie cutter with twelve shapes on one frame. One press, twelve cookies. A loop is cutting them one at a time with a knife: same result, more effort, more chances to slip.

## Start from zero
1. **R's arithmetic and most functions accept whole vectors.**
2. **`x * 2` doubles every element.** No loop needed.
3. **The loop still happens, inside fast compiled code.** *Why it's faster:* R is slow per step, the compiled code underneath is not.
4. **It is also shorter and closer to the maths.** `sum((y - mean(y))^2)` reads like the formula.
5. **Not everything vectorizes.** Steps that depend on previous results still need a loop.

## In R
```r
x <- runif(1e6)
system.time(for (i in seq_along(x)) x[i]^2)   # loop
system.time(x^2)                              # vectorized: far faster
y <- c(2, 4, 6, 8)
sum((y - mean(y))^2)                          # 20, straight from the formula
pmax(c(1, 5, 3), c(4, 2, 6))                  # element-wise maximum: 4 5 6
```

## Common confusions
- **"Vectorized means using apply()."** `apply()` hides a loop but is not what this means. True vectorization is one call on the whole vector.
- **"`max(a, b)` compares element by element."** It gives one overall maximum. `pmax()` is the element-wise version.

## Explain it back
- Why is vectorized code faster in R?
- Give an operation that can't be vectorized.

*Pass test:* you can rewrite a simple loop as one vectorized line.

## Connections
- **Builds on:** [[Vectors in R]], [[For Loop]]
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
