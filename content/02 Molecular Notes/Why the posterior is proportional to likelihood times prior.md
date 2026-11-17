---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - bayes
aliases: []
status: seedling
---

# Why the posterior is proportional to likelihood times prior

> [!summary] In plain words
> Bayes' theorem divides likelihood times prior by a constant that doesn't involve the parameters, so the shape of the posterior is fixed by likelihood times prior alone, and that shape is all that is needed.

## The question
Where does "posterior ∝ likelihood × prior" come from, and why is it safe to ignore the denominator?

## Built from
- [[Bayes' Theorem]]: the full formula.
- [[Likelihood]]: P(data | θ) as a function of θ.
- [[Prior Distribution]]: P(θ).
- [[Marginal Likelihood]] and [[Normalizing Constant]]: the denominator.
- [[MCMC]]: what makes the shortcut usable.

## See it
![[Prior likelihood posterior.png|700]]
*What to look at:* at every parameter value, the posterior's height is the product of the other two curves' heights, rescaled.

## The reasoning, step by step
1. Joint probability two ways: P(θ, y) = P(y | θ) P(θ) = P(θ | y) P(y).
2. Solve for the posterior: P(θ | y) = P(y | θ) P(θ) / P(y).
3. P(y) is a sum or integral over all θ. Once the data are in hand it is one fixed number.
4. Dividing a curve by a fixed number changes its height, not its shape.
5. So P(θ | y) ∝ P(y | θ) P(θ).
6. Relative plausibility of two parameter values is the ratio of their likelihood × prior. The constant cancels.
7. MCMC acceptance rules use only such ratios, so they never need P(y).
8. Consequences you can read off the product: where the prior is zero the posterior is zero, whatever the data say. Where the likelihood is flat the posterior equals the prior. A sharp likelihood (much data) overwhelms a broad prior.

**A worked example in numbers.** θ = 0.3 against θ = 0.5 for 3 of 10 with a flat prior. Likelihoods 0.267 and 0.117. Ratio 2.28. The posterior says 0.3 is 2.28 times as plausible as 0.5, with no need for P(y) = 1/11.

## So in practice
To specify a Bayesian model you write down only a likelihood and priors. The software does the rest.

## What would go wrong otherwise
Believing you must compute the marginal likelihood before doing Bayesian inference kept the approach impractical for most of the twentieth century.

## Explain it back
- Why does a prior of zero at some value force the posterior to zero there?

*Pass test:* you can derive the proportional form and explain why the constant is ignorable.

## Connections
- **Related:** [[How MCMC turns a formula into a posterior]], [[Frequentist vs Bayesian Inference]], [[Probability vs Likelihood]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Bayesian Inference]]

## Flashcards

Why can the denominator of Bayes' theorem be ignored when finding the posterior's shape?
??
P(y) does not depend on the parameters. It only rescales the curve.
![[Prior likelihood posterior.png]]
++++
