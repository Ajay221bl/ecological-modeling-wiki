---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Bayes factors"
  - "BF"
  - "BF₁₀"
status: seedling
---

# Bayes Factor

**In one line:** a Bayes factor is the ratio of two models' marginal likelihoods, saying how many times more probable the data are under one model than the other.

> [!info] Before this, it helps to know
> [[Marginal Likelihood]] (its ingredients) · [[Bayes' Theorem]] (applied to models) · [[Likelihood Ratio]] (a cousin)

## The everyday picture
Two theories each made a bet before the data came in, spreading their stake over the outcomes they thought plausible. The Bayes factor says which theory's bet paid off better. A theory that hedged across every possibility gains little whatever happens.

## A tiny example
3 successes in 10. Model 1: p = 0.5 exactly. P(data) = 0.117. Model 2: p ~ Uniform(0, 1). P(data) = 1/11 = 0.091. BF₁₂ = 1.29. Barely any preference.

## Start from zero
1. **BF₁₂ = p(y | M₁) / p(y | M₂).**
2. **Each marginal likelihood averages the likelihood over that model's prior.**
3. **Posterior odds = Bayes factor × prior odds.** With equal prior odds, the BF is the posterior odds.
4. **Kass and Raftery's scale:** 1 to 3 barely worth mentioning, 3 to 20 positive, 20 to 150 strong, over 150 very strong.
5. **It can support the simpler model** (BF below 1), unlike a p-value, which can only fail to reject.
6. **Very sensitive to priors.** Widening a vague prior lowers the marginal likelihood and so favours the simpler model, even with the same data (Lindley's paradox). Improper priors make it undefined.
7. **Hard to compute** for complex models: bridge sampling (`brms::bayes_factor()`), Savage-Dickey ratios, or BIC as a crude approximation.

## In R
```r
c(m1 = dbinom(3, 10, 0.5), m2 = 1 / 11, BF12 = dbinom(3, 10, 0.5) / (1 / 11))
ml <- function(w) integrate(function(m) dnorm(0.3, m, 0.15) * dnorm(m, 0, w), -Inf, Inf)$value      # observed mean 0.3 (SE 0.15). H0: mu = 0. H1: mu ~ Normal(0, w)
sapply(c(0.5, 5, 50), function(w) round(dnorm(0.3, 0, 0.15) / ml(w), 2))         # wider prior on H1 → more support for H0, same data
```

## In the course
[[Hobbs and Hooten 2015 Ch9]], [[Johnson and Omland 2004]].

## Common confusions
- **"A vague prior keeps the Bayes factor neutral."** Vague priors push Bayes factors toward the simpler model.
- **"BF is the probability that the model is true."** It is a ratio of evidence. Converting it to a probability needs prior model probabilities.

## Explain it back
- Why does widening a prior favour the null in a Bayes factor?

*Pass test:* you can compute a simple Bayes factor and explain its prior sensitivity.

## Connections
- **Builds on:** [[Marginal Likelihood]], [[Bayes' Theorem]], [[Likelihood Ratio]]
- **Leads to:** [[Model Probabilities]], [[Bayesian Model Averaging]], [[BIC]], [[Evidence Ratio]]
- **Part of:** [[MOC - Bayesian Model Selection]], molecular note [[Bayes Factors vs Predictive Criteria]]

## Flashcards

What is a Bayes factor?
??
The ratio of the marginal likelihoods of two models: p(y | M₁) / p(y | M₂).
++++

How are posterior model odds related to the Bayes factor?
??
Posterior odds = Bayes factor × prior odds.
++++

Why are Bayes factors sensitive to vague priors?
??
Wider priors spread probability thin, lowering the marginal likelihood of the more complex model.
++++
