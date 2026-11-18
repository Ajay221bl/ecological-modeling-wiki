---
type: molecular
tags:
  - selection
  - flashcards/eco/selection
description: "In full model averaging a coefficient counts as zero in models that leave its variable out, while in conditional averaging only the models that contain the variable are averaged."
aliases:
  - "Conditional vs Full Model Averaging"
  - "Zero method"
  - "Natural average"
  - "Full average"
  - "Conditional average"
  - "Subset average"
status: seedling
---

# Conditional vs Full Model Averaging

When a variable is absent from some models, [[Model Averaging]] has to decide what its coefficient is there. In **full model averaging**, the "zero method", it counts as zero: θ̄ = Σ over all models of wᵢ θ̂ᵢ, with θ̂ᵢ = 0 where the variable is absent ([[Akaike Weight]]). This shrinks the estimate toward zero in proportion to the weight of models without the variable ([[Shrinkage]]). In **conditional averaging**, the "natural average", only the models that contain the variable are averaged, Σ wᵢ θ̂ᵢ / Σ wᵢ over those models, with no shrinkage.

In the code below, weights 0.5, 0.3 and 0.2 and estimates −0.020, absent and −0.024 give a full average of −0.015 and a conditional average of −0.021. Use full averaging when you want the variable's overall expected contribution, as for prediction, and conditional averaging when you want its size given that it matters.

MuMIn reports both, so say which you used; [[Relative Variable Importance]] is the weight that separates them. They are not the same thing whenever some weight lies on models without the variable.

```r
w <- c(0.5, 0.3, 0.2); est <- c(-0.020, NA, -0.024)                     # the variable is absent from model 2
c(full = sum(w * ifelse(is.na(est), 0, est)), conditional = sum((w * est)[!is.na(est)]) / sum(w[!is.na(est)]))
```

## Connections
- **Builds on:** [[Model Averaging]], [[Akaike Weight]]
- **Leads to:** [[Shrinkage]], [[Relative Variable Importance]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

How does full model averaging treat a variable absent from a model?
??
Its coefficient is set to 0 in that model, shrinking the average toward zero.
++++
