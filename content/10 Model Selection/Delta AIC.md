---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "ΔAIC"
  - "Delta AICc"
  - "ΔAICc"
  - "AIC differences"
status: seedling
---

# Delta AIC

**In one line:** delta AIC is each model's AIC minus the smallest AIC in the set, so the best model has Δ = 0 and others show how far behind they are.

> [!info] Before this, it helps to know
> [[AIC]] (what is differenced) · [[Candidate Model Set]] (the set it is relative to)

## The everyday picture
Finishing times shown as "seconds behind the winner". The winner is at zero. A runner 1 second back is a near tie. A runner 2 minutes back isn't in the race.

## Start from zero
1. **Δᵢ = AICᵢ − AIC_min.**
2. **Removes the arbitrary absolute scale.**
3. **Burnham and Anderson's rough guide:** Δ 0 to 2, substantial support. Δ 4 to 7, considerably less. Δ above 10, essentially none.
4. **Δ maps to relative likelihood:** exp(−Δ/2). Δ = 2 means 0.37 times as likely as the best. Δ = 10 means 0.007.
5. **Models within 2 of the best aren't clearly worse.** But check whether they are just the best model plus an uninformative parameter.
6. **Δ is relative to this set.** Adding or removing models changes all the Δs.

## In R
```r
aic <- c(m1 = 246.0, m2 = 247.0, m3 = 251.3, m4 = 262.8); delta <- aic - min(aic); round(rbind(delta, rel_lik = exp(-delta / 2)), 3)
```

## In the course
Model ranking tables in the lab ([[Course Website]]). [[Anderson and Burnham 2002]].

## Common confusions
- **"Δ < 2 means the models are equivalent."** It means the data can't clearly separate them. The guide is rough, not a threshold.

## Explain it back
- What relative likelihood does Δ = 4 imply?

*Pass test:* you can compute Δs and interpret them with care.

## Connections
- **Builds on:** [[AIC]], [[Candidate Model Set]]
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
