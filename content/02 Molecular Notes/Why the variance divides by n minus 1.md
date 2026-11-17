---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - basics
aliases:
  - "Bessel's correction"
  - "n − 1 in the sample variance"
  - "Why n-1"
status: seedling
---

# Why the variance divides by n minus 1

> [!summary] In plain words
> the sample variance divides by n − 1 because deviations are measured from the sample mean, which sits closer to the data than the true mean does, so dividing by n would underestimate the variance on average.

## The question
Why does var() divide by n − 1, not n?

## Built from
- [[Variance]] and [[Mean]].
- [[Degrees of Freedom]].
- [[Unbiased Estimator]] and [[Bias]].

## The reasoning, step by step
1. **The sample mean is chosen to minimise Σ(x − x̄)²,** so squared distances to x̄ are smaller than to the true μ.
2. **Dividing by n therefore gives too small an answer on average:** E[Σ(x − x̄)²/n] = σ²(n − 1)/n.
3. **Dividing by n − 1 removes the bias.**
4. **Degrees of freedom view:** once the mean is fixed, only n − 1 deviations are free; the last is determined.
5. **In regression the same idea gives RSS/(n − p)** for p estimated coefficients.
6. **Maximum likelihood divides by n,** so ML variance estimates are biased low in small samples, one reason REML exists.
With n = 5 from a variance-1 normal, the average of the n-divisor variance is 0.8 and of the n − 1 divisor is 1.0.

## So in practice
For n above about 30 the difference hardly matters; for small samples and many parameters it does.

## In R
```r
set.seed(1); s <- replicate(1e5, { x <- rnorm(5); c(n1 = var(x), n = var(x) * 4 / 5) })
round(rowMeans(s), 3)
```

## What would go wrong otherwise
Thinking n − 1 is a fudge to make variances bigger "to be safe".

## Explain it back
- Why are deviations from x̄ smaller than deviations from μ?

*Pass test:* you can explain n − 1 with degrees of freedom.

## Connections
- **Related:** [[REML vs ML]], [[Standard Deviation vs Standard Error]], [[Least Squares vs Maximum Likelihood]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]

## Flashcards

Why divide by n − 1 in the sample variance?
??
Deviations from the sample mean are too small on average; n − 1 makes the estimate unbiased.
++++

Expected value of the n-divisor variance?
??
σ²(n − 1)/n.
++++
