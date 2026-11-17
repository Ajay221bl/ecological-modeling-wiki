---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Full path"
  - "Hard-coded path"
status: seedling
---

# Absolute Path

**In one line:** an absolute path gives a file's complete address from the top of the computer's drive, so it is valid on that one computer only.

> [!info] Before this, it helps to know
> [[Working Directory]] (the alternative starting point)

## The everyday picture
Directions that start "from my front door". Perfect for you. Useless to anyone living anywhere else.

## Start from zero
1. **It starts at the drive root:** `C:/Users/ajay/Desktop/proj/data/birds.csv` or `/Users/ajay/...`.
2. **It works wherever R's working directory is,** on that machine.
3. **It contains your username and folder layout.**
4. **So it breaks on every other computer,** and on yours when you rename a folder.
5. **Legitimate uses are rare:** a shared server location, or a URL (which is an absolute address everyone can reach).

## Common confusions
- **"It works, so it's fine."** It works for exactly one person.

## Explain it back
- What in an absolute path makes it non-portable?

*Pass test:* you can spot an absolute path and say why it will fail elsewhere.

## Connections
- **Builds on:** [[Working Directory]]
- **Leads to:** [[Relative Path]], [[here()]]
- **Part of:** [[MOC - Reproducible Coding and Figures]], molecular note [[Relative vs Absolute Paths]]

## Flashcards

What is an absolute path?
??
A file's full address from the root of the drive, valid only on that computer.
++++
