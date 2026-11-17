---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The likelihood of a parameter value is the probability (or probability density) of the observed data computed as if that parameter value were true."
aliases:
  - "Likelihood of the data"
  - "L(θ)"
  - "Likelihood of a parameter"
status: seedling
---

# Likelihood

A detective has one fixed clue and several suspects. For each suspect in turn the detective asks: "if this person did it, how probable is the clue I found?" The suspect who makes the clue most probable is best supported. The clue does not change; the suspect does. The **likelihood** of a parameter value is the probability, or probability density, of the observed data computed as if that parameter value were true ([[Conditional Probability]], [[Parameter]]). Choose a probability model for the data, hold the observed data fixed, pick a candidate parameter value, and compute the probability of the data under it from the [[Probability Mass Function]] or [[Probability Density Function]]. That number is the likelihood of that value.

Check 10 nests and 7 succeed. If the success probability p were 0.5, the probability of 7 of 10 would be 0.117; if p = 0.7, it would be 0.267; if p = 0.9, 0.057. So p = 0.7 makes the data most probable: it has the highest likelihood. Only comparisons mean anything. A likelihood of 0.267 is not good or bad on its own, but it is 2.3 times that of p = 0.5. For independent observations, the likelihood of the whole dataset is the product of each observation's probability, as the last line of the code does for three counts under means of 3 and 6. The figure shows the idea: the data stay fixed, and the curve shows how their probability changes as the parameter varies ([[Likelihood Function]]).

Probability reasons forward: given the parameter, what data should I expect? Science needs to reason backward: given these data, which parameter values are plausible? The likelihood is the forward calculation re-read in the backward direction, and it is the one place where data and parameters meet. That is why it is the hinge of all inference in the course: [[Maximum Likelihood Estimation]], AIC, likelihood ratio tests and [[Bayes' Theorem]] all run on it, usually on the log scale ([[Log-likelihood]]). Two confusions. The likelihood is not the probability that the parameter is true; it is the probability of the data given the parameter, and getting the probability of a parameter needs Bayes' theorem and a prior. And likelihoods do not sum to 1 across parameter values, because they are not a probability distribution over the parameter ([[Hobbs and Hooten 2015 Ch4]], [[Powell and Gale 2015 Ch3]], [[Course Website]]).

![[Likelihood peak.png|700]]
*What to look at:* the data stay fixed. The curve shows how the probability of those data changes as the parameter is varied.

```r
dbinom(7, 10, c(0.5, 0.7, 0.9))                     # 0.117, 0.267, 0.057
dbinom(7, 10, 0.7) / dbinom(7, 10, 0.5)             # 0.7 is 2.3 times better supported than 0.5
y <- c(2, 4, 3); prod(dpois(y, 3)); prod(dpois(y, 6))     # three counts: likelihood of mean 3 versus mean 6
```

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
