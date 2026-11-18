---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Underfitting is when a model is too rigid to capture a real pattern, so its answers are systematically off (biased)."
aliases:
  - "Underfit"
  - "Too-simple model"
status: seedling
---

# Underfitting

A student learns one rule for every exam, "the answer is usually C". He is never wildly surprised, but he is usually wrong, because he learned almost nothing about the subject. **Underfitting** is a model in that state: too rigid to capture a real pattern, so its answers are systematically off, which is [[Bias]]. The missing structure does not vanish; it shows up as a pattern in the *residuals*, the gaps between the observations and the model's predictions ([[Residual]]). Missing in the same direction in the same places is the fingerprint of underfitting.

An example. Grass biomass rises with rain and then levels off: 2, 6, 9, 10.5 and 11 at rain = 1, 2, 3, 4 and 5. Fit a flat line, just the mean of 7.7, and the residuals are −5.7, −1.7, +1.3, +2.8 and +3.3: it over-predicts every dry site and under-predicts every wet one. That run of negatives then positives is a clear pattern, not random scatter. A [[Equation of a Line|straight line]] in rain does much better, and adding a *[[Quadratic Term|quadratic term]]*, an x² term that lets the line curve, does better still, leaving small residuals with no pattern.

Leaving out something real does more than reduce fit: it biases the rest of the model, because other terms soak up the missing effect wrongly. That is why "as simple as possible, but no simpler" makes underfitting as much a failure as [[Overfitting]] ([[Parsimony]], [[Bias-Variance Trade-off]]). Detect it by plotting residuals: random scatter is fine, but curves or trends mean something is missing. Low R² often accompanies underfitting, but patterned residuals are the clearer sign. Fix it by adding the missing term, guided by your [[Conceptual Model]] rather than by adding terms blindly ([[Statistical Model]]).

![[Parsimony.png|700]]
*What to look at:* a too-simple model sits between the extremes shown here and misses a real pattern.

```r
rain <- 1:5; grass <- c(2, 6, 9, 10.5, 11)
flat <- lm(grass ~ 1)
resid(flat)                        # -5.7 -1.7 1.3 2.8 3.3: a pattern, not noise
curved <- lm(grass ~ rain + I(rain^2))
round(resid(curved), 2)            # small, patternless
```

## Connections
- **Builds on:** [[Statistical Model]], [[Bias]], [[Equation of a Line]], [[Quadratic Term]]
- **Leads to:** [[Overfitting]], [[Bias-Variance Trade-off]], [[Residual]]
- **See also:** [[MOC 10 - Model Selection]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]]; the principle behind it: [[Parsimony]]
- **Go deeper:** [[Conceptual Model]]

## Flashcards

What is underfitting?
??
A model too simple to capture a real pattern, so it misses systematically and its estimates are biased.
![[Parsimony.png]]
++++

How do you spot underfitting?
??
Residuals show a pattern (a curve or trend) instead of random scatter.
++++
