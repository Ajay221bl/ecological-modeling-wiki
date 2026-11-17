---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The sample space is the complete list of outcomes that could possibly occur in a random process."
aliases:
  - "Outcome space"
  - "Set of possible outcomes"
status: seedling
---

# Sample Space

Before you order, a menu lists everything that could arrive at your table: nothing off the menu can come, and exactly one thing will. The **sample space** is the menu of a random process, the complete list of outcomes that could possibly occur. One coin has the sample space {heads, tails}; one die, {1, 2, 3, 4, 5, 6}; the number of eggs hatching in a clutch of 4, {0, 1, 2, 3, 4}; a bird's mass, every positive number. The outcomes must not overlap, together they must cover everything, and the total [[Probability]] spread over them is 1.

A sample space can be finite, like the die; endless but listable, like counts 0, 1, 2 and so on; or a continuum, like mass. For two dice it has 6 × 6 = 36 equally likely outcomes, and the code below lists them and finds that 6 of the 36 add to 7, so P(total is 7) = 6/36. Statements such as "at least one egg hatches" pick out parts of the sample space, called [[Event|events]].

Defining the sample space is not pedantry, because a probability model must put zero probability on impossible values. A model that allows negative counts, or proportions above 1, has the wrong sample space. For a distribution, the values it can produce are called its [[Support of a Distribution|support]], and matching the support to the data is the first rule of choosing one ([[Random Variable]]). Do not confuse the sample space with the sample: the sample space is the set of possibilities, while the sample is the data you collected.

```r
S <- expand.grid(die1 = 1:6, die2 = 1:6); nrow(S)        # 36 equally likely outcomes for two dice
mean(S$die1 + S$die2 == 7)                               # P(total is 7) = 6/36
```

## Connections
- **Builds on:** [[Probability]]
- **Leads to:** [[Event]], [[Support of a Distribution]], [[Random Variable]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is a sample space?
??
The set of all possible outcomes of a random process.
++++
