---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Akaike weights"
  - "Model weight"
  - "AIC weight"
  - "wᵢ"
  - "AICc weight"
status: seedling
---

# Akaike Weight

**In one line:** an Akaike weight is a model's relative likelihood divided by the sum over all models in the set, read as the weight of evidence that it is the best model of those considered.

> [!info] Before this, it helps to know
> [[Delta AIC]] (the input) · [[Exponential Function]] (the conversion) · [[Candidate Model Set]] (the denominator)

## The everyday picture
Shares of a pie. Every model gets a slice proportional to its support, and the slices add up to the whole pie. A model with a tiny slice barely registers. If one model has 0.9 of the pie, the evidence strongly favours it.

## A tiny example
Δ = 0, 1, 5.3. Relative likelihoods 1, 0.61, 0.07. Sum 1.68. Weights 0.60, 0.36, 0.04.

## Start from zero
1. **Relative likelihood of model i:** exp(−Δᵢ/2).
2. **Weight:** wᵢ = exp(−Δᵢ/2) / Σⱼ exp(−Δⱼ/2).
3. **Weights sum to 1** across the set.
4. **Interpretation:** the probability that model i is the best (KL) model in the set, given the data and the set. Burnham and Anderson justify this reading.
5. **They depend on the set.** Adding a near-duplicate model splits the weight.
6. **Uses:** ranking, evidence ratios, model averaging, cumulative weights.

## In R
```r
aic <- c(m1 = 246.0, m2 = 247.0, m3 = 251.3); d <- aic - min(aic); w <- exp(-d / 2) / sum(exp(-d / 2)); round(w, 2)
w2 <- { a <- c(aic, m1_copy = 246.0); dd <- a - min(a); exp(-dd / 2) / sum(exp(-dd / 2)) }; round(w2, 2)        # adding a duplicate model splits the weight
```

## In the course
Model selection lab ([[Course Website]]). [[Anderson and Burnham 2002]], [[Johnson and Omland 2004]].

## Common confusions
- **"A weight of 0.6 means a 60% chance the model is true."** It is the weight for being the best approximation within this set.

## Explain it back
- Compute weights for Δ = 0, 2, 4.

*Pass test:* you can compute weights and explain their dependence on the set.

## Connections
- **Builds on:** [[Delta AIC]], [[Candidate Model Set]]
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
