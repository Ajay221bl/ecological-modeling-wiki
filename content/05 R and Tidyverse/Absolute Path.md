---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "An absolute path gives a file's complete address from the top of the computer's drive, so it is valid on that one computer only."
aliases:
  - "Full path"
  - "Hard-coded path"
status: seedling
---

# Absolute Path

Directions that start "from my front door" are perfect for you and useless to anyone living anywhere else. An **absolute path** gives a file's complete address from the top of the computer's drive, such as `C:/Users/ajay/Desktop/proj/data/birds.csv` or `/Users/ajay/...`. It works wherever R's [[Working Directory]] happens to be, but only on that one machine.

It contains your username and folder layout, so it breaks on every other computer, and on yours when you rename a folder. Legitimate uses are rare: a shared server location, or a URL, which is an absolute address everyone can reach.

"It works, so it's fine" is the trap: it works for exactly one person. The portable alternative is a [[Relative Path]] from a project folder, ideally built with [[here()]].

## Connections
- **Builds on:** [[Working Directory]]
- **Leads to:** [[Relative Path]], [[here()]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]], molecular note [[Relative vs Absolute Paths]]

## Flashcards

What is an absolute path?
??
A file's full address from the root of the drive, valid only on that computer.
++++
