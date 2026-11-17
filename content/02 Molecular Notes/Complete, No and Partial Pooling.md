---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - mixed
aliases:
  - "Complete vs No vs Partial Pooling"
  - "Pooling compared"
status: seedling
---

# Complete, No and Partial Pooling

> [!summary] In plain words
> complete pooling ignores groups, no pooling treats each group alone, and partial pooling lets the data decide how much groups should share, which usually beats both.

## The question
What do the three pooling strategies estimate, and why is partial pooling the default?

## Built from
- [[Complete Pooling]], [[No Pooling]], [[Partial Pooling]].
- [[Shrinkage]]: what partial pooling does.
- [[Bias-Variance Trade-off]]: why it wins.

## See it
![[Partial pooling shrinkage.png|700]]
*What to look at:* orange (no pooling) points scatter widely for small sites; blue (partial) points sit between them and the dashed complete-pooling line.

## The reasoning, step by step
1. **Complete:** one estimate for all. Biased for groups that really differ; overconfident.
2. **No pooling:** one estimate per group from its own data. Unbiased but noisy for small groups.
3. **Partial pooling:** each group's estimate is a weighted average of its own mean and the overall mean, with weights from the group variance and the group's sample size.
4. **The two extremes are special cases:** group variance 0 gives complete pooling; group variance ∞ gives no pooling.
5. **The lab path** goes `lm()` → `lmList()` → `lmer()` with a shrinkage plot.

| | Complete | No pooling | Partial |
|---|---|---|---|
| R | `lm(y ~ x)` | `lmList(y ~ x \| g)` or `lm(y ~ x * g)` | `lmer(y ~ x + (x \| g))` |
| Assumes groups | Identical | Unrelated | Similar, to a degree learned from data |
| Small groups | Swamped | Noisy | Shrunk toward average |
| New groups | Grand estimate | Impossible | Average with uncertainty |

**A worked example in numbers.** in sleepstudy, the SD of per-subject slopes was 6.56 with no pooling and 5.46 with partial pooling; the complete-pooling slope (10.47) is the same as the mixed model's fixed slope, but with a smaller SE (1.24 versus 1.55).

## So in practice
Fit all three once on your data to see how much shrinkage happens. Report the partial pooling model.

## What would go wrong otherwise
Reporting lmList estimates for each site as if they were as reliable as the mixed model's.

## Explain it back
- What group variance turns partial pooling into complete pooling?

*Pass test:* you can explain all three with a plot.

## Connections
- **Related:** [[Fixed vs Random Effects]], [[Why use a random effect instead of a fixed effect]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Mixed Models]]

## Flashcards

What are the two limiting cases of partial pooling?
??
Group variance 0 gives complete pooling; infinite group variance gives no pooling.
![[Partial pooling shrinkage.png]]
++++
