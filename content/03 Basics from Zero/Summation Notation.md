---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "Σ (capital sigma) is shorthand for \"add up all of these\". Its multiplying twin, ∏, has its own note: Product Notation."
aliases:
  - "Sigma notation"
  - "Sum"
status: seedling
---

# Summation Notation

A till receipt lists every item you bought, line by line, and at the bottom writes TOTAL. The symbol Σ, a capital Greek sigma (S for "sum"), is that word TOTAL written as one sign: "go down the list and add everything up". **Summation notation** writes it as $\sum_{i=1}^{n} x_i$, read "for i from 1 to n, add up x-i". The *subscript* i is a counter that labels which value you mean (x₁ is the first, xᵢ "the i-th one", [[Subscripts and Indexing]]), n is how many values there are, and the numbers below and above Σ say where to start and stop. The letter i means nothing in itself; $\sum_{j=1}^{n} x_j$ is exactly the same instruction.

Four nest boxes hold x₁ = 4, x₂ = 7, x₃ = 2 and x₄ = 5 eggs. The total is $\sum_{i=1}^{4} x_i$ = 18, so the mean is 18 / 4 = 4.5. Unlike a receipt, the thing being added can be any calculation done to each value first. $\sum (x_i - 4.5)^2$ means "for each box, subtract the mean, square it, then add all of those up": 0.25 + 6.25 + 6.25 + 0.25 = 13. This sum of squared deviations is the heart of the [[Variance]] and of [[Least Squares]]. Read from the inside out, because order matters: Σx² squares each value and then adds (16 + 49 + 4 + 25 = 94), while (Σx)² adds first and then squares (18² = 324).

Formulas in statistics have to work for any dataset, 4 values or 4 million, and writing every term out is impossible, so maths uses one symbol for "repeat this for every value and combine". Once you read Σ as "do this to each one, then add", every estimator in the course, the [[Mean]], the variance, the least-squares criterion and the log-likelihood, becomes a short recipe instead of a wall of symbols. Powell and Gale write the sample mean this way and call the formula a statistical model ([[Powell and Gale 2015 Ch1]]). In R, a Σ usually becomes `sum()` of a whole vector, because R does arithmetic on every element at once ([[Vectorization]]). Two cautions: capital Σ (a sum) is not lower-case σ (a standard deviation), the same Greek letter doing a different job ([[Greek Letters and Notation]]); and multiplying everything on a list has its own twin symbol, ∏ ([[Product Notation]]).

![[Summation.png|700]]
*What to look at:* Σ just lines the values up and reads off the total.

```r
x <- c(4, 7, 2, 5)
sum(x)                     # Σ x_i = 18
sum((x - mean(x))^2)       # Σ (x_i - x̄)^2 = 13
sum(x^2); sum(x)^2         # 94 vs 324: square-then-add is not add-then-square
```
R is *vectorized*: `x - mean(x)` does the subtraction for every element at once, so a Σ usually becomes `sum()` of a vector ([[Vectorization]]).

## Connections
- **Builds on:** [[Greek Letters and Notation]]
- **Leads to:** [[Product Notation]], [[Mean]], [[Variance]], [[Least Squares]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[Vectorization]]

## Flashcards

How do you read Σ (x_i − x̄)²?
??
For each value, subtract the mean, square the result, then add all of those up.
![[Summation.png]]
++++


What is the difference between Σx² and (Σx)²?
??
Σx² squares each value then adds; (Σx)² adds first then squares. For 4, 7, 2, 5 they are 94 and 324.
++++
