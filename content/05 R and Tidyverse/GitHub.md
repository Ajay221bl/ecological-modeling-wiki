---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Remote repository host"
status: seedling
---

# GitHub

**In one line:** GitHub is a website that stores copies of Git repositories online, so work is backed up, shareable and open to collaboration.

> [!info] Before this, it helps to know
> [[Git]] (the local tool) · [[Repository]] (what is stored)

## The everyday picture
A shared photo album in the cloud. Your camera (Git) takes the pictures. Uploading them to the album lets collaborators see them, add their own, and keeps a copy safe if your laptop dies.

## Start from zero
1. **A repository on GitHub is the "remote" copy.**
2. **You push your commits up and pull others' down** ([[Push and Pull]]).
3. **Each file has a web page showing its full history.**
4. **Public repositories make science checkable.** Papers increasingly link code and data there.
5. **It can serve raw files and websites.** The course website and its data are served straight from a GitHub repository, which is why scripts can read data by URL.

## In the course
The whole course lives in the repository LivingLandscapes/Course_EcologicalModeling ([[Course Website]]). This wiki's public site is built from a GitHub repository too.

## Common confusions
- **"GitHub backs up automatically."** Only what you commit and push arrives there.
- **"Public means anyone can change my work."** Anyone can read and copy it. Only people you authorise can change it.

## Explain it back
- What does GitHub add to Git?

*Pass test:* you can explain local versus remote.

## Connections
- **Builds on:** [[Git]]
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
