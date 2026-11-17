---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Bayesian inference treats unknown quantities as having probability distributions and uses data to update what you believed before (the prior) into what you believe now (the posterior)."
aliases:
  - "Bayesian statistics"
  - "Bayesian analysis"
  - "Bayesian approach"
  - "Bayesian methods"
status: seedling
---

# Bayesian Inference

A detective starts a case with each suspect holding some plausibility. Every clue makes some suspects more plausible and others less, and at the end the detective can say "probably the gardener, though the cook can't be ruled out". **Bayesian inference** works the same way, except that the updating follows one exact rule of probability. Unknown quantities such as a slope or an occupancy rate are given probability distributions that describe how plausible each value is ([[Probability Distribution]], [[Uncertainty]]). You start with a [[Prior Distribution]] saying what is plausible before these data, write a [[Likelihood]] saying how probable the data are for each parameter value, and combine them with [[Bayes' Theorem]]: posterior ∝ likelihood × prior. The [[Posterior Distribution]] is the answer. Suppose you treat every frog occupancy rate from 0 to 1 as equally plausible and then find frogs in 3 of 10 ponds. Your belief afterwards is a curve centred near 0.3, wide because 10 ponds isn't many.

Because the result is a whole distribution, statements are direct: "there is a 95% probability that the slope lies between 0.2 and 0.9" or "the probability the effect is positive is 0.98" ([[Credible Interval]]). Predictions and derived quantities come from the posterior with their uncertainty carried along. The code below does the frog example on a grid: the most plausible rate is 0.30, the posterior mean is 0.33, and the probability that occupancy exceeds 0.5 is 0.11. In the figure, the posterior sits between prior and likelihood, closer to whichever is narrower. For real models the posterior rarely has a neat formula, so it is computed by simulation with [[MCMC]].

Ecologists use Bayesian methods because complex hierarchical models with missing observations and hidden states can be fitted where maximum likelihood struggles, results are probabilities about the thing you care about, and uncertainty flows into every prediction. It is introduced in the Bayesian lectures and labs from early October, and [[Johnson and Omland 2004]] names it one of three inference frameworks ([[Course Website]], [[Hobbs and Hooten 2015 Ch5]]). Three confusions. Bayesian is not "subjective and unscientific": the prior is an explicit, checkable assumption, just as the likelihood is. Bayesian and frequentist answers are usually close numerically with vague priors and plenty of data; the interpretation differs ([[Frequentist Inference]]). And a Bayesian model still needs checking.

![[Prior likelihood posterior.png|700]]
*What to look at:* the posterior sits between prior and likelihood, closer to whichever is narrower (better informed).

```r
p <- seq(0, 1, 0.001); prior <- dbeta(p, 1, 1); lik <- dbinom(3, 10, p)
post <- lik * prior / sum(lik * prior)                     # Bayes' theorem on a grid
p[which.max(post)]; sum(p * post)                          # most plausible value and posterior mean
sum(post[p > 0.5])                                         # probability that occupancy exceeds 0.5
```

## Connections
- **Builds on:** [[Conditional Probability]], [[Likelihood]]
- **Leads to:** [[Bayes' Theorem]], [[Prior Distribution]], [[Posterior Distribution]], [[MCMC]], [[Frequentist Inference]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Frequentist vs Bayesian Inference]]

## Flashcards

What is Bayesian inference?
??
Updating a prior distribution over unknown quantities with data, through the likelihood, to obtain a posterior distribution.
![[Prior likelihood posterior.png]]
++++

What are the three ingredients of a Bayesian analysis?
??
Prior, likelihood and the resulting posterior.
++++

How does a Bayesian treat a parameter?
??
As an unknown quantity described by a probability distribution.
++++
