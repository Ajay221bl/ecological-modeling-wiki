---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Evidence"
  - "Marginal distribution of the data"
  - "P(y)"
  - "Prior predictive density"
  - "Model evidence"
status: seedling
---

# Marginal Likelihood

**In one line:** the marginal likelihood is the probability of the observed data averaged over every parameter value the prior allows, and it is the denominator of Bayes' theorem.

> [!info] Before this, it helps to know
> [[Bayes' Theorem]] (where it sits) · [[Law of Total Probability]] (how it is computed) · [[Integral]] (the operation)

## The everyday picture
A class average. Each parameter value gives the data a "mark" (its likelihood). Weight each mark by how plausible that parameter value was beforehand and average them all. The result says how well the model as a whole, prior included, anticipated the data.

## Start from zero
1. **P(y) = Σ over θ of P(y | θ) P(θ)** for discrete θ. An integral for continuous θ.
2. **It doesn't depend on θ.** For a given model and dataset it is one number.
3. **Job 1: normalising.** Dividing by it makes the posterior integrate to 1.
4. **It is usually impossible to compute directly.** With many parameters the integral is over a high-dimensional space.
5. **MCMC avoids it.** Samplers need only likelihood × prior up to a constant.
6. **Job 2: comparing models.** The ratio of two models' marginal likelihoods is a Bayes factor.
7. **It is sensitive to the prior.** A needlessly wide prior spreads plausibility over values that fit badly, lowering the average.

## In R
```r
p <- seq(0.0005, 0.9995, 0.001); w <- 0.001
sum(dbinom(3, 10, p) * dbeta(p, 1, 1) * w)                        # marginal likelihood under a flat prior: 1/11
sum(dbinom(3, 10, p) * dbeta(p, 12, 8) * w)                       # under a prior centred on 0.6: lower, the data weren't what it expected
```

## In the course
[[Hobbs and Hooten 2015 Ch5]] (as the marginal distribution of the data).

## Common confusions
- **"Marginal likelihood is the maximised likelihood."** It is the likelihood averaged over the prior, not its peak.

## Explain it back
- Why can MCMC ignore it?

*Pass test:* you can say what it is and name its two jobs.

## Connections
- **Builds on:** [[Bayes' Theorem]], [[Law of Total Probability]]
- **Leads to:** [[Normalizing Constant]], [[Bayes Factor]], [[MCMC]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is the marginal likelihood?
??
The probability of the data averaged over the prior, P(y) = ∫ P(y | θ) P(θ) dθ. The denominator of Bayes' theorem.
++++

Name two uses of the marginal likelihood.
??
Normalising the posterior and comparing models (Bayes factors).
++++
