---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Binomial sampling is any study where each of n separate units has just two possible outcomes (alive or dead, present or absent, tag kept or lost), each with the same chance p, and you count the \"successes\"."
aliases:
  - "Binomial trial"
  - "Success/failure data"
status: seedling
---

# Binomial Sampling

A basketball player who makes 70% of her free throws takes 10 shots. She will not make exactly 7 every time; some days 5, some days 9. "How many go in out of 10?" is a binomial question. Now flip it around: you watch a stranger take 10 shots and 7 go in, so what is your best guess of her skill? About 70%. **Binomial sampling** is any study where each of n separate units, called *trials*, has just two possible outcomes (alive or dead, present or absent, tag kept or lost), each with the same chance p of "success", and you count the successes, k. "Success" is just the outcome you count; it need not be good. That backwards step, from the count to the chance, is how Powell and Gale estimate survival, [[Tag Loss|tag retention]] and detection.

The probability of exactly k successes is $\binom{n}{k} p^k (1-p)^{n-k}$, the [[Binomial Distribution]]. Each piece has a reason: $p^k$ is the chance that k particular units all succeed, $(1-p)^{n-k}$ is the chance that the rest all fail, and $\binom{n}{k}$ counts how many different sets of k units could be the successful ones ([[Factorials and Binomial Coefficient]]); multiplying is allowed because the trials are independent. Now estimate p. Ten fish are tagged and 7 keep their tags ([[Powell and Gale 2015 Ch3]]). There are $\binom{10}{7}$ = 120 ways to choose which 7. If p = 0.5, P(7 of 10) = 120 × 0.5⁷ × 0.5³ = 0.117; if p = 0.7, 120 × 0.7⁷ × 0.3³ = 0.267; if p = 0.9, 120 × 0.9⁷ × 0.1³ = 0.057. The value p = 0.7 makes the observed result most probable, so it is the *maximum likelihood estimate*, and it is always p̂ = k / n, the common-sense answer, now with a reason behind it ([[Likelihood]], [[Maximum Likelihood Estimation]]). With only 10 animals the true p could easily be 0.5 or 0.85, and even with a true survival of 0.25, anywhere from about 2 to 9 survivors out of 20 is quite possible; that spread is [[Sampling Variation|sampling variation]].

Two assumptions carry the whole model: the trials are independent, and p is the same for every trial. A tired player breaks the second; animals in one herd that live or die together break the first. When either fails, real counts vary more than the binomial expects ([[Overdispersion]]), and the fix is to model the grouping, for example with a [[Random Effect]]. Do not confuse the binomial with the [[Bernoulli Distribution]]: a Bernoulli is one trial (0 or 1), and a binomial counts the successes in n of them. Two-outcome data are everywhere in wildlife work, and the binomial underlies survival estimation, [[Presence-Absence Data|presence-absence data]], [[Detection Probability|detection probability]] and [[Logistic Regression]], so getting comfortable with it here makes [[Generalized Linear Model|GLMs]] feel natural later. It is also the basis for the likelihood ideas used in [[Model Selection|model selection]] ([[AIC]]). The data are discrete counts ([[Continuous vs Discrete Data]]).

![[Binomial sampling.png|700]]
*What to look at:* even with a true survival of 0.25, anywhere from about 2 to 9 survivors out of 20 is quite possible. That spread is sampling variation.

```r
dbinom(7, size = 10, prob = c(0.5, 0.7, 0.9))   # 0.117 0.267 0.057
p_grid <- seq(0, 1, by = 0.01)
lik <- dbinom(7, 10, p_grid)
p_grid[which.max(lik)]                           # 0.7: the value that maximizes the likelihood
plot(p_grid, lik, type = "l", xlab = "p", ylab = "Likelihood of 7 of 10")
rbinom(5, size = 20, prob = 0.25)                # simulate 5 studies of 20 sheep
```

## Connections
- **Builds on:** [[Factorials and Binomial Coefficient]], [[Continuous vs Discrete Data]], [[Sampling Variation]]
- **Leads to:** [[Binomial Distribution]], [[Likelihood]], [[Maximum Likelihood Estimation]], [[Logistic Regression]], [[Tag Loss]], [[Presence-Absence Data]], [[Detection Probability]], [[Generalized Linear Model]], [[Model Selection]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]]
- **Go deeper:** [[Powell and Gale 2015 Ch3]]

## Flashcards

What makes a study "binomial sampling"?
??
n independent units, each with only two outcomes and the same success probability p; you count successes.
![[Binomial sampling.png]]
++++

What does each part of C(n,k) p^k (1−p)^(n−k) represent?
??
p^k: chance of k specified successes; (1−p)^(n−k): chance the rest fail; C(n,k): the number of ways to choose which units succeed.
++++

7 of 10 tags retained. What is the maximum likelihood estimate of retention, and why?
??
0.7: of all possible p values, it makes observing 7 of 10 most probable.
++++
