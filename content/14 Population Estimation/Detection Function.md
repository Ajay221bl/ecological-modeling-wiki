---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "g(x)"
  - "Half-normal detection function"
  - "Hazard-rate detection function"
  - "Detection function (half-normal, hazard rate)"
  - "Key function"
status: seedling
---

# Detection Function

**In one line:** a detection function g(x) gives the probability of detecting an animal at distance x from the line or point, starting at 1 on the line and falling with distance.

> [!info] Before this, it helps to know
> [[Distance Sampling]] · [[Probability Density]]

## Start from zero
1. **Half-normal:** g(x) = exp(−x² / 2σ²). One parameter σ sets how fast detection fades.
2. **Hazard rate:** g(x) = 1 − exp(−(x/σ)^−b). Has a "shoulder" of near-certain detection near the line, then drops.
3. **Uniform with adjustments** (cosine, polynomial) for flexible shapes.
4. **A good shoulder matters:** detection should be nearly certain close to the line.
5. **Choose among shapes with AIC** and goodness-of-fit tests.
6. **Truncate** the farthest few percent of distances; they add noise, not information.

## See it
![[Detection function.png|700]]
*What to look at:* the hazard-rate curve stays flat near zero (its shoulder) before falling.

## In the course
[[Powell and Gale 2015]] Ch19.

## Common confusions
- **"g(x) is the distribution of distances."** The distances also depend on how many animals exist at each distance; g(x) is the detection probability.

## Explain it back
- What does σ control in a half-normal detection function?

*Pass test:* you can describe the common detection functions.

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
