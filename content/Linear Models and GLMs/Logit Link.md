---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Logit"
  - "Logit transformation"
  - "Log-odds link"
  - "qlogis"
status: seedling
---

# Logit Link

**In one line:** the logit link models the log-odds of a probability as a linear function of predictors, stretching the interval from 0 to 1 over the whole number line.

> [!info] Before this, it helps to know
> [[Log Odds]] (what the logit is) · [[Odds]] (the step before) · [[Logistic Function]] (its inverse) · [[Link Function]] (its role)

## The everyday picture
A rubber ruler pinned at 0.5. Probabilities near the middle are left almost alone. Near 0 and 1 the ruler is stretched without limit, so that 0.99 and 0.999 end up far apart. On the stretched ruler there are no ends to bump into.

## A tiny example
p = 0.2: odds = 0.25, logit = −1.39. p = 0.5: logit = 0. p = 0.8: odds = 4, logit = +1.39. Symmetric about 0.5.

## Start from zero
1. **logit(p) = log(p / (1 − p)).**
2. **Maps (0, 1) to (−∞, +∞).** p = 0.5 goes to 0.
3. **Model: logit(p) = β₀ + β₁x.**
4. **Inverse: p = 1 / (1 + exp(−η)).**
5. **β₁ is the change in log-odds per unit x.**
6. **exp(β₁) is the odds ratio.**
7. **"Divide by 4" rule:** β₁/4 is the largest possible change in probability per unit of x, reached where p = 0.5.
8. **Default for the binomial family.** Used for survival, detection and occupancy probabilities throughout ecology.
9. **Why this link and not another:** it is the binomial's canonical link, it is symmetric, and odds ratios are interpretable. Probit and cloglog give similar fits.

## See it
![[Logistic function.png|700]]
*What to look at:* read it from the vertical axis to the horizontal for the logit, and the other way for its inverse.

## In R
```r
qlogis(c(0.2, 0.5, 0.8)); log(0.2 / 0.8)
plogis(-1.386)
b1 <- 0.8; c(odds_ratio = exp(b1), max_change_in_p = b1 / 4, actual = plogis(0.4) - plogis(-0.4))
```

## In the course
[[Zuur et al. 2009 Ch10]], [[Guthery and Bingham 2007]], [[Hobbs and Hooten 2015 Ch3]], logistic regression lab ([[Course Website]]).

## Common confusions
- **"A logit coefficient is a change in probability."** It is a change in log-odds. The change in probability depends on where you are on the curve.
- **"logit(0) is 0."** logit(0.5) is 0. logit(0) is minus infinity.

## Explain it back
- Compute the logit of 0.75.
- State the divide-by-4 rule.

*Pass test:* you can move between probability, odds and logit and interpret a coefficient.

## Connections
- **Builds on:** [[Log Odds]], [[Odds]], [[Logistic Function]]
- **Leads to:** [[Logistic Regression]], [[Odds Ratio]], [[plogis()]], [[Probit Link]]
- **Part of:** [[MOC - Generalized Linear Models]], molecular note [[Probability, Odds and Log Odds]]

## Flashcards

What is the logit of p?
??
log(p / (1 − p)), the log-odds.
![[Logistic function.png]]
++++

What is the "divide by 4" rule?
??
A logit coefficient divided by 4 is the maximum change in probability per unit of the predictor (at p = 0.5).
++++

What is logit(0.5)?
??
0.
++++
