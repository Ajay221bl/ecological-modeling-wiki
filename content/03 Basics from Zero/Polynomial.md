---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "A polynomial is a sum of powers of x, such as a + bx + cx², which lets a model bend."
aliases:
  - "Polynomial term"
  - "Polynomial regression"
status: seedling
---

# Polynomial

Think of a bendy ruler. A stiff ruler can only draw straight lines, but each extra power of x lets the ruler make one more bend. A **polynomial** is a sum of powers of x, each multiplied by its own number (its *[[Regression Coefficient|coefficient]]*): a + bx + cx² + dx³ and so on. Each piece of the sum is a *term*, and the highest power is the *degree*. Degree 1 is a [[Equation of a Line|straight line]], degree 2 (quadratic) can make one bend, degree 3 (cubic) two bends. In general a polynomial of degree d can turn at most d − 1 times.

Try one with numbers: y = 2 + 3x − 0.5x². At x = 0, y = 2. At x = 2, y = 2 + 6 − 2 = 6. At x = 3, y = 2 + 9 − 4.5 = 6.5, the peak. At x = 6, y = 2 + 18 − 18 = 2 again. So the curve goes up and then comes back down. Here is the clever part: this is still a [[Linear Model|linear model]], because x² is simply another [[Vector|column of numbers]] and the model just adds coefficient times column. That means ordinary [[lm()]] can fit it, with no new software. In an R formula you must write `I(x^2)` or `poly(x, 2)`, because a bare `^` inside a formula means "interactions", not "squared". `poly(x, 2, raw = TRUE)` gives coefficients for x and x² directly, while the default form fits the same curve using reshaped columns that are less correlated with each other.

Polynomials are the cheapest way to let a straight-line model bend, and over a short range they can mimic almost any smooth curve. But they have two weaknesses. First, higher degree is not more [[Accuracy|accurate]]: a degree-8 polynomial will wiggle through the noise in your sample and predict new data worse, which is [[Overfitting]] (the [[Parsimony]] note shows a degree-10 example). Second, polynomials are global: a bend needed in one place forces behaviour everywhere else, and beyond the ends of the data they shoot off to huge values, which makes them dangerous for [[Extrapolation]]. A [[Spline]] fixes both problems by joining short polynomial pieces end to end. The most common polynomial in practice is the single squared term, see [[Quadratic Term]].

![[Polynomial degrees.png|700]]
*What to look at:* degree 1 cannot bend, degree 2 bends once, degree 8 wiggles through the noise.

```r
set.seed(4)
x <- seq(0, 6, length.out = 30)
y <- 2 + 3 * x - 0.5 * x^2 + rnorm(30, 0, 0.5)
m1 <- lm(y ~ x)
m2 <- lm(y ~ poly(x, 2, raw = TRUE))   # same as y ~ x + I(x^2)
coef(m2)                               # close to 2, 3, -0.5
AIC(m1, m2)                            # the quadratic fits far better
```
`raw = TRUE` gives coefficients for x and x² directly. The default uses orthogonal polynomials, which fit the same curve with less [[Collinearity|collinearity]].

## Connections
- **Builds on:** [[Exponent]], [[Linear Function]], [[Equation of a Line]], [[Vector]]
- **Leads to:** [[Quadratic Term]], [[Overfitting]], [[Spline]], [[Regression Coefficient]], [[Linear Model]], [[lm()]], [[Accuracy]], [[Collinearity]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]

## Flashcards

What is a polynomial?
??
A sum of powers of x, such as a + bx + cx², with one coefficient per power.
![[Polynomial degrees.png]]
++++

What does the degree of a polynomial control?
??
The number of bends the curve can make (degree minus one).
++++

How do you write a squared term in an R formula?
??
I(x^2) or poly(x, 2), because ^ alone means interaction.
++++
