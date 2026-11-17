---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A vector in R is a sequence of values of one type, and it is the basic building block of every R dataset."
aliases:
  - "Atomic vector"
  - "c()"
status: seedling
---

# Vectors in R

An egg carton is a row of slots, each holding the same kind of thing, each with a position number. You can lift out the egg in slot 3, or do something to all the eggs at once. A **vector** in R is that carton: a sequence of values all of one type, and it is the basic building block of every R dataset. Even a single number is a vector of length one; there are no lone values in R. Each column of a [[Data Frame]] is a vector, and the idea mirrors the maths [[Vector]], an ordered list of numbers.

You build one with `c()`, short for combine. Operations then apply to every element at once: in the code below `mass * 2` doubles each of the four masses, `mass > 20` returns TRUE or FALSE for each, and functions such as `length()` and `mean()` summarise the whole vector (4 values, mean 22). `1:5` is a shortcut for the sequence 1 to 5. Because all elements share one type, mixing types forces a conversion: `c(1, "a", TRUE)` turns everything into text, which is how one stray word can silently turn a column of numbers into text ([[Data Types in R]]).

When two vectors of different lengths meet, R does not complain; it *recycles* the shorter one to match. `c(1, 2, 3, 4) + c(10, 20)` gives 11, 22, 13, 24, which is handy on purpose and a hidden bug by accident. A vector also has no rows or columns; it gains that meaning only inside a data frame or matrix. From here you can pick out parts of a vector ([[Indexing in R]]) and work on whole vectors without loops ([[Vectorization]]).

```r
mass <- c(21, 25, 19, 23)
mass * 2                 # 42 50 38 46
mass > 20                # TRUE TRUE FALSE TRUE
length(mass); mean(mass) # 4 and 22
c(1, "a", TRUE)          # all become text: "1" "a" "TRUE"
1:5                      # shortcut for c(1, 2, 3, 4, 5)
```

## Connections
- **Builds on:** [[Objects and Assignment]], [[Vector]]
- **Leads to:** [[Data Types in R]], [[Indexing in R]], [[Vectorization]], [[Data Frame]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does c() do in R?
??
It combines values into a vector.
++++

What happens if a vector mixes numbers and text?
??
Everything is converted to text, because a vector holds one type only.
++++

What is recycling?
??
When vectors differ in length, R repeats the shorter one to match, often silently.
++++
