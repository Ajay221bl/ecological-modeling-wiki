---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Allometry is the study of how one feature of an organism changes in proportion to another, usually its body size, typically following a power law."
aliases:
  - "Allometric scaling"
  - "Scaling relationship"
  - "Allometric equation"
status: seedling
---

# Allometry

A mouse and an elephant are not the same animal at different magnifications: the elephant's legs are far thicker for their length, and its heart beats far more slowly. As size changes, proportions change in regular, predictable ways. **Allometry** is the study of how one feature of an organism changes in proportion to another, usually [[Body Size|body size]], typically following a [[Power Function]], y = a · x^b. The exponent b is the allometric exponent. b = 1 is *isometry*, the feature staying in constant proportion; b < 1 means it becomes relatively smaller in bigger animals; b > 1, relatively larger.

Taking logs of both sides gives log(y) = log(a) + b · log(x), a [[Equation of a Line|straight line]], so allometries are fitted with `lm(log(y) ~ log(x))` ([[Log-log Model]], [[Log Transformation]]). The code below does this for brain and body mass of 62 mammal species in `MASS::mammals`. On raw axes the points are crushed into a corner; on log axes they fall along a line with slope 0.75. So a species 16 times heavier has a brain about 16^0.75 = 8 times heavier.

Power laws appear because of geometry and physics: area scales with length squared and volume with length cubed, so surfaces, supply networks and loads cannot keep pace with mass. Classic exponents are about 0.75 for metabolic rate, near 1 for [[Home Range|home range]], and about −0.25 for many rates per unit mass. Allometric functions are among the deterministic models Hobbs and Hooten catalogue ([[Hobbs and Hooten 2015 Ch2]], [[Deterministic Functions in Ecology]]). Allometric does not mean proportional; proportional is only the special case b = 1.

```r
d <- MASS::mammals                                # body (kg) and brain (g) for 62 species
m <- lm(log(brain) ~ log(body), d); round(coef(m), 3)        # exponent about 0.75
op <- par(mfrow = c(1, 2)); plot(brain ~ body, d); plot(log(brain) ~ log(body), d); abline(m); par(op)
16^coef(m)[2]
```

## Connections
- **Builds on:** [[Power Function]], [[Log-log Model]], [[Equation of a Line]]
- **Leads to:** [[Log Transformation]], [[Deterministic Functions in Ecology]], [[Body Size]], [[Home Range]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What is the general allometric equation?
??
y = a · x^b.
++++

What does an allometric exponent of 1 mean?
??
Isometry: the trait stays in constant proportion to body size.
++++
