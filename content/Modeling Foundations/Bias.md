---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Biased estimator"
  - "Unbiased estimator"
  - "Systematic error"
status: seedling
---

# Bias

**In one line:** bias is how far an estimator's answers land from the truth *on average*: a systematic miss in one direction.

> [!info] Before this, it helps to know
> [[Estimator]] (bias is a property of the recipe) · [[Parameter]]

## The everyday picture
Darts thrown at a board, many times. If the darts cluster in the top-left corner, every throw misses the same way: that's bias. It doesn't matter how tightly they cluster; the centre of the cluster isn't the bull's-eye.

*Where the picture stops working:* in estimation the bull's-eye is invisible. You can only learn about bias by reasoning about your method or by simulation.

## Words you'll need
- **Bias:** (average estimate) − (true value).
- **Unbiased:** bias of zero; right on average.
- **Small-sample bias:** bias some estimators have when n is small, fading as n grows.
- **Model bias:** bias from a wrong assumption, such as tags harming the animals wearing them ([[Powell and Gale 2015 Ch2]], p. 16).

## A tiny example
True survival is 0.80. Your tags slightly injure elk, so tagged elk survive at 0.70.
- Tag 200 elk and repeat the study many times: estimates average **0.70**.
- Bias = 0.70 − 0.80 = **−0.10**.
- Tag 2,000 elk: estimates average... still **0.70**. More data didn't help, because the method itself misses.

## Start from zero
1. **Imagine repeating your study many times.** Each repeat gives an estimate.
2. **Average all those estimates.** *Why:* random wobble cancels out in the average, leaving only systematic misses.
3. **Compare that average with the truth.** The gap is the bias.
4. **Bias has two sources:** small samples, and wrong model assumptions such as trap-shyness or harmful tags ([[Powell and Gale 2015 Ch2]], p. 16).
5. **More data usually can't fix model bias.** *Why:* every new data point carries the same systematic miss. Only redesigning the sampling or analysis fixes it ([[Powell and Gale 2015 Ch2]], p. 18).

## See it
![[Bias and precision.png|700]]
*What to look at:* the third target's tight cluster is far from the centre. That's high bias.

## Why it is this way
Bias is the one error that more effort can't wash out, which is why Powell and Gale value lack of bias over precision when you must choose. Some modern tools deliberately accept a *little* bias in exchange for much less wobble ([[Partial Pooling]], [[Bias-Variance Trade-off]]).

## In R
```r
set.seed(5)
truth <- 0.8
est <- replicate(2000, mean(rbinom(200, 1, 0.7)))  # tags lower survival to 0.7
mean(est) - truth                                  # bias about -0.10
est_big <- replicate(2000, mean(rbinom(2000, 1, 0.7)))
mean(est_big) - truth                              # still about -0.10
```

## In the course
Powell and Gale's chapter on context and inference ([[Powell and Gale 2015 Ch2]], pp. 16 to 18, Fig. 2.5).

## Common confusions
- **"More data reduces bias."** It reduces wobble. Model bias stays.
- **"Bias is always bad."** A little deliberate bias can buy a lot of precision.

## Explain it back
- Use darts to explain bias.
- Why did tagging 2,000 elk still give 0.70?
- Name the two sources of bias Powell and Gale describe.

*Pass test:* for any field method, you can name one thing that would bias it.

## Connections
- **Builds on:** [[Estimator]], [[Parameter]]
- **Leads to:** [[Precision]], [[Accuracy]], [[Bias-Variance Trade-off]], [[Representative Sample]]
- **Part of:** [[MOC - Modeling Foundations]], molecular note [[Bias and Precision]]
- **Go deeper:** [[Powell and Gale 2015 Ch2]]

## Flashcards

What is bias?
??
How far an estimator's estimates sit from the truth on average; a systematic miss in one direction.
![[Bias and precision.png]]
++++

What are the two sources of bias Powell and Gale name?
??
Small-sample bias (estimator misbehaves at low n) and model bias (wrong assumptions, e.g., tags reduce survival, trap-shyness).
++++
