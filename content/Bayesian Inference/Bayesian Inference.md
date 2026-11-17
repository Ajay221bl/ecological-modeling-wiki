---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Bayesian statistics"
  - "Bayesian analysis"
  - "Bayesian approach"
  - "Bayesian methods"
status: seedling
---

# Bayesian Inference

**In one line:** Bayesian inference treats unknown quantities as having probability distributions and uses data to update what you believed before (the prior) into what you believe now (the posterior).

> [!info] Before this, it helps to know
> [[Conditional Probability]] (the engine) · [[Likelihood]] (how data enter) · [[Probability Distribution]] (how beliefs are written down) · [[Uncertainty]] (what is being described)

## The everyday picture
A detective. Before the evidence, each suspect has some plausibility. Each clue makes some suspects more plausible and others less. At the end the detective holds an updated set of plausibilities, and can say "probably the gardener, though the cook can't be ruled out".

*Where the picture stops working:* a detective's hunches are loose. In Bayesian inference the updating follows one exact rule of probability.

## A tiny example
Is a pond occupied by a frog species? Before surveying, you treat every occupancy rate from 0 to 1 as equally plausible. You find frogs in 3 of 10 ponds. Afterwards your belief about the occupancy rate is a curve centred near 0.3, wide because 10 ponds isn't many.

## Start from zero
1. **Unknowns get distributions.** A parameter such as a slope isn't a single unknown number with nothing more to say. Your uncertainty about it is described by a probability distribution.
2. **Start with a prior:** what is plausible before these data.
3. **Collect data and write a likelihood:** how probable these data are for each parameter value.
4. **Combine them with Bayes' theorem:** posterior ∝ likelihood × prior.
5. **The posterior is the result.** A whole distribution of plausible parameter values given the data.
6. **Summarise it:** a mean or median, and an interval containing 95% of the plausibility.
7. **Statements are direct:** "there is a 95% probability that the slope lies between 0.2 and 0.9". "The probability the effect is positive is 0.98."
8. **Everything else follows from the posterior:** predictions, derived quantities, comparisons, each with its uncertainty carried along.
9. **Computing it usually needs simulation** (MCMC), because the maths rarely has a neat solution.

## See it
![[Prior likelihood posterior.png|700]]
*What to look at:* the posterior sits between prior and likelihood, closer to whichever is narrower (better informed).

## Why it is this way
Ecologists turned to Bayesian methods for three practical reasons. Complex hierarchical models (many levels, missing observations, hidden states) can be fitted where maximum likelihood struggles. Results are stated as probabilities about the thing you care about. And uncertainty flows automatically into every prediction and derived quantity.

## In R
```r
p <- seq(0, 1, 0.001); prior <- dbeta(p, 1, 1); lik <- dbinom(3, 10, p)
post <- lik * prior / sum(lik * prior)                     # Bayes' theorem on a grid
p[which.max(post)]; sum(p * post)                          # most plausible value and posterior mean
sum(post[p > 0.5])                                         # probability that occupancy exceeds 0.5
```

## In the course
Bayesian lectures and labs from early October ([[Course Website]]). [[Hobbs and Hooten 2015 Ch5]] and the whole book. [[Johnson and Omland 2004]] names it as one of three inference frameworks.

## Common confusions
- **"Bayesian means subjective and unscientific."** The prior is an explicit, checkable assumption, as the likelihood is. With reasonable data, sensible priors give similar answers.
- **"Bayesian and frequentist answers always differ."** With vague priors and plenty of data they are usually close numerically. The interpretation differs.
- **"Bayesian inference removes the need to check models."** It still needs model checking.

## Explain it back
- Name the three ingredients and say which one is the answer.
- Give one statement a Bayesian can make that a frequentist can't.

*Pass test:* you can describe the prior-to-posterior update for a simple example.

## Connections
- **Builds on:** [[Conditional Probability]], [[Likelihood]]
- **Leads to:** [[Bayes' Theorem]], [[Prior Distribution]], [[Posterior Distribution]], [[MCMC]], [[Frequentist Inference]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[Frequentist vs Bayesian Inference]]

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
