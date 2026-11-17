---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases: []
status: seedling
---

# Why GLMs need a link function

> [!summary] In plain words
> a count mean must be positive and a probability must stay between 0 and 1, but a straight line goes everywhere, so a GLM lets the line live on a stretched scale and uses a link function to translate between that scale and the mean.

## The everyday picture
A thermostat dial that reads from minus infinity to plus infinity, wired to a heater that can only output between 0 and 100%. Something between them has to translate any dial setting into a legal output. That translator is the inverse link.

## The question
Why can't a GLM model the mean directly as a straight line, and what exactly does the link function do about it?

## Built from
- [[Linear Predictor]]: the straight-line part, unrestricted.
- [[Support of a Distribution]]: the restriction on the mean.
- [[Link Function]] and [[Inverse Link Function]]: the translators.
- [[Log Link]] and [[Logit Link]]: the two commonest.

## See it
![[Link functions.png|700]]
*What to look at:* every value of the linear predictor, however extreme, lands on a legal mean.

## The reasoning, step by step
1. A linear predictor β₀ + β₁x can take any value. Push x far enough and it passes any bound.
2. The mean of a count is positive. The mean of a 0/1 outcome is a probability.
3. Setting mean = line therefore produces impossible means somewhere: −2 birds, or a probability of 1.3.
4. A link g stretches the legal range of the mean onto the whole number line. g(mean) = line.
5. The inverse link squeezes any value of the line back into the legal range. mean = g⁻¹(line).
6. As a bonus the link fixes the meaning of the coefficients: multiplicative with a log link, odds-multiplying with a logit link.

**A worked example in numbers.** line = 2.3 − 0.02 × tree. Identity link at tree = 150: 2.3 − 3 = −0.7 birds, impossible. Log link at tree = 150: exp(−0.7) = 0.5 birds, small but legal.

## So in practice
Pick the family from the response type, accept its default link unless you have a reason, and always convert predictions with the inverse link before presenting them.

## What would go wrong otherwise
Without a link, predictions leave the possible range and fitting can fail outright. Transforming the data instead (log(y + 1)) changes what is being modeled and breaks on zeros.

## Explain it back
- Explain to a friend why a probability can't be a straight line in x.

*Pass test:* you can say what the link acts on and what its inverse returns.

## Connections
- **Related:** [[Generalized Linear Model]], [[Predictions on Link vs Response Scale]], [[Transform the data or change the model]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

Why does a GLM need a link function?
??
The mean is restricted (positive, or between 0 and 1) while a linear predictor is unrestricted. The link maps one onto the other.
![[Link functions.png]]
++++
