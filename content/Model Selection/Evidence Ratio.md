---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Evidence ratios"
  - "Ratio of Akaike weights"
status: seedling
---

# Evidence Ratio

**In one line:** an evidence ratio is the Akaike weight of one model divided by that of another, saying how many times more support the data give the first.

> [!info] Before this, it helps to know
> [[Akaike Weight]] (the ingredients) · [[Delta AIC]] (an equivalent route)

## The everyday picture
Betting odds between two horses. Odds of 8 to 1 say one horse is eight times as strongly favoured. The odds are unaffected by the other horses in the race.

## Start from zero
1. **ER = wᵢ / wⱼ = exp((Δⱼ − Δᵢ)/2).**
2. **It doesn't depend on the other models** in the set, unlike the weights themselves.
3. **Δ = 2 → ER 2.7. Δ = 4 → 7.4. Δ = 6 → 20. Δ = 10 → 148.**
4. **A Δ of 2 is only modest evidence:** less than 3 to 1.
5. **Useful in writing:** "the model with tree cover was 7 times better supported than the model without".

## In R
```r
round(exp(c(2, 4, 6, 10) / 2), 1)
```

## In the course
[[Anderson and Burnham 2002]].

## Common confusions
- **"ER 3 is strong evidence."** About 3 to 1 is fairly weak.

## Explain it back
- What ER does Δ = 4 imply?

*Pass test:* you can turn a Δ into an evidence ratio.

## Connections
- **Builds on:** [[Akaike Weight]], [[Delta AIC]]
- **Leads to:** [[Bayes Factor]], [[Likelihood Ratio]]
- **Part of:** [[MOC - Model Selection]]

## Flashcards

How is an evidence ratio computed from ΔAIC?
??
exp(Δ/2), where Δ is the AIC difference between the two models.
++++

What evidence ratio corresponds to ΔAIC = 2?
??
About 2.7.
++++
