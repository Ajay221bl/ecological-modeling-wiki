---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Atomic vector"
  - "c()"
status: seedling
---

# Vectors in R

**In one line:** a vector in R is a sequence of values of one type, and it is the basic building block of every R dataset.

> [!info] Before this, it helps to know
> [[Objects and Assignment]] (storing things) · [[Vector]] (the maths idea)

## The everyday picture
An egg carton. A row of slots, each holding the same kind of thing, each with a position number. You can lift out slot 3, or do something to all the eggs at once.

## Start from zero
1. **Build one with `c()`,** short for combine.
2. **All elements share one type.** *Why:* that lets R do arithmetic on the whole thing at once. Mix numbers with text and everything becomes text.
3. **Operations apply to every element.** `x * 2` doubles each.
4. **Functions summarise them.** `mean(x)`, `length(x)`, `sum(x)`.
5. **A single number is a vector of length 1.** There are no lone values in R.
6. **A column of a data frame is a vector.**

## In R
```r
mass <- c(21, 25, 19, 23)
mass * 2                 # 42 50 38 46
mass > 20                # TRUE TRUE FALSE TRUE
length(mass); mean(mass) # 4 and 22
c(1, "a", TRUE)          # all become text: "1" "a" "TRUE"
1:5                      # shortcut for c(1, 2, 3, 4, 5)
```

## Common confusions
- **"Vectors of different lengths give an error."** R silently recycles the shorter one, which can hide mistakes. `c(1, 2, 3, 4) + c(10, 20)` gives 11 22 13 24.
- **"c() makes a column."** A vector has no rows or columns. It gains that meaning inside a data frame or matrix.

## Explain it back
- What happens when you combine numbers and text in one vector?
- What does `mass > 20` return?

*Pass test:* you can build a vector and predict the result of arithmetic on it.

## Connections
- **Builds on:** [[Objects and Assignment]], [[Vector]]
- **Leads to:** [[Data Types in R]], [[Indexing in R]], [[Vectorization]], [[Data Frame]]
- **Part of:** [[MOC - R for Ecological Modeling]]

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
