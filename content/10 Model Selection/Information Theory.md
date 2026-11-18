---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "The information-theoretic approach to model selection ranks models by how much information is lost when each is used to approximate the unknown process that generated the data."
aliases:
  - "Information-theoretic approach"
  - "I-T approach"
  - "Information theoretic model selection"
status: seedling
---

# Information Theory

Every photocopy of a painting loses some detail. You can't see the original, but you can still tell which copy lost the least by how well each matches the bits of the original you have glimpsed. The **information-theoretic approach** ranks models the same way, by how much information is lost when each is used to approximate the unknown process that generated the data ([[Full Reality]]). Truth is unknown and infinitely complex, so every model is an approximation, and [[Kullback-Leibler Information]] measures the distance from truth to a model. It can't be computed, because truth is unknown, but differences in it between models can be estimated from the data ([[Likelihood]]).

Akaike (1973) showed that the maximised [[Log-likelihood|log-likelihood]], corrected for the [[Number of Parameters|number of parameters]], estimates this relative distance; that is [[AIC]]. The framework, after Burnham and Anderson, is to build a set of models before seeing the data ([[Candidate Model Set]]), compute AIC for each, rank them, compute an [[Akaike Weight]] for each, and base inference on the whole set. There is no [[Null Hypothesis|null hypothesis]] and no p-value; evidence is relative among the models considered.

It is the philosophy behind [[Multiple Working Hypotheses]] made quantitative ([[Anderson and Burnham 2002]], [[Johnson and Omland 2004]], [[Course Website]]). It borrows Kullback-Leibler information from the information theory of computer science, but its use here is statistical.

## Connections
- **Builds on:** [[Kullback-Leibler Information]], [[Likelihood]], [[Log-likelihood]], [[Number of Parameters]], [[Null Hypothesis]]
- **Leads to:** [[AIC]], [[Akaike Weight]], [[Candidate Model Set]], [[Full Reality]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]], molecular note [[Null Hypothesis Testing vs Model Selection]]

## Flashcards

What does the information-theoretic approach rank models by?
??
Estimated relative information lost (Kullback-Leibler distance) when each model approximates the truth.
++++
