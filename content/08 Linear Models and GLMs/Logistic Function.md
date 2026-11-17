---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Inverse logit"
  - "Sigmoid function"
  - "Expit"
  - "plogis"
status: seedling
---

# Logistic Function

**In one line:** the logistic function squashes any number on the whole real line into a value between 0 and 1 along an S-shaped curve.

> [!info] Before this, it helps to know
> [[Exponential Function]] (inside it) · [[Log Odds]] (what it takes as input) · [[Probability]] (what it returns)

## The everyday picture
A dimmer switch with soft ends. Turn the knob far left and the light is essentially off. Far right, essentially full. In the middle a small turn makes a big difference. However far you turn, the light can't go below off or above full.

## A tiny example
Inputs −4, −1, 0, 1, 4 give 0.018, 0.269, 0.5, 0.731, 0.982.

## Start from zero
1. **f(x) = 1 / (1 + e^(−x)) = e^x / (1 + e^x).**
2. **Input:** any real number. **Output:** strictly between 0 and 1.
3. **f(0) = 0.5.**
4. **Symmetric:** f(−x) = 1 − f(x).
5. **Steepest in the middle,** with slope 1/4 at x = 0. *So near p = 0.5, a change of 1 in x moves p by at most 0.25.*
6. **It is the inverse of the logit:** if x = log(p/(1 − p)), then p = f(x).
7. **Why models need it:** a linear predictor can be any number, a probability can't. The logistic function converts one to the other in logistic regression, occupancy and survival models.
8. **In R: `plogis(x)`.**

## See it
![[Logistic function.png|700]]
*What to look at:* the S curve flattening at 0 and 1, with the steepest point at 0.5.

## In R
```r
plogis(c(-4, -1, 0, 1, 4))
1 / (1 + exp(-1))
plogis(qlogis(0.3))                       # logit then inverse logit returns 0.3
(plogis(0.01) - plogis(-0.01)) / 0.02     # slope at the centre: 0.25
```

## In the course
[[Hobbs and Hooten 2015 Ch2]], [[Guthery and Bingham 2007]] and the logistic regression lab ([[Course Website]]).

## Common confusions
- **"Logistic and logit are the same."** They are inverses. Logit: probability to real line. Logistic: real line to probability.

## Explain it back
- What is the logistic function of 0?

*Pass test:* you can convert a log-odds value to a probability.

## Connections
- **Builds on:** [[Exponential Function]], [[Log Odds]]
- **Leads to:** [[Logit Link]], [[Logistic Regression]], [[plogis()|plogis() and qlogis()]], [[Inverse Link Function]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], molecular note [[Probability, Odds and Log Odds]]

## Flashcards

What is the logistic (inverse logit) function?
??
f(x) = 1 / (1 + e^(−x)), mapping any real number to a value between 0 and 1.
![[Logistic function.png]]
++++

Which R function computes the inverse logit?
??
plogis().
++++

What is the maximum slope of the logistic function?
??
1/4, at x = 0 (p = 0.5).
++++
