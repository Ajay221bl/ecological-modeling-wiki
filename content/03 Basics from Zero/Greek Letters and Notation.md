---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Notation"
  - "Greek letters"
  - "Symbols"
  - "Notation cheat sheet"
status: seedling
---

# Greek Letters and Notation

**In one line:** statistics uses a small set of symbols as shorthand: Greek letters stand for unknown true values, ordinary letters stand for data you measured, and a little hat on a letter means "our estimate of it".

> [!info] Before this, it helps to know
> [[Parameter vs Estimate]] (why we need separate symbols for the truth and for our guesses)

## The everyday picture
Road signs. Nobody writes "Warning: the road ahead bends sharply to the left, please slow down" on a sign. They draw one curved arrow, and every driver reads it instantly. The symbol is shorter than the sentence, but only once you've learned it.

Statistical symbols are road signs for ideas. μ is a sign that says "the true average we're trying to find". A hat on top, μ̂, says "our best guess at it". Learn about twenty signs and you can read most model equations in the course.

*Where the picture stops working:* road signs mean the same thing everywhere. A few statistical symbols (λ, α) mean different things in different books, so you still have to read the context.

## Words you'll need
- **Parameter:** a fixed but unknown number that describes the population or the process, such as the true mean ([[Parameter vs Estimate]]).
- **Estimate:** a number calculated from data as our best guess at a parameter.
- **Subscript:** a small label below a letter that says *which one* (y₃ is the third y).
- **Distribution:** a rule for how likely each value is ([[Probability Distribution]]).
- **Index:** the counter in a subscript, usually i for observations and j for groups.

## A tiny example
Here is a whole model written in signs:

yᵢ ~ Poisson(λᵢ), log(λᵢ) = β₀ + β₁xᵢ

Read it one sign at a time:
- **yᵢ**: the count for observation number i (say, birds at point i).
- **~**: "is drawn from" (is distributed as).
- **Poisson(λᵢ)**: a Poisson distribution, the usual one for counts, with mean λᵢ ("lambda-i").
- **log(λᵢ) = β₀ + β₁xᵢ**: on the log scale, that mean is a starting value β₀ ("beta-zero") plus a slope β₁ ("beta-one") times the predictor xᵢ.

In words: "the bird count at each point comes from a Poisson distribution whose average, after taking the log, is a straight line in x". That's a [[Poisson Regression]] in one line. If the data gave β̂₀ = 0.5 and β̂₁ = 0.2, the hats tell you those are estimates, not the truth.

## Start from zero
1. **Writing everything in words gets long.** "The true average richness at a site" becomes μ.
2. **Greek for unknowns, ordinary letters for data.** *Why:* one glance tells you what is known (measured) and what is being estimated. y and x are data. μ, σ, β are parameters.
3. **A hat means "estimated from data":** β̂ ("beta-hat") is our estimate of β. *Why a separate mark:* the true β never changes, but β̂ changes with every new sample.
4. **Subscripts say which one.** yᵢ is the response for observation i. β₁ is the first slope. y_ij is observation i in group j, used all the time in mixed models ([[Grouping Factor]]).
5. **A tilde (~) means "is distributed as".** y ~ Normal(μ, σ) reads "y is drawn from a normal distribution with mean μ and standard deviation σ". *Why:* this is how the random part of a model is written ([[Deterministic and Stochastic Components]]). R reuses the tilde with a related meaning: `y ~ x` means "model y using x".
6. **A vertical bar (|) means "given".** P(A | B) is "the probability of A given that B is true" ([[Conditional Probability]]). In the lme4 package, `(1 | site)` means "a separate intercept for each site" ([[Random Intercept]]).

## See it
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

## Why it is this way
Why Greek at all? Partly history (the people who built statistics wrote in this tradition), and partly practicality: Greek letters are a separate alphabet, so they can't be confused with the names of your data columns. Keeping "truth" in Greek and "data" in ordinary letters builds the most important distinction in statistics, between what you know and what you're guessing, right into the writing. Papers and textbooks (Hobbs and Hooten especially) write models in these signs. If you can read them, the most important part of a methods section opens up.

## In R
```r
# R reads the same structure in its formula language
fit <- glm(count ~ x, family = poisson, data = data.frame(count = c(1, 3, 2, 6), x = 1:4))
coef(fit)   # the beta-hats: estimates of beta0 and beta1 (on the log scale)
```

## In the course
Hobbs and Hooten write every model with this notation, using g( ) for a deterministic function and θ for parameters ([[Hobbs and Hooten 2015 Ch2]], p. 21). Powell and Gale use θ for a parameter and θ̂ for its estimate ([[Powell and Gale 2015 Ch2]], p. 16).

## Common confusions
- **σ vs σ².** σ is the standard deviation, in the same units as the data. σ² is the variance, in squared units ([[Variance]]).
- **λ means different things.** In a Poisson model it's the mean count; in population ecology it's the yearly growth multiplier. Read the context.
- **"~" in maths vs in R.** In maths, y ~ Normal() names a distribution. In an R formula, `y ~ x` separates the response from the predictors.
- **"The hat is decoration."** It's the whole difference between the truth and your guess at it.

## Explain it back
- Why are parameters written in Greek and data in ordinary letters?
- What's the difference between β and β̂?
- Read "y ~ Normal(μ, σ)" aloud in plain words.

*Pass test:* you can read the Poisson model line in the tiny example aloud as an ordinary sentence.

## Connections
- **Builds on:** [[Parameter vs Estimate]]
- **Leads to:** [[Summation Notation]], [[Deterministic and Stochastic Components]], [[Statistical Model]]
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
