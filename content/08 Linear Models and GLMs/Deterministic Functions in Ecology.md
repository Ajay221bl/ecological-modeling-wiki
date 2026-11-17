---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Deterministic functions are the mathematical curves, such as lines, exponentials and saturating curves, that ecologists choose to represent how a response depends on a driver."
aliases:
  - "Deterministic functions"
  - "Functional forms"
  - "Bestiary of functions"
status: seedling
---

# Deterministic Functions in Ecology

A drafting toolbox holds curve templates: a ruler, a French curve, an S-shaped stencil. Before drawing, you pick the template whose shape matches what the biology should do. **Deterministic functions** are those templates: the mathematical curves ecologists choose to represent how a response depends on a driver, forming the [[Deterministic Component]] of a model ([[Functions in Maths]]). Choose by asking what the biology implies about the shape. Does it keep going at a steady rate? A [[Linear Function]]. Change by a constant percentage? Exponential ([[Exponential Growth Model]]). Scale with size? A [[Power Function]]. Level off at a ceiling? [[Michaelis-Menten Function|Michaelis-Menten]] or monomolecular. Is it S-shaped, slow then fast then slow? [[Logistic Function|Logistic]], Hill or Gompertz. Does it switch at some point? A [[Threshold Model]].

The figure shows eight of these curves, each labelled with the question it answers, and the code below draws seven of them from their formulas so you can compare their shapes on the same axis. Hobbs and Hooten catalogue them, and the 2 September "Model building" lecture introduces them ([[Hobbs and Hooten 2015 Ch2]], [[Course Website]]).

Choosing on biological grounds pays off three ways: the parameters mean something, such as a maximum rate, a half-saturation point or a carrying capacity; predictions behave sensibly outside the data; and prior knowledge about the parameters can be used ([[Mechanistic Model]]). The curve is then connected to data by adding a stochastic part. "Use a straight line unless forced" is the wrong default: if biology says there is a ceiling, a function with a ceiling is the simpler assumption.

![[Deterministic function bestiary.png|700]]
*What to look at:* eight curves, each labelled with the question it answers.

```r
x <- seq(0.01, 10, 0.01)
fs <- list(linear = 1 + 0.8 * x, exponential = exp(0.25 * x), power = 2 * x^0.6, michaelis_menten = 8 * x / (2 + x),
           monomolecular = 8 * (1 - exp(-0.5 * x)), logistic = 8 / (1 + exp(-1.5 * (x - 5))), gompertz = 8 * exp(-5 * exp(-0.8 * x)))
op <- par(mfrow = c(2, 4)); for (n in names(fs)) plot(x, fs[[n]], type = "l", main = n, ylab = "y"); par(op)
```

## Connections
- **Builds on:** [[Deterministic Component]], [[Functions in Maths]]
- **Leads to:** [[Linear Function]], [[Exponential Growth Model]], [[Power Function]], [[Michaelis-Menten Function]], [[Logistic Function]], [[Threshold Model]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

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
