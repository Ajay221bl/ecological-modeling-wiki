---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "F test"
  - "F statistic"
  - "Partial F-test"
  - "Extra sum of squares test"
status: seedling
---

# F-test

**In one line:** an F-test judges whether a group of terms improves a linear model by comparing the drop in residual variation they produce with the residual variation that remains.

> [!info] Before this, it helps to know
> [[F Distribution]] (the yardstick) · [[Sum of Squares]] (what is compared) · [[Nested Models]] (the two models tested)

## The everyday picture
Deciding whether a new tool was worth buying. How much extra work did it get done, per unit of cost, compared with the work still left undone per remaining unit of effort? If the ratio is about 1, the tool did no better than chance.

## Start from zero
1. **Fit a smaller model and a larger model** that contains it.
2. **RSS drops from the small to the large.** Some drop always happens.
3. **F = [(RSS_small − RSS_large) / extra parameters] ÷ [RSS_large / residual df].**
4. **Under the null that the extra terms do nothing, F is about 1.**
5. **Compare with the F distribution** to get a p-value.
6. **Why not just use t-tests:** a factor with four levels has three coefficients. The question "does habitat matter?" is about all three at once. F tests them jointly.
7. **The overall F at the bottom of `summary(lm())`** compares your model with the intercept-only model.
8. **In R:** `anova(small, large)`, or `drop1(model, test = "F")` to test each term in turn.

## In R
```r
set.seed(13); d <- data.frame(hab = factor(rep(c("a", "b", "c", "d"), each = 8)), x = rnorm(32))
d$y <- 2 + 0.5 * d$x + c(0, 0.5, 1, 1.5)[d$hab] + rnorm(32)
small <- lm(y ~ x, d); large <- lm(y ~ x + hab, d); anova(small, large)
((deviance(small) - deviance(large)) / 3) / (deviance(large) / df.residual(large))    # F by hand
drop1(large, test = "F")
```

## In the course
[[Zuur et al. 2009 Appendix A]]. Used for nested model comparison before the course moves to likelihood ratio tests and AIC.

## Common confusions
- **"A significant overall F means every predictor matters."** It means at least one does.

## Explain it back
- When do you need an F-test instead of a t-test?

*Pass test:* you can compare two nested linear models with `anova()`.

## Connections
- **Builds on:** [[F Distribution]], [[Sum of Squares]]
- **Leads to:** [[ANOVA]], [[Likelihood Ratio Test]], [[Nested Models]], [[t-test]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What does an F-test compare?
??
The reduction in residual sum of squares from added terms, per parameter, against the residual variance of the larger model.
++++

When is an F-test needed instead of a t-test?
??
When testing several coefficients jointly, such as a factor with more than two levels.
++++
