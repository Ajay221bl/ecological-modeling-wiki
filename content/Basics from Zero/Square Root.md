---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Root"
  - "√"
status: seedling
---

# Square Root

**In one line:** the square root of a number is the value that, multiplied by itself, gives that number back.

> [!info] Before this, it helps to know
> [[Exponent]] (squaring is raising to the power 2) · [[Variance]] (which is in squared units)

## The everyday picture
A square garden. If its area is 25 m², each side is 5 m, because 5 × 5 = 25. The square root turns an area back into a side length.

*Where the picture stops working:* a garden side is always positive. Mathematically −5 × −5 is also 25, but statistics always uses the positive root.

## Words you'll need
- **√x:** read "the square root of x".
- **Squared units:** what you get after squaring, such as g².
- **Power of one half:** √x is the same as x^0.5.

## A tiny example
Variance of the values 2, 3, 3, 5, 7 is 4 (in "species squared").
- Standard deviation = √4 = **2** species.
- With n = 5, standard error of the mean = 2 / √5 = 2 / 2.236 = **0.89** species.

## Start from zero
1. **Squaring a number multiplies it by itself.** 3² = 9.
2. **The square root undoes that.** √9 = 3.
3. **It brings squared units back to real units.** *Why:* variance is in squared units, which nobody can picture. Its root, the standard deviation, is in the units you measured.
4. **It grows slowly.** √100 = 10 but √10,000 = 100. That slow growth is why precision improves slowly with sample size ([[Sample Size]]).

## See it
```mermaid
flowchart LR
  A[side 5] -- square --> B[area 25]
  B -- square root --> A
```
*What to look at:* squaring and rooting are a round trip.

## Why it is this way
Statistics squares things to get rid of signs and to make the maths tidy. The price is squared units. The square root pays that back. It also appears in every standard error because independent random errors add in squares, so the total grows only with the root of how many you add.

## In R
```r
sqrt(25)                 # 5
x <- c(2, 3, 3, 5, 7)
var(x)                   # 4, in squared units
sqrt(var(x))             # 2: back to the original units, same as sd(x)
sd(x) / sqrt(length(x))  # 0.89, the standard error of the mean
```
`sd()` is just the square root of `var()`.

## In the course
Square roots appear in every [[Standard Error]] and in the [[Square-root Transformation]] sometimes used for counts ([[Zuur et al. 2009 Ch2]]).

## Common confusions
- **"√(a + b) = √a + √b."** No. √(9 + 16) = 5, not 7.
- **"The square root halves a number."** √100 is 10, not 50.

## Explain it back
- Why is standard deviation easier to interpret than variance?
- Why does precision improve with √n and not n?

*Pass test:* you can say what a square root undoes and why it shows up in standard errors.

## Connections
- **Builds on:** [[Exponent]], [[Variance]]
- **Leads to:** [[Standard Deviation]], [[Standard Error]], [[Square-root Transformation]]
- **Part of:** [[MOC - Basics from Zero]]

## Flashcards

What does a square root do?
??
It finds the number that, multiplied by itself, gives the original number.
++++

Why take the square root of the variance?
??
To return from squared units to the units of the data, giving the standard deviation.
++++

Is √(a + b) equal to √a + √b?
??
No. For example √(9 + 16) = 5, not 7.
++++
