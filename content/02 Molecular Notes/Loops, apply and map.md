---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - r
aliases:
  - "For loop vs apply vs map"
  - "Iteration in R"
  - "Repeating code in R"
status: seedling
---

# Loops, apply and map

> [!summary] In plain words
> a for loop, the apply family (`sapply`, `lapply`) and purrr's `map()` all repeat the same code over many elements; vectorised functions do it in one call, loops are the most explicit, and `apply` and `map` are shorter and return results in a predictable shape.

## The question
Should I write a for loop, use sapply, or use map?

## Built from
- [[For Loop]] and [[Vectorization]].
- [[apply()]], [[lapply()]], [[sapply()]].
- [[map()]] and [[Writing Your Own Function]].

## The reasoning, step by step
1. **First ask if a vectorised function exists:** `x^2`, `log(x)`, `rowSums()` need no loop.
2. **For loop:** clearest when each step depends on the previous one (population projection, MCMC). Pre-allocate the output.
3. **`lapply()` returns a list; `sapply()` simplifies to a vector or matrix when it can.**
4. **`map()` returns a list; `map_dbl()`, `map_chr()`, `map_dfr()` guarantee the output type,** so surprises raise errors instead of silently changing shape.
5. **All give the same answer;** speed differences are small once a loop pre-allocates.

## So in practice
Use loops for sequential processes and simulations; use `map_*()` or `sapply()` to apply a function to many groups, files or models.

## In R
```r
sizes <- c(10, 50, 100)
out <- numeric(length(sizes)); for (i in seq_along(sizes)) out[i] <- mean(rnorm(sizes[i], 5, 0)); out
sapply(sizes, function(n) mean(rnorm(n, 5, 0)))
purrr::map_dbl(sizes, \(n) mean(rnorm(n, 5, 0)))
```

## What would go wrong otherwise
Growing a vector inside a loop with `out <- c(out, new)`, which gets slow for long loops.

## Explain it back
- When does a for loop make more sense than `map()`?

*Pass test:* you can write the same iteration three ways.

## Connections
- **Related:** [[Console vs Script]], [[Data Frame vs Tibble]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

lapply vs sapply vs map_dbl outputs?
??
List; simplified vector or matrix; guaranteed numeric vector.
++++

When is a for loop the natural choice?
??
When each step depends on the previous one.
++++
