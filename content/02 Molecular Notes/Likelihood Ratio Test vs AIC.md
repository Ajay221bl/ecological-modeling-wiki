---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - selection
aliases: []
status: seedling
---

# Likelihood Ratio Test vs AIC

> [!summary] In plain words
> both start from the same log-likelihood difference between models, but the likelihood ratio test asks whether a nested model is significantly better than chance would allow, while AIC estimates which model predicts better and works for non-nested models too.

## The question
My two models differ by one parameter. Should I use a likelihood ratio test or AIC, and why do they sometimes disagree?

## Built from
- [[Likelihood Ratio Test]]: 2Δlog L compared with chi-square.
- [[AIC]]: −2 log L + 2K.
- [[Nested Models]]: required for the LRT.
- [[Null Hypothesis Significance Testing]] and [[Information Theory]]: the two philosophies.

## The reasoning, step by step
1. **Shared core:** both compute 2 × (log L_big − log L_small).
2. **LRT:** compare it with a chi-square on Δk degrees of freedom. For one extra parameter, reject at 5% if it exceeds 3.84.
3. **AIC:** prefer the bigger model if it exceeds 2Δk. For one parameter, if it exceeds 2.
4. **So with one parameter, AIC is more lenient:** a statistic of 3 gives ΔAIC = −1 in favour of the bigger model but p = 0.08 for the LRT.
5. **LRT needs nested models.** AIC doesn't (same data and response).
6. **LRT gives a yes/no about one hypothesis. AIC gives graded support across many models.**
7. **Mixing them in one analysis** ("we used AIC and then checked p-values") muddles the logic.

| | Likelihood ratio test | AIC |
|---|---|---|
| Question | Is the extra term significant? | Which model predicts best? |
| Nested models needed | Yes | No |
| Threshold for 1 parameter | 2Δlog L > 3.84 | 2Δlog L > 2 |
| Output | p-value | ΔAIC, weights |
| Many models at once | Awkward | Natural |

**A worked example in numbers.** 2Δlog L = 3.0 with one extra parameter. LRT p = 0.083 (not significant at 5%). ΔAIC = 3.0 − 2 = 1.0 in favour of the bigger model.

## So in practice
Testing one planned contrast between nested models: LRT. Comparing several hypotheses as models: AIC.

## What would go wrong otherwise
Reporting the AIC winner with a p-value from an LRT of the same comparison, as if they were independent evidence.

## Explain it back
- Why is AIC more lenient than an LRT at α = 0.05 for one parameter?

*Pass test:* you can compute both from two log-likelihoods.

## Connections
- **Related:** [[Null Hypothesis Testing vs Model Selection]], [[Wald Test vs Likelihood Ratio Test]], [[Why AIC rewards fit but punishes complexity]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 10 - Model Selection|MOC - Model Selection]], [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

For one extra parameter, what thresholds on 2Δlog L do the LRT (α = 0.05) and AIC use?
??
LRT: 3.84. AIC: 2.
++++

Which of LRT and AIC can compare non-nested models?
??
AIC.
++++
