---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "corExp()"
  - "corGaus()"
  - "corSpher()"
  - "corLin()"
  - "corRatio()"
  - "Exponential correlation"
  - "Gaussian correlation"
  - "Spherical correlation"
  - "Rational quadratic correlation"
  - "Linear correlation"
status: seedling
---

# Spatial Correlation Functions

**In one line:** spatial correlation functions describe how the correlation between two residuals falls as the distance between them grows, each with its own shape controlled by a range parameter.

> [!info] Before this, it helps to know
> [[Correlation Structure]] (their family) · [[Variogram]] (their mirror image) · [[Variogram Range]]

## Start from zero
1. **Exponential (`corExp`):** exp(−d/r). Drops fast at first, never reaches zero.
2. **Gaussian (`corGaus`):** exp(−(d/r)²). Very flat near zero, then drops. Implies a smooth surface.
3. **Spherical (`corSpher`):** falls to exactly zero at d = r.
4. **Linear (`corLin`):** 1 − d/r until zero at d = r.
5. **Rational quadratic (`corRatio`):** 1/(1 + (d/r)²). Heavy tail.
6. **`nugget = TRUE`** multiplies the curve by (1 − nugget), letting very close points still differ.
7. **Syntax:** `corExp(form = ~ east + north, nugget = TRUE)`. Coordinates should be projected (metres, UTM), not raw latitude and longitude, unless you set a distance metric.
8. **Choose by AIC and by how well the implied variogram matches the empirical one** (Zuur Ch7).

## See it
![[Spatial correlation functions.png|700]]
*What to look at:* the four shapes plotted against distance in units of the range parameter.

## In R
```r
d <- c(0, 0.5, 1, 2); r <- 1
round(rbind(exponential = exp(-d / r), gaussian = exp(-(d / r)^2), spherical = ifelse(d < r, 1 - 1.5 * d / r + 0.5 * (d / r)^3, 0), ratio = 1 / (1 + (d / r)^2)), 3)
```

## In the course
[[Zuur et al. 2009 Ch7]] fits all five to whale and river pH data. Autocorrelation lab with `nlme` ([[Course Website]]).

## Common confusions
- **"Gaussian correlation means the data are normal."** It names the shape of the decay curve.
- **"Lat-long degrees are fine as coordinates."** A degree of longitude shrinks toward the poles. Project first.

## Explain it back
- Which function reaches exactly zero at the range?

*Pass test:* you can pick and fit a spatial correlation function.

## Connections
- **Builds on:** [[Correlation Structure]], [[Variogram]], [[Variogram Range]]
- **Leads to:** [[Nugget]], [[Generalized Least Squares]], [[UTM Coordinates]]
- **Part of:** [[MOC - Autocorrelation]]

## Flashcards

What is the exponential spatial correlation function?
??
exp(−d/r), where d is distance and r the range parameter.
![[Spatial correlation functions.png]]
++++

Which nlme spatial correlation functions reach exactly zero at the range?
??
Spherical and linear.
++++
