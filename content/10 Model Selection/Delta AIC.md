---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Delta AIC is each model's AIC minus the smallest AIC in the set, so the best model has Δ = 0 and others show how far behind they are."
aliases:
  - "ΔAIC"
  - "Delta AICc"
  - "ΔAICc"
  - "AIC differences"
status: seedling
---

# Delta AIC

Race results shown as "seconds behind the winner" put the winner at zero; a runner 1 second back is a near tie, and one 2 minutes back isn't in the race. **Delta AIC** does the same for models: Δᵢ = AICᵢ − AIC_min, so the best model has Δ = 0 and the others show how far behind they are ([[AIC]]). This removes the arbitrary absolute scale of AIC.

Burnham and Anderson's rough guide is that Δ of 0 to 2 means substantial support, 4 to 7 considerably less, and above 10 essentially none. Δ maps to a [[Likelihood Ratio|relative likelihood]], exp(−Δ/2): Δ = 2 means 0.37 times as likely as the best model and Δ = 10 means 0.007. In the code below, AICs of 246.0, 247.0, 251.3 and 262.8 give Δ of 0, 1.0, 5.3 and 16.8 and relative likelihoods of 1, 0.61, 0.07 and about 0.

Models within 2 of the best aren't clearly worse, but check whether they are just the best model plus an [[Uninformative Parameters|uninformative parameter]]. Δ is relative to this [[Candidate Model Set]], so adding or removing models changes all the Δs; it leads to the [[Akaike Weight]] and [[Evidence Ratio]] and is a column of [[Model Ranking Tables]] ([[Anderson and Burnham 2002]], [[Course Website]]). Δ < 2 does not mean the models are equivalent, only that the data can't clearly separate them; the guide is rough, not a threshold.

```r
aic <- c(m1 = 246.0, m2 = 247.0, m3 = 251.3, m4 = 262.8); delta <- aic - min(aic); round(rbind(delta, rel_lik = exp(-delta / 2)), 3)
```

## Connections
- **Builds on:** [[AIC]], [[Candidate Model Set]], [[Likelihood Ratio]]
- **Leads to:** [[Akaike Weight]], [[Evidence Ratio]], [[Uninformative Parameters]], [[Model Ranking Tables]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is ΔAIC?
??
A model's AIC minus the minimum AIC in the candidate set.
++++

What did Burnham and Anderson suggest about ΔAIC < 2, 4 to 7 and > 10?
??
Substantial support; considerably less support; essentially no support.
++++
