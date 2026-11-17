---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "A statistical model learns unknown numbers (parameters) from data. It does this by pairing a rule for the average with a description of how real data scatter around that average."
aliases:
  - "Statistical models"
  - "Model-based analysis"
status: seedling
---

# Statistical Model

You suspect your bathroom scales are off, so you weigh a 5 kg bag of flour ten times and read 5.3, 5.1, 5.4, 5.2, 5.3 and so on. You conclude two things: the scales read about 0.25 kg heavy (the average error), and each reading wobbles by about 0.1 kg (the scatter). Because you took only ten readings you add, "I'm fairly, not perfectly, sure about that 0.25." That is a **statistical model** in miniature: it learns unknown fixed numbers, *parameters*, from data, by pairing a rule for the average (the *deterministic* part) with a *probability distribution*, a rule for how likely each value is, describing how real data scatter around that average (the *stochastic* part) ([[Deterministic and Stochastic Components]], [[Probability Distribution]]). And it reports how sure it is. In Hobbs and Hooten's words, it answers "What is the probability that I will observe the data if the model faithfully represents the processes that give rise to the data?" ([[Hobbs and Hooten 2015 Ch2]]).

An example. You radio-collar 10 elk, and a year later 8 are alive. The unknown parameter is S, each elk's true chance of surviving the year. The model says each elk survives independently with chance S, so the number alive follows a Binomial(10, S) distribution. The estimate, written with a hat, is Ŝ = 8 / 10 = 0.8, Powell and Gale's survival estimator ([[Powell and Gale 2015 Ch1]], [[Parameter vs Estimate]]). Its [[Standard Error]], how much it would wobble with a new sample, is √(0.8 × 0.2 / 10) ≈ 0.13, so the truth could easily be anywhere from about 0.55 to 1. An [[Analytical Model]] would simply have *said* survival is 0.8; the statistical model *learned* 0.8 from the data and told you how much to trust it.

Why two parts instead of just a line? The line alone cannot tell you how surprised to be by any data point, and without that you cannot measure how well it fits or how sure you are of it. Once you say how data scatter, you can ask how probable your actual data are under each possible parameter value, the [[Likelihood]], and the values that make the data most probable are the best fit. That is what turns a description ("these 30 sites averaged 6 species") into an inference ("richness rises by 0.4 species per 10% grass cover, give or take 0.1"). Every model in the labs is a statistical model: `lm()`, `glm()`, `lmer()` and `brm()`, and a t-test is one too, two means with normal scatter. Two confusions: the line is only half the model, and choosing the wrong scatter distribution gives wrong uncertainty even when the line is right ([[Why every statistical model has a deterministic and a stochastic part]]); and the estimate alone is not the answer, the estimate *with its uncertainty* is ([[Functions in Maths]], [[Mean]]).

![[Deterministic and stochastic components.png|700]]
*What to look at:* the blue line is the deterministic rule, and the purple curves are the stochastic part. A statistical model estimates both from the orange data.

```r
# Survival as a statistical model: a binomial GLM with only an intercept
alive <- c(rep(1, 8), rep(0, 2))
fit <- glm(alive ~ 1, family = binomial)
plogis(coef(fit))       # 0.8: estimated survival on the probability scale

# The most common statistical model: a linear model
fit2 <- lm(dist ~ speed, data = cars)
summary(fit2)           # estimates, standard errors and the residual SD
```

## Connections
- **Builds on:** [[Analytical Model]], [[Parameter vs Estimate]]
- **Leads to:** [[Deterministic and Stochastic Components]], [[Probability Distribution]], [[Likelihood]], [[Linear Regression]], [[Generalized Linear Model]]
- **See also:** [[Course Overview]]
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
