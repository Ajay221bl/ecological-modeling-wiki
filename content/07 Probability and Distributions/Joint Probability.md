---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "A joint probability is the probability that two things are both true at once."
aliases:
  - "P(A and B)"
  - "P(A, B)"
  - "Intersection"
  - "Joint distribution"
status: seedling
---

# Joint Probability

A two-way table of people by hair colour and eye colour has a cell for brown hair and blue eyes, and the share of people in that cell is a joint probability; the whole table adds to 1. A **joint probability** is the probability that two things are both true at once, written P(A, B) or P(A ∩ B) ([[Event]], [[Probability]]). It is never larger than either P(A) or P(B), because requiring two things is harder than requiring one, and the order does not matter: P(A, B) = P(B, A).

An example. Of 100 sites, a species is present at 40, and at 30 of those it was detected. So P(present and detected) = 30/100 = 0.30. The same number comes from the general rule P(A, B) = P(A | B) × P(B), here P(present) × P(detected given present) = 0.4 × 0.75 = 0.30, where the bar means "given" ([[Conditional Probability]]). Only in the special case of [[Independent Events]] does this simplify to P(A) × P(B). The figure and code lay the site example out as a table: each cell is a joint probability, the row and column totals are [[Marginal Probability|marginal probabilities]], and a conditional probability rescales one row.

Joint probability is central because a [[Statistical Model|statistical model]] is a joint probability of all the data, and in Bayesian work of all the parameters too; [[Parameter Estimation|fitting a model]] is working with that one big joint probability. Breaking it into conditional pieces is the [[Chain Rule of Probability]], which Hobbs and Hooten use to build every later result ([[Hobbs and Hooten 2015 Ch3]], [[Joint, Marginal and Conditional Probability]]). The common mistake is to assume joint probability is always P(A) × P(B); that holds only under [[Independence of Observations|independence]].

![[Joint marginal conditional.png|700]]
*What to look at:* each cell is a joint probability, the margins are sums of cells, and a conditional rescales one row.

```r
tab <- matrix(c(0.30, 0.10, 0.00, 0.60), 2, byrow = TRUE, dimnames = list(c("present", "absent"), c("detected", "not detected")))
tab; sum(tab)
tab["present", "detected"]                       # joint
0.4 * 0.75                                       # P(present) x P(detected | present)
```

## Connections
- **Builds on:** [[Event]], [[Probability]], [[Statistical Model]], [[Parameter Estimation]], [[Independence of Observations]]
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
