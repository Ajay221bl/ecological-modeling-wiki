---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "A detection function g(x) gives the probability of detecting an animal at distance x from the line or point, starting at 1 on the line and falling with distance."
aliases:
  - "g(x)"
  - "Half-normal detection function"
  - "Hazard-rate detection function"
  - "Detection function (half-normal, hazard rate)"
  - "Key function"
status: seedling
---

# Detection Function

A **detection function** g(x) gives the probability of detecting an animal at distance x from the line or point, starting at 1 on the line and falling with distance ([[Distance Sampling]], [[Probability Density]]). The half-normal, g(x) = exp(−x² / 2σ²), has one parameter σ that sets how fast detection fades. The hazard rate, g(x) = 1 − exp(−(x/σ)^−b), has a "shoulder" of near-certain detection near the line before it drops. A uniform key with cosine or polynomial adjustments gives flexible shapes.

A good shoulder matters: detection should be nearly certain close to the line. Choose among shapes with AIC and goodness-of-fit tests, and truncate the farthest few percent of distances, which add noise rather than information ([[AIC]]). The figure shows the hazard-rate curve staying flat near zero, its shoulder, before falling. The area under g(x) is the [[Effective Strip Width]].

It is covered in [[Powell and Gale 2015]] Ch19 ([[Detection on the Line g(0)]]). g(x) is not the distribution of distances: the distances also depend on how many animals exist at each distance, and g(x) is the detection probability.

![[Detection function.png|700]]
*What to look at:* the hazard-rate curve stays flat near zero (its shoulder) before falling.

## Connections
- **Builds on:** [[Distance Sampling]]
- **Leads to:** [[Effective Strip Width]], [[Detection on the Line g(0)]], [[Half-Normal Prior]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

Write the half-normal detection function.
??
g(x) = exp(−x² / 2σ²).
![[Detection function.png]]
++++

What is the shoulder of a detection function?
??
A flat region near the line where detection is almost certain.
++++
