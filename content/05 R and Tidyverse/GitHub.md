---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "GitHub is a website that stores copies of Git repositories online, so work is backed up, shareable and open to collaboration."
aliases:
  - "Remote repository host"
status: seedling
---

# GitHub

Your camera takes the pictures; uploading them to a shared online album lets collaborators see them and add their own, and keeps a copy safe if your laptop dies. **GitHub** is that album for [[Git]]: a website that stores copies of Git repositories online, so work is backed up, shareable and open to collaboration. A repository on GitHub is called the *remote* copy; you push your commits up to it and pull others' commits down ([[Push and Pull]]), and every file has a web page showing its full history ([[Repository]]).

Public repositories make science checkable, and papers increasingly link their code and data there. GitHub can also serve raw files and whole websites: the course website and its data are served straight from the repository LivingLandscapes/Course_EcologicalModeling, which is why scripts can read the course data by URL ([[Reading Data from a URL]], [[Course Website]]). This wiki's public site is built from a GitHub repository too. To build on someone else's repository without permission to change it, you make your own copy, a [[Fork]].

Two misconceptions. GitHub does not back up automatically: only what you [[Commit|commit]] *and* push arrives there. And public does not mean anyone can change your work: anyone can read and copy it, but only people you authorise can change it ([[Git vs GitHub]]).

## Connections
- **Builds on:** [[Git]], [[Commit]]
- **Leads to:** [[Push and Pull]], [[Fork]], [[Reading Data from a URL]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Git vs GitHub]]

## Flashcards

What is GitHub?
??
A website hosting online copies of Git repositories for backup, sharing and collaboration.
++++

How does work get from your computer to GitHub?
??
You commit locally with Git, then push the commits to the remote repository.
++++
