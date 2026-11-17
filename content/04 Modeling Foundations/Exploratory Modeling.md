---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Exploration"
  - "Exploration (goal)"
  - "Hypothesis generation"
status: seedling
---

# Exploratory Modeling

**In one line:** exploratory modeling searches data for patterns in order to come up with hypotheses. Its results are ideas to test later, not findings.

> [!info] Before this, it helps to know
> [[Hypothesis]] · [[Statistical Model]]

## The everyday picture
Wandering a new city with no plan. You notice the old market district seems to have the best food. That's a real, useful idea, but it isn't a tested fact: you ate there once, on a good day. To *know*, you'd plan a fair comparison afterwards.

*Where the picture stops working:* in a city you can easily go back. In ecology a fresh dataset may take years, which is exactly why exploratory results get mislabelled as findings.

## Words you'll need
- **Exploration:** looking widely for patterns without fixed hypotheses.
- **Hypothesis generation:** turning a pattern into an idea to test.
- **Significance level (α):** the chance threshold, often 5%, used to call a result "significant".
- **False positive:** a pattern that looks real but is chance.
- **Data dredging:** searching many variables and reporting the hits as findings ([[Data Dredging]]).

## A tiny example
Screen **100** weather variables that are pure noise against a growth rate, each tested at the 5% level. On average **5** will look "significant" by chance alone. Report them as discoveries and roughly all 5 are false. Report them as "hypotheses worth testing" and you've done nothing wrong.

## Start from zero
1. **You don't yet know what matters.** So you cast a wide net over many candidate predictors.
2. **Anything goes in the search:** correlation screens, many models, plots. *Why:* the goal is not to miss anything interesting.
3. **But a wide search always catches chance patterns.** *Why:* each test has a small chance of a false positive, and many tests add up.
4. **So label results as hypotheses.** Tredennick et al.: the main pitfall of exploration is presenting spurious effects as findings ([[Tredennick et al. 2021]]).
5. **Then test them on new data,** as [[Inferential Modeling]].

## See it
![[Exploration inference prediction.png|700]]
*What to look at:* exploration feeds hypotheses into inference; crossing that line needs new data.

## Why it is this way
Science needs new ideas, and data are a great source of them. But the same data can't both suggest an idea and confirm it, because whatever chance quirk produced the pattern is still in those data.

## In R
```r
set.seed(8)
y <- rnorm(50)                              # a response with no real predictors
X <- matrix(rnorm(50 * 100), 50, 100)       # 100 noise predictors
p <- apply(X, 2, function(x) cor.test(x, y)$p.value)
sum(p < 0.05)                               # a handful of "significant" noise predictors
```

## In the course
The first of the three goals in Tredennick et al. 2021, a reading for Aug 18 ([[Tredennick et al. 2021]]).

## Common confusions
- **"Exploration is bad science."** It's essential, as long as it's labelled honestly.
- **"A low p-value from a screen is evidence."** Not after many tests; it's a lead.

## Explain it back
- Use wandering a city to explain exploratory modeling.
- Why do 100 noise variables give about 5 "significant" ones?
- What must happen before an exploratory pattern counts as a finding?

*Pass test:* you can say which of your own results are hypotheses and which are tested.

## Connections
- **Builds on:** [[Hypothesis]], [[Statistical Model]]
- **Leads to:** [[Inferential Modeling]], [[Data Dredging]], [[Predictive Modeling]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], molecular note [[Exploration, Inference and Prediction]]
- **Go deeper:** [[Tredennick et al. 2021]]

## Flashcards

What is the goal of exploratory modeling?
??
To find patterns and generate hypotheses, not to confirm them.
![[Exploration inference prediction.png]]
++++

Why are exploratory results only hypotheses?
??
A wide search always catches some chance patterns, and the same data can't both suggest and confirm an idea.
++++
