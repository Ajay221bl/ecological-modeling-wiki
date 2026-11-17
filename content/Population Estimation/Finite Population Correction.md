---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "FPC"
  - "(1 − n/N)"
  - "Finite population correction factor"
status: seedling
---

# Finite Population Correction

**In one line:** the finite population correction shrinks the variance of an estimate when you sample a large fraction of a finite population, because the unsampled remainder is small.

> [!info] Before this, it helps to know
> [[Variance of an Estimate]] · [[Survey Sampling Designs]]

## The everyday picture
Tasting 9 of 10 cookies in a box. You are almost certain about the whole box, much more than if you had tasted 9 of 10,000.

## Start from zero
1. **Variance of a mean from n of N units:** (s²/n) × (1 − n/N).
2. **(1 − n/N)** is the correction. When n/N is tiny it is close to 1 and can be ignored.
3. **When n = N** (a census) the variance is zero.
4. **Rule of thumb:** it matters when you sample more than about 5 to 10 percent of the units.

## In R
```r
set.seed(3); pop <- rpois(50, 8); s <- sample(pop, 30)
se_plain <- sd(s) / sqrt(30); se_fpc <- se_plain * sqrt(1 - 30 / 50)
round(c(se_plain = se_plain, se_fpc = se_fpc), 2)
```

## In the course
General survey-sampling prerequisite for [[Powell and Gale 2015]] Ch14 (not named in the course sources).

## Common confusions
- **"The FPC applies to model-based estimates of detection."** It applies to design-based sampling of a finite set of units.

## Explain it back
- What is the variance when you sample every unit?

*Pass test:* you can apply the FPC.

## Connections
- **Builds on:** [[Variance of an Estimate]], [[Survey Sampling Designs]]
- **Leads to:** [[Census]]
- **Part of:** [[MOC - Population Estimation]]

## Flashcards

What is the finite population correction factor?
??
(1 − n/N), multiplying the variance of a sample mean.
++++
