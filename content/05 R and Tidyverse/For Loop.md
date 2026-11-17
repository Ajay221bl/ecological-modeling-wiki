---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "For Loops"
  - "Loop"
  - "Iteration"
status: seedling
---

# For Loop

**In one line:** a for loop repeats a block of code once for each item in a list of values.

> [!info] Before this, it helps to know
> [[Vectors in R]] (the items to step through) · [[Subscripts and Indexing]] (the index i)

## The everyday picture
Dealing cards. For each player around the table, do the same thing: hand over a card. The action is fixed. Only who receives it changes.

## Start from zero
1. **`for (i in 1:n) { ... }` runs the braces n times.**
2. **`i` takes the next value each pass.**
3. **Make an empty container first, then fill slot `i`.** *Why:* results vanish between passes unless you store them, and growing an object each pass is slow.
4. **Loops suit steps that depend on the previous one.** Population projections and MCMC are natural loops.
5. **For independent repeats, `lapply()` or `map()` is tidier.**

## In R
```r
N <- numeric(6); N[1] <- 100            # container, with a starting value
for (t in 1:5) N[t + 1] <- N[t] * 1.1   # each year depends on the last
round(N)                                # 100 110 121 133 146 161
means <- numeric(3)
for (i in 1:3) means[i] <- mean(rnorm(20, 10, 2))   # independent repeats
means
```
The first loop can't be vectorized, because year t + 1 needs year t.

## In the course
The crash course loops through a list of models ([[Course Website]]). Hobbs and Hooten write MCMC samplers as loops ([[Hobbs and Hooten 2015 Ch7]]).

## Common confusions
- **"Loops are bad in R."** They are fine. They are just unnecessary when a vectorized function exists.
- **"The loop ran but gave nothing."** Values aren't printed or kept inside a loop unless you store or `print()` them.

## Explain it back
- Why create the results container before the loop?
- Which kind of problem truly needs a loop?

*Pass test:* you can write a loop that fills a vector.

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
