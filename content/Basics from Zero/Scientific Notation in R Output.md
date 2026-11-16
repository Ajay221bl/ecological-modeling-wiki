---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "e notation"
  - "2e-16"
  - "Scientific notation"
status: seedling
---

# Scientific Notation in R Output

**In one line:** R writes very big or very small numbers in "e notation", so `3.2e-05` means 3.2 × 10⁻⁵ = 0.000032, and `< 2e-16` means "smaller than R can usefully show".

> [!info] Before this, it helps to know
> [[Logarithms and Exponents]] (powers of 10)

## The everyday picture
Saying "a thousand" instead of "one, zero, zero, zero", or "a million" instead of counting six zeros. We already shorten big numbers by saying how many zeros there are. Scientific notation does the same thing in a fixed way: write the important digits, then say how many places to slide the decimal point.

`4.5e+09` is just "4.5, then slide the point 9 places right" = 4,500,000,000. `3.2e-05` is "3.2, then slide the point 5 places left" = 0.000032.

*Where the picture stops working:* the "e" here has nothing to do with the number e ≈ 2.718 from logarithms. It's just R's way of writing "× 10 to the".

## Words you'll need
- **Scientific notation:** a number written as (a number between 1 and 10) × 10 to some power.
- **e notation:** R's typed version: `3.2e-05` means 3.2 × 10⁻⁵.
- **Exponent:** the number after the e; how many places to move the decimal point.
- **p-value:** a probability R reports in model summaries, often tiny ([[P-value]]).
- **Machine precision (machine epsilon):** the smallest difference a computer can reliably store, about 2.2 × 10⁻¹⁶.

## A tiny example
- `1.5e+03`: 1.5, point moves 3 places right: **1500**.
- `2.7e-02`: 2.7, point moves 2 places left: **0.027**.
- `4.1e-05`: 4.1, point moves 5 places left: **0.000041**.
- `6.3e-07` beside a slope in `summary(fit)`: **0.00000063**. Far below 0.05, so the slope is very unlikely to be zero, but it says nothing about how *big* the slope is ([[P-value]]).

## Start from zero
1. **Some numbers are awkwardly long.** 0.0000032 or 4,500,000,000. Counting zeros is error-prone.
2. **Scientific notation writes them as digits times a power of 10:** 3.2 × 10⁻⁶ and 4.5 × 10⁹. *Why:* the digits you care about are up front, and the size is one small number.
3. **R can't print raised numbers, so it writes "e" for "times ten to the":** `3.2e-06` and `4.5e+09`.
4. **The sign says which way to move the point.** Negative means left (a small number): `1e-03` = 0.001. Positive means right (a big number): `1e+03` = 1000.
5. **`< 2e-16` is the floor.** *Why:* computers store numbers with a fixed number of digits. Below about 2.2 × 10⁻¹⁶ R can't tell a p-value apart from zero, so rather than print a fake exact number it says "less than" that.

## See it
| R prints | Means | As a decimal |
|---|---|---|
| `1.5e+03` | 1.5 × 10³ | 1500 |
| `2.7e-02` | 2.7 × 10⁻² | 0.027 |
| `4.1e-05` | 4.1 × 10⁻⁵ | 0.000041 |
| `<2e-16` | below machine precision | effectively 0 |

*What to look at:* the number after the e is how many places to move the decimal point, and its sign says which way.

## Why it is this way
Model summaries print dozens of numbers in neat columns, and some are millions of times smaller than others. A fixed-width column of plain decimals would either cut off the tiny ones (showing 0.0000) or be absurdly wide. E notation keeps every number readable in the same space. The cost is that you have to read it, and misreading `5e-04` as "5" is an easy and costly mistake.

## In R
```r
x <- 0.0000412
x                         # prints 4.12e-05
format(x, scientific = FALSE)   # "0.0000412"
options(scipen = 999)     # tell R to avoid e notation for the rest of the session
x                         # now prints 0.0000412
options(scipen = 0)       # back to the default
.Machine$double.eps       # 2.220446e-16: the precision floor behind "<2e-16"
```

## In the course
Lab output (from `summary()` of `lm`, `glm` and `lmer`) uses this notation throughout. Reading it fluently is part of course objective 1, summarizing reported statistical results ([[Course Overview]]).

## Common confusions
- **e notation vs the number e.** In `3e-05`, "e" means "× 10 to the". It has nothing to do with e ≈ 2.718 from [[Logarithms and Exponents]].
- **"A smaller p-value means a bigger effect."** No. A p-value mixes effect size with sample size, so a tiny effect measured on lots of data can have a tiny p-value ([[P-value]]).
- **"e-05 is negative."** The number is positive and small. Only the exponent is negative.

## Explain it back
- Turn `7.2e-03` and `7.2e+03` into ordinary numbers and say why they're so different.
- Why does R print `< 2e-16` instead of an exact p-value?
- Does `6.3e-07` beside a slope mean the slope is large?

*Pass test:* you can read any number in an R summary table aloud correctly.

## Connections
- **Builds on:** [[Logarithms and Exponents]]
- **Leads to:** [[P-value]], [[Linear Regression]]
- **Part of:** [[MOC - Basics from Zero]]
- **Go deeper:** [[R Objects and Vectors]]

## Flashcards

What does 4.1e-05 mean?
??
4.1 × 10⁻⁵, which is 0.000041.
++++

What does "< 2e-16" in R output mean?
??
The value is below R's numerical precision (about 2.2 × 10⁻¹⁶), so it is reported as "less than" that; effectively zero.
++++
