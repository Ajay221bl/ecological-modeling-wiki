---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Outcome space"
  - "Set of possible outcomes"
status: seedling
---

# Sample Space

**In one line:** the sample space is the complete list of outcomes that could possibly occur in a random process.

> [!info] Before this, it helps to know
> [[Probability]] (which is spread over it)

## The everyday picture
The menu. Before you order, the menu lists everything that could arrive at your table. Nothing off the menu can come, and exactly one thing will.

## A tiny example
- One coin: {heads, tails}.
- One die: {1, 2, 3, 4, 5, 6}.
- Eggs hatching in a clutch of 4: {0, 1, 2, 3, 4}.
- A bird's mass: every positive number.

## Start from zero
1. **List every outcome that could happen.**
2. **Outcomes must not overlap** and together must cover everything.
3. **Total probability over the sample space is 1.**
4. **It can be finite, countably endless (0, 1, 2, …) or a continuum.**
5. **Why bother defining it:** a probability model must put zero probability on impossible values. A model that allows negative counts or proportions above 1 has the wrong sample space.

## In R
```r
S <- expand.grid(die1 = 1:6, die2 = 1:6); nrow(S)        # 36 equally likely outcomes for two dice
mean(S$die1 + S$die2 == 7)                               # P(total is 7) = 6/36
```

## Common confusions
- **"Sample space is the sample."** It is the set of possibilities, not the data you collected.

## Explain it back
- What is the sample space for the number of nests that fledge out of 10?

*Pass test:* you can write the sample space for a simple study.

## Connections
- **Builds on:** [[Probability]]
- **Leads to:** [[Event]], [[Support of a Distribution]], [[Random Variable]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What is a sample space?
??
The set of all possible outcomes of a random process.
++++
