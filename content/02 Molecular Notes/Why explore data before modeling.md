---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - exploration
aliases:
  - "Data exploration first"
  - "Why look before you fit"
status: seedling
---

# Why explore data before modeling

> [!summary] In plain words
> exploring data before fitting catches outliers, unequal variance, excess zeros, collinear predictors, odd relationships and dependence while they can still shape the choice of model, instead of discovering them later as broken assumptions or wrong conclusions.

## The question
Why spend time plotting before I fit anything?

## Built from
- [[Data Exploration Protocol]] and [[Data Exploration]].
- [[Outlier]], [[Collinearity]], [[Zero Inflation]], [[Independence of Observations]].
- [[Model Validation]].

## See it
mermaid:
flowchart LR
  A[Raw data] --> B[Outliers Y and X]
  B --> C[Homogeneity and normality of Y]
  C --> D[Zeros in Y]
  D --> E[Collinearity among X]
  E --> F[Relationships Y vs X]
  F --> G[Interactions]
  G --> H[Independence]
  H --> I[Choose and fit model]
  I --> J[Validate residuals]
*What to look at:* the protocol comes before fitting; validation comes after. Both feed back into the model choice.

## The reasoning, step by step
1. **Zuur et al. (2010) list eight steps:** outliers in Y and X; homogeneity of Y; normality of Y; zero trouble in Y; collinearity among X; relationships between Y and X; interactions; independence of Y.
2. **Each step points to a modeling decision:** a family, a transformation of X, a variance structure, which predictors to keep, whether to add random or correlation terms.
3. **Statistical tests assume a model;** exploration checks that the model fits the data you actually have.
4. **Exploration is not data dredging:** you look at distributions and predictor relationships, not at which predictors make the response "significant".
5. **Afterwards, validate the fitted model** with residuals; exploration and validation are two halves of the same job.

## So in practice
Make a short exploration script for every new data set: dot plots, pairplots with correlations, VIFs, a table of zeros, and plots against time and space.

## What would go wrong otherwise
Fitting a full model straight away and only noticing a recording error (a 300 kg songbird) when a reviewer points out a wild prediction.

## Explain it back
- Name four things the protocol checks.

*Pass test:* you can run the protocol on a new data set.

## Connections
- **Related:** [[Which assumption violation leads to which model]], [[Outlier, Leverage and Influence]], [[Why collinearity inflates standard errors]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Data Exploration]]

## Flashcards

Name the eight steps of Zuur et al.'s data exploration protocol.
??
Outliers; homogeneity; normality; zeros; collinearity; relationships; interactions; independence.
++++

How is exploration different from data dredging?
??
Exploration checks data properties and predictor structure; dredging searches for significant response relationships.
++++
