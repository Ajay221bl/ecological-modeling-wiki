---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Odds of success"
status: seedling
---

# Odds

**In one line:** odds are the chance that something happens divided by the chance that it doesn't.

> [!info] Before this, it helps to know
> [[Proportion]] (part over whole) · [[Probability]] (chance between 0 and 1)

## The everyday picture
Betting talk. "3 to 1 on" means the horse is expected to win 3 times for every 1 time it loses. That is the same as winning 3 out of 4 races, a probability of 0.75. Odds compare wins with losses. Probability compares wins with all races.

*Where the picture stops working:* bookmakers' odds include their profit. Statistical odds are the plain ratio.

## Words you'll need
- **p:** the probability of the event.
- **Odds:** p / (1 − p).
- **Even odds:** odds of 1, meaning p = 0.5.

## A tiny example
Of 20 nests, 15 survive and 5 fail.
- Probability of survival p = 15 / 20 = **0.75**.
- Odds of survival = 15 / 5 = 0.75 / 0.25 = **3**.
- Going back: p = odds / (1 + odds) = 3 / 4 = 0.75.
- p = 0.5 gives odds 1. p = 0.9 gives odds 9. p = 0.99 gives odds 99.

## Start from zero
1. **Count successes and failures.** 15 and 5.
2. **Probability divides successes by everything.** 15 / 20.
3. **Odds divide successes by failures.** 15 / 5.
4. **Odds have no ceiling.** *Why:* as p approaches 1, the failures in the denominator vanish, so odds run from 0 to infinity.
5. **That open top is the point.** Removing the upper wall at 1 is the first step toward a scale where straight-line models work ([[Log Odds]]).

## See it
![[Probability odds log-odds.png|700]]
*What to look at:* probability is trapped between 0 and 1, odds escape upward, log odds are free in both directions.

## Why it is this way
A probability is fenced at 0 and 1, and a straight line doesn't respect fences. Odds remove the top fence. They also behave multiplicatively: a predictor that "doubles the odds" does so wherever you start, while "adds 0.2 to the probability" is impossible if you start at 0.9. So effects in logistic regression are naturally stated in odds.

## In R
```r
p <- c(0.5, 0.75, 0.9, 0.99)
odds <- p / (1 - p); odds          # 1 3 9 99
odds / (1 + odds)                  # back to the probabilities
```
Probability and odds carry the same information on different scales.

## In the course
Logistic regression coefficients are changes in log odds ([[Logistic Regression]]). Homework 2's bleaching model and the deer parasite GLMM are read this way ([[Course Website]]).

## Common confusions
- **"Odds and probability are the same."** p = 0.75 is odds of 3. They agree only when both are tiny.
- **"Odds of 3 means 3%."** It means three successes per failure.

## Explain it back
- Convert a probability of 0.2 to odds and back.
- Why do odds have no upper limit?

*Pass test:* you can move between probability and odds in both directions.

## Connections
- **Builds on:** [[Proportion]], [[Probability]]
- **Leads to:** [[Log Odds]], [[Odds Ratio]], [[Logit Link]]
- **Part of:** [[MOC - Basics from Zero]], molecular note [[Probability, Odds and Log Odds]]

## Flashcards

How do you turn a probability into odds?
??
odds = p / (1 − p).
![[Probability odds log-odds.png]]
++++

How do you turn odds back into a probability?
??
p = odds / (1 + odds).
++++

What are the odds when p = 0.75?
??
3, meaning three successes for every failure.
++++
