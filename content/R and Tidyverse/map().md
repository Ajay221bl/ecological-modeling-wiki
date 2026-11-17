---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "map() and apply()"
  - "purrr"
  - "map_dbl()"
status: seedling
---

# map()

**In one line:** `map()` is the tidyverse's version of `lapply()`, with variants that guarantee the type of result you get back.

> [!info] Before this, it helps to know
> [[lapply()]] (the base R equivalent) · [[Tidyverse]] (the package family) · [[Pipe Operator]] (chaining steps)

## The everyday picture
A vending machine with labelled slots. `map_dbl` only ever gives numbers, `map_chr` only text, `map_dfr` only table rows. If the machine can't deliver what the label promises, it stops and tells you instead of handing over a surprise.

## Start from zero
1. **`map(x, f)` applies f to each element and returns a list.**
2. **Suffixes fix the output type.** `map_dbl()` numbers, `map_chr()` text, `map_lgl()` true/false.
3. **A shorthand writes small functions:** `\(m) AIC(m)` or `~ AIC(.x)`.
4. **`map2()` walks two inputs in step.**
5. **Strictness is the point.** *Why:* `sapply()` changes its output shape depending on the data, which breaks code later. A typed `map_` fails immediately and visibly.

## In R
```r
library(purrr)
d <- data.frame(tree = c(10, 20, 30, 40, 50, 15, 35), birds = c(9, 8, 6, 5, 3, 9, 5))
forms <- list(null = birds ~ 1, cover = birds ~ tree)
mods <- map(forms, \(f) glm(f, data = d, family = poisson))
map_dbl(mods, AIC)                         # a named numeric vector, guaranteed
map_chr(mods, \(m) class(m)[1])
map2_dbl(c(1, 2, 3), c(10, 20, 30), \(a, b) a * b)
```

## Common confusions
- **"map() is a different idea from lapply()."** Same idea, more consistent interface.
- **"`.x` is magic."** In the `~` shorthand, `.x` just means "the current element".

## Explain it back
- What does the `_dbl` suffix promise?
- Why is a function that fails loudly useful?

*Pass test:* you can replace an `sapply()` call with the right `map_` variant.

## Connections
- **Builds on:** [[lapply()]], [[Tidyverse]]
- **Leads to:** [[Pipe Operator]], [[Candidate Model Set]]
- **Part of:** [[MOC - R for Ecological Modeling]], molecular note [[Loops, apply and map]]

## Flashcards

What does purrr's map() do?
??
Applies a function to each element of a list or vector and returns a list.
++++

What do map_dbl() and map_chr() guarantee?
??
A numeric vector and a character vector respectively, or an error if that is impossible.
++++
