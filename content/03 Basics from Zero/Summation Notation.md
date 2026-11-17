---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Sigma notation"
  - "Sum"
status: seedling
---

# Summation Notation

**In one line:** Σ (capital sigma) is shorthand for "add up all of these". Its multiplying twin, ∏, has its own note: [[Product Notation]].

> [!info] Before this, it helps to know
> [[Greek Letters and Notation]] (subscripts like xᵢ)

## The everyday picture
A till receipt. The shop lists every item you bought, line by line, and at the bottom writes **TOTAL**. Σ is that word "TOTAL" written as one symbol. It says: "go down the list, take each line, and add them all up."

A recipe instruction works the same way: "for each egg, crack it into the bowl." Σ is an instruction that loops over a list. The little letters above and below it just say where the list starts and stops.

*Where the picture stops working:* a receipt only adds prices. Σ can add anything you calculate from each line first, like each value minus the mean, squared.

## Words you'll need
- **Σ (capital sigma, Greek S for "sum"):** add up everything that follows.
- **Subscript i:** a counter that labels which value you mean. x₁ is the first value, x₂ the second, xᵢ "the i-th one".
- **n:** the number of values in the list.
- **Index range ($i = 1$ to $n$):** written below and above the symbol; where to start and where to stop.
- **Deviation:** a value minus the mean, used in the most common sum in statistics.

## A tiny example
Four nest boxes hold x₁ = 4, x₂ = 7, x₃ = 2, x₄ = 5 eggs.
- **Total eggs:** 4 + 7 + 2 + 5 = **18**. Written $\sum_{i=1}^{4} x_i = 18$.
- **Mean:** 18 / 4 = **4.5**.
- **Squared distances from the mean:** (4 − 4.5)² = 0.25, (7 − 4.5)² = 6.25, (2 − 4.5)² = 6.25, (5 − 4.5)² = 0.25. Add them: **13**. Written $\sum (x_i - 4.5)^2 = 13$.

Every line here is a loop over the four boxes. The symbol only saves you writing the loop out.

## Start from zero
1. **You have several numbers and number them.** x₁ = 4, x₂ = 7, x₃ = 2, x₄ = 5. *Why the subscript:* so you can talk about "the i-th value" without naming each one.
2. **You often want their total.** Writing x₁ + x₂ + x₃ + x₄ is fine for four values, hopeless for 1,130.
3. **So write $\sum_{i=1}^{n} x_i$.** Read it: "for i from 1 to n, add up x-i". The bottom says where to start, the top says where to stop, and the right says what to add.
4. **The thing being added can be any calculation.** $\sum (x_i - \bar{x})^2$ means "for each value, subtract the mean, square it, then add all of those up". This exact sum is the heart of [[Variance]] and [[Least Squares]].
5. **Multiplying has its own symbol.** ∏ does the same loop with multiplication, used for likelihoods ([[Product Notation]]).

## See it
![[Summation.png|700]]
*What to look at:* Σ just lines the values up and reads off the total.

## Why it is this way
Formulas in statistics have to work for any dataset: 4 values or 4 million. Writing every term out is impossible, so maths uses one symbol for "repeat this for every value and combine". Once you read Σ as "do this to each one, then add", every estimator in the course, the [[Mean]], the [[Variance]], the least-squares criterion and the likelihood, becomes a short recipe instead of a wall of symbols.

## In R
```r
x <- c(4, 7, 2, 5)
sum(x)                     # Σ x_i = 18
sum((x - mean(x))^2)       # Σ (x_i - x̄)^2 = 13
sum(x^2); sum(x)^2         # 94 vs 324: square-then-add is not add-then-square
```
R is *vectorized*: `x - mean(x)` does the subtraction for every element at once, so a Σ usually becomes `sum()` of a vector ([[Vectorization]]).

## In the course
Powell and Gale write the sample mean as $\bar{x} = \sum_{i=1}^{n} mass_i / n$ and call that formula a statistical model ([[Powell and Gale 2015 Ch1]], p. 6).

## Common confusions
- **Σx² vs (Σx)².** The first squares each value and then adds: 16 + 49 + 4 + 25 = 94. The second adds and then squares: 18² = 324. Order matters, so read from the inside out.
- **Σ the symbol vs σ the standard deviation.** Capital Σ is a sum. Lower-case σ ("sigma") is a standard deviation. Same Greek letter, different jobs.
- **"The i means something."** It's only a counter. $\sum_{j=1}^{n} x_j$ means exactly the same thing.

## Explain it back
- Explain Σ using a till receipt.
- Read $\sum (x_i - \bar{x})^2$ aloud as a list of steps.
- Why is Σx² different from (Σx)²?

*Pass test:* you can turn any Σ formula into a sentence beginning "for each value...".

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
