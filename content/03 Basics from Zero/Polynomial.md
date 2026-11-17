---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Polynomial term"
  - "Polynomial regression"
status: seedling
---

# Polynomial

**In one line:** a polynomial is a sum of powers of x, such as a + bx + cx², which lets a model bend.

> [!info] Before this, it helps to know
> [[Exponent]] (powers) · [[Linear Function]] (the simplest polynomial)

## The everyday picture
A bendy ruler. A stiff ruler draws only straight lines. Each extra power of x adds one more bend the ruler is allowed to make: x² allows one bend, x³ two, and so on.

*Where the picture stops working:* a ruler stays put beyond its ends. A polynomial shoots off to huge values outside the data, so it is dangerous for [[Extrapolation]].

## Words you'll need
- **Term:** one piece of the sum, such as cx².
- **Degree:** the highest power. Degree 2 is quadratic, degree 3 cubic.
- **Coefficient:** the number multiplying each power.

## A tiny example
y = 2 + 3x − 0.5x².
- x = 0: y = 2.
- x = 2: y = 2 + 6 − 2 = **6**.
- x = 3: y = 2 + 9 − 4.5 = **6.5** (the peak).
- x = 6: y = 2 + 18 − 18 = **2**. Up, then down.

## Start from zero
1. **Start with a line.** y = a + bx. No bends.
2. **Add x².** Now the slope itself changes with x, giving one hump or one dip.
3. **Add x³ for a second bend.** Each degree adds one possible turn.
4. **It is still a linear model.** *Why:* x² is just another column of numbers, and the model adds coefficient times column.
5. **Higher degree means more risk.** High-degree polynomials wiggle to chase noise ([[Overfitting]]) and behave wildly at the edges.

## See it
![[Polynomial degrees.png|700]]
*What to look at:* degree 1 cannot bend, degree 2 bends once, degree 8 wiggles through the noise.

## Why it is this way
Polynomials are the cheapest way to let a straight-line model curve: they need no new software, just new columns. Any smooth curve can be approximated by one over a short range. The cost is that they are global: a wiggle needed in one place forces behaviour everywhere else. Splines fix that by using polynomials in pieces ([[Spline]]).

## In R
```r
set.seed(4)
x <- seq(0, 6, length.out = 30)
y <- 2 + 3 * x - 0.5 * x^2 + rnorm(30, 0, 0.5)
m1 <- lm(y ~ x)
m2 <- lm(y ~ poly(x, 2, raw = TRUE))   # same as y ~ x + I(x^2)
coef(m2)                               # close to 2, 3, -0.5
AIC(m1, m2)                            # the quadratic fits far better
```
`raw = TRUE` gives coefficients for x and x² directly. The default uses orthogonal polynomials, which fit the same curve with less collinearity.

## In the course
The model selection lab uses a quadratic latitude term for crab size ([[Course Website]]). [[Parsimony]] uses a degree-10 polynomial to show overfitting.

## Common confusions
- **"`y ~ x + x^2` works in R."** Inside a formula `^` means interactions. Write `I(x^2)` or `poly(x, 2)`.
- **"Higher degree is more accurate."** It fits the sample better and new data worse.

## Explain it back
- What does each added degree let the curve do?
- Why is a polynomial model still "linear"?

*Pass test:* you can write a quadratic model in R and explain its risk at the edges.

## Connections
- **Builds on:** [[Exponent]], [[Linear Function]]
- **Leads to:** [[Quadratic Term]], [[Overfitting]], [[Spline]]
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
