---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Iteratively reweighted least squares is the algorithm `glm()` uses to find maximum likelihood estimates, by solving a sequence of weighted linear regressions that home in on the answer."
aliases:
  - "IRLS"
  - "IWLS"
  - "Fisher scoring"
status: seedling
---

# Iteratively Reweighted Least Squares

Tuning a guitar by ear, you tighten the string, listen, adjust and listen again; each pass uses the result of the last, and the corrections shrink until you cannot hear a difference. **Iteratively reweighted least squares** (IRLS) is how `glm()` finds [[Maximum Likelihood Estimation|maximum likelihood estimates]]. The problem it solves is that in a GLM, the variance of each observation depends on its mean, which depends on the coefficients you are trying to find, so no one-shot formula exists ([[Mean-Variance Relationship]], [[Link Function]]). So start with a guess of the fitted means, compute weights so that observations expected to be less variable get more weight, and build a "working response", a straightened version of the data on the link scale. Run a weighted [[Least Squares]] regression of the working response on the predictors, update the fitted means, recompute the weights and working response, and repeat until the coefficients stop changing, usually after 4 to 8 rounds.

The code below writes IRLS by hand for a Poisson model with a log link, where the working response is η + (y − μ)/μ and the weights are μ. Over six rounds the coefficients settle on exactly the values `glm()` reports, and `m$iter` shows how many rounds `glm()` used. That count is printed as "Number of Fisher Scoring iterations" at the bottom of `summary(glm())`.

It is worth knowing because many iterations, or the warning "algorithm did not converge", signal trouble such as separation ([[Convergence]], [[Complete Separation]]). It works for the whole [[Exponential Family]], which is why one `glm()` function covers so many distributions ([[Generalized Linear Model]], [[Zuur et al. 2009 Ch8]], [[Numerical Optimization]]). GLMs are not fitted by ordinary least squares on transformed data; they are fitted by maximum likelihood, and IRLS is the route to it.

```r
set.seed(12); x <- runif(100); y <- rpois(100, exp(1 + 2 * x)); X <- cbind(1, x)
b <- c(log(mean(y)), 0)
for (i in 1:6) { eta <- X %*% b; mu <- exp(eta); z <- eta + (y - mu) / mu; W <- as.vector(mu)       # working response and weights for a Poisson log link
  b <- solve(t(X) %*% (W * X), t(X) %*% (W * z)); cat(i, round(b, 5), "\n") }
m <- glm(y ~ x, family = poisson); coef(m); m$iter
```

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
