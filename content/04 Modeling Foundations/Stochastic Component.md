---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "The stochastic component of a model is the probability distribution describing how real observations scatter around the expected value, written y ~ Distribution(μ, σ)."
aliases:
  - "Stochastic part"
status: seedling
---

# Stochastic Component

A forecast says "20 °C, give or take 2". The "give or take" is the stochastic part: it admits that clouds, gusts and things nobody tracked will push the real temperature up or down, and it says by roughly how much. The **stochastic component** of a model is the probability distribution describing how real observations scatter around the [[Expected Value|expected value]] μ given by the [[Deterministic Component]] ([[Probability Distribution]]). *Stochastic* means involving chance. It is written, for example, y ~ Normal(μ, σ), read "y is drawn from a [[Normal Distribution|bell curve]] centred on μ with spread σ", where σ ("sigma") is the typical size of the scatter ([[Standard Deviation]]).

An example. At a rainfall of 5 the rule gives μ = 9, and y ~ Normal(9, σ = 2). About 95% of plots fall within ±2σ, from 5 to 13. A plot of 14 is 2.5σ above the mean, which happens about 1 time in 160: unusual but possible. A plot of 25 is 8σ above, essentially never, so it is either a recording error or a sign the model is missing something. Without the stochastic part, 14 and 25 would both just be "above the line"; with it, you know how surprised to be.

Every model leaves things out, and you cannot model everything left out, but you can describe its combined effect as random scatter; many small, unrelated pushes added together tend to produce a bell curve ([[Hobbs and Hooten 2015 Ch1]]). A big σ means the rule explains little. This part is far from a nuisance: it produces the [[Likelihood]], the engine of estimation, [[Model Selection|model comparison]] and uncertainty ([[Hobbs and Hooten 2015 Ch3]]). Its *shape* must match the data type: Normal for unbounded [[Continuous Data|continuous data]] with roughly constant spread, Poisson for counts, which cannot go below zero and scatter lopsidedly, and Bernoulli for yes/no outcomes ([[Why the response type decides the distribution]]). So Normal errors are not a universal default.

![[Deterministic and stochastic components.png|700]]
*What to look at:* the purple curves are the stochastic component, centred on the line.

```r
set.seed(6)
mu <- 9
y  <- rnorm(1000, mean = mu, sd = 2)   # the stochastic part generating plots
mean(y > 13)                           # about 0.025: beyond +2 sigma
1 - pnorm(14, mean = 9, sd = 2)        # 0.0062: chance of a plot at 14 or more
```

## Connections
- **Builds on:** [[Deterministic Component]], [[Standard Deviation]], [[Continuous Data]]
- **Leads to:** [[Probability Distribution]], [[Likelihood]], [[Process Variation]], [[Observation Error]], [[Expected Value]], [[Normal Distribution]], [[Model Selection]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], molecular notes [[Deterministic and Stochastic Components]], [[Why every statistical model has a deterministic and a stochastic part]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch3]]

## Flashcards

Why does a model need a stochastic part at all?
??
The deterministic function leaves out many influences; their combined effect shows up as scatter, which must be described to compute likelihoods and uncertainty.
![[Deterministic and stochastic components.png]]
++++

What does a large σ tell you?
??
The deterministic part explains little; much of the variation comes from influences the model leaves out (or from measurement error).
++++
