---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The law of total probability finds the overall probability of an event by splitting the world into separate cases, finding the event's probability in each case, and adding these up weighted by how likely each case is."
aliases:
  - "Total probability"
  - "Partition rule"
status: seedling
---

# Law of Total Probability

A school's overall pass rate comes from its classes: if 60% of pupils are in class A, where 90% pass, and 40% are in class B, where 50% pass, the school's rate is 0.6 × 0.9 + 0.4 × 0.5 = 0.74. Each class's rate counts in proportion to its size. The **law of total probability** finds the overall probability of an event the same way: split the world into separate cases B₁, B₂, … that do not overlap and cover every possibility ([[Disjoint Events]]), find the event's probability in each case, P(A | Bᵢ) ([[Conditional Probability]]), and add them up weighted by how likely each case is: P(A) = Σ P(A | Bᵢ) P(Bᵢ).

The occupancy example: a site is occupied with probability 0.4, and detection is 0.75 if occupied and 0 if not. So P(detected) = 0.75 × 0.4 + 0 × 0.6 = 0.30. A second example in the code below is the probability of a zero in a zero-inflated Poisson. A count is an extra, structural zero with probability 0.4; otherwise it comes from a Poisson with mean 3, whose chance of zero is e⁻³ ≈ 0.05. So P(zero) = 0.4 × 1 + 0.6 × 0.05 = 0.43.

Each term P(A | Bᵢ) P(Bᵢ) is a joint probability, so the law is just marginalising written with conditionals ([[Marginal Probability]]). It is useful because the conditional pieces are often easy to state when the overall probability is not. That is why it appears in the denominator of [[Bayes' Theorem]], in every [[Mixture Distribution]], and in [[Zero-inflated Model|zero-inflated]] and [[Occupancy|occupancy]] models; Powell and Gale use it to build likelihoods from branching outcomes ([[Powell and Gale 2015 Ch3]], [[Hobbs and Hooten 2015 Ch3]]). The common mistake is to average the conditional probabilities without weighting them by how likely each case is.

```r
p_case <- c(occupied = 0.4, empty = 0.6); p_det <- c(occupied = 0.75, empty = 0)
sum(p_det * p_case)                                   # 0.30
# the zero of a zero-inflated Poisson: an extra zero, or a Poisson zero
0.4 * 1 + 0.6 * dpois(0, 3)
```

## Connections
- **Builds on:** [[Conditional Probability]], [[Marginal Probability]]
- **Leads to:** [[Bayes' Theorem]], [[Mixture Distribution]], [[Zero-inflated Model]], [[Occupancy|Occupancy Model]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

State the law of total probability.
??
P(A) = Σ P(A | Bᵢ) P(Bᵢ) over non-overlapping cases Bᵢ that cover all possibilities.
++++

Where does it appear in Bayes' theorem?
??
In the denominator, the overall probability of the data.
++++
