---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - distributions
aliases:
  - "Binomial or Poisson"
  - "Bounded vs unbounded counts"
status: seedling
---

# Binomial vs Poisson

> [!summary] In plain words
> the binomial counts successes out of a known number of trials and cannot exceed that number, while the Poisson counts events with no fixed upper limit; the binomial's variance is smaller than its mean, the Poisson's equals its mean.

## The question
My response is a count. Binomial or Poisson?

## Built from
- [[Binomial Distribution]]: k successes out of n trials with probability p.
- [[Poisson Distribution]]: counts with rate λ.
- [[Mean-Variance Relationship]].

## The reasoning, step by step
1. **Is there a known maximum?** Eggs hatched out of eggs laid, sites occupied out of sites visited: binomial.
2. **No natural maximum?** Ticks on a deer, birds at a point count: Poisson (or negative binomial).
3. **Binomial:** mean np, variance np(1 − p), always less than the mean.
4. **Poisson:** mean = variance = λ.
5. **When n is large and p small,** binomial(n, p) is close to Poisson(np): rare events out of many chances.
6. **In a GLM:** binomial uses the logit link and models p; Poisson uses the log link and models λ, often with an offset for effort.
Binomial(100, 0.03): mean 3, variance 2.91. Poisson(3): mean 3, variance 3. P(X = 0) is 0.0476 vs 0.0498, nearly the same.

## So in practice
If you can write "k out of n", use the binomial with `cbind(k, n - k)` in `glm()`. If the count has no ceiling, start with Poisson and check for overdispersion.

## In R
```r
round(c(binom_P0 = dbinom(0, 100, 0.03), pois_P0 = dpois(0, 3), binom_var = 100 * 0.03 * 0.97, pois_var = 3), 4)
```

## What would go wrong otherwise
Modelling "number of chicks fledged out of eggs laid" as Poisson, which ignores clutch size and allows more fledglings than eggs.

## Explain it back
- When is the Poisson a good approximation to the binomial?

*Pass test:* you can choose between them from the study design.

## Connections
- **Related:** [[Why the response type decides the distribution]], [[Poisson vs Negative Binomial]], [[Binomial vs Beta for Proportions]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Probability and Distributions]], [[MOC - Generalized Linear Models]]

## Flashcards

Key difference between binomial and Poisson counts?
??
Binomial has a fixed upper limit n; Poisson has none.
++++

Variance of binomial vs Poisson?
??
np(1 − p), less than the mean; λ, equal to the mean.
++++
