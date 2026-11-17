---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - writing
aliases:
  - "Homework approach"
  - "How to do the homework"
  - "Homework checklist"
  - "Homework workflow"
status: seedling
---

# How to Approach a Course Homework

> [!summary] In plain words
> every course homework follows the same arc (load data reproducibly, explore, choose a model from the data type and design, fit, check, compare, show uncertainty, and interpret in words), and the grade rewards the reasoning at each step, not just the code.

## The question
What steps should every homework answer go through, and what is the grader looking for?

## Built from
- [[librarian and shelf()]], [[Reproducibility]], [[R Markdown]]: a script that runs on someone else's computer.
- [[Why explore data before modeling]], [[Data Exploration Protocol]]: look first.
- [[Why the response type decides the distribution]], [[Which assumption violation leads to which model]]: choose the model.
- [[How to check an MCMC fit]], [[Which residuals to use for a GLM]]: check it.
- [[Model Ranking Tables]], [[Marginal Effects Plot]]: compare and show it.
- [[How to write up a modeling analysis]], [[Writing Methods Sections]], [[Writing Results Sections]]: explain it.

## The reasoning, step by step
1. **Make it run anywhere.** Start with the shelf() block the homework gives, read data from the repository URL, never use setwd(), and run the whole script in a fresh R session before handing it in. Each error the grader must fix costs 0.5 points ([[librarian and shelf()]]).
2. **Restate the question.** One sentence: what is the response, what are the predictors, and what would count as an answer?
3. **Explore.** Outliers, the response's distribution, balance across groups, relationships, collinearity and interactions, in Zuur's order ([[Data Exploration Protocol]]).
4. **Draw the design.** Which observations share a site, a plot, a year? That decides the random effects or whether you need them ([[Nested Experimental Design]]).
5. **Choose the distribution from the data type.** Continuous unbounded: Normal. 0/1: Bernoulli. Successes of n: binomial. Open counts: Poisson or negative binomial. Positive continuous: Gamma. Percentages: beta ([[Why the response type decides the distribution]]).
6. **Fit, then check.** Residuals for a linear model; simulated or quantile residuals for a GLM; R-hat, ESS, trace plots and a posterior predictive check for a Bayesian model.
7. **Compare models when the question is about which explanation wins**, with a candidate set written down first ([[Candidate Model Set]]).
8. **Show uncertainty.** Every estimate with an interval; every prediction plot with a band built on the right scale ([[Predictions on Link vs Response Scale]]).
9. **Interpret in words.** Say what the numbers mean for the ecology, and why you made each choice. Reasoning and support for conclusions are two of the three grading criteria.

## So in practice
Keep this checklist at the top of each homework script as comments and tick through it; most lost points come from a skipped step, not from a wrong model.

## What would go wrong otherwise
A script that fits the "right" model but crashes on the grader's machine, skips diagnostics, or reports coefficients without saying what they mean ecologically.

## Explain it back
- Which three things does the course grade a homework on?
- Why does the data type come before the choice of model?

*Pass test:* you can list the steps of a homework answer and say what each one protects against.

## Connections
- **Related:** [[Homework]], [[Problem-Solving Guide]], [[How to write up a modeling analysis]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 18 - Scientific Writing|MOC - Scientific Writing]], [[MOC 22 - Homework|MOC - Homework]]

## Flashcards

What are the three homework grading criteria?
??
Clean reproducible code, reasoning behind the choices, and support for the written conclusions.
++++

How many points does each error in a homework script cost?
??
0.5 points per error the grader has to fix, up to 1 point.
++++
