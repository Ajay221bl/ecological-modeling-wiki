---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Underfit"
  - "Too-simple model"
status: seedling
---

# Underfitting

**In one line:** underfitting is when a model is too rigid to capture a real pattern, so its answers are systematically off (biased).

> [!info] Before this, it helps to know
> [[Statistical Model]] · [[Bias]]

## The everyday picture
A student who learns only one rule for every exam: "the answer is usually C". He's never wildly surprised, but he's usually wrong, because he learned almost nothing about the subject.

*Where the picture stops working:* the student's rule is obviously silly. A model's missing piece is often subtle, such as a curve treated as a straight line.

## Words you'll need
- **Rigid:** unable to bend enough to follow the real pattern.
- **Systematic error (bias):** missing in the same direction in the same places ([[Bias]]).
- **Residual:** the gap between an observation and the model's prediction ([[Residual]]).
- **Quadratic term:** an x² term that lets a line curve.

## A tiny example
Grass biomass really rises with rain then levels off: 2, 6, 9, 10.5, 11 at rain = 1, 2, 3, 4, 5.
- Fit a flat line (just the mean, 7.7): it under-predicts every wet site and over-predicts every dry one.
- Residuals: −5.7, −1.7, +1.3, +2.8, +3.3. A clear pattern (negative, then positive), not random scatter. That pattern is the fingerprint of underfitting.
- A straight line in rain does much better; a curve better still.

## Start from zero
1. **A model with too few parameters can't follow a real shape.**
2. **So it misses in predictable places.** *Why:* the missing structure doesn't vanish; it shows up as patterned residuals.
3. **That makes its estimates biased.** *Why:* leaving out a real effect lets other terms soak up its influence wrongly.
4. **Detect it by plotting residuals.** Random scatter is fine; curves or trends in residuals mean something is missing ([[Residual]]).
5. **Fix it with the missing term,** guided by your [[Conceptual Model]], not by adding terms blindly ([[Overfitting]]).

## See it
![[Parsimony.png|700]]
*What to look at:* a too-simple model sits between the extremes shown here and misses a real pattern.

## Why it is this way
Leaving out something real biases everything else in the model. "As simple as possible, but no simpler" means underfitting is as much a failure as overfitting.

## In R
```r
rain <- 1:5; grass <- c(2, 6, 9, 10.5, 11)
flat <- lm(grass ~ 1)
resid(flat)                        # -5.7 -1.7 1.3 2.8 3.3: a pattern, not noise
curved <- lm(grass ~ rain + I(rain^2))
round(resid(curved), 2)            # small, patternless
```

## In the course
The other half of the parsimony story in the model selection unit ([[MOC 10 - Model Selection|MOC - Model Selection]]).

## Common confusions
- **"Simplest is always best."** Too simple is biased.
- **"Underfitting shows up as low R²."** Often, but the clearer sign is patterned residuals.

## Explain it back
- Use "the answer is usually C" to explain underfitting.
- What did the residuals of the flat line reveal?
- Why does leaving out a real effect bias the rest of the model?

*Pass test:* you can spot underfitting in a residual plot.

## Connections
- **Builds on:** [[Statistical Model]], [[Bias]]
- **Leads to:** [[Overfitting]], [[Bias-Variance Trade-off]], [[Residual]]
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
