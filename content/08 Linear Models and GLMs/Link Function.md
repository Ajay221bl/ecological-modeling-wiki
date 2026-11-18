---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A link function is the transformation applied to the mean of the response so that the result can be modeled as a straight-line combination of predictors."
aliases:
  - "Link"
  - "g(μ)"
  - "Canonical link"
status: seedling
---

# Link Function

A map projection stretches the curved Earth onto a flat page so you can draw straight lines on it. Models have the same problem. The thing we want to predict is the [[Expected Value]] of a [[Response Variable]] (its long-run average, written μ), and that average often lives on a fenced-in range: a count of birds can't be negative, and a [[Probability]] must sit between 0 and 1. The range of values something can take is its [[Support of a Distribution|support]]. But the [[Linear Predictor]], the straight-line sum β₀ + β₁x that a model builds from its [[Predictor Variable|predictors]], can be any number at all, minus a million or plus a million. A **link function** is the stretch that removes the fence: a [[Transformation|transformation]] g of the mean, written g(μ) = η, that maps the fenced-in range onto the whole number line, so the [[Equation of a Line|straight line]] can move freely without ever predicting an impossible value. It must be a smooth, always-increasing [[Functions in Maths|function]], so that every mean has exactly one η and back again.

Two examples with numbers. For counts the usual link is the [[Logarithm]], the [[Log Link]]: a mean of 5 birds becomes log(5) = 1.61. Add 0.5 on that scale to get 2.11 and map back with the [[Exponential Function]]: e^2.11 = 8.2 birds. Adding 0.5 on the [[Link Scale|link scale]] multiplied the mean by e^0.5 = 1.65, and however negative η gets, e^η stays above zero. For probabilities the usual link is the [[Logit Link]], the log of the [[Odds]] (chance it happens divided by chance it doesn't): p = 0.9 has odds 0.9 / 0.1 = 9 and logit log(9) = 2.2. Add 1 to get 3.2, map back, and p = 0.96: it rose but can never pass 1. The third common link, the [[Identity Link]], changes nothing and is the one an ordinary [[Linear Model]] quietly uses. Going from η back to the mean is the job of the [[Inverse Link Function]]. Each [[Error Distribution (Family)|family]] in R has a *canonical* link that falls out of its mathematics ([[Exponential Family]]): identity for the [[Normal Distribution]], log for the [[Poisson Distribution]], logit for the [[Binomial Distribution]] and inverse for the [[Gamma Distribution]].

Why this design? Without the link you would have to either let a straight line predict −3 birds or a probability of 1.2, or transform the data themselves, which breaks down at zeros and changes what the model means. The link also decides how to read the coefficients: a log link gives [[Multiplicative Effects]] on the mean, a logit link multiplicative effects on the odds ([[Odds Ratio]]), and identity gives plain additive effects. Two confusions. A log link is not a [[Log Transformation]] of y: the model is log(E[y]) = η, the data are untouched, and zeros in the data are no obstacle. And the canonical link is a convenient default, not a rule; gamma models usually use log rather than the canonical inverse. Hobbs and Hooten present links as transformations that keep predictions inside the support ([[Hobbs and Hooten 2015 Ch3]]; [[Zuur et al. 2009 Ch8]]), and together with the linear predictor and a family the link makes up a [[Generalized Linear Model]].

![[Link functions.png|700]]
*What to look at:* each link bends a fenced-in mean (vertical axis) into a linear predictor that can take any value (horizontal axis).

```r
log(5); exp(log(5) + 0.5)        # log link: adding 0.5 multiplies the mean by 1.65 (5 -> 8.2)
qlogis(0.9); plogis(qlogis(0.9) + 1)  # logit link: 0.9 -> 2.2, +1 -> 0.96
poisson()$link; binomial()$link; Gamma()$link; gaussian()$link   # canonical links
binomial()$linkfun(0.9); binomial()$linkinv(2.197)               # the family's own link and inverse
```

## Connections
- **Builds on:** [[Expected Value]], [[Response Variable]], [[Probability]], [[Support of a Distribution]], [[Linear Predictor]], [[Functions in Maths]], [[Logarithm]], [[Exponential Function]], [[Odds]], [[Predictor Variable]], [[Transformation]], [[Equation of a Line]], [[Link Scale]]
- **Leads to:** [[Log Link]], [[Logit Link]], [[Identity Link]], [[Inverse Link Function]], [[Error Distribution (Family)]], [[Exponential Family]], [[Multiplicative Effects]], [[Odds Ratio]], [[Generalized Linear Model]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]
- **Go deeper:** [[Why GLMs need a link function]], [[Linear Model vs GLM]], [[Predictions on Link vs Response Scale]], [[Normal Distribution]], [[Poisson Distribution]], [[Binomial Distribution]], [[Gamma Distribution]], [[Log Transformation]], [[Linear Model]], [[Hobbs and Hooten 2015 Ch3]], [[Zuur et al. 2009 Ch8]]

## Flashcards

What does a link function do?
??
Transforms the mean of the response onto a scale where any value is allowed, so it can be modeled as a straight-line combination of predictors.
![[Link functions.png]]
++++

What are the canonical links for the normal, Poisson and binomial families?
??
Identity, log and logit.
++++

Does a log link transform the data?
??
No. It transforms the expected value (the mean): log(E[y]) = η. The data stay as they are, so zeros are fine.
++++
