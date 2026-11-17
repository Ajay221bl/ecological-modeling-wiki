---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Repeat"
  - "Replicating values"
status: seedling
---

# rep()

**In one line:** `rep()` repeats values, either the whole set several times or each value several times.

> [!info] Before this, it helps to know
> [[Vectors in R]] (what it returns)

## Start from zero
1. **`rep(x, times = n)`** repeats the whole vector: A B A B.
2. **`rep(x, each = n)`** repeats each element: A A B B.
3. **Why it matters:** it builds group labels for simulated or designed data, such as 10 sites with 5 visits each.
4. **Combine both** for nested layouts.

## In R
```r
rep(c("A", "B"), times = 3)       # A B A B A B
rep(c("A", "B"), each = 3)        # A A A B B B
site  <- rep(1:3, each = 4)       # 3 sites, 4 visits each
visit <- rep(1:4, times = 3)
data.frame(site, visit)[1:6, ]
```

## Common confusions
- **"times and each are the same."** They give different orders, and mixing them up scrambles a design.

## Explain it back
- Write the labels for 5 plots each measured in 3 years.

*Pass test:* you can build site and visit labels for a balanced design.

## Connections
- **Builds on:** [[Vectors in R]]
- **Leads to:** [[seq()]], [[Simulating Data]], [[Grouping Factor]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is the difference between rep(x, times = 2) and rep(x, each = 2)?
??
times repeats the whole vector (A B A B). each repeats every element in place (A A B B).
++++
