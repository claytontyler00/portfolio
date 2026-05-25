---
title: Specialty Intake Service Blueprint
subtitle: Standing up an AI squad and authoring its founding artifact.
role: Head of AI and designer
year: "2026"
order: 1
nextSlug: pacemaker-federated-prompt-ready
summary: An EHR-portable service blueprint for a new AI squad serving 50 specialty practices. The shared model the squad uses to argue capability bets and the artifact I hand the CEO instead of a deck.
metric: "$3.78M"
metricLabel: "CARR served"
tldr: "In May 2026 the CEO chartered a new squad with no shared model of the work. I took the Head of AI seat, picked a 10-builder squad in two days, and authored an EHR-portable service blueprint in eight more. The blueprint scoped the first capability bet to pre-registration and eligibility, ruled out leading with voice deflection, constrained the cost-estimate workflow to a rules engine instead of an LLM because No Surprises Act estimates have to be regulator-defensible, and named records retrieval as the long-term moat against agent-native incumbents."
stats:
  - value: "$3.78M"
    label: "CARR served"
  - value: "50"
    label: "Specialty practices"
  - value: "12"
    label: "Intake phases mapped"
---

## Context

Artera is a B2B2C patient communication platform serving health systems and practices. In May 2026 the CEO chartered a new squad to serve 50 specialty practices across roughly twenty specialties (orthopedics, internal medicine, family practice, neurology, ophthalmology, OB/GYN, urology, radiology, oncology, and others), worth $3.78M in CARR, with an agent-first product mandate. I moved from Director of Product Design into the Head of AI seat with GM-style ownership of the squad. I held the design seat as well. The squad absorbs design into its roles rather than carrying separate design headcount: at ten people shipping agent-first product, a design role that is not also a builder costs more than the headcount math returns.

Specialty intake is the digital front door. Registration, eligibility, prior authorization prep, pre-visit clinical data, records retrieval, consents, financial collection. It is also the part of the platform Artera understood the least going in.

## The problem

Three things were true on day one. The squad did not exist yet. The cohort had never been served by a dedicated team. Nobody at Artera could answer the question that would come up every week: should this be an agent, a UI, or a workflow automation?

Without a shared model, every capability bet would get argued from anecdote. Without an EHR-portable model, every bet would get argued against athenaOne's roadmap and lose, because athena ships first-party intake faster than we ever will inside their own stack.

## Building the squad

I picked the roster by skill set, not by available headcount. The squad needed to stand up an agent end-to-end without a handoff: customer context, product framing, model behavior, the data feeding it, and the deployment running it. I pulled four professional services and support builders who had lived inside specialty implementations, two engineers, a data scientist, an ML engineer, and a product manager. I held the design seat and ran the squad. Nine builders plus me. Every layer of an agent-first product covered. No role on the org chart that exactly matched what each person was now responsible for, because every person had moved laterally into a role that did not exist when they were hired.

## The ramp

Ten days. Four research briefs. Fifty accounts read end to end. Seven decisions to close.

I wrote each brief in two versions, an exec summary and a deep-research version, covering the patient journey and agentic opportunities, the athenaOne intake stack, the competitive landscape (Hippocratic, Assort, Hyro, Hello Patient, Parakeet on voice; Relatient and Phreesia on the broader category; Tennr on referrals), and the Health iPass legacy product I would have to deprecate. I wrote a synthesis memo pulling the four briefs into a point of view on where the squad should play. I did an account-by-account read on the 50 cohort practices to pressure-test segment assumptions against real deployments. I drafted the squad primer and scoped the seven decisions for week one: specialty-priority order, Health iPass resolution, athena partner pursuit, first agentic build, competitive posture, security and compliance program scope, and cross-EHR Day-1 commitment.

I did the reading before I drew the map. The blueprint cites the briefs inline so any builder who disagrees with a future-state decision can trace it back to the source paragraph and argue against the underlying claim, not against me.

## The artifact

![Master frame of the Specialty Intake Service Blueprint, current state on top and future state below across twelve phases and six swim lanes.](/case-studies/specialty-intake-service-blueprint/hero-blueprint.png)

I authored the Specialty Intake Service Blueprint as a single Figma document holding current-state and future-state in the same frame. Six swim lanes run across twelve phases of the intake journey: patient emotion, frontstage human, frontstage digital, backstage, support systems, and pain points. The future-state layer marks where agents, UI, and workflow automation each belong. Six of the twelve phases are in scope for the squad. Six are out of scope and still mapped, because intake friction lives in the handoffs between phases as often as it lives inside any single phase.

