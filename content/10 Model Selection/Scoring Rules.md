---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Scoring rule"
  - "Proper scoring rule"
  - "Log score"
  - "Brier score"
  - "CRPS"
status: seedling
---

# Scoring Rules

**In one line:** a scoring rule assigns a number to a probabilistic prediction once the outcome is known, rewarding forecasts that put high probability on what happened.

> [!info] Before this, it helps to know
> [[Predictive Modeling|Prediction]] (what is scored) · [[Probability Distribution]] (the forecast) · [[Out-of-sample Prediction]] (the usual setting)

## Start from zero
1. **Log score:** log p(y_observed). The basis of lppd, elpd, WAIC and LOO.
2. **Brier score:** (p − y)² for a 0/1 outcome forecast with probability p. Lower is better.
3. **CRPS (continuous ranked probability score):** compares the whole predictive distribution with the observed value. Rewards both accuracy and appropriate spread.
4. **Squared error** scores only a point prediction.
5. **A rule is proper** if forecasters score best on average by reporting their true beliefs. Log, Brier and CRPS are proper. This stops a model from gaming the score by being over- or under-confident.
6. **The log score punishes confident mistakes hard:** p = 0.01 for something that happens costs log(0.01) = −4.6.

## In R
```r
p <- c(0.9, 0.6, 0.2); y <- c(1, 1, 0)
rbind(log_score = round(log(ifelse(y == 1, p, 1 - p)), 2), brier = round((p - y)^2, 2))
```

## Common confusions
- **"Accuracy (percent correct) is a good score."** It ignores how confident the predictions were and isn't proper.

## Explain it back
- Why are proper scores important?

*Pass test:* you can compute log and Brier scores.

## Connections
- **Builds on:** [[Predictive Modeling|Prediction]], [[Probability Distribution]]
- **Leads to:** [[Log Pointwise Predictive Density]], [[Mean Square Prediction Error]], [[Cross-validation]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]]

## Flashcards

What is a proper scoring rule?
??
A score whose expected value is optimised by reporting one's true predictive distribution, such as the log or Brier score.
++++

What is the Brier score for a binary forecast?
??
(p − y)², the squared difference between forecast probability and outcome.
++++
