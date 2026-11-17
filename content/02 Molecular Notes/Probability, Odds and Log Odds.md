---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - basics
aliases:
  - "Three scales for a chance"
  - "Probability to odds to log odds"
status: seedling
---

# Probability, Odds and Log Odds

> [!summary] In plain words
> probability, odds and log odds are three scales for the same chance: probability runs from 0 to 1, odds p/(1 − p) from 0 to infinity, and log odds from minus to plus infinity, which is why logistic regression models the log odds.

## The question
How do probability, odds and log odds relate, and why does logistic regression use log odds?

## Built from
- [[Probability]], [[Odds]], [[Log Odds]].
- [[Logit Link]] and [[plogis()]].
- [[Odds Ratio]].

## The reasoning, step by step
1. **Odds = p / (1 − p).** p = 0.8 gives odds 4 ("4 to 1").
2. **Log odds = log(p / (1 − p)),** the logit. p = 0.8 gives 1.39; p = 0.5 gives 0.
3. **Back again:** p = exp(η) / (1 + exp(η)) = `plogis(η)`.
4. **Why logistic regression uses log odds:** a straight line can take any value, and only the log-odds scale is unbounded, so no prediction can escape 0 to 1.
5. **A slope β adds β to the log odds,** multiplies the odds by exp(β) (an [[Odds Ratio]]), but changes the probability by an amount that depends on where you start.

| p | 0.1 | 0.5 | 0.8 | 0.99 |
|---|---|---|---|---|
| odds | 0.11 | 1 | 4 | 99 |
| log odds | −2.20 | 0 | 1.39 | 4.60 |

## So in practice
Report logistic results as odds ratios or as predicted probabilities at chosen covariate values, not raw log-odds coefficients.

## In R
```r
p <- c(0.1, 0.5, 0.8, 0.99)
round(rbind(p = p, odds = p / (1 - p), log_odds = qlogis(p), back = plogis(qlogis(p))), 2)
```

## What would go wrong otherwise
Saying "odds of 4" means "a 4 percent chance" (it means 80 percent).

## Explain it back
- Why is the log-odds scale used for the linear predictor?

*Pass test:* you can convert among the three scales by hand.

## Connections
- **Related:** [[How to interpret a logistic regression coefficient]], [[Why GLMs need a link function]], [[Predictions on Link vs Response Scale]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

Convert p = 0.8 to odds and log odds.
??
Odds 4; log odds log(4) = 1.39.
++++

What does exp(β) mean in logistic regression?
??
The factor the odds are multiplied by per unit of x (odds ratio).
++++
