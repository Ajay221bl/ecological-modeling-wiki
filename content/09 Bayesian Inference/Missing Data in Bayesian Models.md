---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Missing data"
  - "Missing values in Bayesian analysis"
  - "Bayesian imputation"
  - "Imputation"
status: seedling
---

# Missing Data in Bayesian Models

**In one line:** in a Bayesian model a missing value is treated as one more unknown, given a distribution, and estimated along with the parameters.

> [!info] Before this, it helps to know
> [[Unobserved Quantities as Random Variables]] (the principle) · [[Missing Values]] (the practical problem) · [[Posterior Distribution]] (what the missing value gets)

## The everyday picture
A crossword with a smudged clue. You don't throw the puzzle away. The crossing words narrow down what the smudged answer can be, and you pencil in the candidates.

## Start from zero
1. **Usual practice:** drop every row with a missing value. This wastes data and can bias results.
2. **Bayesian view:** a missing response is an unobserved quantity. Predict it from the model. This happens automatically and costs nothing.
3. **A missing predictor needs a model of its own,** such as x_i ~ Normal(μ_x, σ_x). Then missing x values are sampled like parameters.
4. **Each missing value gets a posterior.** Its uncertainty flows into the regression coefficients.
5. **Assumption to state:** why the data are missing. If missingness depends on the unseen value itself (animals not weighed because too heavy), no method fixes it without modeling the missingness.
6. **In brms:** `mi()` terms. In JAGS or Stan: declare the missing values as parameters.

## In R
```r
set.seed(13); n <- 200; x <- rnorm(n); y <- 1 + 2 * x + rnorm(n); x_obs <- x; x_obs[sample(n, 80)] <- NA
coef(lm(y ~ x_obs)); sum(complete.cases(x_obs, y))                   # complete-case analysis uses 120 of 200 rows
# norun (brms fit; shown for the syntax)
# brm(bf(y ~ mi(x_obs)) + bf(x_obs | mi() ~ 1) + set_rescor(FALSE), data = data.frame(y, x_obs))
```

## In the course
[[Hobbs and Hooten 2015 Ch6]] treats missing data as unobserved quantities.

## Common confusions
- **"Filling in the mean is the same thing."** Mean imputation ignores uncertainty and distorts relationships.

## Explain it back
- How is a missing response handled differently from a missing predictor?

*Pass test:* you can explain how a Bayesian model treats a missing value.

## Connections
- **Builds on:** [[Unobserved Quantities as Random Variables]], [[Missing Values]]
- **Leads to:** [[Latent Variable]], [[Posterior Predictive Distribution]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

How does a Bayesian model handle a missing value?
??
As an unobserved random variable with its own distribution, estimated jointly with the parameters.
++++
