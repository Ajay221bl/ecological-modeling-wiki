---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "pd"
  - "P(β > 0)"
  - "Posterior probability of an effect"
  - "Probability the effect is positive"
  - "Posterior probability of a hypothesis"
status: seedling
---

# Probability of Direction

**In one line:** the probability of direction is the share of the posterior that lies on one side of zero, read as the probability that an effect is positive (or negative).

> [!info] Before this, it helps to know
> [[Posterior Draws]] (how it is computed) · [[Posterior Distribution]] (what is being measured) · [[P-value|p-value]] (what it is often confused with)

## The everyday picture
"There is an 85% chance of rain tomorrow." A direct probability about the thing you care about, which is how people naturally want results stated.

## Start from zero
1. **Take the posterior draws of a coefficient.**
2. **P(β > 0 | data) = proportion of draws above 0.**
3. **Read it plainly:** "the probability that tree cover reduces bird abundance is 0.97".
4. **Any threshold works:** P(β > 0.1), P(odds ratio > 2), P(survival in A > survival in B).
5. **This is a statement about the hypothesis,** which a p-value is not.
6. **Rough numerical link:** with weak priors, a one-sided p-value ≈ 1 − pd. The meanings differ.
7. **Direction isn't importance.** An effect can be almost surely positive and negligibly small. Ask about a meaningful size too.
8. **In brms:** `hypothesis(fit, "x > 0")`.

## In R
```r
set.seed(6); b <- rnorm(4000, -0.5, 0.27)                                 # posterior draws of a slope
c(prob_negative = mean(b < 0), prob_stronger_than_minus_0.2 = mean(b < -0.2))
```

## In the course
Used when interpreting brms fits ([[Course Website]]). [[Hobbs and Hooten 2015 Ch8]] on probabilities of statements about parameters.

## Common confusions
- **"P(β > 0) = 0.97 is a p-value of 0.03."** Different quantities with different meanings, though sometimes numerically similar.

## Explain it back
- How do you compute P(β > 0) from draws?

*Pass test:* you can report the probability of any statement about a parameter.

## Connections
- **Builds on:** [[Posterior Draws]], [[Posterior Distribution]]
- **Leads to:** [[Credible Interval]], [[P-value|p-value]], [[Statistical Significance]], [[Derived Quantities]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

How is the posterior probability that a coefficient is positive computed?
??
As the proportion of posterior draws greater than zero.
++++
