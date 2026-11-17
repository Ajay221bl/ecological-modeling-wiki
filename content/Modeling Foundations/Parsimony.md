---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Principle of parsimony"
  - "Occam's razor"
status: seedling
---

# Parsimony

**In one line:** parsimony means choosing the simplest model that still captures the important pattern. Too simple and it misses real patterns (underfitting); too complex and it chases random noise (overfitting).

> [!info] Before this, it helps to know
> [[Model]] (simplification on purpose) · [[Statistical Model]] (parameters learned from data)

## The everyday picture
Two students preparing for an exam.
- The first **memorises last year's paper word for word**, answers and all. On last year's paper she'd score 100%. On this year's paper, with different questions, she's lost, because she learned the *accidents* of one paper, not the subject.
- The second learns only one rule of thumb, "the answer is usually C". He's never badly surprised, but he's usually wrong, because he learned almost nothing.
- The student who does best **learns the main ideas** and ignores the quirks of any one paper.

The first student is an overfitted model, the second an underfitted one, and the third is parsimony.

*Where the picture stops working:* the student gets a mark at the end. A model fitted to data never sees "this year's paper" unless you deliberately hold back some data to test it on.

## Words you'll need
- **Parameter:** a number the model learns from data; each one gives the model more freedom to bend.
- **Fit:** how closely the model's predictions match the data it was trained on.
- **Noise:** random scatter in the data that won't repeat in new data.
- **Overfitting:** ([[Overfitting]]) a model so flexible it fits the noise, and so predicts new data badly.
- **Underfitting:** ([[Underfitting]]) a model too rigid to capture a real pattern, so its answers are systematically off (biased).
- **Bias-variance trade-off:** adding parameters reduces bias but makes each estimate wobblier (more variance), and removing them does the reverse.
- **R²:** the fraction of variation in the data the model explains ([[R-squared]]).
- **Mean squared error (MSE):** the average squared gap between predictions and new observations; smaller is better.
- **AIC and AICc:** scores that reward fit and charge a penalty for each parameter; AICc adds a correction for small samples ([[AIC]], [[AICc]]).
- **Cross-validation:** testing a model on data held back from fitting ([[Leave-one-out Cross-validation]]).

## A tiny example
15 points simulated from a **straight line plus noise** (the R code below). So we know the truth is simple.
- **Straight line** (3 parameters: intercept, slope, residual SD): R² = **0.57**.
- **Wiggly degree-10 polynomial** (12 parameters): R² = **0.98**. It looks far better.
- Now predict **200 new points** from the same process. Mean squared error: **1.17** for the line, **6.23** for the polynomial. The "better-looking" model is five times worse on new data. It memorised last year's paper.
- **Plain AIC is fooled here** (it prefers the polynomial), because with only 15 points its approximation breaks down. The small-sample version, **AICc**, is not fooled: 48.6 for the line against 171.1 for the polynomial ([[AICc]]).

## Start from zero
1. **Every extra parameter lets a model bend more.** A line has 2 parameters for its shape, a curve with a squared term 3, and so on.
2. **More bending always fits the data you have a bit better.** *Why:* the extra flexibility can soak up random wiggles as well as real patterns. Fit to your own data can only stay the same or improve.
3. **But random wiggles won't repeat in new data.** A model that fits them perfectly predicts new data badly. That's **overfitting**.
4. **A model with too few parameters misses real structure.** That's **underfitting**, and it gives biased answers.
5. **So there's a sweet spot.** Each added parameter cuts bias but adds variance, because the same data are now spread over more things to estimate, so each is pinned down less precisely. *This is the bias-variance trade-off.*
6. **Statistics turns parsimony into numbers.** [[AIC]] adds a penalty of 2 for every parameter; cross-validation checks prediction on held-out data ([[Leave-one-out Cross-validation]]). Both reward fit and punish needless complexity ([[Why AIC rewards fit but punishes complexity]]).
7. **Parsimony depends on the question, not just the count.** Powell and Gale's first chapter asks "How complex should I make my model?". The answer depends on the purpose ([[Powell and Gale 2015 Ch1]], p. 1).

## See it
![[Parsimony.png|700]]
*What to look at:* the right panel passes close to every point, yet it would predict a new point terribly.

## Why it is this way
A model has to learn from a limited pile of data, and every parameter takes a share of that pile. With ecological data you rarely have enough observations to estimate many parameters well, so each unnecessary one makes all the others shakier. Parsimony keeps a model honest about what the data can support. Anderson and Burnham tie it to information theory: the goal is the model that loses the least information about the real process, not the one that fits these particular data best ([[Anderson and Burnham 2002]]).

## In R
```r
set.seed(3)
x <- sort(runif(15, 0, 10)); y <- 2 + 0.5 * x + rnorm(15, 0, 1)   # truth: a straight line
simple  <- lm(y ~ x)
complex <- lm(y ~ poly(x, 10))
c(summary(simple)$r.squared, summary(complex)$r.squared)  # 0.57 vs 0.98: complex "fits better"

# The real test: new data from the same process
set.seed(30)
x_new <- runif(200, min(x), max(x)); y_new <- 2 + 0.5 * x_new + rnorm(200, 0, 1)
mse <- function(m) mean((y_new - predict(m, data.frame(x = x_new)))^2)
c(simple = mse(simple), complex = mse(complex))           # 1.17 vs 6.23: complex predicts far worse

# AICc: AIC with a small-sample correction, 2k(k+1)/(n-k-1)
aicc <- function(m) { k <- length(coef(m)) + 1; n <- nobs(m); AIC(m) + 2 * k * (k + 1) / (n - k - 1) }
c(simple = aicc(simple), complex = aicc(complex))         # 48.6 vs 171.1: AICc picks the simple model
```

## In the course
Parsimony comes up again and again: in model selection (Sep 15), in choosing random effects for mixed models ([[How Many Levels for a Random Effect]]) and in priors that pull estimates toward zero. Tredennick et al. show that ridge regression, a deliberately "biased" simpler fit, predicted butterfly growth better than an unpenalized model ([[Tredennick et al. 2021]]).

## Common confusions
- **"Simplest is always best."** As simple as possible, *but no simpler*. Leaving out an important predictor biases everything else.
- **"High R² means a good model."** R² can only rise when you add predictors, so it always favours the memoriser ([[R-squared]]).
- **"Parsimony means few predictors."** It means no *unnecessary* ones for the question. A prediction model and an explanation model can need different amounts.

## Explain it back
- Use the two exam students to explain overfitting and underfitting.
- Why does adding parameters always improve fit to the data you have?
- In the tiny example, why does the polynomial win on R² but lose on new data?

*Pass test:* you can explain why "it fits my data really well" isn't enough to trust a model.

## Connections
- **Builds on:** [[Model]], [[Statistical Model]]
- **Leads to:** [[AIC]], [[Leave-one-out Cross-validation]], [[Uninformative Parameters]], [[Why AIC rewards fit but punishes complexity]]
- **Part of:** [[MOC - Modeling Foundations]]
- **Go deeper:** [[Anderson and Burnham 2002]], [[Tredennick et al. 2021]]

## Flashcards

What are overfitting and underfitting?
??
Overfitting: a too-complex model chases noise and predicts new data badly. Underfitting: a too-simple model misses real structure and is biased.
![[Parsimony.png]]
++++

Why does adding parameters always improve fit to the data you have?
??
Extra flexibility can absorb random noise as well as real patterns, so in-sample fit can only stay the same or get better.
![[Parsimony.png]]
++++

What is the bias-variance trade-off?
??
More parameters reduce bias but increase variance (each is estimated less precisely); fewer parameters do the reverse.
++++
