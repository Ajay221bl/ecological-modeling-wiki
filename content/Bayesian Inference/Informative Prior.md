---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Informative priors"
  - "Strong prior"
  - "Subjective prior"
status: seedling
---

# Informative Prior

**In one line:** an informative prior concentrates plausibility on a narrow range of parameter values because earlier evidence justifies doing so.

> [!info] Before this, it helps to know
> [[Prior Distribution]] (the general idea) · [[Posterior Distribution]] (what it will shape)

## The everyday picture
An experienced doctor's first impression. Having seen thousands of patients, the doctor starts with firm expectations. It takes strong evidence to overturn them, and when a single test is ambiguous those expectations rightly dominate.

## Start from zero
1. **Built from real knowledge:** published estimates, a pilot study, a meta-analysis, physical limits.
2. **Narrow relative to what the data alone could say.**
3. **It visibly pulls the posterior** when the sample is small.
4. **Benefits:** more precise estimates, use of hard-won earlier results, stabilised models.
5. **Risk:** a confident prior that is wrong biases the answer.
6. **How to build one:** match the prior's mean and standard deviation to the earlier estimate and its uncertainty (moment matching).
7. **Obligations:** cite the source, and show a sensitivity analysis with a weaker prior.

## In R
```r
m <- 0.62; s <- 0.05; k <- m * (1 - m) / s^2 - 1; c(a = m * k, b = (1 - m) * k)       # Beta prior matching an earlier survival estimate of 0.62 (SE 0.05)
a <- m * k; b <- (1 - m) * k; y <- 4; n <- 12
rbind(informative = qbeta(c(.025, .5, .975), a + y, b + n - y), flat = qbeta(c(.025, .5, .975), 1 + y, 1 + n - y))
```

## In the course
[[Hobbs and Hooten 2015 Ch5]] argues that informative priors are a strength where knowledge exists.

## Common confusions
- **"Informative priors are biased, so avoid them."** Throwing away real prior knowledge is also a choice, with a cost in precision.

## Explain it back
- Where could an informative prior for annual survival come from?

*Pass test:* you can turn a published estimate and standard error into a prior.

## Connections
- **Builds on:** [[Prior Distribution]]
- **Leads to:** [[Vague Prior]], [[Weakly Informative Prior]], [[Prior Sensitivity Analysis]], [[Moment Matching]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[How to choose a prior]]

## Flashcards

What is an informative prior?
??
A prior that concentrates probability on a narrow range of values, based on earlier knowledge.
++++
