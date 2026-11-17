---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "95% confidence set"
  - "Confidence set"
  - "Top model set"
status: seedling
---

# Confidence Set of Models

**In one line:** a confidence set of models is the group of top-ranked models that together hold a chosen share of the evidence, such as 95% of the Akaike weight, or that fall within a chosen ΔAIC of the best.

> [!info] Before this, it helps to know
> [[Cumulative Weight]] (one way to build it) · [[Delta AIC]] (another) · [[Model Selection Uncertainty]] (what it expresses)

## The everyday picture
The shortlist of job candidates. You don't yet know which one is best, but you are fairly sure the best is somewhere on this list.

## Start from zero
1. **Rule A:** add models in rank order until cumulative weight reaches 0.95.
2. **Rule B:** all models with Δ below some cut-off (often 2 or 4, sometimes 7).
3. **A big set signals high uncertainty** about the best model.
4. **Interpret the set,** not only the winner: which variables appear consistently?
5. **The name borrows from confidence intervals** but isn't a formal confidence statement.

## In R
```r
tab <- data.frame(model = paste0("m", 1:6), delta = c(0, 0.9, 1.8, 3.5, 6.2, 11)); tab$w <- round(exp(-tab$delta / 2) / sum(exp(-tab$delta / 2)), 3); tab$cum <- cumsum(tab$w)
tab; subset(tab, delta < 2)$model
```

## In the course
[[Anderson and Burnham 2002]].

## Common confusions
- **"Models outside the set are proven wrong."** They are less supported by these data.

## Explain it back
- Name two ways to build a confidence set.

*Pass test:* you can extract a confidence set from a ranking table.

## Connections
- **Builds on:** [[Cumulative Weight]], [[Delta AIC]]
- **Leads to:** [[Model Selection Uncertainty]], [[Model Averaging]]
- **Part of:** [[MOC - Model Selection]]

## Flashcards

What is a confidence set of models?
??
The top-ranked models that together contain a chosen share of total Akaike weight (or lie within a chosen ΔAIC).
++++
