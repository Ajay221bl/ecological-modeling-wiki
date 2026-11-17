---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Likelihood of the data"
  - "L(θ)"
  - "Likelihood of a parameter"
status: seedling
---

# Likelihood

**In one line:** the likelihood of a parameter value is the probability (or probability density) of the observed data computed as if that parameter value were true.

> [!info] Before this, it helps to know
> [[Conditional Probability]] (it is P(data | parameter)) · [[Probability Mass Function]] and [[Probability Density Function]] (what you evaluate) · [[Parameter]] (what you vary)

## The everyday picture
A detective with one fixed clue and several suspects. For each suspect in turn the detective asks: "if this person did it, how probable is the clue I found?" The suspect who makes the clue most probable is best supported. The clue doesn't change. The suspect does.

## A tiny example
You check 10 nests and 7 succeed. How well do different success probabilities p explain that?
- If p = 0.5: P(7 of 10) = 0.117.
- If p = 0.7: P(7 of 10) = 0.267.
- If p = 0.9: P(7 of 10) = 0.057.
- p = 0.7 makes the data most probable. It has the highest likelihood.

## Start from zero
1. **Choose a probability model for the data,** such as binomial.
2. **Hold the observed data fixed.**
3. **Pick a candidate parameter value.** Compute the probability of the data under it.
4. **That number is the likelihood of that parameter value.**
5. **Repeat for other values and compare.** Higher likelihood means better supported by the data.
6. **Only comparisons mean anything.** A likelihood of 0.267 isn't good or bad alone. It is 2.3 times that of p = 0.5.
7. **For independent observations, multiply:** the likelihood of the dataset is the product of each observation's probability.
8. **Why it is the hinge of all inference in this course:** it is the one place where data and parameters meet. Maximum likelihood, AIC, likelihood ratio tests and Bayes' theorem all run on it.

## See it
![[Likelihood peak.png|700]]
*What to look at:* the data stay fixed. The curve shows how the probability of those data changes as the parameter is varied.

## Why it is this way
Probability reasons forward: given the parameter, what data should I expect? Science needs to reason backward: given these data, which parameter values are plausible? The likelihood is the forward calculation re-read in the backward direction, by fixing the data and varying the parameter.

## In R
```r
dbinom(7, 10, c(0.5, 0.7, 0.9))                     # 0.117, 0.267, 0.057
dbinom(7, 10, 0.7) / dbinom(7, 10, 0.5)             # 0.7 is 2.3 times better supported than 0.5
y <- c(2, 4, 3); prod(dpois(y, 3)); prod(dpois(y, 6))     # three counts: likelihood of mean 3 versus mean 6
```

## In the course
Sep 10, "Likelihood" ([[Course Website]]). [[Hobbs and Hooten 2015 Ch4]], [[Powell and Gale 2015 Ch3]].

## Common confusions
- **"Likelihood is the probability that the parameter is true."** It is the probability of the data given the parameter. Getting the probability of a parameter needs Bayes' theorem and a prior.
- **"Likelihoods sum to 1 across parameter values."** They don't. It is not a probability distribution over the parameter.

## Explain it back
- In the phrase "likelihood of p = 0.7", what is fixed and what varies?
- Why can't a single likelihood value be interpreted alone?

*Pass test:* you can compute and compare likelihoods of two parameter values for a small dataset.

## Connections
- **Builds on:** [[Conditional Probability]], [[Probability Mass Function]], [[Parameter]]
- **Leads to:** [[Likelihood Function]], [[Log-likelihood]], [[Maximum Likelihood Estimation]], [[Bayes' Theorem]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[Probability vs Likelihood]]

## Flashcards

What is the likelihood of a parameter value?
??
The probability (or density) of the observed data, calculated assuming that parameter value.
![[Likelihood peak.png]]
++++

In a likelihood, what is fixed and what varies?
??
The data are fixed. The parameter value varies.
++++

Is the likelihood the probability that a parameter value is correct?
??
No. It is P(data | parameter), not P(parameter | data).
++++
