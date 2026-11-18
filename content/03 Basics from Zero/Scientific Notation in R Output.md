---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "R writes very big or very small numbers in \"e notation\", so `3.2e-05` means 3.2 × 10⁻⁵ = 0.000032, and `< 2e-16` means \"smaller than R can usefully show\"."
aliases:
  - "e notation"
  - "2e-16"
  - "Scientific notation"
status: seedling
---

# Scientific Notation in R Output

We already shorten big numbers by saying how many zeros they have: "a million" instead of counting six zeros. **Scientific notation** does the same thing in a fixed way: write the important digits as a number between 1 and 10, then say how many places to slide the decimal point, as a power of 10. R cannot print raised numbers, so it types "e" to mean "times ten to the": `4.5e+09` means 4.5 × 10⁹, "4.5, then slide the point 9 places right" = 4,500,000,000, and `3.2e-05` means 3.2 × 10⁻⁵, "slide the point 5 places left" = 0.000032. The number after the e is the [[Exponent]]: a minus sign means a small number (move left), a plus sign a big one (move right). This "e" has nothing to do with the number e ≈ 2.718 from [[Logarithms and Exponents]].

Some quick readings. `1.5e+03` is 1500. `2.7e-02` is 0.027. `4.1e-05` is 0.000041. A value of `6.3e-07` printed beside a slope in `summary(fit)` is 0.00000063, a [[P-value]] far below 0.05, so the slope is very unlikely to be exactly zero. But it says nothing about how big the slope is: a p-value mixes [[Effect Size|effect size]] with [[Sample Size|sample size]], so a tiny effect measured on lots of data can have a tiny p-value. Also note that a negative exponent does not make the number negative; `5e-04` is a small positive number, and misreading it as "5" is an easy and costly mistake.

Why does R do this? Model summaries print dozens of numbers in neat columns, and some are millions of times smaller than others; plain decimals would either cut off the tiny ones (showing 0.0000) or make the columns absurdly wide. One special value is `< 2e-16`. Computers store numbers with a fixed number of digits, and below about 2.2 × 10⁻¹⁶ (the *machine precision*, `.Machine$double.eps`) R cannot tell a p-value apart from zero, so instead of printing a fake exact number it says "less than" that floor. If you prefer plain decimals, `format(x, scientific = FALSE)` or `options(scipen = 999)` switches the notation off. Output from `summary()` of `lm`, `glm` and `lmer` uses this notation throughout, and reading it fluently is part of the course's first objective, summarizing reported statistical results ([[Course Overview]]).

| R prints | Means | As a decimal |
|---|---|---|
| `1.5e+03` | 1.5 × 10³ | 1500 |
| `2.7e-02` | 2.7 × 10⁻² | 0.027 |
| `4.1e-05` | 4.1 × 10⁻⁵ | 0.000041 |
| `<2e-16` | below machine precision | effectively 0 |

*What to look at:* the number after the e is how many places to move the decimal point, and its sign says which way.

```r
x <- 0.0000412
x                         # prints 4.12e-05
format(x, scientific = FALSE)   # "0.0000412"
options(scipen = 999)     # tell R to avoid e notation for the rest of the session
x                         # now prints 0.0000412
options(scipen = 0)       # back to the default
.Machine$double.eps       # 2.220446e-16: the precision floor behind "<2e-16"
```

## Connections
- **Builds on:** [[Logarithms and Exponents]], [[Sample Size]]
- **Leads to:** [[P-value]], [[Linear Regression]], [[Effect Size]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[Objects and Assignment|R Objects and Vectors]]

## Flashcards

What does 4.1e-05 mean?
??
4.1 × 10⁻⁵, which is 0.000041.
++++

What does "< 2e-16" in R output mean?
??
The value is below R's numerical precision (about 2.2 × 10⁻¹⁶), so it is reported as "less than" that; effectively zero.
++++