![Legend: emotion glyphs, sticky-color taxonomy, future-state agent conventions, build-attribution badges.](/case-studies/specialty-intake-service-blueprint/legend.png)

I picked a service blueprint over a Wardley map, a JTBD tree, or a capability model on three grounds. A capability map would have hidden the human handoffs that drive intake friction. A JTBD tree would have hidden the operational stack the squad's bets had to fit into. A Wardley map would have framed the work in terms of evolution toward commoditization, which is the wrong frame for a category athena is building first-party in parallel with us, on a faster integration timeline than we can match.

The blueprint is EHR-portable across the cohort's roughly twelve EHRs (athenaOne, NextGen, eClinicalWorks, athenaPractice, Veradigm, Greenway, MEDITECH, ModMed, MedInformatix, AdvancedMD, and others). Anything tied to athenaOne specifically would not survive contact with the other eleven. The 3168x4380 master frame carries a legend and annotated cards. A source-of-truth markdown sits alongside the Figma file so the artifact stays legible outside the canvas and the squad's PM can grep it.

## What the blueprint argued for, and against

![Future-state Phase 3 and Phase 4. Registration agent fills known data and asks for deltas only. Eligibility agent runs on appointment-create at T-5 and T-1. NSA/GFE rules engine produces the dollar amount; the LLM never generates the number.](/case-studies/specialty-intake-service-blueprint/phase-3-4-future-state.png)

The first capability bet sits in Phase 3 and Phase 4: pre-registration and eligibility. The blueprint maps those phases as the densest concentration of backstage staff effort and patient friction across the cohort. Records retrieval at Phase 7b is the long-term moat. Tennr owns the fax and referral layer, Artera owns the patient channel, and the patient channel is what closes the loop when a prior provider does not respond after escalation. Tennr would have to rebuild a patient communication platform under their referral layer to match it, which I am betting they will not do inside a 12-month window.

![Future-state Phase 7b records retrieval. A three-stage agent pipeline: trigger and identify records needed, execute outreach across providers via fax and call and the patient channel, escalate to write-back.](/case-studies/specialty-intake-service-blueprint/phase-7b-records-retrieval.png)

I argued against leading with voice-scheduling deflection. Five competitors (Hippocratic, Assort, Hyro, Hello Patient, Parakeet) have shipped voice to production in the last 18 months. Relatient Dash markets 60% deflection. Athena is building voice first-party. None of the five customer conversations I held during ramp put voice deflection in their top intake pain points. The rejection sits explicitly in the blueprint, with the customer-research evidence beside it, so the squad does not relitigate it on every customer call.

The Phase 4 cost-estimate workflow is constrained to a rules engine, not an LLM. The No Surprises Act requires regulator-defensible Good Faith Estimates, so the dollar amount has to be hard-coded and auditable. The LLM handles plain-English explanation, patient Q&A, language adaptation, and payment-plan framing. The LLM never generates the number. The separation is encoded as a P0 design constraint on every Phase 4 agent the squad ships.

Phase 6 mental-health screening carries a separate P0 safety constraint: no LLM autonomy on positive C-SSRS responses, a five-minute human-clinical SLA, a 988 fallback in the failure path. The constraint is encoded visually in the blueprint so it cannot get lost in a sprint review.

athenaOne's FHIR QuestionnaireResponse API is create-only, with no read or search. That forces Artera to own longitudinal PRO state instead of treating athena as the system of record, and it makes the 300-day post-op CMS-mandated PRO collection a place where Artera owning the longitudinal record is the unlock, not athena's roadmap.

## What I would do differently

The four research briefs were exec-summary-first, and the squad's ability to debate the blueprint turned out to depend on whether each builder had actually walked through the deep version, not the synthesis. I should have run a 90-minute deep-research walkthrough in week two with the blueprint open, so every builder could see how the synthesis was earned. Without that walkthrough the blueprint had authority the squad could not yet defend on customer calls.

I should have shipped a customer-specific specialization (a future-state on a single large account on ModMed) alongside the generalized blueprint. The generalized version is harder to use in a customer conversation without a worked example. The worked example is harder to trust without the generalized model behind it. I shipped them three weeks apart. The first set of customer conversations spent more time arguing the abstract model than they should have, because the worked example was not yet there to anchor the discussion in a real account.

## Status

Two Northstar deployments are running, both on NextGen, both selected via the blueprint's cohort-segmentation logic. Phase 3 and Phase 4 prototypes are in build with Sprint 1 closing this week. A customer-specific future-state for a large ModMed account is in pre-implementation review.
