---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases:
  - "Wald vs profile vs bootstrap"
  - "Comparing confidence interval methods"
status: seedling
---

# Wald, Profile and Bootstrap Intervals

> [!summary] In plain words
> Wald intervals are fast and symmetric, profile likelihood intervals follow the shape of the likelihood, and bootstrap intervals come from simulated datasets, and they agree when the likelihood is nearly normal but diverge for small samples, bounded parameters and variance components.

## The question
lme4's confint() offers three methods. Which should I use?

## Built from
- [[Wald Confidence Interval]], [[Profile Likelihood Confidence Interval]], [[Parametric Bootstrap]], [[Percentile Bootstrap Interval]].
- [[Confidence Intervals for Variance Components]]: where they differ most.

## The reasoning, step by step
1. **Wald:** estimate ± 1.96 SE. Assumes a symmetric, normal sampling distribution. Fast.
2. **Profile:** all parameter values whose likelihood is within 1.92 log-units of the maximum (half of 3.84). Respects asymmetry and bounds.
3. **Parametric bootstrap:** simulate data from the fit, refit, take quantiles. Makes the fewest approximations but is slow.
4. **For fixed effects with plenty of data,** all three agree.
5. **For SDs and with few groups,** Wald fails (NA in lme4), profile is good, bootstrap is best but slow.
6. **For GLMs near boundaries** (probabilities near 0 or 1), profile and bootstrap beat Wald.

| | Wald | Profile | Bootstrap |
|---|---|---|---|
| Speed | Instant | Seconds | Minutes |
| Symmetric | Always | No | No |
| Variance components | No (NA) | Yes | Yes |
| lme4 | `method = "Wald"` | `"profile"` (default) | `"boot"` / `bootMer()` |

**A worked example in numbers.** for the sleepstudy random-intercept model, the profile 95% interval for the subject SD was about 26 to 53, clearly asymmetric around the estimate of 37.

## So in practice
Profile by default; bootstrap for final, important intervals or derived quantities; Wald only for quick looks at fixed effects.

## What would go wrong otherwise
Reporting estimate ± 2 SE for a random-effect SD.

## Explain it back
- Why does Wald fail for variance components?

*Pass test:* you can choose a CI method and justify it.

## Connections
- **Related:** [[Confidence vs Credible Interval]], [[Prediction vs Confidence Interval]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Likelihood and Estimation]], [[MOC - Mixed Models]]

## Flashcards

Which CI method does lme4 use by default for confint() on lmer models?
??
Profile likelihood.
++++

When do Wald, profile and bootstrap intervals agree?
??
When the likelihood is close to normal: large samples, parameters far from bounds.
++++
