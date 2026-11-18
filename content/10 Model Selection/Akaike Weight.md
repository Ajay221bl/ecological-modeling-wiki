---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "An Akaike weight is a model's relative likelihood divided by the sum over all models in the set, read as the weight of evidence that it is the best model of those considered."
aliases:
  - "Akaike weights"
  - "Model weight"
  - "AIC weight"
  - "wᵢ"
  - "AICc weight"
  - "Delta AIC and Akaike Weights"
  - "model weights"
status: seedling
---

# Akaike Weight

Cut a pie into slices [[Proportional To|proportional to]] each model's support: the slices add up to the whole pie, and a model with 0.9 of it is strongly favoured. An **Akaike weight** is a model's slice: its [[Likelihood Ratio|relative likelihood]] exp(−Δᵢ/2) divided by the sum over all models in the set, wᵢ = exp(−Δᵢ/2) / Σⱼ exp(−Δⱼ/2) ([[Delta AIC]], [[Exponential Function]]). With Δ = 0, 1 and 5.3, the relative likelihoods are 1, 0.61 and 0.07, summing to 1.68, so the weights are 0.60, 0.36 and 0.04.

Weights sum to 1 across the set, and Burnham and Anderson read them as the probability that model i is the best Kullback-Leibler model in the set, given the data and the set. Because they depend on the set, adding a near-duplicate model splits the weight: in the code below, adding an exact copy of the top model cuts its weight from 0.60 to 0.37, with the copy taking another 0.37.

Weights are used for ranking, an [[Evidence Ratio]] between two models, [[Model Averaging]], a [[Cumulative Weight]] down the table, and [[Relative Variable Importance]] ([[Candidate Model Set]], [[Anderson and Burnham 2002]], [[Johnson and Omland 2004]], [[Course Website]]). A weight of 0.6 does not mean a 60% chance the model is true; it is the weight for being the best approximation within this set.

```r
aic <- c(m1 = 246.0, m2 = 247.0, m3 = 251.3); d <- aic - min(aic); w <- exp(-d / 2) / sum(exp(-d / 2)); round(w, 2)
w2 <- { a <- c(aic, m1_copy = 246.0); dd <- a - min(a); exp(-dd / 2) / sum(exp(-dd / 2)) }; round(w2, 2)        # adding a duplicate model splits the weight
```

## Connections
- **Builds on:** [[Delta AIC]], [[Candidate Model Set]], [[Proportional To]], [[Likelihood Ratio]]
- **Leads to:** [[Evidence Ratio]], [[Model Averaging]], [[Cumulative Weight]], [[Relative Variable Importance]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

How is an Akaike weight computed?
??
wᵢ = exp(−Δᵢ/2) / Σ exp(−Δⱼ/2).
++++

How are Akaike weights interpreted?
??
As the weight of evidence that each model is the best (in the KL sense) among the candidates.
++++
