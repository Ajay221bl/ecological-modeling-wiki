---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "In a Bayesian model a missing value is treated as one more unknown, given a distribution, and estimated along with the parameters."
aliases:
  - "Missing data"
  - "Missing values in Bayesian analysis"
  - "Bayesian imputation"
  - "Imputation"
status: seedling
---

# Missing Data in Bayesian Models

A crossword with a smudged clue isn't thrown away: the crossing words narrow down what the smudged answer can be, and you pencil in the candidates. In a Bayesian model a **missing value** is treated the same way, as one more unknown that is given a distribution and estimated along with the parameters ([[Unobserved Quantities as Random Variables]], [[Missing Values]]). The usual practice of dropping every row with a missing value wastes data and can bias results.

A missing response is simply predicted from the model, automatically and at no cost ([[Posterior Predictive Distribution]]). A missing [[Predictor Variable|predictor]] needs a model of its own, such as xᵢ ~ Normal(μ_x, σ_x), after which the missing x values are sampled like parameters ([[Latent Variable]]). Each missing value gets a [[Posterior Distribution]], and its uncertainty flows into the regression coefficients. In brms this uses `mi()` terms; in JAGS or Stan you declare the missing values as parameters. In the code below, 80 of 200 predictor values are removed and a complete-case regression uses only the remaining 120 rows; the commented brms line shows the syntax for using all 200.

You must state why the data are missing: if missingness depends on the unseen value itself, as when animals are not weighed because they are too heavy, no method fixes it without modelling the missingness ([[Hobbs and Hooten 2015 Ch6]]). Filling in the mean is not the same thing: mean imputation ignores uncertainty and distorts relationships.

```r
set.seed(13); n <- 200; x <- rnorm(n); y <- 1 + 2 * x + rnorm(n); x_obs <- x; x_obs[sample(n, 80)] <- NA
coef(lm(y ~ x_obs)); sum(complete.cases(x_obs, y))                   # complete-case analysis uses 120 of 200 rows
# norun (brms fit; shown for the syntax)
# brm(bf(y ~ mi(x_obs)) + bf(x_obs | mi() ~ 1) + set_rescor(FALSE), data = data.frame(y, x_obs))
```

## Connections
- **Builds on:** [[Unobserved Quantities as Random Variables]], [[Missing Values]], [[Predictor Variable]]
- **Leads to:** [[Latent Variable]], [[Posterior Predictive Distribution]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

How does a Bayesian model handle a missing value?
??
As an unobserved random variable with its own distribution, estimated jointly with the parameters.
++++
