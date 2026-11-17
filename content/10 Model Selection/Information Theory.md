---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Information-theoretic approach"
  - "I-T approach"
  - "Information theoretic model selection"
status: seedling
---

# Information Theory

**In one line:** the information-theoretic approach to model selection ranks models by how much information is lost when each is used to approximate the unknown process that generated the data.

> [!info] Before this, it helps to know
> [[Kullback-Leibler Information]] (the measure of loss) · [[Likelihood]] (how it is estimated) · [[Multiple Working Hypotheses]] (the philosophy it serves)

## The everyday picture
Photocopies of a painting. Every copy loses some detail. You can't see the original, but you can still tell which copy lost the least, by how well each one matches the bits of the original you have glimpsed (the data).

## Start from zero
1. **Truth (full reality) is unknown and infinitely complex.**
2. **Every model is an approximation.**
3. **Kullback-Leibler information measures the distance** from truth to a model.
4. **We can't compute it, because truth is unknown.** But differences in it between models can be estimated from the data.
5. **Akaike (1973) showed** that the maximised log-likelihood, corrected for the number of parameters, estimates this relative distance. That is AIC.
6. **Framework, after Burnham and Anderson:** build a set of a priori models, compute AIC for each, rank them, compute weights, and base inference on the whole set.
7. **No null hypothesis and no p-values.** Evidence is relative among the models considered.

## In the course
[[Anderson and Burnham 2002]], [[Johnson and Omland 2004]]. Model selection lecture ([[Course Website]]).

## Common confusions
- **"Information theory here is the same as computer science's information theory."** It borrows Kullback-Leibler information from it, but the use is statistical.

## Explain it back
- What quantity is being estimated, in relative terms?

*Pass test:* you can outline the information-theoretic workflow.

## Connections
- **Builds on:** [[Kullback-Leibler Information]], [[Likelihood]]
- **Leads to:** [[AIC]], [[Akaike Weight]], [[Candidate Model Set]], [[Full Reality]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]], molecular note [[Null Hypothesis Testing vs Model Selection]]

## Flashcards

What does the information-theoretic approach rank models by?
??
Estimated relative information lost (Kullback-Leibler distance) when each model approximates the truth.
++++
