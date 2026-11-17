---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A for loop repeats a block of code once for each item in a list of values."
aliases:
  - "For Loops"
  - "Loop"
  - "Iteration"
status: seedling
---

# For Loop

Dealing cards, you do the same thing for each player around the table: hand over a card. The action is fixed and only the receiver changes. A **for loop** does that in code: it repeats a block once for each item in a sequence of values. `for (i in 1:n) { ... }` runs the code in braces n times, and on each pass `i` takes the next value, so it can be used as an index ([[Subscripts and Indexing]], [[Vectors in R]]).

Results vanish between passes unless you store them, so the pattern is to make an empty container first and fill slot `i` on each pass. The first example below projects a population: `N` starts as six zeros with `N[1] <- 100`, and each pass sets next year to this year times 1.1, giving 100, 110, 121, 133, 146 and 161. This is the kind of problem that genuinely needs a loop, because year t + 1 depends on year t and cannot be computed all at once. The same is true of MCMC samplers, which Hobbs and Hooten write as loops ([[Hobbs and Hooten 2015 Ch7]], [[Metropolis Algorithm]]). The second example, three independent means of random draws, could be a loop too, but because the repeats do not depend on each other, [[lapply()]] or `map()` does it more tidily ([[Loops, apply and map]]).

Loops are not "bad" in R, despite the folklore; they are just unnecessary when a vectorized function already does the job, as `x * 2` does for doubling every element ([[Vectorization]]). Growing an object inside a loop instead of pre-allocating it is slow, and a loop prints nothing on its own: values computed inside are neither shown nor kept unless you store them or call `print()`.

```r
N <- numeric(6); N[1] <- 100            # container, with a starting value
for (t in 1:5) N[t + 1] <- N[t] * 1.1   # each year depends on the last
round(N)                                # 100 110 121 133 146 161
means <- numeric(3)
for (i in 1:3) means[i] <- mean(rnorm(20, 10, 2))   # independent repeats
means
```
The first loop can't be vectorized, because year t + 1 needs year t.

## Connections
- **Builds on:** [[Vectors in R]]
- **Leads to:** [[Vectorization]], [[lapply()]], [[Metropolis Algorithm]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Loops, apply and map]]

## Flashcards

What does a for loop do?
??
It runs the same code once for each value in a sequence.
++++

Why create an empty results vector before a loop?
??
So each pass has a place to store its result. Growing an object inside the loop is slow.
++++

When is a loop truly necessary?
??
When each step depends on the result of the previous step.
++++
