---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Marginal posterior"
  - "Marginal posterior density"
status: seedling
---

# Marginal Posterior Distribution

**In one line:** a marginal posterior distribution is the posterior of one parameter on its own, with the uncertainty in all other parameters averaged over.

> [!info] Before this, it helps to know
> [[Joint Posterior Distribution]] (what it is cut from) · [[Marginal Probability]] (the same operation) · [[Posterior Draws]] (how it is obtained in practice)

## The everyday picture
Looking at a mountain range from the side. The full range has length and width. Its silhouette against the sky collapses one direction, leaving a single profile.

## Start from zero
1. **Start from the joint posterior** of all parameters.
2. **Integrate out everything except the parameter of interest.**
3. **With MCMC draws this is trivial:** take that parameter's column and ignore the others.
4. **A histogram or density of that column is the marginal posterior.**
5. **Summaries reported in tables** (mean, sd, credible interval) describe marginals.
6. **Uncertainty about the other parameters is already included.** Nothing was held fixed.

## In R
```r
set.seed(6); x <- runif(40, 10, 20); y <- 2 + 0.5 * x + rnorm(40); m <- lm(y ~ x)
draws <- MASS::mvrnorm(4000, coef(m), vcov(m)); slope <- draws[, "x"]             # one column = marginal posterior of the slope
c(mean = mean(slope), quantile(slope, c(0.025, 0.975)))
```

## In the course
[[Hobbs and Hooten 2015 Ch8]] on inference from a single model.

## Common confusions
- **"The marginal posterior fixes the other parameters at their best values."** It averages over them.

## Explain it back
- How do you obtain a marginal posterior from a table of draws?

*Pass test:* you can summarise one parameter from joint draws.

## Connections
- **Builds on:** [[Joint Posterior Distribution]], [[Marginal Probability]]
- **Leads to:** [[Credible Interval]], [[Posterior Summary]], [[Posterior Draws]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What is a marginal posterior distribution?
??
The posterior of a single parameter, averaged over the uncertainty in all the others.
++++

How is a marginal posterior obtained from MCMC output?
??
Take the column of draws for that parameter.
++++
