---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Total probability"
  - "Partition rule"
status: seedling
---

# Law of Total Probability

**In one line:** the law of total probability finds the overall probability of an event by splitting the world into separate cases, finding the event's probability in each case, and adding these up weighted by how likely each case is.

> [!info] Before this, it helps to know
> [[Conditional Probability]] (probability within each case) · [[Marginal Probability]] (the result) · [[Disjoint Events]] (the cases)

## The everyday picture
A school's overall pass rate. If 60% of pupils are in class A where 90% pass, and 40% are in class B where 50% pass, the school's rate is 0.6 × 0.9 + 0.4 × 0.5 = 0.74. Each class's rate counts in proportion to its size.

## A tiny example
A site is occupied with probability 0.4. Detection is 0.75 if occupied, 0 if not.
- P(detected) = 0.75 × 0.4 + 0 × 0.6 = 0.30.

## Start from zero
1. **Split everything into cases B₁, B₂, …** that don't overlap and cover all possibilities.
2. **For each case find P(A | Bᵢ).**
3. **Weight by P(Bᵢ) and add:** P(A) = Σ P(A | Bᵢ) P(Bᵢ).
4. **It is marginalising, written with conditionals.** Each term P(A | Bᵢ) P(Bᵢ) is a joint probability.
5. **Why it is useful:** often the conditional pieces are easy to state and the overall probability isn't.
6. **Where it appears:** the denominator of Bayes' theorem, mixture distributions, zero-inflated and occupancy models.

## In R
```r
p_case <- c(occupied = 0.4, empty = 0.6); p_det <- c(occupied = 0.75, empty = 0)
sum(p_det * p_case)                                   # 0.30
# the zero of a zero-inflated Poisson: an extra zero, or a Poisson zero
0.4 * 1 + 0.6 * dpois(0, 3)
```

## In the course
[[Hobbs and Hooten 2015 Ch3]]. [[Powell and Gale 2015 Ch3]] uses it when building likelihoods from branching outcomes.

## Common confusions
- **"Just average the conditional probabilities."** They must be weighted by how likely each case is.

## Explain it back
- Compute the overall pass rate for classes of 30 at 80% and 70 at 60%.

*Pass test:* you can combine case-by-case probabilities into an overall one.

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
