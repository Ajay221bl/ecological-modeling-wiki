---
type: atomic
tags:
  - model-selection-diagnostics
  - flashcards
aliases:
  - "Delta AIC"
  - "ΔAIC"
  - "delta AICc"
  - "Akaike weight"
  - "Akaike weights"
  - "model weights"
  - "evidence ratio"
status: seedling
---

# Delta AIC and Akaike Weights
**In one line:** ΔAIC is how far each model's AIC is behind the winner; Akaike weights turn those gaps into shares of support that add up to 1.

> [!info] Before this, it helps to know
> [[AIC]] (the raw scores) · [[Probability]] (weights read like chances) · [[Logarithms and Exponents]] (the exp() step)

## Start from zero
In a race, nobody cares that the winner's time was 5,186 seconds. They care that second place was 4 seconds behind and third was 6 behind. Gaps tell the story.

**ΔAIC** (read "delta AIC", delta meaning "difference") is the gap: each model's AIC minus the lowest AIC in the set. The winner has Δ = 0.

**Akaike weights** go one step further. They split 100% of the support among the models, like slicing a pie. A model with weight 0.84 gets 84% of the pie. Roughly, a weight is the chance that this model is the best one *in your list*.

## Why it exists
Raw AIC values have no meaning on their own ([[AIC]]). We need a way to say "how much better" in plain terms.

[[Johnson and Omland 2004]] give the steps (Box 4, p. 104):
1. **ΔAIC:** subtract the smallest AIC from each model's AIC.
2. **Model likelihood:** exp(-Δ/2). "exp" means "e raised to this power", where e is about 2.718 ([[Logarithms and Exponents]]). It turns a gap back into a relative plausibility. A gap of 0 gives 1; bigger gaps give smaller numbers.
3. **Evidence ratio:** winner's value divided by a model's value = how many times better supported the winner is.
4. **Weight:** each model's value divided by the sum over all models.

[[Anderson and Burnham 2002]] translate gaps into odds: Δ = 2 is only about 2.7 to 1 (not strong), Δ = 4 about 7.4 to 1, Δ = 10 about 150 to 1 (strong) (p. 915). [[Powell and Gale 2015 Ch4]] give the common rule of thumb: Δ 0 to 2 "substantial" support, 4 to 7 "considerably less", above 10 "essentially none" (p. 50), and prefer evidence language ("some evidence") over yes/no (pp. 49-50).

## A tiny example
Invented AIC values (not my results) for five models, to show a close race ([[AIC]] shows how each AIC is computed):

| Model | AIC | Δ | exp(-Δ/2) | Weight |
|---|---|---|---|---|
| A | 5,186 | 0 | 1.000 | 1.000 / 1.185 = **0.84** |
| B | 5,190 | 4 | 0.135 | 0.11 |
| C | 5,192 | 6 | 0.050 | 0.04 |
| D | 5,298 | 112 | about 0 | 0.00 |
| E | 5,304 | 118 | about 0 | 0.00 |

Sum of the exp column: 1 + 0.135 + 0.050 = 1.185. Evidence ratio A vs B: 1 / 0.135, about 7.4 to 1. Real support, not overwhelming. My real race was not close at all (below).

## In my project
`model.sel(fitsRich, rank = "AIC")` and `model.sel(fitsFocal, rank = "AIC")` in `GrasslandBirdRichness_Analysis.R` list, for each model, `df` (K), `logLik`, `AIC`, `delta` and `weight` ([[MuMIn model.sel()]]). Because of `rank = "AIC"` these are plain AIC deltas, not AICc. The script saves them as `ModelSelection_Richness.csv` and `ModelSelection_FocalRichness.csv` in the Results folder, which it now creates itself with `dir.create()`. Anderson and Burnham ask for exactly these columns in a Results table (p. 916).

Real focal-richness results (Oct 13):

| Model | Δ | exp(-Δ/2) | Weight |
|---|---|---|---|
| M3 Property + Habitat | 0 | 1 | **1.00** |
| M2a Habitat 0.81 ha | 22.5 | about 0.000013 | 0.00 |
| M2c Habitat 65.61 ha | 27.8 | about 0 | 0.00 |
| M2b Habitat 7.29 ha | 28.6 | about 0 | 0.00 |
| M1 Property | 91.9 | about 0 | 0.00 |
| M0 Null | 171.0 | about 0 | 0.00 |

The runner-up is 22.5 units behind, so the evidence ratio for M3 over M2a is exp(11.25), roughly 77,000 to 1. For all species the runner-up (M1) is 42.1 behind. So M3 takes a weight of 1.00 for both responses: nothing else is close to the 2-unit "similar support" line ([[Anderson and Burnham 2002]]). Full table: [[Preliminary Results]].

In the Report this reads: "the model with the most support was M3, Property + Habitat (w = 1.00), for both responses", followed by its estimates. A weight of 1.00 is "best of *these six*", not "true" ([[Candidate Model Set]]).

## Common confusions
- **"Δ < 2 means tied, always."** A model with one extra parameter and the same fit lands about 2 behind just from the penalty. It is not truly competitive; the extra term is uninformative (Powell and Gale, p. 51).
- **"Δ = 2 is a magic line."** It is a convention; some authors use up to 6 for a "top set" ([[Harrison et al. 2018]], pp. 23-24).
- **"Weights are fixed facts."** Add or drop one model and every weight changes ([[Candidate Model Set]]).
- **Summing weights as "variable importance."** Unreliable (Harrison et al., p. 24).

## Connections
- **Builds on:** [[AIC]], [[Likelihood]], [[Probability]], [[Logarithms and Exponents]]
- **Leads to:** [[Candidate Model Set]], [[Parsimony]], [[Why compare models with AIC rather than only p-values]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]
- **Go deeper:** [[Johnson and Omland 2004]] (Box 4, p. 104), [[Anderson and Burnham 2002]] (p. 915)

> [!question]- Check yourself
> A model has ΔAIC = 4. What is the evidence ratio in favour of the top model, roughly?
> ?
> exp(4/2) = exp(2), about 7.4 to 1. That is real but not overwhelming evidence for the top model.
