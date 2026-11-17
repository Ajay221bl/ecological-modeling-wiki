---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "Odds are the chance that something happens divided by the chance that it doesn't."
aliases:
  - "Odds of success"
status: seedling
---

# Odds

Bookmakers talk in odds. "3 to 1 on" means a horse is expected to win 3 times for every 1 time it loses, which is the same as winning 3 races out of 4. **Odds** compare successes with failures: the chance that something happens divided by the chance that it does not, odds = p / (1 − p), where p is the [[Probability]]. A probability compares successes with *all* attempts; odds compare them with the failures only. Odds of 1, called *even odds*, mean p = 0.5. (Real bookmakers' odds include their profit; statistical odds are the plain ratio.)

A worked example. Of 20 nests, 15 survive and 5 fail. The probability of survival is 15 / 20 = 0.75. The odds of survival are 15 / 5 = 3, the same as 0.75 / 0.25. To go back, p = odds / (1 + odds) = 3 / 4 = 0.75. Watch what happens near the top: p = 0.5 gives odds 1, p = 0.9 gives odds 9, p = 0.99 gives odds 99. As p approaches 1 the failures in the denominator vanish, so odds have no ceiling; they run from 0 to infinity. Two common slips: odds of 3 do not mean 3%, they mean three successes per failure; and odds and probability are different numbers that agree only when both are tiny.

Why bother with odds at all? Because a [[Proportion]] or probability is fenced in at 0 and 1, and a straight line does not respect fences. Odds remove the top fence, and taking their logarithm removes the bottom one ([[Log Odds]]), which is how logistic regression gets a scale where adding effects is always legal ([[Logit Link]]). Odds also behave multiplicatively: a predictor that "doubles the odds" can do so wherever you start, while "adds 0.2 to the probability" is impossible if you start at 0.9. That is why effects in logistic regression are naturally stated as an [[Odds Ratio]].

![[Probability odds log-odds.png|700]]
*What to look at:* probability is trapped between 0 and 1, odds escape upward, log odds are free in both directions.

```r
p <- c(0.5, 0.75, 0.9, 0.99)
odds <- p / (1 - p); odds          # 1 3 9 99
odds / (1 + odds)                  # back to the probabilities
```
Probability and odds carry the same information on different scales.

## Connections
- **Builds on:** [[Proportion]], [[Probability]]
- **Leads to:** [[Log Odds]], [[Odds Ratio]], [[Logit Link]]
- **See also:** [[Logistic Regression]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Probability, Odds and Log Odds]]

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
