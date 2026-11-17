---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - selection
aliases: []
status: seedling
---

# Why AIC rewards fit but punishes complexity

> [!summary] In plain words
> a model always fits its own data better than it will fit new data, by about one log-likelihood unit per estimated parameter, so AIC subtracts that optimism to estimate how the model will do on data it hasn't seen.

## The everyday picture
An exam you set yourself. Grading your own answers against your own notes inflates your score. Experience shows by how much, roughly a fixed amount for every topic you crammed. Subtract that and you have an honest estimate of your real exam score.

## The question
Where does the 2K in AIC come from, and why is it the right size?

## Built from
- [[Log-likelihood]]: fit to the data in hand.
- [[Overfitting]]: why that fit is optimistic.
- [[Kullback-Leibler Information]]: what we really want to minimise.
- [[Number of Parameters]]: the size of the optimism.
- [[AIC]]: the corrected score.
- [[Out-of-sample Prediction]]: the target.

## See it
![[AIC tradeoff.png|700]]
*What to look at:* in-sample misfit falls steadily as parameters are added, out-of-sample misfit falls then rises, and AIC tracks the second curve.

## The reasoning, step by step
1. We want to choose the model that would predict new data from the same process best (smallest KL distance).
2. A natural estimate of predictive performance is the log-likelihood at the fitted values.
3. But the parameters were chosen to make this very log-likelihood large. It is biased upward.
4. Akaike showed that, for large samples and a reasonable model, the bias is about K (one unit of log-likelihood per parameter).
5. Corrected estimate: log L − K. Multiply by −2 for the conventional scale: −2 log L + 2K.
6. The penalty isn't a moral preference for simplicity. It is a bias correction.
7. With small n the bias is larger than K, hence AICc.
8. A parameter earns its place if it raises log L by more than 1.

**A worked example in numbers.** in the figure's polynomial example (n = 40), raising the degree from 1 to 8 lowered in-sample error steadily (0.144 to 0.090), while leave-one-out error fell to 0.114 at degree 3 and then climbed to 0.543 at degree 8. AIC was also smallest at degree 3.

## So in practice
Use AIC (or AICc) when the goal is good prediction or good approximation, among a sensible set of models fitted to identical data.

## What would go wrong otherwise
Choosing by R² or log-likelihood alone always picks the biggest model. Choosing by p-values answers a different question.

## Explain it back
- Explain the penalty as a bias correction in two sentences.

*Pass test:* you can derive why a parameter must add 1 to log L to be worth it.

## Connections
- **Related:** [[AIC vs BIC]], [[Likelihood Ratio Test vs AIC]], [[AIC, WAIC and LOO]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Model Selection]]

## Flashcards

Why does AIC include a penalty of 2K?
??
The maximised log-likelihood overestimates out-of-sample performance by about K, so the penalty corrects that bias.
![[AIC tradeoff.png]]
++++
