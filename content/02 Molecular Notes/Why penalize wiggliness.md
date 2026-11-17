---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - gam
aliases: []
status: seedling
---

# Why penalize wiggliness

> [!summary] In plain words
> a flexible curve can always fit the data better by bending more, so without a penalty it would chase noise, and the penalty lets the data, not the analyst, decide how much bending is real.

## The everyday picture
Tracing a coastline from a blurry photo. Follow every speck and you draw rocks that aren't there. Refuse to bend and you miss the bays. The penalty is the instruction "bend only where the photo clearly shows a bend".

## The question
Why does a GAM need a penalty at all?

## Built from
- [[Overfitting]]: what happens without it.
- [[Wiggliness Penalty]] and [[Smoothing Parameter]]: the mechanism.
- [[Bias-Variance Trade-off]]: the principle.
- [[REML for Smoothness Selection]]: how λ is chosen.

## See it
![[Smoothing parameter.png|700]]
*What to look at:* the left panel chases noise, the right panel misses the shape, the middle is just right.

## The reasoning, step by step
1. **k basis functions could fit k wiggles.** With k large the unpenalised fit chases noise.
2. **Choosing k by hand is fragile:** too few misses shape, too many overfits.
3. **Penalty:** fit criterion = misfit + λ × wiggliness.
4. **λ is estimated** to balance the two (REML), so effective complexity (edf) adapts to the data.
5. **Same principle as ridge regression, shrinkage in mixed models and priors** in Bayesian models: constrain flexible models toward simpler ones.

**A worked example in numbers.** in the Penalized Regression Spline note's example with k = 20, a tiny λ gave edf 19, REML chose edf 7.2, and a huge λ gave edf 1 (a straight line).

## So in practice
Choose k generously, use method = "REML", then check k with gam.check().

## What would go wrong otherwise
Setting a small k to "keep it simple" and never checking whether the curve was forced flat.

## Explain it back
- How is a GAM penalty similar to a random effect?

*Pass test:* you can explain the penalty to a labmate in two sentences.

## Connections
- **Related:** [[GLM vs GAM]], [[GCV vs REML for Smoothing]], [[Polynomial vs Spline]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

Why do GAMs penalise wiggliness?
??
Without a penalty, flexible smooths chase noise; the penalty lets the data decide how much curvature is real.
![[Smoothing parameter.png]]
++++
