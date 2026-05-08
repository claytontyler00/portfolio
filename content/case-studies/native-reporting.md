---
title: Native Reporting
subtitle: Artera's first in-product analytics surface.
role: Sole designer
year: "2024"
order: 4
summary: Artera's first in-product analytics surface. Home Dashboard and Analytics Bites patterns now reused across agent and campaign views.
metric: "GA"
metricLabel: "Oct 2024"
tldr: "Artera's reporting lived in Looker, which meant customers had to leave the product to act on their own data. I was sole designer on Native Reporting from research to GA, partnered with a principal engineer to reface the chart library, and defined the Home Dashboard and Analytics Bites patterns now reused across the platform. The beta model we used later became the template for Artera's AI agents program."
stats:
  - value: "Aug 2024"
    label: "Beta"
  - value: "Oct 2024"
    label: "GA"
  - value: "Sole"
    label: "Designer"
---

## Context

Artera is the patient communication platform used across many of the largest health systems in the US. For years, reporting lived exclusively in Looker. Customers could get to the data, but they couldn't act on it inside the product where their work actually happened.

By early 2024, our largest health systems needed a native analytics surface: something that showed communication outcomes, campaign performance, and operational metrics directly in Artera.

## The problem

Looker did its job as a data warehouse front-end, but it wasn't where health systems ran their day. Admins had to leave Artera, reorient inside a different tool, and translate what they saw back into decisions about campaigns, templates, and staffing.

The data was technically available and practically inert. Customers told us repeatedly that they wanted answers in context, next to the workflows those answers were supposed to change.

## Research

I pulled telemetry on our top Looker viewers and worked from that list. I interviewed the heaviest users alongside a set of customer segments we wanted represented, and ran deeper discovery with UnityPoint as our design partner.

The pattern was consistent. Health systems didn't want a dashboarding tool. They wanted a small set of clear answers about message deliverability, campaign response, and staff workload, visible where they already worked. That reframed the problem from "port Looker" to "design the smallest useful analytics surface Artera can own."

## Design approach

I was the sole designer on this one and owned it end-to-end. I evaluated chart libraries against accessibility, customization, and performance, and picked the one that could carry us for years. From there, I partnered with Geoff Lawson, a principal engineer, to reface the library: we swapped its styling and tokens to Pacemaker, our design system, and tuned everything to WCAG AA contrast.

On top of that foundation I defined two patterns. The Home Dashboard gave each customer a shaped landing view of their most important metrics. Analytics Bites were smaller, embeddable analytics units designed to drop into workflows across the product, not just the reporting page. That second pattern is the one that kept paying off later.

## Launch and iteration

Beta launched in August 2024 with a small cohort. We ran it differently than Artera had run betas before, closer to how AI betas tend to run: tight feedback loops, active opt-in, rolling improvements shipped against real customer use rather than a fixed scope.

GA followed on October 15, 2024. The rollout wasn't entirely clean. We hit split-flag complications post-launch that took real work to untangle. We worked through them with the engineering team and kept the cohort informed while we did. The surface held up, and the beta mechanics held up better than the flag logic did.

## Outcome

Native Reporting shipped as Artera's first in-product analytics surface and is now a standard part of the platform. The Analytics Bites pattern has been reused across agent dashboards and campaign views, and fed the reporting UI kit that other designers pull from today.

The beta model we used set a precedent inside Artera. When the AI agents beta program stood up later, it drew on how we had run this one.
