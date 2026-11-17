---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Weighted average"
  - "Σwx / Σw"
  - "weighted.mean()"
status: seedling
---

# Weighted Mean

**In one line:** a weighted mean averages values after multiplying each by a weight, Σwᵢxᵢ / Σwᵢ, so some values count more than others.

> [!info] Before this, it helps to know
> [[Mean]] · [[Summation Notation]]

## The everyday picture
A course grade: the final exam counts 50%, homework 30%, quizzes 20%. A plain average would treat them equally.

## A tiny example
Site means 10 (n = 2) and 20 (n = 8). Plain mean of means: 15. Weighted by sample size: (2 × 10 + 8 × 20) / 10 = 18, the mean of all 10 observations.

## Start from zero
1. **Equal weights give the ordinary mean.**
2. **Weights by sample size** recover the overall mean from group means.
3. **Weights by inverse variance** give the most precise combined estimate (meta-analysis, weighted regression).
4. **Akaike weights** combine estimates across models (model averaging).

## In R
```r
x <- c(10, 20); n <- c(2, 8)
c(plain = mean(x), weighted = weighted.mean(x, n))
```

## In the course
[[Hobbs and Hooten 2015 Ch3]] (expected values as probability-weighted means).

## Common confusions
- **"Weights must sum to 1."** The formula divides by Σw, so any positive weights work.

## Explain it back
- What weights recover the overall mean from group means?

*Pass test:* you can compute a weighted mean and choose weights.

## Connections
- **Builds on:** [[Mean]], [[Summation Notation]]
- **Leads to:** [[Expected Value]], [[Weighted Regression]], [[Model Averaging]]
- **Part of:** [[MOC - Basics from Zero]]

## Flashcards

Formula for a weighted mean?
??
Σwᵢxᵢ / Σwᵢ.
++++
