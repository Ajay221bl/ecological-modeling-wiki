---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Most complex model"
  - "Full model"
  - "Global model (most general)"
status: seedling
---

# Global Model

**In one line:** the global model is the most complex model in the candidate set, containing every predictor and structure that appears in any other model.

> [!info] Before this, it helps to know
> [[Candidate Model Set]] (what it belongs to) · [[Nested Models]] (others are usually nested in it)

## Start from zero
1. **Every other model is a simplification of it** (in a nested set).
2. **Check its fit first.** If the global model fails its diagnostics, every simpler model will too, and AIC comparisons are meaningless.
3. **Estimate overdispersion (ĉ) from it** for QAIC.
4. **It should still be sensible:** not every possible interaction.
5. **Collinearity is most visible here.**

## In R
```r
set.seed(9); d <- data.frame(tree = runif(80, 0, 60), shrub = runif(80, 0, 30)); d$birds <- rnbinom(80, mu = exp(2 - 0.02 * d$tree), size = 2)
g <- glm(birds ~ tree * shrub, family = poisson, data = d); sum(resid(g, "pearson")^2) / df.residual(g)      # check the global model: overdispersed
```

## Common confusions
- **"The global model is the answer."** It is the starting point for checks.

## Explain it back
- Why validate the global model before comparing models?

*Pass test:* you can say what the global model is used for.

## Connections
- **Builds on:** [[Candidate Model Set]], [[Nested Models]]
- **Leads to:** [[QAIC]], [[Model Validation]], [[Collinearity]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is the global model and what is it used for?
??
The most complex model in the set. It is checked for fit first and used to estimate overdispersion.
++++
