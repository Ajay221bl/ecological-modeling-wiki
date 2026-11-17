---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Frequentist statistics"
  - "Classical statistics"
  - "Frequentist approach"
  - "Frequentism"
status: seedling
---

# Frequentist Inference

**In one line:** frequentist inference treats parameters as fixed unknown numbers and judges methods by how they would perform over many hypothetical repetitions of the study.

> [!info] Before this, it helps to know
> [[Sampling Distribution]] (its central object) · [[Confidence Interval]] and [[P-value|p-value]] (its tools) · [[Maximum Likelihood Estimation]] (its usual estimator)

## The everyday picture
Quality control for a procedure. A factory doesn't promise that this particular bolt is good. It promises that the machine produces good bolts 95% of the time. Frequentist statistics certifies the machine (the method), not the individual result.

## Start from zero
1. **A parameter has one true value.** It isn't random, so it has no probability distribution.
2. **The data are random.** A different sample would give a different estimate.
3. **Probability means long-run frequency** over imagined repetitions of the sampling.
4. **Estimates come with standard errors,** describing how they would vary across repetitions.
5. **Confidence intervals** are built so that 95% of such intervals would cover the truth.
6. **P-values** ask how often data this extreme would arise if a null hypothesis were true.
7. **No prior is used.**
8. **Most classical tools are frequentist:** t-tests, ANOVA, `lm`, `glm`, `lmer`.
9. **What it can't say:** "the probability that the parameter is in this interval is 95%". The interval either contains it or doesn't.

## In R
```r
set.seed(1); cover <- replicate(2000, { y <- rnorm(20, 10, 3); ci <- t.test(y)$conf.int; ci[1] < 10 & ci[2] > 10 }); mean(cover)   # the procedure covers the truth about 95% of the time
```

## In the course
The first half of the course ([[Course Website]]). Contrasted with Bayes in [[Hobbs and Hooten 2015 Ch5]] and [[Johnson and Omland 2004]].

## Common confusions
- **"Frequentist methods are assumption-free and objective."** They rest on a likelihood and a sampling model, both choices.
- **"A 95% confidence interval has a 95% chance of containing the parameter."** That is the Bayesian reading. The frequentist guarantee is about the procedure.

## Explain it back
- What is random in frequentist inference, and what is fixed?

*Pass test:* you can state what a frequentist probability refers to.

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
