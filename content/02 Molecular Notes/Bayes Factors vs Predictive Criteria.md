---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - selection
aliases: []
status: seedling
---

# Bayes Factors vs Predictive Criteria

> [!summary] In plain words
> Bayes factors ask which model made the data most probable before seeing them (averaging over the prior), while WAIC and LOO ask which fitted model will best predict new data, so they answer different questions and react very differently to vague priors.

## The question
Should I compare Bayesian models with Bayes factors or with LOO?

## Built from
- [[Bayes Factor]] and [[Marginal Likelihood]].
- [[Leave-one-out Cross-validation]] and [[WAIC]].
- [[Model Probabilities]]: what Bayes factors feed.
- [[Prior Distribution]]: what drives the difference.

## The reasoning, step by step
1. **Bayes factor:** ratio of marginal likelihoods. Averages the likelihood over the prior.
2. **LOO/WAIC:** use the posterior, after the data have pulled it into place.
3. **So prior width matters enormously for Bayes factors** (a wider prior lowers the marginal likelihood) and barely for LOO.
4. **Bayes factors answer "which model is true?"**, assuming one is in the set.
5. **LOO answers "which predicts best?"**, with no such assumption.
6. **Bayes factors can strongly favour a point null.** LOO rarely does, because a nested bigger model predicts nearly as well.
7. **Computation:** Bayes factors need marginal likelihoods (bridge sampling). LOO needs only the log-likelihood matrix.

| | Bayes factor | LOO / WAIC |
|---|---|---|
| Uses | Prior predictive | Posterior predictive |
| Sensitive to vague priors | Very | Little |
| Question | Which model is true? | Which predicts best? |
| Assumes true model in set | Yes | No |
| Computation | Hard | Easy from draws |

**A worked example in numbers.** same data (mean 0.3, SE 0.15). The Bayes factor for H₀ over H₁ was 0.56 with a Normal(0, 0.5) prior under H₁, 4.5 with Normal(0, 5) and 45 with Normal(0, 50). The LOO comparison would hardly change.

## So in practice
For most ecological model comparisons use LOO. Use Bayes factors only with carefully justified, informative priors under each model.

## What would go wrong otherwise
Running a Bayes factor with default vague priors and announcing strong support for "no effect".

## Explain it back
- Why does a vaguer prior favour the simpler model in a Bayes factor?

*Pass test:* you can choose and justify one approach.

## Connections
- **Related:** [[AIC vs BIC]], [[AIC, WAIC and LOO]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Bayesian Model Selection]]

## Flashcards

Why are Bayes factors sensitive to priors while LOO is not?
??
Bayes factors average the likelihood over the prior. LOO uses the posterior, which the data dominate.
++++
