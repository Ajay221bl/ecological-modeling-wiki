---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Allometric scaling"
  - "Scaling relationship"
  - "Allometric equation"
status: seedling
---

# Allometry

**In one line:** allometry is the study of how one feature of an organism changes in proportion to another, usually its body size, typically following a power law.

> [!info] Before this, it helps to know
> [[Power Function]] (its mathematical form) · [[Log-log Model]] (how it is fitted)

## The everyday picture
A mouse and an elephant are not the same animal at different magnifications. The elephant's legs are far thicker for its length, and its heart beats far more slowly. As size changes, proportions change in regular, predictable ways.

## A tiny example
Brain mass against body mass across mammals: brain = a · body^0.75, roughly. A species 16 times heavier has a brain about 8 times heavier.

## Start from zero
1. **Form:** y = a · x^b.
2. **b is the allometric exponent.** b = 1 is isometry: the feature stays in constant proportion. b < 1: it becomes relatively smaller in bigger animals.
3. **Log both sides:** log(y) = log(a) + b · log(x). A straight line.
4. **Fit with `lm(log(y) ~ log(x))`.**
5. **Why power laws appear:** geometry and physics. Area scales with length squared and volume with length cubed, so surfaces, supply networks and loads can't keep pace with mass.
6. **Classic exponents:** metabolic rate about 0.75, home range near 1, many rates per unit mass about −0.25.

## In R
```r
d <- MASS::mammals                                # body (kg) and brain (g) for 62 species
m <- lm(log(brain) ~ log(body), d); round(coef(m), 3)        # exponent about 0.75
op <- par(mfrow = c(1, 2)); plot(brain ~ body, d); plot(log(brain) ~ log(body), d); abline(m); par(op)
16^coef(m)[2]
```

## In the course
The crash course plots brain against body mass on log axes ([[Course Website]]). Hobbs and Hooten use allometric functions as deterministic models ([[Hobbs and Hooten 2015 Ch2]]).

## Common confusions
- **"Allometric means proportional."** Proportional is the special case b = 1.

## Explain it back
- What does an exponent below 1 mean?

*Pass test:* you can fit and interpret an allometric exponent.

## Connections
- **Builds on:** [[Power Function]], [[Log-log Model]]
- **Leads to:** [[Log Transformation]], [[Deterministic Functions in Ecology]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What is the general allometric equation?
??
y = a · x^b.
++++

What does an allometric exponent of 1 mean?
??
Isometry: the trait stays in constant proportion to body size.
++++
