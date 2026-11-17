---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - basics
aliases:
  - "Practical vs statistical significance"
  - "Significant but trivial"
status: seedling
---

# Statistical vs Biological Significance

> [!summary] In plain words
> statistical significance says the data would be surprising if the true effect were zero, while biological significance asks whether the effect is big enough to matter for the organism, population or management decision.

## The question
My effect is significant. Does it matter?

## Built from
- [[Statistical Significance]].
- [[Effect Size]] and [[Confidence Interval]].
- [[Sample Size]] and [[Statistical Power]].

## The reasoning, step by step
1. **Statistical significance grows with sample size** even when the effect stays the same.
2. **Biological significance is judged against a threshold set by biology:** a body-mass change that affects survival, a decline that triggers listing.
3. **Look at the confidence interval,** not the p-value: does it include only important values, only trivial ones, or both?
4. **Four outcomes:** significant and important; significant and trivial (big n); not significant but possibly important (small n, wide CI); not significant and the CI rules out important effects.
Mass differs by 0.2 g (SE 0.05) between two huge samples of 30 g birds: p < 0.001, but 0.7 percent of body mass, likely trivial.

## So in practice
Before analysing, write what size of effect would matter. Then compare the CI to that number.

## What would go wrong otherwise
Calling a significant 0.5 percent change in nest success "an important habitat effect" without asking if it changes population growth.

## Explain it back
- What do you compare a confidence interval to when judging biological significance?

*Pass test:* you can classify a result into one of the four outcomes.

## Connections
- **Related:** [[What a p-value does and does not tell you]], [[Type I and Type II Errors]], [[Bias and Precision]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

Statistical vs biological significance?
??
Statistical: the data would be surprising if the effect were zero. Biological: the effect is big enough to matter.
++++

Why can a trivial effect be statistically significant?
??
With large samples, even tiny effects give small p-values.
++++
