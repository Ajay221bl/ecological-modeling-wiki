---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "P(A and B)"
  - "P(A, B)"
  - "Intersection"
  - "Joint distribution"
status: seedling
---

# Joint Probability

**In one line:** a joint probability is the probability that two things are both true at once.

> [!info] Before this, it helps to know
> [[Event]] (the things) · [[Probability]] (the measure)

## The everyday picture
A two-way table of people by hair colour and eye colour. Each cell is a joint probability: the share of people who are both brown-haired and blue-eyed. The whole table adds up to 1.

## A tiny example
100 sites. A species is present at 40. At those 40, it was detected at 30.
- P(present and detected) = 30/100 = 0.30.
- Equivalently: P(present) × P(detected given present) = 0.4 × 0.75 = 0.30.

## Start from zero
1. **Write it P(A, B) or P(A ∩ B).**
2. **It is never larger than either P(A) or P(B).** Requiring two things is harder than requiring one.
3. **General rule: P(A, B) = P(A | B) × P(B).**
4. **Special case, independence: P(A, B) = P(A) × P(B).**
5. **Order doesn't matter:** P(A, B) = P(B, A).
6. **Why it is central:** a statistical model is a joint probability of all the data and, in Bayesian work, all the parameters too. Fitting is working with that one big joint probability.

## See it
![[Joint marginal conditional.png|700]]
*What to look at:* each cell is a joint probability, the margins are sums of cells, and a conditional rescales one row.

## In R
```r
tab <- matrix(c(0.30, 0.10, 0.00, 0.60), 2, byrow = TRUE, dimnames = list(c("present", "absent"), c("detected", "not detected")))
tab; sum(tab)
tab["present", "detected"]                       # joint
0.4 * 0.75                                       # P(present) x P(detected | present)
```

## In the course
[[Hobbs and Hooten 2015 Ch3]] builds every later result from joint, conditional and marginal probability.

## Common confusions
- **"Joint probability is P(A) × P(B)."** Only when A and B are independent.

## Explain it back
- Why can a joint probability never exceed either single probability?

*Pass test:* you can read a joint probability from a table and compute one from a conditional.

## Connections
- **Builds on:** [[Event]], [[Probability]]
- **Leads to:** [[Conditional Probability]], [[Marginal Probability]], [[Chain Rule of Probability]], [[Independent Events]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]], molecular note [[Joint, Marginal and Conditional Probability]]

## Flashcards

What is a joint probability?
??
The probability that two (or more) events all occur together.
![[Joint marginal conditional.png]]
++++

What is the general formula for P(A, B)?
??
P(A | B) × P(B), which reduces to P(A) × P(B) only under independence.
++++
