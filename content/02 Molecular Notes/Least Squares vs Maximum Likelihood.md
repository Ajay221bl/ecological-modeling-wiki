---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases:
  - "OLS vs MLE"
  - "Least squares or likelihood"
status: seedling
---

# Least Squares vs Maximum Likelihood

> [!summary] In plain words
> least squares picks the coefficients that make the squared residuals smallest, and maximum likelihood picks the parameters that make the observed data most probable; with normal, constant-variance errors they give the same coefficients, but maximum likelihood extends to any distribution and estimates the variance by dividing by n instead of n − p.

## The question
Are least squares and maximum likelihood the same thing?

## Built from
- [[Least Squares]] and [[Residual Sum of Squares]].
- [[Maximum Likelihood Estimation]] and [[Log-likelihood]].
- [[Normal Distribution]].

## The reasoning, step by step
1. **Normal log-likelihood:** −(n/2) log(2πσ²) − RSS / (2σ²).
2. **For any fixed σ, maximising it means minimising RSS,** so the β estimates are identical.
3. **Variance:** ML gives RSS / n; `lm()` reports RSS / (n − p), which is unbiased.
4. **Beyond normal errors** (Poisson, binomial), there is no squared-error criterion that matches; likelihood is the general tool, and GLMs are fitted by maximising it (via [[Iteratively Reweighted Least Squares]]).
5. **Likelihood also gives AIC, likelihood ratio tests and profile intervals.**
For `mpg ~ wt` (n = 32, p = 2): RSS = 278.3; ML σ² = 8.70, lm σ² = 9.28, same coefficients 37.29 and −5.34.

## So in practice
Think "likelihood" by default; least squares is the special case you get for free with normal errors.

## In R
```r
m <- lm(mpg ~ wt, data = mtcars)
nll <- function(par) -sum(dnorm(mtcars$mpg, par[1] + par[2] * mtcars$wt, exp(par[3]), log = TRUE))
fit <- optim(c(30, -3, 1), nll)
round(rbind(lm = c(coef(m), sigma2 = sigma(m)^2), ml = c(fit$par[1:2], exp(fit$par[3])^2)), 2)
```

## What would go wrong otherwise
Believing a GLM is fitted by least squares on the raw counts.

## Explain it back
- Why do least squares and ML agree on β for normal errors?

*Pass test:* you can derive the agreement from the normal log-likelihood.

## Connections
- **Related:** [[Probability vs Likelihood]], [[Why the variance divides by n minus 1]], [[REML vs ML]], [[Linear Model vs GLM]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Likelihood and Estimation]], [[MOC - Linear Models and GLMs]]

## Flashcards

When do least squares and ML give the same coefficients?
??
With normal, independent, constant-variance errors.
++++

ML vs lm() estimate of σ²?
??
RSS/n vs RSS/(n − p).
++++
