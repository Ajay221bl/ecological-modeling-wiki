---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "paste0()"
  - "Concatenating strings"
status: seedling
---

# paste()

**In one line:** `paste()` glues pieces of text and values together into one string.

> [!info] Before this, it helps to know
> [[Strings in R]] (text values) · [[Vectors in R]] (it works element by element)

## Start from zero
1. **`paste(a, b)` joins with a space.**
2. **`paste0(a, b)` joins with nothing between.**
3. **`sep = "_"` sets the separator.**
4. **It is vectorized:** `paste0("site", 1:3)` gives three labels.
5. **`collapse = ", "` squeezes a vector into one string.**
6. **Course uses:** building data URLs, file names, plot labels, and model formulas from text with `as.formula()`.

## In R
```r
paste("plot", 3); paste0("plot", 3)
paste0("site", 1:3)
repo <- "https://example.org/data/"; paste0(repo, "deer.txt")
paste(c("tree", "burn", "year"), collapse = " + ")
as.formula(paste("birds ~", paste(c("tree", "burn"), collapse = " + ")))   # a formula built from text
```

## Common confusions
- **"paste adds numbers."** It turns them into text and joins them.

## Explain it back
- How would you build the formula `y ~ a + b + c` from a vector of names?

*Pass test:* you can assemble a URL and a formula with paste.

## Connections
- **Builds on:** [[Strings in R]]
- **Leads to:** [[Reading Data from a URL]], [[Building All Fixed x Random Combinations]], [[Model Formula Syntax]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is the difference between paste() and paste0()?
??
paste() separates pieces with a space by default. paste0() joins them with nothing between.
++++

How do you turn a text string into a model formula?
??
as.formula("y ~ a + b").
++++
