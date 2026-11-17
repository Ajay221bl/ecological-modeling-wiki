---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "An evidence ratio is the Akaike weight of one model divided by that of another, saying how many times more support the data give the first."
aliases:
  - "Evidence ratios"
  - "Ratio of Akaike weights"
status: seedling
---

# Evidence Ratio

Betting odds of 8 to 1 say one horse is eight times as strongly favoured as another, whatever the other horses in the race. An **evidence ratio** is the [[Akaike Weight]] of one model divided by that of another, ER = wᵢ / wⱼ = exp((Δⱼ − Δᵢ)/2), saying how many times more support the data give the first ([[Delta AIC]]). Unlike the weights themselves, it doesn't depend on the other models in the set.

The code below converts AIC gaps into evidence ratios: Δ = 2 gives 2.7, Δ = 4 gives 7.4, Δ = 6 gives 20 and Δ = 10 gives 148. So a Δ of 2 is only modest evidence, less than 3 to 1. Evidence ratios are useful in writing: "the model with tree cover was 7 times better supported than the model without".

They play the same role as a [[Likelihood Ratio]] or a [[Bayes Factor]] ([[Anderson and Burnham 2002]]). An evidence ratio of 3 is not strong evidence; about 3 to 1 is fairly weak.

```r
round(exp(c(2, 4, 6, 10) / 2), 1)
```

## Connections
- **Builds on:** [[Akaike Weight]], [[Delta AIC]]
- **Leads to:** [[Bayes Factor]], [[Likelihood Ratio]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

How is an evidence ratio computed from ΔAIC?
??
exp(Δ/2), where Δ is the AIC difference between the two models.
++++

What evidence ratio corresponds to ΔAIC = 2?
??
About 2.7.
++++
