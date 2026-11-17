---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Identifiable"
  - "Non-identifiability"
  - "Unidentifiable parameters"
  - "Identifiable parameters"
  - "Weak identifiability"
status: seedling
---

# Identifiability

**In one line:** a parameter is identifiable when the data can tell different values of it apart, and non-identifiable when different combinations of parameters fit the data equally well.

> [!info] Before this, it helps to know
> [[Likelihood Function]] (flat when identifiability fails) · [[Parameter]] (what is or isn't pinned down) · [[Collinearity]] (a mild form of the same problem)

## The everyday picture
"Two numbers multiply to 12. What are they?" 3 and 4, 2 and 6, 1 and 12. No amount of staring at the 12 will tell you. You need another piece of information.

## A tiny example
One count per site: y ~ Binomial(N, p). A count of 20 could be N = 40 with p = 0.5, or N = 100 with p = 0.2. Only the product N × p is identified. Repeat visits to each site break the tie.

## Start from zero
1. **Identifiable:** the likelihood has a single clear peak for the parameter.
2. **Non-identifiable:** a ridge or plateau. Many values are equally supported.
3. **Causes:** parameters that enter only as a product or sum. More parameters than the design can separate. No variation in a predictor. Process and observation variance with no replication.
4. **Symptoms in maximum likelihood:** failure to converge, huge standard errors, estimates on a boundary.
5. **Symptoms in Bayes:** the posterior looks like the prior. Chains mix poorly. Parameters are strongly correlated in the posterior.
6. **Remedies:** better design (replication, repeat visits), informative priors from other studies, a simpler model, or reparameterising.
7. **Check by simulation:** simulate from known values and see whether the model recovers them.

## In R
```r
N <- seq(40, 200, 20); p <- 20 / N; round(dbinom(20, N, p), 3)            # very different (N, p) pairs give the data similar probability
set.seed(11); y <- rbinom(5, 60, 0.3); ll <- sapply(N, function(n) max(sapply(seq(.01, .99, .01), function(pp) sum(dbinom(y, n, pp, log = TRUE)))))
round(ll - max(ll), 2)                                                    # even with 5 counts the profile over N is nearly flat
```

## In the course
[[Hobbs and Hooten 2015 Ch6]] on what data are needed to separate sources of variance.

## Common confusions
- **"More iterations will fix it."** Non-identifiability is a property of model plus data. Computing longer doesn't add information.

## Explain it back
- Why can't one count per site separate abundance from detection?

*Pass test:* you can recognise a non-identified parameter and suggest a remedy.

## Connections
- **Builds on:** [[Likelihood Function]], [[Collinearity]]
- **Leads to:** [[Detection Probability]], [[Prior Sensitivity Analysis]], [[Simulating Data]], [[Separating Process and Observation Variance]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What does it mean for a parameter to be non-identifiable?
??
Different values (or combinations) fit the data equally well, so the data cannot determine it.
++++

What is a Bayesian symptom of non-identifiability?
??
The posterior for that parameter closely resembles its prior, often with poor mixing.
++++
