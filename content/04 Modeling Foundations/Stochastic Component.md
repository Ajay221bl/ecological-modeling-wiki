---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Stochastic part"
  - "Error distribution"
status: seedling
---

# Stochastic Component

**In one line:** the stochastic component of a model is the probability distribution describing how real observations scatter around the expected value, written y ~ Distribution(μ, σ).

> [!info] Before this, it helps to know
> [[Deterministic Component]] (what the scatter is around) · [[Standard Deviation]]

## The everyday picture
The forecast says "20 °C, **give or take 2**". The "give or take" is the stochastic part. It admits that clouds, gusts and things nobody tracked will push the real temperature up or down, and it says by roughly how much.

*Where the picture stops working:* forecast spreads are symmetric. Ecological scatter often isn't: counts can't go below zero, so their scatter is lopsided. Picking the right *shape* matters.

## Words you'll need
- **Stochastic:** involving chance.
- **Probability distribution:** a rule for how likely each value is ([[Probability Distribution]]).
- **y ~ Normal(μ, σ):** "y is drawn from a bell curve centred on μ with spread σ".
- **σ ("sigma"):** the typical size of the scatter.
- **Likelihood:** how probable the data are under the model, computed from this part ([[Likelihood]]).

## A tiny example
With μ = 9 at rainfall 5 and y ~ Normal(9, σ = 2):
- About 95% of plots fall within ±2σ: **5 to 13**.
- A plot of 14 is 2.5σ above the mean: it happens about **1 time in 160**. Unusual but possible.
- A plot of 25 is 8σ above: essentially never. Either a recording error or a sign the model is missing something.

Without the stochastic part, 14 and 25 would just be "above the line". With it, you know how surprised to be.

## Start from zero
1. **The deterministic rule leaves things out,** so data scatter around it ([[Hobbs and Hooten 2015 Ch1]], p. 6).
2. **You can't model everything left out, but you can describe its combined effect** as random scatter. *Why it often looks bell-shaped:* many small, unrelated pushes added together tend to produce a bell curve.
3. **σ measures that combined effect.** Big σ means the rule explains little.
4. **This part produces the likelihood,** the engine of estimation, comparison and uncertainty ([[Likelihood]]).
5. **Its shape must match the data type.** Normal for unbounded continuous data, Poisson for counts, Bernoulli for yes/no ([[Why the response type decides the distribution]]).

## See it
![[Deterministic and stochastic components.png|700]]
*What to look at:* the purple curves are the stochastic component, centred on the line.

## Why it is this way
Our models are always incomplete. The stochastic part is the honest bookkeeping for what they leave out, and without it you can't say whether a data point is surprising, how well a model fits, or how sure you are of any estimate.

## In R
```r
set.seed(6)
mu <- 9
y  <- rnorm(1000, mean = mu, sd = 2)   # the stochastic part generating plots
mean(y > 13)                           # about 0.025: beyond +2 sigma
1 - pnorm(14, mean = 9, sd = 2)        # 0.0062: chance of a plot at 14 or more
```

## In the course
Hobbs and Hooten's Ch3 is the probability that links deterministic models to data ([[Hobbs and Hooten 2015 Ch3]]).

## Common confusions
- **"The error term is a nuisance."** It carries information about measurement and about what the rule leaves out.
- **"Normal errors are the default."** Only for continuous, unbounded responses with roughly constant spread.

## Explain it back
- Use "give or take 2" to explain the stochastic component.
- How surprising is a plot of 14 when μ = 9 and σ = 2?
- Why does the shape of the distribution have to match the data type?

*Pass test:* you can name the stochastic distribution of any model you fit and say why it fits the data type.

## Connections
- **Builds on:** [[Deterministic Component]], [[Standard Deviation]]
- **Leads to:** [[Probability Distribution]], [[Likelihood]], [[Process Variation]], [[Observation Error]]
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
