---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "A conditional probability is the probability of one thing given that another is known to be true."
aliases:
  - "P(A | B)"
  - "Probability given"
status: seedling
---

# Conditional Probability

Ask a room "what share of you wear glasses?", then say "now only look at people over 60" and ask again. You have thrown out part of the room and asked the same question inside what is left, and the answer usually changes. A **conditional probability** is the probability of one thing given that another is known to be true, written P(A | B) and read "probability of A given B". Restrict attention to the cases where B is true, then find the share where A is also true. The formula is P(A | B) = P(A, B) / P(B): a [[Joint Probability]] divided by a [[Marginal Probability]].

The occupancy example shows how much the order matters. Of 100 sites, a species is present at 40, detected at 30 of those, and never detected where absent. Then P(detected | present) = 30/40 = 0.75; P(present | detected) = 30/30 = 1; and P(present | not detected) = 10/70 = 0.14. Three different questions, three different answers. The figure and code compute them by restricting a table to one row or one column and rescaling it to add to 1. This is exactly the reasoning behind [[Detection Probability]] in the occupancy lectures.

Conditional probability runs through everything. A regression describes the distribution of Y *given* X; a [[Likelihood]] is the probability of the data given the parameters; a posterior is the probability of the parameters given the data, and [[Bayes' Theorem]] converts one direction into the other. The most common error in probability is to treat P(A | B) and P(B | A) as the same: P(spots | leopard) is 1, but P(leopard | spots) is small. And conditioning means "knowing", not "causing": knowing the grass is wet changes the probability it rained ([[Independent Events]], [[Hobbs and Hooten 2015 Ch3]], [[Joint, Marginal and Conditional Probability]]).

![[Joint marginal conditional.png|700]]
*What to look at:* conditioning on "not detected" means looking only at that column and rescaling it to add to 1.

```r
tab <- matrix(c(30, 10, 0, 60), 2, byrow = TRUE, dimnames = list(c("present", "absent"), c("detected", "not detected")))
tab["present", "detected"] / sum(tab["present", ])              # P(detected | present) = 0.75
tab["present", "not detected"] / sum(tab[, "not detected"])     # P(present | not detected) = 0.143
prop.table(tab, 1); prop.table(tab, 2)                          # condition on rows, then on columns
```

## Connections
- **Builds on:** [[Joint Probability]], [[Marginal Probability]]
- **Leads to:** [[Bayes' Theorem]], [[Likelihood]], [[Independent Events]], [[Detection Probability]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]], molecular note [[Joint, Marginal and Conditional Probability]]

## Flashcards

What is P(A | B)?
??
The probability of A among the cases where B is true: P(A, B) / P(B).
![[Joint marginal conditional.png]]
++++

Is P(A | B) equal to P(B | A)?
??
Not in general. Converting one to the other requires Bayes' theorem.
++++
