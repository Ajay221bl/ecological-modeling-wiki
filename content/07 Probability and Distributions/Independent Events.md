---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "Two events are independent when knowing that one happened doesn't change the probability of the other."
aliases:
  - "Independence of events"
  - "Statistical independence"
status: seedling
---

# Independent Events

Two coins flipped in different rooms: learning that the first came up heads tells you nothing about the second. Compare two cards dealt from one deck, where learning the first is an ace makes an ace less likely for the second. Two events are **independent** when knowing that one happened does not change the probability of the other: P(A | B) = P(A) ([[Conditional Probability]]). The consequence is the multiplication rule, P(A, B) = P(A) × P(B) ([[Joint Probability]]), which extends to any number of independent events: multiply them all. Two nests far apart, each surviving with probability 0.6, both survive with probability 0.6 × 0.6 = 0.36.

Independence is an assumption about the world, argued from how things work, not read from a formula. The second simulation in the code below shows how it fails. A shared bad or good year hits both nests: in good years each survives with probability 0.9, in bad years 0.3. Each nest still survives 60% of the time overall, but the probability that both survive is 0.45, not 0.36, because the nests rise and fall together.

This is the workhorse of statistics because the [[Likelihood]] of a dataset is the product of the probabilities of the individual observations, and that product is valid only if the observations are independent given the model. When they share causes the model lacks, the product overstates the evidence; that is the problem of [[Independence of Observations]]. Often the right statement is [[Conditional Independence]], independence once a shared cause is known. Do not confuse independent with disjoint: [[Disjoint Events]] cannot both happen, so knowing one happened tells you a lot about the other, the opposite of independence ([[Independent vs Disjoint Events]], [[Hobbs and Hooten 2015 Ch3]]).

```r
set.seed(3)
a <- rbinom(1e5, 1, 0.6); b <- rbinom(1e5, 1, 0.6)        # independent nests
c(joint = mean(a & b), product = mean(a) * mean(b))       # agree: 0.36
shared <- rbinom(1e5, 1, 0.5)                             # a shared bad year hits both
a2 <- rbinom(1e5, 1, ifelse(shared == 1, 0.9, 0.3)); b2 <- rbinom(1e5, 1, ifelse(shared == 1, 0.9, 0.3))
c(joint = mean(a2 & b2), product = mean(a2) * mean(b2))   # joint 0.45, product 0.36: not independent
```

## Connections
- **Builds on:** [[Conditional Probability]], [[Joint Probability]]
- **Leads to:** [[Independence of Observations]], [[Likelihood]], [[Disjoint Events]], [[Conditional Independence]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]], molecular note [[Independent vs Disjoint Events]]

## Flashcards

When are two events independent?
??
When P(A | B) = P(A), equivalently P(A, B) = P(A) × P(B).
++++

Why does independence matter for likelihood?
??
It lets the probability of the whole dataset be written as the product of each observation's probability.
++++
