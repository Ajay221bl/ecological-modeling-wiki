---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "Two events are disjoint when they cannot both happen."
aliases:
  - "Mutually exclusive events"
  - "Mutually exclusive"
status: seedling
---

# Disjoint Events

A single traffic light can be red or green, never both at once, and seeing red tells you for certain it is not green. Two events are **disjoint**, or mutually exclusive, when they cannot both happen, so their [[Joint Probability]] is 0 ([[Event]]). For one die roll, "roll a 2" and "roll a 5" are disjoint.

Because nothing is counted twice, the probability that one or the other happens is a plain sum: P(A or B) = P(A) + P(B), the simplest form of the addition rule ([[Union of Events]]). So P(2 or 5) = 1/6 + 1/6 = 1/3. The outcomes of a [[Sample Space]] are disjoint by construction, which is why their probabilities add to 1. The same fact is used every time you want the probability of a range of counts: "2 or fewer" means 0, 1 or 2, which are disjoint outcomes, so you add their probabilities from the [[Probability Mass Function]]. The code below does this for a Poisson with mean 3, and the sum matches `ppois(2, 3)`.

Disjoint and independent are nearly opposites, though they are often confused. Independent events tell you nothing about each other; disjoint events are strongly dependent, because knowing A happened tells you for certain that B did not ([[Independent Events]], [[Independent vs Disjoint Events]], [[Hobbs and Hooten 2015 Ch3]]).

```r
sum(dpois(0:2, 3)); ppois(2, 3)      # P(count <= 2) by adding disjoint outcomes
```

## Connections
- **Builds on:** [[Event]]
- **Leads to:** [[Union of Events]], [[Independent Events]], [[Probability Mass Function]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]], molecular note [[Independent vs Disjoint Events]]

## Flashcards

What are disjoint (mutually exclusive) events?
??
Events that cannot occur together, so P(A, B) = 0.
++++

What is P(A or B) for disjoint events?
??
P(A) + P(B).
++++
