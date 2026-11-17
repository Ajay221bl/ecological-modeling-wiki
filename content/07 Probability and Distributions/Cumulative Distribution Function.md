---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The cumulative distribution function gives the probability that a random variable is less than or equal to a chosen value."
aliases:
  - "CDF"
  - "Distribution function"
  - "pnorm()"
  - "Cumulative probability"
status: seedling
---

# Cumulative Distribution Function

Walk along the number line from left to right and sweep up probability as you go. The amount collected so far at any point is the **cumulative distribution function** (CDF): F(y) = P(Y ≤ y), the probability that a random variable is less than or equal to a chosen value. It starts at 0, never decreases, and ends at 1. For a discrete variable it adds up the bars of the [[Probability Mass Function]] up to y; for a continuous one it is the area under the [[Probability Density Function]] to the left of y, as panel "p" of the figure shades.

If adult heights follow a normal distribution with mean 170 cm and standard deviation 10, the CDF at 180 is 0.841: 84% of people are 180 cm or shorter. Two rules follow from the definition: P(Y > y) = 1 − F(y), so P(taller than 190) = 1 − 0.977 = 0.023; and P(a < Y ≤ b) = F(b) − F(a), so P(160 < Y ≤ 180), within one standard deviation of the mean, is 0.683. In R the CDFs are the `p` functions, `pnorm()`, `ppois()` and `pbinom()`; `ppois(2, 3)`, the probability of a count of 2 or fewer from a Poisson with mean 3, is 0.423 ([[Distribution Functions in R]]).

Many everyday statistical quantities are CDF calculations: a [[P-value]] is a tail probability, and so is the posterior probability that an effect is positive. Running the question backwards, from a probability to a value, is the [[Quantile Function]]. For discrete variables the "or equal" matters: `ppois(2, 3)` is P(Y ≤ 2), not P(Y < 2).

![[dpqr functions.png|700]]
*What to look at:* panel "p" shades the area that the CDF reports.

```r
pnorm(180, 170, 10)                          # 0.841
1 - pnorm(190, 170, 10)                      # P(taller than 190) = 0.023
pnorm(180, 170, 10) - pnorm(160, 170, 10)    # within one SD: 0.683
ppois(2, 3)                                  # P(count <= 2) = 0.423
```

## Connections
- **Builds on:** [[Probability Density Function]], [[Probability Mass Function]]
- **Leads to:** [[Quantile Function]], [[P-value]], [[Distribution Functions in R]]
- **See also:** [[Quantile]]
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
