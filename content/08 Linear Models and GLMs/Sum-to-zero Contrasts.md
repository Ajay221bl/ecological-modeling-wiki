---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Sum-to-zero contrasts code a factor so that the intercept is the average of the group means and each coefficient is one group's deviation from that average."
aliases:
  - "Effects coding"
  - "Deviation coding"
  - "contr.sum"
status: seedling
---

# Sum-to-zero Contrasts

Measure each child's height against the class average instead of against one chosen child; the deviations above and below the average cancel to zero. **Sum-to-zero contrasts** code a factor that way, so the intercept is the average of the group means and each coefficient is one group's deviation from that average. They are the alternative to treatment coding, which measures every group against a [[Reference Level]] ([[Dummy Coding]]). The coding columns contain 1, 0 and −1, with the last level getting −1 in every column.

With group means 11, 7 and 16, the grand mean of the groups is 11.33. The intercept is 11.33; the coefficients are 11 − 11.33 = −0.33 and 7 − 11.33 = −4.33; and the third group's deviation, which is not printed, is minus their sum, +4.67. The code below sets the coding with `contrasts(d$hab) <- contr.sum(3)` and confirms the intercept equals the mean of the group means. It can also be set for a whole session with `options(contrasts = c("contr.sum", "contr.poly"))`.

The reason to use it is interactions. With treatment contrasts, a main effect is the effect at the reference level of the other factor; with sum-to-zero contrasts it becomes an average over the other factor, which is what Type III tests need ([[Interaction Term]], [[ANOVA]], [[Course Website]]). The fit is identical either way: different contrasts are the same model asked different questions.

```r
d <- data.frame(hab = factor(rep(c("grass", "forest", "wetland"), each = 2), levels = c("grass", "forest", "wetland")), y = c(10, 12, 6, 8, 15, 17))
contrasts(d$hab) <- contr.sum(3); contrasts(d$hab)
coef(lm(y ~ hab, d)); mean(c(11, 7, 16))
```

## Connections
- **Builds on:** [[Dummy Coding]]
- **Leads to:** [[Reference Level]], [[Interaction Term]], [[ANOVA]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], molecular note [[Treatment vs Sum-to-zero Contrasts]]

## Flashcards

Under sum-to-zero contrasts, what is the intercept?
??
The mean of the group means (the grand mean).
++++

What does each coefficient represent under sum-to-zero contrasts?
??
A group's deviation from the grand mean.
++++
