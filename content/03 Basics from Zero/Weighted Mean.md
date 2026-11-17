---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "A weighted mean averages values after multiplying each by a weight, Σwᵢxᵢ / Σwᵢ, so some values count more than others."
aliases:
  - "Weighted average"
  - "Σwx / Σw"
  - "weighted.mean()"
status: seedling
---

# Weighted Mean

A course grade where the final exam counts 50%, homework 30% and quizzes 20% is a weighted mean; a plain average would treat them equally. A **weighted mean** averages values after multiplying each by a weight, Σwᵢxᵢ / Σwᵢ, so some values count more than others ([[Mean]], [[Summation Notation]]). Equal weights give the ordinary mean.

Weighting by sample size recovers the overall mean from group means; weighting by inverse variance gives the most precise combined estimate, as in meta-analysis and [[Weighted Regression]]; and Akaike weights combine estimates across models ([[Model Averaging]], [[Akaike Weight|Akaike Weights]]). In the code below two sites have means of 10 (n = 2) and 20 (n = 8): the plain mean of means is 15, but weighted by sample size it is (2 × 10 + 8 × 20) / 10 = 18, the mean of all 10 observations.

[[Hobbs and Hooten 2015 Ch3]] treat expected values as probability-weighted means ([[Expected Value]]). Weights need not sum to 1, since the formula divides by Σw, so any positive weights work.

```r
x <- c(10, 20); n <- c(2, 8)
c(plain = mean(x), weighted = weighted.mean(x, n))
```

## Connections
- **Builds on:** [[Mean]], [[Summation Notation]]
- **Leads to:** [[Expected Value]], [[Weighted Regression]], [[Model Averaging]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]

## Flashcards

Formula for a weighted mean?
??
Σwᵢxᵢ / Σwᵢ.
++++
