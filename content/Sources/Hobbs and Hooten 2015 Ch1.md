---
type: source
tags:
  - source
  - reading
aliases:
  - "Hobbs Ch1"
  - "Preview"
status: seedling
---

# Hobbs and Hooten 2015 Ch1

> [!summary] In plain words
> The book's road map. Ecological research needs a "line of inference" from theory to insight qualified by uncertainty, and the chapter sketches how a Bayesian hierarchical model builds that line from process, sampling, observation and parameter models.

**Citation:** Hobbs, N. T., and M. B. Hooten. 2015. *Bayesian Models: A Statistical Primer for Ecologists.* Ch. 1, "Preview", pp. 3 to 15. Princeton University Press.
**Syllabus week:** Tue Sep 1, "Linear models & probability distributions"

> [!warning] Verify
> My folder has Ch1 only inside the full book PDF. Page numbers follow the book's printed pagination.

## What it's about
Uncertainty as the core of science; notation (bold for vectors, [a | b] for "the distribution of a given b", g() for deterministic models); and the four linked models (process, sampling, observation, parameter) that make up a Bayesian hierarchical model. An example follows in §1.2.

## Key ideas I use
- "A line of inference" from concepts to insight tempered by uncertainty (Fig. 1.1.1, p. 4) → [[Real World and Model World]]
- Notation: θ, y, x, [a | b, c] and g() (§1.1.1, p. 5) → [[Greek Letters and Notation]]
- The process model [z | g(θp, x), σ²p]: σ²p "subsumes all the unmodeled influences" (§1.1.2, p. 6) → [[Deterministic and Stochastic Components]], [[Process vs Observation Error]]
- The sampling model [uᵢ | z, σ²s] (§1.1.3, pp. 7 to 8) and the observation model [yᵢ | d(θo, uᵢ), σ²o] for biased observations (§1.1.4, pp. 8 to 9) → [[Process vs Observation Error]]
- Parameter models are priors, as informative as knowledge allows (§1.1.5, p. 9) → [[Prior]]
- The full model is Bayesian (unknowns are random variables) and hierarchical (quantities appear on both sides of "|") (eq. 1.1.5, p. 10) → [[Hierarchical Model]]

## Notes that rely on it
- [[Deterministic and Stochastic Components]], [[Process vs Observation Error]], [[Real World and Model World]], [[Statistical Model]], [[Greek Letters and Notation]]

## Connections
- **Part of:** [[MOC - Course Readings]]
- **Previous:** [[Guthery and Bingham 2007]] · **Next:** [[Hobbs and Hooten 2015 Ch2]]
