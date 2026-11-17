---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "The square root of a number is the value that, multiplied by itself, gives that number back."
aliases:
  - "Root"
  - "√"
status: seedling
---

# Square Root

Picture a square garden with an area of 25 m². How long is each side? 5 m, because 5 × 5 = 25. The **square root** turns an area back into a side length: it is the number that, multiplied by itself, gives the original number back. It is written √x, and it is the same as raising x to the power one half, x^0.5 ([[Exponent]]). Squaring and rooting are a round trip: 3² = 9 and √9 = 3. Strictly, −5 × −5 is also 25, but statistics always uses the positive root.

The square root shows up constantly because statistics squares things to remove minus signs, and squaring changes the units. The [[Variance]] of the values 2, 3, 3, 5 and 7 is 4, measured in "species squared", which nobody can picture. Its square root, √4 = 2 species, is the [[Standard Deviation]], back in the units you measured. The standard error of the mean then divides by the square root of the sample size: 2 / √5 = 2 / 2.236 = 0.89 species ([[Standard Error]]). That √n is not an accident. Independent random errors add up "in squares", so the total spread grows only with the root of how many you add. The square root grows slowly (√100 is 10, but √10,000 is only 100), which is exactly why precision improves so slowly as you collect more data ([[Sample Size]]).

Two common mistakes. First, the square root of a sum is not the sum of the square roots: √(9 + 16) = √25 = 5, not 3 + 4 = 7. Second, a square root is not halving: √100 is 10, not 50. You will also see square roots used as a transformation that tames the spread of counts ([[Square-root Transformation]], [[Zuur et al. 2009 Ch2]]), although modern practice usually prefers a count model instead.

```mermaid
flowchart LR
  A[side 5] -- square --> B[area 25]
  B -- square root --> A
```
*What to look at:* squaring and rooting are a round trip.

```r
sqrt(25)                 # 5
x <- c(2, 3, 3, 5, 7)
var(x)                   # 4, in squared units
sqrt(var(x))             # 2: back to the original units, same as sd(x)
sd(x) / sqrt(length(x))  # 0.89, the standard error of the mean
```
`sd()` is just the square root of `var()`.

## Connections
- **Builds on:** [[Exponent]], [[Variance]]
- **Leads to:** [[Standard Deviation]], [[Standard Error]], [[Square-root Transformation]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]

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
