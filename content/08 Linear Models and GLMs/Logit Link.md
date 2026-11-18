---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The logit link models the log-odds of a probability as a linear function of predictors, stretching the interval from 0 to 1 over the whole number line."
aliases:
  - "Logit"
  - "Logit transformation"
  - "Log-odds link"
  - "qlogis"
status: seedling
---

# Logit Link

Picture a rubber ruler pinned at 0.5. Near the middle, probabilities are left almost alone; near 0 and 1 the ruler is stretched without limit, so 0.99 and 0.999 end up far apart. On the stretched ruler there are no ends to bump into. The **logit link** models the log-odds of a probability as a [[Linear Function|linear function]] of [[Predictor Variable|predictors]]: logit(p) = log(p / (1 − p)) = β₀ + β₁x ([[Log Odds]], [[Odds]]). It maps (0, 1) to the whole number line, with p = 0.5 going to 0, and its inverse is p = 1 / (1 + exp(−η)), the [[Logistic Function]]. The figure can be read either way: from the vertical axis to the horizontal for the logit, and back for its inverse.

p = 0.2 has odds 0.25 and logit −1.39; p = 0.5 has logit 0; p = 0.8 has odds 4 and logit +1.39, so it is symmetric about 0.5. p = 0.75 has logit log(3) = 1.10. β₁ is the change in log-odds per unit of x, and exp(β₁) is the [[Odds Ratio]]. A handy "divide by 4" rule: β₁/4 is the largest possible change in probability per unit of x, reached where p = 0.5. The code below computes the logits, then shows for β₁ = 0.8 an odds ratio of 2.2 and a maximum change in probability of 0.2, matching the actual change across the middle of the curve.

It is the default link for the binomial family and is used for survival, detection and occupancy probabilities throughout ecology ([[Logistic Regression]]). It is preferred because it is the binomial's canonical link, it is symmetric, and odds ratios are interpretable; the [[Probit Link]] and [[Complementary Log-log Link|cloglog]] give similar fits ([[Zuur et al. 2009 Ch10]], [[Guthery and Bingham 2007]], [[Hobbs and Hooten 2015 Ch3]], [[Course Website]]). Two confusions. A logit [[Regression Coefficient|coefficient]] is a change in log-odds, not in probability, and the change in probability depends on where you are on the curve. And logit(0) is not 0: logit(0.5) is 0, and logit(0) is minus infinity. In R the conversions are [[plogis()]] and `qlogis()`.

![[Logistic function.png|700]]
*What to look at:* read it from the vertical axis to the horizontal for the logit, and the other way for its inverse.

```r
qlogis(c(0.2, 0.5, 0.8)); log(0.2 / 0.8)
plogis(-1.386)
b1 <- 0.8; c(odds_ratio = exp(b1), max_change_in_p = b1 / 4, actual = plogis(0.4) - plogis(-0.4))
```

## Connections
- **Builds on:** [[Log Odds]], [[Odds]], [[Logistic Function]], [[Linear Function]], [[Predictor Variable]], [[Complementary Log-log Link]], [[Regression Coefficient]]
- **Leads to:** [[Logistic Regression]], [[Odds Ratio]], [[plogis()]], [[Probit Link]]
- **See also:** [[Link Function]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Probability, Odds and Log Odds]]

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
