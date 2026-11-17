---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Marginal distribution"
  - "Marginalising"
  - "Summing out"
  - "Integrating out"
status: seedling
---

# Marginal Probability

**In one line:** a marginal probability is the probability of one thing on its own, found by adding up its joint probabilities over every possibility for the other thing.

> [!info] Before this, it helps to know
> [[Joint Probability]] (what gets summed)

## The everyday picture
The totals written in the margin of a table. A table of sales by product and by month has a "total" column at the right edge. That margin tells you sales per product, with month no longer in the picture.

## A tiny example
P(present, detected) = 0.30, P(absent, detected) = 0.
- P(detected) = 0.30 + 0 = 0.30.
- That is the marginal probability of detection, whatever the true state.

## Start from zero
1. **Start from the joint probabilities of A with every possible value of B.**
2. **Add them up over B.**
3. **What is left is P(A).** B has been "summed out" or "marginalised".
4. **For continuous variables the sum becomes an integral.** "Integrate out".
5. **Why it matters:** often you care about one quantity while others are nuisances you had to include. Marginalising gives a statement about the one that accounts for uncertainty in the others.
6. **In Bayesian work** the marginal posterior of a slope is what you get by ignoring the other parameters' columns in the MCMC output. That simple act is an integration.

## In R
```r
tab <- matrix(c(0.30, 0.10, 0.00, 0.60), 2, byrow = TRUE, dimnames = list(c("present", "absent"), c("detected", "not detected")))
rowSums(tab)        # marginal of true state: 0.4, 0.6
colSums(tab)        # marginal of detection: 0.3, 0.7
set.seed(2); draws <- data.frame(a = rnorm(4000, 2, 1), b = rnorm(4000, 0.5, 0.1))   # pretend posterior draws of two parameters
quantile(draws$b, c(0.025, 0.975))     # marginal interval for b: just use its column
```

## In the course
[[Hobbs and Hooten 2015 Ch3]]. The denominator of Bayes' theorem is a marginal ([[Marginal Likelihood]]).

## Common confusions
- **"Marginal means unimportant."** It means "in the margin of the table".

## Explain it back
- How do you get P(A) from the joint probabilities of A and B?

*Pass test:* you can sum a joint table to its margins.

## Connections
- **Builds on:** [[Joint Probability]]
- **Leads to:** [[Law of Total Probability]], [[Marginal Likelihood]], [[Marginal Posterior Distribution]]
- **Part of:** [[MOC - Probability and Distributions]], molecular note [[Joint, Marginal and Conditional Probability]]

## Flashcards

How is a marginal probability obtained from a joint distribution?
??
By summing (or integrating) the joint probabilities over all values of the other variable.
++++

How do you get a marginal posterior from MCMC draws?
??
Look at that parameter's draws alone, ignoring the other columns.
++++
