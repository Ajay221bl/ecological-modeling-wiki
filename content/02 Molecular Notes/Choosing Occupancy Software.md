---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases:
  - "Occupancy software"
  - "Software for occupancy models"
status: seedling
---

# Choosing Occupancy Software

> [!summary] In plain words
> the occupancy software tools fit the same likelihood; choose unmarked for standard frequentist work in R, ubms for random effects in a Bayesian setting, spOccupancy for spatial or many-species Bayesian models, and PRESENCE or MARK if you prefer stand-alone programs.

## The question
Which program or R package should I use to fit occupancy models?

## Built from
- [[unmarked Package]], [[ubms Package]], [[spOccupancy Package]], [[Program PRESENCE]], [[Program MARK]]: the guest lecture's software slide.
- [[Occupancy Likelihood]]: what they all maximise or sample from.
- [[Frequentist vs Bayesian Inference]]: the main split between them.

## The reasoning, step by step
1. **Standard single- or multi-season model, AIC tables, in R:** unmarked (`occu()`, `colext()`, `occuMulti()`).
2. **Need random effects** (regions, observers, years) or Bayesian intervals with the same formulas: ubms (`stan_occu()`).
3. **Many sites with spatial autocorrelation, or many species:** spOccupancy (`spPGOcc()`, `msPGOcc()`).
4. **Prefer menus, or need a model only they offer:** PRESENCE (RPresence) or MARK (RMark).
5. **Something custom** (false positives with lab replicates, odd hierarchies): write the model in Stan or JAGS ([[Stan]]).

| Tool | Fitting | Strength | Watch out for |
|---|---|---|---|
| unmarked | maximum likelihood | standard models, fast, AIC | no random effects |
| ubms | Bayesian (Stan) | random effects, unmarked syntax | slower; check R-hat |
| spOccupancy | Bayesian (Pólya-Gamma Gibbs sampler) | spatial and multi-species, fast | MCMC checks, new syntax |
| PRESENCE / RPresence | maximum likelihood | very wide model menu | separate program |
| MARK / RMark | maximum likelihood | design matrices, links to mark-recapture | steep learning curve |
For the same constant model, every likelihood tool gives essentially the same ψ̂ and p̂, because they maximise the same [[Occupancy Likelihood]]; Bayesian tools with vague priors land very close.

## So in practice
Learn unmarked first, since its double formula `occu(~ p ~ ψ)` is shared by ubms; move to ubms or spOccupancy when your data have grouping or spatial structure the simple model ignores.

## What would go wrong otherwise
Switching software to make a poor model "work": if detections are too sparse, no package can estimate γ and ε, and the fix is design, not code.

## Explain it back
- Which tool would you use for 2,000 camera sites with strong spatial clustering, and why?

*Pass test:* you can pick an occupancy tool from the structure of your data and question.

## Connections
- **Related:** [[Occupancy Workflow in R]], [[Stan vs brms vs JAGS]], [[lme4 vs brms]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 16 - Population Estimation|MOC - Population Estimation]], [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

Which occupancy package adds random effects with unmarked-style formulas?
??
ubms (stan_occu()).
++++

Which package is built for spatial and multi-species Bayesian occupancy models?
??
spOccupancy.
++++
