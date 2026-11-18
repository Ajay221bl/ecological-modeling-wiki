---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "Statistics uses a small set of symbols as shorthand: Greek letters stand for unknown true values, ordinary letters stand for data you measured, and a little hat on a letter means \"our estimate of it\"."
aliases:
  - "Notation"
  - "Greek letters"
  - "Symbols"
  - "Notation cheat sheet"
status: seedling
---

# Greek Letters and Notation

Nobody writes "Warning: the road ahead bends sharply to the left" on a road sign; they draw one curved arrow, and every driver reads it instantly once they have learned it. Statistical notation is a set of road signs for ideas. The key convention is simple: **Greek letters stand for unknown true values** (*parameters*, fixed numbers that describe the population or process, such as the true mean μ), **ordinary letters stand for data you measured** (y, x), and **a hat on a letter means "our estimate of it"**, a number calculated from data as our best guess ([[Parameter vs Estimate]]). So μ is "the true average we are trying to find" and μ̂ is "our best guess at it". The true β never changes, but β̂ changes with every new sample, so the hat is not decoration; it marks the whole difference between the truth and your guess.

A few more signs complete the toolkit. A *subscript* says which one: yᵢ is the response for observation number i, and yᵢⱼ is observation i in group j ([[Subscripts and Indexing]], [[Grouping Variable|Grouping Factor]]). A tilde, ~, means "is distributed as", that is, drawn from a probability distribution ([[Probability Distribution]]). A vertical bar, |, means "given": P(A | B) is the probability of A given that B is true ([[Conditional Probability]]). Now read a whole model: yᵢ ~ Poisson(λᵢ), log(λᵢ) = β₀ + β₁xᵢ. In words: the count at point i is drawn from a [[Poisson Distribution|Poisson distribution]] with mean λᵢ ("lambda i"), and the log of that mean is a starting value β₀ ("beta zero") plus a slope β₁ times the [[Predictor Variable|predictor]] xᵢ. That is a [[Poisson Regression]] in one line. If the data gave β̂₀ = 0.5 and β̂₁ = 0.2, the hats say those are estimates.

Why Greek at all? Partly history, and partly practicality: a separate alphabet cannot be confused with the names of your data columns, and keeping "truth" in Greek and "data" in ordinary letters builds the most important distinction in statistics, between what you know and what you are guessing, right into the writing. A few signs need care. σ is a [[Standard Deviation|standard deviation]], in the data's units, while σ² is the variance, in squared units ([[Variance]]). λ means a Poisson mean in one book and a yearly population growth multiplier in another, so read the context. And R reuses the tilde and the bar with related meanings: in an R formula `y ~ x` separates the response from the predictors, and in lme4 `(1 | site)` means "a separate intercept for each site" ([[Random Intercept]]). Other signs in the table below are Σ for "add them all up" ([[Summation Notation]]), ∏ for "multiply them all", and ∝ for "[[Proportional To|proportional to]]", used in [[Bayes' Theorem]]. Hobbs and Hooten write every model this way ([[Hobbs and Hooten 2015 Ch2]]), and Powell and Gale use θ for a parameter and θ̂ for its estimate ([[Powell and Gale 2015 Ch2]]); learn about twenty signs and the methods sections of papers open up.

| Symbol | Say it | Usually means |
|---|---|---|
| μ | mu | a population mean, or the model's expected value |
| σ, σ² | sigma, sigma squared | standard deviation, variance |
| β₀, β₁ | beta-zero, beta-one | intercept, slope |
| θ | theta | any parameter |
| λ | lambda | Poisson mean; population growth rate |
| ε | epsilon | random error (residual) |
| ρ | rho | correlation |
| α | alpha | significance level, or an intercept in some books |
| Σ | capital sigma | "add them all up" ([[Summation Notation]]) |
| ∏ | capital pi | "multiply them all together" |
| x̄ | x-bar | sample mean |
| θ̂ | theta-hat | estimate of θ |
| ~ | tilde | "is distributed as" |
| \| | bar | "given" |
| ∝ | proportional to | equal up to a constant (used in [[Bayes' Theorem]]) |
| i, j | | index of an observation, of a group |
| n, N | | sample size, population size |

*What to look at:* the left column is the sign, the middle is how to say it out loud, and the right is what it usually stands for.

```r
# R reads the same structure in its formula language
fit <- glm(count ~ x, family = poisson, data = data.frame(count = c(1, 3, 2, 6), x = 1:4))
coef(fit)   # the beta-hats: estimates of beta0 and beta1 (on the log scale)
```

## Connections
- **Builds on:** [[Parameter vs Estimate]], [[Standard Deviation]], [[Proportional To]]
- **Leads to:** [[Summation Notation]], [[Deterministic and Stochastic Components]], [[Statistical Model]], [[Poisson Distribution]], [[Predictor Variable]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch2]]

## Flashcards

In statistical notation, what do Greek letters and hats usually signal?
??
Greek letters are unknown parameters; a hat (θ̂) marks an estimate of that parameter from data.
++++

What does y ~ Normal(μ, σ) mean?
??
y is distributed as (drawn from) a normal distribution with mean μ and standard deviation σ.
++++

What does the vertical bar mean in P(A | B), and in lme4's (1 | site)?
??
"Given": the probability of A given B. In lme4 it means "for each level of": a separate intercept for each site.
++++
