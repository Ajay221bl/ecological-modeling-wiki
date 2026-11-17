---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "A confidence set of models is the group of top-ranked models that together hold a chosen share of the evidence, such as 95% of the Akaike weight, or that fall within a chosen ΔAIC of the best."
aliases:
  - "95% confidence set"
  - "Confidence set"
  - "Top model set"
status: seedling
---

# Confidence Set of Models

A shortlist of job candidates says you don't yet know which one is best, but you are fairly sure the best is on the list. A **confidence set of models** is that shortlist: the top-ranked models that together hold a chosen share of the evidence. One rule adds models in rank order until the [[Cumulative Weight]] reaches 0.95; another keeps all models with [[Delta AIC]] below a cut-off, often 2 or 4, sometimes 7.

In the code below six models with Δ of 0, 0.9, 1.8, 3.5, 6.2 and 11 have weights 0.44, 0.28, 0.18, 0.08, 0.02 and 0.002; the 95% set holds the top four and the Δ < 2 set the top three. A big set signals high [[Model Selection Uncertainty]], so interpret the set and not only the winner: which variables appear consistently? [[Model Averaging]] over the set is one way to use it.

The name borrows from confidence intervals but isn't a formal confidence statement ([[Anderson and Burnham 2002]]). Models outside the set are not proven wrong, only less supported by these data.

```r
tab <- data.frame(model = paste0("m", 1:6), delta = c(0, 0.9, 1.8, 3.5, 6.2, 11)); tab$w <- round(exp(-tab$delta / 2) / sum(exp(-tab$delta / 2)), 3); tab$cum <- cumsum(tab$w)
tab; subset(tab, delta < 2)$model
```

## Connections
- **Builds on:** [[Cumulative Weight]], [[Delta AIC]]
- **Leads to:** [[Model Selection Uncertainty]], [[Model Averaging]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is a confidence set of models?
??
The top-ranked models that together contain a chosen share of total Akaike weight (or lie within a chosen ΔAIC).
++++
