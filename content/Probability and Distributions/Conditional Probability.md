---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "P(A | B)"
  - "Probability given"
status: seedling
---

# Conditional Probability

**In one line:** a conditional probability is the probability of one thing given that another is known to be true.

> [!info] Before this, it helps to know
> [[Joint Probability]] (the numerator) · [[Marginal Probability]] (the denominator)

## The everyday picture
Narrowing the room. Ask "what share of people here wear glasses?" Then say "now only look at people over 60." You have thrown out part of the room and are asking the same question inside what's left. The answer usually changes.

## A tiny example
100 sites: species present at 40, detected at 30 of those, never detected where absent.
- P(detected | present) = 30/40 = 0.75.
- P(present | detected) = 30/30 = 1.
- P(present | not detected) = 10/70 = 0.14.
- Three different questions, three different answers.

## Start from zero
1. **Read P(A | B) as "probability of A given B".**
2. **Restrict attention to the cases where B is true.**
3. **Within those, find the share where A is also true.**
4. **Formula: P(A | B) = P(A, B) / P(B).**
5. **The bar matters and the order matters.** P(A | B) and P(B | A) are different numbers.
6. **Why it runs through everything:** a regression is a conditional statement, the distribution of Y given X. A likelihood is the probability of data given parameters. A posterior is the probability of parameters given data.

## See it
![[Joint marginal conditional.png|700]]
*What to look at:* conditioning on "not detected" means looking only at that column and rescaling it to add to 1.

## In R
```r
tab <- matrix(c(30, 10, 0, 60), 2, byrow = TRUE, dimnames = list(c("present", "absent"), c("detected", "not detected")))
tab["present", "detected"] / sum(tab["present", ])              # P(detected | present) = 0.75
tab["present", "not detected"] / sum(tab[, "not detected"])     # P(present | not detected) = 0.143
prop.table(tab, 1); prop.table(tab, 2)                          # condition on rows, then on columns
```

## In the course
[[Hobbs and Hooten 2015 Ch3]]. The occupancy lectures turn on exactly the example above.

## Common confusions
- **"P(A | B) = P(B | A)."** The most common error in probability. P(spots | leopard) is 1. P(leopard | spots) is small.
- **"Conditioning means causing."** It means "knowing". Knowing the grass is wet changes the probability it rained.

## Explain it back
- Compute P(present | not detected) from the example and explain it in words.

*Pass test:* you can compute a conditional probability from a table in both directions.

## Connections
- **Builds on:** [[Joint Probability]], [[Marginal Probability]]
- **Leads to:** [[Bayes' Theorem]], [[Likelihood]], [[Independent Events]], [[Detection Probability]]
- **Part of:** [[MOC - Probability and Distributions]], molecular note [[Joint, Marginal and Conditional Probability]]

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
