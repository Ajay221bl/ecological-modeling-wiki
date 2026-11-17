---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Bayesian Information Criterion"
  - "Schwarz criterion"
  - "Schwarz information criterion"
  - "SBC"
  - "BIC (Schwarz criterion)"
  - "BIC()"
status: seedling
---

# BIC

**In one line:** BIC scores a model as −2 log-likelihood + K log(n), a penalty that grows with sample size and so favours simpler models than AIC does.

> [!info] Before this, it helps to know
> [[AIC]] (its sibling) · [[Number of Parameters]] (the penalty) · [[Marginal Likelihood]] (what it approximates)

## The everyday picture
A handicap that gets stricter as the league gets bigger. With lots of data, BIC demands a much larger improvement in fit before it accepts each extra parameter.

## Start from zero
1. **BIC = −2 log L + K log(n).**
2. **Penalty per parameter = log(n).** At n = 8 it equals AIC's 2. At n = 100 it is 4.6. At n = 1,000 it is 6.9.
3. **Origin:** an approximation to the log marginal likelihood, so BIC differences approximate log Bayes factors under particular vague priors.
4. **Aim:** find the true model, if it is in the set. As n → ∞ BIC picks it with probability approaching 1 (consistency).
5. **AIC's aim is different:** best predictive approximation, assuming truth is not in the set.
6. **Consequence:** BIC tends to choose smaller models. It may miss small real effects. AIC may include spurious ones.
7. **"Bayesian" in the name doesn't make it a Bayesian analysis.** It needs no priors or MCMC.

## In R
```r
set.seed(7); n <- 500; x1 <- rnorm(n); x2 <- rnorm(n); y <- 1 + 0.5 * x1 + 0.08 * x2 + rnorm(n)     # x2 has a small real effect
m1 <- lm(y ~ x1); m2 <- lm(y ~ x1 + x2)
rbind(AIC = c(m1 = AIC(m1), m2 = AIC(m2)), BIC = c(BIC(m1), BIC(m2))); log(c(8, 100, 1000))
```

## In the course
[[Johnson and Omland 2004]], [[Hobbs and Hooten 2015 Ch9]].

## Common confusions
- **"BIC is better because it is stricter."** They answer different questions.

## Explain it back
- At what sample size does BIC's penalty exceed AIC's?

*Pass test:* you can compute BIC and explain why it picks smaller models.

## Connections
- **Builds on:** [[AIC]], [[Marginal Likelihood]], [[Number of Parameters]]
- **Leads to:** [[Bayes Factor]], [[Full Reality]]
- **Part of:** [[MOC - Model Selection]], molecular note [[AIC vs BIC]]

## Flashcards

What is the formula for BIC?
??
BIC = −2 log L + K log(n).
++++

Why does BIC tend to select simpler models than AIC?
??
Its penalty per parameter, log(n), exceeds AIC's 2 once n is above about 7.
++++
