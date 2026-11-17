---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Frequentist inference treats parameters as fixed unknown numbers and judges methods by how they would perform over many hypothetical repetitions of the study."
aliases:
  - "Frequentist statistics"
  - "Classical statistics"
  - "Frequentist approach"
  - "Frequentism"
status: seedling
---

# Frequentist Inference

A bolt factory doesn't promise that this particular bolt is good. It promises that the machine makes good bolts 95% of the time. **Frequentist inference** certifies the method in the same way, not the individual result. It treats a parameter as one fixed unknown number, with no probability distribution, and treats the data as random, since a different sample would give a different estimate ([[Sampling Distribution]]). Probability means long-run frequency over imagined repetitions of the study, and no prior is used.

Its tools are built on that idea. A standard error says how much an estimate would vary across repetitions; a 95% [[Confidence Interval]] is built so that 95% of such intervals would cover the truth; a [[P-value|p-value]] asks how often data this extreme would arise if a null hypothesis were true ([[Null Hypothesis Significance Testing]]). Most classical tools are frequentist: t-tests, ANOVA, `lm`, `glm` and `lmer`, usually with [[Maximum Likelihood Estimation]]. The code below repeats a study 2,000 times and finds that the t-test interval covers the true mean in about 95% of them (0.946): the guarantee is about the procedure.

What it can't say is "the probability that the parameter is in this interval is 95%"; any one interval either contains it or doesn't, and that probability statement is the Bayesian reading ([[Bayesian Inference]]). Frequentist methods are not assumption-free either, since they rest on a likelihood and a sampling model, both choices. It covers the first half of the course and is contrasted with Bayes in [[Hobbs and Hooten 2015 Ch5]] and [[Johnson and Omland 2004]] ([[Course Website]]).

```r
set.seed(1); cover <- replicate(2000, { y <- rnorm(20, 10, 3); ci <- t.test(y)$conf.int; ci[1] < 10 & ci[2] > 10 }); mean(cover)   # the procedure covers the truth about 95% of the time
```

## Connections
- **Builds on:** [[Sampling Distribution]], [[Confidence Interval]]
- **Leads to:** [[Bayesian Inference]], [[Null Hypothesis Significance Testing]], [[P-value|p-value]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Frequentist vs Bayesian Inference]]

## Flashcards

In frequentist inference, what is random and what is fixed?
??
The data are random. Parameters are fixed unknown constants.
++++

What does probability mean to a frequentist?
??
The long-run relative frequency over repeated sampling.
++++
