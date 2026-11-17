---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "An exponent says how many times to multiply a number by itself: 2³ = 2 × 2 × 2 = 8."
aliases:
  - "Exponents"
  - "Raising to a power"
status: seedling
---

# Exponent

A pond holds 100 frogs and the number doubles every year: 200 after one year, 400 after two, 800 after three. "Double, three times" is written 2³, and 100 × 2³ = 800. The small raised 3 is the **exponent** (or *power*): it says how many times to multiply a number by itself. The number being multiplied is the *base*, so in 2³ the base is 2 and the exponent is 3, and 2³ = 2 × 2 × 2 = 8 (not 2 × 3 = 6). An exponent of 2 is "squared", of 3 "cubed". Its reverse operation, which asks "what exponent gives this number?", is the [[Logarithm]].

A few rules follow from "the exponent counts multiplications". Multiplying powers of the same base adds the exponents: 2³ × 2² = 2⁵, because three doublings and then two more is five doublings. Anything to the power 0 is 1, because you did no multiplying at all. A negative exponent divides: 2⁻¹ = 1/2. And exponents need not be whole numbers: 2^0.5, about 1.41, is "half a doubling", which has no frog story but works perfectly well in the maths (it is the [[Square Root]] of 2). A population of 500 trees growing 4% a year is multiplied by 1.04 each year, so after 10 years it is 500 × 1.04¹⁰ = 500 × 1.48 = 740 trees.

That example hides a common surprise: 4% a year for 10 years is a 48% rise, not 40%, because each year's 4% is taken of a bigger number. Growth compounds. That is why exponents are everywhere in ecology: births make more breeders, and survival chances stack up year after year. The size of a population after t years is N₀ × λᵗ, where λ (lambda) is the growth multiplier per year, and the multiplying, not adding, is why small changes in a growth rate snowball over time ([[Sensitivity Analysis]]). Exponential growth is one of Hobbs and Hooten's core deterministic models ([[Hobbs and Hooten 2015 Ch2]]), and the special base e gives the [[Exponential Function]].

![[Logarithms and exponents.png|700]]
*What to look at:* the exponential curve climbs slowly, then steeply, because each step multiplies a bigger number.

```r
2^3              # 8
500 * 1.04^10    # about 740 trees after 10 years
2^0              # 1
2^-1             # 0.5
```

## Connections
- **Builds on:** multiplication
- **Leads to:** [[Logarithm]], [[Exponential Function]], [[Sensitivity Analysis]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Logarithms and Exponents]]
- **Go deeper:** [[Functions in Maths]]

## Flashcards

What does an exponent count?
??
How many times the base is multiplied by itself: 2³ = 2 × 2 × 2.
![[Logarithms and exponents.png]]
++++

Why is 4% growth for 10 years more than 40%?
??
Growth compounds: each year's 4% is taken of a larger number, so the total is 1.04¹⁰ ≈ 1.48, a 48% rise.
++++
