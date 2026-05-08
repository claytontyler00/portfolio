---
title: Specialty Intake Service Blueprint
subtitle: Mapping the digital front door for 48 specialty practices.
role: Authored
year: "2026"
order: 1
summary: EHR-portable map of the intake journey across 48 specialty practices. The squad's shared model for agent, UI, or workflow automation decisions.
metric: "48"
metricLabel: "practices"
tldr: "Took on a new AI squad serving 48 specialty healthcare practices. In ten days I built the research, synthesis, and service blueprint the squad uses as its shared model. The blueprint is EHR-portable across athenaOne, eCW, NextGen, and specialty-native systems, and it's the reason we know what to ship first."
stats:
  - value: "48"
    label: "Specialty practices"
  - value: "9"
    label: "Builders on the squad"
  - value: "10+"
    label: "Intake journey phases"
---

## Context

Artera is a B2B2C patient communication platform serving health systems and practices. In May 2026 I moved from Director of Product Design into a Head of AI role leading a new squad chartered by the CEO to serve 48 specialty practices across orthopedics, pain, GI, cardio, ophthalmology, behavioral health, OB/GYN, urology, radiology, and oncology.

Specialty intake is the digital front door: registration, eligibility, prior auth prep, pre-visit clinical data, records retrieval, consents, and financial collection. It is also the part of the platform we understood the least.

## The problem

We had a 9-builder squad, a CEO-level mandate, an agent-first charter, and no shared model of the work we were trying to change. Nobody on the squad could answer the question that came up every week: should this be an agent, a UI, or a workflow automation? Without a common map of the intake journey, every capability bet would be argued from anecdote.

## Research and ramp

In my first ten days I wrote a ramp plan and worked it. I authored four research briefs on the segment, each with an exec summary and a deeper version, covering the specialty landscape, the EHR terrain, the intake workflow itself, and the cohort.

I wrote a synthesis memo pulling the briefs into a point of view on where the squad should play. I did an account-by-account pass on the 48-practice cohort to pressure-test segment assumptions against real deployments. I drafted a squad primer and scoped the seven decisions I owned in week one.

The goal of the ramp was not to look prepared. It was to earn the right to draw the map.

## The artifact

The Specialty Intake Service Blueprint is a single Figma document that holds current-state and future-state in the same frame. Six swim lanes run across more than ten journey phases: patient emotion, frontstage human, frontstage digital, backstage, support systems, and pain points. The future-state layer shows where agents, UI, and workflow automation each belong in the journey.

It is written to be EHR-portable across athenaOne, eCW, NextGen, and specialty-native systems, because the cohort is not homogenous and a blueprint tied to one EHR would not survive contact with the accounts we actually serve. The 3168x4380 master frame carries a legend and annotated cards, and a source-of-truth markdown version lives next to the file so the blueprint stays legible outside Figma.

## What it unlocked

The blueprint became the squad's shared model within the first month. When we debated whether a piece of work should be an agent or a UI, we pointed at the same picture.

It made our first capability bet defensible: Phase 3 and Phase 4, pre-registration and eligibility, which the blueprint showed as the densest concentration of backstage effort and patient friction across the cohort.

It gave implementation and engineering a common frame for scoping, gave product a place to stage future bets against, and gave me something to hand the CEO that explained what the squad was building toward without a deck. The squad is weeks old and nothing has shipped yet. The blueprint is the reason we know what to ship first.
