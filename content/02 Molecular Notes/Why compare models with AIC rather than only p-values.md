---
type: molecular
tags:
  - molecular
  - model-selection
aliases:
  - "Why AIC"
  - "AIC vs p-values"
status: seedling
---

# Why compare models with AIC rather than only p-values
> [!summary] In plain words
> A p-value asks one yes/no question: could this effect be zero? My question has several competing answers (property, local habitat at one of three scales, both, or neither). So I write each answer as a model and let AIC score them all on the same scale, rewarding good fit but charging for extra complexity. The best-scoring model is the best-supported explanation in my set.

## The question
I could fit one big model and look at which coefficients have p < 0.05. Why fit a set of candidate models and rank them with AIC instead?

## Built from
- [[Hypothesis]]: a claim the data could support or contradict.
- [[P-value]]: what a significance test actually measures.
- [[Candidate Model Set]]: a small list of models, each standing for one hypothesis.
- [[AIC]]: the score used to rank them.
- [[Delta AIC and Akaike Weights]]: how to read the ranking as strength of evidence.
- [[Parsimony]]: the balance between fit and complexity that AIC enforces.
- [[Null Model]]: the "weather and point-to-point variation only" baseline.

## The reasoning, step by step
1. **A p-value answers a narrow question.** It asks: if there were truly no effect, how surprising would data like mine be? It pits one model against one "no effect" version ([[Probability]] of the data under the null).
2. **My question has several answers.** Richness could depend on the property, on the habitat around the point (measured at one of three scales), on both, or on neither beyond weather. Science is "better served by multiple working hypotheses" than by a single null and alternative ([[Anderson and Burnham 2002]], p. 913).
3. **Each answer can be written as a model.** Then the question becomes "which model best explains the data?"
4. **Better fit alone is not enough.** Adding predictors always improves fit a little, even if they are pure noise ([[Overfitting]]). So the score must charge for complexity.
5. **AIC does exactly that.** It rewards fit (through the [[Likelihood]]) and adds a penalty of 2 for every estimated parameter. Lower is better. This is the trade-off between too simple (bias) and too complex (variance) ([[Powell and Gale 2015 Ch4]], p. 43).
6. **A tiny example.** Model A has AIC 5000 with 8 parameters. Model B adds 2 parameters; its fit improves enough to lower the fit part by 3 units, but the penalty rises by 4 (2 x 2). B's AIC is 5001, so A wins: the extra parameters did not earn their keep. (Invented numbers.)
7. **Only differences matter.** "A single AICc value is useless" on its own (the same holds for plain AIC) ([[Anderson and Burnham 2002]], p. 916); AIC gives "relative, not absolute" measures ([[Tredennick et al. 2021]], p. 5). So we read differences (ΔAIC) and Akaike weights, the relative support for each model within the set ([[Powell and Gale 2015 Ch4]], p. 49).
8. **Choose the set before looking.** Running every possible model is a sign of "an unthinking approach" ([[Anderson and Burnham 2002]], p. 913). See [[Data Dredging]].
9. **Do not mix systems.** Once models are ranked with AIC, adding p-value tests between them has no theoretical basis ([[Anderson and Burnham 2002]], p. 913).
10. **AIC does not replace effect sizes.** After ranking, report the top model's estimates and [[Confidence Interval|confidence intervals]] so readers see how big the property and habitat effects are.

## So in my project
The final proposal (Oct 12) defined six a priori (decided in advance) models, each with `Wind + Sky + (1|PtNum)`: M0 (weather and point only), M1 (Property, for H1), M2a, M2b and M2c (habitat at 0.81, 7.29 or 65.61 ha, for H2) and M3 (Property + the best habitat model). The full table and reasons live in [[Analysis Plan]]; what each result would mean is in [[Hypotheses]]. A p-value on a single coefficient could not say whether property or habitat explains richness *better*; AIC compares the two explanations directly.

Since Oct 13 the analysis script fits exactly these six for each response and ranks them with `model.sel(fitsRich, rank = "AIC")` ([[MuMIn model.sel()]]). The `rank = "AIC"` means plain **AIC**, not AICc (with 1,130 point-visits and at most 11 parameters the two differ by about 0.2 anyway). Models within 2 units count as similarly supported. All of them are fitted to the same 376 complete-case points ([[Complete-Case Analysis]]).

What the ranking said (Oct 13; [[Preliminary Results]]):
- **M3 won for both responses, with Akaike weight 1.00.** The runner-up was 42.1 AIC units behind for all species and 22.5 for focal species.
- **For all species,** property alone (M1) beat every habitat-only model. **For focal species,** every habitat-only model beat property alone.
- So both H1 and H2 get support: neither explanation replaces the other. That "both, with different weight for different birds" answer is exactly the kind of comparison p-values on single terms could not give.

History: the Sep 10 set (Global, Additive, Site, Weather, Null) was replaced on Oct 12 and is gone from the code since Oct 13 ([[R Scripts Walkthrough]]).

## What would go wrong otherwise
- Looking only at p-values in one big model with property and habitat together tests each term against zero, not hypotheses against each other; and because habitat differs among properties, the two would share credit unpredictably ([[Collinearity]]).
- Testing many terms one at a time inflates false positives.
- Fitting dozens of models and keeping the best is a fishing expedition; the "winner" may not hold up in new data.

## Connections
- **Related:** [[Model Purpose - Exploration Inference Prediction]], [[Nested Models]], [[Johnson and Omland 2004]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]
