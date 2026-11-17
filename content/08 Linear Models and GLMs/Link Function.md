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

A map projection stretches the curved Earth onto a flat page. The mean of a response lives on a restricted territory, positive numbers for counts and between 0 and 1 for probabilities, while a [[Linear Predictor]] can roam the whole number line. A **link function** stretches the restricted territory onto the whole line so a straight line can move freely without falling off an edge. It is the transformation g applied to the mean so that g(μ) = η. It must map the restricted range onto the whole real line and be strictly increasing ([[Support of a Distribution]], [[Functions in Maths]]). The [[Log Link]] takes positive means to all real numbers; the [[Logit Link]] takes (0, 1) to all real numbers; the [[Identity Link]] changes nothing. The figure shows each link bending a restricted mean into an unrestricted linear predictor.

An example. A probability p = 0.9 maps through the logit to log(0.9/0.1) = 2.2. Add 1 on that scale to get 3.2, map back, and the probability is 0.96: it rose but stayed below 1. With a log link, adding 0.5 multiplies the mean by e^0.5 = 1.65. The code below shows both, lists the default links of four R families, and uses a family's own `linkfun` and `linkinv`. Each family has a *canonical* link that comes out of its mathematics: identity for normal, log for Poisson, logit for binomial and inverse for gamma ([[Exponential Family]]).

The link sets how effects are interpreted: log gives multiplicative effects on the mean, logit multiplicative effects on the odds, identity additive effects. Two confusions. A log link is not a log transformation of y: the model is log(E[y]) = η and the data are untouched, so zeros in the data are no obstacle. And the canonical link is a convenient default, not an obligation; gamma models usually use log rather than the canonical inverse. Hobbs and Hooten present links as transformations that keep predictions inside the support ([[Hobbs and Hooten 2015 Ch3]], [[Zuur et al. 2009 Ch8]]). Getting back from η to the mean is the job of the [[Inverse Link Function]], the second half of a [[Generalized Linear Model]].

![[Link functions.png|700]]
*What to look at:* each link bends a restricted mean (vertical axis) into an unrestricted linear predictor (horizontal axis).

```r
qlogis(0.9); plogis(qlogis(0.9) + 1)
log(5); exp(log(5) + 0.5)                                # log link: adding 0.5 multiplies the mean by 1.65
poisson()$link; binomial()$link; Gamma()$link; gaussian()$link
binomial()$linkfun(0.9); binomial()$linkinv(2.197)
```

## Connections
- **Builds on:** [[Linear Predictor]], [[Support of a Distribution]]
- **Leads to:** [[Inverse Link Function]], [[Log Link]], [[Logit Link]], [[Identity Link]], [[Generalized Linear Model]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Why GLMs need a link function]]

## Flashcards

What does a link function do?
??
Transforms the mean of the response onto a scale where it can be modeled as a linear function of predictors.
![[Link functions.png]]
++++

What are the canonical links for the normal, Poisson and binomial families?
??
Identity, log and logit.
++++

Does a link function transform the data?
??
No. It transforms the expected value (mean).
++++
