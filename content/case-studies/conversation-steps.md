---
title: Conversation Steps
subtitle: A multi-step patient care journey builder, shipped with Sansum Clinic.
role: Designer
year: "2022-2023"
order: 6
summary: Multi-step patient care journey builder shipped with Sansum Clinic. Diary studies, prototype testing, self-service authoring.
metric: "40%"
metricLabel: "no-show drop"
tldr: "Healthcare communication teams were building ten separate automations to cover one patient journey, because the existing tool had no concept of a multi-step flow. I led the design, research, and prototype testing for Conversation Steps, which shipped with Sansum Clinic as launch partner and reduced no-shows by 40%, inbound call volume by 25%, and build time by 75%."
stats:
  - value: "40%"
    label: "No-show reduction"
  - value: "25%"
    label: "Call volume drop"
  - value: "75%"
    label: "Build time cut"
---

## Context

Artera is a B2B2C patient communication platform that automates conversations along the entire patient lifecycle via SMS and phone. Of those communications, integrated clinical workflows are the most complex: a single endoscopy prep journey can span sixty-plus days with reminders, prep instructions, insurance validation, legal logistics, day-of checklists, and post-procedure follow-up.

Every one of those steps is a trigger tied to events in the EHR, and every step changes if the patient is a minor, or if it is an emergency, or if they have multiple procedures. Clinical communication is really complex, and errors carry real patient-safety and financial consequences.

![An example patient care journey across 60+ days](/case-studies/conversation-steps/cs-slide-03-image9.png)

## The problem

Automated communication was inconsistent and time-consuming for providers. Patients missed critical steps because of unclear or delayed messages, which drove avoidable complications and higher readmission rates.

Providers were building between two and ten separate conversations per journey, each tied to a different trigger, with no awareness of each other. Keeping track of those flows was painful. Many customers were so frustrated they leaned on their CSMs to build the flows on their behalf.

## Research

We started with internal stakeholder interviews and CSM sessions, then surveyed a subset of customers who were building flows themselves. We learned that providers were losing visibility into where patients were falling off, and that silo'd triggers were firing when they shouldn't. We also learned that many steps were identical across flows but had to be rebuilt by hand every time, because there was no concept of a reusable block.

To quantify build time, I ran a diary study with CSMs who were actively implementing new conversations for customers. Over two weeks, they captured how long each journey took to author. The findings matched the interviews. A single flow for one customer took over an hour of focused build time, and that was before testing, planning, or content reviews. For a single large health system with 100+ flows, the math stopped working.

![Diary study results: active time vs total time, and build time by flow type](/case-studies/conversation-steps/cs-slide-06-image4.png)

![Build-time breakdown across flow types](/case-studies/conversation-steps/cs-slide-06-image6.png)

## Ideation and design

We ran a design studio against every problem statement from research. The resulting pattern was a layer on top of the existing conversation tool: interconnected time and event-based triggers tied to EHR events, with each step carrying its own subsequent conversation flow for the patient to respond through.

![Design studio artifacts: problem statements, opportunity mapping, concept sketches](/case-studies/conversation-steps/cs-slide-07-image15.png)

With steps, the workflow became a unified journey where you configured the overarching flow first, then composed the steps inside it. Contextual triggers could wait for prior messages to finish before launching the next one, which eliminated the race conditions that were silently breaking communications before.

![Workflow model: overarching journey, steps inside it, event-aware triggers](/case-studies/conversation-steps/cs-slide-08-image2.png)

![Step cards composed inside a unified journey](/case-studies/conversation-steps/cs-slide-08-image5.png)

## Prototype testing

I built a prototype and split testing between first-time users and experienced ones, because getting to self-service meant the IA needed to be legible to someone who had never touched the product.

![Prototype test screens: end-to-end build experience](/case-studies/conversation-steps/cs-slide-09-image8.png)

We tested the end-to-end build experience, asking users to compose a new conversation from scratch. We validated discoverability, the ability to configure time or event triggers, and the resulting workflow next-step logic. Ease ratings and task success rates were high. Friction points showed up at the step card itself, so we refined the visual grammar of the trigger and added controls for quickly duplicating a step when edits were minimal.

![Refined step card: clearer trigger grammar, duplicate control](/case-studies/conversation-steps/cs-slide-10-image10.png)

We also added quick actions to import templates for conversational phrases that teams write constantly: security validation, emergency fallouts, wayfinding logistics.

![Quick-action templates for reusable conversational phrases](/case-studies/conversation-steps/cs-slide-10-image13.png)

## Outcome

Every beta customer built a multi-step flow and deployed it without assistance from CSMs in production. That was the self-service unlock the business case was built on.

The first Sansum Clinic flow drove a **40% reduction in no-show appointments**. Call volume for pre-visit questions and status checks dropped **25%**, which freed admin staff to handle more patients. And compared to the diary-study baseline, time to build a new multi-step flow fell **~75%**.

The customer quote that stuck with me came from our launch partner:

> Conversation Steps has been our Swiss army knife of a solution for some of the challenges we've faced. It has been life changing.
>
> Sansum Clinic, Santa Barbara, CA
