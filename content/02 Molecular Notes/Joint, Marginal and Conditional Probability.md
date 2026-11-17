---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - distributions
aliases:
  - "Joint vs marginal vs conditional"
  - "Three kinds of probability"
status: seedling
---

# Joint, Marginal and Conditional Probability

> [!summary] In plain words
> a joint probability is the chance that two things happen together, a marginal probability is the chance of one thing whatever the other does, and a conditional probability is the chance of one thing given the other has happened.

## The everyday picture
A table of birds by habitat and species. The whole table is the joint picture; a row or column total is a marginal; one row read as percentages of its own total is conditional.

## The question
How do joint, marginal and conditional probabilities fit together?

## Built from
- [[Joint Probability]], [[Marginal Probability]], [[Conditional Probability]].
- [[Law of Total Probability]]: how marginals come from joints.
- [[Chain Rule of Probability]] and [[Bayes' Theorem]].

## The reasoning, step by step
1. **Joint:** P(A, B), a cell of the table.
2. **Marginal:** P(A) = Σ over B of P(A, B), add along a row (sum or integrate out the other variable).
3. **Conditional:** P(A | B) = P(A, B) / P(B), a cell divided by its column total.
4. **Rearranging gives the chain rule:** P(A, B) = P(A | B) P(B).
5. **Bayes' theorem** is the chain rule written both ways: P(θ | y) = P(y | θ) P(θ) / P(y), where P(y) is a marginal (Hobbs and Hooten 2015 Ch3, Ch5).

| | Occupied | Empty | Marginal |
|---|---|---|---|
| Forest | 0.30 | 0.10 | 0.40 |
| Grassland | 0.15 | 0.45 | 0.60 |
| Marginal | 0.45 | 0.55 | 1 |
From the table: joint P(forest, occupied) = 0.30; marginal P(occupied) = 0.45; conditional P(occupied | forest) = 0.30 / 0.40 = 0.75, while P(forest | occupied) = 0.30 / 0.45 = 0.67. The two conditionals differ.

## So in practice
When a sentence says "given", "among" or "of those that", it is conditional. When it says "and", it is joint. When the other variable has been ignored or summed over, it is marginal.

## What would go wrong otherwise
Treating P(occupied | forest) and P(forest | occupied) as the same number.

## Explain it back
- How do you get a marginal from a joint table?

*Pass test:* you can compute all three from a table.

## Connections
- **Related:** [[Independent vs Disjoint Events]], [[Why the posterior is proportional to likelihood times prior]], [[Conditional vs Marginal Predictions]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]], [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

P(A | B) from joint and marginal?
??
P(A, B) / P(B).
++++

How do you get P(A) from P(A, B)?
??
Sum (or integrate) P(A, B) over all values of B.
++++
