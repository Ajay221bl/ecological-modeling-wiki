---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - r
aliases:
  - "data.frame vs tibble"
  - "Tibbles vs data frames"
status: seedling
---

# Data Frame vs Tibble

> [!summary] In plain words
> a tibble is the tidyverse's version of a data frame: it prints only what fits on screen with column types, never turns strings into factors, does not partially match column names, and always returns a tibble when you subset columns with single brackets.

## The question
What is the difference between a data frame and a tibble?

## Built from
- [[Data Frame]] and [[Tibble]].
- [[Indexing in R]].
- [[Tidyverse]].

## The reasoning, step by step
1. **Printing:** a tibble shows the first 10 rows and the column types; a data frame prints everything.
2. **Subsetting:** `tb[, 1]` stays a tibble; `df[, 1]` drops to a vector.
3. **Partial matching:** `df$sp` can silently return `df$species`; `tb$sp` gives NULL with a warning.
4. **Strings:** tibbles never convert characters to factors (data frames have not done so by default since R 4.0).
5. **Row names:** tibbles drop them; use a column instead.
6. **Everything else works the same,** and most functions accept both; convert with `as_tibble()` or `as.data.frame()`.

## So in practice
Use tibbles in tidyverse pipelines; if an older function misbehaves, convert with `as.data.frame()`.

## In R
```r
df <- data.frame(species = c("a", "b"), n = 1:2); tb <- tibble::as_tibble(df)
c(df_col = class(df[, 1]), tb_col = class(tb[, 1])[1])
df$sp
```

## What would go wrong otherwise
Expecting `tb[, "n"]` to give a numeric vector to `mean()`; use `tb$n` or `tb[["n"]]`.

## Explain it back
- What does `tb[, 1]` return?

*Pass test:* you can predict how each subsetting call behaves.

## Connections
- **Related:** [[Wide vs Long Data]], [[Loops, apply and map]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

Name two behaviour differences between tibbles and data frames.
??
Tibbles keep single-bracket column subsets as tibbles; they do not partially match names with $ (also: compact printing, no row names).
++++
