---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Accuracy is a loose word for \"close to the truth\". Some authors mean unbiased; others mean unbiased *and* precise. Powell and Gale suggest saying which you mean."
aliases:
  - "Accurate"
status: seedling
---

# Accuracy

Someone says a dart player is "accurate". Do they mean her darts are centred on the bull's-eye on average, or that they all land in the bull's-eye? Those are different claims, and the word hides the difference. **Accuracy** is a loose word for "close to the truth", and authors use it in two senses: some mean *unbiased*, centred on the truth on average ([[Bias]]); others mean unbiased *and* precise, close to the truth every time ([[Precision]]). On a dartboard you can look and sort it out, but in a paper you cannot, so the ambiguity can mislead readers. Powell and Gale's advice is to say which you mean, or better, to name the two parts directly ([[Powell and Gale 2015 Ch2]]).

A worked example shows why it matters. True survival is 0.80, and two methods estimate it. Method B is unbiased (its estimates average 0.80) but imprecise, with a [[Standard Error|standard error]] of 0.13. Method C is biased (it averages 0.70) but precise, with a standard error of 0.03. Which is more accurate? In the first sense, B. If you want one number that counts both kinds of miss, use the *mean squared error* (MSE), the average squared distance from the truth, which equals bias² + variance. For B it is 0² + 0.13² ≈ 0.016; for C it is 0.10² + 0.03² ≈ 0.011. By MSE the *biased* method lands closer to the truth on average, so "which is more accurate?" has different answers depending on the meaning.

Splitting accuracy into its two parts is more than pedantry, because it tells you what to fix. Bias needs a better method, since more data will not move the centre of the cluster; imprecision needs more data or a more efficient design. Two common confusions follow: "accurate" and "precise" do not mean the same thing (precise is about spread only), and an unbiased method is not always closer to the truth, as the MSE example shows. That second point is the seed of the [[Bias-Variance Trade-off]].

![[Bias and precision.png|700]]
*What to look at:* only the first target is "accurate" in both senses.

```r
set.seed(5)
truth <- 0.8
B <- replicate(2000, mean(rbinom(10, 1, 0.8)))    # unbiased, imprecise
C <- replicate(2000, mean(rbinom(200, 1, 0.7)))   # biased, precise
c(mse_B = mean((B - truth)^2), mse_C = mean((C - truth)^2))   # about 0.016 vs 0.011
```

## Connections
- **Builds on:** [[Bias]], [[Precision]], [[Standard Error]]
- **Leads to:** [[Bias-Variance Trade-off]], [[Parsimony]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], molecular note [[Bias and Precision]]
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
