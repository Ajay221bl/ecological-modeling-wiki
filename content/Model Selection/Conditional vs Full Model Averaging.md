---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Zero method"
  - "Natural average"
  - "Full average"
  - "Conditional average"
  - "Subset average"
status: seedling
---

# Conditional vs Full Model Averaging

**In one line:** in full model averaging a coefficient counts as zero in models that leave its variable out, while in conditional averaging only the models that contain the variable are averaged.

> [!info] Before this, it helps to know
> [[Model Averaging]] (what is being done) · [[Akaike Weight]] (the weights)

## Start from zero
1. **Full ("zero method"):** θ̄ = Σ over all models of wᵢ θ̂ᵢ, with θ̂ᵢ = 0 where absent.
2. **Effect:** shrinks the estimate toward zero in proportion to the weight of models without the variable.
3. **Conditional ("natural average"):** Σ over models containing it of wᵢ θ̂ᵢ / Σ of those wᵢ.
4. **Effect:** no shrinkage. It says how big the effect is if it is present.
5. **Which to use:** full averaging when you want the variable's overall expected contribution (for prediction). Conditional when you want its size given that it matters.
6. **MuMIn reports both.** Say which you used.

## In R
```r
w <- c(0.5, 0.3, 0.2); est <- c(-0.020, NA, -0.024)                     # the variable is absent from model 2
c(full = sum(w * ifelse(is.na(est), 0, est)), conditional = sum((w * est)[!is.na(est)]) / sum(w[!is.na(est)]))
```

## Common confusions
- **"They are the same thing."** They differ whenever some weight lies on models without the variable.

## Explain it back
- Which method shrinks toward zero?

*Pass test:* you can compute both.

## Connections
- **Builds on:** [[Model Averaging]], [[Akaike Weight]]
- **Leads to:** [[Shrinkage]], [[Relative Variable Importance]]
- **Part of:** [[MOC - Model Selection]]

## Flashcards

How does full model averaging treat a variable absent from a model?
??
Its coefficient is set to 0 in that model, shrinking the average toward zero.
++++
