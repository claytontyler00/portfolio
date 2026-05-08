---
title: "Pacemaker: Federated & Prompt-Ready"
subtitle: A design system, then a governance rotation, then an AI substrate.
role: Led design system
year: "2023–2026"
order: 2
summary: Rebuilt the Artera design system as federated infrastructure and an AI substrate. Context Files for Claude Code and Cursor, MCP servers, Figma-to-repo parity.
metric: "881→71"
metricLabel: "violations"
tldr: "Pacemaker started as a failing shared-ownership design system with 881 accessibility violations. I rebuilt it twice: first into Federated Stewardship, a rotating contributor model that turned every squad into a steward, then into a prompt-ready substrate that AI coding tools could read directly. 508 compliance opened the federal market, and engineers working with Pacemaker plus Claude Code report their first-pass code lands production-ready."
stats:
  - value: "881→71"
    label: "A11y violations"
  - value: "508"
    label: "Compliant"
  - value: "Federal"
    label: "Market opened"
---

## Context

By the end of the first chapter, Pacemaker was stable. The rebuild had landed, 508 compliance was within reach, and the component library was clean enough that designers and engineers actually wanted to use it. The problem was that "stable" is not the same as "durable." The system still depended on a small core team to hold the line, and the organization around it was about to get more complex.

## The shift

Artera was scaling product surface area faster than a central team could absorb. New squads were forming, AI coding tools were entering engineering workflows, and leadership was betting on federal expansion. A design system that needed a gatekeeper would either become a bottleneck or quietly decay again.

I made the call that Pacemaker had to stop being a product the core team shipped to everyone else, and start being infrastructure every squad contributed to. Ownership and the technical substrate both had to change.

![The problem state: ~900 violations, shared-ownership detachment cycle](/case-studies/pacemaker-federated-prompt-ready/pm-slide-14-image17.png)

## Federated Stewardship

We built a rotation. Each quarter, one product engineer from a squad joined Pacemaker as a Core Champion for two quarters, shipping fixes and net-new components alongside the core team. At the end of that tour they rotated back to their squad as a Pacemaker Evangelist, carrying the patterns, the rigor, and the relationships with them.

![External audit scope and zombie-component cycle](/case-studies/pacemaker-federated-prompt-ready/pm-slide-16-image1.png)

The effect compounded quickly. Within two rotation cycles, every active squad had at least one former Champion embedded in it, and contribution PRs started arriving from squads we had never directly trained.

![Federated Stewardship rotation diagram](/case-studies/pacemaker-federated-prompt-ready/pm-slide-17-image19.png)

## Prompt-Ready Design System

In parallel, we rebuilt Pacemaker to be legible to machines. Component names, props, and tokens achieved strict parity between Figma and the repo, so a reference in one surface resolved cleanly in the other.

We stood up MCP servers that bridged Figma directly to the codebase, and I wrote Context Files that function as instruction manuals for Claude Code and Cursor: what Pacemaker is, how it is structured, which components to reach for in which scenarios, and what the accessibility contract looks like. AI tools stopped guessing and started pulling from the real system.

![Context File sample: Page Header component with accessibility contract and usage guidelines](/case-studies/pacemaker-federated-prompt-ready/pm-slide-18-image18.png)

## Proactive prevention

We updated the Definition of Done so designers now write interaction specs and accessibility annotations directly in Figma, formatted for MCP consumption downstream. Engineering paired that with a No New Debt policy and CI/CD accessibility linting on every PR, so regressions get caught before merge rather than discovered in audit.

The combination moved accessibility from a remediation project to a property of the build pipeline.

## Outcomes

Accessibility violations dropped from 881 to 71, a 92% reduction, and 508 compliance unlocked the federal market for Artera. Engineers working in the Pacemaker + Claude Code loop report first-pass code landing production-ready instead of as a starting point, with internal surveys showing meaningful velocity lift on component-heavy work.

Designers build faster in Figma and Figma Make, and handoff needs less back-and-forth to align. The system is no longer something a core team defends. It is something the organization runs on, and something our AI tools can read.
