---
title: "Pacemaker: Federated & Prompt-Ready"
subtitle: A design system, a governance shift, an AI substrate.
role: Led design system
year: "2023–2026"
order: 2
nextSlug: native-reporting
summary: Rebuilt Artera's design system twice in nine months. A federated stewardship group that turned every contributing squad into an owner, a prompt-ready substrate that Claude Code, Cursor, and Figma MCP read as ground truth, and an accessibility program that unblocked the federal market.
metric: "881→71"
metricLabel: "violations, 9 months"
tldr: "I rebuilt Pacemaker twice in nine months: once into a federated stewardship model with a named steering group, once into a prompt-ready substrate that Claude Code, Cursor, and Figma MCP read as ground truth. I ran the program that shipped Artera's VPAT 2.5 against a federal RFP deadline. AudioCARE reached Section 508 compliance April 2026 on its own codebase. The May 2026 remediation handoff to a sibling squad held without the standard slipping."
stats:
  - value: "881→71"
    label: "A11y violations"
  - value: "92%"
    label: "Reduction in 9 months"
  - value: "189,259"
    label: "Component insertions"
---

## Context

Pacemaker is Artera's design system. I designed and shipped it from zero to one between 2022 and 2024 against a two-layer token model: a primitive layer and a semantic layer that consumers theme through, with the rule that components only consume semantic tokens so primitives can be repointed without component churn. The agent-readable layer that landed two years later sits on top of that primitive/semantic split.

By the end of that first chapter the library was stable, the rebuild had landed, and 508 compliance was within reach. The system still depended on a small core team to hold the line. The org around it was about to get more complex, and a federal RFP was about to make accessibility a sales-blocking question instead of a quality one.

## The forcing function

A federal RFP required a credible VPAT against WCAG 2.0 AA. Sales could not answer the regulatory questions without it, legal could not sign without remediation in flight, and the procurement window was external to us. I scoped the program around three constraints we could not negotiate: a regulator-defensible audit, a date-anchored VPAT, and a substrate that would not regenerate the same debt the next quarter.

I structured the work as a cross-functional program with a named seat for each constraint. Legal owned VPAT review. Sales held the federal pipeline timing. Eng leadership held remediation throughput. A senior designer ran the AudioCARE Section 508 path on a separate codebase. A senior product designer on my team owned the external audit relationship and remediation execution on the Artera platform. I held scope, sequencing, vendor selection, and the call on what the substrate had to absorb so the program would not have to run forever.

## The problem

The problem was a mechanism, not a screen. Pacemaker ran on a shared-ownership model that let any team detach a standard component and hard-code a variation. Twelve months of one-off changes produced a fleet of zombie components: visually correct, structurally broken, invisible from a product review. Screen readers hit dead ends. Keyboard users got trapped. The detachment cycle generated new debt faster than any team could pay it down.

I ran an internal manual audit so I would know what we owned. The audit made clear the surface was bigger than internal effort could catalog credibly, so we engaged an external auditor. The Deque audit returned 881 active violations.

![The problem state, roughly 900 violations and the shared-ownership detachment cycle that generated them.](/case-studies/pacemaker-federated-prompt-ready/pm-slide-14-image17.png)

The pattern mattered more than the number. Point fixes were not going to work. Artera was scaling product surface area faster than a central team could absorb, AI coding tools were entering engineering workflows, and leadership was betting on federal expansion. A design system that needed a gatekeeper would either bottleneck the platform roadmap or decay again the next quarter.

I made the call that Pacemaker had to stop being a product the core team shipped to everyone else and start being infrastructure every squad contributed to. Ownership and the technical substrate both had to change inside the same nine-month window the federal RFP set.

## Two arcs, one program

The work split into two arcs. A governance arc moved ownership out of the core team. A technical arc made the system legible to coding agents. They had to land in the same nine-month window because federation without an agent-readable substrate would have produced a contribution surface no one could scale into, and an agent-readable substrate without federation would have collapsed under the same shared-ownership detachment cycle inside a quarter.

### Governance: federated stewardship

I named a steering group with a defined decision-making model instead of a rotating tour of duty. A principal engineer and a staff engineer led ongoing Pacemaker enhancements. An eng manager and a senior PM held adjacent accountability. The senior product designer on my team owned the external audit relationship and remediation execution. Each seat had a defined decision scope so accountability did not diffuse into a committee, and no single person could become the bottleneck.

![External audit scope and the zombie-component cycle the audit surfaced.](/case-studies/pacemaker-federated-prompt-ready/pm-slide-16-image1.png)

The mechanism ran on three rules: the steering group owned the standard, contributing squads upgraded any legacy component they touched, and any net-new pattern landed through a contribution PR the steering group reviewed against the same accessibility contract primitives had to meet. Squads that had never directly worked with the core team began landing contribution PRs against the same contract primitives held to.

![The federated stewardship governance model: steering group on the standard, contributing squads on the surface.](/case-studies/pacemaker-federated-prompt-ready/pm-slide-17-image19.png)

### Substrate: prompt-ready

