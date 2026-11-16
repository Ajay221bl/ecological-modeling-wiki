---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Power"
  - "Exponents"
  - "Raising to a power"
status: seedling
---

# Exponent

**In one line:** an exponent says how many times to multiply a number by itself: 2³ = 2 × 2 × 2 = 8.

> [!info] Before this, it helps to know
> Multiplication. That's all. Its reverse is the [[Logarithm]].

## The everyday picture
A pond has 100 frogs and the number doubles every year. After 1 year 200, after 2 years 400, after 3 years 800. "Double, three times" is written 2³, and 100 × 2³ = 800. The small raised 3 is the exponent: the number of times the doubling happened.

*Where the picture stops working:* exponents don't have to be whole numbers. 2^0.5 (about 1.41) means "half a doubling", which has no frog story but works fine in maths.

## Words you'll need
- **Base:** the number being multiplied (2 in 2³).
- **Exponent (power):** how many times to multiply it (3 in 2³).
- **Squared, cubed:** an exponent of 2 or 3.
- **Growth multiplier (λ, "lambda"):** the number a population is multiplied by each year.

## A tiny example
A population of 500 trees grows 4% a year, so each year it's multiplied by 1.04.
- After 1 year: 500 × 1.04 = 520.
- After 10 years: 500 × 1.04¹⁰ = 500 × 1.48 = **740**.
- Rules worth knowing: anything to the power 0 is 1 (no multiplying at all), and 2⁻¹ = 1/2 (a negative exponent divides).

## Start from zero
1. **Repeated multiplication is common.** Doubling, growing 4% a year, surviving year after year.
2. **Writing it out is tedious:** 1.04 × 1.04 × ... ten times.
3. **So write the count as a small raised number:** 1.04¹⁰. *Why:* the exponent is just the count of multiplications.
4. **Exponents add when you multiply the same base.** 2³ × 2² = 2⁵. *Why:* three doublings then two more is five doublings.
5. **Growth is multiplying, so populations are exponents.** N after t years = N₀ × λᵗ. *Why multiplying, not adding:* each year's growth builds on what's already there.

## See it
![[Logarithms and exponents.png|700]]
*What to look at:* the exponential curve climbs slowly, then steeply, because each step multiplies a bigger number.

## Why it is this way
Many ecological processes compound: births make more breeders, survival chances stack up across years. Exponents are the natural shorthand for anything that multiplies over and over, and they're why small changes in a growth rate snowball ([[Sensitivity Analysis]]).

## In R
```r
2^3              # 8
500 * 1.04^10    # about 740 trees after 10 years
2^0              # 1
2^-1             # 0.5
```

## In the course
Exponential growth is one of Hobbs and Hooten's core deterministic models ([[Hobbs and Hooten 2015 Ch2]], §2.2).

## Common confusions
- **2³ is not 2 × 3.** It's 2 × 2 × 2 = 8, not 6.
- **"A 4% yearly rise for 10 years is 40%."** It's 48%, because each year's 4% is taken of a bigger number.

## Explain it back
- Use doubling frogs to explain what the exponent counts.
- Why does 4% for 10 years give 48% rather than 40%?
- Why does 2³ × 2² equal 2⁵?

*Pass test:* you can project a population forward t years with N₀ × λᵗ.

## Connections
- **Builds on:** multiplication
- **Leads to:** [[Logarithm]], [[Exponential Function]], [[Sensitivity Analysis]]
- **Part of:** [[MOC - Basics from Zero]], molecular note [[Logarithms and Exponents]]
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
