---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Density"
  - "Density value"
status: seedling
---

# Probability Density

**In one line:** probability density is the height of a density curve at a point: probability per unit of the variable's scale near that point.

> [!info] Before this, it helps to know
> [[Probability Density Function]] (the curve) · [[Rate of Change]] (density is a "per unit" quantity)

## The everyday picture
Population density. "200 people per square kilometre" isn't a number of people. Multiply by an area and you get people. Likewise "0.2 per gram" isn't a probability. Multiply by a small width in grams and you get one.

## A tiny example
A Normal(11, 2) has density 0.199 at y = 11.
- P(10.95 < Y < 11.05) ≈ 0.199 × 0.1 = 0.0199.

## Start from zero
1. **Density = probability ÷ width,** for a very narrow interval.
2. **So probability ≈ density × width.**
3. **Its units are "per unit of y".** Change grams to kilograms and every density is multiplied by 1000.
4. **What is meaningful is relative density.** A value with twice the density is twice as probable per unit width.
5. **Why this is enough for inference:** likelihoods and posteriors are compared as ratios, and the arbitrary units cancel.

## In R
```r
dnorm(11, 11, 2) * 0.1; pnorm(11.05, 11, 2) - pnorm(10.95, 11, 2)     # density x width matches the true probability
dnorm(11, 11, 2) / dnorm(15, 11, 2)                                   # 11 is 7.4 times as dense as 15
dnorm(0.011, 0.011, 0.002)                                            # same variable in kg: density 1000 times larger
```

## Common confusions
- **"A posterior density of 3 at θ = 0.5 means 300% probability."** It means probability is piled thickly there.

## Explain it back
- How do you turn a density into an approximate probability?

*Pass test:* you can explain density with the population-density analogy.

## Connections
- **Builds on:** [[Probability Density Function]]
- **Leads to:** [[Likelihood]], [[Posterior Distribution]], [[Integral]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What is probability density?
??
Probability per unit of the variable near a point: the height of the PDF.
++++

How do you get an approximate probability from a density?
??
Multiply the density by a small interval width.
++++
