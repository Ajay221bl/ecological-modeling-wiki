---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Sequences"
  - "seq_len()"
  - "Colon operator"
status: seedling
---

# seq()

**In one line:** `seq()` makes a regular sequence of numbers between two ends.

> [!info] Before this, it helps to know
> [[Vectors in R]] (what it returns)

## Start from zero
1. **`seq(from, to, by = step)`** fixes the spacing.
2. **`seq(from, to, length.out = n)`** fixes how many values.
3. **`a:b`** is the shortcut for steps of 1.
4. **`seq_len(n)` and `seq_along(x)`** are safe loop counters. *Why safer than `1:n`:* when n is 0, `1:0` gives 1, 0 and the loop runs twice by mistake.
5. **Main use:** an even spread of x values across the observed range, for prediction lines.

## In R
```r
seq(0, 1, by = 0.25)
seq(10, 50, length.out = 5)
x <- c(12, 47, 30); seq(min(x), max(x), length.out = 4)    # spans the data, no extrapolation
seq_along(x); 1:0; seq_len(0)
```

## Common confusions
- **"length.out and by together."** Give one or the other.

## Explain it back
- How do you get 100 evenly spaced values across a predictor's range?

*Pass test:* you can make a prediction sequence that stays inside the data.

## Connections
- **Builds on:** [[Vectors in R]]
- **Leads to:** [[rep()]], [[expand.grid()]], [[Extrapolation]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

How do you make 100 evenly spaced values spanning a variable x?
??
seq(min(x), max(x), length.out = 100).
++++
