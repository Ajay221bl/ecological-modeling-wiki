---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Top-down strategy"
  - "Choosing the random structure first"
  - "Beyond optimal model"
  - "Ten-step protocol"
status: seedling
---

# Top-down Model Selection Protocol

**In one line:** the top-down protocol for mixed models starts with all candidate fixed effects, settles the random structure using REML, then simplifies the fixed effects using ML, and finally refits the chosen model with REML.

> [!info] Before this, it helps to know
> [[REML]] · [[Maximum Likelihood Estimation]] · [[Global Model]]

## Start from zero
1. **Step 1:** fit a "beyond optimal" model: all explanatory variables and plausible interactions in the fixed part.
2. **Step 2:** with that fixed part, find the best random structure (and variance structure) by comparing REML fits (AIC or LRT, mindful of the boundary).
3. **Step 3:** with that random structure, find the best fixed part by comparing ML fits.
4. **Step 4:** refit the final model with REML and validate it (residual checks).
5. **Why this order:** if the fixed part is too small, unexplained fixed structure leaks into the random effects, and a poor random structure biases the fixed-effect SEs.
6. **Zuur et al. 2009 Ch5** present this four-step version and a longer ten-step protocol (with linear regression and GLS steps first).
7. **The linear mixed models lab** follows it: compare random structures with AICc, then fixed effects with ML.
mermaid:
flowchart LR
  A[Beyond-optimal fixed part] --> B[Choose random structure with REML]
  B --> C[Choose fixed part with ML]
  C --> D[Refit with REML and validate]

## In the course
[[Zuur et al. 2009 Ch5]]. Linear mixed models lab ([[Course Website]]).

## Common confusions
- **"Select fixed effects first, then add random effects."** The random structure needs a rich fixed part to be judged fairly.

## Explain it back
- Which estimation method is used at each step?

*Pass test:* you can run the protocol on a dataset.

## Connections
- **Builds on:** [[REML]], [[Maximum Likelihood Estimation]], [[Global Model]]
- **Leads to:** [[REML vs ML]], [[Variance Structures]], [[Model Validation]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What are the steps of Zuur's top-down protocol?
??
Beyond-optimal fixed part; choose random structure with REML; choose fixed part with ML; refit with REML and validate.
++++
