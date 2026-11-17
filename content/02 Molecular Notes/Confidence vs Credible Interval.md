---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - bayes
aliases:
  - "Credible vs Confidence Interval"
  - "Confidence and credible intervals"
status: seedling
---

# Confidence vs Credible Interval

> [!summary] In plain words
> a confidence interval is produced by a procedure that captures the true value in 95% of repeated studies, whereas a credible interval is a range that holds 95% of the probability for the parameter given this study's data and the prior.

## The everyday picture
Ring toss. A confidence interval is a ring thrown at a fixed peg: 95% of throws land around it, and for any one throw you don't know whether it did. A credible interval is a statement about where the peg probably is, given where you believe it to be after looking.

## The question
Both are "95% intervals" and often have nearly the same endpoints. What is the difference in what I am allowed to say?

## Built from
- [[Confidence Interval]]: a property of the method.
- [[Credible Interval]]: a property of the posterior.
- [[Frequentist Inference]] and [[Bayesian Inference]]: the frameworks behind them.
- [[Sampling Distribution]] and [[Posterior Distribution]]: what each is computed from.

## See it
![[Confidence interval coverage.png|700]]
*What to look at:* the frequentist picture. Many intervals from many studies, most covering the fixed truth. A credible interval is instead a single statement about one posterior.

## The reasoning, step by step
1. **Confidence interval.** The parameter is fixed. The interval is random, since it depends on the sample. "95%" describes the long-run success rate of the recipe.
2. **For your one interval** the truth is inside or it isn't. No probability attaches to it.
3. **Credible interval.** The data are fixed. The parameter has a posterior. "95%" is the posterior probability that the parameter lies in this interval.
4. **Ingredients.** Confidence: likelihood and sampling theory. Credible: likelihood and prior.
5. **Numerical agreement.** With flat priors and regular models the two nearly coincide.
6. **Divergence.** Small samples, informative priors, bounded parameters and hierarchical models.
7. **Wording.** Confidence: "we are 95% confident", meaning the method is reliable. Credible: "there is a 95% probability".

| | Confidence interval | Credible interval |
|---|---|---|
| What is random | The interval | The parameter |
| 95% refers to | Long-run coverage of the method | Posterior probability |
| Needs a prior | No | Yes |
| Can say "95% probability θ is inside" | No | Yes |

**A worked example in numbers.** 3 successes in 10. Wald 95% confidence interval: 0.02 to 0.58. Credible interval under Beta(1, 1): 0.11 to 0.61. Similar width, different centre, different meaning.

## So in practice
State which you are reporting and word it accordingly.

## What would go wrong otherwise
The Bayesian sentence attached to a confidence interval is the single commonest misstatement in applied statistics.

## Explain it back
- Write one correct sentence for each interval type.

*Pass test:* you can interpret both without swapping their meanings.

## Connections
- **Related:** [[Frequentist vs Bayesian Inference]], [[Equal-tailed vs Highest Density Interval]], [[Wald, Profile and Bootstrap Intervals]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What does "95%" refer to in a confidence interval versus a credible interval?
??
Confidence: the long-run proportion of such intervals that cover the true value. Credible: the posterior probability that the parameter lies in this interval.
![[Confidence interval coverage.png]]
++++
