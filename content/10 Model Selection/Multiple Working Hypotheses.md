---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "The method of multiple working hypotheses, from Chamberlin (1890), is to hold several plausible explanations in mind at once and weigh them against each other, rather than adopting one favourite."
aliases:
  - "Method of multiple working hypotheses"
  - "Chamberlin's multiple working hypotheses"
status: seedling
---

# Multiple Working Hypotheses

A good detective keeps several suspects on the board until the evidence rules them out; a bad one picks the butler on day one and reads every clue as confirmation. The **method of multiple working hypotheses**, from Chamberlin (1890), is to hold several plausible explanations in mind at once and weigh them against each other rather than adopting one favourite ([[Hypothesis]]). One favoured hypothesis invites bias, since you look for support and explain away the rest, which Chamberlin called "parental affection" for a theory. In ecology phenomena often have several causes acting together, so more than one hypothesis may be partly right.

The modelling translation is that each hypothesis becomes a model in the [[Candidate Model Set]], and information criteria say how strongly the data support each. The code below writes three such hypotheses for bird density: food limits density (birds ~ shrub), predation limits density (birds ~ tree), and both act (birds ~ tree + shrub).

[[Anderson and Burnham 2002]] and [[Johnson and Omland 2004]] present information-theoretic [[Model Selection]] as this method made quantitative, and it is related to [[Strong Inference]] ([[Course Website]]). Multiple hypotheses does not mean trying every combination of variables, which is [[Data Dredging]]: each hypothesis should be a scientific idea, not a column of the data.

```r
d <- data.frame(H1 = "food limits density: birds ~ shrub", H2 = "predation limits density: birds ~ tree", H3 = "both act: birds ~ tree + shrub"); t(d)
```

## Connections
- **Builds on:** [[Hypothesis]], [[Strong Inference]]
- **Leads to:** [[Candidate Model Set]], [[Model Selection]], [[Data Dredging]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is the method of multiple working hypotheses?
??
Considering several plausible explanations simultaneously and evaluating the evidence for each (Chamberlin 1890).
++++
