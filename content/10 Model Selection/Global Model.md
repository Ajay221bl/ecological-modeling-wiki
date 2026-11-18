---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "The global model is the most complex model in the candidate set, containing every predictor and structure that appears in any other model."
aliases:
  - "Most complex model"
  - "Full model"
  - "Global model (most general)"
status: seedling
---

# Global Model

The **global model** is the most complex model in the [[Candidate Model Set]], containing every [[Predictor Variable|predictor]] and structure that appears in any other model, so in a nested set every other model is a simplification of it ([[Nested Models]]). It should still be sensible, not every possible interaction.

Check its fit first. If the global model fails its [[Residual Diagnostics|diagnostics]], every simpler model will too, and AIC comparisons among them are meaningless ([[Model Validation]]). It is also where you estimate the [[Overdispersion|overdispersion]] factor ĉ for [[QAIC]], and where [[Collinearity]] is most visible. In the code below a Poisson global model of overdispersed bird counts has a Pearson dispersion of 2.1, a warning to fix before comparing models.

The global model is not the answer; it is the starting point for checks.

```r
set.seed(9); d <- data.frame(tree = runif(80, 0, 60), shrub = runif(80, 0, 30)); d$birds <- rnbinom(80, mu = exp(2 - 0.02 * d$tree), size = 2)
g <- glm(birds ~ tree * shrub, family = poisson, data = d); sum(resid(g, "pearson")^2) / df.residual(g)      # check the global model: overdispersed
```

## Connections
- **Builds on:** [[Candidate Model Set]], [[Nested Models]], [[Predictor Variable]], [[Residual Diagnostics]], [[Overdispersion]]
- **Leads to:** [[QAIC]], [[Model Validation]], [[Collinearity]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is the global model and what is it used for?
??
The most complex model in the set. It is checked for fit first and used to estimate overdispersion.
++++
