---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Effects coding"
  - "Deviation coding"
  - "contr.sum"
status: seedling
---

# Sum-to-zero Contrasts

**In one line:** sum-to-zero contrasts code a factor so that the intercept is the average of the group means and each coefficient is one group's deviation from that average.

> [!info] Before this, it helps to know
> [[Dummy Coding]] (the alternative) · [[Reference Level]] (what this scheme avoids)

## The everyday picture
Measuring each child's height against the class average instead of against one chosen child. Deviations above and below the average cancel out to zero.

## A tiny example
Group means 11, 7, 16. Grand mean of groups: 11.33.
- Intercept = 11.33.
- Coefficients: 11 − 11.33 = −0.33 and 7 − 11.33 = −4.33.
- The third group's deviation is the negative of their sum: +4.67.

## Start from zero
1. **Set with `contrasts(f) <- contr.sum(nlevels(f))`** or `options(contrasts = c("contr.sum", "contr.poly"))`.
2. **Columns contain 1, 0 and −1.** The last level gets −1 in every column.
3. **Intercept = unweighted mean of the group means.**
4. **Each coefficient = that group's mean minus the grand mean.**
5. **The last group's effect isn't printed.** It equals minus the sum of the others.
6. **Why use it:** with interactions, main effects become averages over the other factor, not effects at its reference level. Type III tests need this.
7. **The fit is the same as with treatment contrasts.**

## In R
```r
d <- data.frame(hab = factor(rep(c("grass", "forest", "wetland"), each = 2), levels = c("grass", "forest", "wetland")), y = c(10, 12, 6, 8, 15, 17))
contrasts(d$hab) <- contr.sum(3); contrasts(d$hab)
coef(lm(y ~ hab, d)); mean(c(11, 7, 16))
```

## In the course
Introduced in the regression lab as an alternative coding ([[Course Website]]).

## Common confusions
- **"Different contrasts give different models."** Same model, different questions asked of it.

## Explain it back
- What does the intercept mean under sum-to-zero coding?

*Pass test:* you can interpret coefficients under both coding schemes.

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
