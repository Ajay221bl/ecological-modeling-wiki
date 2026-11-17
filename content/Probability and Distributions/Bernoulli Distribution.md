---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "dbern"
  - "Binary distribution"
status: seedling
---

# Bernoulli Distribution

**In one line:** the Bernoulli distribution is the distribution of a single yes/no outcome: it gives 1 with probability p and 0 with probability 1 − p.

> [!info] Before this, it helps to know
> [[Bernoulli Trial]] (the event it describes) · [[Probability Mass Function]] (two bars)

## The everyday picture
A bar chart with only two bars, one over 0 and one over 1. Their heights are 1 − p and p.

## Start from zero
1. **Support:** {0, 1}.
2. **One parameter:** p.
3. **PMF:** P(Y = y) = p^y (1 − p)^(1 − y). Plug in y = 1 and you get p. Plug in y = 0 and you get 1 − p.
4. **Mean = p. Variance = p(1 − p).**
5. **The variance is fixed by the mean.** It is largest at p = 0.5 and shrinks to zero as p nears 0 or 1. *No separate spread parameter exists,* so single 0/1 observations cannot be overdispersed.
6. **It is the binomial with n = 1.** R: `dbinom(y, 1, p)`.
7. **In models:** the response distribution for logistic regression on individual 0/1 outcomes, and for the latent "occupied or not" state in occupancy models.

## In R
```r
p <- 0.7; dbinom(c(0, 1), 1, p)
set.seed(11); y <- rbinom(1e5, 1, p); c(mean(y), var(y), p * (1 - p))
sapply(c(0.1, 0.5, 0.9), function(p) p * (1 - p))        # variance peaks at 0.5
```

## In the course
[[Hobbs and Hooten 2015 Ch3]]. Used in the logistic regression lab ([[Course Website]]).

## Common confusions
- **"Bernoulli and binomial are different families."** Bernoulli is the binomial with one trial.

## Explain it back
- What is the variance of a Bernoulli with p = 0.2?

*Pass test:* you can write its PMF and moments.

## Connections
- **Builds on:** [[Bernoulli Trial]]
- **Leads to:** [[Binomial Distribution]], [[Logistic Regression]], [[Presence-Absence Data]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What are the mean and variance of a Bernoulli(p)?
??
Mean p, variance p(1 − p).
++++

How is the Bernoulli related to the binomial?
??
It is the binomial with a single trial (n = 1).
++++
