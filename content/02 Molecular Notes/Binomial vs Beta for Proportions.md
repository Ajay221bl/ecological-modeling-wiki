---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases: []
status: seedling
---

# Binomial vs Beta for Proportions

> [!summary] In plain words
> a proportion that is a count of successes out of a known number of trials is binomial, while a proportion that is a continuous fraction with no count behind it needs a beta model.

## The question
My response is a proportion. Is that a binomial GLM or a beta regression?

## Built from
- [[Binomial GLM for Proportions]]: successes out of n.
- [[Beta Regression]]: continuous proportions.
- [[Proportion]]: the two kinds.
- [[Beta-binomial Distribution]]: overdispersed counts out of n.

## The reasoning, step by step
1. **Ask: is there a denominator that is a count?** 14 of 20 seeds germinated: yes. 70% canopy cover from a visual estimate: no.
2. **Counts out of n → binomial.** Supply successes and failures. The model knows 14/20 is more precise than 7/10.
3. **Continuous fractions → beta.** Values strictly between 0 and 1.
4. **Both use a logit link,** so coefficients read the same way.
5. **Overdispersed binomial → beta-binomial** or an observation-level random effect. Not beta regression on the ratio.
6. **Exact 0s or 1s in continuous data** need a zero-one-inflated beta or a different approach.
7. **Never feed a bare proportion to a binomial without weights.** R will warn about non-integer successes and the precision will be wrong.

| Response | Example | Model |
|---|---|---|
| 0/1 per row | Nest survived or not | Bernoulli (logistic regression) |
| k of n per row | 14 of 20 seeds | Binomial |
| k of n, overdispersed | Chicks per brood | Beta-binomial |
| Continuous fraction | Percent cover | Beta |

## So in practice
Keep the raw counts when you collect data. Turning 14 of 20 into 0.7 throws away the information that decides the right model.

## What would go wrong otherwise
A beta model on count-based proportions ignores differing sample sizes. A binomial on continuous cover invents a denominator.

## Explain it back
- Which model for "fraction of the day spent foraging"?

*Pass test:* you can classify any proportion response.

## Connections
- **Related:** [[Why the response type decides the distribution]], [[What to do about overdispersion]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

Which model for a proportion based on k successes out of n trials?
??
Binomial GLM (or beta-binomial if overdispersed).
++++

Which model for a continuous proportion such as percent cover?
??
Beta regression.
++++
