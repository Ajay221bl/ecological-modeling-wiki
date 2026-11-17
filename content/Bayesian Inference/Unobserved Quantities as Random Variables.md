---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Parameters as random variables"
  - "Unobserved quantities"
  - "Treating unknowns as random"
status: seedling
---

# Unobserved Quantities as Random Variables

**In one line:** in Bayesian analysis every quantity you haven't observed (parameters, hidden states, missing data, future observations) is treated as a random variable with a probability distribution.

> [!info] Before this, it helps to know
> [[Random Variable]] (the concept being extended) · [[Bayesian Inference]] (the framework) · [[Uncertainty]] (what the distribution expresses)

## The everyday picture
A sealed envelope containing a number. The number is already fixed. You haven't seen it, so you describe your knowledge of it with probabilities: "probably between 10 and 20". The randomness describes your information, not the envelope.

## Start from zero
1. **Split the world into observed and unobserved.**
2. **Observed:** the data. Once seen, they are fixed numbers.
3. **Unobserved:** parameters, latent states (true abundance), missing values, predictions.
4. **Every unobserved quantity gets a distribution.**
5. **Inference means finding the distribution of the unobserved given the observed.**
6. **All unknowns are handled by one rule.** A parameter, a missing data point and a forecast are estimated the same way.
7. **Contrast:** in frequentist inference parameters are fixed and only data are random.

## In R
```r
set.seed(3); theta <- rbeta(5000, 4, 8)                            # an unobserved parameter, described by draws
y_future <- rbinom(5000, 10, theta)                                # an unobserved future count, described the same way
quantile(theta, c(0.025, 0.975)); quantile(y_future, c(0.025, 0.975))
```

## In the course
A founding idea of [[Hobbs and Hooten 2015 Ch5]]: Bayesian analysis treats all unobserved quantities as random variables.

## Common confusions
- **"Calling a parameter random means it fluctuates in nature."** It means our knowledge of it is uncertain.

## Explain it back
- List three kinds of unobserved quantity.

*Pass test:* you can say what is fixed and what is random in a Bayesian analysis.

## Connections
- **Builds on:** [[Random Variable]], [[Bayesian Inference]]
- **Leads to:** [[Posterior Distribution]], [[Latent Variable]], [[Missing Data in Bayesian Models]], [[Posterior Predictive Distribution]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[Frequentist vs Bayesian Inference]]

## Flashcards

How does Bayesian analysis treat unobserved quantities?
??
As random variables with probability distributions, whether they are parameters, latent states, missing data or predictions.
++++
