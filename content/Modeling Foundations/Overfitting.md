---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Overfit"
  - "Overfitted model"
status: seedling
---

# Overfitting

**In one line:** overfitting is when a model is so flexible that it fits the random noise in your data as well as the real pattern, so it looks great on those data and predicts new data badly.

> [!info] Before this, it helps to know
> [[Statistical Model]] · [[Parameter]] (each one adds flexibility)

## The everyday picture
A student memorises last year's exam paper word for word, answers and all. On last year's paper she'd score 100%. On this year's paper, with different questions, she's lost. She learned the *accidents* of one paper instead of the subject.

*Where the picture stops working:* the student finds out at the exam. A model only finds out if you test it on data it hasn't seen.

## Words you'll need
- **Noise:** random scatter that won't repeat in new data.
- **Flexibility:** how much a model can bend; more parameters, more flexibility.
- **In-sample fit:** how well a model matches the data it was fitted to (R², for example).
- **Out-of-sample error:** how badly it predicts new data.
- **Polynomial:** a curve made of powers of x (x, x², x³...); higher degrees bend more.

## A tiny example
15 points simulated from a straight line plus noise ([[Parsimony]]).
- A degree-10 polynomial (12 parameters) gets R² = **0.98** on those 15 points. A straight line gets 0.57.
- On 200 new points from the same process, mean squared error is **6.23** for the polynomial and **1.17** for the line.
- The polynomial "memorised the paper": its extra wiggles chased noise that isn't in the new data.

## Start from zero
1. **Every parameter lets a model bend more.**
2. **More bending always fits the existing data at least as well.** *Why:* extra flexibility can absorb random wiggles as well as real patterns.
3. **But random wiggles don't repeat.** *Why:* they're noise, different in every dataset.
4. **So an over-flexible model predicts new data badly.** That's overfitting.
5. **Detect it with unseen data:** cross-validation, or criteria like AICc that penalise parameters ([[Leave-one-out Cross-validation]], [[AICc]]).

## See it
![[Parsimony.png|700]]
*What to look at:* the right panel threads every point and would miss a new one badly.

## Why it is this way
A model's job is to capture what *repeats*. Fit to your own data rewards capturing everything, including what doesn't repeat, which is why in-sample fit alone can't be trusted.

## In R
```r
set.seed(3)
x <- sort(runif(15, 0, 10)); y <- 2 + 0.5 * x + rnorm(15, 0, 1)
wiggly <- lm(y ~ poly(x, 10))
summary(wiggly)$r.squared                       # 0.98 on its own data
set.seed(30)
x_new <- runif(200, min(x), max(x)); y_new <- 2 + 0.5 * x_new + rnorm(200, 0, 1)
mean((y_new - predict(wiggly, data.frame(x = x_new)))^2)   # 6.23 on new data
```

## In the course
Overfitting is the danger behind model selection (Sep 15) and the reason Tredennick et al. insist on validating predictive models on new data ([[Tredennick et al. 2021]]).

## Common confusions
- **"High R² means a good model."** R² can only rise as you add terms.
- **"Overfitting only happens with huge models."** With 15 points, 12 parameters is plenty.

## Explain it back
- Use the student who memorised the paper to explain overfitting.
- Why does adding parameters always improve fit to the data you have?
- How would you catch an overfitted model?

*Pass test:* you can explain why "it fits my data really well" isn't enough.

## Connections
- **Builds on:** [[Statistical Model]], [[Parameter]]
- **Leads to:** [[Underfitting]], [[Bias-Variance Trade-off]], [[Leave-one-out Cross-validation]], [[AICc]]
- **Part of:** [[MOC - Modeling Foundations]]; the principle behind it: [[Parsimony]]
- **Go deeper:** [[Predictive Modeling]]

## Flashcards

What is overfitting?
??
A model so flexible it fits the noise in the data as well as the pattern, so it predicts new data badly.
![[Parsimony.png]]
++++

Why does adding parameters always improve fit to the data you have?
??
Extra flexibility can absorb random noise as well as real patterns, so in-sample fit can only stay the same or get better.
![[Parsimony.png]]
++++
