---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - gam
aliases: []
status: seedling
---

# GCV vs REML for Smoothing

> [!summary] In plain words
> GCV chooses smoothness by approximating prediction error and REML by treating the smooth as a random effect, and REML is preferred because it is more stable and less prone to overfitting.

## The question
Which method = should I use in gam()?

## Built from
- [[Generalized Cross-validation]] and [[REML for Smoothness Selection]].
- [[Smoothing Parameter]]: what both choose.

## The reasoning, step by step
1. **GCV:** minimise approximate leave-one-out error. UBRE for known-scale families.
2. **REML:** maximise the restricted likelihood with smooths as random effects.
3. **GCV's criterion can be flat or have several minima,** so it sometimes picks very wiggly fits.
4. **REML is smoother and more reliable,** and Pedersen et al. strongly recommend it (or ML).
5. **For comparing models with different parametric terms by AIC or LRT, use ML.**

| | GCV / UBRE | REML |
|---|---|---|
| Idea | Prediction error | Mixed-model likelihood |
| mgcv | `"GCV.Cp"` (default) | `"REML"` |
| Overfitting risk | Higher | Lower |
| Recommended | Rarely | Usually |

**A worked example in numbers.** across 100 simulated straight-line datasets (n = 100), GCV gave edf above 1.5 in 28% and up to 8.2; REML in 23% and at most 4.8.

## So in practice
Always type method = "REML".

## What would go wrong otherwise
Leaving the default and getting a wiggly curve that won't replicate.

## Explain it back
- What is mgcv's default method?

*Pass test:* you can justify REML.

## Connections
- **Related:** [[Why penalize wiggliness]], [[REML vs ML]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

Which smoothing selection method is generally recommended for mgcv GAMs?
??
REML (method = "REML").
++++
