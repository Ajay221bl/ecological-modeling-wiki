---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Statistical models"
  - "Model-based analysis"
status: seedling
---

# Statistical Model

**In one line:** a statistical model learns unknown numbers (parameters) from data. It does this by pairing a rule for the average with a description of how real data scatter around that average.

> [!info] Before this, it helps to know
> [[Analytical Model]] (an equation with fixed parameters) · [[Parameter vs Estimate]] · [[Functions in Maths]]

## The everyday picture
Your bathroom scales are a bit off, and you want to know by how much. You weigh a 5 kg bag of flour ten times. The readings are 5.3, 5.1, 5.4, 5.2, 5.3... never exactly the same. You'd conclude two things: "the scales read about 0.25 kg heavy" (the **average** error) and "each reading wobbles by about 0.1 kg" (the **scatter**). And because you only took ten readings, you'd add: "I'm fairly, not perfectly, sure about that 0.25".

That is a statistical model in miniature: a rule for the average, a description of the scatter, and an honest statement of how sure you are, all learned from data.

*Where the picture stops working:* with the scales you knew the flour weighed 5 kg. In ecology you never know the true value; you only see the scattered readings.

## Words you'll need
- **Parameter:** an unknown fixed number the model tries to learn, such as a survival rate ([[Parameter vs Estimate]]).
- **Estimate:** the model's best guess at a parameter, written with a hat (Ŝ).
- **Deterministic part:** the rule for the average; it gives the same answer every time ([[Deterministic and Stochastic Components]]).
- **Stochastic part:** the description of random scatter around the average, given by a probability distribution.
- **Probability distribution:** a rule saying how likely each possible value is ([[Probability Distribution]]).
- **Likelihood:** how probable the observed data are for given parameter values ([[Likelihood]]).
- **Standard error (SE):** how much the estimate would wobble with a new sample ([[Standard Error]]).

## A tiny example
You put radio collars on 10 elk. A year later, 8 are alive.
- **Unknown parameter:** S, each elk's true chance of surviving the year.
- **Model:** each elk survives independently with chance S, so the number alive follows a Binomial(10, S) distribution ("10 tries, each succeeding with chance S").
- **Estimate:** Ŝ = 8 / 10 = **0.8**.
- **Uncertainty:** SE = √(0.8 × 0.2 / 10) ≈ **0.13**. So the truth could easily be anywhere from about 0.55 to 1.

An analytical model would have just *said* "survival is 0.8". The statistical model *learned* 0.8 from the data and told you how much to trust it.

## Start from zero
1. **An analytical model assumes you already know its parameters** ([[Analytical Model]]).
2. **Usually you don't.** What's the survival rate? How much does richness change with grass cover? You want the data to tell you.
3. **A statistical model is a recipe for learning parameters from data.** The simplest one is Powell and Gale's survival estimator, Ŝ = n_alive / n_tagged ([[Powell and Gale 2015 Ch1]], p. 6). The formula for a mean is another ([[Mean]]).
4. **Real data never sit exactly on the rule.** Two plots with the same rainfall have different biomass. So the model needs a second part describing *how* data scatter around the rule ([[Deterministic and Stochastic Components]]).
5. **That scatter is described by a probability distribution** (Normal, Poisson, Binomial...). *Why:* once you say how data scatter, you can ask how probable your actual data are under each possible parameter value. That's the [[Likelihood]], and the parameter values that make your data most probable are the best fit.
6. **Because parameters are learned from a sample, they're uncertain.** A statistical model reports that uncertainty as standard errors, confidence intervals or posterior distributions. That uncertainty is the main thing it adds to an analytical model.
7. **In Hobbs and Hooten's words:** a statistical model answers "What is the probability that I will observe the data if the model faithfully represents the processes that give rise to the data?" ([[Hobbs and Hooten 2015 Ch2]], p. 17).

## See it
![[Deterministic and stochastic components.png|700]]
*What to look at:* the blue line is the deterministic rule, and the purple curves are the stochastic part. A statistical model estimates both from the orange data.

## Why it is this way
Why two parts instead of just a line? Because the line alone can't tell you how surprised to be by any data point, and without that you can't measure how well the line fits or how sure you are of it. The scatter part is what turns a description ("these 30 sites averaged 6 species") into an inference ("richness rises by 0.4 species per 10% grass cover, give or take 0.1"). It's the bridge from data to a conclusion qualified by uncertainty.

## In R
```r
# Survival as a statistical model: a binomial GLM with only an intercept
alive <- c(rep(1, 8), rep(0, 2))
fit <- glm(alive ~ 1, family = binomial)
plogis(coef(fit))       # 0.8: estimated survival on the probability scale

# The most common statistical model: a linear model
fit2 <- lm(dist ~ speed, data = cars)
summary(fit2)           # estimates, standard errors and the residual SD
```

## In the course
Every model fitted in the labs is a statistical model: `lm()`, `glm()`, `lmer()` and `brm()`. The syllabus describes the course as teaching students "to conduct and interpret modeling analyses" ([[Course Overview]]).

## Common confusions
- **"Statistical models are just tests."** A t-test is a statistical model (two means, normal scatter), but the modeling view is more general and lets you build the model your data need.
- **"The model is the line."** The line is only the deterministic half. Choosing the wrong scatter distribution gives wrong uncertainty even when the line is right ([[Why every statistical model has a deterministic and a stochastic part]]).
- **"The estimate is the answer."** The estimate *and its uncertainty* are the answer.

## Explain it back
- Use the bathroom scales to explain the two parts of a statistical model.
- 8 of 10 elk survived. What is the estimate, and why does the model also give an SE?
- What does a statistical model add that an analytical model doesn't?

*Pass test:* for any R model output, you can point to the estimated rule, the estimated scatter, and the uncertainty.

## Connections
- **Builds on:** [[Analytical Model]], [[Parameter vs Estimate]]
- **Leads to:** [[Deterministic and Stochastic Components]], [[Probability Distribution]], [[Likelihood]], [[Linear Regression]], [[Generalized Linear Model]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch1]], [[Hobbs and Hooten 2015 Ch3]]

## Flashcards

What does a statistical model add to an analytical model?
??
It estimates the parameters from data and quantifies the uncertainty of those estimates, using a probability distribution for the scatter.
![[Deterministic and stochastic components.png]]
++++

What are the two parts of every statistical model?
??
A deterministic part (the rule for the average, e.g., a line) and a stochastic part (a probability distribution for scatter around it).
![[Deterministic and stochastic components.png]]
++++
