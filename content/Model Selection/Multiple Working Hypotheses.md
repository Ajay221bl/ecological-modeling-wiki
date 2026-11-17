---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Method of multiple working hypotheses"
  - "Chamberlin's multiple working hypotheses"
status: seedling
---

# Multiple Working Hypotheses

**In one line:** the method of multiple working hypotheses, from Chamberlin (1890), is to hold several plausible explanations in mind at once and weigh them against each other, rather than adopting one favourite.

> [!info] Before this, it helps to know
> [[Hypothesis]] (what is held) · [[Strong Inference]] (a related method)

## The everyday picture
A good detective keeps several suspects on the board until the evidence rules them out. A bad one picks the butler on day one and reads every clue as confirmation.

## Start from zero
1. **One favoured hypothesis invites bias:** you look for support and explain away the rest. Chamberlin called this "parental affection" for a theory.
2. **Several hypotheses at once keep you honest.**
3. **In ecology, phenomena often have several causes acting together,** so more than one hypothesis may be partly right.
4. **The modeling translation:** each hypothesis becomes a model in the candidate set. Information criteria then say how strongly the data support each one.
5. **Anderson and Burnham and Johnson and Omland** present information-theoretic model selection as this method made quantitative.

## In R
```r
d <- data.frame(H1 = "food limits density: birds ~ shrub", H2 = "predation limits density: birds ~ tree", H3 = "both act: birds ~ tree + shrub"); t(d)
```

## In the course
[[Johnson and Omland 2004]], [[Anderson and Burnham 2002]]. Model selection lecture ([[Course Website]]).

## Common confusions
- **"Multiple hypotheses means trying every combination of variables."** Each hypothesis should be a scientific idea, not a column of the data.

## Explain it back
- What danger does this method guard against?

*Pass test:* you can turn three hypotheses into three models.

## Connections
- **Builds on:** [[Hypothesis]], [[Strong Inference]]
- **Leads to:** [[Candidate Model Set]], [[Model Selection]], [[Data Dredging]]
- **Part of:** [[MOC - Model Selection]]

## Flashcards

What is the method of multiple working hypotheses?
??
Considering several plausible explanations simultaneously and evaluating the evidence for each (Chamberlin 1890).
++++
