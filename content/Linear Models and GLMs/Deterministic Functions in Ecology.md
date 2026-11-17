---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Deterministic functions"
  - "Functional forms"
  - "Bestiary of functions"
status: seedling
---

# Deterministic Functions in Ecology

**In one line:** deterministic functions are the mathematical curves, such as lines, exponentials and saturating curves, that ecologists choose to represent how a response depends on a driver.

> [!info] Before this, it helps to know
> [[Deterministic Component]] (the role they play) · [[Functions in Maths]] (what they are) · [[Mechanistic Model]] (why shape matters)

## The everyday picture
A toolbox of curve templates. A French curve, a ruler, an S-shaped stencil. Before drawing you pick the template whose shape matches what the biology should do.

## Start from zero
1. **Ask what the biology implies about the shape.**
2. **Does it keep going at a steady rate?** Linear.
3. **Does it change by a constant percentage?** Exponential.
4. **Does it scale with size?** Power.
5. **Does it level off at a ceiling?** Michaelis-Menten, monomolecular.
6. **Is it S-shaped: slow, fast, slow?** Logistic, Hill, Gompertz.
7. **Does it switch at some point?** Threshold.
8. **Why choose on biological grounds:** the parameters then mean something (a maximum rate, a half-saturation point, a carrying capacity), predictions behave sensibly outside the data, and prior knowledge about the parameters can be used.
9. **Then add a stochastic part** to connect the curve to data.

## See it
![[Deterministic function bestiary.png|700]]
*What to look at:* eight curves, each labelled with the question it answers.

## In R
```r
x <- seq(0.01, 10, 0.01)
fs <- list(linear = 1 + 0.8 * x, exponential = exp(0.25 * x), power = 2 * x^0.6, michaelis_menten = 8 * x / (2 + x),
           monomolecular = 8 * (1 - exp(-0.5 * x)), logistic = 8 / (1 + exp(-1.5 * (x - 5))), gompertz = 8 * exp(-5 * exp(-0.8 * x)))
op <- par(mfrow = c(2, 4)); for (n in names(fs)) plot(x, fs[[n]], type = "l", main = n, ylab = "y"); par(op)
```

## In the course
Sep 2 lecture "Model building". [[Hobbs and Hooten 2015 Ch2]] catalogues these functions.

## Common confusions
- **"Use a straight line unless forced."** If biology says there is a ceiling, a function with a ceiling is the simpler assumption.

## Explain it back
- Which functions level off? Which are S-shaped?

*Pass test:* you can match a biological description to a function family.

## Connections
- **Builds on:** [[Deterministic Component]], [[Functions in Maths]]
- **Leads to:** [[Linear Function]], [[Exponential Growth Model]], [[Power Function]], [[Michaelis-Menten Function]], [[Logistic Function]], [[Threshold Model]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

Why choose a deterministic function from biology rather than defaulting to a line?
??
Its parameters are interpretable, it behaves sensibly beyond the data, and prior knowledge can inform it.
![[Deterministic function bestiary.png]]
++++

Name three saturating or sigmoid functions used in ecology.
??
Michaelis-Menten, logistic, Gompertz (also monomolecular and Hill).
++++
