---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "A scoring rule assigns a number to a probabilistic prediction once the outcome is known, rewarding forecasts that put high probability on what happened."
aliases:
  - "Scoring rule"
  - "Proper scoring rule"
  - "Log score"
  - "Brier score"
  - "CRPS"
status: seedling
---

# Scoring Rules

A **scoring rule** assigns a number to a probabilistic prediction once the outcome is known, rewarding forecasts that put high probability on what happened ([[Predictive Modeling|Prediction]], [[Probability Distribution]]). The log score, log p(y observed), is the basis of lppd, [[Expected Log Predictive Density|elpd]], WAIC and LOO ([[Log Pointwise Predictive Density]]). The Brier score, (p − y)² for a 0/1 outcome forecast with probability p, is lower when better. The continuous ranked probability score (CRPS) compares the whole [[Posterior Predictive Distribution|predictive distribution]] with the observed value, rewarding both accuracy and appropriate spread. Squared error scores only a point prediction ([[Mean Square Prediction Error]]).

A rule is proper if forecasters score best on average by reporting their true beliefs; log, Brier and CRPS are proper, which stops a model gaming the score by being over- or under-confident. The log score punishes confident mistakes hard: p = 0.01 for something that happens costs log(0.01) = −4.6. In the code below forecasts of 0.9 and 0.6 for events that happened and 0.2 for one that didn't get log scores of −0.11, −0.51 and −0.22 and Brier scores of 0.01, 0.16 and 0.04.

They are used to judge [[Out-of-sample Prediction]], usually within [[Cross-validation]]. Percent correct is not a good score: it ignores how confident the predictions were and isn't proper.

```r
p <- c(0.9, 0.6, 0.2); y <- c(1, 1, 0)
rbind(log_score = round(log(ifelse(y == 1, p, 1 - p)), 2), brier = round((p - y)^2, 2))
```

## Connections
- **Builds on:** [[Predictive Modeling|Prediction]], [[Probability Distribution]], [[Expected Log Predictive Density]], [[Posterior Predictive Distribution]]
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