Component names, props, and tokens went to strict parity between the Figma library and the repo so a reference in one surface resolved cleanly in the other. The two-layer token model from the first chapter made that parity tractable. Components consume semantic tokens, primitives move underneath them without breaking consumers, and the names stay stable on both sides.

I authored the Context Files that function as the system's instruction manual for AI coding tools. Fifteen files in the product-design rules directory, one per primitive plus a `_conventions.md` that names the omitted Material UI props, the rule to check `componentProperties` first, and the canonical Figma library file key. Claude Code and Cursor read those files directly. I stood up Figma MCP servers with engineering that bridge the live design file to the codebase, so an agent generating a `<TextField>` resolves against the same component contract a designer is editing in Figma.

![A Context File excerpt: a Pacemaker primitive with its accessibility contract, prop table, and usage guidelines, formatted for agent consumption.](/case-studies/pacemaker-federated-prompt-ready/pm-slide-18-image18.png)

I extended the Definition of Done. Designers write interaction specs and a11y annotations directly in Figma, formatted for MCP consumption downstream. Engineering paired that with a No New Debt policy and CI/CD accessibility linting on every PR. Builds fail in CI on missing labels and roles before review.

### Where the arcs interlock

The accessibility contract that primitives meet is the same contract Context Files document for agents, the same contract a contributing squad's PR is reviewed against, and the same contract the No New Debt CI gate enforces at merge. A contributing engineer, a coding agent, and the steering group are all reading from one source of truth. The federation arc supplied the reviewers and the rule; the substrate arc supplied the machine-legible artifact those reviewers and that rule operate on. Either one without the other would have produced a system that contributors and agents could not both land into.

## What the program ruled in, and out

A quarterly engineer rotation through the core team was tempting and would not have worked. The surface area we needed to govern was too broad, the bench was too thin to take a contributing engineer out of their squad twice a year, and the rotation pattern doesn't actually distribute ownership so much as it staffs the core team in shifts. A small accountable steering group with written contribution rules was the smaller instrument that actually moved ownership out of the core team.

A generic "AI-friendly design system" framing was the other tempting move. The substrate is not a frame, it is a list of specific files: Context Files at known paths, MCP that exposes the actual Figma library, parity rules at the prop and token level, the `_conventions.md` file. Without those four pieces a coding agent does not produce a `<TextField>` it can land on first try.

The accessibility contract sits inside the system, not on top of it. Annotations are written in Figma so engineering inherits them. Linting fires in CI so regressions get caught at PR time. The No New Debt policy means any team that touches a file pays down the legacy pattern in it. The external audit became a periodic check on the system rather than the queue remediation pulled from.

I split procurement from engineering on the VPAT. The first VPAT answered the regulator-facing questions on the RFP timeline. The second post-remediation VPAT documented closed gaps. Splitting the procurement instrument from the engineering instrument let sales answer questions on the federal clock while engineering remediated on the audit clock.

## Outcomes

Active accessibility violations dropped from 881 to 71 over nine months, a 92% reduction. Two forces drove the curve: audit-driven remediation paid down legacy debt, and the federation contract plus the No New Debt CI gate prevented the detachment cycle from regenerating new debt at PR time. Without the No New Debt CI gate the curve would have flattened against new violations regenerating at PR time. We support all of WCAG 2.0 AA and most of 2.1. VPAT 2.5 shipped December 2025 against WCAG 2.0 AA. AudioCARE reached Section 508 compliance April 2026 on its own codebase. Sales opened federal conversations that were not available to them a year earlier.

The Pacemaker Figma library logs 189,259 lifetime component insertions across Artera. I trust insertion volume over component-coverage scores because it measures whether using the library is cheaper than rolling your own, which is the test a federated system has to pass for any contributing squad to keep using it.

The May 2026 accessibility remediation handoff moved ongoing remediation to a sibling squad. The sibling squad landed their first contribution PR against the same accessibility contract inside two weeks of the handoff, without a single point fix from the steering group to keep them on standard.

## What I would do differently

I rolled the governance change and the prompt-ready rebuild concurrently. Inside the work the two arcs competed for the steering group's attention. The first round of contribution PRs sat in review longer than they should have, because the group was deep in MCP and Context File work. Next time I would sequence them: ship the federation, run it for a quarter to prove the steering group can hold the standard without me, then start the substrate rebuild.

The original VPAT deadline was October 31, 2025. We shipped in December. I under-budgeted remediation throughput against the audit-finding volume, and the buffer disappeared the week a key engineer was out. Sales held the federal pipeline because the procurement-instrument split gave them a credible interim answer. A tighter remediation-buffer plan up front would have spared the December scramble.

I underdocumented the contribution rule. The steering group held the standard in their heads, which worked while the group was small and shared a Slack channel, and slowed the first round of contribution PRs from squads outside that loop. The contribution rule should have been written down in the same week the governance group was named.

The Context Files started component-by-component, which let me ship them quickly and produced inconsistencies in the prop tables that I had to clean up later. A `_conventions.md` written first, then primitives written against it, would have saved the rework.

## Status

The federated steering group owns the standard. Pacemaker is the substrate the squad I now lead is building on top of: the Specialty Intake squad's first capability bets read the same Context Files, hit the same MCP, and inherit the same accessibility contract.
