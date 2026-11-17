---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Least squares is the method of choosing the line that makes the sum of the squared residuals as small as possible."
aliases:
  - "Ordinary least squares"
  - "OLS"
  - "Method of least squares"
status: seedling
---

# Least Squares

Attach each data point to a rigid rod with a spring and let go: the rod settles where the total tension is least. A spring's energy grows with the square of its stretch, so the resting place is the least-squares line. **Least squares** chooses the line that makes the sum of the squared [[Residual|residuals]] as small as possible ([[Sum of Squares]]). Pick candidate values of β₀ and β₁, compute every residual, square them and add to get the residual sum of squares, RSS = Σ(yᵢ − β₀ − β₁xᵢ)², and find the β's that make it smallest. The figure draws each residual as a literal square; the best line has the smallest total area.

Take three points (1, 2), (2, 2) and (3, 4). The line y = 0 + 1x leaves residuals 1, 0 and 1, so RSS = 2. The line y = 0.67 + 1x leaves residuals 0.33, −0.67 and 0.33, so RSS = 0.67, and no line does better. Calculus gives exact formulas for the minimum: β̂₁ = cov(x, y)/var(x) and β̂₀ = ȳ − β̂₁x̄ ([[Finding a Maximum with Calculus]]). In matrix form it is β̂ = (XᵀX)⁻¹Xᵀy, which is what [[lm()]] computes. The code below finds the same answer three ways: numerical search with `optim()`, `lm()`, and the matrix formula.

Squares are used for two reasons. Squaring makes positive and negative misses both count and penalises big misses heavily. And if the errors are normal, the least-squares estimates are exactly the [[Maximum Likelihood Estimation|maximum likelihood estimates]]; Johnson and Omland describe least squares as a special case of likelihood ([[Johnson and Omland 2004]], [[Zuur et al. 2009 Appendix A]]). The heavy penalty on big misses is also its weakness, making it sensitive to outliers ([[Robust Regression]]). Two confusions: the fit itself does not require normal data, though the usual standard errors and tests do rely on the error assumptions; and it minimises vertical squared distances, not perpendicular ones. GLMs are fitted by a repeated, weighted version, [[Iteratively Reweighted Least Squares]].

![[Least squares squares.png|700]]
*What to look at:* each residual drawn as a literal square. The best line makes the total area of the squares smallest.

```r
x <- c(1, 2, 3); y <- c(2, 2, 4)
rss <- function(b) sum((y - b[1] - b[2] * x)^2)
rss(c(0, 1)); rss(c(2 / 3, 1))                       # 2 and 0.667
optim(c(0, 0), rss)$par; coef(lm(y ~ x))             # numerical search and lm agree
X <- cbind(1, x); solve(t(X) %*% X) %*% t(X) %*% y   # the matrix formula
```

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
