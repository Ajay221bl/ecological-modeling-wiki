---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "R makes \"random\" numbers from a formula that starts at a seed, and `set.seed()` fixes that start so the same numbers come out every time."
aliases:
  - "set.seed()"
  - "Random number generator"
  - "Seed"
status: seedling
---

# Random Numbers and set.seed()

Photograph a shuffled deck, and anyone who arranges their deck to match the photo will deal exactly the hands you dealt. Computers cannot be truly random: they produce **random numbers** from a formula whose output looks random but is completely determined by its starting value, the *seed* ([[Randomness]]). **`set.seed()`** fixes that start, so the same "random" numbers come out every time, on any computer. In the example below, `set.seed(42)` followed by `rnorm(3)` gives the same three values both times; a third call without resetting gives new values, because the sequence has moved on.

This matters because so much of modeling uses random numbers: simulations, bootstraps, cross-validation and MCMC ([[Simulating Data]], [[Bootstrap]]). A result you cannot reproduce cannot be checked, so a script that uses randomness should set a seed once, near the top ([[Reproducibility]]). Setting it before every call is a mistake, because each call would then repeat the same draws instead of continuing the sequence. Random sampling, such as `sample(1:10, 4)`, uses the same generator, as do the `r` functions for every distribution ([[Distribution Functions in R]]).

A seed does not make results "less random"; the numbers look as random as ever, they are just repeatable. The number itself means nothing, and trying seeds until a result looks good is a quiet form of cheating. One exception to know: Stan, used by brms, has its own generator and ignores R's seed, so pass `seed =` to `brm()` instead.

```r
set.seed(42); rnorm(3)
set.seed(42); rnorm(3)        # identical
rnorm(3)                      # different: the sequence has moved on
set.seed(1); sample(1:10, 4)  # random sampling uses the same generator
```

## Connections
- **Builds on:** [[Randomness]]
- **Leads to:** [[Simulating Data]], [[Distribution Functions in R]], [[Bootstrap]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does set.seed() do?
??
Fixes the starting point of R's random number generator so the same "random" values are produced again.
++++

Why set a seed?
??
So analyses that use random numbers (simulation, bootstrap, MCMC) can be reproduced exactly.
++++
