---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Ordinary least squares"
  - "OLS"
  - "Method of least squares"
status: seedling
---

# Least Squares

**In one line:** least squares is the method of choosing the line that makes the sum of the squared residuals as small as possible.

> [!info] Before this, it helps to know
> [[Residual]] (what is squared) · [[Sum of Squares]] (what is minimised) · [[Finding a Maximum with Calculus]] (how the minimum is found)

## The everyday picture
Attaching each data point to a rigid rod with a spring. Let go, and the rod settles where the total tension in the springs is least. A spring's energy grows with the square of its stretch, so the resting place is the least-squares line.

## A tiny example
Three points (1, 2), (2, 2), (3, 4).
- Try y = 0 + 1x: residuals 1, 0, 1. Sum of squares 2.
- Try y = 0.67 + 1x: residuals 0.33, −0.67, 0.33. Sum of squares 0.67.
- No line does better than the second. It is the least-squares fit.

## Start from zero
1. **Pick candidate values of β₀ and β₁.**
2. **Compute every residual.**
3. **Square them and add:** RSS = Σ(yᵢ − β₀ − β₁xᵢ)².
4. **Find the β's that minimise RSS.** Calculus gives exact formulas: β̂₁ = cov(x, y)/var(x), β̂₀ = ȳ − β̂₁x̄.
5. **Why squares, 1:** squaring makes positive and negative misses both count, and penalises big misses heavily.
6. **Why squares, 2:** if the errors are normal, the least-squares estimates are exactly the maximum likelihood estimates.
7. **Its weakness:** heavy penalties on big misses make it sensitive to outliers.
8. **In matrix form:** β̂ = (XᵀX)⁻¹Xᵀy, which is what `lm()` computes.

## See it
![[Least squares squares.png|700]]
*What to look at:* each residual drawn as a literal square. The best line makes the total area of the squares smallest.

## In R
```r
x <- c(1, 2, 3); y <- c(2, 2, 4)
rss <- function(b) sum((y - b[1] - b[2] * x)^2)
rss(c(0, 1)); rss(c(2 / 3, 1))                       # 2 and 0.667
optim(c(0, 0), rss)$par; coef(lm(y ~ x))             # numerical search and lm agree
X <- cbind(1, x); solve(t(X) %*% X) %*% t(X) %*% y   # the matrix formula
```

## In the course
[[Zuur et al. 2009 Appendix A]]. Johnson and Omland describe least squares as a special case of likelihood ([[Johnson and Omland 2004]]).

## Common confusions
- **"Least squares requires normal data."** The fit doesn't. The usual standard errors and tests do rely on the error assumptions.
- **"It minimises distance to the line."** It minimises vertical squared distances, not perpendicular ones.

## Explain it back
- Why square the residuals instead of adding them?

*Pass test:* you can compute an RSS and explain what `lm()` minimises.

## Connections
- **Builds on:** [[Residual]], [[Sum of Squares]]
- **Leads to:** [[Maximum Likelihood Estimation]], [[lm()]], [[Iteratively Reweighted Least Squares]], [[Robust Regression]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What does least squares minimise?
??
The sum of squared residuals.
![[Least squares squares.png]]
++++

When do least-squares estimates equal maximum likelihood estimates?
??
When errors are independent and normal with constant variance.
++++
