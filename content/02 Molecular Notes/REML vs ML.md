---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - mixed
aliases: []
status: seedling
---

# REML vs ML

> [!summary] In plain words
> REML gives less biased variance estimates and is used for final models and for comparing random structures, while ML must be used to compare models that differ in their fixed effects.

## The question
When do I fit with REML and when with ML?

## Built from
- [[REML]] and [[Maximum Likelihood Estimation]].
- [[Top-down Model Selection Protocol]]: where each is used.
- [[Likelihood Ratio Test]] and [[AIC]]: the comparisons.

## The reasoning, step by step
1. **ML variance estimates are biased low** because they ignore the df used by fixed effects.
2. **REML corrects this** by working with residual contrasts.
3. **But REML likelihoods depend on the fixed-effect design matrix,** so REML likelihoods (and AICs) are not comparable across different fixed parts.
4. **Hence:** random-structure comparisons with REML (same fixed part); fixed-effect comparisons with ML; final estimates with REML.
5. **`anova(m1, m2)` on lmer fits refits with ML automatically** (refit = TRUE) because it assumes you compare fixed effects.
6. **GLMMs in lme4 always use ML.**

| Task | Method |
|---|---|
| Compare random structures (same fixed part) | REML |
| Compare fixed effects | ML |
| Report final estimates | REML |
| GLMM (glmer) | ML only |

**A worked example in numbers.** in sleepstudy (random intercept), the subject SD was 37.12 under REML and 36.01 under ML.

## So in practice
Write REML = FALSE explicitly whenever you build a model set that varies the fixed part.

## What would go wrong otherwise
Ranking lmer models with different predictors by their default REML AIC.

## Explain it back
- Why aren't REML likelihoods comparable across fixed structures?

*Pass test:* you can set the right method for each step.

## Connections
- **Related:** [[Likelihood Ratio Test vs AIC]], [[Fixed vs Random Effects]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Mixed Models]]

## Flashcards

Which estimation method compares random structures and which compares fixed effects?
??
Random structures: REML. Fixed effects: ML.
++++

What does anova() do with two REML lmer fits?
??
Refits them with ML before comparing (refit = TRUE).
++++
