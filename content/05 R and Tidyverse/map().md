---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`map()` is the tidyverse's version of `lapply()`, with variants that guarantee the type of result you get back."
aliases:
  - "map() and apply()"
  - "purrr"
  - "map_dbl()"
status: seedling
---

# map()

A vending machine with labelled slots: `map_dbl` only ever gives numbers, `map_chr` only text. If the machine cannot deliver what the label promises, it stops and tells you instead of handing over a surprise. **`map()`**, from the tidyverse package purrr, is the tidyverse's version of [[lapply()]]: `map(x, f)` applies f to each element of x and returns a list ([[Tidyverse]]). Its variants guarantee the type of the result: `map_dbl()` returns numbers, `map_chr()` text and `map_lgl()` TRUE/FALSE values.

Small functions can be written in a shorthand: `\(m) AIC(m)` means "a function of m that returns AIC(m)", and the older form `~ AIC(.x)` means the same, where `.x` simply stands for the current element. In the code below, `map()` fits a [[Poisson Regression|Poisson GLM]] to each formula, `map_dbl(mods, AIC)` returns a named numeric vector of AICs, and `map_chr()` returns each model's class as text. `map2()` walks two inputs in step, so `map2_dbl(c(1, 2, 3), c(10, 20, 30), \(a, b) a * b)` gives 10, 40, 90.

The strictness is the point. [[sapply()]] changes its output shape depending on the data, which can break code far from the cause; a typed `map_` function fails immediately and visibly when a result is not what was promised. Otherwise it is the same idea as `lapply()` with a more consistent interface, and it fits naturally into chains of steps built with the [[Pipe|Pipe Operator]]. Fitting every model in a [[Candidate Model Set]] is a typical use ([[Loops, apply and map]]).

```r
library(purrr)
d <- data.frame(tree = c(10, 20, 30, 40, 50, 15, 35), birds = c(9, 8, 6, 5, 3, 9, 5))
forms <- list(null = birds ~ 1, cover = birds ~ tree)
mods <- map(forms, \(f) glm(f, data = d, family = poisson))
map_dbl(mods, AIC)                         # a named numeric vector, guaranteed
map_chr(mods, \(m) class(m)[1])
map2_dbl(c(1, 2, 3), c(10, 20, 30), \(a, b) a * b)
```

## Connections
- **Builds on:** [[lapply()]], [[Tidyverse]]
- **Leads to:** [[Pipe|Pipe Operator]], [[Candidate Model Set]], [[Poisson Regression]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Loops, apply and map]]

## Flashcards

What does purrr's map() do?
??
Applies a function to each element of a list or vector and returns a list.
++++

What do map_dbl() and map_chr() guarantee?
??
A numeric vector and a character vector respectively, or an error if that is impossible.
++++
