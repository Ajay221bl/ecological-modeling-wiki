---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "CJS"
  - "CJS model"
  - "Cormack-Jolly-Seber"
  - "Live recapture model"
  - "phi(.)p(.)"
status: seedling
---

# Cormack-Jolly-Seber Model

**In one line:** the Cormack-Jolly-Seber model estimates apparent survival φ and recapture probability p from capture histories of marked animals in an open population, conditioning on each animal's first capture.

> [!info] Before this, it helps to know
> [[Capture History]] · [[Open Population]] · [[Apparent Survival]] · [[Likelihood Function]]

## A tiny example
History 1011 (released on occasion 1): φ₁(1 − p₂) φ₂p₃ φ₃p₄. The 0 on occasion 2 cannot be death, because the animal was seen later.
History 110: φ₁p₂ × [(1 − φ₂) + φ₂(1 − p₃)]: after the last sighting it either died or survived and was missed.

## Start from zero
1. **Needs individual marks and at least three occasions** to separate φ and p (Powell and Gale Ch10).
2. **Assumptions (Powell and Gale Ch10):**
   - Every marked animal has the same p and the same φ.
   - Marks are not lost or overlooked.
   - Sampling is instantaneous and release immediate.
   - Emigration is permanent.
3. **The last φ and p are confounded** in fully time-dependent models; only their product is estimable.
4. **Does not estimate N** or recruitment; it conditions on marked animals.
5. **Fitted in Program MARK, RMark, marked, or Bayesian code.**

## In R
```r
set.seed(3); n <- 300; K <- 6; f <- sample(1:5, n, TRUE); Y <- matrix(0, n, K)
for (i in 1:n) { Y[i, f[i]] <- 1; alive <- TRUE; for (t in (f[i] + 1):K) { alive <- alive && runif(1) < 0.7; if (alive) Y[i, t] <- rbinom(1, 1, 0.5) } }
nll <- function(b) { ph <- plogis(b[1]); pp <- plogis(b[2]); chi <- numeric(K); chi[K] <- 1
  for (t in (K - 1):1) chi[t] <- (1 - ph) + ph * (1 - pp) * chi[t + 1]
  -sum(sapply(1:n, function(i) { l <- max(which(Y[i, ] == 1)); s <- if (l > f[i]) sum(log(ph) + log(ifelse(Y[i, (f[i] + 1):l] == 1, pp, 1 - pp))) else 0; s + log(chi[l]) })) }
round(plogis(optim(c(0, 0), nll)$par), 2)   # phi, p (truth 0.7, 0.5)
```

## In the course
[[Powell and Gale 2015]] Ch7 and Ch10.

## Common confusions
- **"Two occasions are enough for survival."** With two, φ and p cannot be separated.

## Explain it back
- Write the probability of history 101.

*Pass test:* you can write CJS history probabilities and list assumptions.

## Connections
- **Builds on:** [[Capture History]], [[Open Population]], [[Apparent Survival]]
- **Leads to:** [[Jolly-Seber and POPAN Models]], [[Multi-state Models]], [[Goodness of Fit and c-hat]], [[Program MARK]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[True vs Apparent Survival]], [[Choosing a Survival Model]]

## Flashcards

What does the CJS model estimate?
??
Apparent survival φ and recapture probability p, conditioning on first capture.
++++

CJS probability of history 101?
??
φ₁(1 − p₂)φ₂p₃.
++++

Minimum number of occasions for CJS?
??
Three.
++++
