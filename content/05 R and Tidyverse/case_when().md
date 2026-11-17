---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "dplyr case_when"
  - "Recoding values"
status: seedling
---

# case_when()

**In one line:** `case_when()` assigns values by checking a list of conditions in order and using the first one that is true.

> [!info] Before this, it helps to know
> [[If-Else]] (two-way choice) · [[mutate()]] (where it is used)

## The everyday picture
A sorting hat with a rulebook. Read the rules from the top: the first rule a row satisfies decides its label, and later rules are never consulted.

## Start from zero
1. **Each line is `condition ~ value`.**
2. **Conditions are tested top to bottom.** First match wins.
3. **A final `.default = ` or `TRUE ~` catches everything else.** *Why needed:* unmatched rows become `NA`.
4. **All values must be one type.**
5. **Use it to build categories from numbers** or to tidy messy labels.

## In R
```r
library(dplyr)
d <- data.frame(ysf = c(0, 1, 4, 12, 30, NA))          # years since fire
d |> mutate(fire_class = case_when(
  is.na(ysf) ~ "unknown",
  ysf <= 1   ~ "recent",
  ysf <= 10  ~ "intermediate",
  .default   = "old"))
```

## Common confusions
- **"Order doesn't matter."** Put the most specific rule first. With `ysf <= 10` first, "recent" would never be assigned.

## Explain it back
- Why must the NA rule come first here?

*Pass test:* you can turn a numeric column into three ordered classes.

## Connections
- **Builds on:** [[If-Else]], [[mutate()]]
- **Leads to:** [[Factors in R]], [[Fire History Variables|Burn Status]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

How does case_when() choose a value?
??
It tests conditions in order and uses the value of the first one that is TRUE.
++++

What happens to rows matching no condition in case_when()?
??
They get NA unless a default is given.
++++
