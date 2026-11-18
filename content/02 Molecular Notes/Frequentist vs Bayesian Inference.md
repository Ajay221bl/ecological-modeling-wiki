---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - bayes
aliases:
  - "Bayesian vs Frequentist"
  - "Frequentist and Bayesian"
  - "Frequentist vs Bayesian"
  - "frequentist"
status: seedling
---

# Frequentist vs Bayesian Inference

> [!summary] In plain words
> frequentists treat parameters as fixed and ask how the data would vary over repeated sampling, while Bayesians treat the observed data as fixed and describe uncertainty about parameters with probability distributions.

## The everyday picture
Two ways to answer "where are my keys?". The frequentist describes a search method that finds keys 95% of the time. The Bayesian says "there is a 95% chance they are in the kitchen".

## The question
What really differs between the two schools: the philosophy, the mechanics, or the answers?

## Built from
- [[Frequentist Inference]]: fixed parameters, random data, long-run frequencies.
- [[Bayesian Inference]]: distributions for unknowns, updated by data.
- [[Likelihood]]: shared by both.
- [[Prior Distribution]]: only in Bayes.
- [[Confidence Interval]] and [[Credible Interval]]: the two kinds of interval.
- [[P-value|p-value]] and [[Probability of Direction]]: the two kinds of evidence statement.

## The reasoning, step by step
1. **Shared core:** both need a model for how data arise, which gives the likelihood.
2. **What is random?** Frequentist: the data. Bayesian: everything unobserved.
3. **Meaning of probability.** Frequentist: long-run frequency. Bayesian: degree of plausibility.
4. **Extra ingredient.** Bayesian: a prior. Frequentist: none, but a sampling plan and stopping rule matter.
5. **Output.** Frequentist: point estimate, standard error, confidence interval, p-value. Bayesian: a posterior distribution and whatever summaries you take from it.
6. **Computation.** Frequentist: optimisation (maximum likelihood). Bayesian: sampling (MCMC).
7. **Answers.** With weak priors and plenty of data, estimates and intervals are numerically close. They diverge with small samples, strong priors, or complex hierarchical models.
8. **Strengths of each.** Frequentist: fast, no priors to defend, well-known error rates. Bayesian: direct probability statements, natural handling of hierarchy and latent states, easy uncertainty for derived quantities.

| | Frequentist | Bayesian |
|---|---|---|
| Parameters | Fixed, unknown | Random variables |
| Data | Random | Fixed once observed |
| Probability | Long-run frequency | Plausibility |
| Prior | None | Required |
| Fitting | Maximise likelihood | Sample posterior |
| Interval | Confidence | Credible |
| R tools | `lm`, `glm`, `lmer` | `brm`, Stan, JAGS |

## So in practice
Choose by the question and the model. A simple regression with plenty of data: either. Sparse groups, latent states, prior information, or a need for "the probability that...": Bayesian.

## What would go wrong otherwise
Describing a confidence interval as "95% probability the parameter is inside", or a p-value as "the probability the null is true", borrows Bayesian meaning for frequentist numbers.

## Explain it back
- State one sentence each framework can say that the other can't.

*Pass test:* you can fill in the comparison table.

## Connections
- **Related:** [[Confidence vs Credible Interval]], [[Why the posterior is proportional to likelihood times prior]], [[Null Hypothesis Testing vs Model Selection]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is treated as random in frequentist versus Bayesian inference?
??
Frequentist: the data. Bayesian: all unobserved quantities, including parameters.
++++

When do frequentist and Bayesian estimates tend to agree numerically?
??
With weak priors and ample data.
++++
