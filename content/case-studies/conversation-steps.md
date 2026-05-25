---
title: Conversation Steps
subtitle: A multi-step patient care journey builder, shipped with a multi-specialty clinic launch partner.
role: Designer
year: "2022-2023"
order: 5
summary: Multi-step patient care journey builder shipped with a multi-specialty clinic launch partner. Diary studies, prototype testing, and a self-service authoring model that put providers back in control of their own flows.
metric: "40%"
metricLabel: "no-show drop"
tldr: "Healthcare communication teams were building between two and ten separate automations to cover a single patient journey, because Artera's existing tool had no concept of a multi-step flow. Providers lost visibility into where patients were dropping off, silo'd triggers fired against each other, and a sixty-plus-day endoscopy prep journey took over an hour of focused build time per customer before testing or content review. I led design, research, and prototype testing for Conversation Steps, ran a two-week diary study to quantify the build-time problem, designed the step grammar against a unified journey model, and shipped with a multi-specialty clinic launch partner. The first launch-partner flow drove a 40% reduction in no-show appointments, a 25% drop in inbound call volume, and a roughly 75% cut in time to build a new multi-step flow at that customer (n=1 launch partner; cohort numbers were not consistently instrumented across early customers). Every customer in the 5-to-10 customer beta cohort authored a flow and deployed it without CSM help."
stats:
  - value: "40%"
    label: "No-show reduction"
  - value: "25%"
    label: "Call volume drop"
  - value: "75%"
    label: "Build time cut"
---

## Context

Artera is a B2B2C patient communication platform that automates conversations across the entire patient lifecycle over SMS and voice. The integrated clinical workflows are the most complex part of the platform. A single endoscopy prep journey can span sixty-plus days with reminders, prep instructions, insurance validation, legal logistics, day-of checklists, and post-procedure follow-up.

Every step is a trigger tied to events in the EHR, and every step changes if the patient is a minor, if it is an emergency, or if they have multiple procedures stacked. The errors carry patient-safety and financial consequences, not just CSAT ones, which raised the bar on the authoring tool's defaults beyond anything I had designed before.

![An example patient care journey across 60+ days](/case-studies/conversation-steps/cs-slide-03-image9.png)

## The problem

Automated communication was inconsistent and time-consuming for providers. Patients missed critical steps because of unclear or delayed messages, which providers told us drove avoidable complications and operational follow-up cost.

Underneath the symptom, the tool itself had no concept of a multi-step flow. Providers were building between two and ten separate conversations per journey, each tied to a different trigger, with no awareness of the others. Race conditions were silently breaking communications because a reminder fired before the prior conversation closed. Many customers were so frustrated they leaned on their CSMs to build flows on their behalf, which moved authoring cost onto Artera's CSM headcount and capped how fast new customers could come online.

## Research

We started with internal stakeholder interviews and CSM sessions, then surveyed the subset of customers who were still trying to author flows themselves. Providers were losing visibility into where patients were dropping off. Silo'd triggers were firing when they shouldn't. The same step (security validation, emergency fallout, wayfinding) was rebuilt by hand for every flow because the tool had no notion of a reusable block.

To quantify the build-time problem I ran a diary study with CSMs actively implementing new conversations for customers. Over two weeks they captured how long each journey took to author, broken into active build time and total elapsed time including blocks. The findings matched the interviews. A single flow for one customer took over an hour of focused build time, and that was before testing, planning, or content reviews. A single large health system with 100+ flows would have required several CSM weeks per customer at that throughput, which the unit economics on the platform could not support.

![Diary study results: active time vs total time, and build time by flow type](/case-studies/conversation-steps/cs-slide-06-image4.png)

![Build-time breakdown across flow types](/case-studies/conversation-steps/cs-slide-06-image6.png)

## Ideation and design

We ran a design studio against every problem statement from research. The pattern that came out of it was a layer on top of the existing conversation tool: interconnected time-based and event-based triggers tied to EHR events, with each step carrying its own subsequent conversation flow that the patient could respond through.

![Design studio artifacts: problem statements, opportunity mapping, concept sketches](/case-studies/conversation-steps/cs-slide-07-image15.png)

The workflow became a unified journey where authors configured the overarching flow first and then composed the steps inside it. Contextual triggers waited for prior messages to finish before launching the next one. The race conditions that had been silently breaking communications stopped firing because the trigger model now knew about siblings.

