---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
aliases:
  - "make_stancode()"
  - "stancode()"
  - "make_standata()"
  - "Reading brms Stan code"
status: seedling
---

# brms-generated Stan Code

**In one line:** brms translates a model formula into a full Stan program, which you can print with `make_stancode()` to see exactly what model and priors it fits.

> [!info] Before this, it helps to know
> [[brms]] · [[Stan Program Blocks]]

## Start from zero
1. **`make_stancode(formula, data, family, prior)`** prints the Stan code without fitting.
2. **`make_standata()`** shows the data list brms would pass.
3. **What you will see:** a design matrix X, centred predictors, non-centred random effects (`z_1`, `r_1_1`), default priors such as student_t(3, ...) on intercepts and SDs.
4. **Use it to learn Stan** from models you already understand.
5. **Use it to start a custom model:** copy, then edit.

## In R
```r
code <- brms::make_stancode(Reaction ~ Days + (1 | Subject), data = lme4::sleepstudy)
length(strsplit(code, "\n")[[1]])   # lines of Stan written for you
```

## In the course
Stan labs ([[Course Website]]). [[brms]].

## Common confusions
- **"brms uses a different engine."** It writes and runs Stan.

## Explain it back
- How do you see brms's priors without fitting?

*Pass test:* you can print and read brms's Stan code.

## Connections
- **Builds on:** [[brms]], [[Stan Program Blocks]]
- **Leads to:** [[Non-centered Parameterization]], [[Default Priors in brms]]
- **Part of:** [[MOC - Stan]], molecular note [[Stan vs brms vs JAGS]]

## Flashcards

Which brms function prints the Stan code for a model?
??
make_stancode().
++++
