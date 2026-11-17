---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Log-odds scale"
status: seedling
---

# Log Odds

**In one line:** log odds are the natural logarithm of the odds, which stretches probabilities from their 0-to-1 box onto the whole number line.

> [!info] Before this, it helps to know
> [[Odds]] (p over 1 − p) · [[Natural Logarithm]] (the log that undoes e)

## The everyday picture
A dimmer knob with no end stops. Probability is like a slider that hits a wall at 0 and at 1. Log odds are a knob you can turn forever either way: far left is "almost never", zero is "50:50", far right is "almost always".

*Where the picture stops working:* a knob feels evenly spaced. One turn of log odds moves probability a lot near 0.5 and hardly at all near the ends.

## Words you'll need
- **logit(p):** log(p / (1 − p)), another name for log odds.
- **Inverse logit:** the function that turns log odds back into probability, e^x / (1 + e^x) ([[Logistic Function]]).
- **Symmetric:** p and 1 − p give log odds of equal size and opposite sign.

## A tiny example
- p = 0.5: odds 1, log odds = log(1) = **0**.
- p = 0.75: odds 3, log odds = log(3) = **1.10**.
- p = 0.25: odds 1/3, log odds = **−1.10**.
- p = 0.99: odds 99, log odds = **4.60**.
- Going back from 1.10: e^1.10 / (1 + e^1.10) = 3 / 4 = 0.75.

## Start from zero
1. **Probability is bounded on both sides.** 0 to 1.
2. **Odds remove the top bound.** 0 to infinity.
3. **The log removes the bottom bound.** *Why:* the log of a number between 0 and 1 is negative, without limit. So log odds run from minus infinity to plus infinity.
4. **Now a straight line is safe.** Whatever a + bx gives, it converts back to a legal probability.
5. **Convert back with the inverse logit.** p = 1 / (1 + e^(−log odds)).
6. **A handy guide.** Near p = 0.5, a change of 1 in log odds shifts probability by about 0.25 at most (the "divide by 4" rule).

## See it
![[Probability odds log-odds.png|700]]
*What to look at:* the S-curve in the right panel. Equal steps in log odds give big probability changes in the middle and tiny ones at the ends.

## Why it is this way
A linear model adds things up, and sums can be any number. Probabilities can't. The log odds scale is where "adding effects" is legal for yes-or-no data. It is also symmetric about 50:50, so success and failure are treated alike. That is why the logit is the default link for binomial models.

## In R
```r
p <- c(0.25, 0.5, 0.75, 0.99)
qlogis(p)            # -1.10 0.00 1.10 4.60  (logit)
log(p / (1 - p))     # the same by hand
plogis(1.10)         # 0.75 (inverse logit)
plogis(c(-10, 0, 10))   # never leaves 0 to 1
```
`qlogis()` is the logit and `plogis()` is its inverse.

## In the course
`summary()` of a binomial `glm()` reports coefficients in log odds, and the labs convert with `plogis()` ([[Course Website]]; [[Zuur et al. 2009 Ch10]]).

## Common confusions
- **"A coefficient of 0.5 means probability rises by 0.5."** It means log odds rise by 0.5. The change in probability depends on where you start.
- **"Negative log odds are impossible."** Negative just means the event is less likely than not.

## Explain it back
- What probability has log odds of 0? Of 1.1?
- Why does a model for probabilities work on the log odds scale?

*Pass test:* you can convert between probability and log odds and explain why the scale is used.

## Connections
- **Builds on:** [[Odds]], [[Natural Logarithm]]
- **Leads to:** [[Logit Link]], [[Logistic Function]], [[Logistic Regression]]
- **Part of:** [[MOC - Basics from Zero]], molecular note [[Probability, Odds and Log Odds]]

## Flashcards

What are log odds?
??
The natural log of p / (1 − p), also called the logit.
![[Probability odds log-odds.png]]
++++

What probability corresponds to log odds of 0?
??
0.5, because the odds are 1.
++++

Why do logistic models work on the log odds scale?
??
Log odds run from minus to plus infinity, so a straight line can never give an impossible probability.
++++
