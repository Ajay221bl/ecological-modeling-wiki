---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Link"
  - "g(μ)"
  - "Canonical link"
status: seedling
---

# Link Function

**In one line:** a link function is the transformation applied to the mean of the response so that the result can be modeled as a straight-line combination of predictors.

> [!info] Before this, it helps to know
> [[Linear Predictor]] (what the link output equals) · [[Support of a Distribution]] (why a link is needed) · [[Functions in Maths]] (what a link is)

## The everyday picture
A map projection. The mean lives on a restricted territory: positive numbers for counts, between 0 and 1 for probabilities. The link stretches that territory out onto the whole number line, where a straight line can roam freely without falling off an edge.

## A tiny example
A probability p = 0.9. The logit link maps it to log(0.9/0.1) = 2.2. Add 1 on that scale: 3.2. Map back: 0.96. The probability rose but stayed below 1.

## Start from zero
1. **The mean μ is restricted.** A count mean must be positive. A probability must lie in 0 to 1.
2. **A linear predictor η is unrestricted.**
3. **The link g connects them: g(μ) = η.**
4. **It must map the restricted range onto the whole real line** and be strictly increasing.
5. **Log link:** positive μ to all reals. **Logit link:** (0, 1) to all reals. **Identity:** no change.
6. **Each family has a canonical link** that comes out of its mathematics: identity for normal, log for Poisson, logit for binomial, inverse for gamma. They are convenient defaults, not obligations.
7. **The link sets how effects are interpreted.** Log: multiplicative on the mean. Logit: multiplicative on the odds. Identity: additive.
8. **It acts on the mean, never on the data.** Zeros in the data are no obstacle to a log link.

## See it
![[Link functions.png|700]]
*What to look at:* each link bends a restricted mean (vertical axis) into an unrestricted linear predictor (horizontal axis).

## In R
```r
qlogis(0.9); plogis(qlogis(0.9) + 1)
log(5); exp(log(5) + 0.5)                                # log link: adding 0.5 multiplies the mean by 1.65
poisson()$link; binomial()$link; Gamma()$link; gaussian()$link
binomial()$linkfun(0.9); binomial()$linkinv(2.197)
```

## In the course
[[Zuur et al. 2009 Ch8]], [[Hobbs and Hooten 2015 Ch3]] (as transformations that keep predictions in the support).

## Common confusions
- **"A log link is a log transformation of y."** The model is log(E[y]) = η. The data are untouched.
- **"The canonical link must be used."** Any sensible link is allowed. Gamma models usually use log, not the canonical inverse.

## Explain it back
- Why can't the mean of a count be modeled directly as a line?
- What does the link act on?

*Pass test:* you can name the default link for three families and say what each does.

## Connections
- **Builds on:** [[Linear Predictor]], [[Support of a Distribution]]
- **Leads to:** [[Inverse Link Function]], [[Log Link]], [[Logit Link]], [[Identity Link]], [[Generalized Linear Model]]
- **Part of:** [[MOC - Generalized Linear Models]], molecular note [[Why GLMs need a link function]]

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
