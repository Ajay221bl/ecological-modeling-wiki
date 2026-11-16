---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Binomial trial"
  - "Bernoulli trial"
  - "Success/failure data"
status: seedling
---

# Binomial Sampling

**In one line:** binomial sampling is any study where each of n separate units has just two possible outcomes (alive or dead, present or absent, tag kept or lost), each with the same chance p, and you count the "successes".

> [!info] Before this, it helps to know
> [[Factorials and Binomial Coefficient]] (counting the ways k successes can happen) · [[Continuous vs Discrete Data]] (binary data)

## The everyday picture
Free throws in basketball. Each shot either goes in or it doesn't. A player who makes 70% of shots takes 10 shots. She won't make exactly 7 every time: some days 5, some days 9. "How many go in out of 10?" is binomial.

Now flip it around. You watch a stranger take 10 shots and 7 go in. What's your best guess of her skill? About 70%. That backwards step, from the count to the chance, is how Powell and Gale estimate survival, tag retention and detection.

*Where the picture stops working:* a player gets tired, so later shots may have a lower chance. Binomial sampling assumes every try has the *same* chance and doesn't affect the others.

## Words you'll need
- **Trial:** one unit with two possible outcomes (one animal, one tag, one shot).
- **Success:** the outcome you're counting (alive, tag kept). It needn't be "good".
- **p:** the chance of success on each trial.
- **n:** the number of trials. **k:** the number of successes.
- **Independent:** one trial's outcome doesn't change another's chances.
- **Binomial distribution:** the rule for how likely each k is, given n and p ([[Binomial Distribution]]).
- **Likelihood:** how probable the observed data are for a given value of p ([[Likelihood]]).
- **Maximum likelihood estimate (MLE):** the value of p that makes the observed data most probable ([[Maximum Likelihood Estimation]]).

## A tiny example
10 fish tagged, 7 kept their tags ([[Powell and Gale 2015 Ch3]], p. 24). Which value of p best explains that? Try three. ($\binom{10}{7}$ = 120 ways to choose which 7 kept their tags.)
- If p = 0.5: P(7 of 10) = 120 × 0.5⁷ × 0.5³ = **0.117**
- If p = 0.7: P(7 of 10) = 120 × 0.7⁷ × 0.3³ = **0.267**
- If p = 0.9: P(7 of 10) = 120 × 0.9⁷ × 0.1³ = **0.057**

p = 0.7 makes "7 of 10" most probable, so it's the maximum likelihood estimate. It's exactly 7/10, the common-sense answer, and now you know *why* it's the right one.

## Start from zero
1. **Many field outcomes have only two possibilities.** A collared sheep is alive or dead at year's end. A tag stays or falls off. A species is detected or not ([[Powell and Gale 2015 Ch3]], p. 22).
2. **Each unit is one trial.** If each has the same success chance p and they don't affect each other, the number of successes k out of n follows a [[Binomial Distribution]].
3. **The probability of exactly k successes is $\binom{n}{k} p^k (1-p)^{n-k}$.** Read it piece by piece. *Why each piece:* $p^k$ is the chance that k particular units all succeed; $(1-p)^{n-k}$ is the chance the rest all fail; and $\binom{n}{k}$ counts how many different sets of k units could be the successful ones ([[Factorials and Binomial Coefficient]]). Multiplying works because the trials are independent.
4. **Turn it around to estimate p.** You saw k of n, so ask which p makes that most probable. The answer is always p̂ = k/n. That's [[Maximum Likelihood Estimation]], and Powell and Gale build their whole primer from this example.
5. **The two key assumptions are independence and constant p.** *Why they matter:* if animals in one herd die together (not independent), or older animals survive less (p not constant), real counts vary more than the binomial expects ([[Overdispersion]]).

## See it
![[Binomial sampling.png|700]]
*What to look at:* even with a true survival of 0.25, anywhere from about 2 to 9 survivors out of 20 is quite possible. That spread is sampling variation.

## Why it is this way
Two-outcome data are everywhere in wildlife work, and the binomial is the simplest honest description of them: it uses only n and p, and it follows directly from counting and multiplying chances. It's the model underneath survival estimation, presence and absence data, detection probability and logistic regression ([[Logistic Regression]]). Getting comfortable with it here makes GLMs feel natural later.

## In R
```r
dbinom(7, size = 10, prob = c(0.5, 0.7, 0.9))   # 0.117 0.267 0.057
p_grid <- seq(0, 1, by = 0.01)
lik <- dbinom(7, 10, p_grid)
p_grid[which.max(lik)]                           # 0.7: the value that maximizes the likelihood
plot(p_grid, lik, type = "l", xlab = "p", ylab = "Likelihood of 7 of 10")
rbinom(5, size = 20, prob = 0.25)                # simulate 5 studies of 20 sheep
```

## In the course
Powell and Gale introduce binomial sampling as one of the "Questions to ponder" in Ch2 and work it out in Ch3 ([[Powell and Gale 2015 Ch3]], pp. 22 to 26). It's the basis for the likelihood ideas used in model selection ([[Likelihood]], [[AIC]]).

## Common confusions
- **Bernoulli vs binomial.** A Bernoulli is one trial (0 or 1). A binomial counts the successes in n Bernoulli trials ([[Bernoulli Distribution]]).
- **"Grouped animals are separate trials."** If they share a fate (same herd, same nest), they're not independent. The fix is to model the grouping ([[Random Effect]]).
- **"p̂ = 0.7 means exactly 70% survive."** It's the best guess; the true p could easily be 0.5 or 0.85 with only 10 animals.

## Explain it back
- Use free throws to explain binomial sampling and the backwards step to estimating p.
- What does each of the three pieces of the binomial formula stand for?
- Why is 0.7 the best estimate after 7 of 10 tags stayed on?

*Pass test:* you can say whether a dataset fits binomial sampling by checking two outcomes, the same p and independence.

## Connections
- **Builds on:** [[Factorials and Binomial Coefficient]], [[Continuous vs Discrete Data]]
- **Leads to:** [[Binomial Distribution]], [[Likelihood]], [[Maximum Likelihood Estimation]], [[Logistic Regression]]
- **Part of:** [[MOC - Modeling Foundations]]
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
