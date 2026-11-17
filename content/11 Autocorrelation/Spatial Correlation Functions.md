---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "Spatial correlation functions describe how the correlation between two residuals falls as the distance between them grows, each with its own shape controlled by a range parameter."
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

**Spatial correlation functions** describe how the correlation between two residuals falls as the distance d between them grows, each with its own shape controlled by a range parameter r ([[Correlation Structure]], [[Variogram Range]]). The exponential, `corExp`, is exp(−d/r): it drops fast at first and never reaches zero. The Gaussian, `corGaus`, is exp(−(d/r)²): very flat near zero, then dropping, implying a smooth surface. The spherical, `corSpher`, falls to exactly zero at d = r; the linear, `corLin`, is 1 − d/r until zero at d = r; and the rational quadratic, `corRatio`, is 1/(1 + (d/r)²), with a heavy tail. The figure plots the shapes against distance.

`nugget = TRUE` multiplies the curve by (1 − nugget), letting very close points still differ ([[Nugget]]). The syntax is `corExp(form = ~ east + north, nugget = TRUE)`. In the code below, at distances 0, 0.5, 1 and 2 range units, the exponential gives 1, 0.61, 0.37 and 0.14; the Gaussian 1, 0.78, 0.37 and 0.02; the spherical 1, 0.31, 0 and 0; and the rational quadratic 1, 0.80, 0.50 and 0.20.

Choose by AIC and by how well the implied variogram matches the empirical one ([[Variogram]]); [[Zuur et al. 2009 Ch7]] fits all five to whale and river pH data, and the autocorrelation lab uses nlme ([[Generalized Least Squares]], [[Course Website]]). Coordinates should be projected, such as metres in [[UTM Coordinates]], not raw latitude and longitude, because a degree of longitude shrinks toward the poles. "Gaussian" correlation does not mean the data are normal; it names the shape of the decay curve.

![[Spatial correlation functions.png|700]]
*What to look at:* the four shapes plotted against distance in units of the range parameter.

```r
d <- c(0, 0.5, 1, 2); r <- 1
round(rbind(exponential = exp(-d / r), gaussian = exp(-(d / r)^2), spherical = ifelse(d < r, 1 - 1.5 * d / r + 0.5 * (d / r)^3, 0), ratio = 1 / (1 + (d / r)^2)), 3)
```

## Connections
- **Builds on:** [[Correlation Structure]], [[Variogram]], [[Variogram Range]]
- **Leads to:** [[Nugget]], [[Generalized Least Squares]], [[UTM Coordinates]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

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
