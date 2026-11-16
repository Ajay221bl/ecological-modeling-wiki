---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Accurate"
status: seedling
---

# Accuracy

**In one line:** accuracy is a loose word for "close to the truth". Some authors mean unbiased; others mean unbiased *and* precise. Powell and Gale suggest saying which you mean.

> [!info] Before this, it helps to know
> [[Bias]] · [[Precision]]

## The everyday picture
Someone says a dart player is "accurate". Do they mean her darts are centred on the bull's-eye on average, or that they all land *in* the bull's-eye? Those are different claims. The word hides the difference.

*Where the picture stops working:* in darts you can see the board and sort it out. In a paper you can't, so the ambiguity can mislead readers.

## Words you'll need
- **Accuracy (sense 1):** unbiased; centred on the truth.
- **Accuracy (sense 2):** both unbiased and precise; close to the truth every time.
- **Mean squared error (MSE):** one way to combine both: average squared distance from the truth, equal to bias² + variance.

## A tiny example
True survival 0.80. Two methods:
- Method B: unbiased (average 0.80) but SE 0.13. "Accurate" in sense 1, not in sense 2.
- Method C: biased (average 0.70) but SE 0.03.
- MSE combines both: B = 0² + 0.13² ≈ **0.016**; C = 0.10² + 0.03² ≈ **0.011**. By MSE, the *biased* method C lands closer to the truth on average. So "which is more accurate?" has different answers depending on the meaning.

## Start from zero
1. **"Accuracy" sounds like one idea but hides two.** Centring (bias) and spread (precision).
2. **Authors use it both ways.** *Why that's a problem:* a reader can't tell which claim was made.
3. **So name the parts instead.** Say "unbiased" or "precise", or both ([[Powell and Gale 2015 Ch2]], p. 16).
4. **If you need one number, use mean squared error.** *Why:* MSE = bias² + variance, so it counts both kinds of miss.

## See it
![[Bias and precision.png|700]]
*What to look at:* only the first target is "accurate" in both senses.

## Why it is this way
Clear words prevent wrong decisions. Splitting accuracy into bias and precision tells you what to fix: bias needs a better method; imprecision needs more data.

## In R
```r
set.seed(5)
truth <- 0.8
B <- replicate(2000, mean(rbinom(10, 1, 0.8)))    # unbiased, imprecise
C <- replicate(2000, mean(rbinom(200, 1, 0.7)))   # biased, precise
c(mse_B = mean((B - truth)^2), mse_C = mean((C - truth)^2))   # about 0.016 vs 0.011
```

## In the course
Powell and Gale's advice on naming bias and precision instead of accuracy ([[Powell and Gale 2015 Ch2]], pp. 16 to 18).

## Common confusions
- **"Accurate and precise mean the same."** Precise is about spread only.
- **"The unbiased method is always closer to the truth."** Not necessarily, as the MSE example shows.

## Explain it back
- Why is "accurate" ambiguous?
- In the example, why does the biased method have the smaller MSE?
- What two words should you use instead of "accurate"?

*Pass test:* you can rewrite any "accurate" in a methods section as a claim about bias, precision or both.

## Connections
- **Builds on:** [[Bias]], [[Precision]]
- **Leads to:** [[Bias-Variance Trade-off]], [[Parsimony]]
- **Part of:** [[MOC - Modeling Foundations]], molecular note [[Bias and Precision]]
- **Go deeper:** [[Powell and Gale 2015 Ch2]]

## Flashcards

Why do Powell and Gale suggest avoiding the word "accuracy"?
??
Some authors mean unbiased and others mean unbiased and precise; naming bias and precision separately avoids confusion.
++++

What does mean squared error combine?
??
Bias and precision: MSE = bias² + variance, the average squared distance of estimates from the truth.
++++
