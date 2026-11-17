---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Interpreting coefficients"
  - "Reading model output"
  - "Interpreting slopes"
status: seedling
---

# Interpreting Regression Coefficients

**In one line:** interpreting a regression coefficient means turning the number into a plain statement about how the expected response differs between units, with its units, its scale and its uncertainty.

> [!info] Before this, it helps to know
> [[Regression Coefficient]] (what is read) · [[Holding Other Variables Constant]] (the fine print) · [[Standard Error]] (the uncertainty)

## The everyday picture
Reading a nutrition label. "5" means nothing until you know it is grams per serving, how big a serving is and how that compares with a day's needs.

## Start from zero
1. **Identify the scale of the response.** Raw, log, logit?
2. **Identify the units of the predictor.** Per metre, per SD, per category change?
3. **Say it as a comparison:** "Plots with 10% more tree cover have on average 1.7 fewer species, at the same elevation."
4. **Attach the uncertainty:** the interval, not only the point estimate.
5. **Judge the size in context.** Is 1.7 species a lot? Compared with a mean of 10, yes.
6. **For factors:** the coefficient is a difference from the reference level.
7. **With an interaction:** a main-effect coefficient is the effect when the other variable is zero. Never read it alone.
8. **For GLMs:** exponentiate log-scale coefficients to get multipliers (rate ratios, odds ratios), or better, plot predictions on the response scale.
9. **Why this deserves care:** Guthery and Bingham show that sign and significance alone lead to wrong biology. The fitted response over the realistic range is what matters.

## In R
```r
set.seed(5); d <- data.frame(tree = runif(100, 0, 60), burn = factor(sample(c("no", "yes"), 100, TRUE)))
d$rich <- 12 - 0.1 * d$tree + 2 * (d$burn == "yes") + rnorm(100)
m <- lm(rich ~ tree + burn, d); round(cbind(coef(m), confint(m)), 2)
10 * coef(m)["tree"]            # per 10% cover: about 1 fewer species
```

## In the course
[[Guthery and Bingham 2007]] is the assigned primer.

## Common confusions
- **"Significant means important."** Significance concerns whether an effect is distinguishable from zero. Importance concerns its size.
- **"Not significant means no effect."** It means the data couldn't pin it down.

## Explain it back
- Give the five things a full interpretation states.

*Pass test:* you can write one clear sentence for any coefficient in a table.

## Connections
- **Builds on:** [[Regression Coefficient]], [[Holding Other Variables Constant]]
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