![Workflow model: overarching journey, steps inside it, event-aware triggers](/case-studies/conversation-steps/cs-slide-08-image2.png)

![Step cards composed inside a unified journey](/case-studies/conversation-steps/cs-slide-08-image5.png)

## Prototype testing

I built a clickable prototype and split testing between first-time users and experienced ones. The business case required self-service, so the IA had to be legible to someone who had never touched the product before, not just to the CSMs who already knew it cold.

![Prototype test screens: end-to-end build experience](/case-studies/conversation-steps/cs-slide-09-image8.png)

We tested the end-to-end build experience by asking users to compose a new conversation from scratch. We validated discoverability, the ability to configure time or event triggers, and the resulting next-step logic. Ease ratings and task success rates were high. Friction showed up at the step card itself, so we refined the visual grammar of the trigger and added a duplicate control for when edits between steps were minimal.

![Refined step card: clearer trigger grammar, duplicate control](/case-studies/conversation-steps/cs-slide-10-image10.png)

We added quick actions to import templates for the conversational phrases teams write constantly: security validation, emergency fallouts, wayfinding logistics. The reusable-block pattern from research dropped directly into the authoring surface as quick-action templates.

![Quick-action templates for reusable conversational phrases](/case-studies/conversation-steps/cs-slide-10-image13.png)

## What the bets were

Improving the existing single-conversation tool would have shipped fastest and produced the wrong shape. A patient journey is not one conversation with branching, it is several distinct conversations sequenced across days or weeks. A branching-tree expansion of the old tool would have produced unreadable trees at the lengths these journeys actually run. By week three of an eight-week prep flow the visualization would have stopped fitting on a single screen, and authors would have lost the ability to see the journey end-to-end.

A fully template-driven authoring model where customers picked from a fixed library of journeys would also have shipped faster, and trapped the surface inside Artera's understanding of clinical workflows. The customers I ran research with had clinical edge cases (multi-procedure days, minors, emergency fallouts) that no fixed library would cover. The same frustration that drove customers to lean on their CSMs would have come back as customers running into templates they could not bend to fit a multi-procedure day or a minor.

Leaving authoring with CSMs and selling it as a service was the path of least resistance. It would have capped customer growth on Artera's CSM headcount and turned the product into a distribution channel for human services. Self-service was the unlock the business case was built on, and prototype testing across first-time and experienced authors was what made the IA credible enough to bet on.

## Outcome

Every customer in the 5-to-10 customer beta cohort built a multi-step flow and deployed it in production without CSM assistance. That confirmed the IA worked for first-time authors, which was the bet the business case was built on.

The first launch-partner flow drove a **40% reduction in no-show appointments**. Call volume for pre-visit questions and status checks dropped **25%**, which freed admin staff to handle more patients. Compared to the diary-study baseline, time to build a new multi-step flow fell **~75%** at that customer. The headline numbers come from the launch partner because their team was rigorous about measurement on their side; the next two customers had less instrumentation, and I treat the 40 / 25 / 75 figures as launch-partner outcomes rather than cohort outcomes.

The customer quote that stuck with me came from our launch partner:

> Conversation Steps has been our Swiss army knife of a solution for some of the challenges we've faced. It has been life changing.
>
> Multi-specialty clinic launch partner

## What I would do differently

I scoped the diary study to CSM authors and not to customer authors. The customer-side build experience surfaced friction I caught later in usability testing, and an earlier customer-side diary would have caught it before the prototype was built. CSM data was easier to collect because they were already on Artera Slack, but it was the wrong half of the population to validate a self-service unlock against.

I underweighted the migration story for customers who already had multiple single-conversation flows live in production. The new model was clearly better, and the path to move existing flows onto it was hand-rolled per customer for several quarters longer than it should have been. A migration tool shipped alongside the new authoring surface would have absorbed the CSM time we instead spent moving flows by hand in spreadsheets.

I did not push hard enough on the metrics framework before launch. The 40 / 25 / 75 numbers came from one rigorous launch partner. The next two customers had less instrumentation, so the program reported outcomes from one rigorous launch partner rather than a cohort. A baseline-measurement template shipped with the product (pre-flow no-show rate, pre-flow call volume, build-time stopwatch) would have given the second and third customers the same metrics frame the launch partner brought to the table.

## Status

Conversation Steps remains the multi-step authoring model in Artera. Every workflow surface that landed after it inherited the unified-journey + composable-steps shape, and customers still compose against the reusable-block pattern from research.
