---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "CDF"
  - "Distribution function"
  - "pnorm()"
  - "Cumulative probability"
status: seedling
---

# Cumulative Distribution Function

**In one line:** the cumulative distribution function gives the probability that a random variable is less than or equal to a chosen value.

> [!info] Before this, it helps to know
> [[Probability Mass Function]] or [[Probability Density Function]] (what it accumulates) · [[Quantile]] (its inverse idea)

## The everyday picture
A running total. As you walk along the number line from left to right you sweep up probability. The CDF at any point is how much you have collected so far. It starts at 0 and ends at 1.

## A tiny example
Heights of adults ~ Normal(170, 10). CDF at 180 = 0.84: 84% of people are 180 cm or shorter.

## Start from zero
1. **F(y) = P(Y ≤ y).**
2. **Discrete: add the PMF bars up to y.** Continuous: area under the PDF to the left of y.
3. **It never decreases,** running from 0 to 1.
4. **P(Y > y) = 1 − F(y).**
5. **P(a < Y ≤ b) = F(b) − F(a).**
6. **In R these are the `p` functions:** `pnorm`, `ppois`, `pbinom`.
7. **Why it matters:** p-values, tail probabilities and "probability the effect is positive" are all CDF calculations.

## See it
![[dpqr functions.png|700]]
*What to look at:* panel "p" shades the area that the CDF reports.

## In R
```r
pnorm(180, 170, 10)                          # 0.841
1 - pnorm(190, 170, 10)                      # P(taller than 190) = 0.023
pnorm(180, 170, 10) - pnorm(160, 170, 10)    # within one SD: 0.683
ppois(2, 3)                                  # P(count <= 2) = 0.423
```

## Common confusions
- **"ppois(2, 3) is P(Y < 2)."** It is P(Y ≤ 2). For discrete variables the "or equal" matters.

## Explain it back
- How do you get P(Y > y) from the CDF?

*Pass test:* you can compute tail and interval probabilities with p functions.

## Connections
- **Builds on:** [[Probability Density Function]], [[Probability Mass Function]]
- **Leads to:** [[Quantile Function]], [[P-value]], [[Distribution Functions in R]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What does the CDF give?
??
P(Y ≤ y), the probability of a value at or below y.
![[dpqr functions.png]]
++++

How do you compute P(a < Y ≤ b) from a CDF?
??
F(b) − F(a).
++++
