---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - modeling
aliases:
  - "Bias vs precision"
  - "Accuracy and precision"
status: seedling
---

# Bias and Precision

> [!summary] In plain words
> **Bias** is how far your estimates land from the truth on average. **Precision** is how tightly they cluster. They're independent: you can be precise and biased, or unbiased and imprecise. **Accuracy** is a loose word for being close to the truth, so say which you mean; **mean squared error** combines both as bias² + variance.

## The everyday picture
Darts. Bias is where the cluster sits compared with the bullseye. Precision is how tight the cluster is. A tight cluster in the top corner is precise but biased; a loose cloud centred on the bullseye is unbiased but imprecise.

*Where the picture stops working:* in darts you can see the bullseye. In ecology you never see the truth, so you judge methods by their design or by simulation.

## The question
How do bias, precision and accuracy relate, and why must you consider both?

## Built from
- [[Bias]]: average distance from the truth
- [[Precision]]: spread of repeated estimates
- [[Accuracy]]: closeness to the truth, defined in more than one way
- [[Sampling Variation]]: what makes estimates spread

## See it
![[Bias and precision.png|700]]
*What to look at:* the four targets cross biased/unbiased with precise/imprecise.

## The reasoning, step by step
1. **Precision improves with sample size** ([[Precision]]).
2. **Bias doesn't** ([[Bias]]). *Why:* it comes from the method, not from chance.
3. **So more data can make a biased method more confidently wrong.**
4. **Combine both with mean squared error** ([[Accuracy]]). *Why:* a little bias may be worth a lot more precision ([[Bias-Variance Trade-off]]).

**A worked example in numbers.** True elk survival 0.80. Injuring tags give estimates averaging 0.70 (bias **−0.10**), with 200 or 2,000 elk alike. Unbiased tags on 10 elk give SE 0.13; on 200, SE 0.03. MSE: unbiased-but-imprecise = 0.13² ≈ **0.016**; biased-but-precise = 0.10² + 0.03² ≈ **0.011**. The biased method lands closer on average.

## So in practice
Fix bias by design (better methods, modelling detection); fix precision with more or better data. Report which kind of "accuracy" you mean.

## What would go wrong otherwise
- You'd throw more effort at a biased method and trust it more.
- You'd reject a slightly biased but far more precise method that would serve you better.

## Explain it back
- Use darts to explain bias and precision.
- Why doesn't a bigger sample fix bias?

*Pass test:* you can say which of the four dart targets a given method looks like.

## Connections
- **Related:** [[Parameter vs Estimate]], [[Biological vs Statistical Population]], [[Bias-Variance Trade-off]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Modeling Foundations]]

## Flashcards

What's the difference between bias and precision?
??
Bias is how far estimates land from the truth on average; precision is how tightly repeated estimates cluster.
![[Bias and precision.png]]
++++

Why doesn't more data fix bias?
??
Bias comes from the method, not chance; more data only make a biased method more precisely wrong.
++++
