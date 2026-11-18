---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Interpreting a regression coefficient means turning the number into a plain statement about how the expected response differs between units, with its units, its scale and its uncertainty."
aliases:
  - "Interpreting coefficients"
  - "Reading model output"
  - "Interpreting slopes"
status: seedling
---

# Interpreting Regression Coefficients

On a nutrition label, "5" means nothing until you know it is grams per serving, how big a serving is, and how that compares with a day's needs. **Interpreting a regression coefficient** means turning the number into a plain statement about how the expected response differs between units, with its units, its scale and its uncertainty ([[Regression Coefficient]]). A full interpretation states five things: the scale of the response (raw, log or [[Logit Link|logit]]); the units of the [[Predictor Variable|predictor]] (per metre, per SD, per category change); a comparison ("plots with 10% more tree cover have on average 1.7 fewer species, at the same elevation", [[Holding Other Variables Constant]]); the uncertainty, as an interval and not only a point estimate ([[Standard Error]]); and the size in context (is 1.7 species a lot? against a mean of 10, yes).

The code below simulates [[Species Richness|richness]] depending on tree cover and burning, fits the model and prints each coefficient with its 95% interval. The tree coefficient, multiplied by 10, says about 1 fewer species per 10% more cover; the burn coefficient says burned plots average about 2 more species than unburned ones at the same cover. For factors, a coefficient is a difference from the [[Reference Level|reference level]]. With an interaction, a main-effect coefficient is the effect when the other variable is zero, so never read it alone ([[Interaction Term]]). For [[Generalized Linear Model|GLMs]], exponentiate log-scale coefficients to get multipliers, [[Interpreting Poisson Coefficients|rate ratios]] or an [[Odds Ratio]], or better, plot predictions on the [[Response Scale|response scale]] ([[Plotting Model Predictions with Ribbons]]).

This deserves care because, as Guthery and Bingham show, sign and significance alone lead to wrong biology; the fitted response over the realistic range is what matters ([[Guthery and Bingham 2007]]). Two confusions follow. "Significant" does not mean important: significance concerns whether an effect is distinguishable from zero, importance concerns its size ([[Statistical Significance]], [[Effect Size]]). And "not significant" does not mean no effect; it means the data could not pin it down.

```r
set.seed(5); d <- data.frame(tree = runif(100, 0, 60), burn = factor(sample(c("no", "yes"), 100, TRUE)))
d$rich <- 12 - 0.1 * d$tree + 2 * (d$burn == "yes") + rnorm(100)
m <- lm(rich ~ tree + burn, d); round(cbind(coef(m), confint(m)), 2)
10 * coef(m)["tree"]            # per 10% cover: about 1 fewer species
```

## Connections
- **Builds on:** [[Regression Coefficient]], [[Holding Other Variables Constant]], [[Logit Link]], [[Predictor Variable]], [[Species Richness]], [[Reference Level]], [[Generalized Linear Model]], [[Interpreting Poisson Coefficients]], [[Response Scale]]
- **Leads to:** [[Effect Size]], [[Odds Ratio]], [[Plotting Model Predictions with Ribbons]], [[Statistical Significance]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What should a complete interpretation of a coefficient include?
??
Direction, size with units, the scale of the response, what is held constant, and the uncertainty.
++++

How should a main effect be read when the model has an interaction?
??
As the effect when the interacting variable equals zero (or its reference level).
++++
