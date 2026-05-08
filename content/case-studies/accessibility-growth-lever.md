---
title: Accessibility as a Growth Lever
subtitle: A drift problem, a federal contract.
role: Led program
year: "2024-2026"
order: 3
summary: VPAT 2.5, AudioCARE 508 compliance, federal market opened. Governance shift, CI/CD linting, and a No New Debt policy.
metric: "881→71"
metricLabel: "violations"
tldr: "Artera was locked out of the federal market by Section 508 non-compliance. I led the program that shipped VPAT 2.5, moved AudioCARE to 508 compliance, and dropped active violations from 881 to 71. The work opened federal conversations that were not available a year earlier."
stats:
  - value: "881→71"
    label: "Active violations"
  - value: "92%"
    label: "Reduction"
  - value: "Federal"
    label: "Market opened"
---

## Context

Artera is the patient communication platform most large health systems use to reach their patients. I run product design. When I joined, accessibility was treated as a compliance task: a box to check before release, owned by nobody in particular. It needed to be a growth strategy. The federal market was locked behind Section 508, and without a credible VPAT we were not going to win those contracts.

## The problem

The problem was not one broken screen. It was a mechanism. Our design system ran on a shared-ownership model, which let any team detach a standard component and hard-code a variation. Over twelve months of one-off changes, components had drifted across the product.

The result was a fleet of zombie components: visually correct, structurally broken. Screen readers hit dead ends. Keyboard users got trapped. And none of it was visible from a product review.

## The audit

I started with an internal audit so we would know what we actually owned. Manual testing surfaced a few hundred violations and made clear we needed a harder look. We brought in a professional external auditor to catalog the full surface. They found 881 active violations.

The number mattered less than the pattern: the same detachment cycle kept generating new debt faster than any team could pay it down. Point fixes were not going to work.

## The program

So we built a program. We shipped Artera's formal VPAT 2.5 in December 2025 against WCAG 2.0 AA. In parallel, we moved the design system from shared ownership to federated stewardship, the governance shift that made the rest of this executable.

We installed accessibility linting in CI/CD, so a build fails without proper labels and roles before a human ever sees it. We put a No New Debt policy in place: if a team touches a file, they upgrade any legacy components inside it. I updated the design Definition of Done so annotations for interaction and accessibility are written in Figma before engineering picks the work up.

Legal, engineering, and design all had a seat. I led the program; the team shipped it.

## What it unlocked

The work opened the market. AudioCARE reached 508 compliance in April 2026, and the sales team is now in federal conversations that were not available to us a year ago. Across the platform, active accessibility violations dropped from 881 to 71, a 92% reduction. We support all of WCAG 2.0 AA and most of 2.1. New violations surface at the pull request, not at audit time, so the curve stays flat instead of climbing back.
