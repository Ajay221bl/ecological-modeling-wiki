---
type: atomic
tags:
  - r-reproducibility
  - r-functions
  - model-selection
  - flashcards/eco/r
description: "model.sel(), from the MuMIn package, takes several fitted models and returns one table ranking them from best to worst by an AIC score, showing how far behind the leader each one is."
aliases:
  - "model.sel()"
  - "model.sel"
  - "MuMIn"
status: seedling
---

# MuMIn model.sel()

You have several explanations for why species counts differ: weather only, the property, the habitat around the point at one of three scales, or property plus habitat, each written as a model in a [[Candidate Model Set]] (the list of models chosen in advance from hypotheses). Now you need a fair contest, one that rewards fit (how well a model matches the data) but charges for complexity, because a model with more knobs can always fit a bit better, even to random noise ([[Overfitting]], [[Parsimony]]). [[AIC]] is a score that does exactly this: lower is better, and each extra estimated [[Parameter]] adds a penalty of 2. **`model.sel()`**, from the MuMIn package, takes a list of fitted models, computes the score for each and returns one table sorted from best to worst, with two extra columns: [[Delta AIC]], how far each model sits behind the leader, and the [[Akaike Weight]], each model's share of support within the set (the weights add to 1).

Read a small invented table. M2a Habitat has AIC 5000, so delta 0, the best in this set; M3 Property + Habitat has 5001.5, delta 1.5, about as good (within roughly 2); M0 Null has 5025, delta 25, clearly worse. Only the differences mean anything: a lone AIC of 5000 tells you nothing. By default `model.sel()` ranks by [[AICc]], AIC with a small-sample correction; the project asks for plain AIC with `rank = "AIC"`, and with 1,130 point-visits and at most 11 parameters the two are almost identical. The project code is:

```r
# norun: needs the fitted models
selRich <- model.sel(fitsRich, rank = "AIC")
selRich
write_csv(selRich %>% as.data.frame() %>% rownames_to_column("Model"),
          here(ResultsPath, "ModelSelection_Richness.csv"))
topRich <- fitsRich[[rownames(selRich)[1]]]
```

The first line ranks the six [[glmer()]] fits for all-species [[Species Richness|richness]] (M0, M1, M2a, M2b, M2c, M3) and saves the table; typing `selRich` prints it; `as.data.frame()` and `rownames_to_column("Model")` turn the model names (stored as row names) into a real column so they survive in the CSV written to the Results folder ([[here()]]); and the last line pulls out whichever model ranked first, so the [[Residual Diagnostics|diagnostics]] always use the winner with no name typed by hand. Each row of the table is a model, and its columns show the terms it contains, then df ([[Number of Parameters|number of parameters]]), logLik ([[Log-likelihood]]), AIC, delta and weight. Always check that the [[Null Model]] is clearly worse; if not, the [[Predictor Variable|predictors]] add little. The models in one table must share the same response and exactly the same rows (here 1,130 visits at 376 points, [[Complete-Case Analysis]]), or their AIC values cannot be compared, so the project makes one table per response. Result: M3 (property plus habitat) ranked first for both responses with weight 1.00; for all species the next model, M1, was 42.1 AIC units behind, and for [[Focal Species|focal species]] the next, M2a, was 22.5 behind ([[Preliminary Results]]). Three confusions: the top model is not "true", only the best of the ones offered; a lower AIC is not a significant effect, because AIC ranks models and is not a [[P-value]] ([[Why compare models with AIC rather than only p-values]]); and the candidate set should come from hypotheses, not from trying everything ([[Data Dredging]], [[Anderson and Burnham 2002]]).

## Connections
- **Builds on:** [[Candidate Model Set]], [[Overfitting]], [[Parsimony]], [[AIC]], [[Parameter]], [[glmer()]], [[Predictor Variable]]
- **Leads to:** [[Delta AIC]], [[Akaike Weight]], [[AICc]], [[Log-likelihood]], [[Null Model]], [[Complete-Case Analysis]], [[Data Dredging]], [[Species Richness]], [[Residual Diagnostics]], [[Number of Parameters]], [[Focal Species]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]], [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]
- **Go deeper:** [[Why compare models with AIC rather than only p-values]], [[Preliminary Results]], [[Anderson and Burnham 2002]], [[Johnson and Omland 2004]]

## Flashcards

For all species, M3 has delta AIC = 0, M1 Property is 42 behind, the best habitat-only model is 62 behind, and M0 is 140 behind. What does that tell you, and what does it not tell you?
??
Property and habitat each explain part of richness, and neither replaces the other, so both H1 and H2 get support. It does not tell you what about the properties matters (year, dates and crew are all tangled with property), nor how big each effect is; for that, read the coefficients.
++++

Why must all models in one model.sel() table use exactly the same rows and response?::AIC values are only comparable when computed from the same data; different rows or responses make the differences meaningless.
