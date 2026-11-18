---
type: atomic
tags:
  - r-reproducibility
  - r-functions
  - model-selection
  - flashcards
aliases:
  - "model.sel()"
  - "model.sel"
  - "MuMIn"
status: seedling
---

# MuMIn model.sel()
**In one line:** `model.sel()`, from the **MuMIn** package, takes several fitted models and returns one table that ranks them from best to worst by an AIC score, showing how far behind the leader each one is.

> [!info] Before this, it helps to know
> [[AIC]] (the score being ranked) · [[Candidate Model Set]] (the models being compared) · [[glmer()]] (how the models were fitted)

## Start from zero
You have several explanations for why species counts differ: weather only, the property, the habitat around the point (at one of three scales), or property plus habitat. Each is written as a model. Now you need a fair contest.

A fair contest has to reward two things at once:
- **fit:** how well the model matches the data;
- **simplicity:** a model with more knobs can always fit a bit better, even to random noise ([[Overfitting]]), so extra knobs should cost something ([[Parsimony]]).

[[AIC]] is a score that does exactly this: lower is better, and each extra estimated number (parameter) adds a penalty of 2. `model.sel()` computes the score for every model and sorts them.

## Why it exists
Computing AIC for each model and sorting by hand is error-prone. `model.sel()` does it in one call and adds two helpful columns, delta and weight ([[Delta AIC and Akaike Weights]]), so the table can go straight into the Report. [[Anderson and Burnham 2002]] stress that the candidate set should be chosen in advance from hypotheses, not built by trying everything ([[Data Dredging]]).

By default `model.sel()` ranks by **AICc**, AIC with a small-sample correction. My script asks for plain AIC instead, with `rank = "AIC"`. With 1,130 point-visits and at most 11 parameters, the two are almost identical anyway.

## A tiny example
Invented scores for three models:

| Model | AIC | delta (AIC minus best) | Reading |
|---|---|---|---|
| M2a Habitat | 5000 | 0 | best in this set |
| M3 Property + Habitat | 5001.5 | 1.5 | about as good (within ~2) |
| M0 Null | 5025 | 25 | clearly worse |

Only the *differences* mean anything. A lone AIC of 5000 tells you nothing.

## In my project
In `GrasslandBirdRichness_Analysis.R` (it ran in ajay's RStudio on Oct 13; R is not installed in Claude's environment, so rerun any change there):

```r
selRich <- model.sel(fitsRich, rank = "AIC")
selRich

write_csv(selRich %>% as.data.frame() %>% rownames_to_column("Model"),
          here(ResultsPath, "ModelSelection_Richness.csv"))

topRich <- fitsRich[[rownames(selRich)[1]]]
```

Word by word:
- `model.sel(fitsRich, rank = "AIC")`: rank the six fitted glmer models in the list `fitsRich` (M0, M1, M2a, M2b, M2c, M3 for all-species richness) by AIC. `selRich <-` saves the table. The same lines run for `fitsFocal`.
- `selRich` on its own line: typing a name prints it.
- `as.data.frame()` converts to a plain table ([[Data Frames]]), and `rownames_to_column("Model")` turns the model names (stored as row names) into a real column, so they survive in the CSV.
- `write_csv(..., here(ResultsPath, "ModelSelection_Richness.csv"))`: save it in the Results folder ([[here()]]). The folder exists because the script makes it at the top with `dir.create()`.
- `rownames(selRich)[1]` is the name of the top-ranked model, and the double square brackets in the last line mean "take out the item with this name", so that model is pulled out of the list. So the diagnostics and estimates always use whichever model won, with no name typed by hand.

How to read the table: each row is a model; columns show which terms it contains, then df (number of parameters), logLik (log [[Likelihood]]), AIC, delta and weight. The top row has delta = 0. Models within about 2 units of the top have similar support. Weight is each model's share of support within this set (all weights add to 1). Always check that the [[Null Model]] is clearly worse; if not, the predictors add little.

All models in one table share the same random intercept, the same response and the same rows (1,130 visits at 376 points), and glmer fits by maximum likelihood, so their AIC values are comparable ([[Complete-Case Analysis]]). Make two tables, one per response; never mix responses in one table.

What it found: **M3 (property plus habitat) ranked first for both responses, with weight 1.00.** For all species the next model, M1, was 42.1 AIC units behind; for focal species the next, M2a, was 22.5 behind. Full tables: [[Preliminary Results]].

Dr. Roberts' script calls `model.sel(fits)` but does not save it; saving the tables to Results is my addition for the Report.

## Common confusions
- **"The top model is true."** It is only the best *of the ones you offered*.
- **"Lower AIC means a significant effect."** AIC ranks models; it is not a p-value ([[Why compare models with AIC rather than only p-values]]).
- **"I can compare AIC across different data."** No. All models must use exactly the same rows and response.

## Connections
- **Builds on:** [[AIC]], [[Candidate Model Set]], [[glmer()]]
- **Leads to:** [[Delta AIC and Akaike Weights]], [[Why compare models with AIC rather than only p-values]], [[EDA Findings]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]], [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]
- **Go deeper:** [[Anderson and Burnham 2002]] (how to use AIC well), [[Johnson and Omland 2004]] (model selection in ecology)

> [!question]- Check yourself
> For all species, M3 has delta AIC = 0, M1 Property is 42 behind, the best habitat-only model is 62 behind, and M0 is 140 behind. What does that tell me, and what does it not tell me?
> ?
> Property and habitat each explain part of richness, and neither replaces the other, so both H1 and H2 get support. It does not tell me *what* about the properties matters (year, dates and crew are all tangled with property), nor how big each effect is; for that I read the coefficients.
