---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Independence of events"
  - "Statistical independence"
status: seedling
---

# Independent Events

**In one line:** two events are independent when knowing that one happened doesn't change the probability of the other.

> [!info] Before this, it helps to know
> [[Conditional Probability]] (the definition uses it) · [[Joint Probability]] (which simplifies)

## The everyday picture
Two coins flipped in different rooms. Learning that the first came up heads tells you nothing about the second. Compare with two cards dealt from one deck: learning the first is an ace makes an ace less likely for the second.

## A tiny example
Two nests far apart, each surviving with probability 0.6.
- P(both survive) = 0.6 × 0.6 = 0.36.
- If they shared a predator's territory, both failing together would be more common and this product would be wrong.

## Start from zero
1. **Definition: P(A | B) = P(A).** Knowing B is irrelevant.
2. **Consequence: P(A, B) = P(A) × P(B).** The multiplication rule.
3. **It works for any number of independent events:** multiply them all.
4. **Why this is the workhorse of statistics:** the likelihood of a dataset is the product of the probabilities of the individual observations. That product is valid only if the observations are independent given the model.
5. **Independence is an assumption about the world,** to be argued from the design. It can't be read from a formula.

## In R
```r
set.seed(3)
a <- rbinom(1e5, 1, 0.6); b <- rbinom(1e5, 1, 0.6)        # independent nests
c(joint = mean(a & b), product = mean(a) * mean(b))       # agree: 0.36
shared <- rbinom(1e5, 1, 0.5)                             # a shared bad year hits both
a2 <- rbinom(1e5, 1, ifelse(shared == 1, 0.9, 0.3)); b2 <- rbinom(1e5, 1, ifelse(shared == 1, 0.9, 0.3))
c(joint = mean(a2 & b2), product = mean(a2) * mean(b2))   # joint 0.45, product 0.36: not independent
```

## In the course
[[Hobbs and Hooten 2015 Ch3]]. The idea behind [[Independence of Observations]].

## Common confusions
- **"Independent means they can't both happen."** That is disjoint, the opposite situation.

## Explain it back
- When may you multiply probabilities?

*Pass test:* you can test independence by comparing a joint probability with the product.

## Connections
- **Builds on:** [[Conditional Probability]], [[Joint Probability]]
- **Leads to:** [[Independence of Observations]], [[Likelihood]], [[Disjoint Events]], [[Conditional Independence]]
- **Part of:** [[MOC - Probability and Distributions]], molecular note [[Independent vs Disjoint Events]]

## Flashcards

When are two events independent?
??
When P(A | B) = P(A), equivalently P(A, B) = P(A) × P(B).
++++

Why does independence matter for likelihood?
??
It lets the probability of the whole dataset be written as the product of each observation's probability.
++++
