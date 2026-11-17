---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`seq()` makes a regular sequence of numbers between two ends."
aliases:
  - "Sequences"
  - "seq_len()"
  - "Colon operator"
status: seedling
---

# seq()

**`seq()`** makes a regular sequence of numbers between two ends ([[Vectors in R]]). You either fix the spacing, `seq(from, to, by = step)`, so `seq(0, 1, by = 0.25)` gives 0, 0.25, 0.5, 0.75 and 1, or fix how many values you want, `seq(from, to, length.out = n)`, so `seq(10, 50, length.out = 5)` gives 10, 20, 30, 40 and 50. Give one or the other, not both. For steps of 1 the colon is a shortcut: `3:7`.

Its main use in modeling is an even spread of x values across the observed range for drawing prediction lines. `seq(min(x), max(x), length.out = 100)` spans the data exactly, with no [[Extrapolation]] beyond it, and is usually crossed with groups using [[expand.grid()]]. Its partner [[rep()]] repeats values rather than stepping through them.

Two relatives make safe loop counters. `seq_len(n)` gives 1 to n, and `seq_along(x)` gives one index per element of x. They are safer than `1:n` because when n is 0, `1:0` gives the two values 1 and 0, and a loop meant to run zero times runs twice by mistake; `seq_len(0)` correctly gives nothing.

```r
seq(0, 1, by = 0.25)
seq(10, 50, length.out = 5)
x <- c(12, 47, 30); seq(min(x), max(x), length.out = 4)    # spans the data, no extrapolation
seq_along(x); 1:0; seq_len(0)
```

## Connections
- **Builds on:** [[Vectors in R]]
- **Leads to:** [[rep()]], [[expand.grid()]], [[Extrapolation]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

How do you make 100 evenly spaced values spanning a variable x?
??
seq(min(x), max(x), length.out = 100).
++++
