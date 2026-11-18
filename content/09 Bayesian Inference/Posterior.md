---
type: atomic
tags:
  - bayesian-inference
  - flashcards
aliases:
  - "Posterior Distribution"
  - "posteriors"
status: seedling
---

# Posterior
**In one line:** Your updated belief about an unknown quantity after combining what you believed before (the prior) with what the data say.

> [!info] Before this, it helps to know
> [[Prior]] (the starting belief) · [[Bayes' Theorem]] (the update rule) · [[Probability]] (beliefs as numbers)

## Start from zero
Before visiting a new site, you guessed its average richness was "around 5 or 6". You then visit three times and count 5, 7 and 6 species. Now what do you believe?

Not one single number. You believe 6 is most plausible, 5 and 7 are quite plausible, 4 and 8 less so. That whole spread of belief, after seeing data, is the **posterior** ("post" = after).

## Why it exists
A typical (frequentist) analysis returns one best number per unknown plus a [[Standard Error]]. A Bayesian analysis returns a full [[Probability Distribution]] for every unknown. That's more honest about uncertainty and lets you answer direct questions like "what's the probability this site's average is above 6?"

Hobbs and Hooten build it in two steps: multiply [[Likelihood]] by [[Prior]], then divide by the total so it adds up to 1 ([[Hobbs and Hooten 2015 Ch5]], pp. 84-85, fig. 5.1.1). With a vague prior, the posterior has the same shape as the likelihood; the difference is that the posterior's area is 1 (p. 86, fig. 5.2.1).

## A tiny example
Visits: 5, 7, 6 species. Flat prior (each candidate average equally believed, 20%).

| True average | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|
| Likelihood (relative: how well it explains 5, 7, 6) | 0.27 | 0.75 | 1.00 | 0.80 | 0.44 |
| × prior (all equal) then rescale to 100% | | | | | |
| **Posterior** | 8% | 23% | 31% | 24% | 13% |

(A simplification: a real average can be any value, like 6.3. Five whole-number candidates keep the table small; the full version is a smooth curve.)

Things you can now say:
- Most plausible average: 6.
- Probability the average is 6 or more: 31 + 24 + 13 = **68%**.
- Probability it is 4: only 8%.

## In my project
In real models there are too many unknowns to list in a table. Instead, [[MCMC]] produces thousands of random draws from the posterior, and we summarize them ([[Hobbs and Hooten 2015 Ch8]], pp. 190-192):
- the mean or median of the draws as a best guess,
- their standard deviation for uncertainty ([[Spread and Variability]]),
- their quantiles as a [[Credible Interval]].

My Poisson GLMM coefficients are on the log scale ([[Interpreting Poisson Coefficients]], [[Logarithms and Exponents]]). Right now the analysis script's `coefTable()` function turns each estimate into a 95% interval using the standard error, then exponentiates:

```r
    mutate(CI_0.025 = Estimate - (`Std. Error` * 1.96),
           CI_0.975 = Estimate + (`Std. Error` * 1.96),
           RateRatio = exp(Estimate),
```
(GrasslandBirdRichness_Analysis.R)

In a Bayesian version, I'd get posterior draws for, say, the CR coefficient. Taking exp() of each draw gives the posterior of the rate ratio "mean richness at CR relative to the reference site" directly. This trick, called **equivariance** (p. 194), works for any calculation: do it on every draw. I could also compute the probability that CR's mean exceeds HB's. But any site difference is still tangled with year ([[Why site and year cannot be separated]]); a posterior does not fix [[Confounding]].

## Common confusions
- **"The posterior is a single best estimate."** It is a whole distribution; a best estimate is one summary of it.
- **"Posterior = likelihood."** Only roughly, and only with a vague prior; the posterior also includes the prior and adds to 1.
- **"The posterior is the truth."** It is belief given this model, this prior and these data. A wrong model gives a confident wrong posterior.

## Connections
- **Builds on:** [[Bayes' Theorem]], [[Prior]], [[Likelihood]], [[Probability]]
- **Leads to:** [[Credible Interval]], [[MCMC]], [[Frequentist vs Bayesian]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch5]] (pp. 84-86), [[Hobbs and Hooten 2015 Ch8]] (summarizing draws, pp. 190-194)

> [!question]- Check yourself
> You have 10,000 MCMC draws of a log-scale Site coefficient. How do you get the posterior of the rate ratio?
> ?
> Apply exp() to every draw. The transformed draws are samples from the posterior of the rate ratio (equivariance), so you can summarize them with a mean and quantiles just like any other parameter.
