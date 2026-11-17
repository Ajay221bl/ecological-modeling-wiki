---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Cumulative Akaike weight"
  - "Running sum of weights"
status: seedling
---

# Cumulative Weight

**In one line:** cumulative weight is the running total of Akaike weights down a ranked model table, used to see how many top models are needed to reach a given share of the evidence.

> [!info] Before this, it helps to know
> [[Akaike Weight]] (what is summed) · [[Model Ranking Tables]] (where it appears)

## Start from zero
1. **Sort models by AIC.**
2. **Add weights from the top down.**
3. **The column climbs to 1.**
4. **The models needed to reach, say, 0.95 form a confidence set of models.**
5. **If many models are needed, model selection uncertainty is high.**

## In R
```r
w <- c(0.45, 0.25, 0.12, 0.08, 0.05, 0.03, 0.02); cumsum(w); which(cumsum(w) >= 0.95)[1]
```

## Common confusions
- **"Cumulative weight is a property of each model."** It depends on the ranking position.

## Explain it back
- How many models are needed above to reach 0.95?

*Pass test:* you can read a confidence set from cumulative weights.

## Connections
- **Builds on:** [[Akaike Weight]], [[Model Ranking Tables]]
- **Leads to:** [[Confidence Set of Models]], [[Model Selection Uncertainty]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is cumulative Akaike weight used for?
??
To find the smallest set of top-ranked models containing a chosen share (such as 95%) of the total weight.
++++
