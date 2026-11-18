---
type: molecular
tags:
  - molecular
  - diagnostics
  - count-data
  - flashcards/eco/why
aliases:
  - "Why check overdispersion"
status: seedling
---

# Why check overdispersion before trusting Poisson
> [!summary] In plain words
> A Poisson model insists that the spread of the counts equals their average. Real bird counts are often more spread out than that. If they are and we ignore it, the model is overconfident: its error bars are too narrow and weak effects look real. So we measure the spread left over after fitting, and switch to a more flexible model if it is too big. When I did, my counts turned out slightly *less* spread out than Poisson expects (underdispersion), the milder problem.

## The question
The Poisson distribution assumes the variance equals the mean. Why do I have to check this in my fitted model, and what do I do if it fails?

## Built from
- [[Spread and Variability]] and [[Variance]]: what "spread" means as a number.
- [[Poisson Distribution]]: the assumption being checked (variance = mean).
- [[Overdispersion]]: the common way counts break that assumption (variance > mean).
- [[Underdispersion]]: the less common opposite (variance < mean), which my data lean toward.
- [[Standard Error]]: the quantity that goes wrong if the check is skipped.
- [[Negative Binomial Distribution]]: the fallback when counts are too spread out.
- [[check_overdispersion()]]: the R function that runs the check.

## The reasoning, step by step
1. **A model's uncertainty comes from the spread it expects.** If a model believes counts barely wobble, then any difference it sees looks meaningful. If it knows counts wobble a lot, it is more cautious.
2. **Poisson has no separate spread knob.** It has one parameter, λ, which sets both the mean and the variance ([[Hobbs and Hooten 2015 Ch3]], p. 52). Average 6 forces variance 6.
3. **Real counts often wobble more.** Birds cluster, some points are much better than others, and some causes were never measured. Anderson and Burnham note that "count data often are overdispersed" ([[Anderson and Burnham 2002]], p. 915).
4. **A tiny example.** Four counts, 0, 2, 10 and 12, average 6. Poisson expects variance about 6. Their actual variance is about 34.7, nearly six times more. A Poisson model fitted to data like these would treat the wobble as six times smaller than it is.
5. **Too little expected wobble means overconfidence.** Standard errors come out too small, confidence intervals too narrow and p-values too small. Harrison et al. warn that ignoring overdispersion "leads to artificially small standard errors and spurious significance" ([[Harrison et al. 2018]], p. 16). It also distorts model selection, which is why [[Anderson and Burnham 2002]] recommend QAICc when it is present (p. 915).
6. **Check the model, not just the raw data.** What matters is the spread left over after property, habitat, Wind, Sky and the point effect are accounted for ([[Residual|Residuals]]). A raw variance/mean ratio is only a first clue.
7. **Fixes exist.** From simplest: switch to a negative binomial family, which adds a parameter so the variance can exceed the mean, or add an observation-level random effect ([[Harrison et al. 2018]], p. 16).
8. **The opposite problem is milder.** Underdispersion (ratio below 1) makes the model a bit too cautious: standard errors slightly too wide, so conclusions are conservative rather than overconfident. Worth reporting, not usually worth fixing.

## So in my project
Before fitting, the raw within-property variance/mean ratios were 0.56 to 0.93 on the 376 modelled points ([[Mean-Variance Relationship]]), so I expected no overdispersion and perhaps mild underdispersion. (Older figure: 0.55 to 1.08 on all 416 points; old filter, superseded Oct 13.) Since Oct 13 the analysis script checks the top model for each response, twice:
```r
check_overdispersion(topRich)
check_overdispersion(topFocal)
```
plus DHARMa's `testDispersion()` on simulated residuals, a stronger check for GLMMs ([[DHARMa Simulated Residuals]]). The comment above it states the decision rule: "If the dispersion ratio is well above 1, refit the models as negative binomial (glmer.nb() or glmmTMB) instead of Poisson."

**Result (Oct 13):** dispersion ratios of **0.66** (all species) and **0.60** (focal), and DHARMa's dispersion test p = 0 ([[Preliminary Results]]). No overdispersion, so the negative binomial rule never triggers. Instead the check found real [[Underdispersion]]: the Poisson's intervals are somewhat too wide (cautious). Weak spatial autocorrelation pulls the other way, and the Report keeps the Poisson model ([[Why the Report keeps the Poisson model despite the diagnostics]]). If the Final Draft fixes the spread, it needs a distribution that allows *less* spread (Conway-Maxwell-Poisson, generalized Poisson, or a binomial for focal richness), not a negative binomial.

Contrast: Dickcissel counts alone have a variance/mean of about 12 (pre-trim value from the earlier chat), which is why a single-species model would need a negative binomial ([[Why richness instead of single-species counts]]).

## What would go wrong otherwise
- If overdispersion had been present and ignored, property or habitat effects could look "significant" only because the model underestimates noise.
- AIC rankings could favour overly complex models, since extra parameters soak up unmodelled variance.
- The Report's preliminary results could be overstated, and a reviewer (or Dr. Roberts) would ask for the dispersion check first.
- Without the check I would not know about the underdispersion either, and could not tell the reader which way the intervals lean.

## Connections
- **Builds on:** [[Why Poisson instead of linear regression for richness]], [[Mean|Average (Mean)]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]

## Flashcards

What happens to a Poisson model's error bars if the counts are overdispersed and you ignore it?::They are too narrow, so weak effects look real.

What did the project's dispersion check find, and why is it the milder problem?
??
Ratios of 0.66 and 0.60, underdispersion. It makes error bars somewhat too wide (conservative) rather than too narrow.
++++
