---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "IRLS"
  - "IWLS"
  - "Fisher scoring"
status: seedling
---

# Iteratively Reweighted Least Squares

**In one line:** iteratively reweighted least squares is the algorithm `glm()` uses to find maximum likelihood estimates, by solving a sequence of weighted linear regressions that home in on the answer.

> [!info] Before this, it helps to know
> [[Least Squares]] (each step) · [[Maximum Likelihood Estimation]] (the goal) · [[Link Function]] and [[Mean-Variance Relationship]] (what makes reweighting necessary)

## The everyday picture
Tuning a guitar by ear. Tighten the string, listen, adjust, listen again. Each pass uses the result of the last and the corrections shrink until you can't hear a difference.

## Start from zero
1. **Problem:** in a GLM the variance of each observation depends on its mean, which depends on the coefficients you're trying to find. No one-shot formula exists.
2. **Start with a guess** of the fitted means.
3. **Compute weights.** Observations expected to be less variable get more weight.
4. **Build a "working response":** a straightened version of the data on the link scale.
5. **Run a weighted least-squares regression** of the working response on the predictors.
6. **Update the fitted means. Recompute weights and working response.**
7. **Repeat until the coefficients stop changing.** Usually 4 to 8 rounds.
8. **Where you see it:** "Number of Fisher Scoring iterations: 5" at the bottom of `summary(glm())`.
9. **Why know it:** many iterations, or the warning "algorithm did not converge", signal trouble such as separation.

## In R
```r
set.seed(12); x <- runif(100); y <- rpois(100, exp(1 + 2 * x)); X <- cbind(1, x)
b <- c(log(mean(y)), 0)
for (i in 1:6) { eta <- X %*% b; mu <- exp(eta); z <- eta + (y - mu) / mu; W <- as.vector(mu)       # working response and weights for a Poisson log link
  b <- solve(t(X) %*% (W * X), t(X) %*% (W * z)); cat(i, round(b, 5), "\n") }
m <- glm(y ~ x, family = poisson); coef(m); m$iter
```

## In the course
[[Zuur et al. 2009 Ch8]] mentions it as the engine behind GLM estimation.

## Common confusions
- **"GLMs are fitted by ordinary least squares on transformed data."** They are fitted by maximum likelihood. IRLS is the route to it.

## Explain it back
- Why must the weights be recomputed at each step?

*Pass test:* you can explain what "Fisher Scoring iterations" refers to.

## Connections
- **Builds on:** [[Least Squares]], [[Maximum Likelihood Estimation]]
- **Leads to:** [[Generalized Linear Model]], [[Numerical Optimization]], [[Convergence]], [[Exponential Family]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What algorithm does glm() use to fit models?
??
Iteratively reweighted least squares (Fisher scoring).
++++

Why is iteration needed to fit a GLM?
??
The weights depend on the fitted means, which depend on the coefficients being estimated.
++++
