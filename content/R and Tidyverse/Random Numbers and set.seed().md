---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "set.seed()"
  - "Random number generator"
  - "Seed"
status: seedling
---

# Random Numbers and set.seed()

**In one line:** R makes "random" numbers from a formula that starts at a seed, and `set.seed()` fixes that start so the same numbers come out every time.

> [!info] Before this, it helps to know
> [[Randomness]] (unpredictable single outcomes) · [[Reproducibility]] (getting the same result again)

## The everyday picture
A shuffled deck that you photograph. Anyone who arranges their deck to match the photo will deal exactly the hands you dealt. The seed is the photo.

## Start from zero
1. **Computers can't be truly random.** They run a formula whose output looks random.
2. **The formula needs a starting number, the seed.**
3. **Same seed, same sequence.** `set.seed(42)` then `rnorm(3)` gives the same three values on any computer.
4. **Why you want that:** simulations, bootstraps, cross-validation and MCMC all use random numbers, and a result you can't reproduce can't be checked.
5. **Set it once, near the top.** Resetting it before every call repeats the same draws.
6. **The number itself means nothing.** Don't try seeds until the result looks good.

## In R
```r
set.seed(42); rnorm(3)
set.seed(42); rnorm(3)        # identical
rnorm(3)                      # different: the sequence has moved on
set.seed(1); sample(1:10, 4)  # random sampling uses the same generator
```

## Common confusions
- **"A seed makes results less random."** The numbers are as random-looking as ever. They are just repeatable.
- **"brm() ignores set.seed()."** Stan has its own generator. Pass `seed =` to `brm()`.

## Explain it back
- Why set a seed in a script that bootstraps?

*Pass test:* you can make a simulation give the same answer twice.

## Connections
- **Builds on:** [[Randomness]]
- **Leads to:** [[Simulating Data]], [[Distribution Functions in R]], [[Bootstrap]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

What does set.seed() do?
??
Fixes the starting point of R's random number generator so the same "random" values are produced again.
++++

Why set a seed?
??
So analyses that use random numbers (simulation, bootstrap, MCMC) can be reproduced exactly.
++++
