---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - modeling
aliases:
  - "Anatomy of a statistical model"
  - "Why models need an error term"
status: seedling
---

# Why every statistical model has a deterministic and a stochastic part

> [!summary] In plain words
> The deterministic part is your idea about how nature works, written as a function that predicts the average. But nature never matches the average exactly, because your function leaves things out. The stochastic part, a probability distribution, describes that leftover scatter. You need it to say how probable your data are under any set of parameters, which is how parameters get estimated, compared and given uncertainty.

## The everyday picture
A sat-nav says "arrive at 9:40". That's its rule-based best guess, the deterministic part. But a good sat-nav also knows that traffic, lights and roadworks it can't see will push you early or late, so it might say "most days between 9:35 and 9:50". That spread is the stochastic part. If you arrive at 9:42 nobody is surprised; at 11:00, something the sat-nav didn't know about has happened. Without the spread, the sat-nav couldn't tell those two days apart.

*Where the picture stops working:* the sat-nav's spread comes from years of other drivers. A statistical model has to learn its spread from your own, usually small, dataset.

## The question
Why can't a model just be an equation like biomass = 3 + 1.2 × rain? Why does it need a probability distribution as well?

## Built from
- [[Functions in Maths]]: the deterministic part is a function μ = g(θ, x)
- [[Mean]]: the function predicts the expected value, not each observation
- [[Deterministic and Stochastic Components]]: the two halves named
- [[Probability Distribution]]: the language of the stochastic half
- [[Likelihood]]: how probable the data are under given parameters, which needs the distribution
- [[Process vs Observation Error]]: where the scatter comes from
- [[Continuous vs Discrete Data]]: the data type limits which distributions make sense

## See it
![[Deterministic and stochastic components.png|700]]
*What to look at:* change σ and the purple curves get wider or narrower. Change the distribution and their *shape* changes. Either way, the line stays the same, but the conclusions don't.

## The reasoning, step by step
1. **A model starts as an idea about a process,** written as a deterministic function ([[Hobbs and Hooten 2015 Ch2]], p. 17).
2. **The function is a simplification, so it omits influences** (grazing, soil, observer, luck). Real observations scatter around its predictions ([[Hobbs and Hooten 2015 Ch1]], p. 6).
3. **You can't list everything you omitted, but you can describe its combined effect as random variation,** with a probability distribution and a variance parameter σ² that "subsumes all the unmodeled influences" ([[Process vs Observation Error]]).
4. **With a distribution, you can compute the probability of the observed data for any parameter values.** That's the [[Likelihood]].
5. **The likelihood is the engine of estimation.** Maximum likelihood picks the parameters that make the data most probable ([[Maximum Likelihood Estimation]]). Bayesian inference combines the likelihood with a prior ([[Bayes' Theorem]]). AIC is built from the maximized likelihood ([[AIC]]). Without a stochastic part, none of these exist.
6. **The shape of the distribution matters.** A Normal allows negative values and constant spread, and a Poisson allows only counts with variance equal to the mean. Choose wrongly and the line may be fine but the standard errors, p-values and model rankings are wrong ([[Why the response type decides the distribution]]).
**A worked example in numbers.** Biomass at rainfall 5: the line says μ = 3 + 1.2 × 5 = 9. Three plots there measured 8, 10 and 14.
- With *only* the line, all you can say is "the plots missed by −1, +1 and +5". Is +5 a problem? The line can't say.
- Add the stochastic part, y ~ Normal(9, σ = 2). Now +5 is 2.5σ above the mean, which happens only about 1 time in 160 by chance. That's a number you can act on.
- The likelihood multiplies how probable each plot is under the model. Change β₁ from 1.2 to 1.6, so μ = 11, and the three plots become more probable as a set (the 14 is now closer) but the 8 less so. Trying many values of β₀, β₁ and σ this way and keeping the most probable set is exactly what `lm()` does.

7. **So the two parts do different jobs.** The deterministic part carries your hypothesis, and the stochastic part carries your honesty about what the hypothesis doesn't explain.

## So in practice
For every model, write both halves explicitly before coding:
- *Deterministic:* μᵢ = β₀ + β₁xᵢ (or log(μᵢ) = ..., or logit(pᵢ) = ...)
- *Stochastic:* yᵢ ~ Normal(μᵢ, σ), or Poisson(μᵢ), or Bernoulli(pᵢ)

Then check the stochastic half against the data with residual plots, overdispersion tests or posterior predictive checks ([[DHARMa Simulated Residuals|Residual Diagnostics with DHARMa]], [[Posterior Predictive Check]]).

## What would go wrong otherwise
- With no stochastic part, you can't estimate parameters from noisy data, can't compare models and can't state uncertainty.
- With the wrong stochastic part, you can get confident but wrong conclusions. Overdispersed counts fitted as Poisson give standard errors that are too small and "significant" effects that aren't real ([[Overdispersion]]).

## Explain it back
- Use a sat-nav arrival time to explain why a model needs both a best guess and a spread.
- Why can't you estimate parameters, compare models or give standard errors without a stochastic part?
- What goes wrong if the line is right but the distribution is wrong?

*Pass test:* you can write both halves of a model for any dataset before opening R.

## Connections
- **Related:** [[Why model at all]], [[Why the response type decides the distribution]], [[Why GLMs need a link function]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Modeling Foundations]], [[MOC - Linear Models and GLMs]]

## Flashcards

Why does a statistical model need a stochastic part, not just an equation?
??
The equation omits influences, so data scatter around it; a distribution describes that scatter, which is needed to compute the likelihood and hence estimates, comparisons and uncertainty.
![[Deterministic and stochastic components.png]]
++++

What job does each half of a model do?
??
The deterministic half carries your hypothesis about the mean; the stochastic half describes everything the hypothesis doesn't explain.
++++

What goes wrong if you choose the wrong distribution but the right deterministic function?
??
The fitted line may be fine, but standard errors, p-values and model rankings are wrong (e.g., overdispersed counts as Poisson give overconfident results).
++++
