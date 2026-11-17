---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Cumulative weight is the running total of Akaike weights down a ranked model table, used to see how many top models are needed to reach a given share of the evidence."
aliases:
  - "Cumulative Akaike weight"
  - "Running sum of weights"
status: seedling
---

# Cumulative Weight

**Cumulative weight** is the running total of Akaike weights down a ranked model table ([[Akaike Weight]], [[Model Ranking Tables]]). Sort the models by AIC and add their weights from the top down; the column climbs to 1. In the code below, weights of 0.45, 0.25, 0.12, 0.08, 0.05, 0.03 and 0.02 accumulate to 0.45, 0.70, 0.82, 0.90, 0.95, 0.98 and 1, so the top five models are needed to reach 0.95.

The models needed to reach a chosen share such as 0.95 form a [[Confidence Set of Models]]. If many models are needed, [[Model Selection Uncertainty]] is high.

Cumulative weight is not a property of each model on its own; it depends on the model's position in the ranking.

```r
w <- c(0.45, 0.25, 0.12, 0.08, 0.05, 0.03, 0.02); cumsum(w); which(cumsum(w) >= 0.95)[1]
```

## Connections
- **Builds on:** [[Akaike Weight]], [[Model Ranking Tables]]
- **Leads to:** [[Confidence Set of Models]], [[Model Selection Uncertainty]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is cumulative Akaike weight used for?
??
To find the smallest set of top-ranked models containing a chosen share (such as 95%) of the total weight.
++++
